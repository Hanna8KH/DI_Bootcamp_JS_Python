import TodoList from "./todo.mjs";

const toDo = new TodoList();

toDo.addTask('Do pilates')
toDo.addTask('Go to work')
toDo.addTask('Make dinner')
toDo.addTask('Watch film')


toDo.complete(2);

console.log(toDo.listAll())

