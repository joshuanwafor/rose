import axios from "axios";
import { AuthApi } from "../src/sdk/auth";
import { OrderControllerApi } from "../src/sdk/storefront";

export let authController = new AuthApi();
export let orderController = new OrderControllerApi();

export function configureClientSDK(token: string) {
  let config = {
    accessToken: token,
    isJsonMime: (mime: any) => {
      return true;
    },
  };

  authController = new AuthApi(config);
  orderController = new OrderControllerApi(config);

  sessionStorage.setItem("token", token);
}
