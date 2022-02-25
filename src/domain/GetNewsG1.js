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

    console.log(infoHtml);

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
    const $ = cheerio.load(this.html);

    //elementos
    const content_news = $('.bstn-fd.bstn-fd');

    console.log(content_news.text());

  }



}

module.exports = {
  GetNewsG1
}