const section = document.querySelector('section');
const btn1 = document.querySelector('#btn1');
const btn2 = document.createElement('button');
const heading = document.querySelector('#heading');
let score = 0;
let level = 1;

heading.classList.add('heading');
heading.align = 'center';
let pHeading = document.createElement('p');
pHeading.textContent = `Level: ${level} Score: ${score}`;
heading.appendChild(pHeading);


    window.onload=function() {
        setInterval(moveButton1, 1000);
        btn1.classList.add('button1');
    };

    function moveButton1(){
        const height = Math.floor(Math.random()* window.innerHeight);
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

    
    if(level === 1){
    btn1.addEventListener('click', function(){
            btn1.classList.add('clicked');
            btn1.innerText = 'O';
            score += 100;
            level += 1;
            pHeading.textContent = `Level: ${level} Score: ${score}`;
            roundTwo();
            moveButton1();
        });
    };

    
        function roundTwo(){
        if (level === 2){
        btn1.classList.remove('clicked');btn1.innerText = 'X';
        btn2.classList.add('button1');
        section.appendChild(btn2);
        setInterval(moveButton2, 1000);
        };
    };

    //test commit


    



    
    


    