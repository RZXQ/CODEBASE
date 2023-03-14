// | Class            | Properties                                                   |
// | ---------------- | ------------------------------------------------------------ |
// | drop-shadow-sm   | filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));            |
// | drop-shadow      | filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06)); |
// | drop-shadow-md   | filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06)); |
// | drop-shadow-lg   | filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); |
// | drop-shadow-xl   | filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)); |
// | drop-shadow-2xl  | filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));          |
// | drop-shadow-none | filter: drop-shadow(0 0 #0000);                              |
// Drop Shadow: Utilities for applying drop-shadow filters to an element.
// 1. Adding a drop shadow: Use the drop-shadow-{amount} utilities to add a drop shadow to an element.
// 2. Removing filters: To remove all of the filters on an element at once, use the filter-none utility. This can be useful when you want to remove filters conditionally, such as on hover or at a particular breakpoint.
export default function DropShadow() {
  return <div className="h-12 w-12 bg-white drop-shadow-2xl"></div>;
}
