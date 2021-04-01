class Item {
  constructor(name, costinvaltz, costingv){
    this.name = name;
    this.civ = costinvaltz;
    this.cigv = costingv || null;
    if(costinvaltz == Infinity || costinvaltz == NaN) this.civ = null;
  }
}

module.exports = Item;