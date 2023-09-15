class Keyborad_handler{
    handling(event, field, current_tetramino){
        let dx=0
        let dy=0
        switch (event.keyCode){
            case keys["LEFT"]:
                dx = -1
                current_tetramino.move_sides(dx, dy, field)
                return
            case keys["RIGHT"]:
                dx = 1
                current_tetramino.move_sides(dx, dy, field)
                return
            case keys["DOWN"]:
                dy = 1
                if(!current_tetramino.move_sides(dx, dy, field)){
                    document.dispatchEvent(my_event)
                }
                return
            case keys["ROTATE"]:
                current_tetramino.rotate(field)
                return
            default:
                return
        }
    }
}