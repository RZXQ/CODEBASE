// | Class                | Properties                            |
// | -------------------- | ------------------------------------- |
// | decoration-auto      | text-decoration-thickness: auto;      |
// | decoration-from-font | text-decoration-thickness: from-font; |
// | decoration-0         | text-decoration-thickness: 0px;       |
// | decoration-1         | text-decoration-thickness: 1px;       |
// | decoration-2         | text-decoration-thickness: 2px;       |
// | decoration-4         | text-decoration-thickness: 4px;       |
// | decoration-8         | text-decoration-thickness: 8px;       |
//
// Text Decoration Thickness: Utilities for controlling the thickness of text decorations.
// 1. Setting the text decoration thickness: Use the decoration-{width} utilities to change the thickness of an element’s text decoration.
export default function TextDecorationThickness() {
  return (
    <p className="underline decoration-solid decoration-auto">
      The quick brown fox jumps over the lazy dog.
    </p>
  );
}
