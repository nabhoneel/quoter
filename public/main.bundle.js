webpackJsonp([1,4],{

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotationService = (function () {
    function QuotationService(http) {
        this.http = http;
    }
    QuotationService.prototype.saveQuote = function (quote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var creator = JSON.parse(localStorage.getItem('currentUser')).username.toString();
        console.log(creator);
        var newQuote = {
            creator: creator,
            client: quote.client,
            production: {
                crew: quote.crew,
                equipments: quote.equipments,
                total: quote.productionTotal
            },
            postProduction: {
                numberOfVideos: quote.numberOfVideos,
                averageLength: quote.averageLength,
                editStyle: quote.editStyle,
                complexity: quote.complexity,
                unitCost: quote.unitCost,
                total: quote.postProductionTotal
            },
            total: quote.total,
            quote: quote.quote
        };
        console.log(newQuote);
        return this.http.post('api/quote', newQuote, { headers: headers }).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.deleteQuote = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("api/quote" + "/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QuotationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], QuotationService);
    return QuotationService;
    var _a;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/quotation.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined)
            return false;
        else
            return true;
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/validate.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(685),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_create_create_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_quotation_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__(515);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_10__components_create_create_component__["a" /* CreateComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_14__services_quotation_service__["a" /* QuotationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotation_service__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = (function () {
    function CreateComponent(_fb, save) {
        this._fb = _fb;
        this.save = save;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.quotationForm = this._fb.group({
            client: [''],
            crew: this._fb.array([
                this.initCrew()
            ]),
            equipments: this._fb.array([
                this.initEquipments()
            ]),
            productionTotal: [''],
            numberOfVideos: [''],
            averageLength: [''],
            editStyle: [''],
            complexity: [''],
            unitCost: [''],
            postProductionTotal: [''],
            total: [''],
            quote: ['']
        });
    };
    CreateComponent.prototype.initCrew = function () {
        //the general item schema (crew/equipments):
        return this._fb.group({
            type: [''],
            category: [''],
            unitCost: [''],
            units: [''],
            cost: ['']
        });
    };
    CreateComponent.prototype.initEquipments = function () {
        //the general item schema (crew/equipments):
        return this._fb.group({
            type: [''],
            category: [''],
            unitCost: [''],
            units: [''],
            cost: ['']
        });
    };
    CreateComponent.prototype.saveQuote = function () {
        this.save.saveQuote(this.quotationForm.value).subscribe(function (data) {
            if (data.status == "success") {
                console.log("added to database");
            }
            else {
                console.log("there was some error [" + data.msg + "]");
            }
        });
    };
    CreateComponent.prototype.addCrew = function () {
        // add address to the list
        var control = this.quotationForm.controls['crew'];
        control.push(this.initCrew());
    };
    CreateComponent.prototype.removeCrew = function (i) {
        // remove address from the list
        var control = this.quotationForm.controls['crew'];
        control.removeAt(i);
    };
    CreateComponent.prototype.addEquipment = function () {
        var control = this.quotationForm.controls['equipments'];
        control.push(this.initCrew());
    };
    CreateComponent.prototype.removeEquipment = function (i) {
        var control = this.quotationForm.controls['equipments'];
        control.removeAt(i);
    };
    CreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(686),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_quotation_service__["a" /* QuotationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_quotation_service__["a" /* QuotationService */]) === 'function' && _b) || Object])
    ], CreateComponent);
    return CreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/create.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotation_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(router, authService, quoteService) {
        this.router = router;
        this.authService = authService;
        this.quoteService = quoteService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getDashboard().subscribe(function (data) {
            _this.quotes = data;
            _this.dates = new Array(data.length);
            for (var i = 0; i < data.length; i++) {
                var d = new Date(_this.quotes[i.toString()].date);
                _this.dates[i] = (d.getDate()).toString() + "-" + (d.getMonth() + 1).toString() + "-" + (d.getFullYear()).toString();
            }
            _this.fullDates = new Array(data.length);
            for (var i = 0; i < data.length; i++) {
                var d = new Date(_this.quotes[i.toString()].date);
                _this.fullDates[i] = d.toString();
            }
        });
    };
    DashboardComponent.prototype.showDeleteWarning = function () {
        this.deleteWarning = true;
    };
    DashboardComponent.prototype.isShowWarning = function () {
        return this.deleteWarning;
    };
    DashboardComponent.prototype.removeWarning = function () {
        this.deleteWarning = false;
    };
    DashboardComponent.prototype.deleteQuote = function (id, i) {
        this.quotes.splice(i, 1);
        console.log(i);
        this.deleteWarning = false;
        this.quoteService.deleteQuote(id).subscribe(function (data) {
            console.log(data);
        });
    };
    DashboardComponent.prototype.isEmpty = function () {
        if (this.quotes == null)
            return true;
        if (this.quotes.length == 0)
            return true;
        return false;
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(687),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_quotation_service__["a" /* QuotationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_quotation_service__["a" /* QuotationService */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.date = new Date().getFullYear();
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(688),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/footer.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(689),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/home.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.invalid = false;
                _this.router.navigate(['/dashboard']);
                _this.authService.storeData(data.token, data.user);
            }
            else {
                _this.errorMessage = data.message;
                _this.invalid = true;
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(690),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/login.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(691),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var newUser = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        this.clicked = true;
        if (!this.validateService.validateRegister(newUser)) {
            this.invalid = false;
            return false;
        }
        else
            this.invalid = true;
        this.authService.registerUser(newUser).subscribe(function (data) {
            if (data.success) {
                _this.registered = true;
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 3000);
            }
            else {
                _this.notRegistered = true;
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.isValid = function () {
        if (this.clicked == true)
            return this.invalid;
        else
            return true;
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(692),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/register.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.loggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/environment.js.map

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ".container {\n    margin: 2em auto;\n}\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ".col-sm-5 input[type=\"text\"] {\n    margin: 1em 0;\n}\n\ntable {\n    text-align: center;\n    margin: 1em 0;\n}\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ".quoteCard {\n    margin: 1em 0;\n}\n\n.card-body {\n    text-align: center;\n}\n\n.table {\n    text-align: center;\n}\n\n.col-sm-5 {\n    text-align: right;\n}\n\n.alert {\n    padding: 0.50rem 1rem;\n    margin-bottom: 0;\n}\n\n.jumbotron {\n    text-align: center;\n    font-family: Raleway;\n    color: #b1b1b1;\n    line-height: 1em;\n}\n\n.jumbotron h1 {\n    font-size: 4em !important;\n}\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "/* Sticky footer styles\n-------------------------------------------------- */\nhtml {\n  position: relative;\n  min-height: 100%;\n}\nbody {\n  margin-bottom: 60px; /* Margin bottom by footer height */\n}\n\n.footer {\n    position: relative;\n    bottom: 0;\n    width: 100%;\n    height: 60px; /* Set the fixed height of the footer here */\n    line-height: 60px; /* Vertically center the text there */\n    background-color: #f5f5f5;\n}\n\n@media screen and (min-width: 500px) {\n    .footer {\n        position: absolute;\n    }\n}\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    text-align: center;\n    font-family: Raleway;\n    color: #b1b1b1;\n    line-height: 1em;\n}\n\n.jumbotron h1 {\n    font-size: 4em !important;\n}\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 40px;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .checkbox {\n  font-weight: 400;\n}\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin input[type=\"text\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 40px;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .checkbox {\n  font-weight: 400;\n}\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin input[type=\"email\"], .form-signin input[type=\"text\"] {\n    margin-bottom: -1px;\n    border-radius: 0;\n}\n.form-signin input[type=\"name\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"quotationForm\" novalidate (ngSubmit) = \"saveQuote()\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-7\">\n            <div class=\"form-group form-row\" style=\"text-align: center;\">\n                <div class=\"col-sm-12\"><input type=\"text\" formControlName=\"client\" class=\"form-control\" placeholder=\"client's name\"></div>\n            </div>\n\n            <div formArrayName = \"crew\">\n                <div>\n                    <table class=\"table table-sm\">\n                        <thead class=\"thead-dark\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">type</th>\n                                <th scope=\"col\">category</th>\n                                <th scope=\"col\">unit cost</th>\n                                <th scope=\"col\">units</th>\n                                <th scope=\"col\">cost</th>\n                                <th scope=\"col\"></th>\n                            </tr>\n                        </thead>\n                        <tbody *ngFor = \"let crew of quotationForm.controls.crew.controls; let i=index\">\n                            <tr [formGroupName] = \"i\">\n                                <th scope=\"row\">{{i + 1}}</th>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"type\"></td>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"category\"></td>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"unitCost\"></td>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"units\"></td>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"cost\"></td>\n                                <td><span *ngIf=\"quotationForm.controls.crew.controls.length > 1\" (click)=\"removeCrew(i)\"><i class=\"far fa-times-circle\" ></i></span></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n\n            <a (click)=\"addCrew()\" class=\"btn btn-outline-primary\" role=\"button\">\n                Add crew\n            </a>\n\n            <div formArrayName = \"equipments\">\n                <div>\n                    <table class=\"table table-sm\">\n                        <thead class=\"thead-dark\">\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">type</th>\n                                <th scope=\"col\">category</th>\n                                <th scope=\"col\">unit cost</th>\n                                <th scope=\"col\">units</th>\n                                <th scope=\"col\">cost</th>\n                                <th scope=\"col\"></th>\n                            </tr>\n                        </thead>\n                        <tbody *ngFor = \"let crew of quotationForm.controls.equipments.controls; let i=index\">\n                            <tr [formGroupName] = \"i\">\n                                <th scope=\"row\">{{i + 1}}</th>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"type\"></td>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"category\"></td>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"unitCost\"></td>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"units\"></td>\n                                <td><input type=\"text\" class=\"form-control\" formControlName=\"cost\"></td>\n                                <td><span *ngIf=\"quotationForm.controls.equipments.controls.length > 1\" (click)=\"removeEquipment(i)\"><i class=\"far fa-times-circle\" ></i></span></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n\n            <a (click)=\"addEquipment()\" class=\"btn btn-outline-primary\" role=\"button\">\n                Add equipment\n            </a>\n\n            <div class=\"form-group form-row\" style=\"text-align: center;\">\n                <input type=\"text\" formControlName=\"productionTotal\" class=\"form-control\" placeholder=\"total production cost\" style=\"margin: 1em;\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <input type=\"text\" formControlName=\"numberOfVideos\" class=\"form-control\" placeholder=\"number of videos\">\n            <input type=\"text\" formControlName=\"averageLength\" class=\"form-control\" placeholder=\"average length\">\n            <input type=\"text\" formControlName=\"editStyle\" class=\"form-control\" placeholder=\"edit style\">\n            <input type=\"text\" formControlName=\"complexity\" class=\"form-control\" placeholder=\"complexity\">\n            <input type=\"text\" formControlName=\"unitCost\" class=\"form-control\" placeholder=\"unit cost\">\n            <input type=\"text\" formControlName=\"postProductionTotal\" class=\"form-control\" placeholder=\"total post production cost\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\"><input type=\"text\" formControlName=\"total\" class=\"form-control\" placeholder=\"total cost\"></div>\n                <div class=\"col-sm-6\"><input type=\"text\" formControlName=\"quote\" class=\"form-control\" placeholder=\"quotation\"></div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-danger\">Save</button>\n        </div>\n    </div>\n\n</form>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"isEmpty()\">\n    <div class=\"jumbotron\">\n        <h1>This seems pretty useless now (I know).<br><br>Take baby steps.<br>Create a new quotation document</h1>\n    </div>\n</div>\n\n<div *ngIf = \"quotes\">\n    <div class=\"row\">\n        <div *ngFor = \"let quote of quotes; let i=index\" class=\"col-sm-4 quoteCard\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{dates[i]}}</h5>\n                    <p class=\"card-text\">{{quote.client}}</p>\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" [attr.data-target]=\"'#' + i\">Expand</button>\n                </div>\n            </div>\n\n            <div class=\"modal fade\" [id]=\"i\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\">{{quote.client}}<br>[{{fullDates[i]}}]</h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"removeWarning()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <div class=\"row\" style=\"text-align: center;\">\n                                <div class=\"col-sm-6\">\n                                    <h2>total: {{quote.total}}</h2>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <h2>quotation: {{quote.quote}}</h2>\n                                </div>\n                            </div>\n                            <h2>crew</h2>\n                            <table class=\"table table-sm\">\n                                <thead class=\"thead-dark\">\n                                    <tr>\n                                        <th scope=\"col\">type</th>\n                                        <th scope=\"col\">category</th>\n                                        <th scope=\"col\">unit cost</th>\n                                        <th scope=\"col\">units</th>\n                                        <th scope=\"col\">cost</th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngFor = \"let p of quote.production.crew\">\n                                    <tr>\n                                        <td>{{p.type}}</td>\n                                        <td>{{p.category}}</td>\n                                        <td>{{p.unitCost}}</td>\n                                        <td>{{p.units}}</td>\n                                        <td>{{p.cost}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                            <h2>equipments</h2>\n                            <table class=\"table table-sm\">\n                                <thead class=\"thead-dark\">\n                                    <tr>\n                                        <th scope=\"col\">type</th>\n                                        <th scope=\"col\">category</th>\n                                        <th scope=\"col\">unit cost</th>\n                                        <th scope=\"col\">units</th>\n                                        <th scope=\"col\">cost</th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngFor = \"let p of quote.production.equipments\">\n                                    <tr>\n                                        <td>{{p.type}}</td>\n                                        <td>{{p.category}}</td>\n                                        <td>{{p.unitCost}}</td>\n                                        <td>{{p.units}}</td>\n                                        <td>{{p.cost}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                            <h2>post production</h2>\n                            <div class=\"row\" style=\"padding: 0 3em;\">\n                                <div class=\"col-sm-7\">number of videos</div>\n                                <div class=\"col-sm-5\">{{quote.postProduction.numberOfVideos}}</div>\n                                <div class=\"col-sm-7\">average length</div>\n                                <div class=\"col-sm-5\">{{quote.postProduction.averageLength}}</div>\n                                <div class=\"col-sm-7\">edit style</div>\n                                <div class=\"col-sm-5\">{{quote.postProduction.editStyle}}</div>\n                                <div class=\"col-sm-7\">complexity</div>\n                                <div class=\"col-sm-5\">{{quote.postProduction.complexity}}</div>\n                                <div class=\"col-sm-7\">unit cost</div>\n                                <div class=\"col-sm-5\">{{quote.postProduction.unitCost}}</div>\n                                <div class=\"col-sm-7\">total</div>\n                                <div class=\"col-sm-5\">{{quote.postProduction.total}}</div>\n                            </div>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-warning\" (click)=\"showDeleteWarning()\">Delete</button>\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"removeWarning()\" data-dismiss=\"modal\">Close</button>\n                            <div *ngIf = \"deleteWarning\">\n                                Are you sure you want to delete this?&nbsp;\n                                <a class=\"btn btn-info\" (click)=\"deleteQuote(quote._id, i)\" data-dismiss=\"modal\">Yes</a>\n                                <a class=\"btn btn-danger\" (click)=\"removeWarning()\">Not really</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\" style=\"text-align: center;\">\n        <div class=\"col-sm-6\">\n            Anon. Tech\n        </div>\n        <div class=\"col-sm-6\">\n            &copy;{{ date }}\n        </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1>\n        How to complete making a quotation:\n        <br>\n        Use <img src=\"../../../favicon.ico\" width=80>uoter.\n    </h1><br>\n    <h2>Seriously though, <a [routerLink]=\"['/register']\">register</a> yourself, and then <a [routerLink]=\"['/login']\">login</a></h2>\n</div>\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\n    <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n        <img class=\"mb-4\" src=\"../../../favicon.ico\" alt=\"\" width=\"100\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">First and foremost, sign in</h1>\n\n        <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n        <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\">\n\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n\n        <br>\n        <div *ngIf = \"invalid\">\n            <div class=\"alert alert-warning\" role=\"alert\">\n              {{errorMessage}}\n            </div>\n        </div>\n    </form>\n</body>\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\">Quoter</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-between\" id=\"navbarCollapse\">\n            <ul class=\"navbar-nav navbar-left\">\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a class=\"nav-link\" [routerLink]=\"['/create']\">New Quotation</a></li>\n            </ul>\n            <ul class=\"navbar-nav navbar-right\">\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\n                <li *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"onLogoutClick()\">Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\n    <form class=\"form-signin\" (submit)=\"onRegisterSubmit()\">\n        <img class=\"mb-4\" src=\"../../../favicon.ico\" alt=\"\" width=\"100\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Create an account</h1>\n\n        <input type=\"name\" [(ngModel)]=\"name\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n        <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email address\">\n        <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n        <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\">\n\n        <div *ngIf = \"!isValid()\">\n            <div class=\"alert alert-warning\" role=\"alert\">\n              All fields must be filled\n            </div>\n        </div>\n\n        <div *ngIf = \"registered\">\n            <div class=\"alert alert-success\" role=\"alert\">\n              You have been registered!\n              <img class=\"mb-4\" src=\"../../img/loading.gif\" alt=\"\" width=\"50\">\n            </div>\n        </div>\n        <div *ngIf = \"notRegistered\">\n            <div class=\"alert alert-warning\" role=\"alert\">\n              Something went wrong :(\n            </div>\n        </div>\n\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Register</button>\n    </form>\n</body>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.storeData = function (token, user) {
        this.authToken = token;
        this.user = user;
        localStorage.setItem("id_token", token);
        localStorage.setItem("currentUser", JSON.stringify(user));
    };
    AuthenticationService.prototype.getDashboard = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        var user = JSON.parse(localStorage.getItem('currentUser')).username.toString();
        return this.http.get('api/dashboard/' + user, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem("id_token");
        this.authToken = token;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthenticationService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=/home/nabhoneelm/mean/quoter/angular-src/src/authentication.service.js.map

/***/ })

},[730]);
//# sourceMappingURL=main.bundle.map