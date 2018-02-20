import '../css/style.css';
import $ from 'jquery';
import _ from 'underscore';
import { Collection, Model} from 'backbone';
import TodoList from './todo-list.js';
import Todo from './todo.js';
import AppView from './app-view.js';

var todoList = new TodoList([
	new Todo({title:"Hello world!",completed:true}),
	new Todo({title:"Hello world 2!"}),
	new Todo({title:"Hello world 3!",completed:false}),
	new Todo({title:"Hello world 4!"})
	]);

var todoView = new AppView({ model: { "todos":todoList.toJSON() } });
todoView.render();
// var html = myTemplate({ "todos":todoList.toJSON() });
// $("#data-display").html(html);

