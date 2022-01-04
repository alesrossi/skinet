"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[963],{4963:(H,h,r)=>{r.r(h),r.d(h,{ShopModule:()=>F});var c=r(8583),v=r(4466),p=r(15);class g{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageIndex=1,this.pageSize=6}}var t=r(3018),m=r(1841);class C{constructor(){this.data=[]}}var d=r(8002),u=r(5917),S=r(2340);let _=(()=>{class o{constructor(e){this.http=e,this.baseUrl=S.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new C,this.shopParams=new g,this.productCache=new Map}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getProducts(e){if(e||(this.productCache=new Map),this.productCache.size>0&&e&&this.productCache.has(Object.values(this.shopParams).join("-")))return this.pagination.data=this.productCache.get(Object.values(this.shopParams).join("-")),(0,u.of)(this.pagination);let n=new m.LE;return 0!==this.shopParams.brandId&&(n=n.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(n=n.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(n=n.append("search",this.shopParams.search)),n=n.append("sort",this.shopParams.sort),n=n.append("pageIndex",this.shopParams.pageIndex.toString()),n=n.append("pageIndex",this.shopParams.pageSize.toString()),this.http.get(this.baseUrl+"products",{observe:"response",params:n}).pipe((0,d.U)(s=>(this.productCache.set(Object.values(this.shopParams).join("-"),s.body.data),this.pagination=s.body,this.pagination)))}getProduct(e){let n;return this.productCache.forEach(s=>{n=s.find(a=>a.id===e)}),n?(0,u.of)(n):this.http.get(this.baseUrl+"products/"+e)}getBrands(){return this.brands.length>0?(0,u.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,d.U)(e=>(this.brands=e,e)))}getTypes(){return this.types.length>0?(0,u.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,d.U)(e=>(this.types=e,e)))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var l=r(665);let x=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-paging-header"]],inputs:{pageIndex:"pageIndex",pageSize:"pageSize",totalCount:"totalCount"},decls:9,vars:3,template:function(e,n){1&e&&(t.TgZ(0,"header"),t.TgZ(1,"span"),t._uU(2,"Showing "),t.TgZ(3,"strong"),t._uU(4),t.qZA(),t._uU(5," of "),t.TgZ(6,"strong"),t._uU(7),t.qZA(),t._uU(8," Results"),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.AsE("",0!==n.totalCount?(n.pageIndex-1)*n.pageSize+1:0," - ",n.pageIndex*n.pageSize>n.totalCount?n.totalCount:n.pageIndex*n.pageSize,""),t.xp6(3),t.Oqu(n.totalCount))},styles:[""]}),o})();var f=r(9508);let Z=(()=>{class o{constructor(e){this.basketService=e}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-item"]],inputs:{product:"product"},decls:17,vars:9,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"],[1,"card-text","overflow-auto",2,"height","30px"],[1,"d-flex","justify-content-between","align-items-center"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3),t.TgZ(4,"button",4),t.NdJ("click",function(){return n.addItemToBasket()}),t.qZA(),t.TgZ(5,"button",5),t._uU(6,"View"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"a",7),t.TgZ(9,"h6",8),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"p",10),t._uU(15,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),t.qZA(),t._UZ(16,"div",11),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.s9C("src",n.product.pictureUrl,t.LSH),t.s9C("alt",n.product.name),t.xp6(3),t.MGl("routerLink","/shop/",n.product.id,""),t.xp6(3),t.MGl("routerLink","/shop/",n.product.id,""),t.xp6(2),t.Oqu(n.product.name),t.xp6(2),t.Oqu(t.xi3(13,6,n.product.price,"EUR")))},directives:[p.rH,p.yS],pipes:[c.H9],styles:[".btn[_ngcontent-%COMP%]{width:40%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-25px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(25px)}"]}),o})();var P=r(2214);let T=(()=>{class o{constructor(){this.pageChanged=new t.vpe}ngOnInit(){}onPagerChange(e){this.pageChanged.emit(e.page)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pager"]],inputs:{count:"count",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(e,n){1&e&&(t.TgZ(0,"pagination",0),t.NdJ("pageChanged",function(a){return n.onPagerChange(a)}),t.qZA()),2&e&&t.Q6J("boundaryLinks",!0)("totalItems",n.count)("ngModel",n.pageNumber)("itemsPerPage",n.pageSize)},directives:[P.Qt,l.JJ,l.On],styles:[""]}),o})();const b=["search"];function y(o,i){if(1&o&&(t.TgZ(0,"option",14),t._uU(1),t.qZA()),2&o){const e=i.$implicit,n=t.oxw(2);t.Q6J("value",e.value)("selected",n.shopParams.sort===e.value),t.xp6(1),t.hij(" ",e.name," ")}}function A(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"li",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).onBrandSelected(a.id)}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw(2);t.ekj("active",e.id===n.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function I(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"li",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).onTypeSelected(a.id)}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw(2);t.ekj("active",e.id===n.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function q(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"h5",9),t._uU(2,"Sort"),t.qZA(),t.TgZ(3,"select",10),t.NdJ("change",function(s){return t.CHM(e),t.oxw().onSortSelected(s.target.value)}),t.YNc(4,y,2,3,"option",11),t.qZA(),t.TgZ(5,"h5",9),t._uU(6,"Brands"),t.qZA(),t.TgZ(7,"ul",12),t.YNc(8,A,2,4,"li",13),t.qZA(),t.TgZ(9,"h5",9),t._uU(10,"Types"),t.qZA(),t.TgZ(11,"ul",12),t.YNc(12,I,2,4,"li",13),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types)}}function w(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",16),t._UZ(1,"app-paging-header",17),t.TgZ(2,"div",18),t.TgZ(3,"input",19,20),t.NdJ("keyup.enter",function(){return t.CHM(e),t.oxw().onSearch()}),t.qZA(),t.TgZ(5,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSearch()}),t._uU(6,"Search"),t.qZA(),t.TgZ(7,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().onReset()}),t._uU(8,"Reset"),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageIndex",e.shopParams.pageIndex)}}function O(o,i){if(1&o&&(t.TgZ(0,"div",23),t._UZ(1,"app-product-item",24),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("product",e)}}function k(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",25),t.TgZ(1,"app-pager",26),t.NdJ("pageChanged",function(s){return t.CHM(e),t.oxw().onPageChanged(s)}),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("pageSize",e.shopParams.pageSize)("count",e.totalCount)("pageNumber",e.shopParams.pageIndex)}}let M=(()=>{class o{constructor(e){this.shopService=e,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(e=!1){this.shopService.getProducts(e).subscribe(n=>{this.products=n.data,this.totalCount=n.count},n=>{console.log(n)})}getBrands(){this.shopService.getBrands().subscribe(e=>{this.brands=[{id:0,name:"All"},...e]},e=>{console.log(e)})}getTypes(){this.shopService.getTypes().subscribe(e=>{this.types=[{id:0,name:"All"},...e]},e=>{console.log(e)})}onBrandSelected(e){const n=this.shopService.getShopParams();n.brandId=e,n.pageIndex=1,this.shopService.setShopParams(n),this.getProducts()}onTypeSelected(e){const n=this.shopService.getShopParams();n.typeId=e,n.pageIndex=1,this.shopService.setShopParams(n),this.getProducts()}onSortSelected(e){const n=this.shopService.getShopParams();n.sort=e,this.shopService.setShopParams(n),this.getProducts()}onPageChanged(e){const n=this.shopService.getShopParams();n.pageIndex!==e&&(n.pageIndex=e,this.shopService.setShopParams(n),this.getProducts(!0))}onSearch(){const e=this.shopService.getShopParams();e.search=this.searchTerm.nativeElement.value,e.pageIndex=1,this.shopService.setShopParams(e),this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new g,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop"]],viewQuery:function(e,n){if(1&e&&t.Gf(b,5),2&e){let s;t.iGM(s=t.CRH())&&(n.searchTerm=s.first)}},decls:9,vars:4,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],["class","d-flex justify-content-between align-items-center pb-2",4,"ngIf"],[1,"row","h-100","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-warning","ml-3"],[1,"custom-select","clickable","mb-3",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"list-group","my-3"],["class","clickable list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"value","selected"],[1,"clickable","list-group-item",3,"value","click"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageSize","pageIndex"],[1,"form-inline","mt-2"],["placeholder","Search...","type","text",1,"form-control","mr-2",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","my-2",3,"click"],[1,"btn","btn-outline-success","ml-2","my-2",3,"click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageSize","count","pageNumber","pageChanged"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"section",2),t.YNc(3,q,13,3,"ng-container",3),t.qZA(),t.TgZ(4,"section",4),t.YNc(5,w,9,3,"div",5),t.TgZ(6,"div",6),t.YNc(7,O,2,1,"div",7),t.qZA(),t.YNc(8,k,2,3,"div",8),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",n.types&&n.brands),t.xp6(2),t.Q6J("ngIf",n.products),t.xp6(2),t.Q6J("ngForOf",n.products),t.xp6(1),t.Q6J("ngIf",n.totalCount>0))},directives:[c.O5,c.sg,l.YN,l.Kr,x,Z,T],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item[_ngcontent-%COMP%]:focus{outline:none}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{border-radius:10px;color:#fff;background-color:#55595c}.active[_ngcontent-%COMP%]{color:#f5f5f5}"]}),o})();var U=r(9957);function J(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",6),t.TgZ(10,"i",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().decrementQuantity()}),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.qZA(),t.TgZ(13,"i",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().incrementQuantity()}),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().addItemToBasket()}),t._uU(15,"Add to cart"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"h4"),t._uU(18,"Description"),t.qZA(),t.TgZ(19,"p"),t._uU(20),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.xi3(8,6,e.product.price,"EUR")),t.xp6(5),t.Oqu(e.quantity),t.xp6(8),t.Oqu(e.product.description)}}const z=[{path:"",component:M},{path:":id",component:(()=>{class o{constructor(e,n,s,a){this.shopService=e,this.activatedRoute=n,this.bcService=s,this.basketService=a,this.quantity=1,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe(e=>{this.product=e,this.bcService.set("@productDetails",e.name)},e=>{console.log(e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_),t.Y36(p.gz),t.Y36(U.pm),t.Y36(f.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","ml-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn-outline-primary","btn-md","ml-4",3,"click"],[1,"col-12","ml-3"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,J,21,9,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.product))},directives:[c.O5],pipes:[c.H9],encapsulation:2}),o})(),data:{breadcrumb:{alias:"productDetails"}}}];let N=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(z)],p.Bz]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,v.m,N]]}),o})()}}]);