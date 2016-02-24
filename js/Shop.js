/**
 * Created by Yana on 2/24/2016.
 */

var Shop = (function (){
    function Shop () {
        var _cash = 1000;
        var products = [];

        this.getCash = function() {
            return _cash;
        }

        this.setCash = function(cash) {
            _cash += cash;
        }

        this.getProducts = function (){
            return products;
        }

        this.setProducts = function (product) {
            products.push(product);
        }
    }


    Shop.prototype.sell = function (item, quantity) {
        var index = this.getProducts().indexOf(item);
        var itemToRemove = this.getProducts()[index];
        itemToRemove.setQuantity(-quantity);
        this.setCash((itemToRemove.getPrice())*quantity);
    }

    Shop.prototype.receiveProducts = function (provider, item, quantity) {
        provider.deliverItem(item, quantity);
    }

    //Shop.prototype.sortProductsByName = function () {
    //    for ()
    //}
    //
    //objs.sort(compare);
    //}
    Shop.prototype.reviewItems = function (type) {
        if (type == 'alphabetic') {

        }
    }

    return Shop;
})()