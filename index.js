document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Navbar color change on scroll and active class for nav items
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          document.querySelector('.navbar').classList.add('scrolled');
      } else {
          document.querySelector('.navbar').classList.remove('scrolled');
      }

      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - 60) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });

  // Download CV button
  document.getElementById('downloadCV').addEventListener('click', function(e) {
      e.preventDefault();
      Swal.fire({
          title: 'Downloading CV',
          text: 'Your CV is being prepared for download.',
          icon: 'info',
          showCancelButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
          didOpen: () => {
              Swal.showLoading();
              setTimeout(() => {
                  Swal.fire({
                      title: 'Download Complete',
                      text: 'Your CV has been downloaded successfully!',
                      icon: 'success',
                      confirmButtonText: 'OK'
                  });
                  // Here you would typically trigger the actual download
                  // window.location.href = 'path/to/your/CV.pdf';
              }, 2000);
          }
      });
  });

  // Hire Me button click handler
  document.querySelector('.btn-hire').addEventListener('click', function() {
      window.location.href = '#contact';
  });

  // Let's Talk button click handler
  document.querySelector('.btn-talk').addEventListener('click', function() {
      window.location.href = '#contact';
  });

  // Dynamic project loading
  const projects = [
      { title: 'Project 1', description: 'A web application for task management.', image: 'https://via.placeholder.com/300x200' },
      { title: 'Project 2', description: 'An e-commerce platform with real-time inventory.', image: 'https://via.placeholder.com/300x200' },
      { title: 'Project 3', description: 'A responsive portfolio website template.', image: 'https://via.placeholder.com/300x200' }
  ];

  const projectsContainer = document.getElementById('projectsContainer');
  projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'col-md-4 mb-4';
      projectElement.innerHTML = `
          <div class="card project-card">
              <img src="${project.image}" class="card-img-top" alt="${project.title}">
              <div class="card-body">
                  <h5 class="card-title">${project.title}</h5>
                  <p class="card-text">${project.description}</p>
                  <a href="#" class="btn btn-primary">Learn More</a>
              </div>
          </div>
      `;
      projectsContainer.appendChild(projectElement);
  });

  // Contact form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for your message. I will get back to you soon.',
          icon: 'success',
          confirmButtonText: 'OK'
      });
      this.reset();
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
  });
});

// Add this to your existing script.js file

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
  });
});

// Service cards hover effect
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
  });
});

// Read More button click handler
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', function() {
      // Add your read more functionality here
      console.log('Read more clicked');
  });
});

// Add this to your existing script.js

// Animate progress bars when they come into view
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.width = entry.target.getAttribute('style').split(':')[1];
          }
      });
  }, { threshold: 0.5 });

  // Observe all progress bars
  document.querySelectorAll('.progress-bar').forEach(bar => {
      bar.style.width = '0';
      observer.observe(bar);
  });
});

// Skill cards hover effect
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Show success message
  alert('Message sent successfully!');
  
  // Reset form
  this.reset();
});

// Form input animation
document.querySelectorAll('.form-control').forEach(input => {
  input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', function() {
      if (!this.value) {
          this.parentElement.classList.remove('focused');
      }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

