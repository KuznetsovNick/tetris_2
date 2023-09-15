class Game{
    current_tetramino
    next_tetramino
    shadow_tetramino
    field
    from_current_to_next(){
        field.add_tetramino(this.current_tetramino)

        this.current_tetramino.set_matrix(this.next_tetramino.matrix)
        this.current_tetramino.set_color(this.next_tetramino.color)

        this.next_tetramino.generate_new()

        this.current_tetramino.put_it_in_place()

        this.field.check_filled_row()
    }

    game(field, current_tetramino, next_tetramino, shadow_tetramino, keyboard_handler){
        this.current_tetramino = current_tetramino
        this.next_tetramino = next_tetramino
        this.shadow_tetramino = shadow_tetramino
        this.field = field

        this.current_tetramino.generate_tetramino(start_cell, 0)

        this.next_tetramino.generate_tetramino(12, 0)

        this.shadow_tetramino.shadow(this.current_tetramino, this.field)

        document.addEventListener("keypress", ( event) => {keyboard_handler.handling(event, this.field, this.current_tetramino);
            this.shadow_tetramino.shadow(this.current_tetramino, this.field)})

        document.addEventListener("build", (my_event) => {this.from_current_to_next()})

    }
}