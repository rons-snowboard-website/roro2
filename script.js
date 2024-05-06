const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;

function changeImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(changeImage, 2000); // Change image every 2 seconds (adjust as needed)

changeImage(); // Start with changing to the second image initially

        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerHTML = '❅';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
            snowflake.style.opacity = Math.random();
            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 10000);
        };

        setInterval(createSnowflake, 100);
		
		
