import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth } from '../lib/firebase/auth';
import { db } from '../lib/firebase/db';
import type { User } from '../types/User';

export const authService = {
  async login(email: string, password: string): Promise<User> {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return mapFirebaseUser(userCredential.user);
  },

  async signup(name: string, email: string, password: string): Promise<User> {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    
    const user = mapFirebaseUser(userCredential.user);
    
    await setDoc(doc(db, 'users', user.id), {
      name,
      email,
      createdAt: new Date().toISOString(),
    });

    return user;
  },

  async logout(): Promise<void> {
    await signOut(auth);
  }
};

function mapFirebaseUser(firebaseUser: FirebaseUser): User {
  return {
    id: firebaseUser.uid,
    email: firebaseUser.email!,
    name: firebaseUser.displayName || firebaseUser.email!.split('@')[0],
  };
}