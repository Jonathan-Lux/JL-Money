import styled from"styled-components"

export const Container = styled.header `
display: flex;
align-items:center;
margin-top: -5rem;
justify-content: center;
height:130px;

div{
    background-color:white;
    margin: 1rem;
    width:350px;
    height: 130px;
    margin: 1rem 2rem
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .4rem
}



header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 2rem;
    color: var(--title)
}

strong{
    margin: 1rem 2rem;
   font-size: 2rem;
   font-weight: 400;
    
}

.total{
    background-color: var(--green);
    color: white;
}

.deposits{
    color: var(--green)
}

.withdraw{
    color: var(--red);
}
`