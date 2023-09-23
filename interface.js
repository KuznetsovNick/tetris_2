class Interface{
    user
    menu
    game
    end
    constructor() {
        this.user = new User()
        this.menu = new Menu()
        this.top = new Top()

        this.f_resume = this.g_resume.bind(null, this)
        this.f_restart = this.g_restart.bind(null, this)
        this.f_change_user = this.g_change_user.bind(null, this)

        this.end = document.createElement('div')
        document.body.appendChild(this.end)
        this.end.style.position = "absolute"
        this.end.style.width = `${scale*6}px`
        this.end.style.height = `${scale*4}px`
        this.end.style.backgroundColor = "white"
        this.end.style.opacity = "0"
        this.end.style.top = `${scale*3}px`
        this.end.style.left = `${scale*2}px`
        this.end.style.borderRadius = `${scale*0.5}px`
        this.end.style.fontSize = `${scale*1.5}px`
    }

    add_game(game){
        this.game = game
    }
    ask_name(){
        this.user.call_input_name()
        this.user.input.focus()
        this.user.input.value = ""
        document.getElementById('name').onkeydown = (event) => {
            if(event.keyCode == keys["ENTER"]){
                this.user.name_entered()
                document.dispatchEvent(name_entered)
            }
        }
    }

    call_menu(){
        this.game.stop_game()
        this.menu.div_background.style.opacity = "0.5"
        this.menu.div_background.style.zIndex = "1"
        this.menu.resume.style.opacity = "1"
        this.menu.resume.style.zIndex = "2"
        this.menu.restart.style.opacity = "1"
        this.menu.restart.style.zIndex = "2"
        this.menu.change_user.style.opacity = "1"
        this.menu.change_user.style.zIndex = "2"

        this.menu.resume.addEventListener("click", this.f_resume)
        this.menu.restart.addEventListener("click", this.f_restart)
        this.menu.change_user.addEventListener("click", this.f_change_user)
    }

    hide_menu(){
        this.menu.div_background.style.opacity = "0"
        this.menu.div_background.style.zIndex = "0"
        this.menu.resume.style.opacity = "0"
        this.menu.resume.style.zIndex = "0"
        this.menu.restart.style.opacity = "0"
        this.menu.restart.style.zIndex = "0"
        this.menu.change_user.style.opacity = "0"
        this.menu.change_user.style.zIndex = "0"
        this.end.style.opacity = "0"
        this.end.style.zIndex = "0"
        this.menu.resume.removeEventListener("click", this.f_resume)
        this.menu.restart.removeEventListener("click", this.f_restart)
        this.menu.change_user.removeEventListener("click", this.f_change_user)
    }

    the_end(){
        this.game.stop_game()
        this.menu.div_background.style.opacity = "0.5"
        this.menu.div_background.style.zIndex = "1"

        this.end.style.opacity = "1"
        this.end.style.zIndex = "2"
        this.end.innerHTML = `The end\n${this.game.score.score}`

        this.menu.restart.style.opacity = "1"
        this.menu.restart.style.zIndex = "2"
        this.menu.change_user.style.opacity = "1"
        this.menu.change_user.style.zIndex = "2"

        this.menu.restart.addEventListener("click", this.f_restart)
        this.menu.change_user.addEventListener("click", this.f_change_user)
    }

    add_listeners(){
        document.addEventListener("keypress", ( event) => {this.game.keyboard_handler.handling(event, this.game.field, this.game.current_tetramino, this.game.status, this.game.score);
            this.game.shadow_tetramino.shadow(this.game.current_tetramino, this.game.field)})

        document.addEventListener("build", (my_event) => {this.game.from_current_to_next()})

        document.addEventListener("esc", (stop_event) => {
            this.call_menu(this.game)
        })

        document.addEventListener("game_finished", () => {
            this.the_end()
        })

        //document.addEventListener("level", (level_event) => {this.game.next_level()})
    }

    g_resume(obj, event){
        obj.game.resume_game()
        obj.hide_menu()
    }

    g_restart(obj, event){
        obj.top.add_to_top(obj.user.input.value, obj.game.score.score)
        obj.game.restart_game()
        obj.game.resume_game()
        obj.hide_menu()
    }

    g_change_user(obj, event){
        //TEST
        obj.top.add_to_top(obj.user.input.value, obj.game.score.score)

        obj.hide_menu()
        obj.user.call_input_name()
        document.addEventListener("name_entered", f)
        obj.ask_name()

        function f(){
            obj.game.restart_game()
            obj.game.resume_game()
            document.removeEventListener("name_entered", f)
        }
    }
}