class Score_board{
    score = 0
    score_div
    constructor() {
        this.score_div = document.createElement('div')
        document.body.appendChild(this.score_div)

        this.score_div.style.position = "absolute"

        this.score_div.style.top = `${scale*7}px`
        this.score_div.style.left = `${scale*12}px`

        this.score_div.style.height = `${scale}px`
        this.score_div.style.width = `${scale*4}px`

        this.score_div.style.fontSize = `${scale*0.75}px`

        this.score_div.style.border = "1px solid black"

        this.score_div.innerHTML = this.score + " pts"
    }

    set_score(value){
        if((this.score < level_score["2_level"] && value >= level_score["2_level"])
            || (this.score < level_score["3_level"] && value >= level_score["3_level"])){
            this.level++
            document.dispatchEvent(level_event)
        }
        this.score = value
        this.score_div.innerHTML = this.score + " pts"
    }
}