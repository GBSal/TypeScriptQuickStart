define(["require", "exports", "./DataService"], function (require, exports, ds) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dataService = new ds.DataService();
    var Alerter = (function () {
        function Alerter() {
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataService.getMessage();
            toastr.info(msg);
            console.log(msg);
        };
        return Alerter;
    }());
    exports.Alerter = Alerter;
});
