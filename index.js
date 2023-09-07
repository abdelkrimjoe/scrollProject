let span =document.querySelectorAll(".menu span")
let hint=document.querySelectorAll(".hint")
let divAfficher=document.querySelectorAll(".container")
for(let i=0; i<span.length;i++)
 {
    span[i].addEventListener("click",()=>{
        for(let j=0; j<span.length; j++){
            span[j].classList.remove("clicked")
            span[j].style.color="black"
            hint[j].style.display="none";
        }
        span[i].classList.toggle("clicked")
        let color=span[i].getAttribute("color")
        span[i].style.color=color
        hint[i].style.background=color
        hint[i].style.display="flex";
        divAfficher[i].scrollIntoView({ behavior: "smooth" });
     })
};

window.addEventListener("scroll", function() {
    let currentDiv = null;
    const scrollPosition = window.scrollY;
    let index;
    // Parcourez les divs et vérifiez laquelle est visible
    for (let i = 0; i < divAfficher.length; i++) {
        const div = divAfficher[i];
        const divPosition = div.offsetTop;
        const divHeight = div.clientHeight;

        if (scrollPosition >= divPosition && scrollPosition < divPosition + divHeight) {
            currentDiv = div;
            index=i;
            break;
           
        }
    }
    
    // Affichez le résultat dans la console
    if (currentDiv) {
            for(let j=0; j<span.length; j++){
                span[j].classList.remove("clicked")
                span[j].style.color="black"
                hint[j].style.display="none";
            }
            span[index].classList.toggle("clicked")
            let color=span[index].getAttribute("color")
            span[index].style.color=color
            hint[index].style.background=color
            hint[index].style.display="flex";
           
        
    }
});