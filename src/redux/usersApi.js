import { api } from './apiRtk';
import * as urls from "./urls";

export const userApi = api.injectEndpoints({
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
            providesTags: (_) => ['Rate']
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
            query: (complexId) => urls.ALL_VIDEOS_FOR_COMPLEX + complexId,
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
            providesTags: (_) => ['Rate']
        }),
        getMoods: builder.query({
            query: () => urls.GET_ALL_MOODS,
        }),
        getRateLink: builder.query({
            query: (rateID) => urls.GET_RATE_LINK + rateID,
        }),
        checkFirstEntry: builder.query({
            query: () => urls.CHECK_FIRST_ENTRY,
            providesTags: (_) => ['FirstEntryInfo']
        }),
        unsubscribeUser: builder.mutation({
            query: () => ({
                url: urls.GET_ALL_RATES,
                method: 'DELETE',
            }),
            invalidatesTags: (_) => ['Rate']
        }),
        editProfile: builder.mutation({
            query: (body) => ({
                url: urls.EDIT_PROFILE,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (_) => ['User']
        }),
        editPassword: builder.mutation({
            query: (body) => ({
                url: urls.CHANGE_PASSWORD,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (_) => ['User']
        }),
        setUserMood: builder.mutation({
            query: (body) => ({
                url: urls.SET_MOOD,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (_) => ['User', 'Mood']
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: urls.LOGIN,
                method: 'POST',
                body,
            }),
            invalidatesTags: (_) => ['User']
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
    useGetRateLinkQuery,
    useGetUserMoodQuery,
    useGetUserAvatarQuery,
    useCheckFirstEntryQuery,
    useEditProfileMutation,
    useEditPasswordMutation,
    useLoginUserMutation,
    useRegisterUserMutation,
    useSendSmsCodeMutation,
    useUnsubscribeUserMutation,
    useSetUserMoodMutation,
} = userApi