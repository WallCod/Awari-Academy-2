/* WeakSet: Só pode conter objetos e não valores primitivos.
 As referências aos objetos são fracas, ou seja, se não houver outras referências para um objeto armazenado em um WeakSet,
  ele poderá ser coletado pelo garbage collector. */

  let ws = new WeakSet();
  let obj = {};
  ws.add(obj);
  console.log(ws.has(obj)); // true
  obj = null; // O objeto pode ser coletado pelo garbage collector