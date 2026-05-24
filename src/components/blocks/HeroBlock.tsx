import { invitation } from "@/content/invitation";

export function HeroBlock() {
  const { hero } = invitation;

  return (
    <section className="hero-block">
      <div className="hero-copy hero-copy-image">
        <img
            className="hero-title-image hero-title-animated"
          src="/assets/hero/hero-title.png"
          alt={`${hero.names[0]} и ${hero.names[1]}, ${hero.date}, ${hero.place}`}
        />
      </div>

      <div className="hero-doodle-wrap">
        <div
          className="couple-doodle-slideshow couple-doodle-animated"
          aria-label="Иллюстрация пары"
        >
          {[1, 2, 3, 4].map((index) => (
            <img
              key={index}
              className={`couple-doodle-frame couple-doodle-frame-${index}`}
              src={`/assets/doodles/couple-hero-${index}.png`}
              alt=""
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}