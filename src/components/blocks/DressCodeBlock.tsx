import { invitation } from "@/content/invitation";
import { Divider } from "@/components/ui/Divider";
import { FlowerSticker } from "@/components/ui/FlowerSticker";

const dressTiles = [
  {
    className: "tile-umbrella",
    label: "Зонты у моря",
    src: "/assets/dress-code/umbrella.png",
  },
  {
    className: "tile-blush",
    label: "Blush texture",
    src: "/assets/dress-code/blush-texture.png",
  },
  {
    className: "tile-apricot",
    label: "Абрикосовая фактура",
    src: "/assets/dress-code/apricot-texture.png",
  },
  {
    className: "tile-grass",
    label: "Трава",
    src: "/assets/dress-code/grass.png",
  },
  {
    className: "tile-drink",
    label: "Лимонный напиток",
    src: "/assets/dress-code/drink.png",
  },
  {
    className: "tile-fabric",
    label: "Светлая ткань",
    src: "/assets/dress-code/fabric-shadow.png",
  },
  {
    className: "tile-berry",
    label: "Ягодный акцент",
    src: "/assets/dress-code/berry-accent.png",
  },
  {
    className: "tile-light-fabric",
    label: "Молочная ткань",
    src: "/assets/dress-code/light-fabric.png",
  },
    {
    className: "tile-cocoa",
    label: "Какао",
    src: "/assets/dress-code/cocoa.png",
  },
];

export function DressCodeBlock() {
  const { dressCode } = invitation;

  return (
    <section className="dress-code-block">
      <div className="dress-anim-flower">
        <FlowerSticker variant="top-right" />
      </div>

      <div className="dress-header dress-anim-header">
        <h2 className="block-title dress-title">{dressCode.title}</h2>
        <Divider />
        <p className="block-subtitle">{dressCode.subtitle}</p>
      </div>

      <div className="dress-visual-row">
        <div className="dress-moodboard-panel dress-anim-moodboard">
          <div className="dress-grid">
            {dressTiles.map((tile) => (
              <div
                key={tile.label}
                className={`dress-tile ${tile.className}`}
                aria-label={tile.label}
              >
                <img src={tile.src} alt={tile.label} />
              </div>
            ))}
          </div>

          <div className="dress-palette-zone dress-anim-palette">
            <div className="palette-row">
              {dressCode.palette.map((item) => (
                <div className="palette-item" key={item.label}>
                  <div
                    className="palette-dot"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="palette-label">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="dress-copy dress-rules">
              <div className="dress-rule dress-rule-allowed">
                <span className="dress-rule-label">Можно</span>
                  <p>
                    Выбирайте светлые, свежие и тёплые оттенки: молочный, сливочный,
                    крем-брюле, светлый бежевый, пудрово-розовый, нежно-персиковый,
                    сливочно-жёлтый, небесно-голубой и мягкий шалфейный.
                  </p>
                </div>

                <div className="dress-rule dress-rule-avoid">
                  <span className="dress-rule-label">Лучше избегать</span>
                    <p>
                      Чёрного, ярко-красного, кислотных цветов, тёмно-зелёного, насыщенного
                      оранжевого и тяжёлого коричневого. Белый допустим, но лучше выбирать не
                      кипенно-белый, а молочный, цвет слоновой кости или тёплый сливочный.
                    </p>
                  </div>
                </div>
          </div>
        </div>

        <div className="dress-outfit-refs-panel dress-anim-reference">
          <img
            className="outfit-refs-image"
            src="/assets/dress-code/outfit-refs.png"
            alt="Референсы образов в палитре дресс-кода"
          />
        </div>
      </div>
    </section>
  );
}