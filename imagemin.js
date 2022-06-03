const conf = require('./config')
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const glob = require('glob');

const baseDir = conf.path.src + 'assets/images';
const imagesjpg = glob.sync(`${baseDir}/**/*.jpg`);
const imagesPng = glob.sync(`${baseDir}/**/*.png`);
const imagesGif = glob.sync(`${baseDir}/**/*.gif`);
const imagesSvg = glob.sync(`${baseDir}/**/*.svg`);

imagesjpg.forEach((files) => {
  tempfiles = files.replace(conf.path.src, '');
  const dir = tempfiles.split('/');
  dir[0] = conf.path.dest +"assets";
  dir.pop();
  imagemin([files], {
    destination: dir.join('/'),
    plugins: [imageminJpegtran()],
  }).then(() => {
    console.log(`${files} optimized`);
  });
});

imagesPng.forEach((files) => {
  tempfiles = files.replace(conf.path.src, '');
  const dir = tempfiles.split('/');
  dir[0] = conf.path.dest +"assets";
  dir.pop();
  imagemin([files], {
    destination: dir.join('/'),
    plugins: [imageminPngquant()],
  }).then(() => {
    console.log(`${files} optimized`);
  });
});

imagesGif.forEach((files) => {
  tempfiles = files.replace(conf.path.src, '');
  const dir = tempfiles.split('/');
  dir[0] = conf.path.dest +"assets";
  dir.pop();
  imagemin([files], {
    destination: dir.join('/'),
    plugins: [imageminGifsicle()],
  }).then(() => {
    console.log(`${files} optimized`);
  });
});

imagesSvg.forEach((files) => {
  tempfiles = files.replace(conf.path.src, '');
  const dir = tempfiles.split('/');
  dir[0] = conf.path.dest +"assets";
  dir.pop();
  imagemin([files], {
    destination: dir.join('/'),
    plugins: [
      imageminSvgo({
        plugins: [
            { removeViewBox: false },
        ],
      }),
    ],
  }).then(() => {
    console.log(`${files} optimized`);
  });
});

