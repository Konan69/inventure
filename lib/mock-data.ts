export interface MockBlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string | null
  author_id: string
  status: "draft" | "published" | "archived"
  tags: string[]
  reading_time: number | null
  views: number
  created_at: string
  updated_at: string
  published_at: string | null
  profiles: {
    full_name: string
    avatar_url: string | null
  }
  categories: {
    name: string
    slug: string
    color: string
  }[]
}

export interface MockCategory {
  id: string
  name: string
  slug: string
  description: string | null
  color: string
  created_at: string
}

// Mock admin credentials
export const MOCK_ADMIN = {
  email: "admin@inventure.com",
  password: "admin123",
  id: "mock-admin-id",
  name: "inventure Team",
}

// Mock categories
export const mockCategories: MockCategory[] = [
  {
    id: "1",
    name: "Talent Acquisition",
    slug: "talent-acquisition",
    description: "Modern strategies for finding and attracting top talent",
    color: "#C41E3A",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "AI & Technology",
    slug: "ai-technology",
    description: "Leveraging technology to transform recruitment processes",
    color: "#228B22",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "Recruitment Economics",
    slug: "recruitment-economics",
    description: "Business models and pricing strategies in recruiting",
    color: "#FF8C00",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Recruiting Teams",
    slug: "recruiting-teams",
    description: "Building and managing high-performance recruitment teams",
    color: "#4169E1",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    name: "Candidate Experience",
    slug: "candidate-experience",
    description: "Creating positive experiences for job candidates",
    color: "#8A2BE2",
    created_at: "2024-01-01T00:00:00Z",
  },
]

