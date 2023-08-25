let selectKey = document.querySelectorAll('button');
let buttons = document.querySelectorAll('button').length;


for (let i = 0; i < buttons; ++i) {
    
    selectKey[i].addEventListener('click', function(e) {
      
      var audio = new Audio('sounds/' + this.innerHTML +'.mp3');
      audio.play();
      console.log(this.innerHTML + ' was clicked, it is the ' + i + 'th button in the array.');
     
    })



    //---------Keyboard part------------

  document.addEventListener('keydown', function(event) {
    
    console.log("key down: ",event.key);


    var audio = new Audio('sounds/' + event.key +'.mp3');
      audio.play();
    })




}



