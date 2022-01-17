const elModalOpener = document.querySelector('.modal-opener');
const elModal = document.querySelector('.modal');
const elModalDiv = document.querySelector('.modal-div');
const elModalExit = document.querySelector('.modal-exit');

elModalOpener.addEventListener( 'click', function(){
  elModal.classList.add('modal-open');
  elModalDiv.classList.add('modal-open');
});

elModalExit.addEventListener('click', function() {
  elModal.classList.add('modal-exit-active');
});