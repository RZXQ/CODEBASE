// | Class      | Properties                        |
// | ---------- | --------------------------------- |
// | indent-0   | text-indent: 0px;                 |
// | indent-px  | text-indent: 1px;                 |
// | indent-0.5 | text-indent: 0.125rem; /* 2px */  |
// | indent-1   | text-indent: 0.25rem; /* 4px */   |
// | indent-1.5 | text-indent: 0.375rem; /* 6px */  |
// | indent-2   | text-indent: 0.5rem; /* 8px */    |
// | indent-2.5 | text-indent: 0.625rem; /* 10px */ |
// | indent-3   | text-indent: 0.75rem; /* 12px */  |
// | indent-3.5 | text-indent: 0.875rem; /* 14px */ |
// | indent-4   | text-indent: 1rem; /* 16px */     |
// | indent-5   | text-indent: 1.25rem; /* 20px */  |
// | indent-6   | text-indent: 1.5rem; /* 24px */   |
// | indent-7   | text-indent: 1.75rem; /* 28px */  |
// | indent-8   | text-indent: 2rem; /* 32px */     |
// | indent-9   | text-indent: 2.25rem; /* 36px */  |
// | indent-10  | text-indent: 2.5rem; /* 40px */   |
// | indent-11  | text-indent: 2.75rem; /* 44px */  |
// | indent-12  | text-indent: 3rem; /* 48px */     |
// | indent-14  | text-indent: 3.5rem; /* 56px */   |
// | indent-16  | text-indent: 4rem; /* 64px */     |
// | indent-20  | text-indent: 5rem; /* 80px */     |
// | indent-24  | text-indent: 6rem; /* 96px */     |
// | indent-28  | text-indent: 7rem; /* 112px */    |
// | indent-32  | text-indent: 8rem; /* 128px */    |
// | indent-36  | text-indent: 9rem; /* 144px */    |
// | indent-40  | text-indent: 10rem; /* 160px */   |
// | indent-44  | text-indent: 11rem; /* 176px */   |
// | indent-48  | text-indent: 12rem; /* 192px */   |
// | indent-52  | text-indent: 13rem; /* 208px */   |
// | indent-56  | text-indent: 14rem; /* 224px */   |
// | indent-60  | text-indent: 15rem; /* 240px */   |
// | indent-64  | text-indent: 16rem; /* 256px */   |
// | indent-72  | text-indent: 18rem; /* 288px */   |
// | indent-80  | text-indent: 20rem; /* 320px */   |
// | indent-96  | text-indent: 24rem; /* 384px */   |
//
// Text Indent: Utilities for controlling the amount of empty space shown before text in a block.
// 1. Adding a text indent: Use the indent-{width} utilities to set the amount of empty space (indentation) that’s shown before text in a block.
// 2. Using negative values: To use a negative text indent value, prefix the class name with a dash to convert it to a negative value.
export default function TextIndent() {
  return (
    <p className="indent-0">
      So I started to walk into the water. I won't lie to you boys, I was
      terrified. But I pressed on, and as I made my way past the breakers a
      strange calm came over me. I don't know if it was divine intervention or
      the kinship of all living things but I tell you Jerry at that moment, I
      was a marine biologist.
    </p>
  );
}
