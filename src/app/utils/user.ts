import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../libs/firebase';
import { FirebaseError } from 'firebase/app';

export const addFavorite = async (location: string, userUid: string) => {
  try {
    const userRef = doc(db, 'users', userUid);
    await updateDoc(userRef, {
      favorites: arrayUnion(location.toLocaleUpperCase('tr')),
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred - Add');
    }
  }
};

export const removeFavorite = async (location: string, userUid: string) => {
  try {
    const userRef = doc(db, 'users', userUid);
    await updateDoc(userRef, {
      favorites: arrayRemove(location.toLocaleUpperCase('tr')),
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred - remove');
    }
  }
};

export const checkFavorite = async (location: string, userUid: string) => {
  try {
    const userRef = doc(db, 'users', userUid);

    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      return userData.favorites.includes(location.toLocaleUpperCase('tr'));
    } else {
      return false;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred - Check');
    }
  }
};
