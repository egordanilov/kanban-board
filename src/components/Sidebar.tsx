import { ReactElement } from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div`
    width: 320px;
    background: #2c2c37;
    height: 100vh;
    border-right: 2px solid #363641;
`;

function Sidebar():ReactElement {
    return(
        <SidebarWrapper>
            Sidebar
        </SidebarWrapper>
    )
}

export default Sidebar;
