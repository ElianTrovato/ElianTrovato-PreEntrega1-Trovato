const products = [
    { 
        id: '1', 
        name: 'Amoladora', 
        price: 45000, 
        category: 'herramientas Electricas', 
        img:'https://arcencohogar.vtexassets.com/arquivos/ids/296175-800-800?v=637665756341600000&width=800&height=800&aspect=true', 
        stock: 250, 
        description:'Descripcion de Amoladora'
    },
    { 
        id: '2',
        name: 'Taladro',
        price: 50000,
        category: 'herramientas Electricas',
        img:'https://www.cetrogar.com.ar/media/catalog/product/h/e/he1445.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
        stock: 160,
        description:'Descripcion de Taladro'
    },
    { 
        id: '3',
        name: 'Compresor',
        price: 90000, 
        category: 'herramientas Industriales',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_876844-MLA48934310354_012022-F.webp',
        stock: 100,
        description:'Descripcion de Compresor'
    }
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}