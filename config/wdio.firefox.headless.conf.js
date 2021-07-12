const { config } = require("./wdio.conf");
const path = require("path");

const firefoxHeadlessConfig = {  
    ...config,
    services: [['selenium-standalone', {drivers: {firefox: '0.29.1'}}]], // https://github.com/mozilla/geckodriver/releases
    capabilities: [    
        {      
            maxInstances: 5,
            browserName: "firefox",
            'moz:firefoxOptions': {
                args: ['-headless']
            }, 
        },  
    ],  

    path: "/wd/hub",  
    
};

exports.config = firefoxHeadlessConfig;