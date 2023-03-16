import { ReactElement } from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import SidebarLogo from './SidebarLogo';
import SidebarBoards from './SidebarBoards';
import SidebarThemeToggle from './SidebarThemeToggle';
import HideSidebar from './HideSidebar';
import { RootState } from "../store/store";


const SidebarWrapper = styled.div<{sidebarIsOpen: boolean, nightModeIsOn: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 320px;
    background: #2c2c37;
    max-height: 100vh;
    border-right: 2px solid #363641;
    color: #838b9a;
    display: ${props => props.sidebarIsOpen ? 'flex' : 'none'};
`;

function Sidebar():ReactElement {
    const uiState = useSelector((state: RootState) => state.ui)

    return(
        <SidebarWrapper sidebarIsOpen={uiState.sidebarIsOpen} nightModeIsOn={uiState.nightModeIsOn} >
           <SidebarLogo />
           <SidebarBoards />
           <SidebarThemeToggle />
           <HideSidebar />
        </SidebarWrapper>
    )
}

export default Sidebar;
