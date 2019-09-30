module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    publicPath: '/',
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}