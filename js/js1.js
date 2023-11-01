
let input = document.getElementById("input");
let search = document.querySelector(".search i");
let body = document.getElementsByTagName("body")



var sliderImg = Array.from(document.querySelectorAll('.slider img '));//get all photos
console.log(sliderImg);
var imgCount = sliderImg.length;//= 3
var firstSlide = 1;
var pre = document.getElementById('pre');
var nex = document.getElementById('nex');



//for change the photo in web
function change(){
    if(search.id ==="1"){
        input.style.opacity="1";
        input.focus();
        search.id = "0";
    }else{
        input.style.opacity="0";
        search.id = "1";
    }
}

//for hide the photo
function hide(){
    if(search.id === "0"){
        input.style.opacity="0";
        search.id = "1";
        
    }
}

//change the photo onclick
nex.onclick = nextSlide;
pre.onclick = preSlide;

var makeUL = document.createElement('ul');//creat ul
makeUL.setAttribute('id','newUL');//<ul id='newUL'>
for(var i = 1;i<=imgCount;i++){
    var makeLI = document.createElement('li');
    makeLI.setAttribute('data-index',i);
    makeLI.appendChild(document.createTextNode(''));
    makeUL.appendChild(makeLI);

}

document.getElementById('ind').appendChild(makeUL);



var theNewUL=document.getElementById('newUL');


var TheLIItem = Array.from(document.querySelectorAll('#newUL li'));

for(i=0;i<TheLIItem.length;i++){
       TheLIItem[i].onclick = function(){
              firstSlide = parseInt(this.getAttribute('data-index'));
              check();
              
       }
}



check();
//to display the next photo
function nextSlide(){
       if(nex.classList.contains('disabled')){
          firstSlide=1;
          check();
       }

       else{
              firstSlide++;
              check();
       }
       
}
//to display the pre photo
function preSlide(){
       if(pre.classList.contains('disabled')){
              firstSlide=imgCount;
              check();
           }
    
           else{
                  firstSlide--;
                  check();
           }
          
}
//function for wow slider 
function check(){
    
   
    removeActive(); 
   
    sliderImg[firstSlide-1].classList.add('active');


    theNewUL.children[firstSlide-1].classList.add('active');
    
    if(firstSlide == 1){
           pre.classList.add('disabled');
    }
    else{
           pre.classList.remove('disabled');
    }
    
    if(firstSlide == imgCount){
           nex.classList.add('disabled');
    }
    else{
           nex.classList.remove('disabled'); 
    }
    
}


function removeActive(){
    sliderImg.forEach(function(img){
     img.classList.remove('active');
    });
    TheLIItem.forEach(function(items){
     items.classList.remove('active');
    });
}

setInterval(nextSlide,5000);