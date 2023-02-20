import { ReactElement } from "react";
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const SidebarThemeToggleWrapper = styled.div`
    height: 50px;
    background: #21212c;
    width: 80%;
    margin: 0 auto 20px auto;
    border-radius: 7px;
    display: flex;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    label {
        cursor: pointer;
        text-indent: -9999px;
        width: 32px;
        height: 16px;
        background: grey;
        display: block;
        border-radius: 100px;
        position: relative;
    }

    label:after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 10px;
        transition: 0.3s;
    }
    
    input:checked + label {
    background: #655fc7;
    }
    
    input:checked + label:after {
    left: 100%;
    transform: translateX(-100%);
    }
    
    label:active:after {
    width: 18px;
    }

    svg:first-of-type {
        transform: translate(-16px, 0);
    }

    svg:last-of-type {
        transform: translate(18px, 0);
    }
`;

const ThemeToggleSwitch = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`;

function SidebarThemeToggle():ReactElement {
    return (
        <SidebarThemeToggleWrapper>
           <FaSun />
           <ThemeToggleSwitch type="checkbox" id="switch" />
           <label htmlFor="switch">Toggle</label>
           <FaMoon />
        </SidebarThemeToggleWrapper>
    )
}

export default SidebarThemeToggle;
