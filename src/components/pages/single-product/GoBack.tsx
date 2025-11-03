"use client";

import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer py-2 hover:underline"
    >
      Go Back
    </button>
  );
}
