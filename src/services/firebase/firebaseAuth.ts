import { firebaseApp } from './firebaseApp'
import { getAuth } from 'firebase/auth'

export const firebaseAuth = getAuth(firebaseApp)
