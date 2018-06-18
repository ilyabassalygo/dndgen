(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-monster/add-monster.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-monster/add-monster.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success {\r\n    color: rgb(130, 196, 33);\r\n}\r\n\r\n.err {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/add-monster/add-monster.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-monster/add-monster.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-auto\">\n    <h2 class=\"text-center\">Add Monster</h2>\n    <h3 class=\"err\">{{errorMessage}}</h3>\n  <form class=\"col-md-4 col-md-offset-4\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name:</label>\n      <input [(ngModel)]=\"monster.name\" name=\"name\" class=\"form-control\" id=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"challenge_rating\">Challenge Rating:</label>\n    <input [(ngModel)]=\"monster.challenge_rating\" name=\"challenge_rating\" class=\"form-control\" id=\"challenge_rating\">\n    </div>\n    <button class=\"btn btn-success\" (click)=\"createMonster()\">Create</button>\n    <h3 class=\"success\">{{succesMessage}}</h3>\n  </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-monster/add-monster.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-monster/add-monster.component.ts ***!
  \******************************************************/
/*! exports provided: AddMonsterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMonsterComponent", function() { return AddMonsterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_monster_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/monster.model */ "./src/app/model/monster.model.ts");
/* harmony import */ var _monster_service_monster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../monster-service/monster.service */ "./src/app/monster-service/monster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMonsterComponent = /** @class */ (function () {
    function AddMonsterComponent(router, monsterService) {
        this.router = router;
        this.monsterService = monsterService;
        this.monster = new _model_monster_model__WEBPACK_IMPORTED_MODULE_2__["Monster"]();
    }
    AddMonsterComponent.prototype.ngOnInit = function () {
        this.clearMessages();
    };
    AddMonsterComponent.prototype.createMonster = function () {
        var _this = this;
        this.clearMessages();
        this.monsterService.createMonster(this.monster)
            .subscribe(function (data) {
            _this.succesMessage = "Monster created";
        }, function (err) {
            if (err.status == 400) {
                _this.errorMessage = "Error while creatuing monster";
            }
        });
    };
    ;
    AddMonsterComponent.prototype.clearMessages = function () {
        this.succesMessage = "";
        this.errorMessage = "";
    };
    AddMonsterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-monster',
            template: __webpack_require__(/*! ./add-monster.component.html */ "./src/app/add-monster/add-monster.component.html"),
            styles: [__webpack_require__(/*! ./add-monster.component.css */ "./src/app/add-monster/add-monster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _monster_service_monster_service__WEBPACK_IMPORTED_MODULE_3__["MonsterService"]])
    ], AddMonsterComponent);
    return AddMonsterComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-space {\r\n    margin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    DnD Generator!\n  </h1>\n  <div style=\"text-align:left\">\n  <a routerLink=\"/monsters\" class=\"btn btn-primary btn-lg btn-space\" role=\"button\">Monsters</a>\n  <a routerLink=\"/addMonster\" class=\"btn btn-primary btn-lg btn-space\" role=\"button\">Add monster</a>\n</div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["setTheme"])('bs3');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _monster_monster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monster/monster.component */ "./src/app/monster/monster.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _monster_service_monster_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monster-service/monster.service */ "./src/app/monster-service/monster.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_monster_add_monster_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-monster/add-monster.component */ "./src/app/add-monster/add-monster.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _monster_monster_component__WEBPACK_IMPORTED_MODULE_4__["MonsterComponent"],
                _add_monster_add_monster_component__WEBPACK_IMPORTED_MODULE_8__["AddMonsterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_monster_service_monster_service__WEBPACK_IMPORTED_MODULE_6__["MonsterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _monster_monster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monster/monster.component */ "./src/app/monster/monster.component.ts");
/* harmony import */ var _add_monster_add_monster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-monster/add-monster.component */ "./src/app/add-monster/add-monster.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'monsters', component: _monster_monster_component__WEBPACK_IMPORTED_MODULE_2__["MonsterComponent"] },
    { path: 'addMonster', component: _add_monster_add_monster_component__WEBPACK_IMPORTED_MODULE_3__["AddMonsterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/model/monster.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/monster.model.ts ***!
  \****************************************/
/*! exports provided: Monster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monster", function() { return Monster; });
var Monster = /** @class */ (function () {
    function Monster() {
    }
    return Monster;
}());



/***/ }),

/***/ "./src/app/monster-service/monster.service.ts":
/*!****************************************************!*\
  !*** ./src/app/monster-service/monster.service.ts ***!
  \****************************************************/
/*! exports provided: MonsterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterService", function() { return MonsterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonsterService = /** @class */ (function () {
    function MonsterService(http) {
        this.http = http;
        this.monsterUrl = '/api/monster';
    }
    MonsterService.prototype.getMonstersCount = function () {
        var pomogite = 0;
        this.http.get(this.monsterUrl + "/count").subscribe(function (data) {
            pomogite = data;
            console.log("pomogite " + pomogite);
        });
        return pomogite;
    };
    ;
    MonsterService.prototype.getMonsters = function (pageSize, page) {
        console.log(page);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set("pageSize", pageSize.toString());
        params = params.set("page", page.toString());
        return this.http.get(this.monsterUrl, { params: params });
    };
    ;
    MonsterService.prototype.getMonster = function (monster) {
        return this.http.get(this.monsterUrl + "/" + monster.id);
    };
    ;
    MonsterService.prototype.deleteMonster = function (monster) {
        return this.http.delete(this.monsterUrl + "/" + monster.id);
    };
    ;
    MonsterService.prototype.createMonster = function (monster) {
        return this.http.post(this.monsterUrl, monster);
    };
    ;
    MonsterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MonsterService);
    return MonsterService;
}());



/***/ }),

