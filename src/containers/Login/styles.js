import styled from 'styled-components';

import Background from '../../assets/background.png';
import Logo03 from '../../assets/logo03.png';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${Background}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 30%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Logo03}');
    background-color: #1e1e1e;

    p {
        color: #fff;
        font-size: 20px;
        font-weight: 800;

        a {
            text-decoration: underline;
        }
    }

`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #fff;

    span {
        color: #887653;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction:column;
    gap: 6px;
    width:100%;

    input {
        width: 100%;
        border: none;
        height: 60px;
        border-radius: 10px;
        padding: 0 16px;
    }

    label {
        font-size: 30px;
        font-weight: 600;
        color: #fff;
    }
`;
   
  

export const Link = styled.a``;

export const Button = styled.button`

`;