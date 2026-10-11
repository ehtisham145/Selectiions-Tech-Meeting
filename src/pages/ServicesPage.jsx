const DEVELOPMENT_SERVICES = [
  { code: 'WD', title: 'Web Development', text: 'Fast, secure and responsive websites built around your business goals — from company sites to complex web applications and client portals.' },
  { code: 'WP', title: 'WordPress Development', text: 'Easy-to-manage WordPress websites with custom themes, plugins and speed optimisation, so your team can update content without a developer.' },
  { code: 'SH', title: 'Shopify & E-commerce', text: 'Conversion-focused online stores on Shopify and other platforms — product setup, payments, shipping, theme customisation and store launch.' },
  { code: 'MA', title: 'Mobile App Development', text: 'Android and iOS applications with clean, intuitive interfaces that keep your customers connected to your brand on the go.' },
  { code: 'SW', title: 'Software Development', text: 'Tailor-made business software, ERP/CRM tools and internal systems that replace manual work and fit exactly the way your company operates.' },
  { code: 'SA', title: 'SaaS Development', text: 'End-to-end SaaS products — multi-tenant architecture, subscriptions and billing, user dashboards and secure cloud deployment, from MVP to scale.' },
]

const AI_DATA_SERVICES = [
  { code: 'AU', title: 'AI Automation', text: 'Automate repetitive tasks and workflows with AI — document processing, lead handling, reporting and integrations that save hours every week.' },
  { code: 'AI', title: 'AI Chatbots', text: 'Smart AI-powered chatbots for websites and messaging that answer customer questions, capture leads and provide support around the clock.' },
  { code: 'DE', title: 'Data Engineering', text: 'Reliable data pipelines, ETL processes and data warehouses that collect, clean and organise your business data from every source in one place.' },
  { code: 'DA', title: 'Data Analysis', text: 'Interactive dashboards, reports and insights that turn raw numbers into clear decisions about sales, customers, marketing and operations.' },
]

const GROWTH_SERVICES = [
  { code: 'SEO', title: 'SEO Services', text: 'On-page, technical and local SEO that helps your business rank higher on Google and attract customers who are already searching for you.' },
  { code: 'DM', title: 'Digital Marketing', text: 'Social media management and paid advertising campaigns planned around clear goals — more reach, more leads and more sales.' },
  { code: 'GD', title: 'Graphic Design', text: 'Eye-catching social posts, banners, brochures and marketing materials that keep your brand consistent and professional everywhere.' },
  { code: 'LG', title: 'Logo & Brand Identity', text: 'Memorable logos and complete brand identity kits — colours, typography and guidelines that make your business instantly recognisable.' },
]

const INDUSTRIES = [
  'Retail & E-commerce', 'Startups & Small Business', 'Corporate & Services',
  'Education & Training', 'Healthcare & Clinics', 'Real Estate',
  'Restaurants & Food', 'Travel & Hospitality', 'Fashion & Lifestyle',
]

const TOOLKIT = [
  { group: 'Web', items: ['HTML5 / CSS3', 'JavaScript', 'React', 'PHP', 'Tailwind CSS'] },
  { group: 'CMS & E-commerce', items: ['WordPress', 'WooCommerce', 'Shopify', 'Elementor'] },
  { group: 'Mobile & Software', items: ['Android', 'iOS', 'Cross-platform apps', 'SaaS platforms'] },
  { group: 'AI & Data', items: ['Python', 'AI / LLM integrations', 'ETL pipelines', 'BI dashboards'] },
  { group: 'Marketing & Design', items: ['Google SEO', 'Social media ads', 'Brand identity', 'AI chatbots'] },
]

function ServiceGrid({ items }) {
  return (
    <div className="service-grid">
      {items.map((item) => (
        <div className="service-card" key={item.title}>
          <div className="service-code">{item.code}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="content-page">
      <div className="eyebrow">What We Do</div>
      <h1>Our Services</h1>
      <p className="lead">
        A complete range of development, AI/data and growth services — so you can build, launch and
        scale your digital products with one reliable team.
      </p>

      <h2>Development Services</h2>
      <ServiceGrid items={DEVELOPMENT_SERVICES} />

      <h2>AI &amp; Data Solutions</h2>
      <ServiceGrid items={AI_DATA_SERVICES} />

      <h2>Growth &amp; Branding Services</h2>
      <ServiceGrid items={GROWTH_SERVICES} />

      <h2>Industries We Serve</h2>
      <div className="industries-grid">
        {INDUSTRIES.map((name) => (
          <span className="industry-tag" key={name}>{name}</span>
        ))}
      </div>

      <h2>Technologies &amp; Platforms</h2>
      <div className="toolkit-list">
        {TOOLKIT.map((group) => (
          <div className="toolkit-row" key={group.group}>
            <span className="toolkit-label">{group.group}</span>
            <div className="toolkit-tags">
              {group.items.map((item) => (
                <span className="toolkit-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
