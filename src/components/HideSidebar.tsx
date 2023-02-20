import { ReactElement } from "react";
import styled from "styled-components";
import { FaRegEyeSlash } from "react-icons/fa";

const HideSidebarWrapper = styled.div`
    display: flex;
    padding-left: 30px;
    padding-bottom: 30px;
    span {
        margin-left: 7px;
    }
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

function HideSidebar():ReactElement{
    return(
        <HideSidebarWrapper onClick={() => {console.log('hide sidebar toggle')}}>
         <FaRegEyeSlash />
         <span>Hide sidebar</span>
        </HideSidebarWrapper>
    )
}

export default HideSidebar;
