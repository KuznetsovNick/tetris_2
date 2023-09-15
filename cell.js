class Cell{
    x
    y
    tetramino_x
    tetramino_y
    div
    constructor(div, opacity, x = 0, y = 0) {
        this.x = x
        this.y = y

        this.div = div

        this.div.style.position = "absolute"

        this.div.style.height = `${scale}px`
        this.div.style.width = `${scale}px`

        this.div.style.top = `${scale*y}px`
        this.div.style.left = `${scale*x}px`

        this.div.style.opacity = opacity
    }

    set_color(color){
        this.div.style.backgroundColor = color
    }

    set_opacity(opacity){
        this.div.style.opacity = opacity
    }

    set_x(x){
        this.x = x
        this.div.style.left = `${scale*x}px`
    }

    set_y(y){
        this.y = y
        this.div.style.top = `${scale*y}px`
    }

    set_tetramino_x(x){
        this.tetramino_x = x
    }

    set_tetramino_y(y){
        this.tetramino_y = y
    }
}