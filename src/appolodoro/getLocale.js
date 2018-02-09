export function getLocale(){
    let path = ''
    let locale = 'en'

    if(window.location.pathname.indexOf('/sdlatino/') > -1){
        path = 'sdlatino/blog/valentines-day-ecard'
        locale = 'es'
    }else{
        path = 'blog/valentines-day-ecard'
        locale = 'en'
    }

    return {
        path, 
        locale
    }
}