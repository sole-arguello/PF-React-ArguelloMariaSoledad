//simulo una DB
export const getProductos = (id) => {
    return new Promise((res, rej) => {
      res(productos);
    });
  };

export const getProductoById = (id) => {
    return new Promise( (res, rej ) =>{
      res(productos.find( prod => prod.id === id))
    })
  }

export const getProductByCategory = (category) => {
    return new Promise ( (res, rej) => {
      res( productos.filter(prod => prod.categoria === category))
    })
  }

let productos = [
  {id: '1', precio: 1200, titulo: "Encaje", categoria: "Conjunto", stock: 20, img: "/public/assets/conjunto1.jpg",},
  {
    id: '2',
    precio: 1500,
    titulo: "Algodon",
    categoria: "Conjunto",
    stock: 20,
    img: "/public/assets/conjunto2.jpg",
  },
  {
    id: '3',
    precio: 2000,
    titulo: "Combinado",
    categoria: "Conjunto",
    stock: 20,
    img: "/public/assets/conjunto3.jpg",
  },
  {
    id: '4',
    precio: 2000,
    titulo: "Encaje",
    categoria: "Conjunto",
    stock: 20,
    img: "/public/assets/conjunto4.jpg",
  },
  {
    id: '5',
    precio: 1400,
    titulo: "Calado",
    categoria: "Top",
    stock: 20,
    img: "/public/assets/top1.jpg",
  },

  {
    id: '6',
    precio: 1600,
    titulo: "Encaje",
    categoria: "Top",
    stock: 20,
    img: "/public/assets/top2.jpg",
  },
  {
    id: '7',
    precio: 1600,
    titulo: "Combinado",
    categoria: "Top",
    stock: 20,
    img: "/public/assets/top3.jpg",
  },
  {
    id: '8',
    precio: 1600,
    titulo: "Calado",
    categoria: "Top",
    stock: 20,
    img: "/public/assets/top4.jpg",
  },

  {
    id: '9',
    precio: 900,
    titulo: "Maria",
    categoria: "Bombis",
    stock: 20,
    img: "/public/assets/bombis1.jpg",
  },

  {
    id: '10',
    precio: 800,
    titulo: "Victoria",
    categoria: "Bombis",
    stock: 20,
    img: "/public/assets/bombis2.jpg",
  },

  {
    id: '11',
    precio: 500,
    titulo: "Culote",
    categoria: "Bombis",
    stock: 20,
    img: "/public/assets/bombis3.jpg",
  },

  {
    id: '12',
    precio: 450,
    titulo: "Less regulables",
    categoria: "Bombis",
    stock: 20,
    img: "/public/assets/bombis4.jpg",
  },
];


