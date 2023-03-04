// | Class                | Properties                                                   |
// | -------------------- | ------------------------------------------------------------ |
// | antialiased          | -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; |
// | subpixel-antialiased | -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; |
//
// Font Smoothing: Utilities for controlling the font smoothing of an element.
// 1. Applying font smoothing: Use the subpixel-antialiased utility to render text using subpixel antialiasing and the antialiased utility to render text using grayscale antialiasing.
export default function FontSmoothing() {
  return (
    <div>
      <div className="subpixel-antialiased">
        The quick brown fox jumps over the lazy dog.
      </div>
    </div>
  );
}
