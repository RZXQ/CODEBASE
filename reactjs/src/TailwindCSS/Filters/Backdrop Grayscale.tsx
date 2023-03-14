// | Class                | Properties                        |
// | -------------------- | --------------------------------- |
// | backdrop-grayscale-0 | backdrop-filter: grayscale(0);    |
// | backdrop-grayscale   | backdrop-filter: grayscale(100%); |
//
// Backdrop Grayscale: Utilities for applying backdrop grayscale filters to an element.
// 1. Making an element grayscale: Use the backdrop-grayscale and backdrop-grayscale-0 utilities to control whether an element’s backdrop should be rendered as grayscale or in full color.
// 2. Removing backdrop filters: To remove all of the backdrop filters on an element at once, use the backdrop-filter-none utility. This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint.
export default function BackdropGrayscale() {
  return (
    <div>
      <div className="absolute inset-6 h-10 w-10 backdrop-grayscale"></div>
      <img
        className="h-24 w-24"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
