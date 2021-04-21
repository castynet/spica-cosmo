export function Year() {
  // used by => | 1. Footer |
  var d = new Date();
  var n = d.getFullYear();
  return n;
}

export function SwitchPage() {
  var layers = document.getElementsByClassName("layer");
  for (const layer of layers) {
    layer.classList.toggle("active");
  }
  const lastLayer = document.querySelector(".layerTwo");
  lastLayer.addEventListener("transitionend", () => {
    console.log("Transition ended");
  });
}
