module.exports.slug = function(input){
	return input
		.replace(/-/g, '~')
		.replace(/\/+/g, ' ')
		.replace(/, /g, '--')
		.replace(/ /g, '-');
}

module.exports.unslug = function(input){
	return input
		.replace(/--/g, ', ')
		.replace(/-/g, ' ')
		.replace(/~/g, '-');
}