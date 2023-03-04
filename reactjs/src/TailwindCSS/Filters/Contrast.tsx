// | Class        | Properties              |
// | ------------ | ----------------------- |
// | contrast-0   | filter: contrast(0);    |
// | contrast-50  | filter: contrast(.5);   |
// | contrast-75  | filter: contrast(.75);  |
// | contrast-100 | filter: contrast(1);    |
// | contrast-125 | filter: contrast(1.25); |
// | contrast-150 | filter: contrast(1.5);  |
// | contrast-200 | filter: contrast(2);    |
//
// Contrast: Utilities for applying contrast filters to an element.
// 1. Changing element contrast: Use the contrast-{amount?} utilities to control an element’s contrast.
// 2. Removing filters: To remove all of the filters on an element at once, use the filter-none utility, This can be useful when you want to remove filters conditionally, such as on hover or at a particular breakpoint.
export default function Contrast() {
  return (
    <img
      className="contrast-100"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
