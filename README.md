# Projeto FP — Carrossel de Carros

**Descrição**
Carrossel simples e estiloso de veículos criado com HTML, CSS e JavaScript puro. Ideal como componente para portfólios ou páginas de apresentação de veículos premium.

---

## Visão geral

* Carrossel com transições suaves entre itens.
* Navegação por setas (prev/next), indicadores (dots) e teclado (← →).
* Layout responsivo em largura (projeto pensado para desktop/large screens).
* Animações em CSS para imagem e conteúdo do slide ativo.

---

## Como executar (rápido)

1. Certifique-se de manter a estrutura de pastas (veja abaixo).
2. Abra o arquivo `index.html` em um navegador moderno (Chrome, Edge, Firefox, Safari).
3. Use as setas na tela ou as teclas `ArrowLeft` / `ArrowRight` para navegar entre os carros.

---

## Estrutura de arquivos

```
/ (raiz do projeto)
├── index.html        # Página principal
├── styles.css        # Estilos do projeto
├── scripts.js        # Lógica do carrossel
├── img/              # Imagens usadas no carrossel (logo, carros, setas)
└── README.md         # Este arquivo
```

> Observação: as imagens referenciadas em `index.html` devem estar na pasta `img/` com os mesmos nomes usados no HTML (`logo.png`, `1 (1).png`, `2 (1).png`, `3.png`, `arrow.png`, etc.).

---

## Tecnologias

* HTML5
* CSS3 (transitions/transform)
* JavaScript (ES6, DOM API)

Sem dependências externas — funciona offline no navegador.

---

## Funcionalidades

* **Navegação por botões**: botões "prev" e "next" com wrap-around.
* **Indicadores (dots)**: clique para ir diretamente a um slide.
* **Navegação por teclado**: teclas de seta direita/esquerda.
* **Animações**: elementos do slide (imagem, título, descrição, botão) entram com delay para um efeito sequenciado.
* **Contador de slides**: exibe número atual formatado com dois dígitos (`01`, `02`, ...).

---

## Personalização rápida

* Para adicionar/remover slides: edite a `<div class="list">` em `index.html`, mantendo a estrutura `.item` com `.car-img` + `.content`.
* Atualize `styles.css` para ajustar tamanhos, espaçamentos e fontes.
* Em `scripts.js`, o carrossel detecta automaticamente a quantidade de `.item`; não é necessário ajustar o JS ao adicionar slides, apenas atualize os indicadores (lis em `section .indicators ul`) para combinar com o número de slides — ou implemente geração dinâmica dos dots.

---

## Acessibilidade

* Botões possuem `aria-label` (ex.: "Carro anterior", "Próximo carro").
* Recomenda-se adicionar `alt` descritivos às imagens dos carros (já presente no HTML).

---

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma branch com sua feature: `git checkout -b feature/nova-coisa`
3. Faça commit das alterações: `git commit -m "Adiciona ..."`
4. Envie para o repositório remoto e abra um pull request.

Pequenas melhorias bem-vindas: geração automática dos indicadores, suporte a touch/swipe para dispositivos móveis, e melhor responsividade.

---

## Licença

MIT — sinta-se à vontade para usar e modificar, mantendo o aviso de licença quando apropriado.

---

## Autor / Contato

Projeto: *Projeto FP*
Criado por: Ivanildo Lima— substitua conforme desejar.


