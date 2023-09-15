class Tetramino{
    cells = []
    color
    matrix

    constructor() {
        let div
        for(let i = 0; i < size_of_tetramino; i++) {
            div = document.createElement('div')
            document.body.appendChild(div)

            this.cells[i] = new Cell(div, "0")
        }
    }

    set_opacity(value){
        for(let i = 0; i < size_of_tetramino; i++){
            this.cells[i].set_opacity(value)
        }
    }

    set_color(value){
        this.color = value
        for(let i = 0; i < size_of_tetramino; i++){
            this.cells[i].set_color(value)
        }
    }

    set_matrix(type){
        this.matrix = []
        for(let i = 0; i < type.length; i++){
            this.matrix[i] = Array.from(type[i])
        }
    }

    put_it_in_place(x = start_cell, y = 0){
        let index = 0
        for(let i = 0; i < this.matrix.length; i++){
            for(let j = 0; j < this.matrix.length; j++){
                if(this.matrix[i][j]){
                    this.cells[index].tetramino_x = j
                    this.cells[index].tetramino_y = i

                    this.cells[index].set_x(x+j)
                    this.cells[index].set_y(y+i)

                    index++
                }
            }
        }
    }

    generate_tetramino(x, y, opacity="1"){
        this.set_matrix(tetraminos[rand_from_array(tetraminos_keys)])
        this.put_it_in_place(x, y)
        this.set_opacity(opacity)
        this.set_color(rand_from_array(colors))
    }

}