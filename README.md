# Exercício de JavaScript

Para treinar o JavaScript de vocês, vamos desenvolver uma calculadora em JavaScript.

## Como Fazer

No repositório clonado de vocês, dentro do arquivo *SpecRunner.html* com o layout da calculadora já pronto, além da execução dos testes. Já existe um arquivo *calculadora.js* dentro da pasta **src**. Nesse arquivo existe a função *initCalculadora*, onde deve ser escrito a execução do seu programa. Essa função irá ser executada antes dos testes e do carregamento de tudo, então é importante escrever dentro dela.

Vocês podem criar outras funções e scripts (dentro da pasta **src**). Não mexam em nenhum outro arquivo de JavaScript.

A entrega será aceita APENAS por git.

## Requisitos da calculadora

Os seguintes requisitos devem ser levados em consideração para a calculadora:

 * Os números ao serem clicados devem aparecer no campo de id *resultado*.
 * As operações também devem adicionar o símbolo no campo de resultado.
 * *NÃO* pode ser incluído uma operação se não houver nenhum número ou se já houver alguma operação no resultado.
 * O ponto é utilizado para números decimais.
 * Ao clicar no igual (=), o resultado da operação deve substituir a expressão no campo resultado.
 * Se houver apenas um número no campo, o botão igual não faz nada (mantém o número).
 * Se houver o primeiro número e a operação, sem o segundo número, o botão igual deve colocar uma mensagem de erro no resultado: _Erro de operação_.
 * O ponto (.) só pode ser adicionado uma vez por número.

## Informações adicionais

Como os scripts precisarão do DOM carregado, não esqueçam de usar a palavra chave _defer_.

Strings no JavaScript são como vetores, podemos acessar letra a letra pelo seu índice.

Algumas funções podem ser interessantes para o exercício (pesquisem!):
 * isNaN(): diz se uma expressão é um número ou não.
 * parseInt(): transforma uma String em inteiro.
 * parseFloat(): transforma uma String em um decimal.
 * substring(): devolve parte de uma String, baseado no índice passado.