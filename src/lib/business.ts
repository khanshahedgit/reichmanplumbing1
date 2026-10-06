// Single source of truth for Reichman Plumbing business information.
import heater from "@/assets/svc-heater.jpg";
import line from "@/assets/svc-line.jpg";
import kitchen from "@/assets/svc-kitchen.jpg";
import repair from "@/assets/svc-repair.jpg";
import winter from "@/assets/svc-winter.jpg";
import after from "@/assets/after.jpg";
import hero from "@/assets/hero.jpg";

export const BUSINESS = {
  name: "Reichman Plumbing",
  phone: "+1 740-922-4843",
  phoneHref: "tel:+17409224843",
  email: "reichmanplumbing@gmail.com",
  address: "2247 Brightwood Rd SE, New Philadelphia, OH 44663",
  mapsHref: "https://maps.google.com/?q=2247+Brightwood+Rd+SE,+New+Philadelphia,+OH+44663",
  area: "Tuscarawas County and surrounding communities",
  messenger: "https://www.facebook.com/messages/t/ReichmanPlumbing/",
  facebook: "https://www.facebook.com/ReichmanPlumbing/",
};

export type Service = { id: string; name: string; desc: string; img: string };

// Replace `img` values with real job photos when available.
export const SERVICES: Service[] = [
  { id: "install", name: "New Installation & Repair", desc: "Plumbing for new construction and repairs to existing systems.", img: repair },
  { id: "water-line", name: "Main Water Line Replacement & Repair", desc: "Repair or replace the line that brings water into your home.", img: line },
  { id: "sewer", name: "Sewer Line Replacement & Repair", desc: "Fixing and replacing sewer lines to keep everything flowing.", img: line },
  { id: "winter", name: "Winterization", desc: "Preparing plumbing for cold Ohio winters.", img: winter },
  { id: "heater", name: "Water Heater Installation & Repair", desc: "Installing and repairing traditional tank water heaters.", img: heater },
  { id: "tankless", name: "Tankless Water Heater Installation & Repair", desc: "Install and repair of on-demand tankless units.", img: heater },
  { id: "heater-service", name: "Yearly Water Heater Servicing", desc: "Routine yearly servicing for your water heater.", img: hero },
  { id: "bath", name: "Bathroom Remodeling", desc: "Plumbing for bathroom remodels, from fixtures to showers.", img: after },
  { id: "kitchen", name: "Kitchen Remodeling", desc: "Sinks, faucets and plumbing for kitchen remodels.", img: kitchen },
  { id: "water", name: "Water Services", desc: "Comprehensive water services for homes and businesses.", img: repair },
];

export const PROBLEMS: { label: string; text: string; services: string[] }[] = [
  { label: "Drain Problems", text: "Slow or backed-up drains in the kitchen, bathroom or basement. We'll find the cause and get things flowing again.", services: ["install", "water"] },
  { label: "Water Line Issues", text: "Low pressure, leaks or a failing main water line coming into the house.", services: ["water-line", "water"] },
  { label: "Sewer Line Problems", text: "Backups, odors or a damaged sewer line that needs repair or replacement.", services: ["sewer"] },
  { label: "Water Heater Problems", text: "No hot water, strange noises or leaks — tank or tankless.", services: ["heater", "tankless", "heater-service"] },
  { label: "Plumbing Repairs", text: "Leaky fixtures, broken pipes and everyday plumbing repairs.", services: ["install"] },
  { label: "Winterization", text: "Getting your plumbing ready before freezing temperatures arrive.", services: ["winter"] },
  { label: "Bathroom Plumbing", text: "Fixture upgrades or a full bathroom remodel.", services: ["bath"] },
  { label: "Kitchen Plumbing", text: "New sinks, faucets or plumbing for a kitchen remodel.", services: ["kitchen"] },
];

export const REVIEWS = [
  { name: "Nicci Brown", quote: "I had an issue with my drains in my basement and Jim was here within 45 minutes. He cleaned out all my drains in the basement. Very friendly and does an excellent job." },
  { name: "Dolores Anderson-Leskovec", quote: "Warren from Reichman Plumbing was just here to do some work. Very customer oriented and excellent work. Would highly recommend this local company." },
];

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Before / After", href: "#before-after" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
