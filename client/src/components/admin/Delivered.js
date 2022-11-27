import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import DeliverTable from "./DeliverTable";

function Delivered() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [deliVered, setDelivered] = useState([]);

  useEffect(() => {
    const getDelivered = async () => {
      const res = await axios.get("/cart/show_delivered", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDelivered(res.data.delivered);
    };
    getDelivered();
  }, [token]);

  return (
    <>
      {deliVered.map((deliver) => {
        return deliver.products.map((item, index) => {
          return (
            <DeliverTable
              key={index}
              item={item}
              amount={deliver.amount}
              status={deliver.status}
              user={deliver.user}
              updated={deliver.updatedAt}
            />
          );
        });
      })}
    </>
  );
}

export default Delivered;
