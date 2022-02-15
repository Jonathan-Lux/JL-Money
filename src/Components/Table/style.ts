import styled from "styled-components"

export const Container = styled.main `
max-width:1120px;
margin: 0 auto;


table{ 
    width:100%;
    border-spacing: 0.5rem;
    margin-top: 2rem;
}

th{ 
    text-align: left;
    color: var(--text);
    font-weight: 400;
    padding: 1rem 2rem;
}

td{ 
    text-align: left;
    padding: 1rem 2rem;
    color: var(--text);


&:first-child{
    color: var(--title);
}

&.deposit{
    color: var(--green)
}

&.withdraw{
    color: var(--red)
}

}

`