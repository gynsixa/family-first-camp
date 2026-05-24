import { invitation } from "@/content/invitation";
import { Divider } from "@/components/ui/Divider";
import { FlowerSticker } from "@/components/ui/FlowerSticker";

export function WishesBlock() {
  const { wishes } = invitation;

  return (
    <section className="wishes-block">
      <div className="wishes-copy-card">
        <Divider />

        <h2 className="block-title">{wishes.title}</h2>

        <div className="wishes-text">
          {wishes.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <FlowerSticker variant="small-right" />
    </section>
  );
}