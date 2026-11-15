// Optional Cloudflare Worker: hides your Discord webhook URL from the public site.
// In Cloudflare: Workers > Create > paste this > Settings > Variables > add secret WEBHOOK = your Discord webhook URL.
// Then put the Worker's URL in CONFIG.webhook in index.html.
const ORIGIN = "https://kujusankyuu.github.io"; // change if you use a custom domain

export default {
  async fetch(req, env) {
    const cors = { "Access-Control-Allow-Origin": ORIGIN, "Access-Control-Allow-Headers": "Content-Type" };
    if (req.method === "OPTIONS") return new Response(null, { headers: cors });
    if (req.method !== "POST" || req.headers.get("Origin") !== ORIGIN) return new Response("No", { status: 403 });
    const r = await fetch(env.WEBHOOK, { method: "POST", headers: { "Content-Type": req.headers.get("Content-Type") }, body: req.body });
    return new Response(null, { status: r.ok ? 204 : 502, headers: cors });
  },
};
