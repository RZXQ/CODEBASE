// | Class                | Properties                    |
// | -------------------- | ----------------------------- |
// | list-inside          | list-style-position: inside;  |
// | list-outside         | list-style-position: outside; |
//
// List Style Position: Utilities for controlling the position of bullets/numbers in lists.
// 1. Setting the list style position: Control the position of the markers and text indentation in a list using the list-inside and list-outside utilities.
export default function ListStylePosition() {
  return (
    <div>
      <ul className="list-inside list-disc">
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>
    </div>
  );
}
