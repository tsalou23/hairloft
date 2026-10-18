const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

/**
 * ============================================================================
 *  SALON CONTENT — THE ONLY FILE YOU NEED TO EDIT PER CLIENT
 * ============================================================================
 *  Every word, photo and link on the site comes from here.
 *
 *  • Swap text and image URLs  →  the site updates, no other file changes.
 *  • Delete a whole block, or set it to an empty array/string  →  that
 *    section (and its nav link) disappears automatically.
 *  • Images: paste any public image URL, or your own uploaded file URL.
 *    Optional `crop: { x, y }` (0–1) sets the focal point for cropping.
 *    `ratio: 'portrait' | 'square' | 'tall' | 'landscape' | 'wide'`.
 *  • Set `showTemplateNotice: false` before the site goes live.
 * ============================================================================
 */

export const salonConfig = {
  showTemplateNotice: false,

  /* ---------------------------------------------------------------- identity */
  identity: {
    name: "The Hair Loft",
    byline: "Premium Hair Workshop",
    wordmark: "THE HAIR LOFT",
    logoImage: "",
    tagline: "Premium • Hair • Workshop",
    description:
      "Premium hair workshop located in Korydallos. Cuts, colour and curls — built around your hair.",
  },

  /* ------------------------------------------------------------------- theme */
  // Five colour slots the whole site reads from. The key names are slot names,
  // not colours — `coral` is the strong accent, `butter` the yellow, `lilac`
  // the soft one. Change a hex and every section follows.
  theme: {
    cream: "#F6F7EA", // page background
    ink: "#14251C", // text and dark blocks
    coral: "#1F6E44", // strong accent — deep green
    butter: "#F5C518", // yellow — the sign, stickers, highlights
    lilac: "#BFD98C", // soft accent — pale pistachio
  },

  /* ------------------------------------------------------------------ header */
  header: {
    // Backdrop of the sticky top bar — a leafy hedge wall behind the sign.
    // Paste any public image URL, or set it to "" for a flat dark green bar.
    leafageImage: "/header-bg.jpg",
  },

  /* ----------------------------------------------------------------- booking */
  booking: {
    label: "Book a chair",
    // Paste your booking link (Calendly, Fresha, Timely…). If left empty every
    // booking button scrolls down to the contact section instead.
    url: "",
    note: "Online booking · replies within one working day",
  },

  /* -------------------------------------------------------------------- hero */
  hero: {
    kicker: "Independent hair studio",
    headline: {
      lines: ["Hair that", "says"],
      accent: "something",
      accentTone: "coral", // any colour slot from `theme` above
    },
    description:
      "Sharp cuts, lived-in colour and curls with volume. We work with what you have — and give it a point of view.",
    secondaryCta: "See the work",
    sticker: "Book now",
    // Three photos: [0] large portrait, [1] small square, [2] small tall.
    collage: [
      {
        src: "/gallery/instabulkdownloader.com_DdbLZqVqwF9.mp4",
        alt: "Hair Loft reel",
        ratio: "portrait",
        isVideo: true,
      },
      {
        src: "/gallery/instabulkdownloader.com_DbDqDwECVMX.mp4",
        alt: "Hair Loft reel",
        ratio: "square",
        isVideo: true,
      },
      {
        src: "/gallery/instabulkdownloader.com_Dc8EdRdiLit.mp4",
        alt: "Hair Loft reel",
        ratio: "tall",
        isVideo: true,
      },
    ],
  },

  ticker: ["Κουρέματα", "Βαφές", "Μπαλαγιάζ", "Μπούκλες", "Styling", "Korydallos", "Premium Hair Workshop", "The Hair Loft"],

  /* ------------------------------------------------------------------- about */
  about: {
    eyebrow: "The studio",
    heading: "A small studio",
    headingAccent: "with a big point of view",
    body: [
      "We are a handful of stylists who would rather have a proper conversation than follow a script. Every appointment starts with your hair, your routine and how much time you actually want to spend on it.",
      "The result is hair that grows out well, suits the shape of your face and still turns heads on the way home.",
    ],
    pullQuote: "The cut should work on the street, not just in the chair.",
    image: {
      src: "https://media.db.com/images/public/6ad4a3a5bb1e32d62f8bc86d/e1937dc89_generated_68932f21.png",
      alt: "Stylist shaping long wavy hair in the studio",
      ratio: "landscape",
    },
  },

  /* ---------------------------------------------------------------- services */
  services: {
    eyebrow: "Services",
    heading: "The",
    headingAccent: "menu",
    intro:
      "Prices vary with hair length, density and how much colour work is involved. Anything unusual gets a quote at consultation.",
    categories: [
      {
        name: "Cuts",
        blurb: "Shaped to your texture and how you style at home.",
        items: [
          {
            name: "Precision cut & finish",
            description: "Consultation, cut, styling and aftercare advice.",
            price: "from £65",
            duration: "60 min",
          },
          {
            name: "Restyle",
            description: "A bigger change in shape, length or line.",
            price: "from £85",
            duration: "75 min",
          },
          { name: "Fringe or neckline trim", description: "", price: "£15", duration: "15 min" },
        ],
      },
      {
        name: "Colour",
        blurb: "Hand-painted, glossed and blended to grow out softly.",
        items: [
          {
            name: "Full head colour",
            description: "Root to tip, ammonia-free options available.",
            price: "from £95",
            duration: "2 hrs",
          },
          {
            name: "Balayage or hand-painted highlights",
            description: "Freehand placement for a lived-in finish.",
            price: "from £165",
            duration: "3 hrs",
          },
          {
            name: "Colour correction",
            description: "Quoted after a consultation and strand test.",
            price: "",
            duration: "",
          },
        ],
      },
      {
        name: "Styling",
        blurb: "For the nights that need a bit more volume.",
        items: [
          { name: "Blow-dry & finish", description: "", price: "from £35", duration: "45 min" },
          { name: "Occasion updo", description: "", price: "from £70", duration: "60 min" },
          { name: "Curl shaping", description: "", price: "from £55", duration: "60 min" },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------------- gallery */
  gallery: {
    eyebrow: "The work",
    heading: "Recent",
    headingAccent: "hair",
    intro: "Cuts, colour and curls from the studio floor.",
    showFilters: true,
    images: [
      { video: "/gallery/instabulkdownloader.com_DdbLZqVqwF9.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DbDqDwECVMX.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DdWzMKmyuWX.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_Ddq9GmQirwc.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DejWbkpCRRX.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_Dd8cqOACUl2.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DdoCjlYiEt_.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DebWFiSCgZ1.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DeOfTayiEYX.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DdldHqqK-F9.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DbaUBi-CUEr.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_Dc8EdRdiLit.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DVGdFiRgrLv.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DYT75LvCXDq.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DWhFo9Cgmo0.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DXHSqQdgvOC.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DUBxv2tAsx4.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DSIN60zAsP0.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DTm2A3IAicB.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DR4LYJCgg0X.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DWB524pguov.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DT45zWMDGtC.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DS-VXWnAhk1.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DVO8NS6ghgs.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_Daxz8VTCEc7.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
      { video: "/gallery/instabulkdownloader.com_DZ-FdckiWKB.mp4", alt: "Hair reel", tag: "Reels", ratio: "portrait" },
    ],
  },

  /* -------------------------------------------------------------------- team */
  team: {
    eyebrow: "The chairs",
    heading: "Who you'll",
    headingAccent: "meet",
    members: [
      {
        name: "Sample stylist one",
        role: "Founder · colour",
        image: {
          src: "https://media.db.com/images/public/6ad4a3a5bb1e32d62f8bc86d/b239386d9_generated_86c58124.png",
          alt: "Stylist portrait",
          ratio: "tall",
        },
      },
      {
        name: "Sample stylist two",
        role: "Cutting · barbering",
        image: {
          src: "https://media.db.com/images/public/6ad4a3a5bb1e32d62f8bc86d/13ce9f45b_generated_762effd8.png",
          alt: "Stylist portrait",
          ratio: "tall",
        },
      },
      {
        name: "Sample stylist three",
        role: "Curls · textured hair",
        image: {
          src: "https://media.db.com/images/public/6ad4a3a5bb1e32d62f8bc86d/8b20ffdd8_generated_69f7acd7.png",
          alt: "Stylist portrait",
          ratio: "tall",
        },
      },
    ],
  },

  /* ------------------------------------------------------------ testimonials */
  testimonials: {
    eyebrow: "In their words",
    heading: "Loved",
    headingAccent: "by them",
    // Replace with genuine client reviews before launch. Set `sample: false`
    // (or delete the flag) once they are real.
    items: [
      {
        quote:
          "I have finally stopped fighting my hair in the mornings. Worth every minute of the appointment.",
        author: "Sample review",
        service: "Balayage",
        sample: true,
      },
      {
        quote:
          "Walked out with the shape I had been describing badly to other people for years.",
        author: "Sample review",
        service: "Restyle",
        sample: true,
      },
    ],
  },

  /* ----------------------------------------------------------------- contact */
  contact: {
    eyebrow: "Find us",
    heading: "Come and sit",
    headingAccent: "down",
    intro: "Call us to book your appointment.",
    phone: "21 1715 8936",
    email: "",
    address: "Taxiarchon 26, Korydallos, 1st floor",
    mapsUrl: "",
    timezone: "Europe/Athens",
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday", time: "Closed" },
      { day: "Wednesday – Friday", time: "10:00 – 19:00" },
      { day: "Saturday", time: "09:00 – 18:00" },
      { day: "Sunday", time: "11:00 – 16:00" },
    ],
    socials: [
      { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/" },
      { label: "TikTok", icon: "tiktok", url: "https://www.tiktok.com/@thehairloft.gr" },
    ],
  },

  /* ------------------------------------------------------------------ footer */
  footer: {
    note: "A design template — swap the content in the salon config to reuse it for any client.",
    // Optional small links. Leave empty to hide them.
    links: [],
  },
};

export default salonConfig;