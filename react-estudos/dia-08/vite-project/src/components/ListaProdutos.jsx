function ListaProdutos({ produtos }){
    if (produtos.length === 0) {
        return <p>Nenhum produto encontrado</p>
    }

    return (
        <ul>
            {produtos.map((produto) => (
                <li key={produto.id}>
                    <strong>{produto.nome}</strong>
                    <br />
                    Categoria: {produto.categoria}
                    <br />
                    Preço: R$ {produto.preco}
                </li>
            ))}
        </ul>
    );
}

export default ListaProdutos