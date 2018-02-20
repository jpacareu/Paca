import $ from 'jquery';
import _ from 'underscore';
import { Collection, Model } from 'backbone';

export default Model.extend({
	defaults: {
		title: "",
		completed: false
	},
	toggle: () => {
		this.save({
			completed: !this.get('completed')
		});
	},
	initialize: () => {
        console.log("Model initialized!");
    }
});