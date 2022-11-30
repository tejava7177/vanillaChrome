// const title = document.getElementById("title");
// console.dir(title);

// title.innerText = "Got you!";   //javascript를 통해 title을 변경하는 방법

console.log(title);
// console.log(title.className);


const h1 = document.querySelector("div.hello:first-child h1");
// const title = document.getElementById("hello");

console.dir(h1);
// title.innerText = "Hello"



// function handleTitleClick(){
//     const currentColor = title.style.color;
//     let newColor;
//     console.log("Title was clicked!");
//     if(title.style.color === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor="blue";
//     }
//     title.style.color = newColor;
    
// }


function handleTitleClick(){
    if(h1.className === "active"){
        h1.className = "";
    }else{
        h1.className = "active";
    }
}

function handleMouseEnter(){
    title.innerText = "Mouse is Here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is Gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copy!!");
}

// //"~~" documnet 기능 이름들
h1.addEventListener("click", handleTitleClick);
// // == title.onClick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);


// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);


