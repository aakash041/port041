let btpop=document.querySelector('.button-23');
let x='aakash'


let heading='hello,This is Aakash,Fullstake Developer.'
let desc=document.querySelector('.about-sec')


let pop=document.querySelector('.popup');
let close01=document.querySelector('.close01');
let index=1

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

   

const type_head=()=>{
    let new_heading=heading.slice(0,index)
    desc.innerText=new_heading
    index>heading.length?index=1:index++
    setTimeout(type_head,200)

}
type_head()



   

   








