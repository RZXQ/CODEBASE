// Class
// Properties
// border-0	border-width: 0px;
// border-2	border-width: 2px;
// border-4	border-width: 4px;
// border-8	border-width: 8px;
// border	border-width: 1px;
// border-x-0	border-left-width: 0px;
// border-right-width: 0px;
// border-x-2	border-left-width: 2px;
// border-right-width: 2px;
// border-x-4	border-left-width: 4px;
// border-right-width: 4px;
// border-x-8	border-left-width: 8px;
// border-right-width: 8px;
// border-x	border-left-width: 1px;
// border-right-width: 1px;
// border-y-0	border-top-width: 0px;
// border-bottom-width: 0px;
// border-y-2	border-top-width: 2px;
// border-bottom-width: 2px;
// border-y-4	border-top-width: 4px;
// border-bottom-width: 4px;
// border-y-8	border-top-width: 8px;
// border-bottom-width: 8px;
// border-y	border-top-width: 1px;
// border-bottom-width: 1px;
// border-t-0	border-top-width: 0px;
// border-t-2	border-top-width: 2px;
// border-t-4	border-top-width: 4px;
// border-t-8	border-top-width: 8px;
// border-t	border-top-width: 1px;
// border-r-0	border-right-width: 0px;
// border-r-2	border-right-width: 2px;
// border-r-4	border-right-width: 4px;
// border-r-8	border-right-width: 8px;
// border-r	border-right-width: 1px;
// border-b-0	border-bottom-width: 0px;
// border-b-2	border-bottom-width: 2px;
// border-b-4	border-bottom-width: 4px;
// border-b-8	border-bottom-width: 8px;
// border-b	border-bottom-width: 1px;
// border-l-0	border-left-width: 0px;
// border-l-2	border-left-width: 2px;
// border-l-4	border-left-width: 4px;
// border-l-8	border-left-width: 8px;
// border-l	border-left-width: 1px;
//
// Border Width: Utilities for controlling the width of an element's borders.
// 1. All sides: Use the border, border-0, border-2, border-4, or border-8 utilities to set the border width for all sides of an element.
// 2. Individual sides: Use the border-{side}, border-{side}-0, border-{side}-2, border-{side}-4, or border-{side}-8 utilities to set the border width for one side of an element.
// 3. Horizontal and vertical sides: Use the border-{x|y}-{width} utilities to set the border width on two sides of an element at the same time.
// 4. Between elements: You can also add borders between child elements using the divide-{x/y}-{width} and divide-{color} utilities.
export default function BorderWidth() {
  return (
    <div className="flex gap-4">
      <div className="h-36 w-36 border-4 border-pink-500 bg-slate-200"></div>
      <div className="h-36 w-36 border-b-4 border-pink-500 bg-slate-200"></div>
      <div className="h-36 w-36 border-x-4 border-pink-500 bg-slate-200"></div>
    </div>
  );
}
