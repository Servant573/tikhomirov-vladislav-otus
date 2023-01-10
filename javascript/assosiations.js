const maxItemAssociation = (items) => {
    const associationCache = {}
    const [assocArray] = items.map((item) => {
        return item.reduce((acc, product) => {
            // пропускаем если уже есть данные по товару
            if (associationCache[product]) {
                return [...new Set([...acc, ...associationCache[product]])]
            }
            const productAll = items.filter((item) => item.includes(product)).reduce((acc, item) => [...acc, ...item], [])
            associationCache[product] = [...new Set(productAll)]
            return [...new Set([...acc, ...productAll])]
        }, []).sort((a, b) => a.length - b.length > 0)
    })
    return assocArray.sort()
}