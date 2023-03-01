import { collection, getDocs } from 'firebase/firestore'
import { firebaseFirestore } from '../firebaseFirestore'

export const readUserFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(firebaseFirestore, 'users'))
    return querySnapshot.docs.map((doc) => doc.data())
  } catch (e) {
    console.error(e)
  }
}
