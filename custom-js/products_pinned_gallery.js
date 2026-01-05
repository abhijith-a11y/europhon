 
// document.addEventListener("DOMContentLoaded", function () {

//   // Check if GSAP and ScrollTrigger are loaded
//   if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
//     console.warn('ProductsPinnedGallery: GSAP or ScrollTrigger not loaded');
//     return;
//   }

//   gsap.registerPlugin(ScrollTrigger);

//   const sections = gsap.utils.toArray(".divider-main .dividers-banner");
//   const lastIndex = sections.length - 1;

//   sections.forEach((section, index) => {
//     // Skip pinning the last card - let it scroll normally
//     if (index === lastIndex) {
//       return;
//     }

//     const card = section.querySelector(".glass-card");

//     if (!card) {
//       console.warn('ProductsPinnedGallery: No .glass-card found in section', index);
//       return;
//     }

//     // Get the next section to determine when pinning should end
//     const nextSection = sections[index + 1];
    
//     ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       end: nextSection ? () => {
//         // End pinning when next section reaches the top
//         // Use the height of the current section as the pin duration
//         return `+=${section.offsetHeight}`;
//       } : "+=100%",
//       pin: true,
//       pinSpacing: false,
//       scrub: true,
//       invalidateOnRefresh: true,
//       onEnter: () => {
//         // When entering pin zone, set card to fixed position
//         const cardRect = card.getBoundingClientRect();
//         const cardWidth = cardRect.width;
//         const cardHeight = cardRect.height;
//         const centerTop = (window.innerHeight - cardHeight) / 2;
        
//         gsap.set(card, {
//           position: "fixed",
//           top: centerTop + "px",
//           left: cardRect.left + "px",
//           width: cardWidth + "px",
//           zIndex: 1000 - index
//         });
//       },
//       onLeave: () => {
//         // When leaving, reset card position to relative
//         gsap.set(card, { 
//           position: "relative", 
//           top: "auto", 
//           left: "auto", 
//           width: "auto",
//           zIndex: "auto"
//         });
//       },
//       onEnterBack: () => {
//         // When scrolling back, set to fixed again
//         const cardRect = card.getBoundingClientRect();
//         const cardWidth = cardRect.width;
//         const cardHeight = cardRect.height;
//         const centerTop = (window.innerHeight - cardHeight) / 2;
        
//         gsap.set(card, {
//           position: "fixed",
//           top: centerTop + "px",
//           left: cardRect.left + "px",
//           width: cardWidth + "px",
//           zIndex: 1000 - index
//         });
//       }
//     });

//   });

//   // Refresh ScrollTrigger after initialization
//   ScrollTrigger.refresh();

// });
 