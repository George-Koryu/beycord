const Part = require("./Part.js");

class Boost extends Part {
  constructor(){
    super("Zenith", "Disc", "https://vignette.wikia.nocookie.net/beyblade/images/3/3e/DiskZenith.png/revision/latest?cb=20181115083207", {atk: 42}, {atk: 5, def: 0, stamina: 0});
  }
}

module.exports = Boost;