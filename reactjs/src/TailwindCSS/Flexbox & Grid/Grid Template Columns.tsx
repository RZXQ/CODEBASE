// | Class          | Properties                                         |
// | -------------- | -------------------------------------------------- |
// | grid-cols-1    | grid-template-columns: repeat(1, minmax(0, 1fr));  |
// | grid-cols-2    | grid-template-columns: repeat(2, minmax(0, 1fr));  |
// | grid-cols-3    | grid-template-columns: repeat(3, minmax(0, 1fr));  |
// | grid-cols-4    | grid-template-columns: repeat(4, minmax(0, 1fr));  |
// | grid-cols-5    | grid-template-columns: repeat(5, minmax(0, 1fr));  |
// | grid-cols-6    | grid-template-columns: repeat(6, minmax(0, 1fr));  |
// | grid-cols-7    | grid-template-columns: repeat(7, minmax(0, 1fr));  |
// | grid-cols-8    | grid-template-columns: repeat(8, minmax(0, 1fr));  |
// | grid-cols-9    | grid-template-columns: repeat(9, minmax(0, 1fr));  |
// | grid-cols-10   | grid-template-columns: repeat(10, minmax(0, 1fr)); |
// | grid-cols-11   | grid-template-columns: repeat(11, minmax(0, 1fr)); |
// | grid-cols-12   | grid-template-columns: repeat(12, minmax(0, 1fr)); |
// | grid-cols-none | grid-template-columns: none;                       |
//
// Grid Template Columns: Utilities for specifying the columns in a grid layout.
// 1. Specifying the columns in a grid: Use the grid-cols-{n} utilities to create grids with n equally sized columns.
export default function GridTemplateColumns() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-pink-200">01</div>
      <div className="bg-pink-200">02</div>
      <div className="bg-pink-200">03</div>
      <div className="bg-pink-200">04</div>
      <div className="bg-pink-200">05</div>
      <div className="bg-pink-200">06</div>
      <div className="bg-pink-200">07</div>
      <div className="bg-pink-200">08</div>
      <div className="bg-pink-200">09</div>
    </div>
  );
}
