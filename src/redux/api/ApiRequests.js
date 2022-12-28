import axios from "axios";
import * as urls from "./urls";


// // users
//
// const getAllRates = async () => {
//     try {
//         const response = await axios.get(urls.GET_ALL_RATES)
//         console.log(response.data);
//     } catch (error) {
//         console.log(`getAllRates ${error}`);
//     }
// }
//
// const editProfile = async (username, last_name, third_name, email, phone) => {
//     const payload = {username, last_name, third_name, email, phone}
//     try {
//         const response = await axios.put(urls.EDIT_PROFILE, payload)
//         console.log(response.data);
//     } catch (error) {
//         console.log(`editProfile ${error}`);
//     }
// }
//
// const setUserMood = async (mood_id) => {
//     const payload = {
//         mood_id
//     }
//     try {
//         const response = await axios.post(urls.SET_MOOD, payload)
//         console.log(response.data);
//     } catch (error) {
//         console.log(`setUserMood ${error}`);
//     }
// }
//
// const checkFirstEntryEvent = async () => {
//     try {
//         const response = await axios.get(urls.CHECK_FIRST_ENTRY)
//         console.log(response.data);
//     } catch (error) {
//         console.log(`checkFirstEntryEvent ${error}`);
//     }
// }
//
// const deleteUser = async () => {
//     try {
//         const response = await axios.delete(urls.DELETE_USER)
//         console.log(response.data);
//     } catch (error) {
//         console.log(`deleteUser ${error}`);
//     }
// }
//
// // complexes
//
// const getComplexesState = async () => {
//     try {
//         const response = await axios.get(urls.COMPLEXES_STATE)
//         console.log(response.data);
//     } catch (error) {
//         console.log(`getComplexesState ${error}`);
//     }
// }
// const setComplexViewed = async (complex_id) => {
//     const payload = {
//         id: complex_id
//     }
//     try {
//         const response = await axios.put(urls.SET_COMPLEX_VIEWED, payload)
//         console.log(response.data);
//     } catch (error) {
//         console.log(`setComplexViewed ${error}`);
//     }
// }
//
// // videos
//
// const getVideosByComplexID = async (complex_id) => {
//     try {
//         const response = await axios.get(urls.ALL_VIDEOS_FOR_COMPLEX + '/' + complex_id)
//         console.log(response.data);
//     } catch (error) {
//         console.log(`getVideosByComplexID ${error}`);
//     }
// }
