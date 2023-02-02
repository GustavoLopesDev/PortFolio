const icon = document.getElementById('iconMenu');



icon.addEventListener('click', Open=>{
    var menu = document.querySelector('.menuResponsivo nav ul');
    if(menu.classList.contains('OpenMenu')){
       menu.classList.remove('OpenMenu');
       document.querySelector('.iconMenu').src = 'vetores/menu-aberto (1).png';
    }else{
        menu.classList.add('OpenMenu');
        document.querySelector('.iconMenu').src = 'vetores/botao-x.png';
    } 
});