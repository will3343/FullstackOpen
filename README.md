# Full Stack Open - My Course Repository

## About the course
Full Stack Open is a free online course from the University of Helsinki (with Houston Inc.). It teaches modern web development with JavaScript: single-page apps in React, REST and GraphQL services with Node.js, plus TypeScript, React Native, CI/CD, containers, relational databases and Next.js.
Official site: https://fullstackopen.com/en/

## When does it start?
There is **no fixed start date**. The course is open all the time and self-paced; there are no yearly versions. One part is roughly one week (about 15-20 hours), but you choose the speed. You can start at any time, and parts are updated once or twice a year.

- My own start date: **[2026-10-08 ]**
- Target finish date: **[YYYY-MM-DD ]**

## Credits and structure
- Parts 0-5 are the core course (5 ECTS). Extension parts add more credits (see table).
- Exercises are submitted via GitHub and the submission system: https://studies.cs.helsinki.fi/stats/courses/fullstackopen
- Free certificate after enough exercises; university credits also require the course exam.
- Parts 6-14 material has moved to https://courses.mooc.fi/ (links in each part folder).

| Part | Title | Credits |
| --- | --- | --- |
| 0 | [Fundamentals of Web Apps](part0-fundamentals-of-web-apps/README.md) | Core course (parts 0-5 = 5 cr) |
| 1 | [Introduction to React](part1-introduction-to-react/README.md) | Core course |
| 2 | [Communicating with the Server](part2-communicating-with-server/README.md) | Core course |
| 3 | [Programming a Server with Node.js and Express](part3-programming-a-server-with-nodejs-and-express/README.md) | Core course |
| 4 | [Testing Express Servers, User Administration](part4-testing-express-servers-user-administration/README.md) | Core course |
| 5 | [Testing React Apps (with router and styling)](part5-testing-react-apps/README.md) | Core course |
| 6 | [State Management](part6-state-management/README.md) | 1 cr (CSM141082) |
| 7 | [Extension](part7-extension/README.md) | 1 cr (CSM141083) |
| 8 | [GraphQL](part8-graphql/README.md) | 1 cr (CSM14113) |
| 9 | [TypeScript](part9-typescript/README.md) | 1 cr (CSM14110) |
| 10 | [React Native](part10-react-native/README.md) | 2 cr (CSM14111) |
| 11 | [Continuous Integration / Continuous Delivery](part11-ci-cd/README.md) | 1 cr (CSM14112) |
| 12 | [Containers](part12-containers/README.md) | 1 cr (CSM141084) |
| 13 | [Using Relational Databases](part13-relational-databases/README.md) | 1 cr (CSM14114) |
| 14 | [Next.js](part14-nextjs/README.md) | Added April 2026 (credit details on site) |

