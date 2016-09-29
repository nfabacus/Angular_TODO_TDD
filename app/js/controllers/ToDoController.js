toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;
  //  two objects, each with two attributes
  self.todos = [new ToDoFactory('ToDo1', true), new ToDoFactory('ToDo2', false)];

  self.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function() {
      self.todos.pop();
  };
}]);
