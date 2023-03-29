import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ShowSidebar from "./ShowSidebar";
import CanvasHeader from "./CanvasHeader";
import CanvasColumns from "./CanvasColumns";
import styled from "styled-components";

const CanvasWrapper = styled.div<{sidebarIsOpen: boolean, nightModeIsOn: boolean}>`
    width: ${props => props.sidebarIsOpen ? 'calc(100vw - 320px)' : '100vw'};
    background: #21212c;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
`;

function Canvas():ReactElement {
    const uiState = useSelector((state: RootState) => state.ui);
    return(
        <CanvasWrapper sidebarIsOpen={uiState.sidebarIsOpen} nightModeIsOn={uiState.nightModeIsOn}>
            <ShowSidebar />
            <CanvasHeader />
            <CanvasColumns />
        </CanvasWrapper>
    )
}

export default Canvas;
