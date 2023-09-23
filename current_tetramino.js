class Current_tetramino extends Tetramino {
    check_move(dx, dy, field, cell_index){
        return !(this.cells[cell_index].x + dx < 0 || this.cells[cell_index].y + dy< 0 ||
            this.cells[cell_index].x +dx >= field_width || this.cells[cell_index].y + dy >= field_height ||
            field.field[this.cells[cell_index].y+dy][this.cells[cell_index].x+dx] == "1")
    }

    move_sides(dx, dy, field){
        for(let i = 0; i < size_of_tetramino; i++){
            if(!this.check_move(dx, dy, field, i)){
                if(dy == 1){
                    document.dispatchEvent(my_event)
                }
                return false
            }
        }

        for (let i = 0; i < size_of_tetramino; i++) {
            this.cells[i].set_x(this.cells[i].x + dx)
            this.cells[i].set_y(this.cells[i].y + dy)
        }

        return true
    }

    rotate(field){
        let matrix_size =  this.matrix.length - 1
        let x, y, dx, dy

        for(let i = 0; i < size_of_tetramino; i++){
            y = this.cells[i].tetramino_x
            x = matrix_size - this.cells[i].tetramino_y
            dx = x - this.cells[i].tetramino_x
            dy = y - this.cells[i].tetramino_y

            if(!this.check_move(dx, dy, field, i)){
                return false
            }
        }

        for(let i = 0; i < size_of_tetramino; i++){
            y = this.cells[i].tetramino_x
            x = matrix_size - this.cells[i].tetramino_y
            dx = x - this.cells[i].tetramino_x
            dy = y - this.cells[i].tetramino_y

            this.cells[i].tetramino_y = y
            this.cells[i].tetramino_x = x
            this.cells[i].set_x(this.cells[i].x + dx)
            this.cells[i].set_y(this.cells[i].y + dy)
        }

        return true
    }
}