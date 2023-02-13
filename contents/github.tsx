import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://github.com/*"]
}

const CustomButton = () => {
  return <button>Custom button</button>
}

export default CustomButton
