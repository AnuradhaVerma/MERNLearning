// let h1tag = document.querySelector(".h1tap");

// let imgtag= document.querySelector("img");

// imgtag.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolqzplT_uzRoFrTXCdEhXyganxs9d2D_CKQ&s")

let box = document.querySelector(".box");
//console.dir(box);

//  box.classList.add("circle");
// box.classList.remove("circle");
// box.classList.toggle("circle");

//Create Element

//let h1tag=document.createElement("h1");
// let cont =document.querySelector(".cont");
// console.dir(h1tag)

// h1tag.innerHTML="I am H1 Tag";
// console.log(h1tag);

// h1tag.classList.add("ht");

// cont.appendChild(h1tag);

// let div=document.createElement("div");

// div.classList.add("box");
// div.classList.add("circle");

// cont.appendChild(div)

let imgtag =document.querySelector("img");
let flag =true;

// Way to write callabck function

// let toggleFunction =function(){
//     if(flag == true){
//         imgtag.src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
// } else
// {
//     imgtag.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiHKeiHQbEVp0byzGMAHFgdf15XyP3PiRFg&s"

// }

// flag=!flag;
// }

imgtag.addEventListener("click", function(){
    if(flag == true){
        imgtag.src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
} else
{
    imgtag.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiHKeiHQbEVp0byzGMAHFgdf15XyP3PiRFg&s"

}

flag=!flag;
});
