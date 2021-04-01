const Part = require("./Part.js");

class Angle extends Part {
  constructor(){
    super("Angle", "Disc Frame", "https://vignette.wikia.nocookie.net/beyblade/images/a/a8/FrameAngle.png/revision/latest?cb=20181009194417", {atk: 6}, {atk: 2, def: 0, stamina: 0});
  }
}

module.exports = Angle;