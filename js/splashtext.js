var lines = ('lines.json');
  
  var randomLine = lines[Math.floor(Math.random()*lines.length)];
  
  document.body.innerHTML = randomLine;