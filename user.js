class User{
    name
    div_background
    input
    name_div
    constructor() {
        //Фон
        this.div_background = document.createElement('div')
        document.body.appendChild(this.div_background)
        this.div_background.style.position = "absolute"
        this.div_background.style.width = `${scale*16+2}px`
        this.div_background.style.height = `${scale*20+2}px`
        this.div_background.style.backgroundColor = "lightgrey"
        this.div_background.style.opacity = "0"
        this.div_background.style.top = "0px"
        this.div_background.style.left = "0px"


        //Ввод имени
        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.setAttribute('id', "name")
        document.body.append(this.input);
        this.input.style.position = "absolute"
        this.input.style.top = `${scale*9}px`
        this.input.style.left = `${scale*2}px`
        this.input.style.width = `${scale*6}px`
        this.input.style.height = `${scale}px`
        this.input.style.fontSize = `${scale}px`
        this.input.disabled = true
        this.input.style.opacity = "0"

        //Окно с именем
        this.name_div = document.createElement('div')
        document.body.appendChild(this.name_div)
        this.name_div.style.position = "absolute"
        this.name_div.style.top = `${scale*5}px`
        this.name_div.style.left = `${scale*12}px`
        this.name_div.style.height = `${scale}px`
        this.name_div.style.width = `${scale*4}px`
        this.name_div.style.fontSize = `${scale}px`
        this.name_div.style.opacity = "0"
        this.name_div.style.border = "1px solid black"
    }

    call_input_name(){
        this.div_background.style.opacity = "0.5"
        this.div_background.style.zIndex = "1"
        this.input.disabled = false
        this.input.style.opacity = "1"
        this.input.style.zIndex = "2"
        this.name_div.style.opacity = "0"
    }

    name_entered(){
        this.name = document.getElementById("name").value
        this.div_background.style.opacity = "0"
        this.div_background.style.zIndex = "0"
        this.input.disabled = true
        this.input.style.opacity = "0"
        this.div_background.style.zIndex = "0"
        this.name_div.style.opacity = "1"
        this.name_div.innerHTML = this.name
    }

}