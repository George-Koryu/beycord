const Part = require("./Part.js");

class Zeta extends Part {
  constructor(){
    super("Zeta", "Driver", "https://vignette.wikia.nocookie.net/beyblade/images/9/97/DriverZeta.png/revision/latest?cb=20171116103333", {atk: 11}, {atk: 2, def: 0, stamina: 0});
  }
}

module.exports = Zeta;