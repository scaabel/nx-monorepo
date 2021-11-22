const { createReleaseConfigWithScopeFilter } = require('../../tools/release');

module.exports = createReleaseConfigWithScopeFilter({
  projectScope: 'store',
  projectRoot: 'apps/store',
  buildOutput: 'dist/apps/store',
});
