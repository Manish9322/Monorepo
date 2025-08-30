import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Simple base URL configuration
const API_BASE_URL = "http://localhost:3000/api";

// Simple base query with authentication
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const glowvitaApi = createApi({
  reducerPath: "glowvitaApi",
  baseQuery,
  tagTypes: ["User"],

  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({ url: "/auth/me", method: "GET" }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetMeQuery,
} = glowvitaApi;
