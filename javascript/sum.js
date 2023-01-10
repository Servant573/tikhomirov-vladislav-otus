function sum(a) {
    let acc = a
    return function (b) {
        return b ? sum(acc + b) : acc
    }
}