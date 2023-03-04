// | Class           | Properties                 |
// | --------------- | -------------------------- |
// | border-collapse | border-collapse: collapse; |
// | border-separate | border-collapse: separate; |
//
// 1. Collapse: Use border-collapse to combine adjacent cell borders into a single border when possible. Note that this includes collapsing borders on the top-level <table> tag.
// 2. Separate: Use border-separate to force each cell to display its own separate borders.
export default function BorderCollapse() {
  return (
    <table className="border-collapse border">
      <thead>
        <tr>
          <th className="border">State</th>
          <th className="border">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border">Indiana</td>
          <td className="border">Indianapolis</td>
        </tr>
        <tr>
          <td className="border">Ohio</td>
          <td className="border">Columbus</td>
        </tr>
        <tr>
          <td className="border">Michigan</td>
          <td className="border">Detroit</td>
        </tr>
      </tbody>
    </table>
  );
}
