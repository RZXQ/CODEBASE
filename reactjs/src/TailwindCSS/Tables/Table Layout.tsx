// | Class       | Properties           |
// | ----------- | -------------------- |
// | table-auto  | table-layout: auto;  |
// | table-fixed | table-layout: fixed; |
//
// Table Layout: Utilities for controlling the table layout algorithm.
// 1. Auto: Use table-auto to allow the table to automatically size columns to fit the contents of the cell.
// 2. Fixed: Use table-fixed to allow the table to ignore the content and use fixed widths for columns. The width of the first row will set the column widths for the whole table. You can manually set the widths for some columns and the rest of the available width will be divided evenly amongst the columns without explicit width.
export default function TableLayout() {
  return (
    <table className="table-auto w-full">
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Year</th>
      </tr>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
        <td>1961</td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
      </tr>
    </table>
  );
}
