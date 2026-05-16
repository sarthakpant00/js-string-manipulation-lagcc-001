'use strict';

var encoder = function(phrase){

	// step 1: change letters to numbers
	let step1 = phrase
		.replace(/e/g, "3")
		.replace(/a/g, "8")
		.replace(/s/g, "5");

	// step 2: spaces → $
	let step2 = step1.replace(/ /g, "$");

	// step 3: reverse string
	let result = step2.split("").reverse().join("");

	return result;
};

module.exports = encoder;
