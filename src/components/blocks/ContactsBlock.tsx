import { invitation } from "@/content/invitation";
import { FlowerSticker } from "@/components/ui/FlowerSticker";

const organizerContacts = [
  {
    name: "Наташа",
    phone: "+7 910 123 1880",
    href: "tel:+79101231880",
  },
  {
    name: "Даша",
    phone: "+7 920 002 8770",
    href: "tel:+79200028770",
  },
];

export function ContactsBlock() {
  const { contacts } = invitation;

  return (
    <section className="contacts-block">
      <div className="contacts-decor">
        <FlowerSticker variant="big-left" />
      </div>

      <div className="contacts-copy">
        <h2 className="block-title">{contacts.title}</h2>
        <p>
          Для нашего и вашего удобства, на площадке будут присутствовать организаторы нашей свадьбы, 
          которые встретят вас и помогут решить любые вопросы. 
          <p> </p><br></br>
          Если вы планируете сделать сюрприз, обязательно уведомьте наших организаторов.
        </p>
      </div>

      <div className="contacts-card">
        <div className="contacts-agency">Khvorostova Wedding</div>

        <div className="contacts-list">
          {organizerContacts.map((contact) => (
            <div className="contacts-person" key={contact.phone}>
              <div className="contacts-name">{contact.name}</div>
              <a className="contacts-phone" href={contact.href}>
                {contact.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
