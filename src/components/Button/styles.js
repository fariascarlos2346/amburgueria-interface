import styled from 'styled-components';

export const ContainerButton = styled.button`
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 8px;
    background-color: #9758a6;
    font-family: 'Road Rage', sans-serif;
    font-size: 30px;
    color: #fff;

    &:hover {
        background-color: #6f357c;
        background-image: 1px dashed #fff;
        border-radius: 8px;
    }
`;