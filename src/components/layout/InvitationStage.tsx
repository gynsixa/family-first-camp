import { HeroBlock } from "@/components/blocks/HeroBlock";
import { LetterBlock } from "@/components/blocks/LetterBlock";
import { DressCodeBlock } from "@/components/blocks/DressCodeBlock";
import { TimingNotebookBlock } from "@/components/blocks/TimingNotebookBlock";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { WishesBlock } from "@/components/blocks/WishesBlock";
import { RsvpBlock } from "@/components/blocks/RsvpBlock";
import { ContactsBlock } from "@/components/blocks/ContactsBlock";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function InvitationStage() {
  return (
    <main className="invitation-stage">
      <div className="landing-shell">
        <section className="landing-section hero-only-section">
          <HeroBlock />
        </section>

        <RevealOnScroll>
          <section className="landing-section intro-section">
            <div className="intro-letter">
              <LetterBlock />
            </div>

            <div className="intro-info intro-anim-info">
              <h2>
                Мы очень ждём вас <span>♡</span>
              </h2>
              <p>
                Церемония состоится на открытом воздухе, поэтому позаботьтесь о
                комфортной обуви и хорошем настроении.
              </p>
              <div className="intro-date-card intro-anim-date">
                24 июля 2026 года
                <br />
                Green Land
              </div>
            </div>
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
          <section className="landing-section location-wishes-section">
            <div className="location-column">
              <LocationBlock />
            </div>

            <div className="wishes-column">
              <WishesBlock />
            </div>
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
      </div>
    </main>
  );
}