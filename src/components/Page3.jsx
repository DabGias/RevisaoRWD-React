import { useState } from "react"

function Page3() {
    const [pessoa, setPessoa] = useState({"nome" : "", "idade" : ""})

    function inserirDados(e) {
        setPessoa({...pessoa, [e.target.name] : e.target.value})
    }

    return(
        <>
            <h1>Página 3</h1>

            <label>Nome:
                <input onChange={inserirDados} type={"text"} name="nome" value={pessoa.nome}/>
            </label>

            <label>Idade:
                <input onChange={inserirDados} type={"number"} min={0} name="idade" value={pessoa.idade}/>
            </label>

            <p>Nome: {pessoa.nome}</p>
            <p>Idade: {pessoa.idade}</p>
        </>
    )
}

export default Page3