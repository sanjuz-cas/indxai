# Build a Premium Tech Website for "Indxai"

Build a stunning, production-ready single-page website for **Indxai** — an AI infrastructure startup. The site must feel premium, modern, and technically impressive (think Linear, Vercel, or Stripe-level design quality). Use **React + Vite + TypeScript + Tailwind CSS**. The entire site is a single-page scroll with smooth anchor navigation.

---

## Brand Identity

- **Company Name:** Indxai
- **Domain:** indxai.tech
- **Tagline:** "Where Innovation Meets Design"
- **Location:** Coimbatore, Tamil Nadu, India (PIN 641035)
- **Email:** contact@indxai.tech
- **What they do:** Enterprise AI infrastructure — token optimization, external memory layers, and India-specific AI models.
- **Brand Color:** Orange (`#F97316` / Tailwind `orange-500`) as the primary accent on a deep black background.
- **Typography:** Use "Inter" from Google Fonts for body text. Use "Bungee" from Google Fonts for the logo only.
- **Logo:** The text "INDXAI" in Bungee font, white text on an orange-500 rounded rectangle badge.

---

## Design Requirements (CRITICAL)

The current site looks basic. The new design must be **jaw-droppingly beautiful**. Follow these principles:

1. **Dark Mode First:** Pure black (`#000`) background with zinc-900 cards. No white backgrounds anywhere.
2. **Glassmorphism:** Use `backdrop-blur`, semi-transparent borders (`border-white/10`), and layered glass panels.
3. **Gradient Glows:** Subtle radial gradient glows behind key sections (orange/amber). Use CSS `radial-gradient` and `blur-3xl` for ambient light effects.
4. **Micro-Animations:** Smooth fade-in-up on scroll (Intersection Observer), hover lifts on cards, pulsing dots, animated counters for stats, particle-like animated flow lines.
5. **Typography Hierarchy:** Giant bold headlines (text-6xl to text-9xl for hero), light gray body text (text-gray-400), orange accents for highlights.
6. **Spacing:** Generous whitespace. Sections should breathe — use `py-24` to `py-32` between major sections.
7. **Responsive:** Flawless on mobile, tablet, and desktop. Use grid layouts that collapse gracefully.
8. **Smooth Scroll:** Anchor-based navigation with smooth scrolling and an 80px header offset.
9. **NO placeholder images** — use SVG icons, abstract geometric patterns, gradient shapes, or CSS art instead.

---

## Site Structure & Content

The site is a **single-page layout** with these sections in order, each with an anchor ID:

### 1. HEADER (Fixed, sticky top) — `#home`

- Fixed navbar with black/80 background + backdrop-blur
- Left: Orange badge logo "INDXAI" (Bungee font)
- Center: Navigation links — HOME | PRODUCTS | ABOUT | CONTACT
- Links highlight with a subtle underline when the corresponding section is in viewport (use Intersection Observer to track active section)
- Mobile: Hamburger menu with a slide-in drawer

---

### 2. HERO SECTION — `#home`

- Full viewport height (100vh), centered content
- Background: Large radial gradient glow (orange, very subtle) emanating from behind the text, plus a faint arc/ring shape
- Giant text in the center, split across two lines:
  - Line 1: **"TOKEN"** — enormous (10rem+), white, font-black
  - Line 2: **"FACTORY"** — same size, white, font-black
- Below the giant text at the bottom of the viewport:
  - A thin vertical orange line (divider)
  - Text: **"Where Innovation Meets Design"** — small, uppercase, tracking-widest, gray-300

---

### 3. CORE OFFERINGS — (below hero, no separate anchor)

- Section heading: **"Core Offerings"**
- Subheading: *"We provide the foundational blocks for enterprises to build and deploy powerful, contextually-aware AI."*
- 3-column card grid:

**Card 1 — Token Factory**
- Icon: Document/code icon (SVG)
- Title: "Token Factory"
- Description: "Optimize your LLM interactions with our cutting-edge tokenization strategies. Reduce costs and latency while increasing throughput for your AI applications."

**Card 2 — External Memory Layer**
- Icon: Database/memory icon (SVG)
- Title: "External Memory Layer"
- Description: "Empower your models with long-term memory. Our secure, scalable API connects your AI to vast enterprise knowledge bases, enabling context-aware and accurate responses."

**Card 3 — Indian Context Models**
- Icon: Globe icon (SVG)
- Title: "Indian Context Models"
- Description: "Go beyond generic models. We develop and fine-tune AI that deeply understands Indian languages, cultures, and business nuances, giving you a competitive edge."

Card styling: Dark zinc-900 bg, gray-800 border, rounded-2xl, hover: border glows orange-500/50, subtle shadow lift, icon in a circular gray-800 badge.

---

### 4. PRODUCT SECTION — `#products` — "SIPHON"

This is the flagship product section. It should be the most visually impressive part of the entire site.

