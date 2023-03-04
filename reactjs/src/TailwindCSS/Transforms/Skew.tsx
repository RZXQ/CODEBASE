// | Class     | Properties               |
// | --------- | ------------------------ |
// | skew-x-0  | transform: skewX(0deg);  |
// | skew-y-0  | transform: skewY(0deg);  |
// | skew-x-1  | transform: skewX(1deg);  |
// | skew-y-1  | transform: skewY(1deg);  |
// | skew-x-2  | transform: skewX(2deg);  |
// | skew-y-2  | transform: skewY(2deg);  |
// | skew-x-3  | transform: skewX(3deg);  |
// | skew-y-3  | transform: skewY(3deg);  |
// | skew-x-6  | transform: skewX(6deg);  |
// | skew-y-6  | transform: skewY(6deg);  |
// | skew-x-12 | transform: skewX(12deg); |
// | skew-y-12 | transform: skewY(12deg); |
//
// Skew: Utilities for skewing elements with transform.
// 1. Skewing an element: Use the skew-x-{amount} and skew-y-{amount} utilities to skew an element.
// 2. Using negative values: To use a negative skew value, prefix the class name with a dash to convert it to a negative value.
// 3. Removing transforms: To remove all of the transforms on an element at once, use the transform-none utility. This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.
// 4. Hardware acceleration: If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the transform-gpu utility, Use transform-cpu to force things back to the CPU if you need to undo this conditionally.
export default function Skew() {
  return (
    <img
      className="skew-x-12"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
