import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    const productsFormat = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productsFormat;
  } catch (error) {
    console.error("Error al traer los productos:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      throw new Error("El producto no existe");
    }
  } catch (error) {
    console.error("Error al traer el producto:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};
