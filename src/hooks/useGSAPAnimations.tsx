import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Smooth scroll
    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out"
    });

    // Hero animations
    gsap.fromTo('.hero-content', {
      opacity: 0,
      y: 100,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3
    });

    gsap.fromTo('.hero-stats', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1,
      stagger: 0.2
    });

    // Section animations
    gsap.utils.toArray('.animate-section').forEach((section: any) => {
      gsap.fromTo(section, {
        opacity: 0,
        y: 80
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Service cards stagger animation
    gsap.utils.toArray('.service-card').forEach((card: any, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 60,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%"
        }
      });
    });

    // Why choose us cards
    gsap.utils.toArray('.why-item').forEach((item: any, index) => {
      gsap.fromTo(item, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        scale: 0.9
      }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 85%"
        }
      });
    });

    // Floating globe animation
    gsap.utils.toArray('.floating-globe').forEach((globe: any) => {
      gsap.to(globe, {
        y: "20px",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      gsap.to(globe, {
        rotationY: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      });
    });

    // Parallax effects
    gsap.utils.toArray('.parallax-element').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Text reveal animations
    gsap.utils.toArray('.text-reveal').forEach((text: any) => {
      gsap.fromTo(text, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%"
        }
      });
    });

    // Button hover animations
    gsap.utils.toArray('.eco-button-primary, .eco-button-secondary').forEach((button: any) => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(button, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });

      button.addEventListener('mouseenter', () => tl.play());
      button.addEventListener('mouseleave', () => tl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return {
    animateIn: (element: string | Element, delay = 0) => {
      gsap.fromTo(element, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay
      });
    },
    
    animateOut: (element: string | Element) => {
      gsap.to(element, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  };
};