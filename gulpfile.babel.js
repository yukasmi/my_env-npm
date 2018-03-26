/*
 * gulp-config
 */
require('babel-register');
import gulp from 'gulp';
import consolidate from 'gulp-consolidate';
import iconfont    from 'gulp-iconfont';
import rename      from 'gulp-rename';
import spritesmith from 'gulp.spritesmith';
import lodash      from 'lodash';

/*
 * site-config
 */
const siteUrl = 'http://gh_my_npm.local.dev/';// 環境にあわせて変更
const paths   = {
  dest       : './public',
  srcImages  : './src/_img',
  srcFonts   : './src/_icons',
  srcScripts : './src/_js',
  sass       : './src/_sass',
  images     : './public/assets/img',
  fonts      : './public/assets/fonts',
  scripts    : './public/assets/js',
  styles     : './public/assets/css'
}

/*
 * gulp.tasks
 */

// sprite
gulp.task('sprite', () => {
  const spriteData = gulp.src( paths.images + '/sprites/*.png' )
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      cssName: '_sprites.scss',
      padding: 40
  }));
  spriteData.img.pipe(gulp.dest( paths.images ));
  return spriteData.css.pipe(gulp.dest( paths.sass + '/object/modules' ));
});

// sprite ( retina )
gulp.task('spriter', () => {
  const spriteData = gulp.src( paths.images + '/sprites/*.png' )
    .pipe(spritesmith({
      retinaSrcFilter: paths.images + '/sprites/*-2x.png',
      imgName: 'sprite.png',
      retinaImgName: 'sprite-2x.png',
      imgPath: '../img/sprite.png',
      retinaImgPath: paths.images + '/sprite-2x.png',
      cssName: '_sprites.scss',
      padding: 40
  }));
  spriteData.img.pipe(gulp.dest( paths.images ));
  return spriteData.css.pipe(gulp.dest( paths.sass + '/object/modules' ));
});

// iconfont
gulp.task('font', () => {
  const fontName = 'icon';
  return gulp.src( paths.srcFonts + '/*.svg' )
    .pipe( iconfont( {
      normalize : true,
      fontName: fontName,
      appendCodepoints: true,
      startUnicode: 0xF001,
      fontHeight: 1001
    } ) )
    .on('glyphs', (glyphs) => {
    // .on( 'codepoints', function( codepoints ) {
      const options = {
        glyphs: glyphs.map( (glyph) => {
          // this line is needed because gulp-iconfont has changed the api from 2.0
          return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
        }),
        fontName  : fontName,
        className : fontName,
        fontPath  : '../fonts/',
        cssPath   : '/assets/css/app.css',
        timeStamp : Date.now()
      };
      // CSS
      gulp.src( './src/_icons/template.css' )
        .pipe( consolidate( 'lodash', options ) )
        .pipe( rename( {
          basename: '_iconfont',
          extname: '.scss'
        } ) )
        .pipe( gulp.dest( paths.sass + '/object/modules' ) );
      // フォント一覧 HTML
      gulp.src( './src/_icons/template.php' )
        .pipe( consolidate( 'lodash', options ) )
        .pipe( rename( {
          basename: '_icon-sample',
          extname: '.php'
        }))
        .pipe( gulp.dest( paths.dest ) );
    } )
  .pipe( gulp.dest( paths.fonts ) );
});
