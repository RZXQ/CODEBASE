// | Class     | Properties          |
// | --------- | ------------------- |
// | blur-none | filter: blur(0);    |
// | blur-sm   | filter: blur(4px);  |
// | blur      | filter: blur(8px);  |
// | blur-md   | filter: blur(12px); |
// | blur-lg   | filter: blur(16px); |
// | blur-xl   | filter: blur(24px); |
// | blur-2xl  | filter: blur(40px); |
// | blur-3xl  | filter: blur(64px); |
//
// Blur: Utilities for applying blur filters to an element.
// 1. Blurring elements: Use the blur-{amount?} utilities to blur an element.
// 2. Removing filters: To remove all of the filters on an element at once, use the filter-none utility.
export default function Blur() {
  return (
    <img
      className="blur-none"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
