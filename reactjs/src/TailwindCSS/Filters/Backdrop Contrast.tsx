// | Class                 | Properties                       |
// | --------------------- | -------------------------------- |
// | backdrop-contrast-0   | backdrop-filter: contrast(0);    |
// | backdrop-contrast-50  | backdrop-filter: contrast(.5);   |
// | backdrop-contrast-75  | backdrop-filter: contrast(.75);  |
// | backdrop-contrast-100 | backdrop-filter: contrast(1);    |
// | backdrop-contrast-125 | backdrop-filter: contrast(1.25); |
// | backdrop-contrast-150 | backdrop-filter: contrast(1.5);  |
// | backdrop-contrast-200 | backdrop-filter: contrast(2);    |
//
// Backdrop Contrast: Utilities for applying backdrop contrast filters to an element.
// 1. Controlling backdrop contrast: Use the backdrop-contrast-{amount?} utilities to control an element’s backdrop contrast.
// 2. Removing backdrop filters: To remove all of the backdrop filters on an element at once, use the backdrop-filter-none utility.  This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint.
export default function BackdropContrast() {
  return (
    <div>
      <div className="absolute inset-6 h-10 w-10 backdrop-contrast-50"></div>
      <img
        className="h-24 w-24"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
