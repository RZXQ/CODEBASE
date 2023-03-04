// | Class  | Properties    |
// | ------ | ------------- |
// | grow   | flex-grow: 1; |
// | grow-0 | flex-grow: 0; |
//
// Flex Grow: Utilities for controlling how flex items grow.
// 1. Grow: Use grow to allow a flex item to grow to fill any available space.
// 2. Don't grow: Use grow-0 to prevent a flex item from growing.
export default function FlexGrow() {
  return (
    <div>
      <div className="flex">
        {/* flex-initial + grow = flex-auto */}
        <div className="w-96  grow bg-red-200">01</div>
        <div className="w-36 grow bg-green-200">02</div>
      </div>
      <div className="flex">
        {/* flex-auto + grow-0 = flex-initial */}
        <div className="w-96 flex-auto grow-0 bg-red-200">01</div>
        <div className="w-36 flex-auto grow-0 bg-green-200">02</div>
      </div>
    </div>
  );
}
