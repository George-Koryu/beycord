class Quest {
    constructor(name, rewards){
        this.name = name;
        this.completed = false;
        this.rewards = rewards;
    }
}

module.exports = Quest;