// | Class             | Properties                     |
// | ----------------- | ------------------------------ |
// | backdrop-invert-0 | backdrop-filter: invert(0);    |
// | backdrop-invert   | backdrop-filter: invert(100%); |
//
// Backdrop Invert: Utilities for applying backdrop invert filters to an element.
// 1. Inverting an element's backdrop: Use the backdrop-invert and backdrop-invert-0 utilities to control whether an element should be rendered with inverted backdrop colors or normally.
// 2. Removing backdrop filters: To remove all of the backdrop filters on an element at once, use the backdrop-filter-none utility. This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint.
export default function BackdropInvert() {
  return (
    <div>
      <div className="absolute inset-6 h-10 w-10 backdrop-invert"></div>
      <img
        className="h-24 w-24"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
