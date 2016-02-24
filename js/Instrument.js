/**
 * Created by Yana on 2/24/2016.
 */
var Instrument = (function (){
    function Instrument (name, type, price, quantity) {
        var _name = name;
        var _type = type;
        var _price = price;
        var _quantity = quantity;

        this.getName = function () {
            return _name;
        }

        this.getType = function () {
            return _type;
        }

        this.getPrice = function () {
            return _price;
        }

        this.getQuantity = function () {
            return _quantity;
        }

        this.setQuantity = function (quantity) {
            _quantity = quantity;
        }
    }
    return Instrument;
})()