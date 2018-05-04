"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var models_1 = require("../models");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("@angular/router");
var ListComponent = /** @class */ (function () {
    function ListComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.gifts$ = this.firebaseService.getMyWishList();
        this.message$ = this.firebaseService.getMyMessage();
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        this.gift = new models_1.Gift(this.id, this.name, this.date, this.description, this.imagepath, this.UID);
        var myGift = this.gift.name;
        this.firebaseService.add(myGift).then(function (message) {
            _this.name = "";
            alert(message);
        });
    };
    ListComponent.prototype.delete = function (gift) {
        this.firebaseService.delete(gift)
            .catch(function () {
            alert("An error occurred while deleting an item from your list.");
        });
    };
    ListComponent.prototype.viewDetail = function (id) {
        this.router.navigate(["/list-detail", id]);
    };
    ListComponent.prototype.logout = function () {
        this.firebaseService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "gf-list",
            templateUrl: "list.html"
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            services_1.FirebaseService,
            router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUdoRCx3Q0FBNEQ7QUFDNUQsb0NBQStCO0FBQy9CLG1GQUErRTtBQUMvRSwwQ0FBdUM7QUFPdkM7SUFhRSx1QkFBb0IsZ0JBQWtDLEVBQzVDLGVBQWdDLEVBQ2hDLE1BQWM7UUFGSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzVDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ25CLENBQUM7SUFFUixnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUMsMkJBQUcsR0FBSDtRQUFBLGlCQWNDO1FBYkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUksQ0FDbkIsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDWCxJQUFJLE1BQU0sR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFXO1lBQ2hELEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzlCLEtBQUssQ0FBQztZQUNMLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ3RFLENBQUM7SUFyRFUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxXQUFXO1NBQ3pCLENBQUM7eUNBY3NDLG9DQUFnQjtZQUMzQiwwQkFBZTtZQUN4QixlQUFNO09BZmIsYUFBYSxDQXNEekI7SUFBRCxvQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0JhY2tlbmRTZXJ2aWNlLCBGaXJlYmFzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQge0dpZnR9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwiZ2YtbGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImxpc3QuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaW1hZ2VwYXRoOiBzdHJpbmc7XHJcbiAgVUlEOiBzdHJpbmc7XHJcbiAgcHVibGljIGdpZnQ6IEdpZnQ7XHJcblxyXG4gIHB1YmxpYyBnaWZ0cyQ6IE9ic2VydmFibGU8YW55PjtcclxuICBwdWJsaWMgbWVzc2FnZSQ6IE9ic2VydmFibGU8YW55PjtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7fVxyXG5cclxubmdPbkluaXQoKXtcclxuICB0aGlzLmdpZnRzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlXaXNoTGlzdCgpO1xyXG4gIHRoaXMubWVzc2FnZSQgPSA8YW55PnRoaXMuZmlyZWJhc2VTZXJ2aWNlLmdldE15TWVzc2FnZSgpO1xyXG59XHJcblxyXG4gIGFkZCgpIHtcclxuICAgICB0aGlzLmdpZnQgPSBuZXcgR2lmdChcclxuICAgICAgdGhpcy5pZCxcclxuICAgICAgdGhpcy5uYW1lLFxyXG4gICAgICB0aGlzLmRhdGUsXHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIHRoaXMuaW1hZ2VwYXRoLFxyXG4gICAgICB0aGlzLlVJRClcclxuICAgIGxldCBteUdpZnQ6c3RyaW5nID0gdGhpcy5naWZ0Lm5hbWU7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5hZGQobXlHaWZ0KS50aGVuKChtZXNzYWdlOmFueSkgPT4ge1xyXG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgIH0pICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGRlbGV0ZShnaWZ0OiBHaWZ0KSB7XHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5kZWxldGUoZ2lmdClcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdEZXRhaWwoaWQ6IHN0cmluZyl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdC1kZXRhaWxcIiwgaWRdKTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xyXG4gIH1cclxufVxyXG5cclxuIl19