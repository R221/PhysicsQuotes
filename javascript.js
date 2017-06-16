var quotes = [
  "No one undertakes research in physics with the intention of winning a prize. It is the joy of discovering something no one knew before.",
  "There is no science in this world like physics. Nothing comes close to the precision with which physics enables you to understand the world around you. It's the laws of physics that allow us to say exactly what time the sun is going to rise. What time the eclipse is going to begin. What time the eclipse is going to end.",
  "Physics is about questioning, studying, probing nature. You probe, and, if you're lucky, you get strange clues.",
  "Who are we? We find that we live on an insignificant planet of a humdrum star lost in a galaxy tucked away in some forgotten corner of a universe in which there are far more galaxies than people."
]
var authors = ["- Stephen Hawking", "- Neil deGrasse Tyson", "- Lene Hau", "- Carl Sagan"]

 function newQuote () {
  var randomNumber = Math.floor(Math.random() * (quotes.length))
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
document.getElementById('authorDisplay').innerHTML = authors[randomNumber]
};

window.twttr = (function(d, s, id) {  // Twitter button found @ https://dev.twitter.com/web/tweet-button
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

console.log("Made for freecodecamp's Random Quote Generator intermediate challenge. Special thanks to my friend Andrew for all his help and guidance in this project because JS is a bitch.");
