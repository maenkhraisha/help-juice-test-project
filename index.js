const inputEle = document.getElementById('createDom');
const resultEle = document.querySelector('.result');
const dropListEle = document.querySelector('.dropdown-list');



/* clear the content and rest to initial state*/
const clear = () =>{
    while (dropListEle.firstChild) {
        dropListEle.removeChild(dropListEle.firstChild);
        }

    inputEle.value = '';
    inputEle.placeholder = 'Type / for blocks, @ to link docs or people';
}

/* escape event and reset everything to the initial state */
document.addEventListener('keydown',function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        clear();
   }
});

/* create header according to the text input in the text field */
inputEle.addEventListener('keydown', (event) => {
  if (inputEle.placeholder == 'Heading 1') {
    if (event.key === 'Enter') {
        event.preventDefault();
        const divEle = document.createElement('div');
        divEle.classList.add('header-container')
        const newHeader = document.createElement('h1');

        // add delete icon for header
        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('delete-icon');        
        deleteIcon.addEventListener('click',()=>{
            divEle.remove();
        })

        deleteIcon.innerHTML =  '&#x2716';        
        newHeader.innerHTML = event.target.value;
        divEle.appendChild(newHeader);
        divEle.appendChild(deleteIcon);
        resultEle.appendChild(divEle);
    
        clear();
    }
  }
});

/* filter the list of items according to the input text */
inputEle.addEventListener('input', (e) => {
  let filtered = [];
  
  if (e.target.value == '/1') {
    dropListEle.style.display = 'block';
    filtered = values.filter(function (str) {
      return str.includes('1');
    });
    filtered.forEach((item) => {
      createListItem(item);
    });
  }
});


/* create list element according to the input text */
const createListItem = (item) => {
    
  const liEle = document.createElement('li');  
  liEle.innerHTML = item;
  
  liEle.addEventListener('click', (e) => {    
      dropListEle.style.display = 'none';
      inputEle.value = '';
      inputEle.placeholder = e.target.innerHTML;
      inputEle.focus();    
  });
  dropListEle.appendChild(liEle);
};

const values = ['Heading 1', 'expandable Heading 1', 'Paragraph', 'Section'];
