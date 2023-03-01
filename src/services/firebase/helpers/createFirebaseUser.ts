import { FirebaseUser } from '../../../types/FirebaseUser'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../firebaseAuth'

export const createFirebaseUser = async (user: FirebaseUser) => {
  const { email, password } = user
  try {
    const { user } = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    return user
  } catch (error) {
    console.log(error)
  }
}
