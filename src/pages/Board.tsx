import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Canvas from '../components/Canvas';
import Sidebar from '../components/Sidebar';

const BoardWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #21212c;
    height: 100vh;
`;

function Board():ReactElement {
    return (
        <BoardWrapper>
            <Sidebar />
            <Canvas />
        </BoardWrapper>
    )
}

export default Board;
