function changeColor(bgColor){
    let bg= document.getElementById('bg');
    switch(bgColor){
        default:
            bg.style.backgroundColor='red';
            break;
        case 'gray':
            bg.style.backgroundColor='gray';
            break;
        case 'white':
            bg.style.backgroundColor='white';
            break;
        case 'blue':
            bg.style.backgroundColor='blue';
            break;
        case 'yellow':
            bg.style.backgroundColor='yellow';
    }
}