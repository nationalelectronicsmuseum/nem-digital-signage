import TextImageSlideA from "../slides/TextImageSlideA";

const registry = {
  TextImageSlideA
};

export function getSlideComponent(type) {
  return registry[type] || (() => <div>Unknown slide: {type}</div>);
}
