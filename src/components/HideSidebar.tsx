import { ReactElement } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar, openSidebar } from "../store/uiSlice";
import { FaRegEyeSlash } from "react-icons/fa";
import { RootState } from "../store/store";

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
    const sidebarIsOpen = useSelector((state: RootState) => state.ui.sidebarIsOpen)
    const dispatch = useDispatch();

    return(
        <HideSidebarWrapper onClick={() => {dispatch(closeSidebar())}}>
         <FaRegEyeSlash />
         <span>Hide sidebar</span>
        </HideSidebarWrapper>
    )
}

export default HideSidebar;
