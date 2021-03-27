import React, {useEffect} from "react";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import {useSelector, useDispatch} from "react-redux";
import {withRouter} from 'react-router-dom';
import {writePost, updatePost} from '../../modules/write';

const WriteActionButtonsContainer = ({history}) => {
    const dispatch = useDispatch();
    const {title, content, post, postError, originalPostId} = useSelector(({write}) => ({
        title: write.title,
        content: write.content,
        post: write.post,
        postError: write.postError,
        originalPostId: write.originalPostId
    }));

    // 포스트 등록
    const onPublish = () => {
        if(originalPostId) {
            dispatch(updatePost({title, content, id: originalPostId}));
            return;
        }
        dispatch(
            writePost({
                title,
                content,
            }),
        );
    };

    // 취소
    const onCancel = () => {
        history.goBack();
    }

    // 성공 혹은 실패 시 할 작업
    useEffect(() => {
            if (post) {
                history.push(`/@${post}`);
            }
            if (postError) {
                console.log(postError);
            }
        }, [history, post, postError]);
    return (
        <WriteActionButtons
            onPublish={onPublish}
            onCancel={onCancel}
            isEdit={!!originalPostId}
        />
        );
};

export default withRouter(WriteActionButtonsContainer)
