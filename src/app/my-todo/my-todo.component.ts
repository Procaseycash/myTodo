import {Component, OnInit} from '@angular/core';
import {ITodo} from "./itodo";

@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.css']
})
export class MyTodoComponent implements OnInit {

  public tasks: ITodo[] = [];
  public task: ITodo;

  constructor() {
  }

  private resetTaskPayload() {
    return {
      title: '',
      description: '',
      id: Math.floor(Math.random() * 10000 + 1)
    };
  }

  public newTodo(taskForm) {
    const task = taskForm.value;
    if (!(task.title && task.description)) {
      return alert('Please fill in all information');
    }
    task.id = Math.floor(Math.random() * 10000 + 1);
    this.tasks.push(task);
    taskForm.form.reset();
  }

  public deleteTodo(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  ngOnInit() {
    this.task = this.resetTaskPayload();
  }

}
