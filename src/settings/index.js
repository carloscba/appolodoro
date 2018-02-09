const dev = {
    env : 'dev',
    site : {
        path : ''
    },
    api : {
        path : ''
    },
    facebook : {
        appId : ''
    },
    firebase : {
        
    }
}

const prod = {
    env : 'prod',
    site : {
        path : ''
    },
    api : {
        path : ''
    },
    facebook : {
        appId : ''
    },
    firebase : {
        
    }
}

const settings = (window.location.hostname.indexOf('localhost') > -1 || window.location.hostname.indexOf('ngrok') > -1) ? dev : prod 

export default settings