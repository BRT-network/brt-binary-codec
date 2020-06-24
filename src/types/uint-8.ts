import { makeClass } from '../utils/make-class'
import { UInt } from './uint'

<<<<<<< HEAD
const UInt8 = makeClass(
  {
    inherits: UInt,
    statics: { width: 1 },
  },
  undefined,
)

export { UInt8 }
=======
const UInt8 = makeClass({
  inherits: UInt,
  statics: { width: 1 }
}, undefined)

export {
  UInt8
}
>>>>>>> master
