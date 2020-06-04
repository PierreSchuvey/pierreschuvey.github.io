document.querySelector('#start').addEventListener('click', function(e){
  navigator.getUserMedia({
    video:true,
    audio:true
  }, function (stream){
    let emitterVideo = document.querySelector('#emitter-video')
    emitterVideo.src = windows.URL.createObjectURL(stream)
    emitterVideo.play()
  }, function(){})
})
