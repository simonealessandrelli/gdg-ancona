var path = require('path');

var ret = {
  'suites': ['app/test'],
  'webserver': {
    'pathMappings': []
  },
  plugins: {
    'local': {
      'browsers': ['chrome', 'firefox']
    },
    sauce: {
      disabled: true,
      commandTimeout: 600,
      idleTimeout: 180,
      username: 'simonealessandrelli',
      accessKey: 'ecb73d2b-3591-488e-af3c-c866370f3f32',
      browsers: [
        /* see https://docs.saucelabs.com/reference/platforms-configurator */
        {
          browserName: 'microsoftedge',
          platform: 'Windows 10',
          version: ''
        },
        {
          browserName: 'internet explorer',
          platform: 'Windows 8.1',
          version: '11.0'
        }
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
