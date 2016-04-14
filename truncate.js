// This is the file where you will write the Truncate Words function and related code.

var truncateWords = function(longText, numWords) {
	var textArray = longText.split(' '); //takes longText string and turns it into an array
	var wordTotal = textArray.length; //determines word length of the array
	var wordsToRemove = (wordTotal - numWords); //determines number of words to remove by subtracting numWords from wordTotal
    textArray.splice(numWords, wordsToRemove); // removes the words in the array that are beyond the word limit
	textArray.push('...'); // adds "..." to the end of the array
	var shortString = textArray.join(' '); // turns the shortened array back into a string
	return shortString;
}

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);