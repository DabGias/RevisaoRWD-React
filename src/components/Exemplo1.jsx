function Exemplo1(props) {
    return(
        <>
            <h2>Exemplo 1</h2>
            <p>Esse é o Exemplo1</p>
            <p>Esse número vem do App: {props.numero}</p>
            <p>Esse nome vem do App: {props.nome}</p>
            <button onClick={() => props.setNumero(props.numero + 1)}>Aumentar número</button>
            {props.children}
        </>
    )
}

export default Exemplo1