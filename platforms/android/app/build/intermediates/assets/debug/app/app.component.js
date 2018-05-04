"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    // Your TypeScript logic goes here
    function AppComponent() {
        console.log("Hello World");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/apple.jpg\"></Image>\n  ",
            styles: ["\n    @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDO0lBQ0Usa0NBQWtDO0lBQ2xDO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBSlUsWUFBWTtRQWpCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx5SEFHVDtZQUNELE1BQU0sRUFBRSxDQUFDLHdRQVNSLENBQUM7U0FDSCxDQUFDOztPQUNXLFlBQVksQ0FLeEI7SUFBRCxtQkFBQztDQUFBLEFBTEQsSUFLQztBQUxZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cbiAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYXBwbGUuanBnXCI+PC9JbWFnZT5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH0gdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApOyB9XG4gICAgfVxuICAgIEltYWdlIHtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluOyBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGRcIik7XG4gIH1cbn1cbiJdfQ==