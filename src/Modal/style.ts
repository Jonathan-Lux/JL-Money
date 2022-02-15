import styled from "styled-components"
import {transparentize} from "polished"
export const Container = styled.form `

input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.3rem;
    border: 1px solid #d7d7d7;
    background:#e7e9ee;
    font-weight: 400;
    font-size:1rem;
    margin-top:1rem;
}

button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: var(--background);
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 2s;

    &:hover{
        filter: brightness(0.9)
    }
}
h2{
    color: var(--title);
    margin-bottom: 1rem; 
}


`   

export const TransactionButtonModal = styled.div `


    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: .8rem;
    margin: 1rem 0;
   `

interface ButtonRadiusModalProps {
    isActive: boolean;
    activeColor: "green" | "red"; 
}

const colors = {
    green: "#33cc95",
    red: "#e62e4d",
}

export const ButtonRadiusModal = styled.button<ButtonRadiusModalProps>`

        height: 64px;
        padding: 0 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #aaa;
        border-radius: 0.3rem;
        transition: filter 2s;
        background: ${(props)=>props.isActive ? transparentize(0.5,colors[props.activeColor]) : "transparent" };


        &:hover{
            filter: brightness(0.8)
        }

    span{
        color: var(--title);
        font-size: 1rem;
       
    }

    img{
        width:20px;
        height:20px;
        margin-right:1rem;
    }


`   