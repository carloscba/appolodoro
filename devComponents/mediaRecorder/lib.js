const getKindDevice = (kind, list) => {
    return list.filter((item) => {
        return item.kind === kind
    })
}

export default getKindDevice