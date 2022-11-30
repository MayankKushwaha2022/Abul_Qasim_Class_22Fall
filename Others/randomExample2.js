const songs = [
    "Blondie - Heart of Glass",
    "Eddie Murphy - Party all the time",
    "The Dubliners - Rocky Road to Dublin",
  ];
  
  const randomSong = () => {
    var randomIndex = Math.floor(Math.random() * songs.length);
    console.log(songs[randomIndex]);
  };
  
  const playSong = () => {
    var count = 0;
    while (count < 10) {
      randomSong();
      count++;
    }
  };  

  function myfunc(x,y){
    return(x+y);
  }

  console.log(myfunc(2,myfunc(5,-2)));