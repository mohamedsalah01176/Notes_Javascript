JavaScript Summary

JavaScript Basics

* JavaScript is synchronous programming
* JavaScript is single-threaded

Dot Notation vs Bracket Notation

* Bracket notation is used with variables
* Bracket notation is used with keys like "country of" or "country-of"

Unary Operators

* Unary Plus:

  * `+"100"` => 100
  * `+"mohamed"` => NaN
* Unary Negative:

  * `-"100"` => -100
  * `-"mohamed"` => NaN

Ternary Operator

* Syntax: `condition ? true : false`

Type Coercion

* `"5" + 7` => "57"
* `5 - "7"` => -2
* `+"5" + 7` => 12

Number Methods

* Use numbers like: `(100).toString()`
* `toString()`, `toFixed(3)`
* `parseInt("100 osama")` => 100
* `parseInt("osama 100")` => NaN
* `parseFloat(number)`
* `Number.isInteger(number)` => true if integer
* `Number.isNaN(value)` => true if value is NaN

Math Methods

* `Math.round(9.2)` => 9
* `Math.round(9.7)` => 10
* `Math.ceil(9.2)` => 10
* `Math.floor(9.7)` => 9
* `Math.min(10,20,70,30,5,100)` => 5
* `Math.max(10,20,70,30,5,100)` => 100
* `Math.pow(10,2)` => 100
* `Math.random()` => random number
* `Math.trunc(7.5)` => 7

String Methods

* `String[0]`, `String.charAt(1)`
* `String.length`
* `String.trim()`, `toUpperCase()`, `toLowerCase()`
* `indexOf("char")`, `lastIndexOf("char")`
* `slice(start, end)`
* `split(sep [, limit])`
* `repeat(times)`
* `includes("word")`, `startsWith("word")`
* `replace("old", "new")`, `replaceAll("old", "new")`

Array Methods

* Create array: `new Array()` or `[]`
* Access: `arr[0]`, change: `arr[2] = value`
* Check: `Array.isArray(arr)`
* Modify:

  * `unshift`, `push`, `shift`, `pop`
  * `indexOf`, `lastIndexOf`, `includes`
  * `sort((a,b)=>b-a)` (descending), `reverse()`
  * `slice(start, end)`, `splice(index, count, newElem)`
  * `concat`, `join(sep)`
  * `some(cb)`, `every(cb)`

Date & Time Methods

* Get:

  * `getTime()`, `getDate()`, `getFullYear()`, `getMonth()`, `getDay()`
  * `getHours()`, `getMinutes()`, `getSeconds()`
* Set:

  * `setTime(ms)`, `setDate(day)`, `setFullYear(y, m, d)`
  * `setMonth(m [, d])`, `setHours(h [, m, s])`, `setMinutes(m [, s])`, `setSeconds(s)`

Loops

* `for`, `while`, `do while`
* `for...in` for objects
* Use `let` or IIFE to avoid closure issues

Functions

* Statement function (hoisted)
* Expression function (not hoisted)
* Anonymous function
* Arrow function: `const fn = () => {}`
* Constructor function: `function Person() {}`

Function Scope

* Cannot access function vars outside
* Example:

```js
let x = 5;
function fun() {
  console.log(x); // ReferenceError if redeclared
  let x = 3;
}
```

Var vs Let/Const

* `var` is global/function scoped
* `let`, `const` are block scoped

Higher Order Functions

* `map`, `filter`, `reduce`, `forEach`

  * `map`: returns new array
  * `filter`: returns new array
  * `reduce`: returns single value
  * `forEach`: returns undefined, used for events

DOM (Document Object Model)

* Represents document as nodes/objects
* NodeList: not full array, supports forEach
* HTMLCollection: more array-like

Selectors

* `getElementById`, `getElementsByClassName`, `getElementsByTagName`
* `querySelector`, `querySelectorAll`
* `document.body`, `forms[]`, `images[]`, `links[]`

DOM Methods

* `innerHTML`, `textContent`
* Attributes:

  * Direct: `img.src`, `div.id`
  * With methods: `setAttribute`, `getAttribute`, `hasAttribute`, `removeAttribute`
* Creating elements:

  * `createElement`, `createTextNode`, `createComment`, `createAttribute`
  * `appendChild`, `cloneNode(true|false)`

Children

* `children`, `childNodes`, `firstChild`, `lastChild`, `firstElementChild`, `lastElementChild`

Events

* `onClick`, `onContextMenu`, `onMouseEnter`, `onMouseLeave`
* `onLoad`, `onScroll`, `onResize`, `onFocus`, `onBlur`, `onSubmit`
* `addEventListener`

  * use `preventDefault()` when needed

ClassList

* `classList.length`, `item(index)`, `contains()`, `add()`, `remove()`, `toggle()`

CSS with JS

* `style.property = value`
* `cssText = "..."`
* `setProperty`, `removeProperty`

Element Placement

* `before()`, `after()`, `append()`, `prepend()`, `remove()`

BOM (Browser Object Model)

* `window` object: contains vars, console, alert, etc.
* Scroll:

  * `scrollTo()`, `scrollBy()`, `scrollX`, `scrollY`

Location Object

* `href`, `host`, `hostname`, `hash`, `protocol`
* `replace(url)`, `assign(url)`

History API

* `length`, `back()`, `forward()`, `go(n)`

Set

* `const s = new Set([1,1,3])` => \[1,3]
* Unique values only
* Methods: `add`, `delete`, `clear`, `has`

Map

* `const m = new Map()`
* Key types: string, number, function
* Method: `set`, `get`, `has`, `delete`, `clear`
* Better performance than object for frequent add/remove

Regex (Regular Expressions)

* Methods: `match()`, `test()`
* Flags: `i`, `g`, `m`
* Ranges: `[0-9]`, `[^a-z]`, `(x|y)`
* Character Classes: `\w`, `\W`, `\d`, `\D`, `\s`, `\S`
* Quantifiers: `+`, `*`, `?`, `{n}`, `{n,m}`, `$`, `^`

Classes

* Private attribute: `#property`

AJAX

* Technique for async requests without reloading
* `XMLHttpRequest` readyStates:

  * 0: Unsent
  * 1: Opened
  * 2: Headers received
  * 3: Loading
  * 4: Done

Promises

* Handle async flow
* Syntax: `promise.then().catch().finally()`
* States: pending, fulfilled, rejected
