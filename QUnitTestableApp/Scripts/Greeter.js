var GreeterModule;
(function (GreeterModule) {
    var Greeter = (function () {
        function Greeter(name) {
            this.name = name;
        }
        Greeter.prototype.Greet = function () {
            return "Hello, " + this.name;
        };
        return Greeter;
    })();
    GreeterModule.Greeter = Greeter;    
})(GreeterModule || (GreeterModule = {}));
