class Interface{
    user
    menu
    constructor() {
        this.user = new User()
        this.menu = new Menu()

        this.f_resume = this.g_resume.bind(null, this)
        this.f_restart = this.g_restart.bind(null, this)
        this.f_change_user = this.g_change_user.bind(null, this)
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
        this.menu.game.stop_game()
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
        this.menu.resume.removeEventListener("click", this.f_resume)
        this.menu.restart.removeEventListener("click", this.f_restart)
        this.menu.change_user.removeEventListener("click", this.f_change_user)
    }

    g_resume(obj, event){
        obj.menu.game.resume_game()
        obj.hide_menu()
    }

    g_restart(obj, event){
        obj.menu.game.restart_game()
        obj.menu.game.resume_game()
        obj.hide_menu()
    }

    g_change_user(obj, event){
        obj.hide_menu()
        obj.user.call_input_name()
        document.addEventListener("name_entered", f)
        obj.ask_name()

        function f(){
            obj.menu.game.restart_game()
            obj.menu.game.resume_game()
            document.removeEventListener("name_entered", f)
        }
    }
}