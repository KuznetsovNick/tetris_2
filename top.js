class Top{
    places = []

    constructor() {
        if(!localStorage.getItem("top")) {
            localStorage.setItem("top", JSON.stringify([]))
        }

        for(let i = 0; i < top_length; i++){
            this.places[i] = document.createElement('div')
            document.body.appendChild(this.places[i])
            this.places[i].style.position = "absolute"
            this.places[i].style.width = `${scale*4}px`
            this.places[i].style.height = `${scale}px`
            this.places[i].style.backgroundColor = top_colors[i]
            this.places[i].style.opacity = "1"
            this.places[i].style.top = `${scale*(11+i)}px`
            this.places[i].style.left = `${scale*12}px`
            this.places[i].style.zIndex = "2"
            this.places[i].style.fontSize = `${scale*0.75}px`
        }

        let top = JSON.parse(localStorage.getItem("top"))
        console.log(top)
        for(let i = 0; i < top.length; i++){
            this.places[i].innerHTML = `${top[i][0]}: ${top[i][1]}`
        }
    }

    add_to_top(name, score){
        let top = JSON.parse(localStorage.getItem("top"))
        top.push([name, score])
        this.sort_top(top)
        localStorage.setItem("top", JSON.stringify(top))
        for(let i = 0; i < top.length; i++){
            this.places[i].innerHTML = `${top[i][0]}: ${top[i][1]}`
        }
    }

    sort_top(top){
        for(let i = top.length - 1; i > 0; i--){
            if(top[i][1] > top[i-1][1]){
                let temp = top[i]
                top[i] = top[i-1]
                top[i-1] = temp
            }
        }

        if(top.length > top_length){
            top.pop()
        }
    }

}