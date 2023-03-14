// | Class              | Properties                   |
// | ------------------ | ---------------------------- |
// | backdrop-blur-none | backdrop-filter: blur(0);    |
// | backdrop-blur-sm   | backdrop-filter: blur(4px);  |
// | backdrop-blur      | backdrop-filter: blur(8px);  |
// | backdrop-blur-md   | backdrop-filter: blur(12px); |
// | backdrop-blur-lg   | backdrop-filter: blur(16px); |
// | backdrop-blur-xl   | backdrop-filter: blur(24px); |
// | backdrop-blur-2xl  | backdrop-filter: blur(40px); |
// | backdrop-blur-3xl  | backdrop-filter: blur(64px); |
//
// Backdrop Blur: Utilities for applying backdrop blur filters to an element.
// 1. Blurring behind an element: Use the backdrop-blur-{amount?} utilities to control an element’s backdrop blur.
// 2. Removing backdrop filters: To remove all of the backdrop filters on an element at once, use the backdrop-filter-none utility. This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint.
export default function BackdropBlur() {
  return (
    <div>
      <div className="absolute inset-6 h-10 w-10 backdrop-blur">hsd</div>
      <img
        className="h-24 w-24"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
