//import {Field} from "field.js";
let game = new Game()

let field_id = document.getElementById("field")

let field = new Field()
let keyboard_handler = new Keyborad_handler()

let shadow_tetr = new Shadow_tetramino()
shadow_tetr.set_color("grey")

let cur_tetr = new Current_tetramino()
let next_tetr = new Next_tetramino()


game.game(field, cur_tetr, next_tetr, shadow_tetr, keyboard_handler)

//let game = setInterval(() => {cur_tetr.move_down(0, 1, field)}, 1000)

