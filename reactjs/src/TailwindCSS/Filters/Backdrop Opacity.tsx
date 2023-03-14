// | Class                | Properties                      |
// | -------------------- | ------------------------------- |
// | backdrop-opacity-0   | backdrop-filter: opacity(0);    |
// | backdrop-opacity-5   | backdrop-filter: opacity(0.05); |
// | backdrop-opacity-10  | backdrop-filter: opacity(0.1);  |
// | backdrop-opacity-20  | backdrop-filter: opacity(0.2);  |
// | backdrop-opacity-25  | backdrop-filter: opacity(0.25); |
// | backdrop-opacity-30  | backdrop-filter: opacity(0.3);  |
// | backdrop-opacity-40  | backdrop-filter: opacity(0.4);  |
// | backdrop-opacity-50  | backdrop-filter: opacity(0.5);  |
// | backdrop-opacity-60  | backdrop-filter: opacity(0.6);  |
// | backdrop-opacity-70  | backdrop-filter: opacity(0.7);  |
// | backdrop-opacity-75  | backdrop-filter: opacity(0.75); |
// | backdrop-opacity-80  | backdrop-filter: opacity(0.8);  |
// | backdrop-opacity-90  | backdrop-filter: opacity(0.9);  |
// | backdrop-opacity-95  | backdrop-filter: opacity(0.95); |
// | backdrop-opacity-100 | backdrop-filter: opacity(1);    |
//
// Backdrop Opacity: Utilities for applying backdrop opacity filters to an element.
// 1. Controlling opacity of backdrop filters: Use the backdrop-opacity-{amount} utilities to control the opacity of other backdrop filters applied to an element.
// 2. Removing backdrop filters: To remove all of the backdrop filters on an element at once, use the backdrop-filter-none utility. This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint.
export default function BackdropOpacity() {
  return (
    <div>
      <div className="absolute inset-6 h-10 w-10 backdrop-blur-md backdrop-opacity-50"></div>
      <img
        className="h-24 w-24"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
