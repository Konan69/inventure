# Next.js Portfolio → Recruitment Business Landing Page Refactor Plan

## Overview

Transform existing Next.js portfolio website into a modern recruitment business landing page while maintaining existing blog/admin functionality and current dark/light theme system.

## Key Requirements

- **Design**: Clean, minimalist aesthetic - maintain current theme colors and dark/light mode
- **Content**: Use exact copy from exercise specification plus customer-focused benefits
- **Functionality**: Keep existing blog/admin features, add recruitment-focused sections
- **Tech Stack**: Next.js (app router), TypeScript, Tailwind, Zustand + Immer, shadcn/ui only

## Implementation Steps

### 1. Content Strategy & Copy

**Hero Section:**

- Header: "Recruiting Without Limits"
- Sub-Header: "Speed and Scale"
- Primary Body: "We're building a new model for recruitment. One that combines revenue sharing, a marketing engine, a competitive broker community, and an AI-driven learning platform. This is recruitment rewritten for the modern era."
- Value Proposition Copy: "Stop struggling with slow hiring processes and mediocre candidates. Our platform connects your company with elite recruiters who only get paid when they deliver results. Get access to top-tier talent 3x faster than traditional agencies, with transparent pricing and guaranteed quality matches. Whether you're scaling a startup or filling executive roles, our AI-powered network finds the perfect fit while you focus on growing your business."
- Social Proof: "Trusted by 500+ companies to fill critical roles in days, not months."
- CTA: "Find Your Next Hire" / "See How It Works"

**Blog Post Rewrites** - Replace existing mock blog posts with recruitment industry content:

- "The Future of AI in Talent Acquisition"
- "Revenue Sharing Models: Transforming Recruitment Economics"
- "Building High-Performance Recruiting Teams"
- "Data-Driven Recruitment: Metrics That Matter"
- "The Evolution of Candidate Experience"

### 2. Page Structure Refactor

**Homepage Sections:**

1. Hero (with exercise copy + value prop)
2. What We Do (services overview)
3. Our Approach (revenue sharing, AI platform, community)
4. Results/Metrics (placeholder data)
5. Latest Insights (blog preview)
6. Contact CTA

**Navigation Updates:**

- Home
- Services
- Platform
- Community
- Blog (keep existing)
- Contact (keep existing)
- Admin (keep existing, hidden)

### 3. New Components to Build

**Core Components** (use shadcn/ui only):

```
/components/recruitment/
├── HeroSection.tsx
├── ServicesOverview.tsx
├── PlatformFeatures.tsx
├── CommunitySection.tsx
├── MetricsDisplay.tsx
└── CTASection.tsx
```

**Feature Suggestions for Future Community/AI Integration:**

- **Community Hub**: Member directory with recruiter profiles, success stories, peer-to-peer learning forums
- **AI Matching Dashboard**: Smart candidate-job matching interface, predictive analytics for hire success
- **Knowledge Platform**: Interactive training modules, certification tracking, best practice sharing
- **Broker Network**: Real-time collaboration tools, deal sharing, commission tracking
- **Performance Analytics**: Recruitment KPI dashboards, market insights, competitive benchmarking

### 4. State Management Updates

- Keep existing Zustand store structure
- Add recruitment-specific state if needed
- Maintain localStorage persistence for theme/preferences

### 5. Styling Guidelines

- **DO NOT create new theme** - use existing colors and theme system
- Follow current component patterns
- Ensure responsive design (mobile-first)
- Use existing dark/light mode toggle functionality
- Stick to current typography hierarchy

### 6. Content Migration

- Replace portfolio content with recruitment messaging
- Update meta descriptions and page titles
- Keep blog functionality intact but replace post content
- Update contact form for recruitment inquiries

### 7. Non-Functional Feature Additions

Add placeholder buttons for future functionality:

- "Join Our Community" (link to coming soon page)
- "Try AI Matching" (modal with "Feature coming soon")
- "View Platform Demo" (placeholder)
- "Partner With Us" (contact form)

## Technical Notes

- Use app router structure (maintain existing)
- Keep current Zustand store patterns
- Maintain existing localStorage persistence
- Use current theme variables and CSS custom properties
- Follow existing component architecture
- Ensure all new components are fully responsive
- Test dark/light mode functionality after changes

## Implementation Checklist

- [ ] Update homepage hero section with new copy
- [ ] Create new recruitment-focused components
- [ ] Replace portfolio content throughout site
- [ ] Rewrite blog posts with recruitment topics
- [ ] Update navigation structure
- [ ] Add placeholder community/AI sections
- [ ] Update contact forms for recruitment inquiries
- [ ] Test responsive design on all pages
- [ ] Verify dark/light theme consistency
- [ ] Add non-functional placeholder buttons

## Content Guidelines

- Maintain professional, confident tone
- Focus on customer benefits over features
- Use concrete metrics where possible
- Keep messaging clear and jargon-free
- Emphasize speed, quality, and results

## SPECIFIC LAYOUT REQUIREMENTS

### Homepage Layout (Exact Structure)

