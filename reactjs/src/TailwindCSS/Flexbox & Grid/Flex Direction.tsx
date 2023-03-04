// | Class            | Properties                      |
// | ---------------- | ------------------------------- |
// | flex-row         | flex-direction: row;            |
// | flex-row-reverse | flex-direction: row-reverse;    |
// | flex-col         | flex-direction: column;         |
// | flex-col-reverse | flex-direction: column-reverse; |
//
// Flex Direction: Utilities for controlling the direction of flex items.
// 1. Row: Use flex-row to position flex items horizontally in the same direction as text
// 2. Row reversed: Use flex-row-reverse to position flex items horizontally in the opposite direction.
// 3. Column: Use flex-col to position flex items vertically.
// 4. Column reversed: Use flex-col-reverse to position flex items vertically in the opposite direction.
export default function FlexDirection() {
  return (
    <div className="flex flex-row">
      <div className="bg-red-200">01</div>
      <div className="bg-yellow-200">02</div>
      <div className="bg-green-200">03</div>
      <div className="bg-blue-200">04</div>
    </div>
  );
}
