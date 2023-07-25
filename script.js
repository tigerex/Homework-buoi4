const WIDTH = 1200; HEIGHT = 800;

const SCALE = 20;
let canvas = document.getElementById('myCanvas');
canvas.style.border = "5px solid black";

let pen = canvas.getContext('2d');
pen.canvas.width = WIDTH;
pen.canvas.height = HEIGHT;

let legs = canvas.getContext('2d');

function clear(){
    pen.clearRect(0, 0, WIDTH, HEIGHT);
}

function loop(){
    let FPS = 60;
    let timeLoop = 1000/FPS;
    let height = HEIGHT;
    let counter = HEIGHT;
    
    setInterval(() => {
        
        if(height > (HEIGHT-200) && counter > (HEIGHT-200)){
            height -= 10;
            counter -= 10;
        }else if(height < HEIGHT){
            height += 10;
            if(height >= HEIGHT){
                counter = HEIGHT;
            }
        }
        clear();
        drawMario(height);
    }, timeLoop);
}

loop();


function drawMario(height){
    let head = canvas.getContext('2d');
    let neck = canvas.getContext('2d');
    let eye = canvas.getContext('2d');
    let hair = canvas.getContext('2d');
    let rightHand = canvas.getContext('2d');
    let leftHand = canvas.getContext('2d');
    let leftArm = canvas.getContext('2d');
    let rightArm = canvas.getContext('2d');
    let hat = canvas.getContext('2d');
    let legs = canvas.getContext('2d');
    let cover = canvas.getContext('2d');
    let buttonLeft = canvas.getContext('2d');
    let buttonRight = canvas.getContext('2d');
    
    
    
    //left leg
    legs.beginPath();
    legs.moveTo((WIDTH/2)-(SCALE*1.5), height);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*3, height);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*3, height-SCALE*1);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, height-SCALE*1);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, height-SCALE*2);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*1, height-SCALE*2);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5)), height-SCALE*2);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5)), height);
    legs.closePath();

    //right leg
    legs.moveTo((WIDTH/2)+(SCALE*1.5), height);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*3, height);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*3, height-SCALE*1);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, height-SCALE*1);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, height-SCALE*2);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5)), height-SCALE*2);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5)), height);
    legs.closePath();

    legs.strokeStyle = "#964e1e";
    legs.fillStyle = "#964e1e";
    legs.fill();
    legs.stroke();

    //dungarees

    //Left Button
    buttonLeft.beginPath();
    buttonLeft.moveTo((WIDTH/2)-(SCALE*0.5), height-SCALE*7);
    buttonLeft.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*1, height-SCALE*7);
    buttonLeft.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*1, height-SCALE*6);
    buttonLeft.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*6);
    buttonLeft.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*7);
    buttonLeft.closePath();

    buttonLeft.strokeStyle = "#fedd50";
    buttonLeft.fillStyle = "#fedd50";

    buttonLeft.stroke();
    buttonLeft.fill();

    //Right Button
    buttonLeft.beginPath();
    buttonLeft.moveTo((WIDTH/2)+(SCALE*0.5), height-SCALE*7);
    buttonLeft.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*1, height-SCALE*7);
    buttonLeft.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*1, height-SCALE*6);
    buttonLeft.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*6);
    buttonLeft.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*7);
    buttonLeft.closePath();

    buttonLeft.strokeStyle = "#fedd50";
    buttonLeft.fillStyle = "#fedd50";

    buttonLeft.stroke();
    buttonLeft.fill();

    //cover
    cover.beginPath();
    cover.moveTo((WIDTH/2)-(SCALE*0.5), height-SCALE*2);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*3, height-SCALE*2);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*3, height-SCALE*4);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, height-SCALE*4);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, height-SCALE*6);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*6);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*7);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*9);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE, height-SCALE*9);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE, height-SCALE*7);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*7);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*9);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE, height-SCALE*9);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE, height-SCALE*7);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*7);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*6);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*2, height-SCALE*6);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*2, height-SCALE*4);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*3, height-SCALE*4);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*3, height-SCALE*2);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*2);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*3);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*3);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*2);
    cover.closePath();

    cover.strokeStyle = "#4554c9";
    cover.fillStyle = "#4554c9";

    cover.stroke();
    cover.fill();

    //tshirt

    //neck
    neck.beginPath();
    neck.moveTo((WIDTH/2)-(SCALE*0.5), height-SCALE*7);
    neck.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*9);
    neck.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*9);
    neck.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*7);
    neck.closePath();

    neck.strokeStyle = "#f62b25";
    neck.fillStyle = "#f62b25";

    neck.stroke();
    neck.fill();

    //left arm
    leftArm.beginPath();
    leftArm.moveTo((WIDTH/2)-(SCALE*1.5), height-SCALE*6);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5)), height-SCALE*9);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, height-SCALE*9);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, height-SCALE*8);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*3, height-SCALE*8);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*3, height-SCALE*7);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*4, height-SCALE*7);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*4, height-SCALE*6);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, height-SCALE*6);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, height-SCALE*5);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*1, height-SCALE*5);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*1, height-SCALE*6);
    leftArm.closePath();

    leftArm.strokeStyle = "#f62b25";
    leftArm.fillStyle = "#f62b25";

    leftArm.stroke();
    leftArm.fill();

    //right arm
    rightArm.beginPath();
    rightArm.moveTo((WIDTH/2)+(SCALE*1.5), height-SCALE*6);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5)), height-SCALE*9);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, height-SCALE*9);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, height-SCALE*8);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*3, height-SCALE*8);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*3, height-SCALE*7);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*4, height-SCALE*7);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*4, height-SCALE*6);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, height-SCALE*6);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, height-SCALE*5);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*1, height-SCALE*5);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*1, height-SCALE*6);
    rightArm.closePath();

    rightArm.strokeStyle = "#f62b25";
    rightArm.fillStyle = "#f62b25";

    rightArm.stroke();
    rightArm.fill();


    //hat
    hat.beginPath();
    hat.moveTo((WIDTH/2)-(SCALE*3.5), height-SCALE*14);
    hat.lineTo((WIDTH/2)-(SCALE*3.5), height-SCALE*15);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*1, height-SCALE*15);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*1, height-SCALE*16);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*6, height-SCALE*16);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*6, height-SCALE*15);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*9, height-SCALE*15);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*9, height-SCALE*14);
    hat.closePath();

    hat.strokeStyle = "#f62b25";
    hat.fillStyle = "#f62b25";

    hat.stroke();
    hat.fill();

    //head
    head.beginPath();
    head.moveTo((WIDTH/2)-(SCALE*2.5), height-SCALE*9);
    head.lineTo((WIDTH/2)-(SCALE*2.5), height-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE, height-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE, height-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*2, height-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*2, height-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*1, height-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*1, height-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*2, height-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*2, height-SCALE*14);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*3, height-SCALE*14);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*3, height-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*4, height-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*4, height-SCALE*14);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, height-SCALE*14);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, height-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*7, height-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*7, height-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*8, height-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*8, height-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, height-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, height-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*4, height-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*4, height-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*3, height-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*3, height-SCALE*10);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, height-SCALE*10);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, height-SCALE*9);
    head.closePath();

    head.strokeStyle = "#fcc376";
    head.fillStyle = "#fcc376";

    head.stroke();
    head.fill();

    //eye
    eye.beginPath();
    eye.moveTo((WIDTH/2)+(SCALE*0.5), height-SCALE*12);
    eye.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE, height-SCALE*12);
    eye.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE, height-SCALE*14);
    eye.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*14);

    eye.closePath();

    eye.strokeStyle = "#000000";
    eye.fillStyle = "#000000";

    eye.stroke();
    eye.fill();

    //hair
    hair.beginPath();
    hair.moveTo((WIDTH/2)-(SCALE*0.5), height-SCALE*11);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, height-SCALE*11);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, height-SCALE*13);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*4, height-SCALE*13);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*4, height-SCALE*10);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, height-SCALE*10);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, height-SCALE*11);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*3, height-SCALE*11);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*3, height-SCALE*14);
    hair.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*14);
    hair.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*13);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE, height-SCALE*13);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE, height-SCALE*12);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*1, height-SCALE*12);
    hair.lineTo((WIDTH/2)-(SCALE*0.5), height-SCALE*12);

    hair.moveTo((WIDTH/2)+(SCALE*0.5), height-SCALE*10);
    hair.lineTo((WIDTH/2)+(SCALE*0.5), height-SCALE*11);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*1, height-SCALE*11);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*1, height-SCALE*12);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*2, height-SCALE*12);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*2, height-SCALE*11);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*4, height-SCALE*11);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*4, height-SCALE*10);
    hair.closePath();

    hair.strokeStyle = "#7e3f14";
    hair.fillStyle = "#7e3f14";

    hair.stroke();
    hair.fill();

    //left hand
    leftHand.beginPath();
    leftHand.moveTo((WIDTH/2)-(SCALE*2.5), height-SCALE*4);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5), height-SCALE*5);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*1, height-SCALE*5);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*1, height-SCALE*6);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*1, height-SCALE*6);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*3, height-SCALE*6);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*3, height-SCALE*3);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*3, height-SCALE*3);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE, height-SCALE*3);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE, height-SCALE*4);
    leftHand.closePath();

    leftHand.strokeStyle = "#fcc376";
    leftHand.fillStyle = "#fcc376";

    leftHand.stroke();
    leftHand.fill();

    //right hand
    rightHand.beginPath();
    rightHand.moveTo((WIDTH/2)+(SCALE*2.5), height-SCALE*4);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5), height-SCALE*5);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*1, height-SCALE*5);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*1, height-SCALE*6);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*1, height-SCALE*6);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*3, height-SCALE*6);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*3, height-SCALE*3);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*3, height-SCALE*3);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE, height-SCALE*3);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE, height-SCALE*4);
    rightHand.closePath();

    rightHand.strokeStyle = "#fcc376";
    rightHand.fillStyle = "#fcc376";

    rightHand.stroke();
    rightHand.fill();
}



