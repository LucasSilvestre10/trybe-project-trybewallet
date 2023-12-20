**Trybewallet**

1. **Requisito 1 - Página de Login:**
   - Criada uma página inicial de login com os seguintes campos e características:
      - Rota definida como /;
      - Campos de e-mail e senha;
      - Botão "Entrar" para submeter o formulário.

2. **Requisito 2 - Página da Carteira:**
   - Implementada uma página para gerenciar a carteira de gastos em diversas moedas, representando a despesa total em real (BRL). A página é renderizada pelo componente Wallet.
      - A rota para esta página foi definida como /carteira.

3. **Requisito 3 - Header:**
   - Criado um header para a página de carteira com as seguintes características:
      - Renderizado dentro do componente Wallet;
      - Exibição do e-mail da pessoa usuária;
      - Exibição da despesa total em real;
      - Indicação do câmbio utilizado (no caso, 'BRL').

4. **Requisito 4 - Formulário para Adicionar Despesa:**
   - Desenvolvido um formulário para adicionar uma despesa com os seguintes campos:
      - Valor da despesa;
      - Descrição da despesa;
      - Seleção da moeda;
      - Método de pagamento;
      - Seleção de categoria (tag).

5. **Requisito 5 - Salvar Informações no Estado Global:**
   - Ao clicar no botão "Adicionar despesa", as informações do formulário são salvas no estado global, atualizando a soma de despesas no header.

6. **Requisito 6 - Testes:**
   - Desenvolvidos testes para atingir 60% de cobertura total da aplicação.

7. **Requisito 7 - Tabela de Gastos:**
   - Criada uma tabela com os gastos contendo um cabeçalho com valores específicos.

8. **Requisito 8 - Alimentar Tabela com Estado da Aplicação:**
   - Implementada a lógica para que a tabela seja alimentada pelo estado da aplicação, disponível na chave expenses do reducer wallet.


**Habilidades Técnicas Demonstradas:**
- **Linguagens:** JavaScript, HTML, CSS.
- **Tecnologias:** React, Redux.
- **Testes:** Jest, React Testing Library.
- **Outros:** Estado global com Redux, Conexão Redux aos componentes React, Ações assíncronas em React.
