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
        for(let i = 0; i < field_height; i++){
            if(this.field[i].toString() == Array(field_width).fill(1).toString()){
                this.delete_row(i)
                score.set_score(scores["ROW"])
            }
        }
    }

    check_start_position(){
        let next_tetramino_matrix = tetraminos[rand_from_array(tetraminos_keys)]
        for(let i = 0; i < next_tetramino_matrix.length; i++){
            for(let j = 0; j < next_tetramino_matrix.length; j++){
                if(next_tetramino_matrix[i][j] == "1" && this.field[i][j + start_cell] == "1"){
                    clearInterval(game)
                    document.removeEventListener("keypress", ( event) => {keyboard_handler.handling(event, field, cur_tetr)})
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
}