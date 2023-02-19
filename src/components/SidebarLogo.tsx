import { ReactElement } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const SidebarLogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    font-weight: 700;
    font-size: 32px;
    padding-top: 15px;
`;

const SidebarLogoBar = styled.div`
    height: 32px;
    border-radius: 3px;
    width: 7px;
    background: #645fc7;
    margin-right: 5px;
    &:nth-of-type(2) {
        opacity: 0.8;
    }
    &:nth-of-type(3) {
        opacity: 0.6;
        margin-right: 10px;
    }
`;

function SidebarLogo():ReactElement {
    return (
        <SidebarLogoWrapper to="/" aria-label="go to home page">
            <SidebarLogoBar />
            <SidebarLogoBar />
            <SidebarLogoBar />
            kanban
        </SidebarLogoWrapper>
    )
}

export default SidebarLogo;
