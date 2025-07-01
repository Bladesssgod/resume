const cursor = document.querySelector(".cursor");
//следование за курсором
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;


    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.vertical-menu a');
  
  // Плавная прокрутка
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Подсветка активного раздела
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    menuLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section.offsetTop <= scrollPos + 100 && 
          section.offsetTop + section.offsetHeight > scrollPos + 100) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});