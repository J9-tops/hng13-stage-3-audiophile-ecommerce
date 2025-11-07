/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "convex/react";
import { DollarSign, Hash, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { api } from "../../../../convex/_generated/api";
import GoBack from "../single-product/GoBack";

type Props = {
  userId: string;
};

export default function AllOrders({ userId }: Props) {
  const orders = useQuery(api.orders.getByUserId, { userId });

  if (orders === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-b-4 border-orange-600"></div>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-lg rounded-xl bg-white p-8 text-center shadow-2xl">
          <div className="mb-6 text-6xl text-orange-500">📦</div>
          <h2 className="mb-3 text-3xl font-extrabold text-gray-900">
            No Orders Found
          </h2>
          <p className="text-gray-600">You haven’t placed any orders yet.</p>
        </div>
      </div>
    );
  }

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 lg:p-12">
      <div className="mx-auto max-w-277.5">
        <GoBack />
        <h1 className="mt-6 mb-8 text-3xl font-extrabold text-gray-900">
          Your Orders
        </h1>

        <div className="space-y-6">
          {orders.map((order) => {
            // const formattedDate = new Date(order.orderDate).toLocaleString(
            //   "en-US",
            //   {
            //     weekday: "long",
            //     year: "numeric",
            //     month: "long",
            //     day: "numeric",
            //     hour: "numeric",
            //     minute: "2-digit",
            //     hour12: false,
            //   },
            // );

            return (
              <div
                key={order._id}
                className="w-full rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <Link
                  href={`orders/${order.orderNumber.replaceAll("#", "").toLowerCase()}`}
                >
                  <div className="mb-4 flex flex-col border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-2">
                      <Hash className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold text-gray-800">
                        {order.orderNumber}
                      </span>
                    </div>
                    {/* <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600 sm:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{formattedDate}</span>
                    </div> */}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-gray-800">
                        <Package className="mr-1 inline-block h-5 w-5 text-orange-500" />
                        {order.items.length}{" "}
                        {order.items.length === 1 ? "item" : "items"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.customerName} — {order.shippingAddress.city}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center space-x-3 sm:mt-0">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusStyle(order.status)}`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                      <div className="flex items-center font-semibold text-gray-800">
                        <DollarSign className="h-4 w-4 text-orange-600" />
                        {order.total.toLocaleString("en-US")}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <div className="flex flex-wrap gap-3">
                      {order.items
                        .slice(0, 3)
                        .map((item: any, index: number) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 rounded-md bg-gray-50 px-3 py-2 text-sm"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={40}
                              height={40}
                              className="h-10 w-10 rounded-md object-cover"
                            />
                            <div>
                              <p className="font-medium text-gray-800">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      {order.items.length > 3 && (
                        <span className="self-center text-sm text-gray-500">
                          +{order.items.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
