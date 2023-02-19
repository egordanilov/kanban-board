import { ReactElement } from "react";
import styled from "styled-components";

const CanvasWrapper = styled.div`
    width: calc(100vw - 320px);
    background: #21212c;
    height: 100vh;
`;

function Canvas():ReactElement {
    return(
        <CanvasWrapper>
            Canvas
        </CanvasWrapper>
    )
}

export default Canvas;
