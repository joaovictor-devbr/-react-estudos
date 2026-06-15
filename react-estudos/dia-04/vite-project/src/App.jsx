import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  function handleClick() {
    alert("Botão clicado!");
  }

  return (
    <div>
      <h1>Dia 04 - Props, Children e Rest Param</h1>

      <Modal>
        <p>Esse conteúdo veio via children.</p>

        <Button
          label="Fechar"
          variant="primary"
          onClick={handleClick}
        />
      </Modal>
    </div>
  );
}

export default App;