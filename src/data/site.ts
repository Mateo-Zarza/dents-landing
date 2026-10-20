// Single source for contact data and copy, taken from the client's brief.
export const site = {
  name: "Centro Odontológico Dents",
  shortName: "Dents",
  description:
    "Centro odontológico en Villa María, Córdoba. Reservá tu turno por WhatsApp. Atendemos OSDE, Sancor Salud, Sume Salud y más coberturas.",
  whatsapp: { number: "5493534138771", display: "353 413-8771" },
  email: "centrovmdents@gmail.com",
  instagram: "dents_vm",
  address: {
    street: "San Juan 1118",
    city: "Villa María",
    province: "Córdoba",
    postalCode: "5900",
    country: "AR",
  },
};

// The client asked to highlight the first three, so they lead the list.
export const coverages = [
  "Sume Salud",
  "OSDE",
  "Sancor Salud",
  "OMINT",
  "Prevención Salud",
  "APROSS",
  "SIPSSA",
  "OSSACRA",
  "Premedic",
];

export const bookingMessage = "Hola Dents, quisiera reservar un turno.";

export const whatsappLink = (text = bookingMessage) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const instagramLink = `https://www.instagram.com/${site.instagram}/`;

const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.province}, Argentina`;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
