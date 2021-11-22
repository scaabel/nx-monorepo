const { createReleaseConfigWithScopeFilter } = require('../../tools/release');

module.exports = createReleaseConfigWithScopeFilter({
  projectScope: 'mobile',
  projectRoot: 'apps/mobile',
  buildOutput: 'apps/mobile/build/app/outputs/flutter-apk/app-release.apk',
});
