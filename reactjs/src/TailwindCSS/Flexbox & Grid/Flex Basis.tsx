// | Class       | Properties                       |
// | ----------- | -------------------------------- |
// | basis-0     | flex-basis: 0px;                 |
// | basis-1     | flex-basis: 0.25rem; /* 4px */   |
// | basis-2     | flex-basis: 0.5rem; /* 8px */    |
// | basis-3     | flex-basis: 0.75rem; /* 12px */  |
// | basis-4     | flex-basis: 1rem; /* 16px */     |
// | basis-5     | flex-basis: 1.25rem; /* 20px */  |
// | basis-6     | flex-basis: 1.5rem; /* 24px */   |
// | basis-7     | flex-basis: 1.75rem; /* 28px */  |
// | basis-8     | flex-basis: 2rem; /* 32px */     |
// | basis-9     | flex-basis: 2.25rem; /* 36px */  |
// | basis-10    | flex-basis: 2.5rem; /* 40px */   |
// | basis-11    | flex-basis: 2.75rem; /* 44px */  |
// | basis-12    | flex-basis: 3rem; /* 48px */     |
// | basis-14    | flex-basis: 3.5rem; /* 56px */   |
// | basis-16    | flex-basis: 4rem; /* 64px */     |
// | basis-20    | flex-basis: 5rem; /* 80px */     |
// | basis-24    | flex-basis: 6rem; /* 96px */     |
// | basis-28    | flex-basis: 7rem; /* 112px */    |
// | basis-32    | flex-basis: 8rem; /* 128px */    |
// | basis-36    | flex-basis: 9rem; /* 144px */    |
// | basis-40    | flex-basis: 10rem; /* 160px */   |
// | basis-44    | flex-basis: 11rem; /* 176px */   |
// | basis-48    | flex-basis: 12rem; /* 192px */   |
// | basis-52    | flex-basis: 13rem; /* 208px */   |
// | basis-56    | flex-basis: 14rem; /* 224px */   |
// | basis-60    | flex-basis: 15rem; /* 240px */   |
// | basis-64    | flex-basis: 16rem; /* 256px */   |
// | basis-72    | flex-basis: 18rem; /* 288px */   |
// | basis-80    | flex-basis: 20rem; /* 320px */   |
// | basis-96    | flex-basis: 24rem; /* 384px */   |
// | basis-auto  | flex-basis: auto;                |
// | basis-px    | flex-basis: 1px;                 |
// | basis-0.5   | flex-basis: 0.125rem; /* 2px */  |
// | basis-1.5   | flex-basis: 0.375rem; /* 6px */  |
// | basis-2.5   | flex-basis: 0.625rem; /* 10px */ |
// | basis-3.5   | flex-basis: 0.875rem; /* 14px */ |
// | basis-1/2   | flex-basis: 50%;                 |
// | basis-1/3   | flex-basis: 33.333333%;          |
// | basis-2/3   | flex-basis: 66.666667%;          |
// | basis-1/4   | flex-basis: 25%;                 |
// | basis-2/4   | flex-basis: 50%;                 |
// | basis-3/4   | flex-basis: 75%;                 |
// | basis-1/5   | flex-basis: 20%;                 |
// | basis-2/5   | flex-basis: 40%;                 |
// | basis-3/5   | flex-basis: 60%;                 |
// | basis-4/5   | flex-basis: 80%;                 |
// | basis-1/6   | flex-basis: 16.666667%;          |
// | basis-2/6   | flex-basis: 33.333333%;          |
// | basis-3/6   | flex-basis: 50%;                 |
// | basis-4/6   | flex-basis: 66.666667%;          |
// | basis-5/6   | flex-basis: 83.333333%;          |
// | basis-1/12  | flex-basis: 8.333333%;           |
// | basis-2/12  | flex-basis: 16.666667%;          |
// | basis-3/12  | flex-basis: 25%;                 |
// | basis-4/12  | flex-basis: 33.333333%;          |
// | basis-5/12  | flex-basis: 41.666667%;          |
// | basis-6/12  | flex-basis: 50%;                 |
// | basis-7/12  | flex-basis: 58.333333%;          |
// | basis-8/12  | flex-basis: 66.666667%;          |
// | basis-9/12  | flex-basis: 75%;                 |
// | basis-10/12 | flex-basis: 83.333333%;          |
// | basis-11/12 | flex-basis: 91.666667%;          |
// | basis-full  | flex-basis: 100%;                |
//
// Flex Basis: Utilities for controlling the initial size of flex items.
// 1. Setting the flex basis: Use the basis-{size} utilities to set the initial size of flex items.
export default function FlexBasis() {
    return (
        <div className="flex">
            <div className="basis-1/4 bg-red-200">01</div>
            <div className="basis-1/4 bg-green-200">02</div>
            <div className="basis-1/4 bg-blue-200">03</div>
        </div>
    );
}