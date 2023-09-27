export class TodoList {
    constructor(){
        this.tasks = []
    } 

    addTask(task){
        this.tasks.push({task: task, completed: false})
    }

    complete(taskId){
        if (taskId >= 0 && taskId < this.tasks.length) {
        this.tasks[taskId].completed = true;
        }
    }

    listAll(){
        return this.tasks
    }

}

export default TodoList;