#### 4a. Product Hero
- Badge at top: Pulsing green/orange dot + "New Product" label in a pill
- Giant product name: **"SIPHON"** — displayed as two-tone gradient text (white→gray for "SI", orange gradient for "PHON") — or just all-caps with first part white, second part orange
- Subtitle: *"Enterprise AI Token Optimization Proxy Middleware. A frictionless layer between your applications and commercial LLM APIs that mathematically reduces token weight and strips sensitive data before it reaches external servers."*
- 3 metric badges in a row:
  - **30%+** — Cost Reduction
  - **0** — Quality Degradation
  - **<100ms** — Processing Latency
- Badges: Dark cards with orange numbers, gray labels

#### 4b. Feature Grid
- Heading: **"Engineering Specifications"**
- 5 feature cards in a grid (3 cols on desktop, stacks on mobile):

| # | Title | Description | Technical Spec |
|---|-------|-------------|----------------|
| 1 | Universal API Proxy | A single gateway that intercepts requests and normalizes them for any commercial provider — OpenAI, Anthropic, Gemini. | Standard OpenAI API schema for drop-in replacement |
| 2 | Semantic & Exact Caching | Two-tier cache to catch identical or semantically identical queries and return them instantly, bypassing external APIs entirely. | Tier 1: KV Store · Tier 2: Vector DB intent matching |
| 3 | Token Compression Engine | Algorithmic reduction of prompt context before sending upstream. Strips redundancy while preserving semantic meaning. | Dynamic thresholding (compress prompts > 500 tokens) |
| 4 | Enterprise Privacy Firewall | Automated detection and masking of PII — names, emails, internal keys — before payload leaves your VPC. | Regex + lightweight NER pipeline |
| 5 | Observability Telemetry | Granular logging of input/output tokens, cost savings, and latency per request. Non-blocking, async telemetry. | Async logging · zero main-thread blocking |

Each card: Icon (SVG, outlined), title, description, and a small technical spec label at the bottom in monospace/code style.

#### 4c. Architecture Flow Diagram
- Heading: **"How It Works"**
- Subtitle: *"Siphon sits transparently between your client apps and any commercial LLM API."*
- Horizontal animated flow (desktop), vertical stack (mobile):
  ```
  [Client App] → → → [SIPHON CORE] → → → [LLM API]
                       ┌─────────────┐     (OpenAI · Anthropic · Gemini)
                       │ 1. Privacy   │
                       │ 2. Compress  │
                       │ 3. Cache     │
                       │ 4. Route     │
                       └─────────────┘
  ```
- The Siphon core box should have an orange border glow, and the 4 pipeline steps should animate in sequentially on scroll
- Arrows should have animated particle dots flowing along them (CSS animation)
- Use Intersection Observer to trigger the staggered entrance animation

#### 4d. Tech Stack Bar
- Heading: **"Built on Open-Source Standards"**
- Horizontal row of 6 tech badges:
  - ⚡ FastAPI — Gateway
  - 🔀 LiteLLM — Routing
  - 🗄️ Redis — Exact Cache
  - 🧠 Qdrant — Vector DB
  - 📊 Langfuse — Telemetry
  - 🐳 Docker — Deployment
- Style: Dark pills with emoji icon, name in white, role in gray-500

#### 4e. Cost Delta Visualization
- Heading: **"The Cost Delta"**
- Subtitle: *"See the difference Siphon makes on 1 million tokens."*
- Two side-by-side comparison cards:

**Left Card (Without Siphon):**
- Red accent bar at top
- Label: "Without Siphon"
- Big number: **$60** (animated counter on scroll)
- Subtitle: "per 1M tokens"
- Full-width red progress bar (100%)

**Right Card (With Siphon):**
- Orange-to-green gradient bar at top
- Label: "With Siphon"
- Big number: **$38** (animated counter on scroll)
- Subtitle: "per 1M tokens"
- Orange-to-green progress bar (63%)

**Below both cards — Savings Callout:**
- Big centered number: **37%** (animated counter)
- Label: "You Save"
- Subtitle: "With zero degradation in end-user response quality and sub-100ms processing latency."

#### 4f. Product CTA
- Heading: **"Ready to Optimize Your Token Spend?"**
- Subtitle: *"Deploy Siphon entirely within your VPC. Zero data leaves your infrastructure."*
- CTA button: **"Get Early Access →"** — orange-500 bg, white text, rounded-xl, hover lift + shadow

---

### 5. ABOUT SECTION — `#about`

#### 5a. About Hero
- Heading: **"About Indxai"** (gradient orange text)
- Subtitle: "Where Innovation Meets Design"

#### 5b. Mission
- Two-column layout (text left, image right)
- Heading: **"Our Mission"** (orange text)
- Paragraph 1: "At Indxai, we are committed to delivering innovative solutions that transform ideas into reality. Our creative agency specializes in cutting-edge technology and design, ensuring your brand stands out in the digital landscape."
- Paragraph 2: "From concept to execution, we work tirelessly to ensure your success and growth, leveraging the latest in AI, tokenization, and factory automation to drive results."
- Right side: An abstract gradient square/rounded shape (orange gradient with border) — NO placeholder image, use a beautiful CSS gradient art piece or geometric pattern

