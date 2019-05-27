const items = document.querySelectorAll('.featuresAside__items');
const content = document.querySelectorAll('.NoactiveItems');


for(let i=0; i<items.length; i++){
    
    items[i].addEventListener('click', addclass);
    
    function addclass(){
        for(number = 0; number < items.length; number++){
        items[number].classList.remove('active-items');
        content[number].classList.remove('activeItems');
    }
        items[i].classList.add('active-items');
        content[i].classList.add('activeItems');
    }
}