// Mock blog posts
export const mockBlogPosts: MockBlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Talent Acquisition",
    slug: "future-ai-talent-acquisition",
    excerpt:
      "How artificial intelligence is revolutionizing recruitment processes, from initial screening to candidate matching and predictive analytics.",
    content: `# The Future of AI in Talent Acquisition

Artificial intelligence is no longer a futuristic concept—it's actively reshaping how companies find, evaluate, and hire talent. From automated resume screening to predictive analytics that forecast candidate success, AI is transforming every stage of the recruitment process.

## The Current State of AI in Recruiting

Today's recruitment landscape is increasingly data-driven. AI tools can process thousands of applications in minutes, identify skill gaps, and even predict which candidates are most likely to succeed in specific roles. But the real power of AI lies not in replacing human judgment, but in augmenting it.

## Automated Screening and Matching

One of the most immediate impacts of AI is in the initial screening process. Natural language processing algorithms can analyze resumes, cover letters, and even social media profiles to identify candidates who possess the right combination of skills, experience, and cultural fit. This allows recruiters to focus their time and energy on the most promising candidates.

## Predictive Analytics for Hiring Success

Perhaps the most exciting development is the use of machine learning to predict hiring outcomes. By analyzing historical data from successful hires, AI can identify patterns that correlate with long-term success. This includes factors like communication style, problem-solving approaches, and even subtle indicators of cultural fit.

## Bias Reduction and Fairness

One of the most important benefits of AI in recruitment is its potential to reduce unconscious bias. When properly trained and monitored, AI systems can evaluate candidates based on objective criteria, helping to create more diverse and inclusive workplaces.

## The Human-AI Partnership

The future of recruitment isn't about choosing between human recruiters and AI systems—it's about creating effective partnerships between them. AI excels at processing large amounts of data and identifying patterns, while humans bring empathy, intuition, and contextual understanding.

## Challenges and Considerations

As we integrate AI more deeply into recruitment processes, we must address important challenges. These include ensuring algorithmic transparency, maintaining data privacy, and continuously monitoring for bias in training data.

## Looking Ahead

The next generation of AI recruitment tools will be even more sophisticated, incorporating real-time learning from hiring outcomes, integration with performance management systems, and even predictive modeling for team dynamics and cultural fit.

AI is not replacing recruiters—it's empowering them to make better decisions faster, creating more efficient and effective hiring processes that benefit both companies and candidates.`,
    featured_image: "/placeholder.svg?height=400&width=800",
    author_id: "mock-admin-id",
    status: "published",
    tags: ["AI", "recruitment technology", "talent acquisition", "predictive analytics"],
    reading_time: 6,
    views: 2450,
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
    published_at: "2024-01-15T10:00:00Z",
    profiles: {
      full_name: "inventure Team",
      avatar_url: "/placeholder.svg?height=100&width=100",
    },
    categories: [
      { name: "AI & Technology", slug: "ai-technology", color: "#228B22" },
      { name: "Talent Acquisition", slug: "talent-acquisition", color: "#C41E3A" },
    ],
  },
  {
    id: "2",
    title: "Revenue Sharing Models: Transforming Recruitment Economics",
    slug: "revenue-sharing-models-transforming-recruitment",
    excerpt:
      "Why traditional agency fees don't work for modern businesses and how performance-based pricing creates better outcomes for everyone.",
    content: `# Revenue Sharing Models: Transforming Recruitment Economics

The traditional recruitment industry operates on a model that's fundamentally misaligned with the needs of modern businesses. Fixed fees and retainers create incentives that don't necessarily prioritize quality or speed. Revenue sharing models offer a more equitable approach that aligns recruiter incentives with business outcomes.

## The Problem with Traditional Pricing

Traditional recruitment agencies typically charge a percentage of the candidate's first-year salary—usually 20-30%. This model creates several problems:

1. **Misaligned Incentives**: Agencies get paid the same amount whether a hire succeeds or fails
2. **High Pressure**: Recruiters may rush placements to maximize revenue
3. **Limited Access**: Smaller companies often can't afford traditional agency fees
4. **Poor Quality Control**: There's little accountability for hiring outcomes

## The Revenue Sharing Solution

Revenue sharing flips the traditional model on its head. Instead of charging upfront fees, recruiters only get paid when their placements succeed. This creates a direct alignment between recruiter performance and business results.

## How It Works in Practice

In a revenue sharing model:
- Recruiters invest their time and expertise upfront (often at reduced rates or pro bono)
- They only get paid when a candidate is hired and performs successfully
- Payment is typically a percentage of the candidate's ongoing compensation
- Success is measured by retention milestones (90 days, 6 months, 1 year)

## Benefits for Businesses

Companies benefit in multiple ways:
- **Reduced Risk**: Only pay for successful hires
- **Higher Quality**: Recruiters are more selective and thorough
- **Better Retention**: Natural selection favors candidates who are truly committed
- **Scalable Costs**: Budget aligns with actual hiring success

## Benefits for Recruiters

Top performers thrive in this model:
- **Higher Earnings**: Successful recruiters can earn significantly more than traditional commissions
- **Professional Development**: Focus shifts to building long-term relationships and expertise
- **Portfolio Building**: Success stories become powerful marketing tools
- **Sustainable Business**: Model encourages quality over quantity

## Implementation Challenges

While compelling, revenue sharing models require careful implementation:
- **Clear Success Metrics**: Define what constitutes a "successful" hire
- **Payment Terms**: Structure payouts to balance recruiter cash flow with business risk
- **Legal Frameworks**: Ensure compliance with employment and compensation laws
- **Technology Infrastructure**: Track and automate payment calculations

## Real-World Success Stories

Companies that have adopted revenue sharing models report:
- 40-60% reduction in recruitment costs
- 25-35% improvement in hire quality and retention
- Faster time-to-hire for critical positions
- More diverse candidate pools

## The Future of Recruitment Pricing

As the recruitment industry evolves, revenue sharing models are becoming increasingly common. They represent a fundamental shift from transaction-based to outcome-based business relationships, creating more sustainable and mutually beneficial partnerships between recruiters and the companies they serve.

This isn't just a pricing model—it's a new way of thinking about how recruitment should work in the modern economy.`,
    featured_image: "/placeholder.svg?height=400&width=800",
    author_id: "mock-admin-id",
    status: "published",
    tags: ["revenue sharing", "recruitment pricing", "business model", "performance-based"],
    reading_time: 7,
    views: 1890,
    created_at: "2024-01-10T14:30:00Z",
    updated_at: "2024-01-10T14:30:00Z",
    published_at: "2024-01-10T14:30:00Z",
    profiles: {
      full_name: "inventure Team",
      avatar_url: "/placeholder.svg?height=100&width=100",
    },
    categories: [
      { name: "Recruitment Economics", slug: "recruitment-economics", color: "#FF8C00" },
    ],
  },
  {
    id: "3",
    title: "Building High-Performance Recruiting Teams",
    slug: "building-high-performance-recruiting-teams",
    excerpt:
      "Best practices for assembling and managing recruiting teams that consistently deliver exceptional results and drive business growth.",
    content: `# Building High-Performance Recruiting Teams

Building a world-class recruiting team isn't just about hiring the right people—it's about creating a system that consistently attracts top talent, develops recruiter skills, and delivers measurable business impact. High-performance recruiting teams are strategic assets that drive company growth and competitive advantage.

## The Foundation: Right People, Right Roles

The first step in building a high-performance team is ensuring you have the right people in the right roles. This means understanding the different types of recruiters needed and matching skills to responsibilities.

### Specialist vs. Generalist Roles
- **Technical Recruiters**: Deep expertise in specific domains (engineering, sales, etc.)
- **Generalist Recruiters**: Broad skills across multiple functions
- **Research Specialists**: Expert at candidate identification and market mapping
- **Relationship Managers**: Focus on building long-term partnerships with hiring managers

## Skills That Matter Most

Beyond technical recruiting skills, successful recruiters need:
- **Business Acumen**: Understanding how hiring impacts business outcomes
- **Communication Excellence**: Clear, persuasive communication at all levels
- **Data-Driven Decision Making**: Using metrics to guide recruitment strategy
- **Emotional Intelligence**: Building relationships and reading candidate motivations
- **Market Knowledge**: Understanding industry trends and competitive landscapes

## Training and Development

Continuous learning is essential for maintaining high performance:
- **Structured Onboarding**: Comprehensive training programs for new hires
- **Skills Development**: Regular workshops on emerging tools and techniques
- **Certification Programs**: Industry-recognized credentials and specializations
- **Cross-Training**: Exposure to different recruiting methodologies and domains

## Technology and Tools

High-performance teams leverage technology effectively:
- **ATS Integration**: Seamless workflow between recruitment tools and HR systems
- **AI-Powered Tools**: Automated screening, matching, and predictive analytics
- **Analytics Platforms**: Real-time dashboards for tracking recruitment metrics
- **Collaboration Tools**: Platforms for team coordination and knowledge sharing

## Performance Management

Measuring and improving performance requires:
- **Clear KPIs**: Time-to-fill, quality-of-hire, retention rates, cost-per-hire
- **Regular Feedback**: Weekly one-on-ones and monthly performance reviews
- **Incentive Structures**: Performance-based compensation tied to business outcomes
- **Career Progression**: Clear paths for advancement and skill development

## Culture and Values

The most successful teams share common cultural elements:
- **Collaboration Over Competition**: Team members support each other's success
- **Innovation Mindset**: Constantly exploring new approaches and technologies
- **Candidate-Centric Focus**: Prioritizing positive candidate experiences
- **Data-Driven Culture**: Using evidence to guide decisions and improvements

## Scaling for Growth

As teams grow, maintaining performance requires:
- **Standardized Processes**: Consistent methodologies across the team
- **Knowledge Management**: Systems for capturing and sharing best practices
- **Leadership Development**: Training managers to lead high-performance teams
- **Quality Assurance**: Regular audits and feedback mechanisms

## Measuring Success

Track these key indicators of team performance:
- **Hiring Quality**: New hire performance and retention rates
- **Speed**: Time from requisition to offer acceptance
- **Cost Efficiency**: Cost-per-hire and overall recruitment ROI
- **Candidate Experience**: Satisfaction scores and feedback
- **Team Satisfaction**: Retention rates and engagement scores

Building a high-performance recruiting team is an ongoing process that requires commitment, investment, and continuous improvement. But the payoff—faster, better, more cost-effective hiring—makes it essential for companies serious about attracting and retaining top talent.`,
    featured_image: "/placeholder.svg?height=400&width=800",
    author_id: "mock-admin-id",
    status: "published",
    tags: ["recruiting teams", "performance management", "talent acquisition", "team building"],
    reading_time: 8,
    views: 2100,
    created_at: "2024-01-05T09:15:00Z",
    updated_at: "2024-01-05T09:15:00Z",
    published_at: "2024-01-05T09:15:00Z",
    profiles: {
      full_name: "inventure Team",
      avatar_url: "/placeholder.svg?height=100&width=100",
    },
    categories: [
      { name: "Recruiting Teams", slug: "recruiting-teams", color: "#4169E1" },
      { name: "Talent Acquisition", slug: "talent-acquisition", color: "#C41E3A" },
    ],
  },
  {
    id: "4",
    title: "Data-Driven Recruitment: Metrics That Matter",
    slug: "data-driven-recruitment-metrics-that-matter",
    excerpt:
      "The key performance indicators every recruitment leader should track and how to use data to optimize hiring processes and outcomes.",
    content: `# Data-Driven Recruitment: Metrics That Matter

In the era of big data and analytics, recruitment has become increasingly quantitative. The most successful recruitment organizations don't just rely on intuition—they use data to drive decisions, optimize processes, and demonstrate ROI. But with so many possible metrics to track, it's crucial to focus on the ones that truly matter.

## The Foundation: Quality of Hire

The most important metric isn't how fast or cheap you hire—it's how well your new hires perform:

### Quality of Hire Components
- **Performance Ratings**: Manager assessments of new hire performance (6-month and 12-month marks)
- **Retention Rates**: Percentage of new hires still employed after 1 year
- **Promotion Rates**: How often new hires advance within the organization
- **Peer Performance**: How new hires compare to peers in similar roles

## Time Metrics: Speed and Efficiency

While speed shouldn't come at the expense of quality, efficient processes are crucial:

### Key Time Metrics
- **Time to Fill**: Days from job posting to offer acceptance
- **Time to Hire**: Days from job requisition to start date
- **Interview to Offer**: Days from first interview to offer
- **Offer to Acceptance**: Days from offer to candidate acceptance

## Cost Metrics: ROI and Efficiency

Understanding the true cost of recruitment is essential for optimization:

### Essential Cost Metrics
- **Cost Per Hire**: Total recruitment cost divided by number of hires
- **Recruitment ROI**: Revenue generated by new hires vs. recruitment investment
- **Cost Per Application**: Cost to generate each job application
- **Cost Per Source**: Cost effectiveness of different recruiting channels

## Source Effectiveness

Different recruiting sources yield different results:

### Source Analytics
- **Application Volume**: Number of applications per source
- **Quality Rate**: Percentage of high-quality candidates from each source
- **Conversion Rate**: Percentage of applicants who become hires
- **Time to Hire**: Average time for candidates from different sources
- **Diversity Metrics**: Demographic breakdown by recruiting source

## Candidate Experience Metrics

Positive candidate experiences drive better outcomes:

### Experience Indicators
- **Application Completion Rate**: Percentage of started applications that are completed
- **Interview Show Rate**: Percentage of scheduled interviews that occur
- **Offer Acceptance Rate**: Percentage of offers that are accepted
- **Time to Feedback**: Days from application/interview to response
- **Candidate Satisfaction Scores**: Feedback collected throughout the process

## Diversity and Inclusion Metrics

Measuring DEI in recruitment processes:

### Diversity Tracking
- **Application Diversity**: Demographic breakdown of applicant pools
- **Interview Diversity**: Diversity at each stage of the hiring process
- **Hire Diversity**: Demographic composition of new hires
- **Retention by Demographics**: Retention rates across different groups
- **Pay Equity**: Salary distribution across demographic groups

## Predictive Metrics

Using data to forecast future performance:

### Predictive Indicators
- **Pipeline Health**: Number of qualified candidates in various stages
- **Market Responsiveness**: Speed of response to new job openings
- **Competitive Intelligence**: How your metrics compare to industry benchmarks
- **Trend Analysis**: Patterns in hiring success over time

## Building a Data-Driven Culture

Implementing effective metrics requires:

### Implementation Strategies
- **Clear Definitions**: Standardized definitions for all key metrics
- **Automated Tracking**: Tools and systems that capture data automatically
- **Regular Reporting**: Consistent dashboards and reporting schedules
- **Actionable Insights**: Connecting metrics to specific improvement actions
- **Continuous Optimization**: Using data to test and refine recruitment processes

## Common Pitfalls to Avoid

### Measurement Mistakes
- **Vanity Metrics**: Tracking impressive numbers that don't drive decisions
- **Incomplete Attribution**: Not accounting for all factors influencing outcomes
- **Short-term Focus**: Optimizing for immediate results at the expense of long-term success
- **Data Overload**: Tracking too many metrics without focus or prioritization

## Getting Started

For organizations new to data-driven recruitment:

### First Steps
1. **Identify Key Business Goals**: What outcomes matter most to your organization?
2. **Map Current Processes**: Document your current recruitment workflow
3. **Select 5-7 Key Metrics**: Focus on metrics directly tied to business outcomes
4. **Implement Tracking**: Set up systems to capture and analyze data
5. **Establish Baselines**: Understand your current performance levels
6. **Set Improvement Targets**: Define realistic goals for key metrics
7. **Monitor and Adjust**: Regularly review performance and adjust strategies

Data-driven recruitment isn't about collecting more data—it's about making better decisions that drive better business outcomes. By focusing on the metrics that matter most and using them to guide continuous improvement, organizations can build recruitment processes that consistently deliver exceptional results.`,
    featured_image: "/placeholder.svg?height=400&width=800",
    author_id: "mock-admin-id",
    status: "published",
    tags: ["recruitment metrics", "data analytics", "KPI", "performance tracking"],
    reading_time: 9,
    views: 3200,
    created_at: "2024-01-03T11:20:00Z",
    updated_at: "2024-01-03T11:20:00Z",
    published_at: "2024-01-03T11:20:00Z",
    profiles: {
      full_name: "inventure Team",
      avatar_url: "/placeholder.svg?height=100&width=100",
    },
    categories: [
      { name: "AI & Technology", slug: "ai-technology", color: "#228B22" },
      { name: "Talent Acquisition", slug: "talent-acquisition", color: "#C41E3A" },
    ],
  },
  {
    id: "5",
    title: "The Evolution of Candidate Experience",
    slug: "evolution-candidate-experience",
    excerpt:
      "How modern candidates evaluate employers and what companies can do to create exceptional experiences that attract top talent.",
    content: `# The Evolution of Candidate Experience

The candidate experience has evolved dramatically in recent years. Today's top talent evaluates employers as rigorously as companies evaluate candidates. A positive candidate experience isn't just good practice—it's essential for attracting and retaining the best people in an increasingly competitive talent market.

## The Modern Candidate Journey

Understanding the complete candidate experience requires looking at every touchpoint:

### Pre-Application Phase
Candidates begin their evaluation before they even apply. They research your company culture, review employee feedback on platforms like Glassdoor, and assess your employer brand across social media and professional networks.

### Application Process
The application itself is often the first direct interaction:
- **Frictionless Design**: Easy-to-use application forms and clear instructions
- **Mobile Optimization**: Seamless experience across all devices
- **Progress Indicators**: Clear feedback on application status
- **Personalization**: Tailored questions based on role and background

### Communication and Feedback
Timely, transparent communication builds trust:
- **Acknowledgment**: Immediate confirmation of application receipt
- **Regular Updates**: Consistent communication about application status
- **Constructive Feedback**: Helpful feedback for unsuccessful candidates
- **Personal Touch**: Human communication rather than automated responses

## The Interview Experience

Interviews are the most critical touchpoint:

### Interview Best Practices
- **Preparation Support**: Providing clear information about the process and expectations
- **Skilled Interviewers**: Well-trained interviewers who represent your culture
- **Structured Process**: Consistent evaluation criteria and interview formats
- **Diverse Perspectives**: Multiple interviewers to reduce bias and gain comprehensive insights

## Assessment and Evaluation

Modern assessment methods balance efficiency with candidate experience:

### Effective Assessment Strategies
- **Skills-Based Testing**: Practical evaluations that demonstrate real abilities
- **Portfolio Reviews**: Allowing candidates to showcase their best work
- **Peer Interactions**: Informal meetings with potential colleagues
- **Realistic Previews**: Honest discussions about role expectations and challenges

## Decision and Offer Process

The final stages can make or break the experience:

### Offer Process Excellence
- **Timely Decisions**: Respecting candidate timelines and providing clear expectations
- **Competitive Offers**: Market-rate compensation with comprehensive benefits
- **Clear Terms**: Transparent discussion of role responsibilities and growth opportunities
- **Professional Presentation**: Well-crafted offer letters and professional negotiations

## Post-Decision Communication

Even after decisions are made, the experience continues:

### Post-Process Engagement
- **Timely Notifications**: Prompt communication of final decisions
- **Constructive Feedback**: Valuable insights for unsuccessful candidates
- **Stay in Touch**: Building relationships for future opportunities
- **Referral Programs**: Encouraging successful candidates to refer others

## Measuring Candidate Experience

Quantifying the candidate experience provides insights for improvement:

### Key Metrics to Track
- **Application Completion Rates**: Percentage of started applications that are finished
- **Interview Show Rates**: Percentage of scheduled interviews that occur
- **Offer Acceptance Rates**: Percentage of offers that are accepted
- **Time to Hire**: Total days from application to start date
- **Candidate Satisfaction Scores**: Feedback collected throughout the process
- **Employer Brand Metrics**: Social media sentiment and review platform ratings

## The ROI of Great Candidate Experience

Investing in candidate experience delivers measurable returns:

### Business Impact
- **Higher Quality Hires**: Better candidates attracted to positive experiences
- **Faster Time to Hire**: Streamlined processes reduce hiring timelines
- **Lower Cost Per Hire**: More efficient processes and higher acceptance rates
- **Stronger Employer Brand**: Positive experiences drive word-of-mouth marketing
- **Higher Employee Retention**: Candidates who have great experiences become loyal employees

## Technology's Role in Candidate Experience

Modern tools can enhance or hinder the experience:

### Technology Integration
- **Applicant Tracking Systems**: User-friendly platforms that provide transparency
- **Video Interviewing**: Convenient remote interviewing with professional presentation
- **AI-Powered Matching**: Efficient candidate-job matching with human oversight
- **Mobile Apps**: Dedicated apps for application tracking and communication
- **Automated Workflows**: Streamlined processes that reduce manual effort

## Building a Candidate-Centric Culture

Great candidate experience requires cultural commitment:

### Organizational Changes
- **Leadership Buy-In**: Executive support for candidate experience initiatives
- **Cross-Functional Collaboration**: HR, hiring managers, and recruiters working together
- **Continuous Training**: Regular training on best practices and emerging trends
- **Feedback Integration**: Using candidate feedback to drive continuous improvement
- **Success Measurement**: Regular assessment of candidate experience effectiveness

## The Competitive Advantage

In today's talent market, candidate experience is a key differentiator:

### Strategic Benefits
- **Access to Top Talent**: Exceptional experiences attract the best candidates
- **Reduced Hiring Risk**: Better processes lead to better hiring decisions
- **Cost Efficiency**: Improved processes reduce recruitment costs over time
- **Employee Advocacy**: Great experiences create brand ambassadors
- **Sustainable Growth**: Strong employer brand supports long-term business growth

## Future Trends in Candidate Experience

Looking ahead, several trends will shape candidate experiences:

### Emerging Practices
- **Virtual Reality Interviews**: Immersive remote interviewing experiences
- **AI-Powered Personalization**: Highly customized application and interview processes
- **Real-Time Feedback**: Instant candidate feedback during the process
- **Skills-Based Hiring**: Focus on demonstrated abilities over traditional credentials
- **Holistic Assessment**: Comprehensive evaluation of cultural fit and potential

Creating exceptional candidate experiences requires commitment, but the payoff—access to better talent, faster hiring, and stronger employer brand—is worth the investment. In an increasingly competitive talent market, companies that prioritize candidate experience will have a significant advantage in attracting and securing top talent.`,
    featured_image: "/placeholder.svg?height=400&width=800",
    author_id: "mock-admin-id",
    status: "published",
    tags: ["candidate experience", "employer branding", "recruitment process", "talent attraction"],
    reading_time: 10,
    views: 2750,
    created_at: "2024-01-01T08:00:00Z",
    updated_at: "2024-01-01T08:00:00Z",
    published_at: "2024-01-01T08:00:00Z",
    profiles: {
      full_name: "inventure Team",
      avatar_url: "/placeholder.svg?height=100&width=100",
    },
    categories: [
      { name: "Candidate Experience", slug: "candidate-experience", color: "#8A2BE2" },
      { name: "Talent Acquisition", slug: "talent-acquisition", color: "#C41E3A" },
    ],
  },
]

