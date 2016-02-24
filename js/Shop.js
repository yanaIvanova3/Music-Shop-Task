/**
 * Created by Yana on 2/24/2016.
 */

var Shop = (function () {
    function Shop() {
        var _cash = 1000;
        var products = [];

        this.getCash = function () {
            return _cash;
        }

        this.setCash = function (cash) {
            _cash += cash;
        }

        this.getProducts = function () {
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
        this.setCash((itemToRemove.getPrice()) * quantity);
    }

    Shop.prototype.receiveProducts = function (provider, item, quantity) {
        provider.deliverItem(item, quantity);
    }

    Shop.prototype.sortProductsByPrice = function () {
        this.getProducts().sort(function (a, b) {
            return parseFloat(a.getPrice()) - parseFloat(b.getPrice());
        });
    }

    Shop.prototype.sortProductsByName = function (a, b) {
        if (a.getName() < b.getName())
            return -1;
        else if (a.getName() > b.getName())
            return 1;
        else
            return 0;
    }

    Shop.prototype.sortProductsByType = function (a, b) {
        if (a.getType() < b.getType())
            return -1;
        else if (a.getType() > b.getType())
            return 1;
        else
            return 0;
    }


    Shop.prototype.reviewItems = function (type) {
        if (type == 'byName') {
            this.getProducts().sort(this.sortProductsByName);
            for (var i = 0; i < this.getProducts().length; i++) {
                console.log('Name : ' + this.getProducts()[i].getName());
            }
        }
        if (type == 'byPrice') {
            this.sortProductsByPrice();
            for (var i = 0; i < this.getProducts().length; i++) {
                console.log(this.getProducts()[i].getName() + ' price - ' + this.getProducts()[i].getPrice());
            }
        }
        if (type == 'byType') {
            this.getProducts().sort(this.sortProductsByType);
            for (var i = 0; i < this.getProducts().length; i++) {
                console.log(this.getProducts()[i].getName() + ' type - ' + this.getProducts()[i].getType());
            }
        }

        if (type == 'quantity') {
            for (var i = 0; i < this.getProducts().length; i++) {
                if (this.getProducts()[i].getQuantity() > 0) {
                    console.log(this.getProducts()[i]);
                }
            }
        }
    }

    return Shop;
})()