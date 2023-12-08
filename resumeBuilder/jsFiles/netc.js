const par = document.getElementById
("move");



document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.skill_two');

    const elementInView = (el, scrollOffset = 0) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        elements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});








// window.addEventListener("scroll", function()
// {
//     let offset = window.pageYOffset;
//     par.style.backgroundPositionY =  offset * -0.7 + "px";

// })

const element =  document.querySelector('.myName')
element.classList.add('wow', 'fadeInRightSmall')



const element3 =  document.querySelector('#skills')
element3.classList.add('wow', 'zoomIn')

const element4 =  document.querySelector('.skill-1')
element4.classList.add('wow', 'fadeInLeftSmall')

const element5 =  document.querySelector('#skill_two')
element5.classList.add('wow', 'zoomIn')

const element6 =  document.querySelector('#skill_three')
element6.classList.add('wow', 'fadeInRightBig')

const element7 =  document.querySelector('#skill_six')
element7.classList.add('wow', 'fadeInUp')

const element8 =  document.querySelector('#skill_five')
element8.classList.add('wow', 'zoomIn')

const element9 =  document.querySelector('#skill_four')
element9.classList.add('wow', 'fadeInLeftBig')

const element15 =  document.querySelector('#skill_seven')
element15.classList.add('wow', 'fadeInDown')

const element10 =  document.querySelector('#cert')
element10.classList.add('wow', 'zoomIn')

const element16 =  document.querySelector('#exp')
element16.classList.add('wow', 'zoomIn')

const element17 =  document.querySelector('#exp_name_1')
element17.classList.add('wow', 'fadeInLeftBig')

const element18 =  document.querySelector('#company_1')
element18.classList.add('wow', 'fadeInRightBig')

const element19 =  document.querySelector('#company_2')
element19.classList.add('wow', 'fadeInLeftBig')

const element20 =  document.querySelector('#exp_name_2')
element20.classList.add('wow', 'fadeInRightBig')

const element21 =  document.querySelector('#dem_fluence')
element21.classList.add('wow', 'fadeInUp_custom2')

const element22 =  document.querySelector('#progressive')
element22.classList.add('wow', 'fadeInUp_custom2')

const element24 =  document.querySelector('#CV')
element24.classList.add('wow', 'fadeInUp_custom2')





const element11 =  document.querySelector('#cert_one')
element11.classList.add('wow', 'fadeInLeftBig')
const element12 =  document.querySelector('#cert_two')
element12.classList.add('wow', 'fadeInRightBig')
const element13 =  document.querySelector('#cert_three')
element13.classList.add('wow', 'fadeInLeftBig')
const element14 =  document.querySelector('#cert_four')
element14.classList.add('wow', 'fadeInRightBig')


const par2 = document.getElementById
("move2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    par2.style.backgroundPositionY =  offset * 0.6 + "px";

})
const par3 = document.getElementById
("move3");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    par3.style.backgroundPositionY =  offset * -0.5 + "px";

})

const par4 = document.getElementById
("move4");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    par4.style.backgroundPositionY =  offset * -0.3 + "px";

})

const div3 = document.getElementsByClassName("intro-text");
window.addEventListener("scroll", function scrollAppear()     

{
    var introText = document.querySelector(".intro-text");
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition =  window.innerHeight/2 ;
    
    if(introPosition < screenPosition)
    {
        introText.classList.add('intro-appear')
    }
})


window.addEventListener('scroll',scrollAppear);

var typed = new Typed('.element', {
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 30
  });
