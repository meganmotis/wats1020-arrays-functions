// This is the file where you will write the Truncate Words function and related code.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;

function truncateWords(longText, numWords) {
	var longTextArray = originalText.split(' '); //takes original text string and turns it into an array
	var truncatedTextArray = longTextArray.splice(0, wordLimit); // removes the words in the array that are beyond the word limit
	truncatedTextArray.push('...'); // adds "..." to the end of the array
	var shortText = truncatedTextArray.join(' '); // turns the shortened array back into a string
	return shortText;
}

var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);