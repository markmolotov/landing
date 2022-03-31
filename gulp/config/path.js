const buildFolder = './build';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    fonts: `${srcFolder}/fonts/**/*.{ttf,otf,woff,woff2}`
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder
};