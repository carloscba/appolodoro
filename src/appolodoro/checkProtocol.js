export function checkProtocol(){
    if(window.location.protocol === 'http:'){
        const newURL = window.location.href.replace('http:','https:')
        window.location.assign(newURL)
    }
    return true
}