let selectKey = document.querySelectorAll('button');

selectKey[0].addEventListener('click', function() {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    
  });
  selectKey[1].addEventListener('click', function() {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    
  });
  selectKey[2].addEventListener('click', function() {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    
  });
  selectKey[3].addEventListener('click', function() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    
  });
  selectKey[4].addEventListener('click', function() {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    
  });
  selectKey[5].addEventListener('click', function() {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    
  });
  selectKey[6].addEventListener('click', function() {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    
  });



  //--keyboard part------------

  document.addEventListener('keydown', function(event) {
    // event.key contains the key that was pressed
    console.log("key down: ",event.key);

    // You can also check for specific keys
    if (event.key === 'l') {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        selectKey[6].classList.toggle("event")
        
    }
    if (event.key === 'k') {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
     selectKey[5].classList.toggle("event")
    }
    if (event.key === 'j') {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        selectKey[4].classList.toggle("event")
    }
    
    if (event.key === 'd') {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        selectKey[3].classList.toggle("event")
    }
    if (event.key === 's') {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        selectKey[2].classList.toggle("event")
        
    }
    if (event.key === 'w') {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        selectKey[1].classList.toggle("event")
        
    }
    if (event.key === 'a') {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        selectKey[0].classList.toggle("event")
    }


});