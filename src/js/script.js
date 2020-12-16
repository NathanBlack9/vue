var accordion = document.getElementsByClassName('contentBx');
const anchors = document.querySelectorAll('a[href*="#"]');
  
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', ()=>{
    accordion[i].classList.add('active');
  });
  accordion[i].addEventListener('dblclick', ()=>{
    accordion[i].classList.remove('active');
  });
}

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    accordion[0].classList.remove('active');
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

