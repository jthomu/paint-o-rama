function rainbowPen(x,y){
    push() // save current drawing settings

    // change color mode from RGB to hue, saturation, brightness
    colorMode(HSB)

    // add the x && y values, the resulting number will fall somewhere between
    // 0 && our canvas width + our canvas height, map our x+y value to the
    // new range 0-360 so that we can use it as a hue value
    let hue = map( x+y, 0, width+height, 0, 360 )
    fill(hue, 100, 100)

    noStroke()

    ellipse(x,y,50)

    pop() // restore original drawing settings
}
