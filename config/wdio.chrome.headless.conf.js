const {config} = require("./wdio.conf");
require("path");
const chromeHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', {drivers: {chrome: '91.0.4472.101'}}]], // https://chromedriver.chromium.org/
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', '--allow-insecure-localhost']
        },
    }],
    logLevel: 'warn',

    path: "/wd/hub",

};

exports.config = chromeHeadlessConfig;