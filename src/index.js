//https://arunmichaeldsouza.com/blog/aliasing-module-paths-in-node-js

import ExtractInfo from '#src/domain/ExtractInfo';
import ExtractNewsG1 from '#src/extract/ExtractNewsG1';

ExtractInfo.extract(new ExtractNewsG1());