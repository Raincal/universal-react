/**
 * Created by Yujia on 2015/12/14.
 */
var path = require('path');
module.exports = {
    entry: path.join(process.cwd(), 'client-render.js'),
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel'
            }
        ]
    }
};