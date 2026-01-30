# Copilot Instructions for abes-cs-c Codebase

## Overview
This codebase is a collection of HTML, CSS, and JavaScript exercises organized by day and topic. It is designed for learning and experimenting with core web development concepts, including ES6 features, promises, callbacks, scope, and DOM manipulation.

## Directory Structure
- `abes-cs-c/`: Contains basic HTML files for foundational concepts.
- `day3/`, `day4/`, `day5/`, ...: Each folder contains daily exercises, typically with `index.html`, supporting JS, and CSS files.
- `day6/letVarConst/`: Focused on JavaScript variable scope and type conversion.
- `day7/exerciseBulb.js/`: Contains a mini-project (bulb exercise) with its own HTML and JS.

## Key Patterns & Conventions
- **File Naming**: Files are named by topic and day for easy navigation (e.g., `promise.js`, `callbackhell.js`).
- **No Build System**: All code is run directly in the browser. There are no build scripts, package managers, or test runners.
- **Modularity**: Each day's folder is self-contained. Avoid cross-folder imports or dependencies.
- **Vanilla JS**: No frameworks or external libraries are used. All code is written in plain JavaScript, HTML, and CSS.
- **Learning Focus**: Code may prioritize clarity and demonstration over production best practices.

## Developer Workflows
- **Previewing**: Open HTML files in a browser to view and test exercises. No local server required.
- **Debugging**: Use browser DevTools for JS debugging and inspecting DOM/CSS.
- **Adding Exercises**: Create a new folder for each day or topic. Add relevant HTML, JS, and CSS files.
- **No Automated Tests**: Manual verification only. Document expected behavior in comments if needed.

## Examples
- **Promises**: See `day10/promise.js` for async patterns.
- **Scope & Variables**: See `day6/letVarConst/` for block/global scope and type conversion.
- **Mini-Projects**: See `day7/exerciseBulb.js/` for interactive DOM manipulation.

## Integration Points
- No external APIs or services are integrated.
- All code is client-side and self-contained.

## AI Agent Guidance
- When adding new exercises, follow the existing folder and file naming conventions.
- Keep code simple and focused on the learning objective.
- Reference existing files for examples of style and structure.
- Do not introduce build tools, package managers, or external dependencies.

---
For questions or unclear conventions, ask the user for clarification or examples from previous days' folders.