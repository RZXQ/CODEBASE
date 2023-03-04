// | Class       | Properties    |
// | ----------- | ------------- |
// | order-1     | order: 1;     |
// | order-2     | order: 2;     |
// | order-3     | order: 3;     |
// | order-4     | order: 4;     |
// | order-5     | order: 5;     |
// | order-6     | order: 6;     |
// | order-7     | order: 7;     |
// | order-8     | order: 8;     |
// | order-9     | order: 9;     |
// | order-10    | order: 10;    |
// | order-11    | order: 11;    |
// | order-12    | order: 12;    |
// | order-first | order: -9999; |
// | order-last  | order: 9999;  |
// | order-none  | order: 0;     |
//
// Order: Utilities for controlling the order of flex and grid items.
// 1. Ordering flex and grid items: Use order-{order} to render flex and grid items in a different order than they appear in the DOM.
// 2. Using negative values: To use a negative order value, prefix the class name with a dash to convert it to a negative value.
export default function Order() {
  return (
    <div className="flex justify-between">
      <div className="order-1 bg-red-200">01</div>
      <div className="order-2 bg-green-200">02</div>
      <div className="order-3 bg-blue-200">03</div>
    </div>
  );
}
