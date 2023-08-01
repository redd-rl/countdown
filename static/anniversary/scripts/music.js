try {
    var audio = document.getElementById("bgmusic");
    audio.volume = 0.2;
    var hasInit = false;
    function playMusic()
    {
       if(!hasInit)
       {
           hasInit = true;
           audio.play();
       }
    }
 } catch (error) {
     console.log("error lol")
 }