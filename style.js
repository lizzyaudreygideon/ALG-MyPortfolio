function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
   
}

const sidebar = document.querySelector('.sidebar');
const sidebarLinks = sidebar.querySelectorAll('a'); // Select all links inside the sidebar

sidebarLinks.forEach(link => {
  link.addEventListener('click', function() {
    hideSidebar(); // Call the hideSidebar function on click
  });
});

function hideSidebar() {
  sidebar.style.display = 'none';
}



const aboutMe = document.getElementById('aboutMe');
  const learnMoreBtn = document.getElementById('learnMoreBtn');

  learnMoreBtn.addEventListener('click', () => {
    aboutMe.classList.add('slide-in');
  });

  function hideAbout() {
    aboutMe.classList.remove('slide-in');
  }

