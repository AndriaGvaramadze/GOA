function discount(productid, price ,discount){
    this.productid = productid;
    this.price = price;
    this.discount = discount;

    this.info = fucntion() {
        return 'product $(productid) old price was $(price) but with discount new price is $(discount)';
};
};

let productid = prompt("enter id of product: ");
let price = prompt ('enter product old price: ');
let discount = prompt ('enter discount: ')

let discount1 = new price (productid, price, discount)


console.log(discount1);
console.log(discount.info());