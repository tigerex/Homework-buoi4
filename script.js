const WIDTH = 1200; HEIGHT = 1000;

const SCALE = 50;
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
    let FPS = 40;
    let timeLoop = 1000/FPS;
    let transparency = 0;
    let counter = 0;
    
    setInterval(() => {
        
        if(transparency < 1  && counter == transparency){
            transparency += 0.01;
            counter += 0.01
        }else if(transparency > 0){
            transparency -= 0.01;
            if(transparency < 0){
                counter = transparency;
            }
            
        }
        clear();
        drawMario(transparency);
    }, timeLoop);
}

loop();


function drawMario(transparency){
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
    legs.moveTo((WIDTH/2)-(SCALE*1.5), HEIGHT);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*3, HEIGHT);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*3, HEIGHT-SCALE*1);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, HEIGHT-SCALE*1);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, HEIGHT-SCALE*2);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*1, HEIGHT-SCALE*2);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5)), HEIGHT-SCALE*2);
    legs.lineTo(((WIDTH/2)-(SCALE*1.5)), HEIGHT);
    legs.closePath();

    //right leg
    legs.moveTo((WIDTH/2)+(SCALE*1.5), HEIGHT);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*3, HEIGHT);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*3, HEIGHT-SCALE*1);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, HEIGHT-SCALE*1);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, HEIGHT-SCALE*2);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5)), HEIGHT-SCALE*2);
    legs.lineTo(((WIDTH/2)+(SCALE*1.5)), HEIGHT);
    legs.closePath();

    legs.strokeStyle = "#964e1e";
    legs.fillStyle = "#964e1e";
    legs.fill();
    legs.stroke();

    //dungarees

    //Left Button
    buttonLeft.beginPath();
    buttonLeft.moveTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*7);
    buttonLeft.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*1, HEIGHT-SCALE*7);
    buttonLeft.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*1, HEIGHT-SCALE*6);
    buttonLeft.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*6);
    buttonLeft.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*7);
    buttonLeft.closePath();

    buttonLeft.strokeStyle = "#fedd50";
    buttonLeft.fillStyle = "#fedd50";

    buttonLeft.stroke();
    buttonLeft.fill();

    //Right Button
    buttonLeft.beginPath();
    buttonLeft.moveTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*7);
    buttonLeft.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*1, HEIGHT-SCALE*7);
    buttonLeft.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*1, HEIGHT-SCALE*6);
    buttonLeft.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*6);
    buttonLeft.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*7);
    buttonLeft.closePath();

    buttonLeft.strokeStyle = "#fedd50";
    buttonLeft.fillStyle = "#fedd50";

    buttonLeft.stroke();
    buttonLeft.fill();

    //cover
    cover.beginPath();
    cover.moveTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*2);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*3, HEIGHT-SCALE*2);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*3, HEIGHT-SCALE*4);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, HEIGHT-SCALE*4);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, HEIGHT-SCALE*6);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*6);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*7);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*9);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE, HEIGHT-SCALE*9);
    cover.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE, HEIGHT-SCALE*7);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*7);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*9);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE, HEIGHT-SCALE*9);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE, HEIGHT-SCALE*7);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*7);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*6);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*2, HEIGHT-SCALE*6);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*2, HEIGHT-SCALE*4);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*3, HEIGHT-SCALE*4);
    cover.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*3, HEIGHT-SCALE*2);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*2);
    cover.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*3);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*3);
    cover.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*2);
    cover.closePath();

    cover.strokeStyle = "#4554c9";
    cover.fillStyle = "#4554c9";

    cover.stroke();
    cover.fill();

    //tshirt

    //neck
    neck.beginPath();
    neck.moveTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*7);
    neck.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*9);
    neck.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*9);
    neck.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*7);
    neck.closePath();

    neck.strokeStyle = "#f62b25";
    neck.fillStyle = "#f62b25";

    neck.stroke();
    neck.fill();

    //left arm
    leftArm.beginPath();
    leftArm.moveTo((WIDTH/2)-(SCALE*1.5), HEIGHT-SCALE*6);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5)), HEIGHT-SCALE*9);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, HEIGHT-SCALE*9);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, HEIGHT-SCALE*8);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*3, HEIGHT-SCALE*8);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*3, HEIGHT-SCALE*7);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*4, HEIGHT-SCALE*7);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*4, HEIGHT-SCALE*6);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, HEIGHT-SCALE*6);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*2, HEIGHT-SCALE*5);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*1, HEIGHT-SCALE*5);
    leftArm.lineTo(((WIDTH/2)-(SCALE*1.5))-SCALE*1, HEIGHT-SCALE*6);
    leftArm.closePath();

    leftArm.strokeStyle = "#f62b25";
    leftArm.fillStyle = "#f62b25";

    leftArm.stroke();
    leftArm.fill();

    //right arm
    rightArm.beginPath();
    rightArm.moveTo((WIDTH/2)+(SCALE*1.5), HEIGHT-SCALE*6);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5)), HEIGHT-SCALE*9);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, HEIGHT-SCALE*9);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, HEIGHT-SCALE*8);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*3, HEIGHT-SCALE*8);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*3, HEIGHT-SCALE*7);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*4, HEIGHT-SCALE*7);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*4, HEIGHT-SCALE*6);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, HEIGHT-SCALE*6);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*2, HEIGHT-SCALE*5);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*1, HEIGHT-SCALE*5);
    rightArm.lineTo(((WIDTH/2)+(SCALE*1.5))+SCALE*1, HEIGHT-SCALE*6);
    rightArm.closePath();

    rightArm.strokeStyle = "#f62b25";
    rightArm.fillStyle = "#f62b25";

    rightArm.stroke();
    rightArm.fill();


    //hat
    hat.beginPath();
    hat.moveTo((WIDTH/2)-(SCALE*3.5), HEIGHT-SCALE*14);
    hat.lineTo((WIDTH/2)-(SCALE*3.5), HEIGHT-SCALE*15);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*1, HEIGHT-SCALE*15);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*1, HEIGHT-SCALE*16);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*6, HEIGHT-SCALE*16);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*6, HEIGHT-SCALE*15);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*9, HEIGHT-SCALE*15);
    hat.lineTo((WIDTH/2)-(SCALE*3.5)+SCALE*9, HEIGHT-SCALE*14);
    hat.closePath();

    hat.strokeStyle = "#f62b25";
    hat.fillStyle = "#f62b25";

    hat.stroke();
    hat.fill();

    //head
    head.beginPath();
    head.moveTo((WIDTH/2)-(SCALE*2.5), HEIGHT-SCALE*9);
    head.lineTo((WIDTH/2)-(SCALE*2.5), HEIGHT-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE, HEIGHT-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE, HEIGHT-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*2, HEIGHT-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*2, HEIGHT-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*1, HEIGHT-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*1, HEIGHT-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*2, HEIGHT-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*2, HEIGHT-SCALE*14);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*3, HEIGHT-SCALE*14);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*3, HEIGHT-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*4, HEIGHT-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*4, HEIGHT-SCALE*14);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, HEIGHT-SCALE*14);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, HEIGHT-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*7, HEIGHT-SCALE*13);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*7, HEIGHT-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*8, HEIGHT-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*8, HEIGHT-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, HEIGHT-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, HEIGHT-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*4, HEIGHT-SCALE*12);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*4, HEIGHT-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*3, HEIGHT-SCALE*11);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*3, HEIGHT-SCALE*10);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, HEIGHT-SCALE*10);
    head.lineTo((WIDTH/2)-(SCALE*2.5)+SCALE*5, HEIGHT-SCALE*9);
    head.closePath();

    head.strokeStyle = "#fcc376";
    head.fillStyle = "#fcc376";

    head.stroke();
    head.fill();

    //eye
    eye.beginPath();
    eye.moveTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*12);
    eye.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE, HEIGHT-SCALE*12);
    eye.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE, HEIGHT-SCALE*14);
    eye.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*14);

    eye.closePath();

    eye.strokeStyle = "#000000";
    eye.fillStyle = "#000000";

    eye.stroke();
    eye.fill();

    //hair
    hair.beginPath();
    hair.moveTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*11);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, HEIGHT-SCALE*11);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, HEIGHT-SCALE*13);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*4, HEIGHT-SCALE*13);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*4, HEIGHT-SCALE*10);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, HEIGHT-SCALE*10);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*2, HEIGHT-SCALE*11);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*3, HEIGHT-SCALE*11);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*3, HEIGHT-SCALE*14);
    hair.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*14);
    hair.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*13);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE, HEIGHT-SCALE*13);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE, HEIGHT-SCALE*12);
    hair.lineTo((WIDTH/2)-(SCALE*0.5)-SCALE*1, HEIGHT-SCALE*12);
    hair.lineTo((WIDTH/2)-(SCALE*0.5), HEIGHT-SCALE*12);

    hair.moveTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*10);
    hair.lineTo((WIDTH/2)+(SCALE*0.5), HEIGHT-SCALE*11);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*1, HEIGHT-SCALE*11);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*1, HEIGHT-SCALE*12);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*2, HEIGHT-SCALE*12);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*2, HEIGHT-SCALE*11);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*4, HEIGHT-SCALE*11);
    hair.lineTo((WIDTH/2)+(SCALE*0.5)+SCALE*4, HEIGHT-SCALE*10);
    hair.closePath();

    hair.strokeStyle = "#7e3f14";
    hair.fillStyle = "#7e3f14";

    hair.stroke();
    hair.fill();

    //left hand
    leftHand.beginPath();
    leftHand.moveTo((WIDTH/2)-(SCALE*2.5), HEIGHT-SCALE*4);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5), HEIGHT-SCALE*5);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*1, HEIGHT-SCALE*5);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*1, HEIGHT-SCALE*6);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*1, HEIGHT-SCALE*6);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*3, HEIGHT-SCALE*6);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*3, HEIGHT-SCALE*3);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE*3, HEIGHT-SCALE*3);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE, HEIGHT-SCALE*3);
    leftHand.lineTo((WIDTH/2)-(SCALE*2.5)-SCALE, HEIGHT-SCALE*4);
    leftHand.closePath();

    leftHand.strokeStyle = "#fcc376";
    leftHand.fillStyle = "#fcc376";

    leftHand.stroke();
    leftHand.fill();

    //right hand
    rightHand.beginPath();
    rightHand.moveTo((WIDTH/2)+(SCALE*2.5), HEIGHT-SCALE*4);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5), HEIGHT-SCALE*5);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*1, HEIGHT-SCALE*5);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*1, HEIGHT-SCALE*6);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*1, HEIGHT-SCALE*6);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*3, HEIGHT-SCALE*6);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*3, HEIGHT-SCALE*3);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE*3, HEIGHT-SCALE*3);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE, HEIGHT-SCALE*3);
    rightHand.lineTo((WIDTH/2)+(SCALE*2.5)+SCALE, HEIGHT-SCALE*4);
    rightHand.closePath();

    rightHand.strokeStyle = "#fcc376";
    rightHand.fillStyle = "#fcc376";

    rightHand.stroke();
    rightHand.fill();

    legs.globalAlpha = transparency;
    cover.globalAlpha = transparency;
    buttonLeft.globalAlpha = transparency;
    buttonRight.globalAlpha = transparency;
    leftArm.globalAlpha = transparency;
    rightArm.globalAlpha = transparency;
    neck.globalAlpha = transparency;
    hat.globalAlpha = transparency;
    hair.globalAlpha = transparency;
    head.globalAlpha = transparency;
}



