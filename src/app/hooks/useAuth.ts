import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../libs/firebase';
import { getUserFromFS } from '../libs/user';
import { userProfile } from '../types/types';
import { FirebaseError } from 'firebase/app';

export const useAuth = () => {
  const [userData, setUserData] = useState<userProfile | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const fetchedUser = await getUserFromFS(user.uid);
          setUserData(fetchedUser);
        } else {
          setUserData(null);
        }
      });

      return () => unsubscribe();
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error);
      } else {
        setError(new Error('An unexpected error occurred'));
      }
    }
  }, [userData?.favorites]);

  return { userData, error };
};
