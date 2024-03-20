import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CLOTHING_API_KEY = 'https://fakestoreapi.com/products';


interface Clothing {
    id:string;
    name:string;
    image:{
        url:string;
    }
}

   export const apiSlice = createApi({

        reducerPath:'api',
        baseQuery:fetchBaseQuery({
            baseUrl:'https://fakestoreapi.com/products',
            prepareHeaders(headers){
                // headers.set('x-api-key', CLOTHING_API_KEY);

                return headers;
            }
        }),
        endpoints(builder){
            return {
                fetchClothings:builder.query<Clothing[], number|void>({
                    query(limit=10){
                        return`/products?limit=${limit}`;
                    },
                }),
                
            };
        },

    });
  
export const { useFetchClothingsQuery } =apiSlice;

