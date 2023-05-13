import axios from "axios";
import { AuthApi } from "../src/sdk/auth";

export let authController = new AuthApi();

export function configureClientSDK(token: string) {
  let config = {
    accessToken: token,
    isJsonMime: (mime: any) => {
      return true;
    },
  };

  authController = new AuthApi(config);

  sessionStorage.setItem("token", token);
}
