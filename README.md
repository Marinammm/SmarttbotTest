# Teste técnico Smarttbot

## Sobre

O projeto consiste de duas páginas, uma de visualização re robôs e dados gerais, e uma de cadastro de robôs.
Na página de visualização, o usuário pode trocar entre modo "real" ou "simulado", o que muda a lista de robôs renderizada;
pausar ou iniciar um robô. Na página de cadastro o usuário pode cadastrar um novo robô em modo real ou simulado.

O Projeto foi feito em React com base em Typescript, pela melhor leitura, previsibilidade e manutenibilidade que essa linguagem proporciona.

### Instalação e execução

Após clonar o repositório, apenas instale as dependências rodando
`yarn`, e para executar em localhost, `yarn start`;

### Componentes

A arquitetura utilizada neste projeto divide os componentes em 3 categorias: estruturais, formulário e de contexto.
Todos os componentes foram desenvolvidos utilizando Styled Components.

### Redux
Para gerenciamento de estado, foi utilizado Redux Thunk, na seguinte estrutura:
Types -> Actions -> Reducer -> useCases. Os reducers foram separados nas seguintes categorias:
- Overview
- Strategy
- Broker
- Robot
- Robot list

A separação de Robot e Robot List se deu em decorrência do retorno da API para esses dois casos ser diferente,
e para melhor gerenciar ações que alteram um robô individual (como parar, iniciar e criar), e a recuperação de todos os robôs do usuário.

### API

A integração com a API foi feita através do axios, utilizando alguns dos endpoints disponíveis,
com alguns imprevistos:
- Na requisição de recuperar a lista de robôs, alguns robôs vieram sem o campo `last_paper`. Não foi documentado que este campo era opcional.
- NA requisição de criar robô não está documentado que a API espera receber o modo "Otimista" ou "Pessimista", apesar de ter sido pedido no formulário.
- As requisições de parar e iniciar robô estão retornando erro de CORS.
