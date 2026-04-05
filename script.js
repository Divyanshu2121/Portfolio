window.addEventListener("scroll", function(){
    document.querySelectorAll("section").forEach(section=>{
        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight;
        if(position < screen - 100){
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});
