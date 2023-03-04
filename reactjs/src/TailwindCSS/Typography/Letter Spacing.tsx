// | Class            | Properties                |
// | ---------------- | ------------------------- |
// | tracking-tighter | letter-spacing: -0.05em;  |
// | tracking-tight   | letter-spacing: -0.025em; |
// | tracking-normal  | letter-spacing: 0em;      |
// | tracking-wide    | letter-spacing: 0.025em;  |
// | tracking-wider   | letter-spacing: 0.05em;   |
// | tracking-widest  | letter-spacing: 0.1em;    |
//
// Letter Spacing: Utilities for controlling the tracking (letter spacing) of an element.
// 1. Setting the letter spacing: Control the letter spacing of an element using the tracking-{size} utilities.
export default function LetterSpacing() {
  return (
    <div className="tracking-normal">
      The quick brown fox jumps over the lazy dog.
    </div>
  );
}
