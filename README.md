# Diário de Bordo — Otimização de Desempenho

## Descrição

O Diário de Bordo é uma aplicação web desenvolvida para registrar, visualizar e excluir anotações. Os dados são armazenados no LocalStorage e a aplicação possui suporte ao funcionamento offline por meio de Service Worker.

## Análise inicial

Foi realizada uma análise utilizando o Lighthouse do Google Chrome antes das otimizações.

### Gargalos identificados

* Código JavaScript que poderia ser simplificado.
* CSS com regras que poderiam ser reduzidas.
* Carregamento do JavaScript bloqueando a renderização.
* Recursos desnecessários no carregamento inicial.
* Possibilidade de melhorar a organização e o carregamento dos recursos.
* O projeto não possui imagens pesadas que necessitem de conversão para WebP ou AVIF.

## Melhorias aplicadas

* Utilização do atributo `defer` no carregamento do JavaScript.
* Redução e simplificação do CSS.
* Redução e simplificação do JavaScript.
* Remoção de código desnecessário.
* Organização dos recursos carregados pela aplicação.
* Atualização do cache do Service Worker.
* Uso do LocalStorage para armazenamento dos dados.
* Manutenção do funcionamento offline da aplicação.
* Como o projeto não utiliza imagens pesadas, não foi necessária a conversão para WebP ou AVIF.

## Comparativo antes e depois

### Antes da otimização

<img src="https://github.com/JocioneAlves/diario-de-bordo-pwa/blob/main/lighthouse-antes.png?raw=true" alt="Lighthouse antes" width="800">

A análise inicial foi realizada com o Lighthouse antes da aplicação das otimizações.

### Depois da otimização

<img src="https://github.com/JocioneAlves/diario-de-bordo-pwa/blob/main/lighthouse-depois.png?raw=true" alt="Lighthouse depois" width="800">

Após as alterações, uma nova análise foi realizada com o Lighthouse para verificar o impacto das otimizações.

## Resultado

As principais melhorias aplicadas foram a redução e simplificação do código CSS e JavaScript, o carregamento não bloqueante do JavaScript utilizando `defer` e a remoção de recursos desnecessários.

A comparação dos relatórios permite verificar a evolução do desempenho da aplicação após as otimizações.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Service Worker
* PWA
* Lighthouse
