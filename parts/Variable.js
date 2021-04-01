const Part = require("./Part.js");

class Variable extends Part {
  constructor(){
    super("Variable", "Driver", "https://vignette.wikia.nocookie.net/beyblade/images/2/2e/DriverVariable.png/revision/latest?cb=20160714200155", {atk: 12}, {atk: 2, def: 1, stamina: 0});
  }
}

module.exports = Variable;