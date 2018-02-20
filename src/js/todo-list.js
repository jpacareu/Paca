import { Collection } from 'backbone';
import Todo from './todo.js';
import { LocalStorage } from 'backbone.localstorage';

export default Collection.extend({
	model: Todo,
	localStorage: new LocalStorage('todos-backbone'),
	completed: function(){
		return this.filter((x) => x.get('completed') );
	},
	remaining: () => this.without.apply(this,this.completed()),
	nextOrder: () => {
		if ( !this.length ) {
			return 1;
		}
			return this.last().get('order') + 1;
	},
	// Todos are sorted by their original insertion order.
	comparator: function( todo ) {
		return todo.get('order');
	}
});