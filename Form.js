class Form {
    constructor(){
        this.input = createInput ("type your name")
        this.button = createButton ("play")
        this.greeting = createElement ('h3') 
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title = createElement ('h2')
        title.html ("car racing game")
        title.position (70,0)

    

       this.input.position (110,160)
      this.button.position (180,200)

       this.button.mousePressed (()=>{
            this.input.hide ();
            this.button.hide ();

            player.name = this.input.value ();
            playerCount += 1
            player.index = playerCount
            player.update ()// retirar name dos parenteses
            player.updateCount (playerCount)
            this.greeting.html ("hello " + player.name)
            this.greeting.position (110,160);
        })
    }
}