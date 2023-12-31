class Keyborad_handler{
    handling(event, field, current_tetramino, status, score){
        let dx=0
        let dy=0
        //console.log(event.keyCode)
        if(status){
            switch (event.keyCode){
                case keys["LEFT"]:
                    dx = -1
                    current_tetramino.move_sides(dx, dy, field)
                    break
                case keys["RIGHT"]:
                    dx = 1
                    current_tetramino.move_sides(dx, dy, field)
                    break
                case keys["DOWN"]:
                    dy = 1
                    current_tetramino.move_sides(dx, dy, field)
                    score.set_score(score.score + scores["DOWN"])
                    break
                case keys["ROTATE"]:
                    current_tetramino.rotate(field)
                    break
                case keys["ESC"]:
                    document.dispatchEvent(esc_event)
                    break
                default:
                    break
            }
        }
    }
}