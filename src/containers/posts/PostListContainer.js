import React, {useEffect} from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PostList from '../../components/posts/PostList';
import {listPosts} from '../../modules/posts';
import Button from "../../components/common/Button";
import styled from "styled-components";
import Responsive from "../../components/common/Responsive";

const WriteBtnBlock = styled(Responsive)`
    height: 1rem;
    margin-top: 2rem;
`;

const PostListContainer = ({location, match}) => {
    const dispatch = useDispatch();
    const {posts, error, loading} = useSelector(
        ({posts, loading}) => ({
            posts: posts.posts,
            error: posts.error,
            loading: loading['posts/LIST_POSTS'],
        }),
    );
    useEffect(() => {
        const {page} = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(listPosts({page}));
    }, [dispatch, location.search, match.params]);

    return (
        <>
            <WriteBtnBlock>
                <Button style={{float: 'right'}} cyan to={"/write"}>새 글 작성하기</Button>
            </WriteBtnBlock>
            <PostList
                loading={loading}
                error={error}
                posts={posts}
                showWriteButton
            />
        </>
    );
};

export default withRouter(PostListContainer);
