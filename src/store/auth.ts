import { makeAutoObservable, observable, runInAction } from "mobx";
import {
  LoginDto,
  AuthApi,
  AuthenticatedUser,
  UserPublicData,
  SignUpDto,
} from "../sdk/auth";
import { authController, configureClientSDK } from "../../config/sdk";

class AuthManager {
  status: "initial" | "authenticated" = "initial";
  profile_status: "initial" | "loaded" | "failed" = "initial";
  profile: UserPublicData | any = {};
  token: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    // startNavigationProgress();
    try {
      const res = await new AuthApi().authControllerLogin({ password, email });
      const data: AuthenticatedUser = res.data;
      console.log(res);
      // resetNavigationProgress();
      this.initToken(data.token);
    } catch (err) {
      // resetNavigationProgress();
    }

    // resetNavigationProgress();
  }

  async register(payload: SignUpDto) {
    // startNavigationProgress();
    try {
      const res = await new AuthApi().authControllerSignup({
        ...payload,
      });

      const data: AuthenticatedUser = res.data;
      // resetNavigationProgress();
      this.initToken(data.token);
    } catch (err) {
      // resetNavigationProgress();
    }
    // resetNavigationProgress();
  }

  async loadProfile() {
    try {
      const res = await authController.authControllerGetIndividualProfile();
      const data: UserPublicData = res.data.user;
      console.log("loaded profile", data);
      runInAction(() => {
        this.profile = data;
        this.profile_status = "loaded";
      });
    } catch (err) {
      console.log(err, " clean ");
      runInAction(() => {
        this.profile_status = "failed";
      });
    }
  }

  async initToken(token: string) {
    try {
      configureClientSDK(token ?? "");
      runInAction(() => {
        this.token = token as string;
        this.loadProfile();
      });
    } catch (err) {}
  }

  async init() {
    try {
      let token = sessionStorage.getItem("token");
      if (token) {
        this.initToken(token);
      }
    } catch (err) {}
  }

  logout() {
    authManager.status = "initial";
    authManager.profile_status = "initial";
    authManager.profile = {};
    sessionStorage.clear();
  }
}

export const authManager = new AuthManager();
