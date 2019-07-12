/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

const makeCarousel = () => {
    const carousel = document.createElement("div");
    const leftButton = document.createElement("div");
    const mountains = document.createElement("img");
    const computer = document.createElement("img");
    const trees = document.createElement("img");
    const turntable = document.createElement("img");
    const rightButton = document.createElement("div");

    carousel.classList.add("carousel");
    leftButton.classList.add("left-button");
    rightButton.classList.add("right-button");
    mountains.id='active';
    mountains.src = "./assets/carousel/mountains.jpeg";
    
    computer.src = "./assets/carousel/computer.jpeg";
    trees.src = "./assets/carousel/trees.jpeg";
    turntable.src = "./assets/carousel/turntable.jpeg";

    images = [mountains, computer, trees, turntable];    
    images.forEach((image, i) => {
        image.id = `img-${1 + i}`;
        i + 1;
    });

    carousel.appendChild(leftButton);
    carousel.appendChild(mountains);
    carousel.appendChild(computer);
    carousel.appendChild(trees);
    carousel.appendChild(turntable);
    carousel.appendChild(rightButton);

    const slider = direction => {
        images.forEach((image, i) => {
            var z = image.id.split("-")[1];
            z = Number(z);
            z = z + 1 * direction;
            if (z == 5) {
                z = 1;
            } else if (z == 0) {
                z = 4;
            } else z = z;
            image.id = `img-${z}`;
        });
    };

    //document.querySelector("#img-1").setAttribute('display', 'block')

    leftButton.addEventListener("click", () => slider(-1));
    rightButton.addEventListener("click", () => slider(-1));

    return carousel;
};

carouselContainer.appendChild(makeCarousel());

//images = document.querySelectorAll("div.carousel > img");
