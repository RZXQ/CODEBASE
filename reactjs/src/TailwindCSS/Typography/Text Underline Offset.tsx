// | Class                 | Properties                   |
// | --------------------- | ---------------------------- |
// | underline-offset-auto | text-underline-offset: auto; |
// | underline-offset-0    | text-underline-offset: 0px;  |
// | underline-offset-1    | text-underline-offset: 1px;  |
// | underline-offset-2    | text-underline-offset: 2px;  |
// | underline-offset-4    | text-underline-offset: 4px;  |
// | underline-offset-8    | text-underline-offset: 8px;  |
//
// Text Underline Offset: Utilities for controlling the offset of a text underline.
// 1. Setting the underline offset: Use the underline-offset-{width} utilities to change the offset of a text underline.
export default function TextUnderlineOffset() {
  return (
    <p className="underline underline-offset-auto">
      The quick brown fox jumps over the lazy dog.
    </p>
  );
}
