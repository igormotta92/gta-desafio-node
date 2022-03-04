import path from 'path';
import fs from 'fs'; 1

import File from '#src/util/File';

export default class ExtractInfo {
  constructor(extract) {
    this.extract = extract;
  }

  static async extract(extract) {
    const self = new ExtractInfo(extract);
    let infos = await self.extract.executa();

    let dir = path.resolve('./public/news/');
    //https://www.tutorialspoint.com/unix/unix-file-permission.htm
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, '0666');

    File.writeObjectInJsonFile(infos, dir, self.extract.FILENAME, { pretty: true });

    //console.log(infos);

  }
}