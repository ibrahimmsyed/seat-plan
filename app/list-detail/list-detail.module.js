"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var list_detail_routes_1 = require("./list-detail.routes");
var list_detail_component_1 = require("./list-detail.component");
var ListDetailModule = /** @class */ (function () {
    function ListDetailModule() {
    }
    ListDetailModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                list_detail_routes_1.listDetailRouting
            ],
            declarations: [
                list_detail_component_1.ListDetailComponent
            ]
        })
    ], ListDetailModule);
    return ListDetailModule;
}());
exports.ListDetailModule = ListDetailModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXRhaWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1kZXRhaWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFFekMsMkRBQXlEO0FBQ3pELGlFQUE4RDtBQVk5RDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBVjVCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsc0NBQWlCO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDJDQUFtQjthQUNwQjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgbGlzdERldGFpbFJvdXRpbmcgfSBmcm9tIFwiLi9saXN0LWRldGFpbC5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgTGlzdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIGxpc3REZXRhaWxSb3V0aW5nXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExpc3REZXRhaWxDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0RGV0YWlsTW9kdWxlIHsgfVxyXG4iXX0=