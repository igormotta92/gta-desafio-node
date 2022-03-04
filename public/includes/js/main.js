const dirNews = "/gta-desafio-node/public/news/"

/**
 * G1
 */

function getHtmlNew(data) {
  let subItens = []
  data.subItens.forEach((item) => {
    subItens.push(`
      <li>
        <a class="c-new--link" href="${item.titleURL}">${item.title}</a>
      </li>
    `);
  });

  let html = `
    <div class="c-new">
    <article class="c-new__content">
      <div class="c-new__left">
        <img
          src="${data.imagem}"
          alt="">
      </div>
      <div class="c-new__right">
        <h2 class="c-new__subtitle">${data.subTitle}</h2>

        <h1 class="c-new__title">
          <a href="${data.titleURL}"
            class="c-new--link">
            ${data.title}
          </a>
        </h1>

        <div class="c-new__subnews">
          <ul>
            ${subItens.join('')}
          </ul>

        </div>
        <div class="c-new__footer">${data.metadata}</div>
      </div>
    </article>
  </div>
  `;

  return html;
}

async function loadNewsG1() {
  let data = await getJson('newsG1.json');

  var main_content = document.getElementById('mainContent');
  for (item of data) {
    let html = getHtmlNew(item);
    main_content.insertAdjacentHTML('beforeend', html);
  }

}

async function getJson(fileName) {
  try {
    let res = await fetch(`${dirNews}/${fileName}`);
    return await res.json();
  } catch (error) {
    console.log('Error: ', error.message);
  }

};

window.addEventListener('load', async function () {
  loadNewsG1();
});