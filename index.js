'use strict';

module.exports = function (x) {
	switch (x) {
		case 1:
		case 2:
			return 'ok';
		case 3:
		case 4:
			return 'also ok';
		default:
			return 'why not';
	}
};
