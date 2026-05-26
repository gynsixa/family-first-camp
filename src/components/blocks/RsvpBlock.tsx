"use client";

import { useState } from "react";
import { invitation } from "@/content/invitation";

const alcoholGroups = [
  {
    title: "Игристое",
    options: ["Брют", "Полусладкое"],
  },
  {
    title: "Вино",
    options: [
      "Белое сухое",
      "Белое полусладкое",
      "Красное сухое",
      "Красное полусладкое",
    ],
  },
  {
    title: "Крепкий алкоголь",
    options: ["Водка", "Виски", "Джин", "Ром", "Текила", "Коньяк"],
  },
];

export function RsvpBlock() {
  const { rsvp } = invitation;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting || isSubmitted) return;

    setSubmitError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      attendance: String(formData.get("attendance") || ""),
      secondDay: String(formData.get("secondDay") || ""),
      transfer: String(formData.get("transfer") || ""),
      food: String(formData.get("food") || "").trim(),
      alcohol: formData.getAll("alcohol").map(String),
    };

    if (!payload.name) {
      setSubmitError("Пожалуйста, укажите имя и фамилию");
      setIsSubmitting(false);
      return;
    }

    try {
      const webAppUrl = process.env.NEXT_PUBLIC_RSVP_WEB_APP_URL;

      if (!webAppUrl) {
        throw new Error("Не указан адрес формы");
      }

      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Не удалось отправить анкету"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="rsvp-block rsvp-block-with-texture">
      <img
        className="rsvp-bg-texture rsvp-anim-paper"
        src="/assets/textures/rsvp-paper-bg.png"
        alt=""
        aria-hidden="true"
      />

      <img
        className="rsvp-left-flower rsvp-anim-flower"
        src="/assets/textures/rsvp-flower-left.png"
        alt=""
        aria-hidden="true"
      />

      <div className="rsvp-main rsvp-anim-form">
        <h2 className="block-title">{rsvp.title}</h2>

        <form className="rsvp-form" id="rsvp-form" onSubmit={handleSubmit}>
          <label className="rsvp-field rsvp-field-wide">
            <span>Имя и фамилия</span>
            <input className="rsvp-line-input" type="text" name="name" />
          </label>

          <div className="rsvp-field">
            <span>Приедете ли на торжество?</span>
            <div className="rsvp-options">
              <label>
                <input type="radio" name="attendance" value="Да" /> Да
              </label>
              <label>
                <input type="radio" name="attendance" value="Нет" /> Нет
              </label>
            </div>
          </div>

          <div className="rsvp-field">
            <span>Останетесь ли на второй день?</span>
            <div className="rsvp-options">
              <label>
                <input type="radio" name="secondDay" value="Да" /> Да
              </label>
              <label>
                <input type="radio" name="secondDay" value="Нет" /> Нет
              </label>
            </div>
          </div>

          <div className="rsvp-field">
            <span>Нужен ли трансфер?</span>
            <div className="rsvp-options">
              <label>
                <input type="radio" name="transfer" value="Да" /> Да
              </label>
              <label>
                <input type="radio" name="transfer" value="Нет" /> Нет
              </label>
            </div>
          </div>

          <label className="rsvp-field">
            <span>Особенности питания, если есть</span>
            <input className="rsvp-line-input" type="text" name="food" />
          </label>

          <div className="rsvp-field rsvp-field-wide rsvp-alcohol-field">
            <span>Предпочтения по алкоголю</span>

            <div className="rsvp-alcohol-accordion">
              {alcoholGroups.map((group) => (
                <details className="rsvp-alcohol-group" key={group.title}>
                  <summary>{group.title}</summary>

                  <div className="rsvp-alcohol-options">
                    {group.options.map((option) => (
                      <label
                        key={`${group.title}-${option}`}
                        className="rsvp-checkbox-option"
                      >
                        <input
                          type="checkbox"
                          name="alcohol"
                          value={`${group.title}: ${option}`}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </details>
              ))}

              <label className="rsvp-checkbox-option rsvp-no-alcohol-option">
                <input type="checkbox" name="alcohol" value="Без алкоголя" />
                <span>Без алкоголя</span>
              </label>
            </div>
          </div>

        </form>
      </div>

      <aside className="rsvp-submit-card rsvp-submit-card-with-texture rsvp-anim-sticker">
        <img
          className="rsvp-submit-sticker"
          src="/assets/textures/rsvp-submit-sticker.png"
          alt=""
          aria-hidden="true"
        />

        <div className="rsvp-submit-content">
          <p>Будем благодарны, если вы подтвердите своё участие <br></br>до 1 июня.</p>

          <div className="rsvp-card-divider">
            <span>♡</span>
          </div>

          <button
            className={`rsvp-submit rsvp-anim-button ${
              isSubmitted ? "is-submitted" : ""
            }`}
            type="submit"
            form="rsvp-form"
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitted
              ? "Отправлено"
              : isSubmitting
                ? "Отправляем..."
                : rsvp.submitLabel}
          </button>

          {submitError && <div className="rsvp-submit-error">{submitError}</div>}
        </div>
      </aside>
    </section>
  );
}
