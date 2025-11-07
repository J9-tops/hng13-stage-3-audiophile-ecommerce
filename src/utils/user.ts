export function getUserId(): string | null {
  if (typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem("userId");
}

export function requireUserId(): string {
  const userId = getUserId();
  if (!userId) {
    throw new Error("User ID not found. Please refresh the page.");
  }
  return userId;
}

export function generateUserId(): string {
  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  return `${month}${day}${hours}${minutes}${seconds}-${milliseconds}`;
}
