var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var shell = require('gulp-shell');
var karma = require('karma').server;
var getIp = require('dev-ip');
var ip = getIp();

var path = {
  HTML: 'src/index.html',
  NOT_MINIFIED: 'build.js',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: './src/js/App.js'
};

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(jsx())
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTMLBundlePath', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

// TODO move so that everytime HTML file is modified, the path is re-replaced
gulp.task('replaceHTMLBundlePathDev', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'src/' + path.NOT_MINIFIED
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['replaceHTMLBundlePath', 'build']);

gulp.task('default', ['replaceHTMLBundlePathDev', 'watch']);

// How to Run Jasmine Tests :
//
// 1. Open a new tab and run task 'tdd' = karma is configured to run all the other Browsers (Chrome, Firefox, Safari, PhantomJS).
//
// 2. Start task 'start-karma-IE' =  Attach IE to karma. The TDD will rerun and the console info should now state "IE x.x.x [...] : Executed y of y SUCCESS".
// Note : the path is hard coded. It's expecting Parallels on OSX. If you are running Windows, you only need task 1 and adding "IE" as a browser in the karma.config.js file.
//
// 3. Optional, you can use the IE debugger, the last icon (Emulation) to change the IE version used. As you select a new value in the "document mode", 1. will refresh. Please note that using v < 9.0 will bug and you need to restart the IE browser connection to karma/redo 2.

gulp.task('start-karma-IE',[], shell.task([
  process.env.HOME + "/'Applications\ \(Parallels\)'/'\{66114fb8-5a39-4936-acd0-bc1347962d4b\}\ Applications.localized/Internet\ Explorer.app'/Contents/MacOS/WinAppHelper http://" + ip[0] + ":9876/?id=51321282/context.html"
  // if undefined, change it to your IP using ifconfig
]));

// Watch for file changes and re-run tests.
gulp.task('tdd', [], function(done) {
  karma.start({
    configFile: __dirname + '/tests/karma.conf.js'
  }, done);
});