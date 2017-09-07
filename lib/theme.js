// ==============================
// THEME
// ==============================

'use strict';

var theme = {
	color: '#ffe11f'
};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10
	},
	zIndex: 2001
};

// header
theme.header = {
	height: 40
};
theme.close = {
	fill: 'white'
};

// footer
theme.footer = {
	fontFamily: 'Cubano, Charcoal, sans-serif',
	color: '#ffe11f',
	fontSize: '2rem',
	count: {
		color: 'rgba(255, 255, 31, 0.50)',
		fontSize: '.85em'
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5
	}
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2
};

// arrow
theme.arrow = {
	background: 'rgba(0,0,0,.5)',
	fill: '#ffe11f',
	height: 60
};

module.exports = theme;