const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta'
    }
  }
}          

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

export default function contains(store, product) {
  for(let key in store){
    if(store[key] === product){
      return true;
    }

    if(typeof store[key] === 'object'){
      if(contains(store[key], product)){
        return true;
      }
    }       
  }
  return false;
}


console.log(contains(almacen, 'camiseta')); // true
console.log(contains(otroAlmacen, 'gameboy')); // false