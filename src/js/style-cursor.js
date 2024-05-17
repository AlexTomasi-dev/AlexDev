let cursor = document.querySelector(".cursor");
let imgss =document.querySelectorAll("img"); //creo una lista Array di tutte li immagini nel dom
let videoss =document.querySelectorAll("video"); //creo una lista Array di tutte li immagini nel dom
let circle= document.querySelectorAll(".hover-circle")

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;

});


//avendo preso tutti gli elementi nel dom e creato un array 
//lo ciclo e per ogni eleemnto gli aggiungo/tolgo la classe hover
imgss.forEach((imgs) => {
    imgs.addEventListener("mouseover", function(){
        cursor.classList.add("hover");
    });
    imgs.addEventListener("mouseleave", function(){
        cursor.classList.remove("hover");
    })
});


videoss.forEach((videos) => {
    videos.addEventListener("mouseover", function(){
        cursor.classList.add("hover");
    });
    videos.addEventListener("mouseleave", function(){
        cursor.classList.remove("hover");
    })
});


circle.forEach((circles) => {
    circles.addEventListener("mouseover", function() {
        cursor.classList.add("min");
    })
    circles.addEventListener("mouseleave", function(){
        cursor.classList.remove("min");
        
    })
})



// test immagini che appaiono



