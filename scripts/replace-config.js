/**
 * Note: configs in _data/matery.yml will replace configs in hexo.theme.config.
 */

hexo.on('generateBefore', function () {
  const rootConfig = hexo.config
  if (hexo.locals.get) {
    const data = hexo.locals.get('data')
    data && data.matery && (hexo.theme.config = data.matery)
  }
  hexo.theme.config.rootConfig = rootConfig
})