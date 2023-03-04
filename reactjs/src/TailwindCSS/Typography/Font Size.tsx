// | Class     | Properties                                                   |
// | --------- | ------------------------------------------------------------ |
// | text-xs   | font-size: 0.75rem; /* 12px */ line-height: 1rem; /* 16px */ |
// | text-sm   | font-size: 0.875rem; /* 14px */ line-height: 1.25rem; /* 20px */ |
// | text-base | font-size: 1rem; /* 16px */ line-height: 1.5rem; /* 24px */  |
// | text-lg   | font-size: 1.125rem; /* 18px */ line-height: 1.75rem; /* 28px */ |
// | text-xl   | font-size: 1.25rem; /* 20px */ line-height: 1.75rem; /* 28px */ |
// | text-2xl  | font-size: 1.5rem; /* 24px */ line-height: 2rem; /* 32px */  |
// | text-3xl  | font-size: 1.875rem; /* 30px */ line-height: 2.25rem; /* 36px */ |
// | text-4xl  | font-size: 2.25rem; /* 36px */ line-height: 2.5rem; /* 40px */ |
// | text-5xl  | font-size: 3rem; /* 48px */ line-height: 1;                  |
// | text-6xl  | font-size: 3.75rem; /* 60px */ line-height: 1;               |
// | text-7xl  | font-size: 4.5rem; /* 72px */ line-height: 1;                |
// | text-8xl  | font-size: 6rem; /* 96px */ line-height: 1;                  |
// | text-9xl  | font-size: 8rem; /* 128px */ line-height: 1;                 |
//
// Font Size: Utilities for controlling the font size of an element.
// 1. Setting the font size: Control the font size of an element using the text-{size} utilities.
export default function FontSize() {
  return (
    <div className="text-base">
      The quick brown fox jumps over the lazy dog.
    </div>
  );
}
