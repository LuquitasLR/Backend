class ProductManager {

    constructor () {
        
        this.Products = []

    }

    addProduct (title, description, price, thumbnail, stock) {
        let idMax= 0
        this.Products.forEach((prod) => {
            if (prod.code >idMax) 
            idMax = prod.code
        })

        idMax++

        const product = {

            code: idMax,
            title: title || "none",
            decription: description || "none",
            price: price || 0,
            thumbnail: thumbnail || "none",
            stock: stock || 0,

        }

        this.Products.push(product)
    }

    getProducts (){
        console.log(this.Products)
    }

    getProductById (id) {
        if( id<=this.Products.length && id>0 ) {
            
            let serch = this.Products.filter((prod)=> prod.code==id)
            console.log(serch)

        }else {
            console.log("Not Found")
        }
        

    }

}

const test = new ProductManager ()
test.addProduct("intel core i5", "procesador gama media", 35900,"","")
test.addProduct("intel core i7", "procesador gama alta", 45500,"",10)
test.getProductById(2)