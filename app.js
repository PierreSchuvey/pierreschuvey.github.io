document.querySelector('#start').addEventListener('click', function(e){
  navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
  }, function (stream){
    let emitterVideo = document.querySelector('#emitter-video')
    emitterVideo.src = windows.URL.createObjectURL(stream)
    emitterVideo.play()
  }, function(){})
})
