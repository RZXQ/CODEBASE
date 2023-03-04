// | Class             | Properties                     |
// | ----------------- | ------------------------------ |
// | decoration-solid  | text-decoration-style: solid;  |
// | decoration-double | text-decoration-style: double; |
// | decoration-dotted | text-decoration-style: dotted; |
// | decoration-dashed | text-decoration-style: dashed; |
// | decoration-wavy   | text-decoration-style: wavy;   |
//
// Text Decoration Style: Utilities for controlling the style of text decorations.
// 1. Setting the text decoration style: Use the decoration-{style} utilities to change the style of an element’s text decoration.
export default function TextDecorationStyle() {
  return (
    <p className="underline decoration-solid">
      The quick brown fox jumps over the lazy dog.
    </p>
  );
}
