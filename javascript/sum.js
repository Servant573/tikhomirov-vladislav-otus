function sum(a) {
    let acc = typeof a === 'symbol' ? a.toString() : a
    return function (b) {
        if (b === undefined) {
            return acc
        }
        if (typeof b === 'symbol') {
            return sum(acc + b.toString())
        }
        return sum(acc + b)
    }
}