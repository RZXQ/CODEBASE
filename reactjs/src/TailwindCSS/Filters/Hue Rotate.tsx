// | Class          | Properties                  |
// | -------------- | --------------------------- |
// | hue-rotate-0   | filter: hue-rotate(0deg);   |
// | hue-rotate-15  | filter: hue-rotate(15deg);  |
// | hue-rotate-30  | filter: hue-rotate(30deg);  |
// | hue-rotate-60  | filter: hue-rotate(60deg);  |
// | hue-rotate-90  | filter: hue-rotate(90deg);  |
// | hue-rotate-180 | filter: hue-rotate(180deg); |
//
// Hue Rotate: Utilities for applying hue-rotate filters to an element.
// 1. Rotating an element's hue: Use the hue-rotate-{amount} utilities to rotate the hue of an element.
// 2. Using negative values: To use a negative hue-rotate value, prefix the class name with a dash to convert it to a negative value.
// 3. Removing filters: To remove all of the filters on an element at once, use the filter-none utility. This can be useful when you want to remove filters conditionally, such as on hover or at a particular breakpoint.
export default function HueRotate() {
  return (
    <div>
      <img
        className="h-24 w-24 hue-rotate-60"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
