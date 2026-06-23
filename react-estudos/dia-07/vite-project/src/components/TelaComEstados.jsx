import { useState } from "react";

export default function TelaComEstados() {
  const [status, setStatus] = useState("loading");

  if (status === "loading") {
    return (
      <div>
        <h2>Carregando...</h2>

        <button onClick={() => setStatus("sucesso")}>
          Simular Sucesso
        </button>

        <button onClick={() => setStatus("erro")}>
          Simular Erro
        </button>
      </div>
    );
  }

  if (status === "erro") {
    return (
      <div>
        <h2>Ocorreu um erro!</h2>

        <button onClick={() => setStatus("loading")}>
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Dados carregados com sucesso!</h2>

      <button onClick={() => setStatus("loading")}>
        Recarregar
      </button>
    </div>
  );
}