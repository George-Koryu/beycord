const Part = require("./Part.js");

class Accel extends Part {
  constructor(){
    super("Accel'", "Driver", "https://vignette.wikia.nocookie.net/beyblade/images/a/a4/DriverAccel%27.png/revision/latest?cb=20181110115741", {atk: 20}, {atk: 4, def: 0, stamina: 0});
  }
}

module.exports = Accel;