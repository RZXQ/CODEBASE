// | Class          | Properties                |
// | -------------- | ------------------------- |
// | brightness-0   | filter: brightness(0);    |
// | brightness-50  | filter: brightness(.5);   |
// | brightness-75  | filter: brightness(.75);  |
// | brightness-90  | filter: brightness(.9);   |
// | brightness-95  | filter: brightness(.95);  |
// | brightness-100 | filter: brightness(1);    |
// | brightness-105 | filter: brightness(1.05); |
// | brightness-110 | filter: brightness(1.1);  |
// | brightness-125 | filter: brightness(1.25); |
// | brightness-150 | filter: brightness(1.5);  |
// | brightness-200 | filter: brightness(2);    |
//
// Brightness: Utilities for applying brightness filters to an element.
// 1. Changing element brightness: Use the brightness-{amount?} utilities to control an element’s brightness.
// 2. Removing filters: To remove all of the filters on an element at once, use the filter-none utility, This can be useful when you want to remove filters conditionally, such as on hover or at a particular breakpoint.
export default function Brightness() {
  return (
    <img
      className="brightness-100"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
