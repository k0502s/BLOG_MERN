import React, { Fragment, useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { POSTS_LOADING_REQUEST } from '../../redux/types'
import { Helmet } from "react-helmet";
import { Row, Alert } from "reactstrap";
import { GrowingSpinner } from "../../components/spinner/Spinner";
import PostCardOne from "../../components/post/PostcardOne"

const PostCardList = () => {

    const { posts } = useSelector((state) => state.post)
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch({
           type: POSTS_LOADING_REQUEST
       })
    }, [dispatch])

    return (
        <Fragment>
            <Helmet title='Home' />
            <Row>
                {posts ? <PostCardOne posts={posts} /> : GrowingSpinner}
            </Row>
        </Fragment>
    );
};

export default PostCardList

