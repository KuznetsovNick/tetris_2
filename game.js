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
    level_div
    level = 1

    constructor(field, current_tetramino, next_tetramino, shadow_tetramino, keyboard_handler) {
        this.current_tetramino = current_tetramino
        this.next_tetramino = next_tetramino
        this.shadow_tetramino = shadow_tetramino


        this.keyboard_handler = keyboard_handler

        this.field = field

        this.status = gaming_condition["Play"]

        this.score = new Score_board()

        this.level_div = document.getElementById("level")
        this.level_div.style.opacity = "1"
        this.level_div.innerHTML = `${this.level} level`
    }
    from_current_to_next(){
        this.field.add_tetramino(this.current_tetramino)
        this.field.check_filled_row(this.score)

        this.current_tetramino.set_matrix(this.next_tetramino.matrix)
        this.current_tetramino.set_color(this.next_tetramino.color)

        this.next_tetramino.generate_new()

        if(this.field.check_start_position(this.current_tetramino.matrix)){
            this.current_tetramino.put_it_in_place()
        }
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
        this.level++
        this.level_div.innerHTML = `${this.level} level`
    }

    restart_game(){
        this.level_speed = 1000
        this.field.clear_field()
        this.start_configuration()
        this.score.set_score(0)
    }

    game(){
        this.start_configuration()
        this.resume_game()
    }
}