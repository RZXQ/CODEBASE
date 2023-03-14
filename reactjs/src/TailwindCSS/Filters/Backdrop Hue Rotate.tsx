// | Class                   | Properties                           |
// | ----------------------- | ------------------------------------ |
// | backdrop-hue-rotate-0   | backdrop-filter: hue-rotate(0deg);   |
// | backdrop-hue-rotate-15  | backdrop-filter: hue-rotate(15deg);  |
// | backdrop-hue-rotate-30  | backdrop-filter: hue-rotate(30deg);  |
// | backdrop-hue-rotate-60  | backdrop-filter: hue-rotate(60deg);  |
// | backdrop-hue-rotate-90  | backdrop-filter: hue-rotate(90deg);  |
// | backdrop-hue-rotate-180 | backdrop-filter: hue-rotate(180deg); |
//
// Backdrop Hue Rotate: Utilities for applying backdrop hue-rotate filters to an element.
// 1. Rotating the backdrop's hue: Use the backdrop-hue-rotate-{amount} utilities to rotate the hue of an element’s backdrop.
// 2. Using negative values: To use a negative backdrop hue rotate value, prefix the class name with a dash to convert it to a negative value.
// 3. Removing backdrop filters: To remove all of the backdrop filters on an element at once, use the backdrop-filter-none utility. This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint.
export default function BackdropHueRotate() {
  return (
    <div>
      <div className="absolute inset-6 h-10 w-10 backdrop-hue-rotate-90"></div>
      <img
        className="h-24 w-24"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
