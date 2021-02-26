async function iniciarPIP(){
    const video = document.querySelector('#meu-video');
    await video.requestPictureInPicture();
}
