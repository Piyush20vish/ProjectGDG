const brands = [
    { name: "Apple", img: "https://logo.clearbit.com/apple.com", url: "https://www.apple.com" },
    { name: "Dell", img: "https://logo.clearbit.com/dell.com", url: "https://www.dell.com" },
    { name: "Havells", img: "https://logo.clearbit.com/havells.com", url: "https://www.havells.com" },
    { name: "HP", img: "https://logo.clearbit.com/hp.com", url: "https://www.hp.com" },
    { name: "Samsung", img: "https://logo.clearbit.com/samsung.com", url: "https://www.samsung.com" },
    { name: "Lenovo", img: "https://logo.clearbit.com/lenovo.com", url: "https://www.lenovo.com" },
  ];
  
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function loadBrands() {
    const container = document.getElementById('brands-container');
    brands.forEach(brand => {
      const a = document.createElement('a');
      a.href = brand.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
  
      const img = document.createElement('img');
      img.src = brand.img;
      img.alt = brand.name;
  
      const p = document.createElement('p');
      p.innerText = brand.name;
  
      a.appendChild(img);
      a.appendChild(p);
      container.appendChild(a);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadBrands);
  