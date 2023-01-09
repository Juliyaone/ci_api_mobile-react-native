import * as urls from "../redux/urls";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {getTokenFromStorage} from "../auth/tokenStorage";


export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['MetaInfo', 'Videos', 'Rate', 'User', 'Complexes', 'NOT_FOUND', 'UNKNOWN_ERROR'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: urls.BASE_URL,
            prepareHeaders: async (headers) => {
                const token = await getTokenFromStorage()
                if (token) {
                    headers.set('authorization', `Bearer ${token}`);
                }
                return headers;
            },
        }),

    endpoints: (builder) => ({
        getMetaInfo: builder.query({
            query: () => urls.META_INFO,
            providesTags: (_) => ['MetaInfo']
        }),
        getMe: builder.query({
            query: () => urls.GET_ME,
            providesTags: (_) => ['User']
        }),
        getUserRate: builder.query({
            query: () => urls.GET_USER_RATE,
            // providesTags: (result, error, id) =>  result
            //         ? [{type: 'Post', id}]
            //         : error
            //             ? ['NOT_FOUND']
            //             : ['UNKNOWN_ERROR'],
        }),
        getUserMood: builder.query({
            query: () => urls.GET_USER_MOOD,
            providesTags: (_) => ['Mood']
        }),
        getUserAvatar: builder.query({
            query: () => urls.GET_USER_AVATAR,
            providesTags: (_) => ['Avatar']
        }),
        getVideos: builder.query({
            query: (complexId) => urls.ALL_VIDEOS_FOR_COMPLEX + `/${complexId}`,
            providesTags: result => result
                ? [
                    ...result.map(({id}) => ({type: 'Videos', id})),
                    {type: 'Videos', id: 'LIST'},
                ]
                : [{type: 'Videos', id: 'LIST'}],
        }),
        getComplexes: builder.query({
            query: () => urls.COMPLEXES_STATE,
            providesTags: (_) => ['Complexes']
        }),
        getRates: builder.query({
            query: () => urls.GET_ALL_RATES,
        }),
        getMoods: builder.query({
            query: () => urls.GET_ALL_MOODS,
        }),
        editProfile: builder.mutation({
            query: (body) => ({
                url: urls.EDIT_PROFILE,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (_) => ['User']
        }),
        setVideoViewed: builder.mutation({
            query: (body) => ({
                url: urls.EDIT_PROFILE,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [{ type: 'Videos', id: 'LIST' }]
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: urls.LOGIN,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User']
        }),
        sendSmsCode: builder.mutation({
            query: (body) => ({
                url: urls.VERIFICATION_SMS_CODE,
                method: 'POST',
                body,
            }),
        }),
        registerUser: builder.mutation({
            query: (body) => ({
                url: urls.REGISTRATION,
                method: 'POST',
                body: {
                    ...body,
                    test: true  // TODO удалить после тестов
                },
            }),
        }),
    }),
})

export const {
    useGetMetaInfoQuery,
    useGetVideosQuery,
    useGetComplexesQuery,
    useGetRatesQuery,
    useGetMoodsQuery,
    useGetMeQuery,
    useGetUserRateQuery,
    useGetUserMoodQuery,
    useGetUserAvatarQuery,
    useEditProfileMutation,
    useLoginUserMutation,
    useRegisterUserMutation,
    useSendSmsCodeMutation,
} = userApi
