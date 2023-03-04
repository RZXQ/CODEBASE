// | Class            | Properties                         |
// | ---------------- | ---------------------------------- |
// | translate-x-0    | transform: translateX(0px);        |
// | translate-y-0    | transform: translateY(0px);        |
// | translate-x-px   | transform: translateX(1px);        |
// | translate-y-px   | transform: translateY(1px);        |
// | translate-x-0.5  | transform: translateX(0.125rem);   |
// | translate-y-0.5  | transform: translateY(0.125rem);   |
// | translate-x-1    | transform: translateX(0.25rem);    |
// | translate-y-1    | transform: translateY(0.25rem);    |
// | translate-x-1.5  | transform: translateX(0.375rem);   |
// | translate-y-1.5  | transform: translateY(0.375rem);   |
// | translate-x-2    | transform: translateX(0.5rem);     |
// | translate-y-2    | transform: translateY(0.5rem);     |
// | translate-x-2.5  | transform: translateX(0.625rem);   |
// | translate-y-2.5  | transform: translateY(0.625rem);   |
// | translate-x-3    | transform: translateX(0.75rem);    |
// | translate-y-3    | transform: translateY(0.75rem);    |
// | translate-x-3.5  | transform: translateX(0.875rem);   |
// | translate-y-3.5  | transform: translateY(0.875rem);   |
// | translate-x-4    | transform: translateX(1rem);       |
// | translate-y-4    | transform: translateY(1rem);       |
// | translate-x-5    | transform: translateX(1.25rem);    |
// | translate-y-5    | transform: translateY(1.25rem);    |
// | translate-x-6    | transform: translateX(1.5rem);     |
// | translate-y-6    | transform: translateY(1.5rem);     |
// | translate-x-7    | transform: translateX(1.75rem);    |
// | translate-y-7    | transform: translateY(1.75rem);    |
// | translate-x-8    | transform: translateX(2rem);       |
// | translate-y-8    | transform: translateY(2rem);       |
// | translate-x-9    | transform: translateX(2.25rem);    |
// | translate-y-9    | transform: translateY(2.25rem);    |
// | translate-x-10   | transform: translateX(2.5rem);     |
// | translate-y-10   | transform: translateY(2.5rem);     |
// | translate-x-11   | transform: translateX(2.75rem);    |
// | translate-y-11   | transform: translateY(2.75rem);    |
// | translate-x-12   | transform: translateX(3rem);       |
// | translate-y-12   | transform: translateY(3rem);       |
// | translate-x-14   | transform: translateX(3.5rem);     |
// | translate-y-14   | transform: translateY(3.5rem);     |
// | translate-x-16   | transform: translateX(4rem);       |
// | translate-y-16   | transform: translateY(4rem);       |
// | translate-x-20   | transform: translateX(5rem);       |
// | translate-y-20   | transform: translateY(5rem);       |
// | translate-x-24   | transform: translateX(6rem);       |
// | translate-y-24   | transform: translateY(6rem);       |
// | translate-x-28   | transform: translateX(7rem);       |
// | translate-y-28   | transform: translateY(7rem);       |
// | translate-x-32   | transform: translateX(8rem);       |
// | translate-y-32   | transform: translateY(8rem);       |
// | translate-x-36   | transform: translateX(9rem);       |
// | translate-y-36   | transform: translateY(9rem);       |
// | translate-x-40   | transform: translateX(10rem);      |
// | translate-y-40   | transform: translateY(10rem);      |
// | translate-x-44   | transform: translateX(11rem);      |
// | translate-y-44   | transform: translateY(11rem);      |
// | translate-x-48   | transform: translateX(12rem);      |
// | translate-y-48   | transform: translateY(12rem);      |
// | translate-x-52   | transform: translateX(13rem);      |
// | translate-y-52   | transform: translateY(13rem);      |
// | translate-x-56   | transform: translateX(14rem);      |
// | translate-y-56   | transform: translateY(14rem);      |
// | translate-x-60   | transform: translateX(15rem);      |
// | translate-y-60   | transform: translateY(15rem);      |
// | translate-x-64   | transform: translateX(16rem);      |
// | translate-y-64   | transform: translateY(16rem);      |
// | translate-x-72   | transform: translateX(18rem);      |
// | translate-y-72   | transform: translateY(18rem);      |
// | translate-x-80   | transform: translateX(20rem);      |
// | translate-y-80   | transform: translateY(20rem);      |
// | translate-x-96   | transform: translateX(24rem);      |
// | translate-y-96   | transform: translateY(24rem);      |
// | translate-x-1/2  | transform: translateX(50%);        |
// | translate-x-1/3  | transform: translateX(33.333333%); |
// | translate-x-2/3  | transform: translateX(66.666667%); |
// | translate-x-1/4  | transform: translateX(25%);        |
// | translate-x-2/4  | transform: translateX(50%);        |
// | translate-x-3/4  | transform: translateX(75%);        |
// | translate-x-full | transform: translateX(100%);       |
// | translate-y-1/2  | transform: translateY(50%);        |
// | translate-y-1/3  | transform: translateY(33.333333%); |
// | translate-y-2/3  | transform: translateY(66.666667%); |
// | translate-y-1/4  | transform: translateY(25%);        |
// | translate-y-2/4  | transform: translateY(50%);        |
// | translate-y-3/4  | transform: translateY(75%);        |
// | translate-y-full | transform: translateY(100%);       |
//
// Translate: Utilities for translating elements with transform.
// 1. Translating an element: Use the translate-x-{amount} and translate-y-{amount} utilities to translate an element.
// 2. Using negative values: To use a negative translate value, prefix the class name with a dash to convert it to a negative value.
// 3. Removing transforms: To remove all of the transforms on an element at once, use the transform-none utility, This can be useful when you want to remove transforms conditionally, such as on hover or at a particular breakpoint.
// 4. Hardware acceleration: If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the transform-gpu utility, Use transform-cpu to force things back to the CPU if you need to undo this conditionally.
export default function Translate() {
  return (
    <img
      className="translate-x-96"
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
      alt=""
    />
  );
}
