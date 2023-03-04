// | Class       | Properties               |
// | ----------- | ------------------------ |
// | scale-0     | transform: scale(0);     |
// | scale-x-0   | transform: scaleX(0);    |
// | scale-y-0   | transform: scaleY(0);    |
// | scale-50    | transform: scale(.5);    |
// | scale-x-50  | transform: scaleX(.5);   |
// | scale-y-50  | transform: scaleY(.5);   |
// | scale-75    | transform: scale(.75);   |
// | scale-x-75  | transform: scaleX(.75);  |
// | scale-y-75  | transform: scaleY(.75);  |
// | scale-90    | transform: scale(.9);    |
// | scale-x-90  | transform: scaleX(.9);   |
// | scale-y-90  | transform: scaleY(.9);   |
// | scale-95    | transform: scale(.95);   |
// | scale-x-95  | transform: scaleX(.95);  |
// | scale-y-95  | transform: scaleY(.95);  |
// | scale-100   | transform: scale(1);     |
// | scale-x-100 | transform: scaleX(1);    |
// | scale-y-100 | transform: scaleY(1);    |
// | scale-105   | transform: scale(1.05);  |
// | scale-x-105 | transform: scaleX(1.05); |
// | scale-y-105 | transform: scaleY(1.05); |
// | scale-110   | transform: scale(1.1);   |
// | scale-x-110 | transform: scaleX(1.1);  |
// | scale-y-110 | transform: scaleY(1.1);  |
// | scale-125   | transform: scale(1.25);  |
// | scale-x-125 | transform: scaleX(1.25); |
// | scale-y-125 | transform: scaleY(1.25); |
// | scale-150   | transform: scale(1.5);   |
// | scale-x-150 | transform: scaleX(1.5);  |
// | scale-y-150 | transform: scaleY(1.5);  |
//
// Scale: Utilities for scaling elements with transform.
// 1. Scaling an element: Use the scale-{percentage}, scale-x-{percentage}, and scale-y-{percentage} utilities to scale an element.
// 2. Using negative values: To use a negative scale value, prefix the class name with a dash to convert it to a negative value.
// 3. Removing transforms: To remove all of the transforms on an element at once, use the transform-none utility, This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.
// 4. Hardware acceleration: If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the transform-gpu utility. Use transform-cpu to force things back to the CPU if you need to undo this conditionally.
export default function Scale() {
  return (
    <div>
      <img
        className="h-24 w-24 scale-100"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
