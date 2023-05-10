let btpop=document.querySelector('.button-23');
let x='aakash'

let pop=document.querySelector('.popup');

let close01=document.querySelector('.close01');

if(pop.style.display='flex'){
    console.log(x)
    close01.addEventListener('click',function(){
        pop.style.display='none'
    })
}
if (pop.style.display='none'){
    console.log(x)
    btpop.addEventListener('click',function(){
        pop.style.display='flex';
})}

   

   

   
// else{
//     close01=addEventListener('click',closepop);
//     function closepop(){
//         pop.style.display='none';
//     }

// }








