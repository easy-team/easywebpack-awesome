'use strict';
const path = require('path');
module.exports = {
  framework: 'weex',
  entry: {
    include: 'page',
    exclude: ['page/html'],
    template: 'view/layout.html'
  },
  alias: {
    asset: 'asset',
    app: 'framework/vue/app.js',
    component: 'component',
    framework: 'framework',
    store: 'store'
  },
  create() {
    if (this.type === 'web') {
      this.addEntry('vendor', [path.join(this.config.baseDir, 'framework/weex/web.js')]);
    }
  }
};