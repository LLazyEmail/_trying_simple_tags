const fs = require('fs');
const path = require('path');

module.exports = (request, options) => {
  if (request.startsWith('.') && path.extname(request) === '') {
    const withJs = `${request}.js`;
    const resolved = path.resolve(options.basedir, withJs);
    if (fs.existsSync(resolved)) {
      return options.defaultResolver(withJs, options);
    }
  }

  return options.defaultResolver(request, options);
};
