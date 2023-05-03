const contents = document.querySelectorAll('.content');
const scrollLine = document.querySelector('.scrollLine');

document.addEventListener('scroll', showText);


function showText() {
    const scrollPos = window.pageYOffset;
    
    if(scrollPos > 0) {
        scrollLine.style.width = window.scrollY + "px";
    }
    contents.forEach((section) => {
        const imgEl = section.querySelector('img');
        const textEl = section.querySelector('.text');

        // const scrollPos = window.pageYOffset;
        // 500px + 100 / 50
        console.log(window.scrollY);

        const textPos = imgEl.offsetTop + imgEl.offsetHeight / 50;
        console.log(scrollPos);
        if (scrollPos > textPos) {
            //ສະແດງເນື້ອຫາ
            textEl.classList.add('show-reveal');
        } else {
            //ປິດການສະແດງເນື້ອຫາ
            textEl.classList.remove('show-reveal');
        }
    });


}