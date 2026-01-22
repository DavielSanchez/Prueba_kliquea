import { create } from "zustand";

const useGithubStore = create((set) => ({
  user: null,
  repos: [],
  loading: false,
  error: null,

  // Servicio para llamar a la API
  fetchGithubData: async () => {
    set({ loading: true, error: null });

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_URL}/github-info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      set({
        user: data.user_crudo,
        repos: data.repos_crudo,
        loading: false,
      });
    } catch (err) {
      set({
        error: err.message || "No se pudo conectar con el servidor",
        loading: false,
      });
    }
  },
}));

export default useGithubStore;
