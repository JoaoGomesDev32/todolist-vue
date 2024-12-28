# Vue Todo List

This is a simple Todo List application built with Vue.js and TypeScript. It utilizes the Composition API and Vuetify for the user interface, and implements data persistence using localStorage or Firebase.

## Project Structure

```
vue-todo-list
├── public
│   ├── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── TodoItem.vue
│   │   └── TodoList.vue
│   ├── composables
│   │   └── useTodos.ts
│   ├── views
│   │   └── Home.vue
│   ├── App.vue
│   ├── main.ts
│   └── shims-vue.d.ts
├── package.json
├── tsconfig.json
├── vue.config.js
└── README.md
```

## Features

- Add, remove, and toggle todos
- Data persistence with localStorage or Firebase
- Responsive design using Vuetify

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd vue-todo-list
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run serve
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080` to view the application.

## Usage

- Use the input field to add new todos.
- Click on a todo item to mark it as complete or delete it.
- Todos are saved in localStorage or can be configured to use Firebase for persistence.

## License

This project is licensed under the MIT License.