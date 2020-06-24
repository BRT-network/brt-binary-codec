import { BytesList } from '../serdes/binary-serializer'
const { bytesToHex, slice } = require('../utils/bytes-utils')

const Comparable = {
<<<<<<< HEAD
  lt(other) {
    return this.compareTo(other) < 0
  },
  eq(other) {
    return this.compareTo(other) === 0
  },
  gt(other) {
    return this.compareTo(other) > 0
  },
  gte(other) {
    return this.compareTo(other) > -1
  },
  lte(other) {
    return this.compareTo(other) < 1
  },
}

const SerializedType = {
  toBytesSink(sink) {
    sink.put(this._bytes)
  },
  toHex() {
    return bytesToHex(this.toBytes())
  },
  toBytes() {
=======
  lt (other) {
    return this.compareTo(other) < 0
  },
  eq (other) {
    return this.compareTo(other) === 0
  },
  gt (other) {
    return this.compareTo(other) > 0
  },
  gte (other) {
    return this.compareTo(other) > -1
  },
  lte (other) {
    return this.compareTo(other) < 1
  }
}

const SerializedType = {
  toBytesSink (sink) {
    sink.put(this._bytes)
  },
  toHex () {
    return bytesToHex(this.toBytes())
  },
  toBytes () {
>>>>>>> master
    if (this._bytes) {
      return slice(this._bytes)
    }
    const bl = new BytesList()
    this.toBytesSink(bl)
    return bl.toBytes()
  },
<<<<<<< HEAD
  toJSON() {
    return this.toHex()
  },
  toString() {
    return this.toHex()
  },
}

function ensureArrayLikeIs(Type, arrayLike) {
  return {
    withChildren(Child) {
=======
  toJSON () {
    return this.toHex()
  },
  toString () {
    return this.toHex()
  }
}

function ensureArrayLikeIs (Type, arrayLike) {
  return {
    withChildren (Child) {
>>>>>>> master
      if (arrayLike instanceof Type) {
        return arrayLike
      }
      const obj = new Type()
      for (let i = 0; i < arrayLike.length; i++) {
        obj.push(Child.from(arrayLike[i]))
      }
      return obj
<<<<<<< HEAD
    },
  }
}

export { ensureArrayLikeIs, SerializedType, Comparable }
=======
    }
  }
}

export {
  ensureArrayLikeIs,
  SerializedType,
  Comparable
}
>>>>>>> master
