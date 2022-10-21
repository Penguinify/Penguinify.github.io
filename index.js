let aboutbutton = document.getElementById('aboutmesection');
const faqtexr = document.getElementsByClassName('faqheaders');
const faqbody = document.getElementsByClassName('faqbody');
let mask = document.getElementById('loading-mask');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function abouttransition() {
    aboutbutton.classList.add('animateleft')
    await sleep(150)
    faqtexr[0].classList.add('animateleftslide')
    await sleep(150)
    for (i in faqbody) {
        faqbody[i].classList.add('animateleftslide')
    }
}
async function backtransition() {
    mask.classList.remove('disapear')
    await sleep(0)
    mask.classList.add('disapear')
    aboutbutton.classList.remove('animateleft')
    faqtexr[0].classList.remove('animateleftslide')
    for (i in faqbody) {
        faqbody[i].classList.remove('animateleftslide')
    }
}