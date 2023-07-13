
// const input = document.getElementById('button');

// function addingEventListener() {

//     function clickAlert() {
//         alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);
// }

// addingEventListener(input);

const btn = document.getElementById('button')

function addingEventListener() {
    function clickAlert (){
        alert('I was clicked')}
    btn.addEventListener('click', clickAlert)
}

addingEventListener(btn)