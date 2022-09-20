import styled from "styled-components"

const DivPage2 = styled.div `
    background-color: #dfd;
    font-family: Arial, Helvetica, sans-serif;

    h1 {
        color: green;
    }
`

function Page2() {
    return(
        <DivPage2>
            <h1>Página 2</h1>
            <p>Está é a Página 2</p>
        </DivPage2>
    )
}

export default Page2