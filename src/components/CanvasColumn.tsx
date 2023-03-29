import styled from "styled-components";

const CanvasColumnWrapper = styled.div`
    min-width: 250px;
`;
const CanvasColumnHeader = styled.div`
    display: flex;
    font-size: 12px;
    letter-spacing: .2em;
`;
const CanvasColumnHeaderCircle = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #8371f0;
    margin-right: 7px;
`;

const TaskWrapper = styled.div`
    background: #2c2c37;
`;

function CanvasColumn() {
    return (
        <CanvasColumnWrapper>
            <CanvasColumnHeader>
                <CanvasColumnHeaderCircle />TODO (4)
            </CanvasColumnHeader>
            <br />Task 1
            <br />Task 2
        </CanvasColumnWrapper>
    )
}

export default CanvasColumn;
