import { makeAutoObservable, runInAction } from "mobx";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  UserCredential,
  User,
  signOut,
} from "firebase/auth";

class AuthManager {
  user: {} = {};
  constructor() {
    makeAutoObservable(this);
  }

  init() {
    if (getAuth().currentUser != null) {
      this.setCredentials(getAuth().currentUser);
    }
  }

  async signin() {
    try {
      let provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
     // getAuth().setPersistence({ type: "LOCAL" });
      let credentials = await signInWithPopup(getAuth(), provider);
      this.setCredentials(credentials.user);
    } catch (err) {
      console.log(err)
    }
  }

  async signout() {
    await signOut(getAuth());
    runInAction(() => {
      this.user = {};
    });
  }

  setCredentials(user: User) {
    runInAction(() => {
      this.user = {
        display_name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
      };
    });
  }
}

export const authManager = new AuthManager();
