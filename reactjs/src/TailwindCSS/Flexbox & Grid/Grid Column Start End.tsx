// | Class          | Properties                      |
// | -------------- | ------------------------------- |
// | col-auto       | grid-column: auto;              |
// | col-span-1     | grid-column: span 1 / span 1;   |
// | col-span-2     | grid-column: span 2 / span 2;   |
// | col-span-3     | grid-column: span 3 / span 3;   |
// | col-span-4     | grid-column: span 4 / span 4;   |
// | col-span-5     | grid-column: span 5 / span 5;   |
// | col-span-6     | grid-column: span 6 / span 6;   |
// | col-span-7     | grid-column: span 7 / span 7;   |
// | col-span-8     | grid-column: span 8 / span 8;   |
// | col-span-9     | grid-column: span 9 / span 9;   |
// | col-span-10    | grid-column: span 10 / span 10; |
// | col-span-11    | grid-column: span 11 / span 11; |
// | col-span-12    | grid-column: span 12 / span 12; |
// | col-span-full  | grid-column: 1 / -1;            |
// | col-start-1    | grid-column-start: 1;           |
// | col-start-2    | grid-column-start: 2;           |
// | col-start-3    | grid-column-start: 3;           |
// | col-start-4    | grid-column-start: 4;           |
// | col-start-5    | grid-column-start: 5;           |
// | col-start-6    | grid-column-start: 6;           |
// | col-start-7    | grid-column-start: 7;           |
// | col-start-8    | grid-column-start: 8;           |
// | col-start-9    | grid-column-start: 9;           |
// | col-start-10   | grid-column-start: 10;          |
// | col-start-11   | grid-column-start: 11;          |
// | col-start-12   | grid-column-start: 12;          |
// | col-start-13   | grid-column-start: 13;          |
// | col-start-auto | grid-column-start: auto;        |
// | col-end-1      | grid-column-end: 1;             |
// | col-end-2      | grid-column-end: 2;             |
// | col-end-3      | grid-column-end: 3;             |
// | col-end-4      | grid-column-end: 4;             |
// | col-end-5      | grid-column-end: 5;             |
// | col-end-6      | grid-column-end: 6;             |
// | col-end-7      | grid-column-end: 7;             |
// | col-end-8      | grid-column-end: 8;             |
// | col-end-9      | grid-column-end: 9;             |
// | col-end-10     | grid-column-end: 10;            |
// | col-end-11     | grid-column-end: 11;            |
// | col-end-12     | grid-column-end: 12;            |
// | col-end-13     | grid-column-end: 13;            |
// | col-end-auto   | grid-column-end: auto;          |
//
// Grid Column Start / End: Utilities for controlling how elements are sized and placed across grid columns.
// 1. Spanning columns: Use the col-span-{n} utilities to make an element span n columns.
// 2. Starting and ending lines: Use the col-start-{n} and col-end-{n} utilities to make an element start or end at the nth grid line. These can also be combined with the col-span-{n} utilities to span a specific number of columns. Note that CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.
export default function GridColumnStartEnd() {
  return (
    <div className="grid grid-cols-12 gap-1">
      <div className="col-span-2 bg-blue-200">1</div>
      <div className="col-start-4 col-end-6 bg-blue-200">2</div>
      <div className="bg-blue-200">3</div>
      <div className="bg-blue-200">4</div>
      <div className="bg-blue-200">5</div>
      <div className="bg-blue-200">6</div>
      <div className="bg-blue-200">7</div>
      <div className="bg-blue-200">8</div>
      <div className="bg-blue-200">9</div>
    </div>
  );
}
