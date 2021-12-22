const modalOpenBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const modalCloseBtn = document.querySelector('.close-btn')


modalOpenBtn.addEventListener('click', function(){
	modalOverlay.classList.add('open-modal')
})

modalCloseBtn.addEventListener('click', function(){
	modalOverlay.classList.remove('open-modal')
})