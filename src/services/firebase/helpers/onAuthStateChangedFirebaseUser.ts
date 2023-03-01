import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebaseAuth'

export const onAuthStateChangedFirebaseUser = () => {
  return onAuthStateChanged(firebaseAuth, (user) => user)
}
