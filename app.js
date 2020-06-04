document.querySelector('#start').addEventListener('click', function(e){
  navigator.mediaDevices.getUserMedia({  audio: true, video: true })
         .then(function (stream) {
           let emitterVideo = document.querySelector('#emitter-video')
         emitterVideo.src = windows.URL.createObjectURL(stream)
         emitterVideo.play()
                       //Display the video stream in the video object
          })
})
