const {
    config
} = require("./wdio.conf");
require("path");
const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {drivers: {chromiumedge: '91.0.864.59'}}]], // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
    capabilities: [{
        maxInstances: 1,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: ['--start-maximized']
        },
    }],
    path: "/wd/hub",

};

exports.config = firefoxConfig;