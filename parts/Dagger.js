const Part = require("./Part.js");

class Dagger extends Part {
  constructor(){
    super("Dagger", "Disc Frame", "https://vignette.wikia.nocookie.net/beyblade/images/2/22/FrameDagger.png/revision/latest?cb=20180713140309", {atk: 4}, {atk: 1, def: 0, stamina: 0});
  }
}

module.exports = Dagger;