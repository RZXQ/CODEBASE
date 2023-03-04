// | Class          | Properties                                     |
// | -------------- | ---------------------------------------------- |
// | grid-rows-1    | grid-template-rows: repeat(1, minmax(0, 1fr)); |
// | grid-rows-2    | grid-template-rows: repeat(2, minmax(0, 1fr)); |
// | grid-rows-3    | grid-template-rows: repeat(3, minmax(0, 1fr)); |
// | grid-rows-4    | grid-template-rows: repeat(4, minmax(0, 1fr)); |
// | grid-rows-5    | grid-template-rows: repeat(5, minmax(0, 1fr)); |
// | grid-rows-6    | grid-template-rows: repeat(6, minmax(0, 1fr)); |
// | grid-rows-none | grid-template-rows: none;                      |
//
// Grid Template Rows: Utilities for specifying the rows in a grid layout.
// 1. Specifying the rows in a grid: Use the grid-rows-{n} utilities to create grids with n equally sized rows.
export default function GridTemplateRows() {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-1">
      <div className="bg-pink-500">1</div>
      <div className="bg-pink-500">2</div>
      <div className="bg-pink-500">3</div>
      <div className="bg-pink-500">4</div>
      <div className="bg-pink-500">5</div>
      <div className="bg-pink-500">6</div>
      <div className="bg-pink-500">7</div>
      <div className="bg-pink-500">8</div>
      <div className="bg-pink-500">9</div>
    </div>
  );
}
