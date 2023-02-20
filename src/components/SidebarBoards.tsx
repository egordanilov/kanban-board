import { ReactElement } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaRegPlusSquare, 
    FaRegClipboard } from 'react-icons/fa';

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
    return (
        <SidebarBoardsWrapper>
            <SidebarBoardsHeader>All Boards (8)</SidebarBoardsHeader>
            <BoardListElement active={true}>
                <FaRegClipboard />
                <span>Platform launch</span>
            </BoardListElement>
            <BoardListElement active={false}>
                <FaRegClipboard />
                <span>Marketing plan</span>
            </BoardListElement>
            <BoardListElement active={false}>
                <FaRegClipboard />
                <span>Roadmap</span>
            </BoardListElement>
            <SidebarCreateNewBoard to="/board/add-task" aria-label="Create a new board">
                <FaRegPlusSquare />
                <span>Create New Board</span>
            </SidebarCreateNewBoard>
        </SidebarBoardsWrapper>
    )
}

export default SidebarBoards;
