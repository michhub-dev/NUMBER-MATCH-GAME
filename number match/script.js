const images = [
    {
      image_name: 'bananas.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'birthday candles.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'blocks.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'brushes.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'cakes.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'cars.jpg',
      number_of_items: 2,
    },
    {
      image_name: 'crayons.jpg',
      number_of_items: 8,
    },
    {
      image_name: 'cupcakes.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'deer.jpg',
      number_of_items: 3,
    },
    {
      image_name: 'donuts.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'ducks.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'eggs.jpg',
      number_of_items: 8,
    },
    {
      image_name: 'elephants.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'hot air balloons.jpg',
      number_of_items: 5,
    },
    {
      image_name: 'jelly beans.jpg',
      number_of_items: 9,
    },
    {
      image_name: 'macaroons.jpg',
      number_of_items: 7,
    },
    {
      image_name: 'pencils.jpg',
      number_of_items: 12,
    },
    {
      image_name: 'people.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'peppers.jpg',
      number_of_items: 2,
    },
    {
      image_name: 'pizza slices.jpg',
      number_of_items: 8,
    },
  ];

  const timeDelay = 3000;
  let currentImageValue = 0,
  displayNumber = 0,
  score = 0,
  totalAvailable = images.length,
  chose = false;

  document.getElementById("statsContent").style.visibility ="hidden";
  document.getElementById("currentScore").innerHTML = score;
  document.getElementById("totalAvailable").innerHTML = totalAvailable;
  document.getElementById("timeSetting").innerHTML = timeDelay / 1000;

  const setImageSrc = (randomImageName) => {
    const imageContainer = document.getElementById("ContainerImages");
    if (imageContainer.hasChildNodes()){
        imageContainer.removeChild(imageContainer.firstElementChild);

  }
  const image = document.createElement("img");
  image.src = `images/${randomImageName}`;
  image.classList.add("fade");
  imageContainer.appendChild(image);

  };

  generateDisplayNumber = (numberOfItems, plusOrMinus) => {
      const split = Math.floor(Math.random() * 2)
      if (split === 0){
          document.getElementById("number").innerHTML = numberOfItems;
      }else{
          document.getElementById("number").innerHTML = `${numberOfItems + plusOrMinus}`;
          displayNumber = numberOfItems + plusOrMinus;
      }
      currentImageValue = numberOfItems;
  };

  const generatePlusOrMinus = () => {
      const number0to1 = Math.floor(Math.random() * 2);
      return number0to1 === 0 ? -1 : +1;
  };

  const setImageName = (randomImageName) =>{
      const imageName = randomImageName.slice(0, randomImageName.length - 4);
      document.getElementById("item-name").innerHTML = imageName + "?";

  }

  const formNumber = () => {
      if (images.length === 0) {
          gameEnded();
          stopTimer();
          return;
      }

  chose = false;
  const randomNumber = Math.floor(Math.random() * images.length);
  const randomImageName = images[randomNumber].image_name;
  setImageSrc(randomImageName);
  setImageName(randomImageName)
  const plusOrMinus = generatePlusOrMinus();
  const numberOfItems = images[randomNumber].number_of_items;
  generateDisplayNumber(numberOfItems, plusOrMinus);
  images.splice(randomNumber, 1);

  };
 
  const matchNumber = () => {
      if (!chose){
      currentImageValue === displayNumber ? score++ : score--;
      chose = true;
      document.getElementById("currentScore").innerHTML = score;
      } 
  };

  const notMatch = () =>{
      if(!chose){
      currentImageValue !== displayNumber ? score++ : score--;
      chose = true;
      document.getElementById("currentScore").innerHTML = score;
      }
  }

 let timerRef;
  const timer = () => {
     timerRef = setInterval(formNumber, timeDelay);
  };

  const play = () => {
      document.getElementById("message").style.display = "none";
      document.getElementById("startScreen").style.display = "none";
      document.getElementById("play-button").style.display = "none";
      document.getElementById("statsContent").style.visibility ="visible";
      formNumber();
      timer();
  };

  const gameEnded = () => {
      document.getElementById("statsContent").style.visibility ="hidden";
      document.getElementById("message").style.display = "block";
      document.getElementById("ContainerImages").style.display = "none";
      document.getElementById("statsContent").style.display = "none";
      document.getElementById("message").innerHTML = `Game over. You scored  ${score} / ${totalAvailable}`;
      setTimeout(() => location.reload(),3000);
  };

const stopTimer = () => {
    clearInterval(timerRef);
};
