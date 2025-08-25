import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__inner">
        <h2 className="portfolio__title">portofolio</h2>

        {/* Gigachad img */}
        <Image 
          src="/Gigachad.png" 
          alt="Gigachad meme" 
          width={200} 
          height={200}
          className="portfolio__decorative-img"
        />

        <div className="portfolio__grid">
          {/* Porto 1 */}
          <article className="card">
            <div className="card__media">
              <Image
                src="/ecommerce.png"
                alt="E-commerce mockup"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="card__img"
              />
            </div>

            <div className="card__content">
              <h3 className="card__heading">"E-commerce Platform"</h3>
              <p className="card__desc">
                A full‑stack e‑commerce platform built with Next.js and Stripe
                integration.
              </p>
              <p className="card__stack">["Next.js","TypeScript","Stripe","Tailwind CSS"]</p>
            </div>
          </article>

          {/* Porto 2 */}
          <article className="card">
            <div className="card__media">
              <Image
                src="/tasks.png"
                alt="Task app mockup"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="card__img"
              />
            </div>

            <div className="card__content">
              <h3 className="card__heading">"Task Management App"</h3>
              <p className="card__desc">
                A collaborative task management application with real‑time updates.
              </p>
              <p className="card__stack">["React","Node.js","Socket.io","MongoDB"]</p>
            </div>
          </article>

          {/* Porto 3 */}
          <article className="card">
            <div className="card__media">
              <Image
                src="/weather.png"
                alt="Weather dashboard mockup"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="card__img"
              />
            </div>

            <div className="card__content">
              <h3 className="card__heading">"Weather Dashboard"</h3>
              <p className="card__desc">
                A responsive weather dashboard with location‑based forecasts.
              </p>
              <p className="card__stack">["React","Weather API","Chart.js"]</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
