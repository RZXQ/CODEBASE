// | Class      | Properties                 |
// | ---------- | -------------------------- |
// | rotate-0   | transform: rotate(0deg);   |
// | rotate-1   | transform: rotate(1deg);   |
// | rotate-2   | transform: rotate(2deg);   |
// | rotate-3   | transform: rotate(3deg);   |
// | rotate-6   | transform: rotate(6deg);   |
// | rotate-12  | transform: rotate(12deg);  |
// | rotate-45  | transform: rotate(45deg);  |
// | rotate-90  | transform: rotate(90deg);  |
// | rotate-180 | transform: rotate(180deg); |
//
// Rotate: Utilities for rotating elements with transform.
// 1. Rotating an element: Use the rotate-{angle} utilities to rotate an element.
// 2. Using negative values: To use a negative rotate value, prefix the class name with a dash to convert it to a negative value.
// 3. Removing transforms: To remove all of the transforms on an element at once, use the transform-none utility, This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.
// 4. Hardware acceleration: If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the transform-gpu utility, Use transform-cpu to force things back to the CPU if you need to undo this conditionally.
export default function Rotate() {
  return (
    <img
      className="rotate-0"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
