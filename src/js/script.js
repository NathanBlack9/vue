var accordion = document.getElementsByClassName('contentBx');
  
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', ()=>{
    accordion[i].classList.add('active');
  });
  accordion[i].addEventListener('dblclick', ()=>{
    accordion[i].classList.remove('active');
  });
}


