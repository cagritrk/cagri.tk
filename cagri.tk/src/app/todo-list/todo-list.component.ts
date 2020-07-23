import { Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos: Array<Task> = [];

  constructor(private domSanitizer: DomSanitizer) {
    this.todos.push(new Task('Visit cagri.tk', true));
    this.todos.push(new Task('build your version of this app'));
  }

  ngOnInit() {

  }

  addTodo(todoText:String) {
    this.todos.push(new Task(todoText, false));
  };

  remaining () {
    var count = 0;
    for (var todo of this.todos){
      count += todo.done ? 0 : 1;
    }
    return count;
  };

  archive () {
    var oldTodos:Array<Task> = this.todos;
    this.todos = [];
    for (var todo of oldTodos){
      if(!(todo.done))
        this.todos.push(todo);
    }
  };

  deleteAll () {
    if (confirm("This action will delete all records! Are you sure ?"))
      this.todos = [];
  };

  deleteRow (todo: Task) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  };

  downloadFile () {
    var now = new Date().toString();
    var dataFile = "data:text/plain;charset=UTF-8,"
    dataFile += "TodoList\n";

    for (var todo of this.todos){
      dataFile += todo.done ? "- [Done] " : "- ";
      dataFile += todo.text + "\n";
    }

    dataFile += "\n" + encodeURIComponent(now);
    dataFile += "\nThank you for visiting cagri.tk :)";
    return this.domSanitizer.bypassSecurityTrustUrl(dataFile);

   };

}
class Task{
    text:String;
    done:Boolean;

    constructor (text:String, done?:boolean){
      this.text = text;
      this.done = done || false;
    }
}
