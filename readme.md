1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : getElementById is used to select a single element by its unique id, and it returns that element or null if not found. getElementsByClassName selects all elements that have a specific class querySelector and querySelectorAll use CSS selectors to find elements; querySelector returns only the first matching element, while querySelectorAll returns all matching elementst.


2.How do you create and insert a new element into the DOM?

Ans : To create and insert a new element into the DOM, first use document.createElement() to create the element in memory. Then you can set its content, attributes, or classes as needed. After that,  select a parent element in the DOM using methods like getElementById or querySelector, and finally insert the new element into the parent using methods such as appendChild, prepend, or insertBefore, which makes it visible on the page.

3.What is Event Bubbling and how does it work?

Event bubbling is a way that events propagate in the DOM, where an event triggered on a child element first runs on that element and then "bubbles up" to its parent elements in sequence, all the way to the document root.

4.What is Event Delegation in JavaScript? Why is it useful?
s
Ans :Event delegation in JavaScript is a technique where instead of attaching event listeners to multiple child elements, we attach a single listener to their parent element and handle events that bubble up from the children. . Event delegation is useful because it reduces memory usage by having fewer event listeners, simplifies code management, and allows handling of dynamically added elements


5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:The preventDefault() method in JavaScript stops the default behavior of an element from happening, like preventing a form from submitting or a link from navigating. On the other hand, stopPropagation() stops the event from bubbling up or capturing down the DOM tree;

