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