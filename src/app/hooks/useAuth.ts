import { useEffect, useState } from 'react';
import { userProfile } from '../types/types';
import useSWR, { mutate } from 'swr';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../libs/firebase';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useAuth = () => {
  const [userData, setUserData] = useState<userProfile | null>(null);

  const { data, error, isLoading } = useSWR('/api/auth/get-user', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (data?.user?.uid) {
      const userDocRef = doc(db, 'users', data.user.uid);

      const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
        if (snapshot.exists()) {
          // Update SWR cache and state with new data
          mutate('/api/auth/get-user');
          setUserData(snapshot.data() as userProfile);
        }
      });

      return () => unsubscribe();
    }
  }, [data?.user?.uid]);

  return { userData, error, isLoading };
};
