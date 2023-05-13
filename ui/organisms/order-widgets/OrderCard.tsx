import { useEffect, useState } from "react";
import { Order } from "../../../src/sdk/storefront";
import { orderController } from "../../../config/sdk";
import { Button } from "react-bootstrap";
import { PaystackButton } from "react-paystack";
import Notiflix from "notiflix";
import { pageDataManager } from "../../../src/store/pageData";

export function OrderCard({ order }: { order: Order }) {
  let [payPayload, setPayPayload] = useState();
  let [show, setShow] = useState(false);

  console.log(pageDataManager.site_meta);

  return (
    <div className="border p-2 mb-2" style={{ borderRadius: 4 }}>
      <div className="d-flex justify-content-between">
        <p>
          <></>
          {new Date(order.created_at).toDateString()}
        </p>
        <Pay order={order} />
      </div>
      <div
        className="collapse multi-collapse"
        //@ts-ignore
        id={`#multiCollapse${order.id}`}
      >
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  );
}

function Pay({ order }: { order: Order }) {
  let [payPayload, setPayPayload] = useState<any>();

  function load() {
    if (pageDataManager.site_meta.can_accept_paystack == false) {
      return;
    }
    //@ts-ignore
    orderController.orderControllerMakePayment(order.id).then((_) => {
      console.log(_.data);
      setPayPayload(_.data);
    });
  }

  useEffect(() => {
    load();
  }, []);

  if (pageDataManager.site_meta.can_accept_paystack == false) {
    return <div></div>;
  }

  if (payPayload == undefined) {
    return;
  }

  if (order.payment_status == "COMPLETED") {
    return;
  }

  return (
    <PaystackButton
      {...payPayload}
      onSuccess={() => {
        Notiflix.Notify.success(
          "Your payment has been received and would be processed in the background"
        );
      }}
      children={<Button>Pay</Button>}
    />
  );
}
