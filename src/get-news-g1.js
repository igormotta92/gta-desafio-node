//const axios = require('axios');
const cheerio = require('cheerio');

// require("util").inspect.defaultOptions.depth = 2;

const getNoticias = (html) => {
  const $ = cheerio.load(html);

  const news = [];
  $('.bstn-fd').each(function () {

    $(this).find('.bastian-feed-item').each(function () {

      //---------
      let title = $(this).find('.feed-post-body-title').find('.feed-post-link').text();

      //---------
      let subLinks = [];
      $(this).find('.bstn-relateditems').find('.bstn-relateditem').each(function () {
        let link = $(this).find('.bstn-relatedtext').text();
        subLinks.push(link);
      });

      //---------
      let date = $(this).find('.feed-post-metadata').find('.feed-post-datetime').html();
      let postMetaData = $(this).find('.feed-post-metadata-section').html();
      let infoPost = `${date} - ${postMetaData}`;

      //---------
      let src = $(this).find('.bstn-fd-picture-image').attr('src');
      let image = encodeURIComponent(src);

      //console.log(src);
      //console.log('\r\n');

      //e---------
      news.push({
        title,
        subLinks,
        infoPost,
        image,
      })

    })

  })
  //console.log(news);
  return news;
}

module.exports = {
  getNoticias
}

//=====================

// class="bstn-fd-picture-image" ;

// imagem class="feed-media-wrapper" ; class="feed-post-figure-link gui-image-hover" ;
// class="bstn-fd-picture-image" ;

// $('.bstn-fd bstn-fd-csr').find('bastian-feed-item').each(function () {
//   console.log(this);
// })

// $('.bstn-fd-cover-picture').find('bastian-post-picture).each(function () {
//   console.log(this);
//})

// $('.bstn-relateditems').find('bastian-feed-post-datetime ).each(function () {
//   console.log(this);
//})

// $('.bstn-relatedtext').find('bastian-feed-post-metadata-section ).each(function () {
//   console.log(this);
//})

//https://s2.glbimg.com/O5eSXYMPEVih2PQ_-7pZ-1L1OWU=/0x0:720x405/540x304/smart/filters:max_age(3600)/https://s2.glbimg.com/ViWsvtKOFiU3OcZl8ggBMd9xR_w=/720x0/filters:max_age(3600)/s03.video.glbimg.com/deo/vi/78/42/10334278

