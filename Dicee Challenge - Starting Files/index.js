function randomDiceImageSource()
{
    var x =  Math.ceil(Math.random() * 6);
    var randomDiceImage = "dice" + x + ".png";
    var randomDiceImageSource = "images/" + randomDiceImage;
    return randomDiceImageSource;

}
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImageSource());

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImageSource());
alert("If the die of a Team corresponds to the team's name,It's a win else a Draw");
