

let elementHtml = document.querySelector('html');
let theme = document.getElementById('colorTheme');
let boolTheme = false;
theme.addEventListener('click', (e) => {
    if (boolTheme == false) {
        boolTheme = true;
    } else {
        boolTheme = false
    }
    //  console.log(boolTheme);
    if(boolTheme==false){
        elementHtml.setAttribute("data-bs-theme","")
    }else{
        elementHtml.setAttribute("data-bs-theme","dark")
    }
})
