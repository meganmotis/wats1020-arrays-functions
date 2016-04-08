// This is the file where you will write the Truncate Words function and related code.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;

function truncateWords(longText, numWords) {
	var longTextArray = originalText.split(' ');
	var truncatedTextArray = longTextArray.splice(0, wordLimit);
	truncatedTextArray.push('...');
	var shortText = truncatedTextArray.join(' ');
	return shortText;
}

var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);