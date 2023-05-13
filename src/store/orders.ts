import { makeAutoObservable, runInAction } from "mobx";
import { orderController } from "../../config/sdk";
import { Order } from "../sdk/storefront";

class ManagerOrders {
  orders: Order[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  load() {
    orderController
      .orderControllerGet()
      .then((_) => {
        runInAction(() => {
          this.orders = _.data;
        });
      })
      .catch((_) => {});
  }
}

export const manageOrders = new ManagerOrders();
