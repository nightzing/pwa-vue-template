/**
 * @file vue-loader 配置文件
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

'use strict';

const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    loaders: utils.cssLoaders({
        cssModules: {
            localIdentName: '[path][name]---[local]---[hash:base64:5]',
            camelCase: true
        },
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,

        // extract: isProduction
        extract: true
    })
};
