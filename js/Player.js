class Player {
    constructor(){}
    getCount(){
        var playerCountRef  = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
           playerCount = data.val();
        })
       
      }

      update(count){
        database.ref('/').update({
        playerCount:count
        });
      }
      update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
          name:this.name, 
          distance:this.distance
        })
      }
      static getPlayerInfo(){
        var playerInfo = database.ref('players')
        playerInfo.on("value",(data)=>{
          allPlayers=data.val()
        })
      }
}
