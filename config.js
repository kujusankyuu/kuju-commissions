const CONFIG = {
  // Discord webhook URL (or your Cloudflare Worker URL)
  webhook: "https://discord.com/api/webhooks/1571421858035667067/8Z5aFCQlSzx-9HfewNHiNERmlSaRkKC0e_tEcFnRDatFdEDitnyKti0BOj5s0k9aPxba",
  repo: "kujusankyuu/kuju-commissions",
};
// Prices for the estimate (keep in sync with Carrd). [low, high] = range.
const PRICES = {
  "Full Render – Headshot":  { base: 65,  extra: 0.80, detailed: 35, fees: true },
  "Full Render – Half Body": { base: 95,  extra: 0.80, detailed: 35, fees: true },
  "Full Render – Full Body": { base: 140, extra: 0.80, detailed: 35, fees: true },
  "Chibi – Half Body": { base: 25, extraFlat: 20, detailed: 20 },
  "Chibi – Full Body": { base: 40, extraFlat: 30, detailed: 20 },
  "Animation – Animatic / Storyboard": { perSec: 5 },
  "Animation – Cartoon (chibi, flat color)": { perSec: 10 },
  "Animation – Full Render": { perSec: 15 },
};
const COMMERCIAL = 0.45, RUSH = 0.30, ANIM_BG = 0.50;
