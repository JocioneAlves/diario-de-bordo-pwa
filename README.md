# Diário de Bordo — Otimização de Performance

## Descrição

O Diário de Bordo é uma aplicação web desenvolvida para registrar, visualizar e excluir anotações. Os dados são armazenados no LocalStorage e a aplicação possui suporte a funcionamento offline por meio de Service Worker.

## Análise inicial

Foi realizada uma análise utilizando o Lighthouse do Google Chrome antes das otimizações.

### Gargalos identificados

* Código JavaScript que poderia ser simplificado.
* CSS com regras que poderiam ser reduzidas.
* Carregamento de scripts sem necessidade de bloquear a renderização.
* Necessidade de melhorar a organização e o carregamento dos recursos.
* Ausência de otimizações relacionadas ao carregamento de imagens, embora o projeto não utilize imagens pesadas.

## Melhorias aplicadas

* Utilização do atributo `defer` no carregamento do JavaScript.
* Redução e simplificação do CSS.
* Redução e simplificação do JavaScript.
* Remoção de código desnecessário.
* Organização dos recursos carregados pela aplicação.
* Atualização do cache do Service Worker.
* Uso de LocalStorage para manter os dados localmente.
* Manutenção da aplicação funcionando offline.
* O projeto não utiliza imagens pesadas, portanto não houve necessidade de conversão para WebP ou AVIF.

## Comparativo antes e depois

### Antes

![Lighthouse antes](lighthouse-antes.png)

A análise inicial apresentou os gargalos relacionados ao carregamento e processamento dos recursos da aplicação.

### Depois

![Lighthouse depois](lighthouse-depois.png)

Após as otimizações, uma nova análise foi realizada utilizando o Lighthouse.

## Resultado

As principais melhorias foram a redução do código CSS e JavaScript, o carregamento não bloqueante do JavaScript utilizando `defer` e a remoção de recursos desnecessários.

A comparação dos relatórios demonstra a evolução da performance da aplicação após as otimizações.

## Tecnologias

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Service Worker
* PWA
* Lighthouse
