//import {Field} from "field.js";

let field_id = document.getElementById("field")

let field = new Field()
let keyboard_handler = new Keyborad_handler()

let shadow_tetr = new Shadow_tetramino()
shadow_tetr.set_color("grey")

let cur_tetr = new Current_tetramino()
let next_tetr = new Next_tetramino()

let game = new Game(field, cur_tetr, next_tetr, shadow_tetr, keyboard_handler)
game.game()

//let game = setInterval(() => {cur_tetr.move_down(0, 1, field)}, 1000)

