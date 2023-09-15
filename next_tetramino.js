class Next_tetramino extends Tetramino{
    generate_new(){
        this.color = rand_from_array(colors)
        for(let i = 0; i < size_of_tetramino; i++){
            this.cells[i].set_color(this.color)
        }
        this.matrix = tetraminos[rand_from_array(tetraminos_keys)]
        this.put_it_in_place(12, 0)
    }
}