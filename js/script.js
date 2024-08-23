let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}




// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});


function storeFormData(event) {
   // event.preventDefault(); // Prevent form from submitting and redirecting
   
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('pass').value;
   const confirmPassword = document.getElementById('c_pass').value;

   // Basic validation to check if passwords match
   if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
   }

   // Store form data in localStorage
   localStorage.setItem('name', name);
   localStorage.setItem('email', email);
   localStorage.setItem('password', password);

   // Show the popup
   const popup = document.getElementById("popup");
   popup.classList.add("show");

   // Hide the popup after 3 seconds and perform an action
   setTimeout(function(){
      popup.classList.remove("show");
      // Add an action here, such as redirecting to another page
      // window.location.href = "thankyou.html"; // Example: Redirect to another page
   }, 3000);

   event.target.reset(); // Clear the form
}
