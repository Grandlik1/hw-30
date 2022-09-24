'use strict'
const user = {
    name: 'nik'
}

function info(inf1, inf2) {
    console.log(`Name: ${this.name}, Inf1:${inf1}, Inf2: ${inf2}`)
}

function bind(fn, context, ...rest) {
return function(...args) {
    const uniqId = Date.now().toString()
    context[uniqId] = fn
    const result = context[uniqId](...rest.concat(args))
    delete context[uniqId]
    return result
    }
}
bind(info ,user)('12345', '1232')