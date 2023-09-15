class Make_net{
    make_net(id, height, width){
        let context = document.getElementById(id).getContext("2d")

        for(let i = 1; i < height;i++){
            context.moveTo(0, scale*i)
            context.lineTo(scale*width, scale*i)
        }

        for(let i = 1; i < width;i++){
            context.moveTo(scale*i, 0)
            context.lineTo(scale*i, scale*height)
        }

        context.strokeStyle = "black"
        context.stroke()
    }
}