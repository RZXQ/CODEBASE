// | Class        | Properties             |
// | ------------ | ---------------------- |
// | saturate-0   | filter: saturate(0);   |
// | saturate-50  | filter: saturate(.5);  |
// | saturate-100 | filter: saturate(1);   |
// | saturate-150 | filter: saturate(1.5); |
// | saturate-200 | filter: saturate(2);   |

// Saturate: Utilities for applying saturation filters to an element.
// 1. Changing element saturation: Use the saturate-{amount} utilities to control an element’s saturation.
// 2. Removing filters: To remove all of the filters on an element at once, use the filter-none utility.
export default function Saturate() {
  return (
    <img
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
      className="saturate-100"
    />
  );
}
