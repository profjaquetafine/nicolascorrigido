class Player{
    constructor(){
        this.distance = 0,
        this.index = null,
        this.name = null
    }
    //****************************Conta quantos jogadores temos********************************** */
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",function(data){
       
            playerCount=data.val();
         
        })
     
    }
       
        updateCount(count){
    database.ref('/').update({
     
    playerCount:count
     
    });
     
        }
    update(){
     //códico modificado pela prof
        var playerIndex="players/player"+ this.index;
        database.ref(playerIndex).set({
    name:this.name,
     distance:this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players')
        playerInfoRef.on("value",(data)=>{

            allPlayers = data.val()
        })
    }

     
         
     }
     
     
     
    
    