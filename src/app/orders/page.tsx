"use client";

import ViewOrders from "@/components/pages/orders/View";
import { getUserId } from "@/utils/user";

export default function OrderConfirmation() {
  const userId = getUserId();
  console.log(userId);
  if (!userId) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
          <div className="mb-4 text-5xl text-red-500">⚠️</div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Orders Not Found
          </h2>
          <p className="text-gray-600">
            We couldn&apos;t find an order for this user. Please refresh the
            page and send an order
          </p>
        </div>
      </div>
    );
  }

  return <ViewOrders userId={userId} />;
}
