const AT_A_GLANCE = [
  { label: 'Headquarters', value: 'Flat 76, Croydon High Street, UK' },
  { label: 'Project reach', value: 'Multiple clients across countries' },
  { label: 'Core Focus', value: 'Web, SaaS, Software, AI & Data, Marketing' },
  { label: 'Platforms', value: 'Custom code, WordPress, Shopify, iOS & Android' },
  { label: 'Established', value: '2020' },
]

const PROCESS_STEPS = [
  { step: '01', title: 'Discover', text: 'We listen to your goals, audience and budget, then recommend the right solution.' },
  { step: '02', title: 'Plan & Design', text: 'Clear scope, timeline and modern designs you approve before development begins.' },
  { step: '03', title: 'Develop', text: 'Clean, tested development with regular progress updates along the way.' },
  { step: '04', title: 'Launch', text: 'Careful testing, go-live and a smooth handover, including training if needed.' },
  { step: '05', title: 'Support & Grow', text: 'Ongoing maintenance, updates and marketing to keep you moving forward.' },
]

const WHY_US = [
  { title: 'One-Stop Partner', text: 'Design, development, marketing and support — all from a single team.' },
  { title: 'Affordable Pricing', text: 'Professional quality at competitive, transparent prices with no hidden costs.' },
  { title: 'Client-First Communication', text: 'Regular updates, quick responses and direct access to your project team.' },
  { title: 'Modern & Scalable', text: 'Mobile-friendly, SEO-ready solutions built to grow with your business.' },
]

export default function AboutPage() {
  return (
    <div className="content-page">
      <div className="eyebrow">Who We Are</div>
      <h1>About Selections Technologies</h1>
      <p className="lead">
        Established in 2020, Selections Technologies works with clients across multiple countries and
        industries. We build websites, online stores, mobile apps, SaaS products and custom software,
        and provide AI automation, data services, SEO, digital marketing and brand design.
      </p>
      <p className="lead">
        Our experience spans projects for businesses at different stages — from emerging companies
        establishing an online presence to established teams improving their digital operations. We
        approach each client with a clear scope, suitable technology and a practical delivery plan. Our
        team supports projects through strategy, design, development, launch and ongoing improvement,
        serving clients in the UK, Pakistan and worldwide.
      </p>

      <div className="mission-grid">
        <div className="mission-card dark">
          <h3>Our Mission</h3>
          <p>
            To give every business — small or large — access to modern, affordable and high-quality
            digital solutions that bring real, measurable results.
          </p>
        </div>
        <div className="mission-card">
          <h3>Our Vision</h3>
          <p>
            To be a trusted international technology partner, known for dependable delivery, clear
            communication and lasting client relationships.
          </p>
        </div>
      </div>

      <h2>At a Glance</h2>
      <div className="glance-list">
        {AT_A_GLANCE.map((item) => (
          <div className="glance-row" key={item.label}>
            <span className="glance-label">{item.label}</span>
            <span className="glance-value">{item.value}</span>
          </div>
        ))}
      </div>

      <h2>Simple, Transparent, Reliable</h2>
      <div className="process-list">
        {PROCESS_STEPS.map((item) => (
          <div className="process-step" key={item.step}>
            <div className="process-number">{item.step}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>The Selections Advantage</h2>
      <div className="why-grid">
        {WHY_US.map((item) => (
          <div className="why-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
