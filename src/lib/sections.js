/**
 * Section registry. A section only exists on the page — and in the navigation —
 * when the matching config block has real content. Delete data, lose the section.
 */

export function hasContact(contact = {}) {
  return Boolean(
    contact.phone ||
      contact.email ||
      contact.address ||
      contact.hours?.length ||
      contact.socials?.some((s) => s?.url)
  );
}

export const SECTIONS = [
  {
    id: "about",
    label: "Studio",
    has: (c) => Boolean(c.about && (c.about.heading || c.about.body?.length) && c.about.image?.src),
  },
  { id: "services", label: "Services", has: (c) => Boolean(c.services?.categories?.some((s) => s.items?.length)) },
  { id: "gallery", label: "Work", has: (c) => Boolean(c.gallery?.images?.length) },
  { id: "team", label: "Team", has: (c) => Boolean(c.team?.members?.length) },
  { id: "testimonials", label: null, has: (c) => Boolean(c.testimonials?.items?.length) },
  { id: "contact", label: "Contact", has: (c) => hasContact(c.contact) },
];

export function isActiveSection(config, id) {
  const section = SECTIONS.find((s) => s.id === id);
  return section ? section.has(config) : false;
}

export function navItems(config) {
  return SECTIONS.filter((section) => section.label && section.has(config)).map((section) => ({
    id: section.id,
    label: section.label,
    href: `#${section.id}`,
  }));
}

export function activeSocials(contact = {}) {
  return (contact.socials || []).filter((s) => s && s.url);
}

export function mapsHref(contact = {}) {
  if (contact.mapsUrl) return contact.mapsUrl;
  if (!contact.address) return "";
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
}

export function bookingHref(booking = {}) {
  const url = (booking.url || "").trim();
  return /^https?:\/\//i.test(url) ? url : "#contact";
}

export function isExternalBooking(booking = {}) {
  return /^https?:\/\//i.test((booking.url || "").trim());
}