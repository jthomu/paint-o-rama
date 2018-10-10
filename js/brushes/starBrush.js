let star

function loadStarImage(){
    star = loadImage('images/stars.png')
}

function starBrush(x,y){
    push() // save current drawing settings
    image( star, x, y, 50, 50)
    pop() // restore original drawing settings
}
