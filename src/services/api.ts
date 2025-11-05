import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Checkout, Restaurant } from '../types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/',
  }),
  endpoints: (builder) => ({
    getRestaurantItems: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
    }),
    getMenuItemsById: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    postCheckout: builder.mutation<any, Checkout>({
      query: (data) => ({
        url: 'checkout',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetRestaurantItemsQuery,
  useGetMenuItemsByIdQuery,
  usePostCheckoutMutation,
} = api
export default api
