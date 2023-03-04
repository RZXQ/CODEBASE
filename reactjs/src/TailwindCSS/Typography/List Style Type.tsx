// | Class        | Properties                |
// | ------------ | ------------------------- |
// | list-none    | list-style-type: none;    |
// | list-disc    | list-style-type: disc;    |
// | list-decimal | list-style-type: decimal; |
//
// List Style Type: Utilities for controlling the bullet/number style of a list.
// 1. Setting the list style type: To create bulleted or numeric lists, use the list-disc and list-decimal utilities.
export default function ListStyleType() {
  return (
    <div>
      <ul className="list-inside list-disc">
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
        <li>And I'd like to take a minute just sit right there</li>
        <li>I'll tell you how I became the prince of a town called Bel-Air</li>
      </ul>
      <ol className="list-inside list-decimal">
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
        <li>And I'd like to take a minute just sit right there</li>
        <li>I'll tell you how I became the prince of a town called Bel-Air</li>
      </ol>
    </div>
  );
}
