module.exports = function(config) {
  config.set({
    files: [
      'scripts/spec/suites/*Spec.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      'scripts/spec/suites/*Spec.js': ['browserify']
    },
    browsers: ['PhantomJS','Firefox','Chrome','Safari'],
    reporters: ['spec', 'failed'],
    browserify: {
      debug: true,
      plugin: [ 'stringify' ]
    },
    logLevel: 'LOG_DEBUG'
  })
};
