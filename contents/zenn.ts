import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://zenn.dev/*"]
}

window.addEventListener("load", () => {
  document.getElementById("tech-trend").style.backgroundColor = "#333333"
})
