// | Class       | Properties               |
// | ----------- | ------------------------ |
// | grayscale-0 | filter: grayscale(0);    |
// | grayscale   | filter: grayscale(100%); |
//
// Grayscale: Utilities for applying grayscale filters to an element.
// 1. Making an element grayscale: Use the grayscale and grayscale-0 utilities to control whether an element should be rendered as grayscale or in full color.
// 2. Removing filters: To remove all of the filters on an element at once, use the filter-none utility, This can be useful when you want to remove filters conditionally, such as on hover or at a particular breakpoint.
export default function Grayscale() {
  return (
    <img
      className="grayscale"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
