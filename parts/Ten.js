const Part = require("./Part.js");

class Accel extends Part {
  constructor(){
    super("Ten", "Layer Weight", "https://vignette.wikia.nocookie.net/beyblade/images/3/30/LayerWeightTen.png/revision/latest?cb=20190315162715", {atk: 0, dmgb: 5}, {atk: 0, def: 2, stamina: 0});
  }
}

module.exports = Accel;