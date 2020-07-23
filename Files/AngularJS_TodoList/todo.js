angular.module('todoApp', [])
	.config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|javascript|data):/);
    }])
  .controller('TodoListController', function() {
    var todoList = this;

    todoList.todos = [
      {text:'Visit cagri.tk', done:true},
      {text:'build your version of this app', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };

	todoList.deleteAll = function() {
		if(confirm("This action will delete all records! Are you sure ?"))
			todoList.todos = [];
	};

	todoList.deleteRow = function(todo) {
		const index = todoList.todos.indexOf(todo);
		if (index > -1) {
		  todoList.todos.splice(index, 1);
		}
	};

	todoList.downloadFile = function() {
		var now = new Date().toString();
		var dataFile = "data:text/plain;charset=UTF-8,"
		dataFile += "TodoList\n";
		angular.forEach(todoList.todos, function(todo) {
			dataFile += todo.done ? "- [Done] " : "- ";
			dataFile += todo.text +"\n";
		});
		dataFile += "\n" + encodeURIComponent(now);
		dataFile += "\nThank you for visiting cagri.tk :)";
		return dataFile;
	};

  });