## Student bio
- **Name:** [William Berhane]
- **Location:** Sweden
- **Status:** Registered for Full Stack Open and currently studying it.
- **Goal:** Become a professional web developer and find work.
- **Background:** [Add 1-2 lines: prior experience, languages, school/work]
- [Github](https://github.com/will3343)  |  [LinkedIn](https://www.linkedin.com/in/william-berhane/)


## All exercises (overview)
Tick the boxes as you go. Each part folder has its own README with space for notes and links.
Numbering note: parts 2-5 are grouped as ranges here, and parts 6-14 are listed as "See site" because their exercise lists live on the official pages and are updated often. Copy exact wording from the course pages as you work.

### Part 0 - Fundamentals of Web Apps
- [✔] **0.1** - HTML: review the basics of HTML structure.
- [✔] **0.2** - CSS: review the basics of styling.
- [ ] **0.3** - HTML forms: review how forms and submissions work.
- [ ] **0.4** - New note diagram: draw a sequence diagram of what happens when a note is created on the traditional notes page.
- [ ] **0.5** - Single page app diagram: draw a sequence diagram of loading the SPA version of the notes app.
- [ ] **0.6** - New note in SPA diagram: draw a sequence diagram of creating a note in the SPA version.

### Part 1 - Introduction to React
- [ ] **1.1** - Course information: start an app, split it into Header, Content and Total components.
- [ ] **1.2** - Refactor: add a Part component used by Content.
- [ ] **1.3** - Use objects for each course part (name + exercise count).
- [ ] **1.4** - Keep the parts in an array.
- [ ] **1.5** - Put everything inside a single course object.
- [ ] **1.6** - Unicafe: feedback app with good / neutral / bad buttons and stored counts.
- [ ] **1.7** - Unicafe: show statistics (total, average score, percent positive).
- [ ] **1.8** - Unicafe: move statistics into its own Statistics component.
- [ ] **1.9** - Unicafe: show a message instead of stats when no feedback exists.
- [ ] **1.10** - Unicafe: extract StatisticLine and Button components.
- [ ] **1.11** - Unicafe: display statistics in an HTML table.
- [ ] **1.12** - Anecdotes: button that shows a random anecdote from a list.
- [ ] **1.13** - Anecdotes: let users vote on the shown anecdote.
- [ ] **1.14** - Anecdotes: also show the anecdote with the most votes.

### Part 2 - Communicating with the Server
- [ ] **2.1-2.5** - Course information (continued): render courses with map, show total exercises with reduce, support multiple courses, move Course into its own module.
- [ ] **2.6-2.10** - Phonebook (frontend only): add names, block duplicates, add phone numbers, filter by name, refactor into components.
- [ ] **2.11-2.18** - Phonebook with json-server: load data from a server, save new entries, extract a communication module, delete entries, update numbers, show success and error notifications.
- [ ] **2.19-2.20** - Countries data: search countries, show details of a match, add weather information via an external API.

### Part 3 - Programming a Server with Node.js and Express
- [ ] **3.1-3.6** - Phonebook backend: hardcoded persons, info page, fetch one person, delete, add with generated id, basic error handling.
- [ ] **3.7-3.8** - Request logging with morgan (including POST body).
- [ ] **3.9-3.11** - Connect frontend to backend, deploy to the internet, serve the frontend build from the backend.
- [ ] **3.12** - Command-line MongoDB script to add and list entries.
- [ ] **3.13-3.18** - Move the backend to MongoDB: fetch, save, delete, update, and error-handling middleware.
- [ ] **3.19-3.21** - Mongoose validation (name/number format) and redeploy.
- [ ] **3.22** - Set up ESLint and fix lint issues.

### Part 4 - Testing Express Servers, User Administration
- [ ] **4.1-4.2** - Blog list app: backend with GET/POST, restructured into modules.
- [ ] **4.3-4.7** - Unit-test helper functions (dummy, total likes, favorite blog, most blogs, most likes).
- [ ] **4.8-4.14** - API tests with supertest and a test database: GET/POST/DELETE/PUT, default values, validation, refactor to async/await.
- [ ] **4.15-4.19** - Users: create users, validate them, link blogs to users, password hashing, login.
- [ ] **4.20-4.23** - Token authentication: protect blog creation/deletion with tokens, middleware to extract token and user, fix tests.

### Part 5 - Testing React Apps (with router and styling)
- [ ] **Group A** - Blog frontend: login form, show blogs, token stored in browser storage, logout.
- [ ] **Group B** - Create blogs from the frontend, notifications for success/failure.
- [ ] **Group C** - Togglable components, likes, deleting blogs, sorting by likes, PropTypes.
- [ ] **Group D** - Component tests with Vitest + React Testing Library.
- [ ] **Group E** - End-to-end tests with Playwright (login, create, like, delete, ordering).
- [ ] **Group F** - React Router views and styling with a UI library.

### Part 6 - State Management
- [ ] **See site** - Anecdote app and state-management exercises. Open the course page for the current exercise list.

### Part 7 - Extension
- [ ] **See site** - Extension exercises. Open the course page for the current exercise list.

### Part 8 - GraphQL
- [ ] **See site** - Phonebook and library GraphQL backend/frontend exercises. Open the course page for the current list.

### Part 9 - TypeScript
- [ ] **See site** - TypeScript exercises. Open the course page for the current list.

### Part 10 - React Native
- [ ] **See site** - React Native app exercises. Open the course page for the current list.

### Part 11 - Continuous Integration / Continuous Delivery
- [ ] **See site** - CI/CD pipeline exercises. Open the course page for the current list.

### Part 12 - Containers
- [ ] **See site** - Container exercises. Open the course page for the current list.

### Part 13 - Using Relational Databases
- [ ] **See site** - Relational database exercises. Open the course page for the current list.

### Part 14 - Next.js
- [ ] **See site** - Next.js exercises. Open the course page for the current list.

## Folder structure
```
full-stack-open/
|- README.md
|- part0-fundamentals-of-web-apps/README.md
|- ...
|- part14-nextjs/README.md
```

## Tools
Node.js 24 or newer, Git, VS Code, Chrome or Firefox Developer Edition.
