
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  const collapse = button.parentElement.nextElementSibling;
  const iconImg = button.querySelector('img');

  // Open first item by default
  if (!button.classList.contains('collapsed')) {
    collapse.style.height = collapse.scrollHeight + 'px';
    iconImg.src = "https://europhon-dev.e8demo.com/wp-content/themes/europhon/images/accord_minus.svg"; // minus icon
  }

  button.addEventListener('click', () => {
    const currentlyOpen = document.querySelector('.accordion-collapse:not([style*="height: 0"])');

    // Close any open accordion except current
    if (currentlyOpen && currentlyOpen !== collapse) {
      const openButton = currentlyOpen.previousElementSibling.querySelector('.accordion-button');
      const openIcon = openButton.querySelector('img');
      openButton.classList.add('collapsed');
      openIcon.src = "https://europhon-dev.e8demo.com/wp-content/themes/europhon/images/accord_plus.svg"; // plus icon
      currentlyOpen.style.height = currentlyOpen.scrollHeight + 'px';
      setTimeout(() => currentlyOpen.style.height = '0', 10);
    }

    if (collapse.style.height && collapse.style.height !== '0px') {
      // Collapse current
      collapse.style.height = collapse.scrollHeight + 'px'; // reset for smooth
      setTimeout(() => {
        collapse.style.height = '0';
        button.classList.add('collapsed');
        iconImg.src = "https://europhon-dev.e8demo.com/wp-content/themes/europhon/images/accord_plus.svg"; // plus icon
      }, 10);
    } else {
      // Expand current
      collapse.style.height = collapse.scrollHeight + 'px';
      button.classList.remove('collapsed');
      iconImg.src = "https://europhon-dev.e8demo.com/wp-content/themes/europhon/images/accord_minus.svg"; // minus icon
    }
  });

  // Set height to auto after transition
  collapse.addEventListener('transitionend', () => {
    if (collapse.style.height !== '0px') {
      collapse.style.height = 'auto';
    }
  });
});