var countries = {
	seville: {
		title: 'Seville',
		description: 'description',
		coords: 'text, text',
		next: 'canaryIslands'
	},

	canaryIslands: {
		title: 'Canary Islands',
		description: 'description',
		coords: 'text, text',
		prev: 'seville',
		next: 'carpeVerde'
	},

	carpeVerde: {
		title: 'Carpe Verde',
		description: 'description',
		coords: 'text, text',
		prev: 'canaryIslands',
		next: 'straitOfMagellan'
	},

	straitOfMagellan: {
		title: 'Strait of Magellan',
		description: 'description',
		coords: 'text, text',
		prev: 'carpeVerde',
		next: 'guam'
	},

	guam: {
		title: 'Guam',
		description: 'description',
		coords: 'text, text',
		prev: 'straitOfMagellan',
		next: 'philippines'
	},

	philippines: {
		title: 'Philippines',
		description: 'description',
		coords: 'text, text',
		prev: 'guam'
	}
};

module.exports = countries
