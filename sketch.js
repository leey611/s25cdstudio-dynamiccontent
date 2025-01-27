function setup() {
    let sketch_div = select('#navigation');
    console.log(sketch_div)
    // let canvas = createCanvas(sketch_div.width, 300);
    let canvas = createCanvas(1600, 600);
    // console.log(canvas)
    // canvas.height = 300
    // canvas.style.display = "flex"
    canvas.parent('p5sketch');
    background(200);
    noStroke()
}

function draw() {
    
    if (frameCount % 20 === 0) {
        fill(0,0,255)
        circle(random(width), random(height), 20)
    }

    if (frameCount % 500 === 0) {
        background(200);
    }
    
}

function windowResized() {
    // console.log('resize')
    let sketch_div_w = select('#p5sketch').width
    // console.log(select('#p5sketch').width)
    // select('#p5sketch').height = `${height * (sketch_div_w/width)}`
}