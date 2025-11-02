@echo off
echo ====================================
echo   Indxai Deployment Readiness Check
echo ====================================
echo.

set "errors=0"
set "warnings=0"

echo [Checking Project Files...]
echo.

REM Check required files
if exist "package.json" (echo   [OK] package.json) else (echo   [MISSING] package.json & set /a errors+=1)
if exist "index.html" (echo   [OK] index.html) else (echo   [MISSING] index.html & set /a errors+=1)
if exist "App.tsx" (echo   [OK] App.tsx) else (echo   [MISSING] App.tsx & set /a errors+=1)
if exist "vercel.json" (echo   [OK] vercel.json) else (echo   [MISSING] vercel.json & set /a errors+=1)
if exist "components\ContactPage.tsx" (echo   [OK] ContactPage.tsx) else (echo   [MISSING] ContactPage.tsx & set /a errors+=1)
if exist "public\robots.txt" (echo   [OK] robots.txt) else (echo   [MISSING] robots.txt & set /a errors+=1)

echo.
echo [Checking Visual Assets...]
echo.

if exist "public\favicon.png" (echo   [OK] favicon.png) else (echo   [WARNING] favicon.png missing & set /a warnings+=1)
if exist "public\apple-touch-icon.png" (echo   [OK] apple-touch-icon.png) else (echo   [WARNING] apple-touch-icon.png missing & set /a warnings+=1)
if exist "public\og-image.jpg" (echo   [OK] og-image.jpg) else (echo   [WARNING] og-image.jpg missing & set /a warnings+=1)
if exist "public\img.png" (echo   [OK] img.png) else (echo   [WARNING] img.png missing & set /a warnings+=1)

echo.
echo [Testing Build...]
echo.

call npm run build > nul 2>&1
if %errorlevel% equ 0 (
    echo   [OK] Build successful
    if exist "dist\index.html" (echo   [OK] Build output created)
) else (
    echo   [ERROR] Build failed
    set /a errors+=1
)

echo.
echo ====================================
echo   Summary
echo ====================================
echo.

if %errors% gtr 0 (
    echo [ERROR] %errors% error^(s^) found
    echo Please fix errors before deploying
    echo.
    exit /b 1
) else if %warnings% gtr 0 (
    echo [WARNING] %warnings% warning^(s^) found
    echo You can deploy but consider fixing warnings
    echo See ASSET-CREATION-GUIDE.md for help
    echo.
) else (
    echo [SUCCESS] All checks passed!
    echo You're ready to deploy to Vercel!
    echo.
    echo Next steps:
    echo 1. git add .
    echo 2. git commit -m "Ready for deployment"
    echo 3. git push
    echo 4. Deploy on Vercel
    echo.
)

echo See DEPLOYMENT-CHECKLIST.md for detailed instructions
echo.
