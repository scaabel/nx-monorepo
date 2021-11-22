const { createReleaseConfigWithScopeFilter } = require('../../tools/release');

module.exports = createReleaseConfigWithScopeFilter({
  projectScope: 'admin',
  projectRoot: 'apps/admin',
  buildOutput: 'dist/apps/admin',
});
