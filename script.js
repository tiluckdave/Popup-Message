const popups = document.querySelectorAll('.popup');
const popup = document.querySelector('.output');
const close = document.querySelector('.close');
const popMessage = document.querySelector('.message');

close.addEventListener('click', () => {
    popup.classList.add('hide');
})

for (let x = 0; x < popups.length; x++) {
    popups[ x ].addEventListener('click', function (e) {
        let outputText = this.getAttribute('data-message');
        message(outputText);
    })
}

function message(output) {
    popup.classList.remove('hide')
    popMessage.innerHTML = output;
}