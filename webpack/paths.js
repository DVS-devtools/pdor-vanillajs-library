const path = require('path');

const root = path.resolve(__dirname, '../');
const entryPath = path.resolve(root, 'src', 'index.js');
const outputPath = path.resolve(root, 'dist');

const browserEntry = () => {
    const indexBrowser = path.resolve('../', 'index.browser.js');
    if (fs.existsSync(indexBrowser)) {
        return indexBrowser;
    }
    return entryPath;
};

module.exports = {
    root,
    outputPath,
    entryPath,
    browserEntryPath: browserEntry(),
    chunkFilename: '[name].chunk.[chunkhash:8].js',
    examplePath: {
        html: path.resolve(__dirname, '../', 'example/index.html'),
        js: path.resolve(__dirname, '../', 'example/index.js'),
    },
    cssFolder: 'css',
    jsFolder: 'js',
};
