class Shadow_tetramino extends Tetramino{

    constructor() {
        super()
        this.set_color("grey")
    }
    shadow(tetramino, field){
        let dy = 0
        let y

        label:
        while(true){
            for(let i = 0; i < size_of_tetramino; i++){
                y = tetramino.cells[i].y + dy
                if(y >= field_height || field.field[y][tetramino.cells[i].x]){
                    dy--
                    break label
                }
            }
            dy++
        }

        for(let i = 0; i < size_of_tetramino; i++){
            this.cells[i].set_x(tetramino.cells[i].x)
            this.cells[i].set_y(tetramino.cells[i].y + dy)
        }

        this.set_opacity("1")
    }
}