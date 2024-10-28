/* WeakMap: Similar ao Map, mas as chaves são obrigatoriamente objetos, e essas chaves também são fracamente referenciadas.
 Isso significa que, se não houver outra referência a um objeto usado como chave, ele pode ser coletado pelo garbage collector,
  o que ajuda na gestão de memória. */

  let wm = new WeakMap();
  let chave = {};
  wm.set(chave, "valor");
  console.log(wm.get(chave)); // "valor"
  chave = null; // O objeto chave pode ser coletado pelo garage collector