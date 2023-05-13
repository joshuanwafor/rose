import { makeAutoObservable, observable, runInAction } from "mobx";
import {
  collection,
  setDoc,
  getFirestore,
  doc,
  deleteDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { OrderItem, Product } from "../sdk/storefront";
import Notiflix from "notiflix";
import { authManager } from "./auth";

const db = getFirestore();

class CartManager {
  cart: OrderItem[];

  constructor() {
    this.cart = [];
    makeAutoObservable(this, { cart: observable });
  }

  getCollection() {
    return collection(db, `test/cart`);
  }
  async loadCart() {
    // load cart here
    //@ts-ignore
    if (authManager.profile?.id !== undefined) {
      //@ts-ignore
      let snapshot = await getDocs(
        //@ts-ignore
        query(collection(db, `users/${authManager.profile.id}/cart`))
      );

      let items = snapshot.docs.map((_) => _.data());
      console.log(items);
      runInAction(() => {
        //@ts-ignore
        this.cart = items;
      });
    }
  }

  async setDocument(id: string, payload: any) {
    //@ts-ignore
    if (authManager.profile?.id !== undefined) {
      console.log("setting cart item online");
      //@ts-ignore
      await setDoc(
        //@ts-ignore
        doc(db, `users/${authManager.profile.id}/cart/${id}`),
        payload
      );
    }
  }

  async deleteDocument(id: string) {
    //@ts-ignore
    if (authManager.profile?.id !== undefined) {
      //@ts-ignore
      await deleteDoc(
        //@ts-ignore
        doc(db, `users/${authManager.profile.id}/cart/${id}`)
      );
    }
  }

  async clearDocuments() {
    //@ts-ignore
    if (authManager.user?.uid !== undefined) {
      //@ts-ignore
      (
        await getDocs(
          //@ts-ignore
          query(collection(db, `users/${authManager.profile.id}/cart`))
        )
      ).docs.forEach(async (_) => {
        //@ts-ignore
        await deleteDoc(_.ref);
      });
    }
  }

  async addItem(item: Product) {
    let payload = {
      //@ts-ignore
      product_id: item._id ?? "",
      amount: item.sale_price,
      quantity: 1,
      image: item.image ?? "",
      product_name: item.title,
      cost: item.cost_price,
      product_variant_id: "",
      //@ts-ignore
      business_id: item?.org_id,
    };

    // verify that product is not in cart already
    //@ts-ignore
    if (this.cart.find((element) => element.product_id == item._id)) {
      Notiflix.Notify.info(`${item.title} in cart already`);
      return;
    }
    try {
      //@ts-ignore
      this.setDocument(item.id, payload);
      Notiflix.Notify.success(`Added ${item.title} to cart`);
      runInAction(() => {
        this.cart.push(payload);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  getCartTotal() {
    let total = this.cart.reduce((a, b) => {
      return a + b.amount * b.quantity;
    }, 0);
    return total;
  }

  async updateItem(item: OrderItem) {
    let _tempList = [...this.cart];
    let _itemIndex = _tempList.findIndex(
      (element) => element.product_id == item.product_id
    );

    this.setDocument(item.product_id, { quantity: item.quantity });

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
    // deleteDoc(doc(db, `users/joshua/cart/${id}`));
    this.deleteDocument(id);
    runInAction(() => {
      this.cart = this.cart.filter((element) => element.product_id !== id);
    });
  }

  async clear() {
    Notiflix.Loading.dots();
    await this.clearDocuments();
    runInAction(async () => {
      this.cart = [];
    });
  }
}

export const cartManager = new CartManager();
