const fs = require('fs-extra');

fs.remove('./assets/img', (err) => {
  if (err) throw err;
  console.log('対象のメディアディレクトリを削除しました');
});

const conf = require('./config')
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const glob = require('glob');

const baseDir = conf.path.src + 'assets/';
const jpg = glob.sync(`${baseDir}/**/*.jpg`);

jpg.forEach((files) => {
  tempfiles = files.replace(conf.path.src, '');
  const dir = tempfiles.split('/');
  dir[0] = conf.path.img;
  dir.pop();
  imagemin([files], {
    destination: dir.join('/'),
    plugins: [imageminJpegtran()],
  }).then(() => {
    console.log(`${files} optimized`);
  });
});
