import axios, { AxiosError } from "axios";

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number | undefined,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api/v1",
  timeout: 10_000,
  headers: { Accept: "application/json" },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const requestError = error as AxiosError<{ detail?: string }>;
      const message = requestError.response?.data?.detail ??
        (requestError.code === "ECONNABORTED"
          ? "The request timed out. Please try again."
          : "Unable to reach the ZapDocs service.");
      return Promise.reject(new ApiError(message, requestError.response?.status));
    }
    return Promise.reject(error);
  },
);
