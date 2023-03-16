import React, { FC, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RxHamburgerMenu } from "react-icons/rx";
import { RootState } from '../store/store';
import { openSidebar } from '../store/uiSlice';

const ShowSidebarWrapper = styled.span<{sidebarIsOpen: boolean}>`
    display: ${(props) => props.sidebarIsOpen ? 'none' : 'block'};
    font-size: 24px;
    color: #fff;
    opacity: 0.4;
    position: absolute;
    top: 24px;
    left: 10px;
    &:hover {
        cursor: pointer;
        opacity: 1;
    };
`;

function ShowSidebar() {
    const uiState = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();
    return (
        <ShowSidebarWrapper
            sidebarIsOpen={uiState.sidebarIsOpen}
            onClick={() => {dispatch(openSidebar())}}
        >
            <RxHamburgerMenu />
        </ShowSidebarWrapper>
    )
}

export default ShowSidebar;
