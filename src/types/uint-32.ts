import { makeClass } from '../utils/make-class'
import { UInt } from './uint'

<<<<<<< HEAD
const UInt32 = makeClass(
  {
    inherits: UInt,
    statics: { width: 4 },
  },
  undefined,
)

export { UInt32 }
=======
const UInt32 = makeClass({
  inherits: UInt,
  statics: { width: 4 }
}, undefined)

export {
  UInt32
}
>>>>>>> master