// Mock authentication state
// import { cookies } from "next/headers"

// export const mockAuth = {
//   signIn: async (email: string, password: string) => {
//     if (email === MOCK_ADMIN.email && password === MOCK_ADMIN.password) {
//       // Set authentication cookie
//       cookies().set("admin-authenticated", "true", {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "lax",
//         maxAge: 60 * 60 * 24 * 7, // 7 days
//       })
//       return { success: true }
//     }
//     return { error: "Invalid email or password" }
//   },

//   signOut: async () => {
//     cookies().delete("admin-authenticated")
//   },

//   getUser: async () => {
//     const isAuth = cookies().get("admin-authenticated")?.value === "true"
//     return isAuth ? { id: MOCK_ADMIN.id, email: MOCK_ADMIN.email, name: MOCK_ADMIN.name } : null
//   },

//   isAuthenticated: async () => {
//     const isAuth = cookies().get("admin-authenticated")?.value === "true"
//     return isAuth
//   },
// }

// Mock blog operations
export const mockBlogOperations = {
  signIn: (email: string, password: string) => {
    if (email === MOCK_ADMIN.email && password === MOCK_ADMIN.password) {
      return { success: true }
    }
    return { error: "Invalid email or password" }
  },
  signOut: () => {
    return { success: true }
  },
  getUser: () => {
    return { id: MOCK_ADMIN.id, email: MOCK_ADMIN.email, name: MOCK_ADMIN.name }
  },
  isAuthenticated: () => {
    return true
  },
  getAllPosts: () => [...mockBlogPosts],

  getPublishedPosts: (limit?: number) => {
    const published = mockBlogPosts.filter((post) => post.status === "published")
    return limit ? published.slice(0, limit) : published
  },

  getPostBySlug: (slug: string) => {
    return mockBlogPosts.find((post) => post.slug === slug && post.status === "published") || null
  },

  getFeaturedPosts: (limit = 3) => {
    return mockBlogPosts
      .filter((post) => post.status === "published")
      .sort((a, b) => b.views - a.views)
      .slice(0, limit)
  },

  createPost: (postData: Partial<MockBlogPost>) => {
    const newPost: MockBlogPost = {
      id: Date.now().toString(),
      title: postData.title || "",
      slug:
        postData.title
          ?.toLowerCase()
          .replace(/[^a-z0-9 -]/g, "")
          .replace(/\s+/g, "-") || "",
      excerpt: postData.excerpt || "",
      content: postData.content || "",
      featured_image: postData.featured_image || null,
      author_id: MOCK_ADMIN.id,
      status: (postData.status as any) || "draft",
      tags: postData.tags || [],
      reading_time: postData.content ? Math.ceil(postData.content.split(" ").length / 200) : 1,
      views: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: postData.status === "published" ? new Date().toISOString() : null,
      profiles: {
        full_name: MOCK_ADMIN.name,
        avatar_url: "/placeholder.svg?height=100&width=100",
      },
      categories: postData.categories || [],
    }

    mockBlogPosts.unshift(newPost)
    return { success: "Blog post created successfully!" }
  },

  updatePost: (id: string, postData: Partial<MockBlogPost>) => {
    const index = mockBlogPosts.findIndex((post) => post.id === id)
    if (index === -1) {
      return { error: "Post not found" }
    }

    const updatedPost = {
      ...mockBlogPosts[index],
      ...postData,
      updated_at: new Date().toISOString(),
      published_at: postData.status === "published" ? new Date().toISOString() : mockBlogPosts[index].published_at,
    }

    if (postData.content) {
      updatedPost.reading_time = Math.ceil(postData.content.split(" ").length / 200)
    }

    mockBlogPosts[index] = updatedPost
    return { success: "Blog post updated successfully!" }
  },

  deletePost: (id: string) => {
    const index = mockBlogPosts.findIndex((post) => post.id === id)
    if (index === -1) {
      return { error: "Post not found" }
    }

    mockBlogPosts.splice(index, 1)
    return { success: "Blog post deleted successfully!" }
  },
}
