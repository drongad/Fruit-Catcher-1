class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        this.rank = null

        
    }
    
    getPlayerAtEnd(){
        var playerAtEndRef = database.ref('playersAtEnd')
        playerAtEndRef.on("value",function (data){
            this.rank = data.val()
        })
    }
    static updatePlayersAtEnd(players){
        database.ref('/').update({
            playersAtEnd: players
        })
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
