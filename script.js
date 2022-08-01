//declarations 
wrapper = document.querySelector('#wrapper');
records = document.querySelector('.records');
sections = document.querySelectorAll('section');
header = document.querySelector('header');
hide = document.querySelectorAll('.dropdown');
aside = document.querySelector('aside');

//new idea, I want to let the user know which button is currently toggled on
//And change the button to be clickeds text content to the text content of the active button
const buttonToBeClicked = document.querySelector('.example-button');

const resetButton = document.querySelector('.reset-button');

///the text that the button is initialialized with
const initialText = buttonToBeClicked.textContent;

//th text that the button contains after being clicked
const clickedText = "You have clicked this button.";

//we hoist the event listener callback function to
//to prevent having duplicate listeners attached.
function eventListener() {
    buttonToBeClicked.textContent = clickedText;

}

function addListener() {
    buttonToBeClicked.addEventListener("click", eventListener,
        {
            passive: true,
            once: true
        });
}

//when the reset button is clicked, the example button is reset, and allowed to have its state updated again.
resetButton.addEventListener("click", () => {
    buttonToBeClicked.textContent = initialText;
    addListener();
});
addListener();


//implement a way to randomly change the background color of a given element

            
function random(number) {
    return Math.floor(Math.random() * number + 1);
}
function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol
}



//buttons

//wrapper buttons
hide_all = document.querySelector('.hide_all');
show_all_buttons = document.querySelector('.show_all_buttons');
wrapper_block = document.querySelector('.wrapper_block');
wrapper_reset = document.querySelector('.wrapper_reset');

wrapper_flex = document.querySelector('.wrapper_flex');
wrapper_inline_block = document.querySelector('.wrapper_inline_block');
wrapper_inline_flex = document.querySelector('.wrapper_inline_flex');
wrapper_contents = document.querySelector('.wrapper_contents');
wrapper_grid = document.querySelector(".wrapper_grid");

//change wrapper's background to a random color
wrapper_random_color = document.querySelector(".wrapper_random_color");
wrapper_random_color.addEventListener("click", () => {
    wrapper.style.backgroundColor = bgChange();
});


//end wrapper buttons
//records buttons
records_block = document.querySelector('.records_block');
records_flex = document.querySelector('.records_flex');
records_reset = document.querySelector('.records_reset');
records_inline_block = document.querySelector('.records_inline_block');
records_inline_flex = document.querySelector('.records_inline_flex');
records_grid = document.querySelector('.records_grid');
records_contents = document.querySelector('.records_contents');
records_random_color = document.querySelector('.records_random_color');


//end reecords buttons

//sections buttons
sections_block = document.querySelector('.sections_block');
sections_flex = document.querySelector('.sections_flex');
sections_inline_block = document.querySelector('.sections_inline_block');
sections_inline_flex = document.querySelector('.sections_inline_flex');
sections_reset = document.querySelector('.sections_reset');
sections_content = document.querySelector('.sections_content');
sections_random_color = document.querySelector('.sections_random_color');




//end sections buttons

//header buttons
header_block = document.querySelector('.header_block');
header_flex = document.querySelector('.header_flex');
header_inline_block = document.querySelector('.header_inline_block');
header_inline_flex = document.querySelector('.header_inline_flex');
header_contents = document.querySelector('.header_contents');
header_grid = document.querySelector('.header_grid');
header_random_color = document.querySelector('.header_random_color');













//drivers and controls
wrapper_block.addEventListener("click", () => {
    wrapper.style.display = 'block';
    buttonToBeClicked.textContent = `you changed ${wrapper_block.textContent}`;
    addListener();
});

wrapper_reset.addEventListener("click", () => {
    wrapper.style.display = 'grid';
});


wrapper_flex.addEventListener("click", () => {
    wrapper.style.display = 'flex';

});

wrapper_inline_block.addEventListener("click", () => {
    wrapper.style.display = 'inline-block';

});

wrapper_inline_flex.addEventListener("click", () => {
    wrapper.style.display = 'inline-flex';

});

wrapper_contents.addEventListener("click", () => {
    wrapper.style.display = 'contents';

});

wrapper_grid.addEventListener("click", () => {
    wrapper.style.display = 'grid';

});


//records controls

//begin records controls, use records with records_* (button control)
records_block.addEventListener("click", () => {
    records.style.display = 'block';
});

records_flex.addEventListener("click", () => {
    records.style.display = 'flex';
});

records_reset.addEventListener("click", () => {
    records.style.display = 'grid';
});

records_inline_block.addEventListener("click", () => {
    records.style.display = 'inline-block';
});

records_inline_flex.addEventListener("click", () => {
    records.style.display = 'inline-flex';
});

records_grid.addEventListener("click", () => {
    records.style.display = 'grid';
});

records_contents.addEventListener("click", () => {
    records.style.display = 'contents';    
});

records_random_color.addEventListener("click", () => {
    records.style.backgroundColor = bgChange();

});


//sections

sections_block.addEventListener("click", () => {
    sections.forEach(element => element.style.display = 'block');
});

sections_flex.addEventListener("click", () => {
    sections.forEach(element => element.style.display = 'flex');
});

sections_inline_block.addEventListener("click", () => {
    sections.forEach(element => element.style.display = 'inline_block');

});

sections_inline_flex.addEventListener("click", () => {
    sections.forEach(element => element.style.display = 'inline-flex');
});
sections_reset.addEventListener("click", () => {
    sections.forEach(element => element.style.display = 'inline-flex');
});
sections_content.addEventListener("click", () => {
    sections.forEach(element => element.style.display = 'contents');
});

sections_random_color.addEventListener("click", () => {
    sections.forEach(element => element.style.backgroundColor = bgChange());
});
///end sections


//header drivers
const header_styles = `
display: block;
float:right;
color:white;
margin:20px;
position: sticky;
`


header_block.addEventListener("click", () => {
    header.style.cssText = header_styles;

});

const header_flex_styles = `
    display:flex;
    float:left;
    color:black;
    margin:20px;
    position: relative;
`
header_flex.addEventListener("click", () => {
    header.style.cssText = header_flex_styles;
});

header_inline_block.addEventListener("click", () => {
    header.style.display = 'inline-block';
});
header_inline_flex.addEventListener("click", () => {
    header.style.display = ' inline-flex';
});

header_contents.addEventListener("click", () => {
    header.style.display = 'contents';
});

header_grid.addEventListener("click", () => { 
    header.style.display = 'grid';
});

header_random_color.addEventListener("click", () => {
    header.style.backgroundColor = bgChange();
});


//end header drivers

//hide all

hide_all.addEventListener("click", () => {
    aside.style.display = 'none';
    wrapper.style.display = 'none';
    hide.forEach(element => element.style.display = 'none');
});

show_all_buttons.addEventListener("click", () => {
    wrapper.style.display = 'block';

    aside.style.display = 'inherit';

    hide.forEach(element => element.style.display = 'inline-block');

});