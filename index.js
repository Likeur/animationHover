const boxImage=document.querySelector('.box-image');
const item=document.querySelector('.item-1');
const itemDeux=document.querySelector('.item-2');
const itemTroix=document.querySelector('.item-3');

document.querySelector('.image-2').onclick=()=>{
    boxImage.classList.add('backgrou');
    boxImage.classList.remove('backgrou-3');
    boxImage.classList.remove('backgrou-1');
    itemDeux.classList.add('active');
    itemTroix.classList.remove('active');
    item.classList.remove('active');
}
document.querySelector('.image-3').onclick=()=>{
    boxImage.classList.add('backgrou-3');
    boxImage.classList.remove('backgrou-1');
    boxImage.classList.remove('backgrou');
    itemTroix.classList.add('active');
    itemDeux.classList.remove('active');
    item.classList.remove('active');
}
document.querySelector('.image-1').onclick=()=>{
    boxImage.classList.add('backgrou-1');
    boxImage.classList.remove('backgrou');
    boxImage.classList.remove('backgrou-3');
    item.classList.add('active');
    itemDeux.classList.remove('active');
    itemTroix.classList.remove('active');
}