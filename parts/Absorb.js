const Part = require("./Part.js");

class Absorb extends Part {
  constructor(){
    super("Absorb", "Driver", "https://vignette.wikia.nocookie.net/beyblade/images/3/37/DriverAbsorb.png/revision/latest?cb=20180914124001", {atk: 22}, {atk: 0, def: 0, stamina: 4});
  }
}

module.exports = Absorb;