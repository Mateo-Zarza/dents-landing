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
  // `dayOfWeek` feeds the schema.org data so Google can show the hours
  hours: [
    {
      days: "Lunes a viernes",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    { days: "Sábados", dayOfWeek: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
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

// Each description shows when the visitor opens its treatment, one at a time.
export const treatments: { title: string; items: { name: string; description: string }[] }[] = [
  {
    title: "Diagnóstico",
    items: [
      {
        name: "Consultas de diagnóstico",
        description:
          "Revisamos tu boca en detalle para detectar cualquier problema a tiempo y armar un plan de tratamiento a tu medida.",
      },
      {
        name: "Diagnóstico digital",
        description:
          "Radiografías e imágenes digitales que muestran con precisión lo que no se ve a simple vista, para planificar cada tratamiento con seguridad.",
      },
    ],
  },
  {
    title: "Odontología general",
    items: [
      {
        name: "Operatoria dental",
        description:
          "Los clásicos arreglos dentales: tratamos las caries y reconstruimos los dientes dañados para que recuperen su forma y función.",
      },
      {
        name: "Endodoncia",
        description:
          "El tratamiento de conducto: limpiamos el interior del diente cuando el nervio está afectado, para aliviar el dolor y conservar la pieza.",
      },
      {
        name: "Periodoncia",
        description:
          "Cuidamos la salud de las encías y del hueso que sostiene los dientes, y tratamos el sangrado, la inflamación y la retracción.",
      },
      {
        name: "Tratamientos en niños",
        description:
          "Atención pensada para los más chicos, con prevención y tratamientos en un ambiente tranquilo para que se sientan seguros.",
      },
    ],
  },
  {
    title: "Ortodoncia y rehabilitación",
    items: [
      {
        name: "Ortodoncia",
        description:
          "Alineamos los dientes y corregimos la mordida para lograr una sonrisa pareja y una masticación correcta.",
      },
      {
        name: "Implantología",
        description:
          "Reemplazamos los dientes perdidos con implantes fijos que se ven, se sienten y funcionan como dientes naturales.",
      },
      {
        name: "Prótesis",
        description:
          "Coronas, puentes y prótesis para reponer las piezas que faltan y recuperar la comodidad al comer, hablar y sonreír.",
      },
      {
        name: "Rehabilitaciones complejas",
        description:
          "Planificamos tratamientos integrales que combinan varias especialidades para devolverle la función y la estética a toda la boca.",
      },
    ],
  },
  {
    title: "Estética",
    items: [
      {
        name: "Diseño de sonrisa",
        description:
          "Analizamos tu rostro, tus labios y tus dientes para planificar una sonrisa armoniosa y natural, pensada para vos.",
      },
      {
        name: "Estética dental",
        description:
          "Tratamientos como el blanqueamiento para mejorar el color, la forma y el brillo de tus dientes.",
      },
      {
        name: "Carillas",
        description:
          "Láminas muy finas que se adhieren al frente de los dientes para corregir su color, forma o tamaño de manera natural.",
      },
      {
        name: "Armonización orofacial",
        description:
          "Tratamientos mínimamente invasivos que realzan y equilibran las facciones del rostro, en armonía con tu sonrisa.",
      },
    ],
  },
];

export const bookingMessage ="Hola Dents, quisiera reservar un turno.";

export const whatsappLink = (text = bookingMessage) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const instagramLink = `https://www.instagram.com/${site.instagram}/`;

const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.province}, Argentina`;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
