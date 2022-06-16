let tl = gsap.timeline({

  scrollTrigger: {
    trigger: "#sec02",
    pin:true,
    start: "center center",
    end: "+=150%",
    scrub: 1,
   
  },
  defaults:{duration:1, ease:'none'}
});
// tl.from('.fromLeft',{ x:-400})
tl.to('.fromLeft',{width:'100%', height: '100%'})

tl.to({},{duration:0.1})// an empty tween = a little pause ...

gsap
	.timeline()
	.to(".a .img", { delay: 0.8 })
	.to(".a .img", {
		y: -50,
		stagger: 0.1
	})
	.to(".a .img", {
		y: 0,
		stagger: 0.1
	});

function multiImageMove(selector) {
	//move many
	//everything inside the .shuttlecontainer will move downwards.
	$(selector + ".shuttleContainer").each((pi, parentElement) => {
		var lastChildIndex = $(parentElement).children().length - 1;
		var parent = 
		$(parentElement).children()
			.each((i, e) => {
				gsap.to(e, {
					y: (30 * i) / lastChildIndex + "vh",

					scrollTrigger: {
						scrub: 1,
						trigger: parentElement,
						start: "top bottom",
						end: "bottom top",
						ease: "power1.inOut"
					}
				});
			});
	});
}

function parallax(selector) {
	//parallax
	//put .parallax on a container and everything inside will have parallax.
	$(selector + ".parallax > *").each((i, e) => {
		gsap.to(e, {
			y: 70,
			scrollTrigger: {
				scrub: 1,
				trigger: $(e).parent()[0],
				start: "top+100 bottom",
				end: "bottom top",
				ease: "linear"
			}
		});
	});
}

multiImageMove("");
parallax("");

gsap.to(".a .img", {
	y: function (i, t) {
		return (i / $(t).siblings().length) * 30 + "vh";
	},
	scrollTrigger: {
		scrub: 1,
		trigger: ".imageSection.a",
		start: "top+100 bottom",
		end: "bottom top",
		ease: "liniar"
		//markers:true,
	}
});
/*
gsap.to(".a .img .image",{
	y:70,
	scrollTrigger:{
		scrub:1,
		trigger:".imageSection.a",
		start:"top bottom",
		end:"bottom top",
		ease:"liniar",
	}
});

gsap.to(".b .img",{
	y:function(i,t){
		return (i/$(t).siblings().length*30)+"vh";
	},
	scrollTrigger:{
		scrub:1,
		trigger:".imageSection.b",
		start:"top bottom",
		end:"bottom top",
		//ease:"liniar",
	}
});
gsap.to(".b .img .image",{
	y:70,
	scrollTrigger:{
		scrub:1,
		trigger:".imageSection.b",
		start:"top bottom",
		end:"bottom top",
		ease:"liniar",
	}
});*/

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
	  duration: 1.5, 
	  x: 0,
	  y: 0, 
	  autoAlpha: 1, 
	  ease: "expo", 
	  overwrite: "auto",
	  stagger: 0.1
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
  

  var mybutton = document.getElementById('scrollTrigger');
  var navbar = document.getElementById('navbar-example2');
  
  window.onscroll = function () {
	  scrollFunction();
  };
  
  function scrollFunction() {
	  if (
		  document.body.scrollTop > 20 ||
		  document.documentElement.scrollTop > 20
	  ) {
		  mybutton.style.display = 'block';
		  navbar.style.display = 'block';
	  } else {
		  mybutton.style.display = 'none';
		  navbar.style.display = 'none';
		  
	  }
  }
  function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
  }
  
  var acc = document.getElementsByClassName('accordion');
  var i;
  
  for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener('click', function () {
		  this.classList.toggle('active');
		  var panel = this.nextElementSibling;
		  if (panel.style.display === 'block') {
			  panel.style.display = 'none';
		  } else {
			  panel.style.display = 'block';
			  panel.scrollIntoView();
		  }
	  });
  };
  $('.alert').alert()