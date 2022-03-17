function paint(){
    //setup the canvas
    let section = document.querySelector('section');
    let canvas = document.createElement('canvas'); 
    canvas.width = '350';
    canvas.height = '350';
    section.appendChild(canvas);
    let width = canvas.width;
    let height = canvas.height;
    let context = canvas.getContext("2d");//set up a two dimensional space
    let rep = Math.round(Math.random() * 1000);
    
    //draw random circles
    //for(let i = 0; i < rep; i++){
        //reallocate the pen
        context.beginPath();//initiate the virtual pen
        /*choose a random position and radius
        let xPosition = Math.round(Math.random() * width);
        let yPosition = Math.round(Math.random() * height);
        let radius = Math.round(Math.random() * 50);*/
        //choose a random color

        //Draw the central circle
        //-set origin
        let xPosition = 0.5 * width;
        let yPosition = 0.5 * height;
        //-set radius
        let radius = 87;

        let red = Math.round(Math.random() * 256);
        let blue = Math.round(Math.random() * 256);
        let green = Math.round(Math.random() * 256);
        let transparency = 0.3;
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${transparency})`;

        //now draw the circle
        context.arc(xPosition, yPosition, radius, 0 * Math.PI, 2 * Math.PI);
        context.fill();

        //generate a number n that divides 360
        let nonDivider = true;
        let num = Math.round(Math.random() * 10);
        while(nonDivider){
            let numX = Math.round(360 / num);
            let checker = num * numX;
            if(checker == 360){
                nonDivider = false;
                if(num < 4){
                    num = 4;
                }
            }else{
                num = Math.round(Math.random() * 180);
            }
        }
        
        let angle;
        //Draw n circles
        for(let l = 0; l < num; l++){
            //set up angle
            angle = (l / num) * 2 * Math.PI;
            xPosition = radius * Math.cos(angle) + 0.5 * width;
            yPosition = radius * Math.sin(angle) + 0.5 * height;

            //draw the circle
            red = Math.round(Math.random() * 256);
            blue = Math.round(Math.random() * 256);
            green = Math.round(Math.random() * 256);
            transparency = 0.2;
            if(num > 6){
                transparency = 0.1;
            }
            context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${transparency})`;
    
            //now draw the circle
            context.arc(xPosition, yPosition, radius, 0 * Math.PI, 2 * Math.PI);
            context.fill();
    
        }
    //}
}

function play(){
    const dance = document.querySelector('section');
    const style = document.createElement('style');
    let audio = new Audio('three little birds bob marley.mp3');
    audio.currentTime = 0.65;
    audio.play();
    style.textContent = `canvas{animation: dance ${60 * 4 / 74}s infinite;}@keyframes dance {0%{transform: scale(1.5, 1.5);}12.5%{transform: scale(1, 1);}25%{transform: scale(1.5, 1.5);}37.5%{transform: scale(1, 1);}50%{transform: rotatez(180deg); box-shadow: 2vh 2vh 6vw rgb(255, 255, 255);border-radius: 50%;}62.5%{transform: rotatez(-180deg); box-shadow: 2vh 2vh 6vw rgb(255, 255, 255);border-radius: 50%;}}`;
    dance.appendChild(style);
}