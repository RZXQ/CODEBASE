// | Class                   | Properties                         |
// | ----------------------- | ---------------------------------- |
// | backdrop-brightness-0   | backdrop-filter: brightness(0);    |
// | backdrop-brightness-50  | backdrop-filter: brightness(.5);   |
// | backdrop-brightness-75  | backdrop-filter: brightness(.75);  |
// | backdrop-brightness-90  | backdrop-filter: brightness(.9);   |
// | backdrop-brightness-95  | backdrop-filter: brightness(.95);  |
// | backdrop-brightness-100 | backdrop-filter: brightness(1);    |
// | backdrop-brightness-105 | backdrop-filter: brightness(1.05); |
// | backdrop-brightness-110 | backdrop-filter: brightness(1.1);  |
// | backdrop-brightness-125 | backdrop-filter: brightness(1.25); |
// | backdrop-brightness-150 | backdrop-filter: brightness(1.5);  |
// | backdrop-brightness-200 | backdrop-filter: brightness(2);    |
//
// Backdrop Brightness: Utilities for applying backdrop brightness filters to an element.
// 1. Controlling backdrop brightness: Use the backdrop-brightness-{amount?} utilities to control an element’s backdrop brightness.
// 2. Removing backdrop filters: To remove all of the backdrop filters on an element at once, use the backdrop-filter-none utility. This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint.
export default function BackdropBrightness() {
  return (
    <div>
      <div className="absolute inset-6 h-10 w-10 backdrop-brightness-150">

      </div>
      <img
        className="h-24 w-24"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
