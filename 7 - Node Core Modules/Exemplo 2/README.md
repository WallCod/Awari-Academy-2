# Algoritmo para resolver URLs relativas

---

### Sobre

**Importação do módulo url:**

const url = require('url');

Novamente, estamos importando o módulo url.

**Definição da URL base e da URL relativa:**

const baseUrl = 'https://www.example.com/path/';

const relativeUrl = '../otherpath/page.html';

Definimos uma URL base e uma URL relativa que queremos resolver em relação à base.

**Resolução da URL relativa:**

const resolvedUrl = url.resolve(baseUrl, relativeUrl);

Usamos a função url.resolve para resolver a URL relativa em relação à URL base, resultando em uma URL completa.

**Exibição da URL resolvida:**

console.log(URL resolvida: ${resolvedUrl});

Exibimos a URL completa resultante da resolução.