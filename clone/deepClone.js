function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)

    if (typeof obj !== 'object') return obj

    if (hash.get(obj)) return hash.get(obj)

    let clone = new obj.constructor()

    hash.set(obj, clone)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key], hash)
        }
    }

    return clone
}

let obj = { name: 1, address: { x: 100 } }

obj.o = obj

let b = deepClone(obj)
obj.address.x = 200

console.log(b);
console.log(obj);