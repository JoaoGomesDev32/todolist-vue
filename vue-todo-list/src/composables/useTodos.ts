import { ref, watch } from 'vue';

export function useTodos() {
    const todos = ref(JSON.parse(localStorage.getItem('todos') || '[]'));

    const addTodo = (todo) => {
        todos.value.push({ text: todo, completed: false });
        saveTodos();
    };

    const removeTodo = (index) => {
        todos.value.splice(index, 1);
        saveTodos();
    };

    const toggleTodo = (index) => {
        todos.value[index].completed = !todos.value[index].completed;
        saveTodos();
    };

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos.value));
    };

    watch(todos, (newTodos) => {
        saveTodos();
    });

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    };
}