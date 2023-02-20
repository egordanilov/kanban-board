import { ReactElement } from "react";
import styled from "styled-components";
import SidebarLogo from './SidebarLogo';
import SidebarBoards from './SidebarBoards';
import SidebarThemeToggle from './SidebarThemeToggle';
import HideSidebar from './HideSidebar';


const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 320px;
    background: #2c2c37;
    max-height: 100vh;
    border-right: 2px solid #363641;
    color: #838b9a;
`;

function Sidebar():ReactElement {
    return(
        <SidebarWrapper>
           <SidebarLogo />
           <SidebarBoards />
           <SidebarThemeToggle />
           <HideSidebar />
        </SidebarWrapper>
    )
}

export default Sidebar;
