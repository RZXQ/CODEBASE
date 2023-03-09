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
    <table className="w-36 table-fixed">
      <tr>
        <th className="border">Song</th>
        <th className="border">Artist</th>
        <th className="border">Year</th>
      </tr>
      <tr>
        <td className="border">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="border">Malcolm Lockyer</td>
        <td className="border">1961</td>
      </tr>
      <tr>
        <td className="border">Witchy Woman</td>
        <td className="border">The Eagles</td>
        <td className="border">1972</td>
      </tr>
      <tr>
        <td className="border">Shining Star</td>
        <td className="border">Earth, Wind, and Fire</td>
        <td className="border">1975</td>
      </tr>
    </table>
  );
}