**1. Hero Section (Full viewport height)**

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen`
- Left Column (Content):
  - H1: "Recruiting Without Limits" (text-5xl lg:text-7xl font-bold)
  - H2: "Speed and Scale" (text-xl lg:text-2xl text-muted-foreground mb-6)
  - Body paragraph 1: Exercise copy (text-lg lg:text-xl leading-relaxed mb-6)
  - Body paragraph 2: Value prop copy (text-base lg:text-lg leading-relaxed mb-8)
  - Social proof: Small text above CTAs (text-sm text-muted-foreground mb-4)
  - CTA buttons: Primary + Secondary side by side (gap-4)
- Right Column: Large illustration/graphic placeholder (aspect-ratio-square lg:aspect-ratio-[4/3])

**2. What We Do Section**

- Container: `max-w-6xl mx-auto px-4 py-20`
- Header: Center-aligned, "What We Do" (text-3xl lg:text-4xl font-bold mb-16)
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-8`
- Each card:
  - Icon (lucide-react, h-12 w-12 mb-4)
  - Title (text-xl font-semibold mb-3)
  - Description (text-muted-foreground)
- Cards: "AI-Powered Matching", "Revenue Sharing", "Community Network"

**3. Our Approach Section**

- Container: `max-w-7xl mx-auto px-4 py-20`
- Layout: Alternating left-right content blocks
- 3 blocks total:
  - Block 1: Text left, visual right
  - Block 2: Visual left, text right
  - Block 3: Text left, visual right
- Each block: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20`
- Content: Revenue sharing details, AI platform features, broker community benefits

**4. Metrics Section**

- Background: Different from main (bg-muted/50)
- Container: `max-w-4xl mx-auto px-4 py-16 text-center`
- Grid: `grid grid-cols-2 lg:grid-cols-4 gap-8`
- Each metric:
  - Large number (text-4xl lg:text-5xl font-bold)
  - Label below (text-sm text-muted-foreground)
- Metrics: "3x Faster", "500+ Companies", "95% Success Rate", "24/7 Support"

**5. Blog Preview Section**

- Container: `max-w-6xl mx-auto px-4 py-20`
- Header: "Latest Insights" (text-3xl font-bold mb-12)
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Show 3 most recent posts in card format
- Use existing blog card component but update styling

**6. Final CTA Section**

- Background: `bg-primary text-primary-foreground`
- Container: `max-w-4xl mx-auto px-4 py-16 text-center`
- Large headline (text-3xl lg:text-4xl font-bold mb-6)
- Subtext (text-lg mb-8)
- Single prominent CTA button

### Navigation Layout

**Desktop Navigation:**

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Flex: `flex items-center justify-between h-16`
- Logo: Left side (text-xl font-bold)
- Menu: Center (hidden lg:flex space-x-8)
- Actions: Right side (theme toggle + CTA button)

**Mobile Navigation:**

- Hamburger menu (shadcn Sheet component)
- Full-screen overlay when open
- Vertical menu items with proper spacing

### New Page Layouts

**Services Page:**

- Hero: Smaller version (h-80) with page title
- Services grid: `grid grid-cols-1 lg:grid-cols-2 gap-12`
- Each service: Icon, title, detailed description, feature list
- CTA section at bottom

**Platform Page:**

- Hero with platform overview
- Feature showcase: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Screenshots/mockups section
- Integration possibilities
- Pricing teaser (non-functional)

**Community Page:**

- Hero explaining community benefits
- Member spotlight grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Success stories section
- "Join Community" CTA (non-functional)

### Component Specifications

**HeroSection.tsx:**

```
- Props: title, subtitle, body, valueProp, socialProof, primaryCTA, secondaryCTA
- Layout: Two-column responsive grid
- Animations: Fade in from bottom on scroll
- Image placeholder: aspect-ratio-[4/3] bg-muted rounded-lg
```

**ServicesOverview.tsx:**

```
- Props: services array
- Each service: { icon: LucideIcon, title: string, description: string }
- Card styling: border rounded-lg p-6 hover:shadow-lg transition
- Icon color: text-primary
```

**MetricsDisplay.tsx:**

```
- Props: metrics array
- Each metric: { value: string, label: string }
- Animation: Count up effect on scroll into view
- Responsive: 2 cols mobile, 4 cols desktop
```

### Blog Content Topics (Rewrite Instructions)

1. **"The Future of AI in Talent Acquisition"** - How AI is transforming recruitment, benefits for companies, implementation strategies
2. **"Revenue Sharing Models: Transforming Recruitment Economics"** - Why traditional agency fees don't work, benefits of performance-based pricing
3. **"Building High-Performance Recruiting Teams"** - Best practices for internal recruiting, when to outsource, team structure
4. **"Data-Driven Recruitment: Metrics That Matter"** - KPIs every company should track, using data to improve hiring
5. **"The Evolution of Candidate Experience"** - Modern expectations, how to stand out to top talent

### Responsive Breakpoints

- Mobile: 0-768px (single column layouts)
- Tablet: 768px-1024px (two column where appropriate)
- Desktop: 1024px+ (full multi-column layouts)

### Animation Specifications

- Page transitions: Fade in 0.3s ease
- Scroll animations: Elements fade/slide up on intersection
- Hover effects: Scale 1.02, shadow increase
- CTA buttons: Hover scale 1.05, color transition

### Form Updates

**Contact Form Fields:**

- Company Name (required)
- Your Role (dropdown: HR Manager, CEO, Recruiter, Other)
- Hiring Needs (textarea)
- Timeline (dropdown: Immediate, 1-3 months, 3-6 months)
- Company Size (dropdown ranges)
- Email & Phone (existing)

---

**Note**: Use only shadcn/ui components and maintain existing theme system. DO NOT create new themes or color schemes.
