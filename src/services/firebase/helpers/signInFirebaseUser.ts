import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../firebaseAuth'

export const signInFirebaseUser = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    return user
  } catch (error) {
    console.error(error)
  }
}
