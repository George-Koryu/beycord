const Part = require("./Part.js");

class Accel extends Part {
  constructor(){
    super("Goku", "Layer Weight", "https://vignette.wikia.nocookie.net/beyblade/images/5/5f/LayerWeightGoku.png/revision/latest?cb=20190808063116", {atk: 1}, {atk: 0, def: 0, stamina: 0});
  }
}

module.exports = Accel;