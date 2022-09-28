var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
};
  
var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
};
  
var data = [trace1, trace2];
  
Plotly.newPlot('myDiv', data);

let animation = anime({
    targets: 'h1',
    translateX: 250,
    borderRadius: 50,
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });    

let animation2 = anime({
    targets: '#spinner',
    loop: true,
    rotate: {
        value: 720,
        duration: 6000,
        easing: 'linear'
        }
}); 
  
let colors = ['red','pink','coral','orange','yellow','green','blue','violet'];
let x = 0;
let y = 0;
let z = 0;
let i= 0;

function changeColor(){
    document.getElementById("main").style.color = "rgb(" + x.toString() + "," + y.toString() + "," + z.toString() + ")";
    document.querySelectorAll('p').forEach(e => e.style.color = colors[i]);
    document.querySelectorAll('#spinner').forEach(e => e.style.color = colors[i]);
x+=1;
y+=3;
z+=5;
i++;
if (i >= colors.length) {
    i = 0;
    }
if (x >= 255) {
    x = 0;
    }
if (y >= 255) {
    y = 0;
    }
if (z >= 255) {
    z = 0;
    } 
}

window.setInterval(changeColor,10);
