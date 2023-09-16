class Score_board{
    score = 0
    score_div
    constructor() {
        this.score_div = document.createElement('div')
        document.body.appendChild(this.score_div)

        this.score_div.style.position = "absolute"

        this.score_div.style.top = `${scale*6}px`
        this.score_div.style.left = `${scale*12}px`

        this.score_div.style.height = `${scale}px`
        this.score_div.style.width = `${scale*4}px`

        this.score_div.style.fontSize = `${scale}px`

        this.score_div.style.border = "1px solid black"

        this.score_div.innerHTML = this.score + " pts"
    }

    set_score(value){
        this.score += value
        this.score_div.innerHTML = this.score + " pts"

        //Переписать
        if(this.score == 1 || this.score == 50 || this.score == 100 ){
            document.dispatchEvent(level_event)
        }
    }
}