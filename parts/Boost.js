const Part = require("./Part.js");

class Boost extends Part {
  constructor(){
    super("Boost", "Disc", "https://vignette.wikia.nocookie.net/beyblade/images/d/d0/DiskBoost.png/revision/latest?cb=20160714200100", {atk: 36}, {atk: 0, def: 0, stamina: 0});
  }
}

module.exports = Boost;