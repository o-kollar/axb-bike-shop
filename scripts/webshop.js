gsap.registerPlugin(ScrollTrigger);

// Part 1
gsap.to('header', { autoAlpha: 0, 
    scrollTrigger: {
      id: 'header',
      trigger: '.scrollTriggerLogo',
      start: 'top top+=100',
      end: '+=200',
      scrub: true,
      // markers: true
    } 
});

// Part 2
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  gsap.to(section, {autoAlpha: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse',
      // markers: true
    }
  });
  
  ScrollTrigger.create({
    trigger: section,
    id: index+1,
    start: 'top center',
    end: () => `+=${section.clientHeight + 30}`,
    toggleActions: 'play reverse none reverse',
    toggleClass: {targets: section, className: "is-active"},
    // markers: true
  })
  
})

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.80, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  
  