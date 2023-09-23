class Field{
    field = []
    div_field = []
    constructor() {
        for(let i = 0; i < field_height;i++){
            this.field[i] = new Array(field_width).fill(0)
        }

        let div
        for(let i = 0; i < field_height; i++){
            this.div_field[i] = []
            for(let j = 0; j < field_width; j++){
                div = document.createElement('div')
                div.setAttribute('id', `div${j}_${i}`)
                document.body.appendChild(div)
                this.div_field[i][j] = new Cell(div, "0", j , i)
            }
        }
    }

    delete_row(row){
        for(let i = row; i > 0; i--){
            for(let j = 0; j < field_width; j++){
                this.div_field[i][j].set_color(this.div_field[i-1][j].div.style.backgroundColor)
                this.div_field[i][j].set_opacity(this.div_field[i-1][j].div.style.opacity)
                this.field[i][j] = this.field[i-1][j]
            }
        }
    }

    check_filled_row(score){
        let flag = false
        for(let i = 0; i < field_height; i++){
            if(this.field[i].toString() == Array(field_width).fill(1).toString()){
                this.delete_row(i)
                score.set_score(score.score + scores["ROW"])
                flag = true
            }
        }

        if(flag){
            //drop_sound.play()
        }
    }

    check_start_position(tetramino_matrix){
        for(let i = 0; i < tetramino_matrix.length; i++){
            for(let j = 0; j < tetramino_matrix.length; j++){
                if(tetramino_matrix[i][j] == "1" && this.field[i][j + start_cell] == "1"){
                    document.dispatchEvent(game_finished)
                    return false
                }
            }
        }
        return true
    }

    add_tetramino(tetramino){
        let div
        for(let i = 0; i < size_of_tetramino; i++){
            div = this.div_field[tetramino.cells[i].y][tetramino.cells[i].x]
            div.set_opacity("1")
            div.set_color(tetramino.color)

            this.field[tetramino.cells[i].y][tetramino.cells[i].x] = "1"
        }
    }

    clear_field(){
        for(let i = 0; i < field_height; i++){
            for(let j = 0; j < field_width; j++){
                this.div_field[i][j].set_opacity("0")
                this.field[i][j] = 0
            }
        }
    }
}