import { View } from 'backbone';
import myTemplate from "../templates/index.hbs";
import statsTemplate from "../templates/stats.hbs";

export default View.extend({
	template: myTemplate,
	el: "#todoapp",
	statsTemplate: statsTemplate,
	events: {
		"click #add-todo": "addTodo"
	},
	render: function(){
		console.log(this.model);
		this.$el.html( this.statsTemplate( this.model ) );
	},
	initialize:() => {
		console.log("View has been initialized");
	},
	addTodo: () => console.log("Todo added!")
});