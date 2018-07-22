
//Array of random quotes to be presented
let quotes = [
	
	{
		quote: '“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
		source: 'Dr. Suess',
		citation: 'http://www.keepinspiring.me/famous-quotes/',
		year: '1990'
	},

	{
		quote: '“Great minds discuss ideas; average minds discuss events; small minds discuss people.',
		source: 'Eleanor Roosevelt'
	},

	{
		quote: '“Let us always meet each other with smile, for the smile is the beginning of love.',
		source: 'Mother Theresa',
		citation: 'http://www.keepinspiring.me/famous-quotes/',
		year: '1949'
	},

	{
		quote: '“Love is a serious mental disease.',
		source: 'Plato',
	},

	{
		quote: '“It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them.',
		source: 'Leonardo Da Vinci',
		citation: 'http://www.keepinspiring.me/famous-quotes/'
	},
];

//set random integer
const randomInteger = (min, max)=>{
	 min = Math.ceil(min);
	 max = Math.floor(max); 
	let integer = Math.floor(Math.random() * (max - min +1)) + min;
	return integer;
}

//use random integer to identify quote object in array
const getRandomQuote = ()=>{
	let arrayLength = (quotes.length - 1);
	let integer = randomInteger(0, arrayLength);
	let quote = quotes[integer];
	return quote;
};

//print quote, citation, source, and year 
const printQuote = ()=> {

//set variables 
	let randomQuote = getRandomQuote();
	let quote = randomQuote.quote;
	let source = randomQuote.source;
	let citation = randomQuote.citation;
	let year = randomQuote.year;
	let quoteBox;

//conditional statement identifying if citation and year keys exist
	if(randomQuote.hasOwnProperty('citation') && randomQuote.hasOwnProperty('year')) {
		quoteBox = "<p class ='quote'>" + quote + "</p>" + 
					  "<p class ='source'>" + source + 
					  "<span class ='citation'>" + citation + "</span>" +
					  "<span class ='year'>" + year + "</span></p>";
	} else if(randomQuote.hasOwnProperty('citation') && randomQuote.hasOwnProperty('year') === false) {
		quoteBox = "<p class ='quote'>" + quote + "</p>" + 
					  "<p class ='source'>" + source + 
					  "<span class ='citation'>" + citation + "</span></p>";
	} else if(randomQuote.hasOwnProperty('citation') === false && randomQuote.hasOwnProperty('year')) {
		quoteBox = "<p class ='quote'>" + quote + "</p>" + 
					  "<p class ='source'>" + source + 
					  "<span class ='year'>" + year + "</span></p>";
	} else {
		quoteBox = "<p class ='quote'>" + quote + "</p>" + 
					  "<p class ='source'>" + source + "</p>";
	}

//reset innerHTML of quote-box
	document.getElementById('quote-box').innerHTML = quoteBox;

}





// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


