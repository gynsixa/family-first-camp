import { invitation } from "@/content/invitation";
import { FlowerSticker } from "@/components/ui/FlowerSticker";

export function LetterBlock() {
  const { letter } = invitation;

  return (
    <section className="letter-block">
      <div className="paper-note paper-note-with-texture intro-anim-letter">
        <img
          className="paper-texture-image"
          src="/assets/textures/paper-note.png"
          alt=""
          aria-hidden="true"
        />

        <h2 className="paper-note-title">{letter.title}</h2>

        <div className="paper-note-text">
          {letter.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === letter.paragraphs.length - 1 ? "paper-note-accent" : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="intro-anim-flower">
        <FlowerSticker variant="small-right" />
      </div>
    </section>
  );
}