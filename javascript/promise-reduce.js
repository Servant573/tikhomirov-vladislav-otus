const promiseReduce = async (asyncFunctions, reduce, initialValue) => {
    let accumulator = initialValue
    if (!Array.isArray(asyncFunctions) || typeof reduce !== 'function' || initialValue === undefined) {
        throw new Error('invalid arguments passed')
    }
    for (const fn of asyncFunctions) {
        const memo = await fn()
        accumulator = reduce(memo, accumulator)
    }
    return accumulator
}
