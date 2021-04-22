export function Year() {
  // used by => | 1. Footer |
  var d = new Date();
  var n = d.getFullYear();
  return n;
}

export function SwitchPage() {
  // used by => | 1. frontPage |
  var layers = document.querySelectorAll("[data-layer]");
  for (const layer of layers) {
    layer.style.width = "100vw";
    layer.classList.toggle("activeLayer");
  }
  const lastLayer = document.querySelector("[data-layer='2']");
  lastLayer.addEventListener("transitionend", () => {
    for (const layer of layers) {
      layer.style.width = "0";
    }
  });
}
