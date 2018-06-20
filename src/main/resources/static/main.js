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

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    DnD Helper\n  </h1>\n  <div style=\"text-align:left\">\n  <a routerLink=\"/monsters\" class=\"btn btn-primary btn-lg btn-space\" role=\"button\">Monsters</a>\n  <a routerLink=\"/addMonster\" class=\"btn btn-primary btn-lg btn-space\" role=\"button\">Add monster</a>\n</div>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _monster_view_monster_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./monster-view/monster-view.component */ "./src/app/monster-view/monster-view.component.ts");
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
                _add_monster_add_monster_component__WEBPACK_IMPORTED_MODULE_8__["AddMonsterComponent"],
                _monster_view_monster_view_component__WEBPACK_IMPORTED_MODULE_9__["MonsterViewComponent"]
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
/* harmony import */ var _monster_view_monster_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monster-view/monster-view.component */ "./src/app/monster-view/monster-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'monsters', component: _monster_monster_component__WEBPACK_IMPORTED_MODULE_2__["MonsterComponent"] },
    { path: 'addMonster', component: _add_monster_add_monster_component__WEBPACK_IMPORTED_MODULE_3__["AddMonsterComponent"] },
    { path: 'monster-view/:id', component: _monster_view_monster_view_component__WEBPACK_IMPORTED_MODULE_4__["MonsterViewComponent"] }
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

/***/ "./src/app/model/fullmonster.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/fullmonster.model.ts ***!
  \********************************************/
