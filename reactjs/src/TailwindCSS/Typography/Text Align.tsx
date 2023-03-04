// | Class        | Properties           |
// | ------------ | -------------------- |
// | text-left    | text-align: left;    |
// | text-center  | text-align: center;  |
// | text-right   | text-align: right;   |
// | text-justify | text-align: justify; |
// | text-start   | text-align: start;   |
// | text-end     | text-align: end;     |
//
// Text Align: Utilities for controlling the alignment of text.
// 1. Setting the text alignment: Control the text alignment of an element using the text-left, text-center, text-right, and text-justify utilities.
export default function TextAlign() {
  return (
    <div>
      <p className="text-left">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <p className="text-center">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <p className="text-right">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <p className="text-justify">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
    </div>
  );
}
