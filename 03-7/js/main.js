(function () {
  function getAttributes(el, ...attrNames) {
    let attrs = {};
    attrNames.forEach(attrName => attrs[attrName] = el.getAttribute(attrName));
    return attrs;
  }

  function setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  function toggleClasses(el, ...classNames) {
    classNames.forEach(className => el.classList.toggle(className));
  }

  let card = document.querySelector('div.card');
  let cardImg = card.querySelector('img');
  let cardText = card.querySelector('p');
  let imgs = document.querySelectorAll('div > img.img-fluid');

  imgs.forEach(el => {
    el.addEventListener('click', (event) => {
      let img = document.querySelector('div > img.img-fluid.border.border-success');
      let target = event.target;
      toggleClasses(img, 'border', 'border-success');
      toggleClasses(target, 'border', 'border-success');
      let attrs = getAttributes(event.target, 'src', 'alt');
      setAttributes(cardImg, attrs);
      cardText.innerText = attrs.alt;
    });
  });
})();


