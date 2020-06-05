class Phone {
  constructor(data) {
    this.data = data;

  }
  get htmlString() {
    return `
      <article>
        <div class="imageWrapper">
          <img src="${this.data.image}">
        </div>
        <div class="article_content_wrapper">
          <div>
            <h3>${this.data.name}</h3>
            <h4>${this.data.brand}</h4>
          </div>
          <div class="${this.data.year}">€${this.data.price}</div>
        </div>
      </article>
    `;
  }
}

class Phones {
  constructor() {
    this.data = [{
        name: 'IPHONE 11',
        brand: 'Apple',
        price: 809,
        image: 'https://cdn.mos.cms.futurecdn.net/rJFKqhNF7ZEdPBDg6LdQ4K-768-80.png.webp'
      },
      {
        name: 'ONEPLUS 8 PRO',
        brand: 'Oneplus',
        price: 899,
        image: 'https://cdn.mos.cms.futurecdn.net/GshBbgyzfXcuyzB2ySDV7W-768-80.jpg.webp'
      },
      {
        name: 'IPHONE SE (2020)',
        brand: 'Apple',
        price: 499,
        image: 'https://cdn.mos.cms.futurecdn.net/Pv5UY9QGTWkr2CPA6vkN9i-768-80.png.webp'
      },
      {
        name: 'SAMSUNG GALAXY S20 ULTRA',
        brand: 'Samsung',
        price: 959,
        image: 'https://cdn.mos.cms.futurecdn.net/zPSGkRzoJBtu4NEEaDQCch-768-80.jpg.webp'
      },
      {
        name: 'SAMSUNG GALAXY NOTE 10',
        brand: 'Samsung',
        price: 622,
        image: 'https://cdn.mos.cms.futurecdn.net/ztJWkHq52UfKqgn8eVgZQZ-768-80.jpg.webp'
      },
      {
        name: 'IPHONE 11 PRO',
        brand: 'Apple',
        price: 1000,
        image: 'https://cdn.mos.cms.futurecdn.net/no6isXQdp64V3bieFpsLeh-768-80.png.webp'
      },
      {
        name: 'GOOGLE PIXEL 4',
        brand: 'Google',
        price: 555,
        image: 'https://cdn.mos.cms.futurecdn.net/Wv2kBhTCXStaAFRESERP3P-768-80.jpg.webp'
      },
      {
        name: 'SAMSUNG GALAXY S10 PLUS',
        brand: 'Samsung',
        price: 629,
        image: 'https://cdn.mos.cms.futurecdn.net/Vxj8VvpPJrRHSXLV86Dvfb-768-80.jpg.webp'
      },
      {
        name: 'SONY XPERIA 1',
        brand: 'Sony',
        price: 949,
        image: 'https://cdn.mos.cms.futurecdn.net/thBhakZeuB9GhTN2oENBYU-768-80.jpg.webp'
      },
      {
        name: 'GOOGLE PIXEL 3A',
        brand: 'Google',
        price: 314,
        image: 'https://cdn.mos.cms.futurecdn.net/3xXeBSvWNmAJdYZtfpzeuF-768-80.jpg.webp'
      },
    ];
    this.renderThisElement = document.getElementById('content_section');
    this.brand = 'all';
    this.render();
  }
  sort() {
    this.data.sort((a, b) => {
      if (a[this.brand] === b[this.brand]) {
        return -1;
      }
      /* if (a[this.brand] === b[this.value]) {
        return -1;
      } */

    });
    this.render();
  }

  render() {
    let htmlString = '';
    this.data.forEach((singlePhoneData) => {
      const phoneInstance = new Phone(singlePhoneData);
      htmlString += phoneInstance.htmlString;
    });
    this.renderThisElement.innerHTML = htmlString;
  }
}

const phoneInstance = new Phones();

class RadioInputs {
  constructor(name) {
    this.name = name;
    this.htmlElements = document.getElementsByName(name);
    this.bindEvents();
  }
  valueChange(event) {
    phoneInstance[this.name] = event.target.value;
  }
  bindEvents() {
    console.log(this.htmlElements);
    this.htmlElements.forEach((htmlElement) => {
      htmlElement.addEventListener('change', this.valueChange.bind(this));
    });
  }

}


new RadioInputs('brand');