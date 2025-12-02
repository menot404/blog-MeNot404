
document.addEventListener("DOMContentLoaded", function(){
    const mobilNavToggle = document.querySelector('body > header > div.mobil > button');
    const mainNav = document.querySelector("body > header > nav")
    const functionNavToggle = ()=>{
            mainNav.classList.toggle('nav-open')
            mobilNavToggle.classList.toggle('is-active')
            //mainNav.appendChild(headerAction);
            console.log("click test")
        }
        mobilNavToggle.addEventListener('click', functionNavToggle)
})