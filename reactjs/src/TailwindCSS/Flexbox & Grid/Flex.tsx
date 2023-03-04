// | Class        | Properties      |
// | ------------ | --------------- |
// | flex-1       | flex: 1 1 0%;   |
// | flex-auto    | flex: 1 1 auto; |
// | flex-initial | flex: 0 1 auto; |
// | flex-none    | flex: none;     |
//
// Flex: Utilities for controlling how flex items both grow and shrink.
// 1. Initial: Use flex-initial to allow a flex item to shrink but not grow, taking into account its initial size.
// 2. Flex 1: Use flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size.
// 3. Auto: Use flex-auto to allow a flex item to grow and shrink, taking into account its initial size.
// 4. None: Use flex-none to prevent a flex item from growing or shrinking.
export default function Flex() {
  return (
    <div className="flex">
      <div className="w-96 flex-initial bg-red-200">01</div>
      <div className="w-96 flex-initial bg-green-200">02</div>
    </div>
  );
}
