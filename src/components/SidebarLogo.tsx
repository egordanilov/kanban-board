import { ReactElement } from "react";
import styled from "styled-components";

const SidebarLogoWrapper = styled.div`
    height: 50px;
    font-family: sans-serif;
    font-size: 32px;
`;

function SidebarLogo():ReactElement {
    return (
        <SidebarLogoWrapper>
            kanban
        </SidebarLogoWrapper>
    )
}

export default SidebarLogo;
