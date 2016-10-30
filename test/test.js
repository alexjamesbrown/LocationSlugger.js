var slugger = require('../index'),
should = require('should')

describe('slug', function(){
	
	it('returns string with comma and space replaced by double hyphen', function(){
		var result = slugger.slug("Camberley, Surrey");
		result.should.equal('Camberley--Surrey');
	});

	it('returns string with space and a comma and space replaced by double hyphen', function(){
		var result = slugger.slug("Blackfriars Road, London");
		result.should.equal('Blackfriars-Road--London');
	});

	it('returns string with hyphens replaced by tilde', function(){
		var result = slugger.slug("Stoke-on-Trent");
		result.should.equal('Stoke~on~Trent');
	});

	it('returns string with special characters remaining', function(){
		var result = slugger.slug("Côte d'Ivoire");
		result.should.equal('Côte-d\'Ivoire');
	});
});

describe('unslug', function(){

	it('returns_string_with_double_hyphen_replace_by_comma_and_space', function(){
		var result = slugger.unslug("Camberley--Surrey");
		result.should.equal('Camberley, Surrey');
	});

	it('returns_string_with_tilde_replaced_by_hyphens', function(){
		var result = slugger.unslug("Stoke~on~Trent");
		result.should.equal('Stoke-on-Trent');
	});
});