import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  //various provider here
  const provider = new GoogleAuthProvider();
  // google login handle here
  const logInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  // logOut handle here
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // set state changer here to see user activities
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // user sign in successfully
      } else {
        // User is signed out
        setUser(null);
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    logInWithGoogle,
    error,
    user,
    logOut,
    setError,
    isLoading,
    setIsLoading,
  };
};
export default useFirebase;
