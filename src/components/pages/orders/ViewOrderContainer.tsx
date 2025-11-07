"use client";

import ViewOrders from "./ViewSingleOrder";

export default function ViewOrderContainer({ id }: { id: string }) {
  const fullId = `#${id}`;
  return <ViewOrders id={fullId} />;
}
