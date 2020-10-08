// begins the amount
let modalAmt = 1;

// Anonimous Function for optimize the code
const select = (el)=>document.querySelector(el);
const selectAll = (el)=>document.querySelectorAll(el);

pizzaJson.map((pizza, index)=>{
    // Makes a clone of HTML Elements
    let pizzaItem = select('.models .pizza-item').cloneNode('true');
    modalAmt = 1;
    
    // Fill out the pizza's informations
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2).replace('.', ',')}`
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
    
    //Open a ask Pizza window 
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        
        // Fill the pizza's window informations
        select('.pizzaBig img').src = pizzaJson[key].img;    
        select('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        select('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        select('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace('.', ',')}`;
        select('.pizzaInfo--size.selected').classList.remove('selected'); // Remove the pizza size selction 
        selectAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
            // Keep the Big size selected
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
           size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        select('.pizzaInfo--qt').innerHTML = modalAmt;
        
        // Makes the window opens smoothly
        select('.pizzaWindowArea').style.opacity = 0;
        select('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{ 
            select('.pizzaWindowArea').style.opacity = 1;
        }, 200)    
    } )
    // Add Elements cloned into HTML
    select('.pizza-area').append(pizzaItem);
});

