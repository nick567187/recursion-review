// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
		return '' + obj;
	} else if (typeof obj === 'string'){
		return '"' + obj + '"';
	}	else if (Array.isArray(obj)){
		var curString = '';
		for (var i = 0; i < obj.length; i++){
			curString += stringifyJSON(obj[i]) + ',';
		}
		curString = curString.substr(0, curString.length - 1);
		return '[' + curString + ']';
	} else if (typeof obj == 'object'){
		var curString = '';
		for (var value in obj){
			if(typeof obj[value] !== 'undefined' && typeof obj[value] !== 'function'){
				curString += '"' + value + '":' + stringifyJSON(obj[value]) + ',';
			}
		}
		curString = curString.substr(0, curString.length - 1);
		return '{' + curString + '}';
	}
};


