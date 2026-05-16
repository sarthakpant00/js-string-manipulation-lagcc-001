'use strict';

var decoder = function(encoded){

	// step 1: reverse back
	let step1 = encoded.split("").reverse().join("");

	// step 2: $ → space
	let step2 = step1.replace(/\$/g, " ");

	// step 3: numbers → letters
	let result = step2
		.replace(/3/g, "e")
		.replace(/8/g, "a")
		.replace(/5/g, "s");

	return result;
};

module.exports = decoder;

