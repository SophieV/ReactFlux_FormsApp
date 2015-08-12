module.exports = function(config) {
  config.set({
    files: [
    // order is important 
    '../node_modules/phantomjs-polyfill/bind-polyfill.js',
      'scripts/spec/suites/*Spec.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      'scripts/spec/suites/*Spec.js': ['browserify']
    },
    browsers: ['Chrome'],//,'Firefox','PhantomJS','Safari'],
    reporters: ['spec', 'failed'],
    browserify: {
      transform: [ 'reactify' ],

      // don't forget to register the extensions
      extensions: ['.js', '.jsx']
    },
    logLevel: 'LOG_DEBUG'
  })
};
