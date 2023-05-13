import Notiflix from "notiflix";
import { orderController } from "../config/sdk";

export function useCheckout() {
  async function checkout(branch: any, payload: any, delivery_method: string) {
    Notiflix.Loading.pulse();
    try {
      let response = await orderController.orderControllerPublish({
        branch_id: branch.id,
        org_id: branch.org_id,
        ...payload,
        payment_method: "PAYSTACK",
        //@ts-ignore
        delivery_method: delivery_method,
      });
      Notiflix.Report.success(
        "Order Submitted",
        "Your order have been created successfully.",
        "Close",
        () => {
          window.open("/account", "_parent");
        }
      );
      console.log(response);
      Notiflix.Loading.remove();
    } catch (err) {
      console.log(err);
      Notiflix.Loading.remove();
    }
  }

  return { checkout };
}
