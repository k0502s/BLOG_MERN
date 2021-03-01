import {
    POSTS_LOADING_REQUEST,
    POSTS_LOADING_SUCCESS,
    POSTS_LOADING_FAILURE,
    POSTS_WRITE_REQUEST,
    POSTS_WRITE_SUCCESS,
    POSTS_WRITE_FAILURE,
    POST_DETAIL_LOADING_FAILURE,
    POST_DETAIL_LOADING_SUCCESS,
    POST_DETAIL_LOADING_REQUEST,
    POST_EDIT_LOADING_REQUEST,
    POST_EDIT_LOADING_SUCCESS,
    POST_EDIT_LOADING_FAILURE,
    POST_EDIT_UPLOADING_REQUEST,
    POST_EDIT_UPLOADING_SUCCESS,
    POST_EDIT_UPLOADING_FAILURE,
    CATEGORY_FIND_REQUEST,
    CATEGORY_FIND_SUCCESS,
    CATEGORY_FIND_FAILURE,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
  } from "../types"; 

const initialState = {
    isAuthenticated: null,
    posts: [],
    postDetail: "",
    postCount: "",
    loading: false,
    error: "",
    creatorId: "",
    categoryFindResult: "",
    title: "",
    searchBy: "",
    searchResult: "",
  };

export default function(state = initialState, action) {
    switch(action.type) {
        case POSTS_LOADING_REQUEST:
            return {
                ...state,
                posts: [],
                loading: true,
            }
        case POSTS_LOADING_SUCCESS:
             return {
                ...state,
                posts: [...state.posts, ...action.payload],
                loading: false,
                }
        case POSTS_LOADING_FAILURE:
            return {
                ...state,
                loading: false,
                 }  
        default:
            return state;      
    }
}