import { makeAutoObservable, observable, runInAction } from "mobx";
import { OrderItem, Product } from "../sdk/storefront";

class CartManager {
  cart: OrderItem[];

  constructor() {
    this.cart = [];
    makeAutoObservable(this, { cart: observable });
  }

  loadCart() {
    // load cart here
  }

  addItem(item: Product) {
    // verify that product is not in cart already
    //@ts-ignore
    if (this.cart.find((element) => element.product_id == item._id)) {
      return;
    }

    runInAction(() => {
      this.cart.push({
        //@ts-ignore
        product_id: item._id ?? "",
        amount: item.sale_price,
        quantity: 1,
        image:
          item.image ??
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png",
        product_name: item.title,
        cost: item.cost_price,
        product_variant_id: "",
      });

      //   showMessage({
      //     message: `Added "${item.title} already exits in cart" to list`,
      //     backgroundColor: 'black',
      //     position:"center"
      //   });
    });
  }

  getCartTotal() {
    let total = this.cart.reduce((a, b) => {
      return a + b.amount * b.quantity;
    }, 0);
    return total;
  }

  updateItem(item: OrderItem) {
    let _tempList = [...this.cart];
    let _itemIndex = _tempList.findIndex(
      (element) => element.product_id == item.product_id
    );
    _tempList[_itemIndex].quantity = item.quantity;

    runInAction(() => {
      this.cart = [..._tempList];
    });
  }

  addItemCount(item: OrderItem) {
    let _item = { ...item, quantity: item.quantity + 1 };
    this.updateItem(_item);
  }
  subtractItemCount(item: OrderItem) {
    if (item.quantity == 1) return;
    let _item = { ...item, quantity: item.quantity - 1 };
    this.updateItem(_item);
  }

  removeItem(id: string) {
    runInAction(() => {
      this.cart = this.cart.filter((element) => element.product_id !== id);
    });
    // showMessage({
    //   message: `Removed item from list`,
    //   backgroundColor: 'black',
    // });
  }

  clear() {
    runInAction(() => {
      this.cart = [];
    });
  }
}

export const cartManager = new CartManager();
