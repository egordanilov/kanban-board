import styled from 'styled-components';
import CanvasColumn from "./CanvasColumn";

const CanvasColumnsWrapper = styled.section`
    display: flex;
    padding-top: 20px;
    padding-left: 20px;
`;

function CanvasColumns() {
    return(
        <CanvasColumnsWrapper>
            <CanvasColumn />
            <CanvasColumn />
            <CanvasColumn />
            <CanvasColumn />
        </CanvasColumnsWrapper>
    )
}

export default CanvasColumns;
