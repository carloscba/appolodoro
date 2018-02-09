import type from  '../types'
export function setLocale(locale){
    return {
        type : type.SITE_SET_LOCALE,
        payload : {
            locale
        }
    }
}

export function setPath(path){
    return {
        type : type.SITE_SET_PATH,
        payload : {
            path
        }
    }
}

export function setWorking(status){
    return {
        type : type.SITE_SET_WORKING,
        payload : {
            status
        }
    }
}