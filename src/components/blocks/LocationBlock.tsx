import { invitation } from "@/content/invitation";

export function LocationBlock() {
  const { location } = invitation;

  const mapUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(location.navigator)}`;

  return (
    <section className="location-block">
      <div className="location-copy">
        <h2 className="block-title">{location.title}</h2>

        <p className="location-description">
          Мы встретимся на площадке Green Land у Горьковского моря. Ниже оставили
          координаты для навигатора, чтобы ваша дорога была лёгкой и приятной.
        </p>

        <div className="location-coords-card">
          <span>База отдыха Green Land</span>
          <strong>{location.navigator}</strong>
        </div>

        <a
          className="location-map-link"
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          Открыть в навигаторе
        </a>
      </div>

      <div className="location-photo-wrap">
        <img
          className="location-image"
          src={location.image}
          alt="Green Land"
        />
      </div>
    </section>
  );
}