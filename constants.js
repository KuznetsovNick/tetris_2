const scale = 50
const field_width = 10
const field_height = 20
const start_cell = 4
const keys = {"LEFT": 97, "RIGHT": 100, "DOWN": 115, "ROTATE": 119}
const size_of_tetramino = 4
const colors= ["LightGoldenrodYellow", "HotPink", "LightGreen", "Turquoise"]

const my_event = new Event('build', {bubbles: true})

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

