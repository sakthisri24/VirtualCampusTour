let start= document.querySelector("#start");
let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = "en-US";
recognition.interinResults= true;


start.addEventListener("click",() => {
    recognition.start();
});
recognition.addEventListener("audiostart",(e) => {
      start.innerText = "Listening..."
});
recognition.addEventListener("result", (e) => {
    let text= "" ;
    let i = 0;
    while(i < e.results.length){
        text = e.results[i][0].transcript;
        i++;
    }
console.log(text);
if(text == "classroom"){
        window.location.href = "class1.html";
}else if(text == "corridor"){
        window.location.href = "corridor.html";
}else if(text == "reception"){
        window.location.href = "reception.html";
}else if(text == "entrance"){
    window.location.href = "entrance.html";
}else if(text == "open air theatre"){
    window.location.href = "ground.html";
}else if(text == "gallery"){
    window.location.href = "gallery.html";
}else if(text == "library"){
    window.location.href = "library.html";
}
  
      


})
recognition.addEventListener("audioend",(e) =>{
    start.innerText = "SPEAK";
});
