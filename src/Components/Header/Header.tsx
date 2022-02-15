import { Container, Content } from "./style"

interface HeaderProps{
    openModal:()=>void
}

function Header({openModal}:HeaderProps){
    return(
    <Container>
        <Content>
            <img src="../../assets/logo.svg" alt="logo"></img>
            <button onClick={openModal}  type="button" >Nova transação</button>
        </Content>
    </Container>)
}

export default Header