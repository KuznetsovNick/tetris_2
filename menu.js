class Menu{
    resume
    restart
    change_user
    div_background
    game
    constructor() {
        this.resume = document.createElement('div')
        document.body.appendChild(this.resume)
        this.resume.style.position = "absolute"
        this.resume.style.width = `${scale*6}px`
        this.resume.style.height = `${scale}px`
        this.resume.style.backgroundColor = "white"
        this.resume.style.opacity = "0"
        this.resume.style.top = `${scale*7}px`
        this.resume.style.left = `${scale*2}px`
        this.resume.style.fontSize = `${scale}px`
        this.resume.innerHTML = "Resume"


        this.restart = document.createElement('div')
        document.body.appendChild(this.restart)
        this.restart.style.position = "absolute"
        this.restart.style.width = `${scale*6}px`
        this.restart.style.height = `${scale}px`
        this.restart.style.backgroundColor = "white"
        this.restart.style.opacity = "0"
        this.restart.style.top = `${scale*9}px`
        this.restart.style.left = `${scale*2}px`
        this.restart.style.fontSize = `${scale}px`
        this.restart.innerHTML = "Restart"

        this.change_user = document.createElement('div')
        document.body.appendChild(this.change_user)
        this.change_user.style.position = "absolute"
        this.change_user.style.width = `${scale*6}px`
        this.change_user.style.height = `${scale}px`
        this.change_user.style.backgroundColor = "white"
        this.change_user.style.opacity = "0"
        this.change_user.style.top = `${scale*11}px`
        this.change_user.style.left = `${scale*2}px`
        this.change_user.style.fontSize = `${scale}px`
        this.change_user.innerHTML = "Change user"

        this.div_background = document.createElement('div')
        document.body.appendChild(this.div_background)
        this.div_background.style.position = "absolute"
        this.div_background.style.width = `${scale*16+2}px`
        this.div_background.style.height = `${scale*20+2}px`
        this.div_background.style.backgroundColor = "lightgrey"
        this.div_background.style.opacity = "0"
        this.div_background.style.top = "0px"
        this.div_background.style.left = "0px"
    }
}