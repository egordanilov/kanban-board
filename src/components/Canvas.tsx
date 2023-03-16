import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import ShowSidebar from "./ShowSidebar";
import styled from "styled-components";

const CanvasWrapper = styled.div<{sidebarIsOpen: boolean, nightModeIsOn: boolean}>`
    width: ${props => props.sidebarIsOpen ? 'calc(100vw - 320px)' : '100vw'};
    background: #21212c;
    height: 100vh;
    position: relative;
`;

function Canvas():ReactElement {
    const uiState = useSelector((state: RootState) => state.ui);
    return(
        <CanvasWrapper sidebarIsOpen={uiState.sidebarIsOpen} nightModeIsOn={uiState.nightModeIsOn}>
            <ShowSidebar />
            Canvas goes here
        </CanvasWrapper>
    )
}

export default Canvas;
