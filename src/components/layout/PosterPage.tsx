import { HeroBlock } from "@/components/blocks/HeroBlock";
import { LetterBlock } from "@/components/blocks/LetterBlock";
import { DressCodeBlock } from "@/components/blocks/DressCodeBlock";
import { TimingNotebookBlock } from "@/components/blocks/TimingNotebookBlock";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { WishesBlock } from "@/components/blocks/WishesBlock";
import { RsvpBlock } from "@/components/blocks/RsvpBlock";
import { ContactsBlock } from "@/components/blocks/ContactsBlock";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function PosterPage() {
  return (
    <main className="poster-page">
      <section className="landing-section hero-section">
        <HeroBlock />
      </section>

      <RevealOnScroll>
        <section className="landing-section intro-section">
          <LetterBlock />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="landing-section dress-section">
          <DressCodeBlock />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="landing-section timing-section">
          <TimingNotebookBlock />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="landing-section location-section">
          <LocationBlock />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="landing-section wishes-section">
          <WishesBlock />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="landing-section rsvp-section">
          <RsvpBlock />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="landing-section contacts-section">
          <ContactsBlock />
        </section>
      </RevealOnScroll>
    </main>
  );
}