function App() {
    const nome = "João";
    const idade = 19;
    const aprovado = true;

    const estiloTitulo = {
        color: "blue",
        textAlign: "center",
        marginTop: "20px"
    };

    return (
        <div>
            <h1 style={estiloTitulo}>Meu primeiro componente React</h1>

            <p>Nome: {nome}</p>

            <p>Idade em 5 anos: {idade + 5}</p>

            <p>
                Situação: {aprovado ? "Aprovado ✅" : "Reprovado ❌"}
            </p>

            <p>
                Objeto JSON:
                {" "}
                {JSON.stringify({
                    linguagem: "React",
                    versão: 19
                })}
            </p>
        </div>
    );
};

export default App;