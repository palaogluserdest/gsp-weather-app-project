import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { userProfile } from '../types/types';
import { FirebaseError } from 'firebase/app';

// => Sing In with Email and Password

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Hata türü FirebaseError ise hatayı olduğu gibi fırlatıyoruz
      throw error;
    } else {
      // FirebaseError değilse genel bir hata olarak fırlatıyoruz
      throw new Error('An unexpected error occurred');
    }
  }
};

// => Sign Out

export const logOut = async (uid: string) => {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, {
    isAuth: false,
  });

  signOut(auth);
};

// => Sign Up with Email and Password
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Hata türü FirebaseError ise hatayı olduğu gibi fırlatıyoruz
      throw error;
    } else {
      // FirebaseError değilse genel bir hata olarak fırlatıyoruz
      throw new Error('An unexpected error occurred');
    }
  }
};

// => Create User to Firebase

export const createUserToDB = async (createdUser: userProfile) => {
  try {
    const useRef = doc(db, 'users', createdUser.uid);
    await setDoc(useRef, createdUser, { merge: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Hata türü FirebaseError ise hatayı olduğu gibi fırlatıyoruz
      throw error;
    } else {
      // FirebaseError değilse genel bir hata olarak fırlatıyoruz
      throw new Error('An unexpected error occurred');
    }
  }
};

// => Get User Data

export const getUserFromFS = async (uid: string) => {
  try {
    const userDocRef = doc(db, 'users', uid);
    const userRef = await getDoc(userDocRef);

    if (userRef.exists()) {
      return userRef.data() as userProfile;
    } else {
      return null;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Hata türü FirebaseError ise hatayı olduğu gibi fırlatıyoruz
      throw error;
    } else {
      // FirebaseError değilse genel bir hata olarak fırlatıyoruz
      throw new Error('An unexpected error occurred');
    }
  }
};

// => User Password Changing

export const changePassword = async (currentPassword: string, newPassword: string) => {
  const user = auth.currentUser;

  if (user) {
    try {
      // Mevcut şifreyle yeniden kimlik doğrulama
      const credential = EmailAuthProvider.credential(user.email!, currentPassword);
      await reauthenticateWithCredential(user, credential);

      // Yeni şifreyi ayarlama
      await updatePassword(user, newPassword);
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw error;
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  } else {
    throw new Error('Authenticated user was not found');
  }
};

// => User Info Changing

export const changeProfileInfo = async (firstName: string, lastName: string, email: string) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw error;
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  } else {
    throw new Error('Authenticated user was not found');
  }
};

// => Firebase Error Management

export const handleFirestoreError = (error: FirebaseError) => {
  switch (error.code) {
    case 'auth/wrong-password':
      return 'The email or password you entered is incorrect. Please try again.';

    case 'auth/user-not-found':
      return 'The email or password you entered is incorrect. Please try again.';

    case 'auth/email-already-in-use':
      return 'The email used before.';

    case 'permission-denied':
      return 'You do not have the necessary permission to perform this action.';

    case 'not-found':
      return 'The data you are looking for could not be found.';

    case 'unavailable':
      return 'The service is currently unavailable. Please try again later.';

    case 'invalid-argument':
      return 'You entered an invalid argument. Please check and try again.';

    case 'already-exists':
      return 'This data already exists.';

    case 'aborted':
      return 'The operation was aborted. Please try again.';

    case 'deadline-exceeded':
      return 'The request timed out. Please check your connection and try again.';

    case 'resource-exhausted':
      return 'Resource limit has been reached. Please try again later.';

    case 'cancelled':
      return 'The request was canceled.';

    case 'data-loss':
      return 'Data loss occurred. Please try again.';

    case 'unauthenticated':
      return 'You need to sign in to perform this action.';

    default:
      return 'An unknown error occurred. Please try again.';
  }
};
