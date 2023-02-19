import { ReactElement } from "react";
import styled from 'styled-components';

const SidebarThemeToggleWrapper = styled.div``;

function SidebarThemeToggle():ReactElement {
    return (
        <SidebarThemeToggleWrapper>
           ThemeToggle Night Day Mode
        </SidebarThemeToggleWrapper>
    )
}

export default SidebarThemeToggle;
