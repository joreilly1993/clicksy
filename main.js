const section = document.querySelector('section');
const btn1 = document.querySelector('#btn1');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const heading = document.querySelector('#heading');
let btn1Interval;
let btn2Interval;
let btn3Interval;

function stopBtn1(){
    clearInterval(btn1Interval);
};

function stopBtn2(){
    clearInterval(btn2Interval);
};

function stopBtn3(){
    clearInterval(btn3Interval);
};

let score = 0;
let level = 1;

heading.classList.add('heading');
heading.align = 'center';
let pHeading = document.createElement('p');
pHeading.textContent = `Level: ${level} Score: ${score}`;
heading.appendChild(pHeading);


    window.onload = function() {
        btn1Interval = setInterval(moveButton1, 2000);
        btn1.classList.add('button1');
    };

    function moveButton1(){
        const height = Math.floor(Math.random() * window.innerHeight);
        const width = Math.floor(Math.random() * window.innerWidth);
        btn1.style.left = `${width}px`;
        btn1.style.top = `${height}px`;
    };
    function moveButton2(){
        const height = Math.floor(Math.random()* window.innerHeight);
        const width = Math.floor(Math.random()* window.innerWidth);
        btn2.style.left = `${width}px`;
        btn2.style.top = `${height}px`;
    };
    function moveButton3(){
        const height = Math.floor(Math.random()* window.innerHeight);
        const width = Math.floor(Math.random()* window.innerWidth);
        btn3.style.left = `${width}px`;
        btn3.style.top = `${height}px`;
    };

    


    
        btn1.addEventListener('click', function(){
            if(level === 1){
            btn1.classList.add('clicked');
                score += 100;
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                levelTwo();
                moveButton1();
            } else if (level === 2){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = 'X';
                areButtonsClicked();
                levelThree();
                
            } else if(level === 3){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = 'XX';
                areButtonsClicked();
            } else if(level === 4){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = 'XXX';
                areButtonsClicked();
            } else if(level === 5){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = 'XXXX';
                areButtonsClicked();
            } else if(level === 6){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = 'XXXXX';
                areButtonsClicked();
            } else if(level === 7){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = '7';
                areButtonsClicked();
            } else if(level === 8){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = '8';
                areButtonsClicked();
            } else if(level === 9){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = '9';
                areButtonsClicked();
            } else if(level === 10){
                btn1.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn1.innerText = '10';
                areButtonsClicked();
            };
            });

        btn2.addEventListener('click', function(){
            if(level === 2){
                btn2.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn2.innerText = 'X';
                    areButtonsClicked();
                    // levelThree();
            } else if(level === 3){
                    btn2.classList.add('clicked');
                    score += 100;
                    pHeading.textContent = `Level: ${level} Score: ${score}`;
                    btn2.innerText = 'XX';
                    areButtonsClicked();
            } else if(level === 4){
                btn2.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn2.innerText = 'XXX';
                areButtonsClicked();
            } else if(level === 5){
                btn2.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn2.innerText = 'XXXX';
                areButtonsClicked();
            } else if(level === 6){
                btn2.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn2.innerText = 'XXXXX';
                areButtonsClicked();
            } else if(level === 7){
                btn2.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn2.innerText = '7';
                areButtonsClicked();
            } else if(level === 8){
                btn2.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn2.innerText = '8';
                areButtonsClicked();
            } else if(level === 9){
                btn2.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn2.innerText = '9';
                areButtonsClicked();
            } else if(level === 10){
                btn2.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn2.innerText = '10';
                areButtonsClicked();
            };

        });

        btn3.addEventListener('click', function(){
            if (level === 3){
                btn3.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn3.innerText = 'XX';
                areButtonsClicked();
            } else if(level === 5){
                btn3.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn3.innerText = 'XXXX';
                areButtonsClicked();
            } else if(level === 7){
                btn3.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn3.innerText = '7';
                areButtonsClicked();
            } else if (level === 9){
                btn3.classList.add('clicked');
                score += 100;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                btn3.innerText = '9';
                areButtonsClicked();
            };
        });


        function areButtonsClicked(){
            //check to go from level two to level three
            if(btn1.innerText === 'X' && btn2.innerText === 'X'){
                    level += 1;
                    pHeading.textContent = `Level: ${level} Score: ${score}`;
                    levelThree();
            } //check to go from level three to level four
            else if(btn1.innerText === 'XX' && btn2.innerText === 'XX' && btn3.innerText === 'XX'){
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                levelFour();
            } else if(btn1.innerText === 'XXX' && btn2.innerText === 'XXX'){
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                levelFive();
            } else if(btn1.innerText === 'XXXX' && btn2.innerText === 'XXXX' && btn3.innerText === 'XXXX'){
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                clearInterval(btn1Interval);
                levelSix();
            } else if (btn1.innerText === 'XXXXX' && btn2.innerText === 'XXXXX'){
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                levelSeven();
            } else if(btn1.innerText === '7' && btn2.innerText === '7' && btn3.innerText === '7'){
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                levelEight();
            } else if(btn1.innerText === '8' && btn2.innerText === '8'){
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                levelNine();
            } else if(btn1.innerText === '9' && btn2.innerText === '9' && btn3.innerText === '9'){
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                levelTen();
            } else if(btn1.innerText === '10' && btn2.innerText === '10'){
                level += 1;
                pHeading.textContent = `Level: ${level} Score: ${score}`;
                levelEleven();
            };
            
        };
        

    
        function levelTwo(){
        if (level === 2){
        btn1.classList.remove('clicked');btn1.innerText = '';
        btn2.classList.add('button1');
        section.appendChild(btn2);
        stopBtn1();
        btn1Interval = setInterval(moveButton1, 1500);
        btn2Interval = setInterval(moveButton2, 1500);
        };
    };

         function levelThree(){
             if(level === 3){
                 btn1.classList.remove('clicked');
                 btn1.classList.add('button2');
                 btn2.classList.remove('clicked');
                 btn2.classList.add('button2');
                 btn1.innerText = '';
                 btn2.innerText = '';
                 btn3.classList.add('button3');
                 section.appendChild(btn3);
                 stopBtn1();
                 stopBtn2();
                 btn1Interval = setInterval(moveButton1, 1300);
                 btn2Interval = setInterval(moveButton2, 1300);
                 btn3Interval = setInterval(moveButton3,1250);
             };
         };

         function levelFour(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button3');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button3');
            btn2.innerText = '';
            stopBtn1();
            stopBtn2();
            stopBtn3();
            btn1Interval = setInterval(moveButton1, 1250);
            btn2Interval = setInterval(moveButton2, 1250);
         };

         function levelFive(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button3');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button3');
            btn2.innerText = '';
            btn3.classList.remove('clicked');
            btn3.classList.add('button4');
            btn3.innerText = '';
            stopBtn1();
            stopBtn2();
            stopBtn3();
            btn1Interval = setInterval(moveButton1, 1250);
            btn2Interval = setInterval(moveButton2, 1250);
            btn3Interval = setInterval(moveButton3, 1100);
         };

         function levelSix(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button4');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button4');
            btn2.innerText = '';
            stopBtn1();
            stopBtn2();
            stopBtn3();
            btn1Interval = setInterval(moveButton1, 1100);
            btn2Interval = setInterval(moveButton2, 1100);
         };

         function levelSeven(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button4');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button4');
            btn2.innerText = '';
            btn3.classList.remove('clicked','button3', 'button4');
            btn3.classList.add('button5');
            btn3.innerText = '';
            stopBtn1();
            stopBtn2();
            stopBtn3();
            btn1Interval = setInterval(moveButton1, 1100)
            btn2Interval = setInterval(moveButton2, 1100)
            btn3Interval = setInterval(moveButton3, 975)
         }

         function levelEight(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button5');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button5');
            btn2.innerText = '';
            stopBtn1();
            stopBtn2();
            stopBtn3();
            btn1Interval = setInterval(moveButton1, 975);
            btn2Interval = setInterval(moveButton2, 975);
         }

         function levelNine(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button5');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button5');
            btn2.innerText = '';
            btn3.classList.remove('clicked','button3', 'button4');
            btn3.classList.add('button6');
            btn3.innerText = '';
            stopBtn1();
            stopBtn2();
            stopBtn3();
            btn1Interval = setInterval(moveButton1, 975);
            btn2Interval = setInterval(moveButton2, 975);
            btn3Interval = setInterval(moveButton3, 950);
         }

         function levelTen(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button6');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button6');
            btn2.innerText = '';
            stopBtn1();
            stopBtn2();
            stopBtn3();
            btn1Interval = setInterval(moveButton1, 950)
            btn2Interval = setInterval(moveButton2, 950)
         }

         function levelEleven(){

         }
         //Remove additonal redundant classes in each level function EX.btn3.classList.remove('clicked','button3', 'button4');

         //change areButtonsClicked function to check for innerText to be x1, x2, x3 etc, or something that makes more sense like current level instead of XXX, update in button event listeners as well

         //create a couple functions w parameters to clean up the code some in the event listeners and level functions


    