/*! exports provided: FullMonster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullMonster", function() { return FullMonster; });
var FullMonster = /** @class */ (function () {
    function FullMonster() {
    }
    return FullMonster;
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
        var count = 0;
        this.http.get(this.monsterUrl + "/count").subscribe(function (data) {
            count = data;
        });
        return count;
    };
    ;
    MonsterService.prototype.getMonsters = function (pageSize, page) {
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
    MonsterService.prototype.getMonsterByName = function (monster) {
        return this.http.get(this.monsterUrl + "/by/" + monster.name);
    };
    ;
    MonsterService.prototype.getFullMonster = function (id) {
        return this.http.get(this.monsterUrl + "/" + id);
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

/***/ "./src/app/monster-view/monster-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/monster-view/monster-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-wrap {\r\n    position: relative;\r\n  }\r\n  \r\n  .img-wrap h2 {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    top: 25px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .img-wrap-s {\r\n    position: relative;\r\n  }\r\n  \r\n  .img-wrap-s h2 {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0px;\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/monster-view/monster-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/monster-view/monster-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:left\">\n  <a routerLink=\"/monsters\" class=\"btn btn-success btn-lg btn-space\" role=\"button\">Back</a>\n</div>\n<div style=\"text-align:left\">\n    <table class=\"table\">\n      <tr>\n        <td><h1>{{monster.name}}</h1></td>\n        <td><h2>CR : {{monster.challenge_rating}}</h2></td>\n        <td><h2>{{monster.type}}</h2></td>\n        <td><h2>{{monster.size}}</h2></td>\n        <td><h2>{{monster.alignment}}</h2></td>\n      </tr>\n    </table>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n      <table>\n        <tr>\n          <td>\n              <div class=\"img-wrap\" style=\"text-align:center\">\t\t\n                  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/128px-Ei-heart.svg.png\" class=\"img-responsive\">\n                  <h2>{{monster.hit_points}}</h2>\n              </div>\n          </td>\n          <td>\n              <div class=\"img-wrap-s\" style=\"text-align:center\">\t\t\n                  <img src=\"http://icons.iconarchive.com/icons/icons8/ios7/64/Network-Shield-icon.png\" class=\"img-responsive\">\n                  <h2>{{monster.armor_class}}</h2>\n              </div>\n          </td>\n          <td>\n              <h4>{{monster.speed}}</h4>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-md-5\">\n      <h2>Saves</h2>\n      <table class=\"table\">\n        <thead>\n            <tr>\n              <th><h3>SS</h3></th>\n              <th><h3>DS</h3></th>\n              <th><h3>CS</h3></th>\n              <th><h3>IS</h3></th>\n              <th><h3>WS</h3></th>\n              <th><h3>ChS</h3></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n              <th>{{monster.strength_save}}</th>\n              <th>{{monster.dexterity_save}}</th>\n              <th>{{monster.constitution_save}}</th>\n              <th>{{monster.intelligence_save}}</th>\n              <th>{{monster.wisdom_save}}</th>\n              <th>{{monster.charisma_save}}</th>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"monster.damage_vulnerabilities || monster.damage_resistances || monster.damage_immunities || monster.condition_immunities\">\n    <h1>Ressistances and Immunities</h1>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Damage Vulnerabilities</th>\n          <th>Damage Resistances</th>\n          <th>Damage Immunities</th>\n          <th>Condition Immunities</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr>\n            <td>{{monster.damage_vulnerabilities}}</td>\n            <td>{{monster.damage_resistances}}</td>\n            <td>{{monster.damage_immunities}}</td>\n            <td>{{monster.condition_immunities}}</td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"row\">\n    <h1>Actions</h1>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Action</th>\n          <th>Attack Bonus</th>\n          <th>Damage Dice</th>\n          <th>Damage Bonus</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let action of monster.actions\">\n        <td>{{action.name}}</td>\n        <td>{{action.attack_bonus}}</td>\n        <td>{{action.damage_dice}}</td>\n        <td>{{action.damage_bonus}}</td>\n        <td>{{action.desc}}</td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"row\" *ngIf=\"monster.reactions.length\">\n    <h1>Reactions</h1>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Action</th>\n          <th>Attack Bonus</th>\n          <th>Damage Dice</th>\n          <th>Damage Bonus</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let action of monster.reactions\">\n        <td>{{action.name}}</td>\n        <td>{{action.attack_bonus}}</td>\n        <td>{{action.damage_dice}}</td>\n        <td>{{action.damage_bonus}}</td>\n        <td>{{action.desc}}</td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"row\" *ngIf=\"monster.special_abilities.length\">\n    <h1>Special Abilities</h1>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Action</th>\n          <th>Attack Bonus</th>\n          <th>Damage Dice</th>\n          <th>Damage Bonus</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let action of monster.special_abilities\">\n        <td>{{action.name}}</td>\n        <td>{{action.attack_bonus}}</td>\n        <td>{{action.damage_dice}}</td>\n        <td>{{action.damage_bonus}}</td>\n        <td>{{action.desc}}</td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"row\" *ngIf=\"monster.legendary_actions.length\">\n    <h1>Legendary Actions</h1>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Action</th>\n          <th>Attack Bonus</th>\n          <th>Damage Dice</th>\n          <th>Damage Bonus</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let action of monster.legendary_actions\">\n        <td>{{action.name}}</td>\n        <td>{{action.attack_bonus}}</td>\n        <td>{{action.damage_dice}}</td>\n        <td>{{action.damage_bonus}}</td>\n        <td>{{action.desc}}</td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h1>Abilities</h1>\n        <table class=\"table borderless\">\n            <tr>\n              <td><h2>Strength</h2></td>\n              <td><h2>{{monster.strength}}</h2></td>\n            </tr>\n            <tr>\n              <td><h2>Dexterity</h2></td>\n              <td><h2>{{monster.dexterity}}</h2></td>\n            </tr>\n            <tr>\n              <td><h2>Constitution</h2></td>\n              <td><h2>{{monster.constitution}}</h2></td>\n            </tr>\n            <tr>\n              <td><h2>Intelligence</h2></td>\n              <td><h2>{{monster.intelligence}}</h2></td>\n            </tr>\n            <tr>\n              <td><h2>Wisdom</h2></td>\n              <td><h2>{{monster.wisdom}}</h2></td>\n            </tr>\n            <tr>\n              <td><h2>Charisma</h2></td>\n              <td><h2>{{monster.charisma}}</h2></td>\n            </tr>\n        </table>\n      </div>\n      <div class=\"col-md-6\">\n        <h1>Skills</h1>\n        <table class=\"table borderless\">\n          <tr *ngIf=\"monster.history != 0\">\n            <td><h4>History</h4></td>\n            <td><h4>{{monster.history}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.religion != 0\">\n            <td><h4>Religion</h4></td>\n            <td><h4>{{monster.religion}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.perception != 0\">\n            <td><h4>Perception</h4></td>\n            <td><h4>{{monster.perception}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.medicine != 0\">\n            <td><h4>Medicine</h4></td>\n            <td><h4>{{monster.medicine}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.stealth != 0\">\n            <td><h4>Stealth</h4></td>\n            <td><h4>{{monster.stealth}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.acrobatics != 0\">\n            <td><h4>Acrobatics</h4></td>\n            <td><h4>{{monster.acrobatics}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.athletics != 0\">\n            <td><h4>Athletics</h4></td>\n            <td><h4>{{monster.athletics}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.sleight_of_hands != 0\">\n            <td><h4>Sleight of hands</h4></td>\n            <td><h4>{{monster.sleight_of_hands}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.arcana != 0\">\n            <td><h4>Arcana</h4></td>\n            <td><h4>{{monster.arcana}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.investigation != 0\">\n            <td><h4>Investigation</h4></td>\n            <td><h4>{{monster.investigation}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.nature != 0\">\n            <td><h4>Nature</h4></td>\n            <td><h4>{{monster.nature}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.insight != 0\">\n            <td><h4>Insight</h4></td>\n            <td><h4>{{monster.insight}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.survival != 0\">\n            <td><h4>Survival</h4></td>\n            <td><h4>{{monster.survival}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.deception != 0\">\n            <td><h4>Deception</h4></td>\n            <td><h4>{{monster.deception}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.intimidation != 0\">\n            <td><h4>Intimidation</h4></td>\n            <td><h4>{{monster.intimidation}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.persuasion != 0\">\n            <td><h4>Persuasion</h4></td>\n            <td><h4>{{monster.persuasion}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.performance != 0\">\n            <td><h4>Performance</h4></td>\n            <td><h4>{{monster.performance}}</h4></td>\n          </tr>\n          <tr *ngIf=\"monster.animal_handling != 0\">\n            <td><h4>Animal handling</h4></td>\n            <td><h4>{{monster.animal_handling}}</h4></td>\n          </tr>\n        </table>\n      </div>\n  </div>\n  <div class=\"row\">\n    <h1>Information</h1>\n    <h2>Senses</h2>\n    <h3>{{monster.senses}}</h3>\n    <h2>Languages</h2>\n    <h3>{{monster.languages}}</h3>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/monster-view/monster-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/monster-view/monster-view.component.ts ***!
  \********************************************************/
/*! exports provided: MonsterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsterViewComponent", function() { return MonsterViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _monster_service_monster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../monster-service/monster.service */ "./src/app/monster-service/monster.service.ts");
/* harmony import */ var src_app_model_fullmonster_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/fullmonster.model */ "./src/app/model/fullmonster.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonsterViewComponent = /** @class */ (function () {
    function MonsterViewComponent(route, router, monsterService) {
        this.route = route;
        this.router = router;
        this.monsterService = monsterService;
    }
    MonsterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.monster = new src_app_model_fullmonster_model__WEBPACK_IMPORTED_MODULE_3__["FullMonster"]();
        var id = +this.route.snapshot.paramMap.get('id');
        this.monsterService.getFullMonster(id).subscribe(function (data) {
            _this.monster = data;
            console.log(_this.monster.legendary_actions);
        });
    };
    MonsterViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monster-view',
            template: __webpack_require__(/*! ./monster-view.component.html */ "./src/app/monster-view/monster-view.component.html"),
            styles: [__webpack_require__(/*! ./monster-view.component.css */ "./src/app/monster-view/monster-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _monster_service_monster_service__WEBPACK_IMPORTED_MODULE_2__["MonsterService"]])
    ], MonsterViewComponent);
    return MonsterViewComponent;
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

module.exports = "<div class=\"row\"></div>\n<div class=\"col-md-1\"></div>\n<div class=\"col-md-auto\">\n  <h2> Monster Details</h2>\n  <div class=\"form-group\">\n    <label for=\"id\">Find monster by Name:</label>\n    <h3 class=\"err\">{{errorText}}</h3>\n    <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\"><input [(ngModel)]=\"foundMonster.name\" name=\"name\" class=\"form-control\" id=\"name\"></div>\n      <div class=\"col-md-4\"></div>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"findMonster()\"> Find</button>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th class=\"hidden\">Id</th>\n          <th><h2>Name</h2></th>\n          <th><h2>Challenge rating</h2></th>\n          <th><h2>Action</h2></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><a routerLink=\"/monster-view/{{foundMonster.id}}\" class=\"btn btn-success btn-lg btn-space\" role=\"button\">{{foundMonster.name}}</a></td>\n          <td>{{foundMonster.challenge_rating}}</td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"deleteMonster(foundMonster)\"> Delete Monster</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr class=\"text-center\">\n          <th><h2>Name</h2></th>\n          <th><h2>Challenge rating</h2></th>\n          <th><h2>Action</h2></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let monster of monsters\">\n        <td><a routerLink=\"/monster-view/{{monster.id}}\" class=\"btn btn-success btn-lg btn-space\" role=\"button\">{{monster.name}}</a></td>\n        <td><h3>{{monster.challenge_rating}}</h3></td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"deleteMonster(monster)\"> Delete Monster</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <nav>\n    <ul class=\"pagination\">\n      <li class=\"page-item\">\n        <a class=\"page-link\" (click)=\"findMonsters(currentPage - 1)\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li *ngFor=\"let page of pages\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"findMonsters(page)\">{{page}}</a>\n      </li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" (click)=\"findMonsters(currentPage + 1)\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n<div class=\"col-md-1\"></div>"

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
        this.monsterService.getMonsterByName(this.foundMonster).subscribe(function (data) {
            _this.foundMonster = data;
        }, function (err) {
            if (err.status == 404) {
                _this.errorText = "Monster with name " + _this.foundMonster.name + " doesn't exist " + err.status;
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