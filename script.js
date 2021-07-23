var factList = [
  "The Fashion Industry throws away 80 billion clothes each year!", 
  "Fashion accounts for 20 to 35 percent of microplastic lows in the ocean.", 
  "93% of brands aren't paying factory workers a good wage. They usually get paid by piece rate. Every piece that they make gets them 2-6 cents. THey work 10 hrs. a day. And the factories are unsafe, dirty, and are poorly ventilated ", 
  "Clothing production is a part of the Textile production and that contributes more to climate change.","One in three young women, the biggest segment of consumers, consider garments worn once or twice to be old", "Washing solvents, and dyes used in manufacturing are responsible for one-fifth of industrial water pollution."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
