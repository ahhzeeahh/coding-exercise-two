//--- i thought to change sounds to data from the html to shorten it 1st was naming it after 'i' 0.mp4,1.mp4 ... but then saw class using 'innerHtml' so it was 2 for 1 now with the key press-------

let selectKey = document.querySelectorAll('button');
let buttons = document.querySelectorAll('button').length;


for (let i = 0; i < buttons; ++i) {
    
    selectKey[i].addEventListener('click', function() {
      
      var audio = new Audio('sounds/' + this.innerHTML +'.mp3');
      audio.play();
      console.log(this.innerHTML + ' was clicked, it is the ' + i + 'th button in the array.');
     
    })


}



    //---------Keyboard part------------

  document.addEventListener('keydown', function(event) {
    
    console.log("key down: ",event.key);


    var audio = new Audio('sounds/' + event.key +'.mp3');
      audio.play();
    })
