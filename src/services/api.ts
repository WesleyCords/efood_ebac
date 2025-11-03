import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../types'

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
  }),
})

export const { useGetRestaurantItemsQuery, useGetMenuItemsByIdQuery } = api
export default api
