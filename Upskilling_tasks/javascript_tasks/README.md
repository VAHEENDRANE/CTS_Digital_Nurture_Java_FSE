# Local Community Event Portal 🌐

Welcome to the **Local Community Event Portal**! This project is a comprehensive, progressive JavaScript learning course designed to demonstrate core concepts in modern web development. Each directory is structured as a self-contained exercise featuring an interactive user interface built with HTML, CSS (glassmorphic theme), and Vanilla JavaScript.

---

## 📂 Project Structure

```text
JavaScript_tasks/
│
├── 01_Basics_Setup/                         # Linking external JS, console logging, alert setups
├── 02_Syntax_DataTypes_Operators/           # Const/Let scopes, operators (++, --), and template literals
├── 03_Conditionals_Loops_ErrorHandling/    # if-else checks, forEach() rendering, and try-catch-finally
├── 04_Functions_Closures_HigherOrderFunctions/ # Function declarations, callbacks, category filter helpers
├── 05_Objects_Prototypes/                   # Constructor functions, prototype methods, Object.entries()
├── 06_Arrays_Methods/                       # push(), filter(), and map() array methods
├── 07_DOM_Manipulation/                     # querySelector(), createElement(), and child node append
├── 08_Event_Handling/                       # Click handlers, change triggers, global keydown listeners
├── 09_Async_Promises_AsyncAwait/            # Promises delay timers, async/await queries, spinner loops
├── 10_Modern_JavaScript/                    # Destructuring arrays/objects, default arguments, spreads
├── 11_Working_With_Forms/                   # preventDefault(), validation parameters, inline error tags
├── 12_AJAX_Fetch_API/                       # HTTP POST requests, header parameters, response body displays
├── 13_Debugging_Testing/                    # Debugging methods, breakpoints location, network tabs
└── 14_jQuery_Frameworks/                    # jQuery animations, selectors, React/Vue utility summaries
```

---

## ✨ Features

- **Cohesive Glassmorphic Design**: Modern slate/indigo dark theme with harmonious gradient highlights, clean shadows, and smooth transitions.
- **On-Screen Interactive Terminals**: Every page implements a custom console log interceptor that prints all console outputs to an on-screen log window in real-time.
- **Checklist Guides**: Sidebar checklist badges display which specific tasks are demonstrated in the current exercise.
- **Fully Working Interactive Demonstrations**: Real-time capacity calculators, form validators, asynchronous simulators, key loggers, and animation sandboxes.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic document layouts.
- **CSS3**: Inlined dark glassmorphic styling, custom flex/grid structures, and keyframe animations.
- **Vanilla JavaScript (ES6+)**: Functional logic, data models, exception tracking, DOM API integrations, and async operations.
- **jQuery (Exercise 14)**: Embedded via jQuery CDN for DOM selection and fade animations.
- **Google Fonts (Inter)**: Premium modern typography.

---

## 🚀 How to Run the Project

All files in this workspace are fully self-contained and configured to run independently using VS Code's **Live Server** extension:

1. Install the **Live Server** extension in VS Code.
2. Open the root workspace folder `javascript_tasks` in VS Code.
3. Right-click on any `index.html` inside any exercise folder (e.g. `01_Basics_Setup/index.html`) and select **"Open with Live Server"**.
4. The file will load in your browser at `http://127.0.0.1:5500/`.
5. Open your browser console (press **F12** or **Ctrl + Shift + I**) to inspect console details.

---

## 📚 Learning Outcomes by Exercise

### 🎓 [Exercise 01: Basics Setup](file:///d:/frontend%20assesments/javascript_tasks/01_Basics_Setup/index.html)
- Learn how to integrate external JavaScript files using the `<script src="main.js">` tag.
- Understand how to print variables using `console.log()` and trigger blocking browser prompts via `alert()`.

### 🎓 [Exercise 02: Syntax, Data Types & Operators](file:///d:/frontend%20assesments/javascript_tasks/02_Syntax_DataTypes_Operators/index.html)
- Understand the difference between block-scoped immutable variables (`const`) and mutable variables (`let`).
- Practice string formatting with backticks and interpolation (Template Literals).
- Modify values using increment (`++`) and decrement (`--`) operators.

### 🎓 [Exercise 03: Conditionals, Loops & Error Handling](file:///d:/frontend%20assesments/javascript_tasks/03_Conditionals_Loops_ErrorHandling/index.html)
- Control execution flow using `if`, `else if`, and `else` conditions.
- Loop over elements in collections using `Array.prototype.forEach()`.
- Implement robust exception handling using `try-catch-finally` statements and custom `throw new Error()` statements.

