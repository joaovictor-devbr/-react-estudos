import Card  from "./components/Card";

function App(){
    return(
        <>
        <h1>Dia 03 - CSS Modules</h1>

        <div
        style={{
            display: "grid",
            gap: "16px",
            maxWidth: "700px",
            margin: "20px auto",
        }}
        >
              <Card
          title="React"
          description="Biblioteca para construir interfaces."
          variant="primary"
        />

        <Card
          title="Node.js"
          description="JavaScript executando no servidor."
          variant="success"
        />

        <Card
          title="Docker"
          description="Containerização de aplicações."
          variant="warning"
        />

        <Card
          title="PostgreSQL"
          description="Banco de dados relacional."
          variant="danger"
          />

        </div>
        </>
    )
}