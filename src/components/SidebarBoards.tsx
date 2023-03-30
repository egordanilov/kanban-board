import { ReactElement } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setActiveBoard } from '../store/taskSlice';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaRegPlusSquare, 
    FaRegClipboard } from 'react-icons/fa';
import { RootState } from "../store/store";

const SidebarBoardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100vh - 100px);
    margin-top: 30px;
    width: 100%;
`;
const SidebarBoardsHeader = styled.div`
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 10px;
    padding-left: 20px;
    margin-bottom: 15px;
`;

const SidebarCreateNewBoard = styled(Link)`
    color: #645fc7;
    display: flex;
    margin-top: 10px;
    padding-left: 20px;
    span {
        margin-left: 7px;
    }
`;

interface BoardListElementProps {
    active: boolean;
}

const BoardListElement = styled.button<BoardListElementProps>`
    width: 90%;
    color: white;
    border: none;
    text-align: left;
    padding-left: 20px;
    height: 44px;
    font-size: 16px;
    background: ${(props) => props.active ? '#645fc7' : 'inherit'};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-transform: capitalize;

    &:hover {
        cursor: ${(props) => props.active ? 'initial' : 'pointer'};
        background: #645fc7;
    }

    span {
        margin-left: 7px;
    }
`;


function SidebarBoards():ReactElement {
    const dispatch = useDispatch();
    const activeBoard = useSelector((state: RootState) => state.task.activeBoard);
    const tasks = useSelector((state: RootState) => state.task.tasks)

    const boardListArray = tasks.map((item) => item.board_name);
    const uniqueBoardListArray = [...new Set(boardListArray)];
    return (
        <SidebarBoardsWrapper>
            <SidebarBoardsHeader>All Boards ({uniqueBoardListArray.length})</SidebarBoardsHeader>
            {uniqueBoardListArray.map((boardName) => {
                return (
                    <BoardListElement active={boardName === activeBoard} onClick={() => {dispatch(setActiveBoard(boardName))}}>
                        <FaRegClipboard />
                        <span>{boardName}</span>
                    </BoardListElement>
                )
            })}
            
            <SidebarCreateNewBoard to="/board/add-task" aria-label="Create a new board">
                <FaRegPlusSquare />
                <span>Create New Board</span>
            </SidebarCreateNewBoard>
        </SidebarBoardsWrapper>
    )
}

export default SidebarBoards;
