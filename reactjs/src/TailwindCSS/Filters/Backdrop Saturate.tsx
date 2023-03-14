// | Class                 | Properties                      |
// | --------------------- | ------------------------------- |
// | backdrop-saturate-0   | backdrop-filter: saturate(0);   |
// | backdrop-saturate-50  | backdrop-filter: saturate(.5);  |
// | backdrop-saturate-100 | backdrop-filter: saturate(1);   |
// | backdrop-saturate-150 | backdrop-filter: saturate(1.5); |
// | backdrop-saturate-200 | backdrop-filter: saturate(2);   |
//
// Backdrop Saturate: Utilities for applying backdrop saturation filters to an element.
// 1. Changing backdrop saturation: Use the backdrop-saturate-{amount} utilities to control an element’s backdrop saturation.
//
export default function BackdropSaturate() {
  return (
    <div>
      <div className="backdrop-hue-50 absolute inset-6 h-10 w-10  backdrop-saturate-200"></div>
      <img
        className="h-24 w-24"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        alt=""
      />
    </div>
  );
}
