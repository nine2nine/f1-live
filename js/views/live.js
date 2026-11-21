// Live tab: the timing screen, connected to Formula 1's live timing feed.
import { mountTiming } from "../timing.js";
import { toggleCyberpunk } from "../main.js";
import { ICONS } from "../util.js";

export default {
  title: "Live",
  tab: "live",
  async mount(el, params, app) {
    const tools = app.setTools(`<button class="theme-switch" type="button">${ICONS.cyberpunk}<span>Cyberpunk</span></button>`);
    const button = tools.querySelector(".theme-switch");
    const sync = () => button.setAttribute("aria-pressed", String(document.documentElement.dataset.theme === "cyberpunk"));
    sync();
    button.addEventListener("click", () => { toggleCyberpunk(); sync(); });
    return mountTiming(el, { app });
  }
};
