var button = document.getElementById("add");
var quotes = [
	"My life is my message. - Mahatma Gandhi", 
	"I love those who can smile in trouble… - Leonardo da Vinci",
	"Life is what happens when you’re busy making other plans. John Lennon",
	"Dost thou love life? Then do not squander time, for that is the stuff life is made of. - Benjamin Franklin",
	"In the end, it’s not the years in your life that count. It’s the life in your years. - Abraham Lincoln",
	"We know what we are, but know not what we may be. - William Shakespeare"
];

button.addEventListener("click", function(){
   document.getElementById("demo").innerHTML = quotes[Math.floor(quotes.length * Math.random())];
});
