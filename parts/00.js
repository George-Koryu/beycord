const Part = require("./Part.js");

class Boost extends Part {
  constructor(){
    super("00", "Disc", "https://vignette.wikia.nocookie.net/beyblade/images/7/79/Disk00.png/revision/latest?cb=20181214204630", {atk: 22, dmgb: 32}, {atk: 5, def: 0, stamina: 1});
  }
}

module.exports = Boost;