"use client";

import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function SeedPage() {
  const runSeed = useMutation(api.products.seedProducts);

  const handleSeed = async () => {
    try {
      const result = await runSeed();
      console.log("Seeding complete:", result);
      alert("Database seeded successfully!");
    } catch (error) {
      console.error("Seeding failed:", error);
      alert("Seeding failed. Check console for details.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Database Seeding</h1>
      <button
        onClick={handleSeed}
        className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
      >
        Seed Database
      </button>
    </div>
  );
}
