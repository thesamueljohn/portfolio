/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (error) => {
  error.preventDefault();

  // serviceID - templateID - /#form - publicKey
  emailjs
    .sendForm(
      "service_7sp78k5",
      "template_hv48yxp",
      "/contact.html/#contact-form",
      "k2tRZLsoCp2SLu9jW"
    )
    .then(
      () => {
        //Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 350 vh, add the shwo-scroll class to the tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //   reset: true, //Repeat Reveal Animation
});

sr.reveal(`.perfil, .contact`);
sr.reveal(`.info`, { origin: "left", delay: 800 });
sr.reveal(`.skills`, { origin: "left", delay: 1000 });
sr.reveal(`.about`, { origin: "right", delay: 1200 });
sr.reveal(`.projects__card, .services__card, .experience__card`, {
  interval: 100,
});


// Image Blur Load Effect 
document.addEventListener("DOMContentLoaded", () => {
  const blurredImageDivs = document.querySelectorAll(".blurred-img");

  blurredImageDivs.forEach(div => {
    const img = div.querySelector("img");
    
    function loaded() {
      div.classList.add("loaded");
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });
});