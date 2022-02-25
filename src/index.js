const { apiService } = require('./service/api');
const { getNoticias } = require('./get-news-g1');
const fs = require('fs');

apiService.get('/')
  .then(response => {
    const { data } = response;
    const news = getNoticias(data);

    writeFile(news, 'news-g1');
  })
  .catch(err => {
    console.log(err);
  })

// ==================================================

function writeFile(data, filename) {
  const fileName = `src/${filename}.json`;
  fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
    if (err)
      console.log(err);
    else {
      console.log(fs.readFileSync(fileName, "utf8"));
    }
  });
}












// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================


//Faz com q o console.log() mostra todos os objetos
// require("util").inspect.defaultOptions.depth = 1;

//https://www.npmjs.com/package/cheerio

// div class="bstn-fd bstn-fd-csr"
//
// div class="feed-post-body"


//=======================================

// writeResponseDataInFileJson('/character', 'character');
// writeResponseDataInFileJson('/character?name=rick&status=alive', 'character_rick');

// function writeResponseDataInFileJson(rota, filename) {
//   apiService.get(rota)
//     .then(response => {
//       const { data: { results } } = response;
//       writeFile(results, filename);
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

// function writeFile(data, filename) {
//   const fileName = `${filename}.json`;
//   fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
//     if (err)
//       console.log(err);
//     else {
//       console.log(fs.readFileSync(fileName, "utf8"));
//     }
//   });
// }

// ============================

// apiService.get('/character')
//   .then(response => {
//     writeFile(response.data.results, 'character');
//   })
//   .catch(err => {
//     console.log(err);
//   })

// apiService.get('/character?name=rick&status=alive')
//   .then(response => {
//     writeFile(response.data.results, 'character_rick');
//   })
//   .catch(err => {
//     console.log(err);
//   })

// Promise.all([apiService.get('/character'), apiService.get('/character?name=rick&status=alive')])
//   .then(response => {
//     response.forEach(data => {
//       console.log(data.data.info);
//       //writeFile(data.data.results, 'character');
//     });
//     //writeFile(data, 'character');
//   })
//   .catch(err => {
//     console.log(err);
//   });
