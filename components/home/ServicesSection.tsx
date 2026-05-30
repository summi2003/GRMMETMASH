import "./ServicesSection.css";

const trustItems = [
  {
    icon: "⌬",
    title: "Advanced CNC",
    text: "Equipment",
  },
  {
    icon: "♙",
    title: "Precision",
    text: "Engineering Solutions",
  },
  {
    icon: "盾",
    title: "Reliable Project",
    text: "Delivery",
  },
  {
    icon: "⚙",
    title: "Quality-Driven",
    text: "Manufacturing",
  },
  {
    icon: "◎",
    title: "Focused",
    text: "Industrial Approach",
  },
];

const services = [
  {
    number: "01",
    title: "Industrial Bearings",
    text: "High-performance bearing solutions for steel plants, rolling mills, crushers, heavy machinery, and continuous industrial operations.",
    image: "/service-bearings.jpg",
    link: "/products/industrial-bearings",
  },
  {
    number: "02",
    title: "Industrial Equipment & Spares",
    text: "Critical industrial spares, engineering items, mill components, and heavy-duty solutions for plant maintenance.",
    image: "/service-spares.jpg",
    link: "/products/industrial-equipment-spares",
  },
  {
    number: "03",
    title: "Industrial Lubricants",
    text: "Application-engineered industrial greases and high-performance lubricants for heat, load, dust, water, and contamination challenges.",
    image: "/service-lubricants.jpg",
    link: "/products/industrial-lubricants",
  },
  {
    number: "04",
    title: "Conveyor Belt Solutions",
    text: "Heavy-duty conveyor belts engineered for material handling, mining, steel, cement, and process industries.",
    image: "/service-conveyor.jpg",
    link: "/products/conveyor-belt-solutions",
  },
  {
    number: "05",
    title: "Induction Heating Systems",
    text: "Industrial induction heaters for safe, fast, and controlled bearing mounting, dismounting, and heating applications.",
    image: "/service-induction.jpg",
    link: "/products/induction-heating-systems",
  },
  {
    number: "06",
    title: "Wire Rope Solutions",
    text: "Precision-engineered wire ropes for lifting, handling, crane, mining, material handling, and heavy machinery applications.",
    image: "/service-wire-rope.jpg",
    link: "/products/wire-rope-solutions",
  },
];

export default function ServicesSection() {
  return (
    <>
      <section className="trust-section">
        <div className="trust-bg" />

        <div className="trust-content">
          <p className="trust-eyebrow">
            BUILT ON ACCURACY. EXPERIENCE & TRUST
          </p>

          <h2>
            Built on Accuracy,
            <br />
            Experience & Trust
          </h2>

          <div className="trust-cards">
            {trustItems.map((item, index) => (
              <div className="trust-card" key={index}>
                <div className="trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="manufacturing-section" id="services">
        <div className="manufacturing-container">
          <h2>
            Manufacturing <span>Services</span>
          </h2>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-content">
                  <span className="service-number">{service.number}</span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a href={service.link} className="know-more-btn">
                    Know More
                  </a>
                </div>

                <a href={service.link} className="service-image-link">
                  <img src={service.image} alt={service.title} />
                </a>
              </article>
            ))}
          </div>

          <div className="all-services-wrap">
            <a href="/products" className="all-services-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}