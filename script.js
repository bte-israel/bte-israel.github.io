function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var copy_text_val = document.querySelector('.copy_text');

function Copy() {
  copy_text_val.select();
  document.execCommand("copy");
  console.log(copy_text_val.value);
} 

var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    copy_text_val.value = "bte-il.aternos.me"
    i++;                    //  increment the counter
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 1000)
}

myLoop();

function play_now() {
    window.location.replace("play_bte-israel.html")
}