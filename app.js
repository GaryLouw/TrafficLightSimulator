const circles = document.querySelectorAll('.circle');
let activeLight = 0;

setInterval(changeLight, 9000);

function changeLight(){
    //debugger;
    circles[activeLight].className = 'circle';
    activeLight++;

    if(activeLight > 2){
        activeLight = 0;
    }

    const currentLight = circles[activeLight];

    currentLight.classList.add(currentLight.getAttribute('color'));
}