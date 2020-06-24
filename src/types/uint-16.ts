import { makeClass } from '../utils/make-class'
import { UInt } from './uint'

<<<<<<< HEAD
const UInt16 = makeClass(
  {
    inherits: UInt,
    statics: { width: 2 },
  },
  undefined,
)

export { UInt16 }
=======
const UInt16 = makeClass({
  inherits: UInt,
  statics: { width: 2 }
}, undefined)

export {
  UInt16
}
>>>>>>> master
