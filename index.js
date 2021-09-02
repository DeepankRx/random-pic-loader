// console.log("Random image")

let submit =document.getElementById('submit');
submit.addEventListener('click',function(){
   
let RSI = document.getElementById('RSI').checked;
let CSI = document.getElementById('CSI').checked;
console.log(RSI);
if(RSI == true){
    let div_for_btn = document.getElementById('div_for_btn');
    div_for_btn.innerHTML = `<button id="btn" >Next Image</button>`
    let btn = document.getElementById
('btn');
document.getElementById('btn').style.display = 'block';
btn.className = 'center'
btn.addEventListener('click',function(){
let body = document.getElementById('body');
i=Math.floor((Math.random() * 100) + 1);
width_of_image=Math.floor((Math.random() * 2000) + 1);
height_of_image=Math.floor((Math.random() * 2000) + 1);
body.innerHTML =`<img src="https://picsum.photos/${width_of_image}/${height_of_image}?random=${i}">`
});
addEventListener('keypress',function(e){
    if(e.key=='Enter'){
        let body = document.getElementById('body');
        i=Math.floor((Math.random() * 100) + 1);
        width_of_image=Math.floor((Math.random() * 1000) + 1);
        height_of_image=Math.floor((Math.random() * 1000) + 1);
        body.innerHTML =`<img src="https://picsum.photos/${width_of_image}/${height_of_image}?random=${i}">`
    }
})
}
else if(CSI == true){
    submit.style.display='block';
    let div_for_input = document.getElementById('div_for_input');
    div_for_input.style.display = 'block';
    let WOI = document.getElementById('WOI').value;
    let HOI = document.getElementById('HOI').value;
console.log(HOI,WOI)
if(HOI>0 && WOI>0){
let body = document.getElementById('body');
i=Math.floor((Math.random() * 100) + 1);
body.innerHTML =`<img src="https://picsum.photos/${WOI}/${HOI}?random=${i}">`
setInterval(() => {
   location.reload();
}, 5000);
}}
else{
    document.getElementById('btn').style.display = 'none';
    
}
})