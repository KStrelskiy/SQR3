const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    },
});

const baseFurnitures = [
  {
    order: 1,
    image: '../images/image1.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 2,
    image: '../images/image2.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'bed'
  },
  {
    order: 3,
    image: '../images/image3.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'wardrobe'
  },
  {
    order: 4,
    image: '../images/image4.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 5,
    image: '../images/image5.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 6,
    image: '../images/image6.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 7,
    image: '../images/image7.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 8,
    image: '../images/image8.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'bed'
  },
  {
    order: 5,
    image: '../images/image5.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 6,
    image: '../images/image6.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 7,
    image: '../images/image7.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 8,
    image: '../images/image8.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'bed'
  },
  {
    order: 1,
    image: '../images/image1.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
  {
    order: 2,
    image: '../images/image2.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'bed'
  },
  {
    order: 3,
    image: '../images/image3.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'wardrobe'
  },
  {
    order: 4,
    image: '../images/image4.png',
    name: 'Furniture Name',
    price: '$ 250',
    text: 'It is a long estiabs lished fact that a reader will be the service.',
    button: 'Order Now',
    item: 'sofa'
  },
]

const btnOpenFurnitures = document.querySelector('.furniture__btn');

let x = 0;

btnOpenFurnitures.addEventListener('click', () => {
  const wrapperFurniture = document.querySelector('.furniture__list');
  const itemsFurniture = document.querySelectorAll('.furniture__item');
  if(document.querySelector('.item-none')) {
    document.querySelector('.item-none').remove()
  }
  function wrapper(num, num1) {
    for(let i = num; i < baseFurnitures.length - num1; i++) {
      const wrapperItem = `
      <li class="furniture__item" data-item="${baseFurnitures[i].item}">
        <img class="furniture__item-img" src="${baseFurnitures[i].image}" alt="image${baseFurnitures[i].order}">
        <div class="furniture__item-content">
            <h4 class="furniture__item-name">
              ${baseFurnitures[i].name}
            </h4>
            <p class="furniture__item-price">
              ${baseFurnitures[i].price}
            </p>
        </div>
        <p class="furniture__item-text">
          ${baseFurnitures[i].text}
        </p>
        <button class="btn furniture__item-btn">
          ${baseFurnitures[i].button}
        </button>
    </li>`;
    wrapperFurniture.insertAdjacentHTML('beforeend', wrapperItem);
    }
  }
  let itemsLength = 8;
  let num = 0;
  let items = baseFurnitures.length - 4;
  itemsLength = itemsLength + (4 * x)
  num = num + (4 * x);
  items = items - (4 * x);
  if(itemsFurniture.length === itemsLength) {
    if (items === 0) {
      btnOpenFurnitures.style.display = 'none'
    }
    wrapper(num, items);
    document.querySelectorAll('.furniture__item').forEach((item) => {
      item.style.display = 'block'
    })
  }
  x++;
  sort()
})

function sort() {
  const itemsFurniture1 = document.querySelectorAll('.furniture__item');
  const listFurniture = document.querySelector('.furniture__top-list');
  listFurniture.addEventListener('click', sortFurniture)
  function sortFurniture(e) {
    if(e.target.classList.contains('furniture__top-list')) {
      return
    }
    const furniture = e.target.dataset.name;
    itemsFurniture1.forEach((item) => {
      item.style.display = 'none';
      if(document.querySelector('.item-none')) {
        document.querySelector('.item-none').remove()
      }
      if(item.dataset.item === furniture) {
        item.style.display = 'block';
      }
      if(furniture === 'all') {
        item.style.display = 'block';
      }
    })
    if(furniture === undefined) {
      const itemNoneText = 
      `<p class="item-none">Товар закончился</p>`
      document.querySelector('.furniture__list').insertAdjacentHTML('beforeend', itemNoneText);
    }
  }
}
sort()

const burgerBtn = document.querySelector('.burger');
const navBox = document.querySelector('.nav');

burgerBtn.addEventListener('click', burgerMenu);

function burgerMenu() {
  burgerBtn.classList.toggle('open-menu');
  navBox.classList.toggle('open-menu');
  document.body.classList.toggle('body-hidden');
  const item = document.querySelectorAll('.nav__item');
  item.forEach(items => {
    items.addEventListener('click', () => {
      navBox.classList.remove('open-menu');
      document.body.classList.remove('body-hidden');
      burgerBtn.classList.remove('open-menu')
    })
  })
}
navBox.addEventListener('click', (e) => {
  if(!e.target.classList.contains('.nav__item')) {
    navBox.classList.remove('open-menu');
    document.body.classList.remove('body-hidden');
    burgerBtn.classList.remove('open-menu')
  }
})

