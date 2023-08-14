var index=0;

show_image(index);

function show_image(i){
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
}