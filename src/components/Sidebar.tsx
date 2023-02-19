import { ReactElement } from "react";
import styled from "styled-components";
import SidebarLogo from './SidebarLogo';
import SidebarBoards from './SidebarBoards';
import SidebarThemeToggle from './SidebarThemeToggle';


const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    justify-content: space-between;
    width: 320px;
    background: #2c2c37;
    height: 100vh;
    border-right: 2px solid #363641;
`;

function Sidebar():ReactElement {
    return(
        <SidebarWrapper>
           <SidebarLogo />
           <SidebarBoards />
           <SidebarThemeToggle />
        </SidebarWrapper>
    )
}

export default Sidebar;
