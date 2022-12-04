const inputEle = document.getElementById('createDom');
const resultEle = document.querySelector('.result');
const dropListEle = document.querySelector('.dropdown-list');


const createHeadElement = () => {
    inputEle.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {          
            console.log(event.target.value);
          const newHeader = document.createElement('h1');    
          newHeader.innerHTML = event.target.value;      
          resultEle.appendChild(newHeader);
        }
      });  
}


inputEle.addEventListener('input',(e)=>{  
    if (inputEle.placeholder == 'Heading 1'){
        createHeadElement();
    }
    let filtered = [];    
    if (e.target.value == '/1'){
        dropListEle.style.display = 'block';
        filtered = values.filter(function (str) { return str.includes('1'); });
        filtered.forEach(item =>{            
            createListItem(item);
        })
    }   
})





const createListItem =(item) =>{
    const liEle = document.createElement('li');
    const AnchoreEle = document.createElement('a');
    AnchoreEle.innerHTML = item;
    AnchoreEle.href = '#';
    liEle.appendChild(AnchoreEle);
    AnchoreEle.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'Heading 1'){

            dropListEle.style.display = 'none';
            inputEle.value = '';            
            inputEle.placeholder = 'Heading 1';                    
        }
    })                       
    dropListEle.appendChild(liEle);
}

const values = [
        'Heading 1',
        'expandable Heading 1',
        'Paragraph',
        'Section'
];