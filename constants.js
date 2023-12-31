const scale = 50
const field_width = 10
const field_height = 20
const start_cell = 4
const keys = {"LEFT": 97, "RIGHT": 100, "DOWN": 115, "ROTATE": 119, "ESC": 102, "ENTER": 13}
const size_of_tetramino = 4
const colors= ["LightGoldenrodYellow", "HotPink", "LightGreen", "Turquoise"]

const my_event = new Event("build", {bubbles: true})
const esc_event = new Event("esc", {bubbles: true})
const level_event = new Event("level", {bubbles: true})
const name_entered = new Event("name_entered", {bubbles: true})
const game_finished = new Event("game_finished", {bubbles: true})

const speed = 200
const level_score = {"1_level": 0, "2_level": 200, "3_level": 500}
const scores = {"DOWN": 1, "ROW": 30}

const gaming_condition = {"Play": true, "Pause": false}

const top_length = 3
const top_colors = ["gold", "silver", "SaddleBrown"]

const drop_sound = new Audio("drop.mp3")

function rand_from_array(array){
    let rand_ind = Math.floor(Math.random() * array.length);
    return array[rand_ind]
}

const tetraminos = {
    "L":[[0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]],

    "LR":[[0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]],

    "T":[[0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]],

    "I":[[0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]],

    "O":[[1, 1],
        [1, 1]],

    "Z":[[1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]],

    "ZR":[[0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]],
}

let tetraminos_keys = []
for(let key in tetraminos){
    tetraminos_keys.push(key)
}

