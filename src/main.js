/** 

let hola = [1,3,4,20,7,43,24,112 ];

let ordenar =  hola.toSorted((a,b) => a - b);

console.log(ordenar);

function contar(num){
   let numerito;
    for ( let i = 1 ; i <= num ; i ++ ){
       console.log(i)
       numerito = i;

       if (i == num /2){
          return  `llegaste a:  ${i} es la mitad bb chau!!`
           
       }
       
  }return numerito;
   
}
  

function mitad(cortar){
    let cortado = cortar / 2;
    return `llegaste a : ${cortado} es la mitad bb !!`;
}

let numero = 8;
console.log(mitad(contar(numero)));

*/

/*let lista = [1,3,4,5,6,7];

lista.forEach( (el) => console.log ( el ) );
*/

/*let somos = document.querySelector(".quienes")

somos.addEventListener ("mouseenter" ,(e) => {

     e.target.classList.toggle("quienes")
     e.target.textContent = "a";
     e.target.style.setProperty("font-size", "70px")
   
}  );
  */

let createTags = (className = "element",tag = "div", options = {} ) => {

   
   let element = document.createElement(tag);
   element.classList.add(className);
   
   

   if(options.text) element.textContent = options.text;
   if(options.html) element.setHTMLUnsafe(options.html);
   document.body.append(element)
   
   element.remove()
  
return element;

}

createTags("container","p",{text:"Hola a la muchachada"});


