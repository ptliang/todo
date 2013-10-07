var app = app || {};

var TodoList = Backbone.Collection.extend({

	model: app.Todo,

	localStorage: new Backbone.LocalStorage('todos-backbone'),

	completed: function() {
		return this.filter(function(todo) {
			return todo.get('completed');
		});
	},
	remaining: function() {
		return this.without.apply(this, this.completed());
	},
	nextOrder: function() {
		if (!this.length) {
			return 1;
		}

		return this.last().get('order') + 1;
	},
	comparator: function(todo) {
		return todo.get('order');
	}
});

/*var a = new app.Todo({ title: 'Go to Jamaica.'}),
    b = new app.Todo({ title: 'Go to China.'}),
    c = new app.Todo({ title: 'Go to Disneyland.', completed: true});
app.Todos = new TodoList([a,b,c]);

app.Todos.remaining();*/

app.Todos = new TodoList();