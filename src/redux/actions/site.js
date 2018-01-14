export function setLocale(locale){
    return {
        type : "SITE_SET_LOCALE",
        payload : {
            locale : locale
        }
    }
}