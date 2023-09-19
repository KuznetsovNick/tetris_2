class Game{
    current_tetramino
    next_tetramino
    shadow_tetramino
    keyboard_handler
    field
    interval
    status
    score
    level_speed = 1000

    constructor(field, current_tetramino, next_tetramino, shadow_tetramino, keyboard_handler) {
        this.current_tetramino = current_tetramino
        this.next_tetramino = next_tetramino
        this.shadow_tetramino = shadow_tetramino


        this.keyboard_handler = keyboard_handler

        this.field = field

        this.status = gaming_condition["Play"]

        this.score = new Score_board()
    }
    from_current_to_next(){
        this.field.add_tetramino(this.current_tetramino)

        this.current_tetramino.set_matrix(this.next_tetramino.matrix)
        this.current_tetramino.set_color(this.next_tetramino.color)

        this.next_tetramino.generate_new()

        this.current_tetramino.put_it_in_place()

        this.field.check_filled_row(this.score)
    }

    start_configuration(){
        this.current_tetramino.generate_tetramino(start_cell, 0)

        this.next_tetramino.generate_tetramino(12, 0)

        this.shadow_tetramino.shadow(this.current_tetramino, this.field)
    }

    resume_game(){
        this.interval = setInterval(() => {this.current_tetramino.move_sides(0, 1, this.field)
            this.shadow_tetramino.shadow(this.current_tetramino, this.field)}, this.level_speed)
        this.status = gaming_condition["Play"]
    }

    stop_game(){
        clearInterval(this.interval)
        this.status = gaming_condition["Pause"]
    }

    next_level(){
        this.level_speed -= speed
        clearInterval(this.interval)
        this.interval = setInterval(() => {this.current_tetramino.move_sides(0, 1, this.field)
            this.shadow_tetramino.shadow(this.current_tetramino, this.field)}, this.level_speed)
    }

    restart_game(){
        this.field.clear_field()
        this.start_configuration()
        this.score.set_score(0)
    }

    add_listeners(){
        document.addEventListener("keypress", ( event) => {this.keyboard_handler.handling(event, this.field, this.current_tetramino, this.status, this.score);
            this.shadow_tetramino.shadow(this.current_tetramino, this.field)})

        document.addEventListener("build", (my_event) => {this.from_current_to_next()})

        document.addEventListener("esc", (stop_event) => {
            if(this.status){
                game_interface.call_menu(this)
            }
            else{
                game_interface.hide_menu(this)
            }
        })

        document.addEventListener("level", (level_event) => {this.next_level()})
    }

    game(){
        this.start_configuration()
        this.resume_game()
        this.add_listeners()
    }
}