import Clarity from "@microsoft/clarity";


let isInitialized = false;

export function initClarity() {
  if (typeof window === "undefined" || isInitialized) {
    return;
  }

  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID || "y9rb9l3bd9";

  if (!projectId) {
    console.warn("[Clarity] VITE_CLARITY_PROJECT_ID belum diset");
    return;
  }

  try {
    Clarity.init(projectId);
    isInitialized = true;
  } catch (error) {
    console.error("[Clarity] Gagal inisialisasi:", error);
  }
}

export { Clarity };
