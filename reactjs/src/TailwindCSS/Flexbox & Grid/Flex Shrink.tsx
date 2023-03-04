// | Class    | Properties      |
// | -------- | --------------- |
// | shrink   | flex-shrink: 1; |
// | shrink-0 | flex-shrink: 0; |
//
// Flex Shrink: Utilities for controlling how flex items shrink.
// 1. Shrink: Use shrink to allow a flex item to shrink if needed.
// 2. Don't shrink: Use shrink-0 to prevent a flex item from shrinking.
export default function FlexShrink() {
  return (
    <div>
      <div className="flex">
        {/* flex-none + shrink = flex-initial */}
        <div className="w-96 shrink bg-red-200">01</div>
        <div className="w-36 shrink bg-green-200">02</div>
      </div>
      <div className="flex">
        {/* flex-initial + shrink-0 = flex-none */}
        <div className="w-96 shrink-0 bg-red-200">01</div>
        <div className="w-36 shrink-0 bg-green-200">02</div>
      </div>
    </div>
  );
}