#### 5c. Values
- Heading: **"Our Values"**
- 3-column grid:

| Value | Description |
|-------|-------------|
| Innovation | We push boundaries and embrace new technologies to create solutions that define the future. |
| Creativity | Our creative approach ensures every project is unique, engaging, and perfectly tailored to your vision. |
| Excellence | We deliver nothing but the best, ensuring quality and precision in every aspect of our work. |

Each card: Orange icon badge, bold title, description. Hover: border glows orange.

#### 5d. About CTA
- Heading: **"Ready to Transform Your Vision?"**
- Text: "Let's collaborate to bring your ideas to life with innovative solutions."
- Button: **"Get in Touch"** — orange CTA button

---

### 6. CONTACT SECTION — `#contact`

#### 6a. Contact Hero
- Heading: **"Get in Touch"** (gradient orange)
- Subtitle: "Let's discuss how we can help transform your vision into reality"

#### 6b. Contact Form + Info (2-column layout)

**Left: Contact Form**
- Dark card (zinc-900), rounded-2xl
- Fields: Name* (text), Email* (email), Company (text, optional), Message* (textarea)
- All inputs: Black bg, gray-700 border, orange focus border
- Submit button: **"Send Message"** — full-width orange button
- Form submits to: `https://formsubmit.co/ajax/contact@indxai.tech` (POST, JSON)
- Also CC to: `sanjayrajendranm7@gmail.com`
- Show success/error messages after submit

**Right: Contact Info**
- **Email card:** Icon + "contact@indxai.tech" (clickable mailto link)
- **Location card:** Icon + "Cbe-641 035, Tamil Nadu, India"
- **Social links:** X (Twitter) icon button — hover turns orange

#### 6c. Business Hours
- 2-column grid:
  - Weekdays: Monday–Friday, 9:00 AM – 6:00 PM EST
  - Weekend: Saturday–Sunday, Closed

---

### 7. FOOTER

- 3-column layout:
  - **Column 1 (Company):** "Indxai." heading + tagline "Where Innovation Meets Design. Transforming businesses with cutting-edge AI solutions."
  - **Column 2 (Quick Links):** Home, Products, About, Contact — smooth scroll links
  - **Column 3 (Legal):** Privacy Policy, Terms of Service — separate page routes (`/privacy`, `/terms`)
- Bottom bar: "© 2025 Indxai. All rights reserved."
- Border-top gray-800

---

## Technical Requirements

1. **Framework:** React 18+ with TypeScript, built with Vite
2. **Styling:** Tailwind CSS (latest)
3. **Routing:** React Router v6 — main page is `/`, privacy policy is `/privacy`, terms is `/terms`
4. **Fonts:** Google Fonts — "Inter" (400–900) + "Bungee" (for logo only)
5. **Animations:** Use Intersection Observer for scroll-triggered animations. CSS animations for particles, pulses, and glows. Keep it performant — no heavy JS animation libraries.
6. **SEO:** Proper meta tags, Open Graph tags, Twitter cards, structured data (JSON-LD for Organization), semantic HTML
7. **Accessibility:** Skip-to-content link, proper ARIA labels, keyboard navigation
8. **Performance:** Lazy load below-fold sections, use `content-visibility: auto` for heavy sections
9. **Contact Form:** Functional via FormSubmit.co API (already set up, just POST JSON)
10. **No placeholder images** — use only SVG icons, CSS gradients, and geometric shapes

---

## Color Palette Reference

```
Background:     #000000 (black)
Card BG:        #18181b (zinc-900)
Card Border:    #27272a (gray-800)
Body Text:      #9ca3af (gray-400)
Heading Text:   #ffffff (white)
Primary Accent: #f97316 (orange-500)
Primary Hover:  #ea580c (orange-600)
Primary Light:  #fb923c (orange-400)
Primary Glow:   rgba(249, 115, 22, 0.15)
Error:          #ef4444 (red-500)
Success:        #22c55e (green-500)
```

---

## File Structure Expected

```
src/
├── components/
│   ├── Header.tsx         (fixed navbar)
│   ├── HeroSection.tsx    (TOKEN FACTORY hero)
│   ├── CoreOfferings.tsx  (3-card grid)
│   ├── ProductPage.tsx    (Siphon — the big product section)
│   ├── AboutSection.tsx   (mission, values, CTA)
│   ├── ContactSection.tsx (form + info + hours)
│   ├── Footer.tsx         (3-col footer)
│   ├── PrivacyPolicy.tsx  (separate route)
│   └── TermsOfService.tsx (separate route)
├── App.tsx
├── main.tsx
└── index.css
```

---

## IMPORTANT REMINDERS

- The design MUST feel premium — like a YC startup's landing page, not a student project.
- Orange is the ONLY accent color. Do not introduce blues, purples, or greens (except for the success/error states and the cost delta visualization).
- Every section should have a subtle scroll-triggered entrance animation (fade up + slight translate).
- The Product/Siphon section is the star — make the architecture flow diagram and cost delta visualization genuinely impressive.
- Test on mobile — the flow diagram should stack vertically, and all text should be readable.
