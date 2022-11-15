import { Decimal } from 'decimal.js'

// 加
export function add(x, y) {
    if (!x) {
        x = 0
    }
    if (!y) {
        y = 0
    }
    const xx = new Decimal(x)
    const yy = new Decimal(y)
    return xx.plus(yy).toNumber()
}

// 减
export function reduce(x, y) {
    if (!x) {
        x = 0
    }
    if (!y) {
        y = 0
    }
    const xx = new Decimal(x)
    const yy = new Decimal(y)
    return xx.minus(yy).toNumber()
}

// 乘
export function multi(x, y) {
    if (!x) {
        x = 0
    }
    if (!y) {
        y = 0
    }
    const xx = new Decimal(x)
    const yy = new Decimal(y)
    return xx.mul(yy).toNumber()
}

// 除
export function except(x, y) {
    if (!x) {
        x = 0
    }
    if (!y) {
        y = 0
    }
    const xx = new Decimal(x)
    const yy = new Decimal(y)
    return xx.div(yy).toNumber()
}