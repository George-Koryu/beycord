const Part = require("./Part.js");

class disc0 extends Part {
  constructor(){
    super("0", "Disc", "https://vignette.wikia.nocookie.net/beyblade/images/4/4c/Disk0.png/revision/latest?cb=20171116103333", {atk: 33}, {atk: 0, def: 0, stamina: 0});
  }
}

module.exports = disc0;