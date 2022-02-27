import path from 'path';
import fs from 'fs';

export default class File {

  /**
   * 
   * @param {Object} data 
   * @param {String} dir 
   * @param {String} filename 
   * @param {Object} extras default value {
   *    pretty = true : If use format JSON config, 
   *    replacer = null. : An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified 
   *    space = 2 : Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read 
   * }
   */
  static writeObjectInJsonFile(data, dir, filename, { pretty = true, replacer = null, space = 2 } = extras) {

    // let pretty = extras?.pretty || true;
    // let space = extras?.space || 2;

    const ext = filename.split('.').pop();
    if (ext !== 'json') filename += '.json';

    const realPath = path.resolve(dir, filename);
    const txt = (!pretty) ? JSON.stringify(data) : JSON.stringify(data, replacer, space);

    fs.writeFile(realPath, txt, (err) => {
      if (err) console.log(err);
      else {
        //console.log(fs.readFileSync(realPath, "utf8"));
      }

    });


  }


}