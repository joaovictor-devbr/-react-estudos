# Dia 01 - Ambiente React, Virtual DOM e JSX

## O que aprendi

- Criar projeto React
- Estrutura básica de componentes
- JSX
- Expressões dentro do JSX
- Virtual DOM

---

## Virtual DOM

O React cria uma cópia virtual da interface na memória.

Quando algo muda:

1. React atualiza o Virtual DOM
2. Compara com a versão anterior (Diffing)
3. Atualiza apenas o que mudou no DOM real

### Diagrama

```text
Estado alterado
      │
      ▼
 Virtual DOM
      │
      ▼
 Comparação (Diff)
      │
      ▼
 Atualiza apenas mudanças
      │
      ▼
    DOM Real
```

---

## JSX vs HTML

| JSX | HTML |
|------|------|
| className | class |
| htmlFor | for |
| Pode usar JavaScript entre {} | Não |
| Retorna elementos React | Retorna HTML puro |
| Usa camelCase em atributos | Usa atributos padrão |

### Exemplo JSX

```jsx
<h1 className="titulo">
  Olá React
</h1>
```

### Exemplo HTML

```html
<h1 class="titulo">
  Olá HTML
</h1>
```

---

## Conceitos praticados

- Variáveis dentro do JSX
- Operadores ternários
- Cálculos em JSX
- Estilos inline
- Componentes React