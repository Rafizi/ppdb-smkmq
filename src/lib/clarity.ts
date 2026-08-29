import Clarity from "@microsoft/clarity";

let isInitialized = false;

export function initClarity() {
  if (typeof window === "undefined" || isInitialized) {
    return;
  }

  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (!projectId || projectId === "yourProjectId") {
    console.warn("[Clarity] VITE_CLARITY_PROJECT_ID belum diset di .env");
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
