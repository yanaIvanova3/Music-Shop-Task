/**
 * Created by Yana on 2/24/2016.
 */
var Provider = (function () {
    function Provider () {

    }

    Provider.prototype.deliverItem = function (item, quantity) {
        item.setQuantity(quantity);
    }
    return Provider;
})();