/***/ "./src/app/monster/monster.component.css":
/*!***********************************************!*\
  !*** ./src/app/monster/monster.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".err {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/monster/monster.component.html":
/*!************************************************!*\
  !*** ./src/app/monster/monster.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"></div>\n<div class=\"col-md-1\"></div>\n<div class=\"col-md-auto\">\n  <h2> Monster Details</h2>\n  <div class=\"form-group\">\n    <label for=\"id\">Find monster by Id:</label>\n    <h3 class=\"err\">{{errorText}}</h3>\n    <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\"><input [(ngModel)]=\"foundMonster.id\" name=\"id\" class=\"form-control\" id=\"id\"></div>\n      <div class=\"col-md-4\"></div>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"findMonster()\"> Find</button>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th class=\"hidden\">Id</th>\n          <th>Id</th>\n          <th>Name</th>\n          <th>Challenge rating</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"hidden\"></td>\n          <td>{{foundMonster.id}}</td>\n          <td>{{foundMonster.name}}</td>\n          <td>{{foundMonster.challenge_rating}}</td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteMonster(foundMonster)\"> Delete Monster</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr class=\"text-center\">\n        <th class=\"hidden\">Id</th>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Challenge rating</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let monster of monsters\">\n        <td class=\"hidden\"></td>\n        <td>{{monster.id}}</td>\n        <td>{{monster.name}}</td>\n        <td>{{monster.challenge_rating}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"deleteMonster(monster)\"> Delete Monster</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <nav>\n    <ul class=\"pagination\">\n      <li class=\"page-item\">\n        <a class=\"page-link\" (click)=\"findMonsters(currentPage - 1)\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li *ngFor=\"let page of pages\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"findMonsters(page)\">{{page}}</a>\n      </li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" (click)=\"findMonsters(currentPage + 1)\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n<div class=\"col-md-1\"></div>"

/***/ }),

/***/ "./src/app/monster/monster.component.ts":
/*!**********************************************!*\
  !*** ./src/app/monster/monster.component.ts ***!
  \**********************************************/
/*! exports provided: MonsterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterComponent", function() { return MonsterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_monster_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/monster.model */ "./src/app/model/monster.model.ts");
/* harmony import */ var _monster_service_monster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../monster-service/monster.service */ "./src/app/monster-service/monster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MonsterComponent = /** @class */ (function () {
    function MonsterComponent(router, monsterService) {
        this.router = router;
        this.monsterService = monsterService;
        this.monsterCount = 324;
        this.currentPage = 0;
        this.pages = [];
        this.pageSize = 15;
        this.foundMonster = new _model_monster_model__WEBPACK_IMPORTED_MODULE_2__["Monster"]();
    }
    MonsterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPage = 0;
        for (var i = 0; i < this.monsterCount / this.pageSize; i++) {
            this.pages.push(i + 1);
        }
        this.errorText = "";
        this.monsterService.getMonsters(this.pageSize, this.currentPage).subscribe(function (data) {
            _this.monsters = data;
        });
    };
    MonsterComponent.prototype.findMonsters = function (page) {
        var _this = this;
        this.currentPage = page;
        this.monsterCount = this.monsterService.getMonstersCount();
        this.monsterService.getMonsters(this.pageSize, page - 1).subscribe(function (data) {
            _this.monsters = data;
        });
    };
    MonsterComponent.prototype.findMonster = function () {
        var _this = this;
        this.errorText = "";
        this.monsterService.getMonster(this.foundMonster).subscribe(function (data) {
            _this.foundMonster = data;
        }, function (err) {
            if (err.status == 404) {
                _this.errorText = "Monster with id " + _this.foundMonster.id + " doesn't exist " + err.status;
            }
        });
    };
    MonsterComponent.prototype.deleteMonster = function (monster) {
        var _this = this;
        this.errorText = "";
        this.monsterService.deleteMonster(monster)
            .subscribe(function (data) {
            if (monster.id == _this.foundMonster.id) {
                _this.foundMonster = new _model_monster_model__WEBPACK_IMPORTED_MODULE_2__["Monster"]();
            }
            _this.monsters = _this.monsters.filter(function (m) { return m !== monster; });
        }, function (err) {
            if (err.status == 404) {
                _this.errorText = "Monster with id " + _this.foundMonster.id + " doesn't exist " + err.status;
            }
        });
    };
    ;
    MonsterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monster',
            template: __webpack_require__(/*! ./monster.component.html */ "./src/app/monster/monster.component.html"),
            styles: [__webpack_require__(/*! ./monster.component.css */ "./src/app/monster/monster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _monster_service_monster_service__WEBPACK_IMPORTED_MODULE_3__["MonsterService"]])
    ], MonsterComponent);
    return MonsterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dndgen\dndgen-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map