   // Get all tab buttons
        const styleTab = document.getElementById('styleTab');
        const colorTab = document.getElementById('colorTab');

        // Get preview containers
        const stylePreview = document.getElementById('stylePreview');
        const colorPreview = document.getElementById('colorPreview');

        // Get options grids
        const styleOptions = document.getElementById('styleOptions');
        const colorOptions = document.getElementById('colorOptions');

        // Get the SVG in the preview
        const previewSvg = stylePreview.querySelector('.hexagon-svg');

        // Function to switch to style tab
        function showStyleTab() {
            // Update tab buttons
            styleTab.classList.add('active');
            colorTab.classList.remove('active');
            
            // Update preview
            stylePreview.classList.add('active');
            colorPreview.classList.remove('active');
            
            // Update options grid
            styleOptions.classList.add('active');
            colorOptions.classList.remove('active');
        }

        // Function to switch to color tab
        function showColorTab() {
            // Update tab buttons
            colorTab.classList.add('active');
            styleTab.classList.remove('active');
            
            // Update preview
            colorPreview.classList.add('active');
            stylePreview.classList.remove('active');
            
            // Update options grid
            colorOptions.classList.add('active');
            styleOptions.classList.remove('active');
        }

        // Add event listeners
        styleTab.addEventListener('click', showStyleTab);
        colorTab.addEventListener('click', showColorTab);

        // Handle style option clicks - change the preview SVG
        const styleButtons = styleOptions.querySelectorAll('.option-btn');
        styleButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove selected class from all style buttons
                styleButtons.forEach(btn => btn.classList.remove('selected'));
                
                // Add selected class to clicked button
                this.classList.add('selected');
                
                // Get the SVG from the clicked button
                const svgContent = this.querySelector('svg').cloneNode(true);
                
                // Update the preview SVG
                previewSvg.innerHTML = svgContent.innerHTML;
                previewSvg.setAttribute('viewBox', svgContent.getAttribute('viewBox'));
            });
        });

        // Handle color option clicks - change the preview background
        const colorButtons = colorOptions.querySelectorAll('.option-btn');
        const colorPreviewImage = document.getElementById('colorPreviewImage');
        
        // Define different images for each color
        const colorImages = {
            '#C17A58': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop', // Canyon - warm living room
            '#A6948B': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop', // Terrace - neutral bedroom
            '#B5A572': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop', // Highland - earthy dining
            '#5F6A6A': 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop', // Caspian - grey modern
            '#8B8589': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', // Sage - purple accent
            '#5C2C2E': 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop', // Maroon - dark elegant
            '#E6B547': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop', // Senado - yellow bright
            '#C9A960': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop', // Beehive - warm gold
            '#867C6F': 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&h=600&fit=crop', // Parthenon - beige minimal
            '#D5C4B8': 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop', // Opera - light cream
            '#9AAF7E': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop', // Acros - sage green
            '#2F3D1C': 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop', // Gherkin - dark green
            '#2C5145': 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&h=600&fit=crop', // Green - forest green
            '#99C4C4': 'https://images.unsplash.com/photo-1600566752229-250ed79470d7?w=800&h=600&fit=crop', // Teal - aqua blue
            '#3D4E5C': 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop', // Grey - charcoal
            '#1F2A36': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop', // Navy - dark blue
            '#8B7D4F': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'  // Highland - olive
        };
        
        colorButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove selected class from all color buttons
                colorButtons.forEach(btn => btn.classList.remove('selected'));
                
                // Add selected class to clicked button
                this.classList.add('selected');
                
                // Get the background color from the clicked button
                const selectedColor = window.getComputedStyle(this).backgroundColor;
                
                // Convert rgba to hex for lookup
                const rgbaValues = selectedColor.match(/\d+/g);
                const hexColor = '#' + ((1 << 24) + (parseInt(rgbaValues[0]) << 16) + (parseInt(rgbaValues[1]) << 8) + parseInt(rgbaValues[2])).toString(16).slice(1).toUpperCase();
                
                // Change the style preview background to match
                stylePreview.style.backgroundColor = selectedColor;
                
                // Change the image in color preview with fade effect
                if (colorImages[hexColor]) {
                    colorPreviewImage.style.opacity = '0';
                    setTimeout(() => {
                        colorPreviewImage.src = colorImages[hexColor];
                        colorPreviewImage.style.opacity = '1';
                    }, 300);
                }
            });
        });