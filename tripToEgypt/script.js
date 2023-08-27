var index=0;

show_image(index);

function show_image(i){
    descriptions= ["We stopped in Germany on our way to Egypt.",
                   "We stayed in Alexandria by the sea.",
                   "I met my dad's father for the first time.",
                   "I spent great time with my mom's parents.",
                   "I went to the playground with my cousins.",
                   "We went to the pool together as well.",
                   "We visited the famous library of Alexandria.",
                   "We saw a real mummy in the museum.",
                   "Also, we visited St. Mark's Cathedral.",
                   "Finally, we went to Cairo airport and took our flight back."];
    index+=i;
    var images=document.getElementsByClassName("image");
    var dots=document.getElementsByClassName("dot");
    for(var y=0;y<images.length;y++){
        images[y].style.display="none";
    }
    for(y=0;y<dots.length;y++){
        dots[y].className=dots[y].className.replace(" active","");
    }
    if(index>images.length-1){
        index=0;
    }
    if(index<0){
        index=images.length-1;
    }
    images[index].style.display="block";
    dots[index].className+=" active";
    document.getElementById("description").innerText=descriptions[index];
}