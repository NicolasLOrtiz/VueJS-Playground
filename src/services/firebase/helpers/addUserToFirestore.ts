import { addDoc, collection } from 'firebase/firestore'
import { FirebaseUser } from '../../../types/FirebaseUser'
import { firebaseFirestore } from '../firebaseFirestore'

export const addUserToFirestore = async (user: FirebaseUser) => {
  try {
    return await addDoc(collection(firebaseFirestore, 'users'), user)
  } catch (e) {
    console.error(e)
  }
}
