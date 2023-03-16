import styled from 'styled-components';
import CanvasColumn from "./CanvasColumn";

const CanvasColumnsWrapper = styled.section`

`;

function CanvasColumns() {
    return(
        <div>
            <CanvasColumn />
            <CanvasColumn />
            <CanvasColumn />
            <CanvasColumn />
        </div>
    )
}

export default CanvasColumns;
