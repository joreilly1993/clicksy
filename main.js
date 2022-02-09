const section = document.querySelector('section');
const btn1 = document.querySelector('#btn1');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const heading = document.querySelector('#heading');
let score = 0;
let level = 1;

heading.classList.add('heading');
heading.align = 'center';
let pHeading = document.createElement('p');
pHeading.textContent = `Level: ${level} Score: ${score}`;
heading.appendChild(pHeading);


    window.onload=function() {
        setInterval(moveButton1, 2000);
        btn1.classList.add('button1');
    };

    function moveButton1(){
        const height = Math.floor(Math.random() * window.innerHeight);
        const width = Math.floor(Math.random()* window.innerWidth);
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
                levelSix();
            };
            
        };
        

    
        function levelTwo(){
        if (level === 2){
        btn1.classList.remove('clicked');btn1.innerText = '';
        btn2.classList.add('button1');
        section.appendChild(btn2);
        setInterval(moveButton2, 2000);
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
                 setInterval(moveButton1, 1000);
                 setInterval(moveButton2, 1000);
                 setInterval(moveButton3,800);
                 btn3.classList.add('button3');
                 section.appendChild(btn3);
             };
         };

         function levelFour(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button3');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button3');
            btn2.innerText = '';
            setInterval(moveButton1, 800);
            setInterval(moveButton2, 800);
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
            setInterval(moveButton3, 1000);
         };

         function levelSix(){
            btn1.classList.remove('clicked');
            btn1.classList.add('button4');
            btn1.innerText = '';
            btn2.classList.remove('clicked');
            btn2.classList.add('button4');
            btn2.innerText = '';
         };


    