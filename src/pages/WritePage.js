import React from 'react';
import EditorContainer from "../containers/write/EditorContainer";
import Responsive from "../components/common/Responsive";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer/>
            <WriteActionButtonsContainer />
        </Responsive>
    );
}

export default WritePage;