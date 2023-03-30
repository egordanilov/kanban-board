import React, { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../store/taskSlice';
import styled from 'styled-components';
import Canvas from '../components/Canvas';
import Sidebar from '../components/Sidebar';
import AddNewTask from '../components/AddNewTask';

const BoardWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #21212c;
    height: 100vh;
`;

function Board():ReactElement {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    return (
        <BoardWrapper>
            <Sidebar />
            <Canvas />
            <AddNewTask />
        </BoardWrapper>
    )
}

export default Board;
