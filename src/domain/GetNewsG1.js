const { apiService } = require('../service/api');
const cheerio = require('cheerio');

// require("util").inspect.defaultOptions.depth = 0;

class GetNewsG1 {

  constructor() {
    //constantes
    this.URL = "https://g1.globo.com/";
    this.FILENAME = "NewsG1";
  }

  async executa() {
    await this.loadHtmlPage();
    const infoHtml = this.getInfoHtml();

    // console.log(infoHtml);

  }

  async loadHtmlPage() {
    try {
      const { data: html } = await apiService.get(this.URL);
      this.html = html;

    } catch (error) {
      console.log(`Error: GetNewsG1:loadPageHtml > ${error.message}`);
    }
  }

  getInfoHtml() {

    const news = [];
    //-----------
    const $ = cheerio.load(this.html);
    let content_news = $('#bstn-launcher');

    $(content_news).find('.bastian-feed-item').each(function () {
      let item = $(this);

      let subTitle = item.find('.feed-post-header-chapeu').text();


      console.log(subTitle);
      console.log('=====================');

      news.push({
        subTitle
      });

    });

    console.log(news);

    //elementos
    // const content_news = $('.bstn-fd.bstn-fd ._evt .bastian-feed-item .feed-post-body');
    // content_news.each(function () {
    //   console.log($(this).html());
    // });
    // console.log('\r\n');

  }



}

module.exports = {
  GetNewsG1
}