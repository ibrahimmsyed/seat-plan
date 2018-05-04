"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("../services");
var enums = require("ui/enums");
var imageSource = require("image-source");
var camera = require("nativescript-camera");
var imageModule = require("ui/image");
var img;
var ListDetailComponent = /** @class */ (function () {
    function ListDetailComponent(route, router, ngZone, firebaseService, utilsService) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.firebaseService = firebaseService;
        this.utilsService = utilsService;
    }
    ListDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        camera.requestPermissions();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.firebaseService.getMyGift(_this.id).subscribe(function (gift) {
                _this.ngZone.run(function () {
                    for (var prop in gift) {
                        //props
                        if (prop === "id") {
                            _this.id = gift[prop];
                        }
                        if (prop === "name") {
                            _this.name = gift[prop];
                        }
                        if (prop === "description") {
                            _this.description = gift[prop];
                        }
                        if (prop === "imagepath") {
                            _this.imagepath = gift[prop];
                        }
                    }
                });
            });
        });
    };
    ListDetailComponent.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            width: 300,
            height: 300,
            keepAspectRatio: true,
            saveToGallery: true
        };
        camera.takePicture(options)
            .then(function (imageAsset) {
            imageSource.fromAsset(imageAsset).then(function (res) {
                _this.image = res;
                //save the source image to a file, then send that file path to firebase
                _this.saveToFile(_this.image);
            });
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    ListDetailComponent.prototype.saveToFile = function (res) {
        var imgsrc = res;
        this.imagePath = this.utilsService.documentsPath("photo-" + Date.now() + ".png");
        imgsrc.saveToFile(this.imagePath, enums.ImageFormat.png);
    };
    ListDetailComponent.prototype.editGift = function (id) {
        var _this = this;
        if (this.image) {
            //upload the file, then save all
            this.firebaseService.uploadFile(this.imagePath).then(function (uploadedFile) {
                _this.uploadedImageName = uploadedFile.name;
                //get downloadURL and store it as a full path;
                _this.firebaseService.getDownloadUrl(_this.uploadedImageName).then(function (downloadUrl) {
                    _this.firebaseService.editGift(id, _this.description, downloadUrl).then(function (result) {
                        alert(result);
                    }, function (error) {
                        alert(error);
                    });
                });
            }, function (error) {
                alert('File upload error: ' + error);
            });
        }
        else {
            //just edit the description
            this.firebaseService.editDescription(id, this.description).then(function (result) {
                alert(result);
            }, function (error) {
                alert(error);
            });
        }
    };
    ListDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "gf-list-detail",
            templateUrl: "list-detail.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            core_1.NgZone,
            services_1.FirebaseService,
            services_1.UtilsService])
    ], ListDetailComponent);
    return ListDetailComponent;
}());
exports.ListDetailComponent = ListDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBRXhELDBDQUF1RDtBQUN2RCx3Q0FBNEQ7QUFFNUQsZ0NBQWtDO0FBQ2xDLDBDQUE0QztBQUk1Qyw0Q0FBOEM7QUFHOUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQUksR0FBRyxDQUFDO0FBT1I7SUFhRSw2QkFDYyxLQUFxQixFQUNyQixNQUFjLEVBQ2QsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFlBQTBCO1FBSjFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ25DLENBQUM7SUFFUCxzQ0FBUSxHQUFSO1FBQUEsaUJBd0JFO1FBdkJBLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztZQUNoRCxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtnQkFDckQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2QsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsT0FBTzt3QkFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMs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QztnQkFDTCxDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsRUFBRSxVQUFDLEtBQVU7Z0JBQ1osS0FBSyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBVTtnQkFDdEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2pCLENBQUMsRUFBRSxVQUFDLEtBQVU7Z0JBQ1YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFsR1ksbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsa0JBQWtCO1NBQ2hDLENBQUM7eUNBZXFCLHVCQUFjO1lBQ2IsZUFBTTtZQUNOLGFBQU07WUFDRywwQkFBZTtZQUNsQix1QkFBWTtPQWxCN0IsbUJBQW1CLENBb0cvQjtJQUFELDBCQUFDO0NBQUEsQUFwR0QsSUFvR0M7QUFwR1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSwgVXRpbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7R2lmdH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICd1aS9lbnVtcyc7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gJ2ltYWdlLXNvdXJjZSc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5cclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xyXG5cclxudmFyIGltYWdlTW9kdWxlID0gcmVxdWlyZShcInVpL2ltYWdlXCIpO1xyXG52YXIgaW1nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJnZi1saXN0LWRldGFpbFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImxpc3QtZGV0YWlsLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBpbWFnZXBhdGg6IHN0cmluZztcclxuICBpbWFnZTogYW55O1xyXG4gIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgcHJpdmF0ZSBpbWFnZVBhdGg6IHN0cmluZztcclxuICBwcml2YXRlIHVwbG9hZGVkSW1hZ2VOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB1cGxvYWRlZEltYWdlUGF0aDogc3RyaW5nO1xyXG4gIHB1YmxpYyBnaWZ0OiBPYnNlcnZhYmxlPGFueT47XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB1dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuIG5nT25Jbml0KCkge1xyXG4gICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcbiAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeUdpZnQodGhpcy5pZCkuc3Vic2NyaWJlKChnaWZ0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gZ2lmdCkge1xyXG4gICAgICAgICAgICAvL3Byb3BzXHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcImlkXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmlkID0gZ2lmdFtwcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJuYW1lXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBnaWZ0W3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZ2lmdFtwcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJpbWFnZXBhdGhcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VwYXRoID0gZ2lmdFtwcm9wXTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7ICBcclxuICB9XHJcblxyXG50YWtlUGhvdG8oKSB7XHJcbiAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICBrZWVwQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgICAgIHNhdmVUb0dhbGxlcnk6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgY2FtZXJhLnRha2VQaWN0dXJlKG9wdGlvbnMpXHJcbiAgICAgICAgLnRoZW4oaW1hZ2VBc3NldCA9PiB7XHJcbiAgICAgICAgICAgIGltYWdlU291cmNlLmZyb21Bc3NldChpbWFnZUFzc2V0KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgLy9zYXZlIHRoZSBzb3VyY2UgaW1hZ2UgdG8gYSBmaWxlLCB0aGVuIHNlbmQgdGhhdCBmaWxlIHBhdGggdG8gZmlyZWJhc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVRvRmlsZSh0aGlzLmltYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbnNhdmVUb0ZpbGUocmVzKXtcclxuICBsZXQgaW1nc3JjID0gcmVzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy51dGlsc1NlcnZpY2UuZG9jdW1lbnRzUGF0aChgcGhvdG8tJHtEYXRlLm5vdygpfS5wbmdgKTtcclxuICAgICAgICBpbWdzcmMuc2F2ZVRvRmlsZSh0aGlzLmltYWdlUGF0aCwgZW51bXMuSW1hZ2VGb3JtYXQucG5nKTsgICAgICAgXHJcbn1cclxuXHJcblxyXG5lZGl0R2lmdChpZDogc3RyaW5nKXtcclxuICBpZih0aGlzLmltYWdlKXtcclxuICAgIC8vdXBsb2FkIHRoZSBmaWxlLCB0aGVuIHNhdmUgYWxsXHJcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS51cGxvYWRGaWxlKHRoaXMuaW1hZ2VQYXRoKS50aGVuKCh1cGxvYWRlZEZpbGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGxvYWRlZEltYWdlTmFtZSA9IHVwbG9hZGVkRmlsZS5uYW1lO1xyXG4gICAgICAgICAgLy9nZXQgZG93bmxvYWRVUkwgYW5kIHN0b3JlIGl0IGFzIGEgZnVsbCBwYXRoO1xyXG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0RG93bmxvYWRVcmwodGhpcy51cGxvYWRlZEltYWdlTmFtZSkudGhlbigoZG93bmxvYWRVcmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5lZGl0R2lmdChpZCx0aGlzLmRlc2NyaXB0aW9uLGRvd25sb2FkVXJsKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgYWxlcnQocmVzdWx0KVxyXG4gICAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KCdGaWxlIHVwbG9hZCBlcnJvcjogJyArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICAvL2p1c3QgZWRpdCB0aGUgZGVzY3JpcHRpb25cclxuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLmVkaXREZXNjcmlwdGlvbihpZCx0aGlzLmRlc2NyaXB0aW9uKS50aGVuKChyZXN1bHQ6YW55KSA9PiB7XHJcbiAgICAgICAgYWxlcnQocmVzdWx0KVxyXG4gICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICB9KTtcclxuICB9ICAgIFxyXG59XHJcblxyXG59Il19