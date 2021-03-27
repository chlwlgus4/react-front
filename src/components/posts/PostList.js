import React from 'react';
import styled from 'styled-components';
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import {Link} from 'react-router-dom';

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({post}) => {
    const {createdDate, title, id} = post;

    return (
        <PostItemBlock>
            <h2>
                <Link to={`/@${id}`}>{title}</Link>
            </h2>
            <SubInfo createdDate={createdDate}/>
        </PostItemBlock>
    );
};

const PostList = ({posts, loading, error}) => {
    if (error) {
        return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
    }

    if (posts && posts.length === 0) {
        return (
            <PostListBlock>게시글이 존재하지않습니다.</PostListBlock>
        );
    }
    return (
        <PostListBlock>
            {/*로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌*/}
            {!loading && posts && (
                <div>
                    {posts.map(post => (
                        <PostItem post={post} key={post.id}/>
                    ))}
                    <hr />
                </div>
            )}
        </PostListBlock>
    );
};

export default PostList;
