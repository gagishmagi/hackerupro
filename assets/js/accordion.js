// Careers Accordion:

const accordions = document.querySelectorAll('.accordion__btn');

accordions.forEach((accordion) => {

    accordion.addEventListener('click', () => {
        const content = accordion.nextElementSibling;

        if( content.style.maxHeight ) {
            // accordion is open, need to close it.
            content.style.maxHeight = null; // or 0
        } else {
            // accordion is closed
            content.style.maxHeight = content.scrollHeight + 'px';
        }
       
    });
});