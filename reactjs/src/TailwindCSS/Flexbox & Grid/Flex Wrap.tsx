// | Class             | Properties               |
// | ----------------- | ------------------------ |
// | flex-wrap         | flex-wrap: wrap;         |
// | flex-wrap-reverse | flex-wrap: wrap-reverse; |
// | flex-nowrap       | flex-wrap: nowrap;       |
//
// Flex Wrap: Utilities for controlling how flex items wrap.
// 1. Don't wrap: Use flex-nowrap to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.
// 2. Wrap normally: Use flex-wrap to allow flex items to wrap.
// 3. Wrap reversed: Use flex-wrap-reverse to wrap flex items in the reverse direction.
export default function FlexWrap() {
  return (
    <div className="flex flex-wrap-reverse">
      <div className="w-96 flex-none bg-red-200">01</div>
      <div className="w-96 flex-none bg-green-200">02</div>
      <div className="w-96 flex-none bg-blue-200">03</div>
    </div>
  );
}
