import NetflixLogo from '../../assets/images/netflix.png';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import { useScrollY } from '../hook/useScrollY';
import { useEffect, useState } from 'react';

function Navbar(props) {

    //component scrollY
    //const [scrollY] = useScrollY();
    //scrollY
     const [scrollY, setScrollY] = useState(0);

    function handlerScrollY() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY)
    }

    useEffect(() => {
        handlerScrollY();
        window.addEventListener('scroll', handlerScrollY);
        return () => {
            window.removeEventListener('scroll', handlerScrollY);
        }
    }, []);
    
    return ( 
        // if scrollY < 50 this (backgroundColor: 'transparent') opposite this {backgroundColor: var(--color-background)
        <Navigation style={scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-background)'}}>
            <div className='navContainer'>
                <div className='logo'>
                <img src={NetflixLogo} alt="netflix" />
                </div>
                <div  className='navSearch'>
                    <FiSearch className='iconSearch' /> 
                    <input type="text" placeholder='search here...' />
                </div>
            </div>
        </Navigation>
     );
}

export default Navbar;

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    t0: 0;
    transition-timing-function: ease-in;
    transition: all 0.1s;
    z-index: 10;

    @media only  screen and (max-width: 600px) {
        height: 100px;
    }

    .navContainer {
        background-color: transparent;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;

    @media only  screen and (max-width: 600px) {
        flex-direction: column;
    }

    .logo {
        width: 120px;
        cursor: pointer;
        img {
            width: 100%;
        }
    }

    .navSearch {
        color: var(--color-white);
        padding-right: 20px;
        display: flex;
        justify-content: flex-end;

        &:hover .iconSearch {
            color: var(--color-white);

        }

        .iconSearch {
            width: 20px;
            height: 20px;
            cursor: pointer;
            transform: translateX(24px) translateY(10px);
            color: #bbb;
        }

        input {
            font-size: 14px;
            border: 1px solid #fff;
            color: var(--color-white);
            width: 0;
            padding: 10px;
            cursor: pointer;
            opacity: 0;
            background: #222;
            transition: width 0.5s;

            &:focus {
                padding-left: 26px;
                width: 300px;
                cursor: text;
                opacity: 1;
                border-radius: 4px;
            }
        }
    }

    }

`;