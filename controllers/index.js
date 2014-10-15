var countries = require('../models/countries.js');

var indexController = {
	index: function(req, res) {
		res.render('index', {
			countries: countries
		});
	},
	location: function(req,res) {
		var currentLocationName = req.params.countries;
		res.render('location', countries[currentLocationName]);
	}
};

module.exports = indexController;