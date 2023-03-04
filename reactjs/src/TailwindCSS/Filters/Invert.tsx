// | Class    | Properties            |
// | -------- | --------------------- |
// | invert-0 | filter: invert(0);    |
// | invert   | filter: invert(100%); |
//
// Invert: Utilities for applying invert filters to an element.
// 1. Inverting an element's color: Use the invert and invert-0 utilities to control whether an element should be rendered with inverted colors or normally.
// 2. Removing filters: To remove all of the filters on an element at once, use the filter-none utility, This can be useful when you want to remove filters conditionally, such as on hover or at a particular breakpoint.
export default function Invert() {
  return (
    <img
      className="invert-0"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
