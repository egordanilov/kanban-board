import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RxHamburgerMenu } from "react-icons/rx";
import { RootState } from '../store/store';

const ShowSidebarWrapper = styled.span<{sidebarIsOpen: boolean}>`
    display: ${(props) => props.sidebarIsOpen ? 'none' : 'block'};
    font-size: 24px;
    color: #fff;
    opacity: 0.4;
    position: absolute;
    top: 10px;
    left: 10px;
    &:hover {
        cursor: pointer;
        opacity: 1;
    };
`;

function ShowSidebar() {
    const uiState = useSelector((state: RootState) => state.ui)
    return (
        <ShowSidebarWrapper sidebarIsOpen={uiState.sidebarIsOpen}>
            <RxHamburgerMenu />
        </ShowSidebarWrapper>
    )
}

export default ShowSidebar;
