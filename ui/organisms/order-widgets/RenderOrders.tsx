import { observer } from "mobx-react";
import { manageOrders } from "../../../src/store/orders";
import { useEffect } from "react";
import { OrderCard } from "./OrderCard";

export const RenderOrders = observer(() => {
  useEffect(() => {
    manageOrders.load();
  }, []);

  return (
    <div>
      {manageOrders.orders.map((element, index) => {
        return <OrderCard order={element} key={index} />;
      })}
    </div>
  );
});
