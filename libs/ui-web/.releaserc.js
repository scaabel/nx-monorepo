const { createReleaseConfigWithScopeFilter } = require('../../tools/release');

module.exports = createReleaseConfigWithScopeFilter({
  projectScope: 'ui-web',
  projectRoot: 'libs/ui-web',
  buildOutput: 'dist/libs/ui-web',
});
