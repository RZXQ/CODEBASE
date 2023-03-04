// | Class        | Properties                          |
// | ------------ | ----------------------------------- |
// | underline    | text-decoration-line: underline;    |
// | overline     | text-decoration-line: overline;     |
// | line-through | text-decoration-line: line-through; |
// | no-underline | text-decoration-line: none;         |
//
// Text Decoration: Utilities for controlling the decoration of text.
// 1. Setting the text decoration: Control how text is decorated with the underline, no-underline, and line-through utilities.
export default function TextDecoration() {
  return (
    <div className="no-underline">
      The quick brown fox jumps over the lazy dog.
    </div>
  );
}
