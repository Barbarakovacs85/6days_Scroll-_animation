const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect()

        if (boxTop.top < triggerBottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }       
    })
} 