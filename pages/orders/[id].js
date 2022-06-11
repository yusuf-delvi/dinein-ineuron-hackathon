import { useRouter } from "next/router";
import { useEffect } from "react";

export default function OrderStatusById() {
  const { query, push } = useRouter();

  useEffect(() => {
    if (!query.id) {
      push("/menu");
    }
  }, [query.id]);

  const id = query.id;

  return (
    <div>
      <h1>Order Status</h1>
      <p>
        Order {id} is <strong>{id ? "active" : "not active"}</strong>
      </p>
    </div>
  );
}
