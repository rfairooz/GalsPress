import { collection, onSnapshot } from 'firebase/firestore'; 
import { db } from '@/utils/firebase'; // Adjust the path

const fetchTextData = (onUpdate) => {
  const unsubscribe = onSnapshot(collection(db, 'texts'), (snapshot) => {
    const texts = snapshot.docs.map(doc => doc.data().content);
    onUpdate(texts); // Invoke the callback with the new data
  }, (error) => {
    console.error('Error fetching documents: ', error);
  });

  return unsubscribe; // Return the unsubscribe function
};

export default fetchTextData;