### 🎓 [Exercise 04: Functions, Closures & Higher-Order Functions](file:///d:/frontend%20assesments/javascript_tasks/04_Functions_Closures_HigherOrderFunctions/index.html)
- Declare and pass callback functions as parameters to separate logic concerns.
- Capture and isolate state data inside a function scope using Closures (`createRegistrationTracker`).
- Apply higher-order filter operations to arrays based on category arguments.

### 🎓 [Exercise 05: Objects & Prototypes](file:///d:/frontend%20assesments/javascript_tasks/05_Objects_Prototypes/index.html)
- Model real-world data structures using Object Constructor functions.
- Extend object capabilities efficiently using shared `prototype` methods.
- Enumerate object key-value attributes into matrix lists using `Object.entries()`.

### 🎓 [Exercise 06: Arrays & Methods](file:///d:/frontend%20assesments/javascript_tasks/06_Arrays_Methods/index.html)
- Add items to arrays using `push()`.
- Use `filter()` to extract specific item collections.
- Map records to formatted strings (HTML cards) using `map()` and combine arrays using `join()`.

### 🎓 [Exercise 07: DOM Manipulation](file:///d:/frontend%20assesments/javascript_tasks/07_DOM_Manipulation/index.html)
- Target HTML elements in the document tree using `document.querySelector()`.
- Instantiation HTML tags programmatically via `document.createElement()`.
- Mount dynamic elements into parent elements in the page view using `appendChild()`.

### 🎓 [Exercise 08: Event Handling](file:///d:/frontend%20assesments/javascript_tasks/08_Event_Handling/index.html)
- Detect click events using `onclick` bindings.
- React to selector dropdown value changes using `onchange`.
- Intercept global user keystrokes (such as closing modal windows on Escape) using global `keydown` event listeners.

### 🎓 [Exercise 09: Async, Promises & Async/Await](file:///d:/frontend%20assesments/javascript_tasks/09_Async_Promises_AsyncAwait/index.html)
- Fetch static dataset configurations relative to the filesystem using the Fetch API.
- Chain asynchronous operations using `Promise.then().catch()` structures.
- Format async operations sequentially using `async` and `await` keywords.
- Manage user loading indicators (CSS spinner animations) during data retrievals.

### 🎓 [Exercise 10: Modern JavaScript](file:///d:/frontend%20assesments/javascript_tasks/10_Modern_JavaScript/index.html)
- Write function signatures with Default Parameters.
- Extract details cleanly using Object & Array destructuring assignments.
- Merge lists or update objects using the Spread Operator (`...`).

### 🎓 [Exercise 11: Working With Forms](file:///d:/frontend%20assesments/javascript_tasks/11_Working_With_Forms/index.html)
- Halt standard HTTP page reloads on form submission using `event.preventDefault()`.
- Access form fields dynamically by name attributes using the `form.elements` collection.
- Enforce validation rules (regex patterns, ticket counts, empty values) and display inline error elements.

### 🎓 [Exercise 12: AJAX & Fetch API](file:///d:/frontend%20assesments/javascript_tasks/12_AJAX_Fetch_API/index.html)
- Send serialized JSON data payloads using the `fetch()` API with the `POST` method.
- Add simulated network latency to mock server response sequences using `setTimeout()`.
- Render success/failure status codes (201 Created) and print JSON responses directly to the viewport.

### 🎓 [Exercise 13: Debugging & Testing](file:///d:/frontend%20assesments/javascript_tasks/13_Debugging_Testing/index.html)
- Write troubleshooting logs using `console.log()`, `console.warn()`, and `console.error()`.
- Set breakpoints in the browser DevTools "Sources" tab to inspect execution scopes.
- Inspect payloads, HTTP headers, and status flags using the browser DevTools "Network" tab.

### 🎓 [Exercise 14: jQuery & Frameworks](file:///d:/frontend%20assesments/javascript_tasks/14_jQuery_Frameworks/index.html)
- Integrate jQuery library CDNs.
- Interact with elements using jQuery shorthand CSS selectors (`$`).
- Trigger animations using `fadeIn()` and `fadeOut()`.
- Learn the benefits of modern JavaScript frameworks (React & Vue) such as virtual DOM diffing and declarative component states.
