// | Class               | Properties                      |
// | ------------------- | ------------------------------- |
// | origin-center       | transform-origin: center;       |
// | origin-top          | transform-origin: top;          |
// | origin-top-right    | transform-origin: top right;    |
// | origin-right        | transform-origin: right;        |
// | origin-bottom-right | transform-origin: bottom right; |
// | origin-bottom       | transform-origin: bottom;       |
// | origin-bottom-left  | transform-origin: bottom left;  |
// | origin-left         | transform-origin: left;         |
// | origin-top-left     | transform-origin: top left;     |
//
// Transform Origin: Utilities for specifying the origin for an element's transformations.
// 1. Changing the transform origin: Specify an element’s transform origin using the origin-{keyword} utilities.
export default function TransformOrigin() {
  return (
    <img
      className="origin-center rotate-0"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
