var path = require('path');

var ret = {
  'suites': ['app/test'],
  'webserver': {
    'pathMappings': []
  },
  verbose: false,
  expanded: true,
  plugins: {
    local: {
      disabled: true,
      browsers: ['chrome']
    },
    sauce: {
      disabled: true,
      commandTimeout: 600 * 10,
      idleTimeout: 180,
      username: 'elmar1ach1',
      accessKey: 'fbc36797-58ca-4295-b710-4530637df598',
      browsers: [
        /* see https://docs.saucelabs.com/reference/platforms-configurator */
        /*{
          browserName: 'chrome',
          platform: 'OS X 10.9',
          version: '40'
        },
        {
          browserName: 'safari',
          platform: 'OS X 10.9',
          version: '7.0'
        },
        {
          browserName: 'safari',
          platform: 'OS X 10.10',
          version: '8.0'
        },
        {
          browserName: 'chrome',
          platform: 'Windows 8.1',
          version: '40'
        },*/
        {
          browserName: 'internet explorer',
          platform: 'Windows 8.1',
          version: '11.0'
        },/*
        {
          browserName: 'firefox',
          platform: 'Windows 7',
          version: '27.0'
        },
        {
          browserName: 'internet explorer',
          platform: 'Windows 7',
          version: '10.0'
        }*/
      ]
    }
  }
};

var mapping = {};
var rootPath = (__dirname).split(path.sep).slice(-1)[0];

mapping['/components/' + rootPath  +
'/app/bower_components'] = 'bower_components';

ret.webserver.pathMappings.push(mapping);

module.exports = ret;
