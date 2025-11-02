# Deployment Readiness Verification Script
# Run this before deploying to Vercel

Write-Host "====================================" -ForegroundColor Cyan
Write-Host "  Indxai Deployment Readiness Check" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

$allGood = $true
$warnings = @()
$errors = @()

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Run this script from the project root." -ForegroundColor Red
    exit 1
}

Write-Host "📦 Checking Project Files..." -ForegroundColor Yellow
Write-Host ""

# Check required files
$requiredFiles = @(
    "package.json",
    "index.html",
    "App.tsx",
    "vercel.json",
    "components/ContactPage.tsx",
    "components/Footer.tsx",
    "public/robots.txt"
)

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file - MISSING" -ForegroundColor Red
        $errors += "Missing required file: $file"
        $allGood = $false
    }
}

Write-Host ""
Write-Host "🎨 Checking Visual Assets..." -ForegroundColor Yellow
Write-Host ""

# Check optional but recommended assets
$assets = @(
    @{path="public/favicon.png"; name="Favicon"; priority="HIGH"},
    @{path="public/apple-touch-icon.png"; name="Apple Touch Icon"; priority="HIGH"},
    @{path="public/og-image.jpg"; name="Open Graph Image"; priority="MEDIUM"},
    @{path="public/img.png"; name="About Section Image"; priority="MEDIUM"}
)

foreach ($asset in $assets) {
    if (Test-Path $asset.path) {
        Write-Host "  ✓ $($asset.name)" -ForegroundColor Green
    } else {
        if ($asset.priority -eq "HIGH") {
            Write-Host "  ⚠ $($asset.name) - MISSING (Priority: $($asset.priority))" -ForegroundColor Yellow
            $warnings += "Missing $($asset.name) - See ASSET-CREATION-GUIDE.md"
        } else {
            Write-Host "  ⚠ $($asset.name) - MISSING (Priority: $($asset.priority))" -ForegroundColor DarkYellow
            $warnings += "Optional: Missing $($asset.name)"
        }
    }
}

Write-Host ""
Write-Host "⚙️  Checking Configuration..." -ForegroundColor Yellow
Write-Host ""

# Check for placeholder values in index.html
if (Test-Path "index.html") {
    $indexContent = Get-Content "index.html" -Raw
    
    if ($indexContent -match "G-XXXXXXXXXX") {
        Write-Host "  ⚠ Google Analytics ID is still placeholder" -ForegroundColor Yellow
        $warnings += "Update Google Analytics ID in index.html or remove it"
    } else {
        Write-Host "  ✓ Google Analytics ID configured" -ForegroundColor Green
    }
    
    if ($indexContent -match "contact@indxai.com") {
        Write-Host "  ✓ Contact email configured" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Contact email not found" -ForegroundColor Red
        $errors += "Email configuration issue in index.html"
        $allGood = $false
    }
}

# Check package.json
if (Test-Path "package.json") {
    $packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
    
    if ($packageJson.name -eq "indxai-website") {
        Write-Host "  ✓ Package name updated" -ForegroundColor Green
    } else {
        Write-Host "  ⚠ Package name not updated to 'indxai-website'" -ForegroundColor Yellow
        $warnings += "Consider updating package.json name field"
    }
    
    if ($packageJson.scripts.build) {
        Write-Host "  ✓ Build script exists" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Build script missing" -ForegroundColor Red
        $errors += "Missing build script in package.json"
        $allGood = $false
    }
}

Write-Host ""
Write-Host "🔨 Testing Build..." -ForegroundColor Yellow
Write-Host ""

try {
    $buildOutput = npm run build 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✓ Build successful" -ForegroundColor Green
        
        # Check build output
        if (Test-Path "dist/index.html") {
            $distSize = (Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
            Write-Host "  ✓ Build output size: $([math]::Round($distSize, 2)) MB" -ForegroundColor Green
            
            if ($distSize -gt 5) {
                $warnings += "Build size is large (>5MB). Consider optimizing assets."
            }
        }
    } else {
        Write-Host "  ✗ Build failed - check errors above" -ForegroundColor Red
        $errors += "Build failed - fix compilation errors before deploying"
        $allGood = $false
    }
} catch {
    Write-Host "  ✗ Build test failed: $_" -ForegroundColor Red
    $errors += "Cannot run build - ensure npm dependencies are installed"
    $allGood = $false
}

Write-Host ""
Write-Host "📧 Email Configuration..." -ForegroundColor Yellow
Write-Host ""

Write-Host "  ⚠ Remember to verify contact@indxai.com is accessible" -ForegroundColor Yellow
Write-Host "  ⚠ After deployment, activate FormSubmit by submitting test form" -ForegroundColor Yellow

Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "  Summary" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

if ($errors.Count -gt 0) {
    Write-Host "❌ ERRORS FOUND ($($errors.Count)):" -ForegroundColor Red
    foreach ($error in $errors) {
        Write-Host "   • $error" -ForegroundColor Red
    }
    Write-Host ""
}

if ($warnings.Count -gt 0) {
    Write-Host "⚠️  WARNINGS ($($warnings.Count)):" -ForegroundColor Yellow
    foreach ($warning in $warnings) {
        Write-Host "   • $warning" -ForegroundColor Yellow
    }
    Write-Host ""
}

if ($allGood -and $warnings.Count -eq 0) {
    Write-Host "✅ ALL CHECKS PASSED!" -ForegroundColor Green
    Write-Host ""
    Write-Host "You're ready to deploy to Vercel! 🚀" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. git add ." -ForegroundColor White
    Write-Host "2. git commit -m `"Ready for deployment`"" -ForegroundColor White
    Write-Host "3. git push" -ForegroundColor White
    Write-Host "4. Deploy on Vercel (see DEPLOYMENT-CHECKLIST.md)" -ForegroundColor White
} elseif ($allGood) {
    Write-Host "✅ READY WITH WARNINGS" -ForegroundColor Green
    Write-Host ""
    Write-Host "You can deploy, but consider addressing the warnings above." -ForegroundColor Yellow
    Write-Host "See DEPLOYMENT-CHECKLIST.md and ASSET-CREATION-GUIDE.md for details." -ForegroundColor Yellow
} else {
    Write-Host "❌ NOT READY FOR DEPLOYMENT" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please fix the errors above before deploying." -ForegroundColor Red
    Write-Host "See DEPLOYMENT-CHECKLIST.md for help." -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""
