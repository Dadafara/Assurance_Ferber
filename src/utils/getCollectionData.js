import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

// Function to get collection data and size
export const getCollectionAllData = async (
  collectionName,
  user,
  nameSearchField,
  searchQuery,
) => {
  try {
    let data = [];
    let querySnapshot;
    // If query user is provided, search for documents that match
    if (user !== "") {
      if (searchQuery !== "") {
        querySnapshot = await getDocs(
          query(
            collection(db, collectionName),
            where("userId", "==", user),
            where(nameSearchField, "==", searchQuery),
          ),
        );
        querySnapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });

        return { data: data, size: data.length };
      } else {
        querySnapshot = await getDocs(
          query(collection(db, collectionName), where("userId", "==", user)),
        );
        querySnapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });

        return { data: data, size: data.length };
      }
    } else {
      if (searchQuery !== "") {
        querySnapshot = await getDocs(
          query(
            collection(db, collectionName),
            where(nameSearchField, "==", searchQuery),
          ),
        );
        querySnapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });

        return { data: data, size: data.length };
      } else {
        querySnapshot = await getDocs(query(collection(db, collectionName)));
        querySnapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });

        return { data: data, size: data.length };
      }
    }

    // Retrieve all documents and store them in an array
  } catch (error) {
    console.log(error);
  }
};

// Function to get collection data by id and size
export const getCollectionById = async (collectionName, documentId) => {
  try {
    const q = doc(db, collectionName, documentId);
    const get = await getDoc(q);
    return { id: get.id, ...get.data(), exists: get.exists };
  } catch (error) {
    console.log(error);
  }
};
