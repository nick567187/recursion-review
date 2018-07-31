// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
	let curr = arguments[1] || 0;
	let curKey = arguments[2] || '';
	let curVal = arguments[3] || '';
	let curChar = json[curr];
	var curElt = arguments[4];

	if(curChar === '[') {
		if(json[1] === ']') {
			return [];
		}    
	}

	if(curChar === '{') {
		// let obj = {};
		curElt = arguments[4] || {};
		

		// curr++;
		// if(json[1] === '}') {
		// 	return obj;
	} 

	if(curChar === '"' && typeof curElt === 'object') {  
		curr++;
		if(curKey === '') {
			while(json[curr] !== '"') {
				curKey += json[curr];
				curr++;
			}
		} else {
			while(json[curr] !== '"') {
				curVal += json[curr];
				curr++;
			}
      curElt[curKey] = curVal;
      curKey = '';
      curVal = '';
		}
	}	

	if(curChar == '}'){
		return curElt;
	}

	curr++;
	return parseJSON(json, curr, curKey, curVal, curElt); 
  
};
