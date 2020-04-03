const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://127.0.0.1:7201",
                changOrigin: true,
                ws:true,
            }
        }
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
    }
}