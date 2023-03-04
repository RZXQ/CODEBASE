// | Class      | Properties          |
// | ---------- | ------------------- |
// | italic     | font-style: italic; |
// | not-italic | font-style: normal; |
//
// Font Style: Utilities for controlling the style of text.
// 1. Italicizing text: The italic utility can be used to make text italic. Likewise, the not-italic utility can be used to display text normally — typically to reset italic text at different breakpoints.
export default function FontStyle() {
  return (
    <div className="italic">The quick brown fox jumps over the lazy dog.</div>
  );
}
