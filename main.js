//import {Field} from "field.js";

let game_interface = new Interface()

game_interface.ask_name()
document.addEventListener("name_entered", start_game)

function start_game(){
    let field = new Field()
    let keyboard_handler = new Keyborad_handler()

    let shadow_tetr = new Shadow_tetramino()

    let cur_tetr = new Current_tetramino()
    let next_tetr = new Next_tetramino()

    let game = new Game(field, cur_tetr, next_tetr, shadow_tetr, keyboard_handler)
    game_interface.add_game(game)
    game_interface.add_listeners()
    game_interface.game.game()

    document.removeEventListener("name_entered", start_game)
}