import { invitation } from "@/content/invitation";
import type { CSSProperties } from "react";

export function TimingNotebookBlock() {
  const { timing } = invitation;

  return (
    <section className="timing-block">
      <div className="notebook notebook-with-texture timing-anim-paper">
        <img
          className="notebook-texture-image"
          src="/assets/textures/timing-paper.png"
          alt=""
          aria-hidden="true"
        />

        <div className="notebook-inner">
          <h2 className="notebook-title">{timing.title}</h2>

          <div className="timeline-list">
            {timing.items.map((item) => (
              <div
                className="timeline-item timing-anim-row"
                key={`${item.time}-${item.title}`}
                style={{ "--row-index": timing.items.indexOf(item) } as React.CSSProperties}
             >
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-line" />
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="weekend-note weekend-note-with-texture timing-anim-weekend">
       <img
         className="weekend-note-texture-image"
         src="/assets/textures/weekend-sticker.png"
         alt=""
         aria-hidden="true"
        />

       <div className="weekend-note-inner">
         <div className="weekend-kicker">25 июля</div>
         <p>{timing.secondDay}</p>
       </div>
      </div>
    </section>
  );
}