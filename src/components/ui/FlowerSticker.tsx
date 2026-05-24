type FlowerStickerProps = {
  variant: "big-left" | "top-right" | "small-right";
};

const flowerByVariant: Record<FlowerStickerProps["variant"], string> = {
  "big-left": "/assets/flowers/flower-02-left-tilt.png",
  "top-right": "/assets/flowers/flower-03-bloom.png",
  "small-right": "/assets/flowers/flower-04-small-tilt.png",
};

export function FlowerSticker({ variant }: FlowerStickerProps) {
  const className =
    variant === "big-left"
      ? "flower-sticker flower-big-left"
      : variant === "top-right"
        ? "flower-sticker flower-top-right"
        : "flower-sticker flower-small-right";

  return (
    <div className={className} aria-hidden="true">
      <img
        className="flower-sticker-image"
        src={flowerByVariant[variant]}
        alt=""
        draggable={false}
      />
      <span className="flower-sticker-tape" />
    </div>
  );
}