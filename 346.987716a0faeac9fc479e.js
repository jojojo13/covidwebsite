(self.webpackChunkmockproject=self.webpackChunkmockproject||[]).push([[346],{5346:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DashBoard:()=>p});var o=n(8094),r=n(7716),i=n(9769),s=n(8583),c=n(4225);function d(t,e){if(1&t&&(r.TgZ(0,"tr"),r.TgZ(1,"td",5),r._uU(2),r.qZA(),r.TgZ(3,"td",5),r._UZ(4,"img",6),r._uU(5),r.qZA(),r.TgZ(6,"td",5),r._uU(7),r.ALo(8,"number"),r.qZA(),r.qZA()),2&t){const t=e.$implicit,n=r.oxw();r.xp6(2),r.Oqu(t.top),r.xp6(2),r.MGl("src","https://www.countryflags.io/",null==t.countrycode?null:t.countrycode.iso2,"/flat/32.png",r.LSH),r.xp6(1),r.hij("",t.countryregion," "),r.xp6(2),r.Oqu(r.lcZ(8,4,t[n.label]))}}const l=function(t){return{active:t}};let a=(()=>{class t{constructor(t){this.regionSer=t,this.label="confirmed",this.startIndex=0,this.endIndex=10}ngOnInit(){this.top20CountriesByKey("confirmed")}top20CountriesByKey(t){this.regionSer.getAllCountry().subscribe(e=>{let n;n=e,n.sort((e,n)=>e[t]-n[t]),this.top20Countries=n.slice(n.length-20).reverse();let o=1;for(let t of this.top20Countries)t.top=o,o++;this.CountriesByPage=this.top20Countries.slice(this.startIndex,this.endIndex)})}onPageChange(t){var e;this.startIndex=t.pageIndex*t.pageSize,this.endIndex=this.startIndex+t.pageSize,this.endIndex>(null===(e=this.top20Countries)||void 0===e?void 0:e.length)&&(this.endIndex=this.top20Countries.length),this.CountriesByPage=this.top20Countries.slice(this.startIndex,this.endIndex)}showConfirmed(){this.label="confirmed",this.top20CountriesByKey("confirmed")}showRecovered(){this.label="recovered",this.top20CountriesByKey("recovered")}showDeaths(){this.label="deaths",this.top20CountriesByKey("deaths")}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i.j))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-dashboard-rendered"]],decls:18,vars:15,consts:[[1,"select"],[3,"ngClass","click"],["scope","col"],[4,"ngFor","ngForOf"],[3,"length","pageSize","page"],["scope","row"],["alt","",3,"src"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"a",1),r.NdJ("click",function(){return e.showConfirmed()}),r._uU(2,"Confirmed"),r.qZA(),r.TgZ(3,"a",1),r.NdJ("click",function(){return e.showRecovered()}),r._uU(4,"Recovered"),r.qZA(),r.TgZ(5,"a",1),r.NdJ("click",function(){return e.showDeaths()}),r._uU(6," Deaths"),r.qZA(),r.qZA(),r.TgZ(7,"table"),r.TgZ(8,"tr"),r.TgZ(9,"th",2),r._uU(10,"TOP"),r.qZA(),r.TgZ(11,"th",2),r._uU(12,"COUNTRY"),r.qZA(),r.TgZ(13,"th",2),r._uU(14),r.ALo(15,"uppercase"),r.qZA(),r.qZA(),r.YNc(16,d,9,6,"tr",3),r.qZA(),r.TgZ(17,"mat-paginator",4),r.NdJ("page",function(t){return e.onPageChange(t)}),r.qZA()),2&t&&(r.xp6(1),r.Q6J("ngClass",r.VKq(9,l,"confirmed"==e.label)),r.xp6(2),r.Q6J("ngClass",r.VKq(11,l,"recovered"==e.label)),r.xp6(2),r.Q6J("ngClass",r.VKq(13,l,"deaths"==e.label)),r.xp6(9),r.Oqu(r.lcZ(15,7,e.label)),r.xp6(2),r.Q6J("ngForOf",e.CountriesByPage),r.xp6(1),r.Q6J("length",null==e.top20Countries?null:e.top20Countries.length)("pageSize",10))},directives:[s.mk,s.sg,c.NW],pipes:[s.gd,s.JJ],styles:[".select[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:center}.select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:15px;border:none;width:80px;padding:8px 10px;margin-bottom:10px;background-color:#fff;text-decoration:none;color:#343a40;font-size:.7em;text-align:center}.select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{border-top-right-radius:0;border-bottom-right-radius:0;border-right:1px solid gray}.select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2){border-radius:0;border-right:1px solid gray}.select[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3){border-top-left-radius:0;border-bottom-left-radius:0}.active[_ngcontent-%COMP%]{background-color:#add8e6!important}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;font-size:.7em}tr[_ngcontent-%COMP%]:first-child{border-bottom:2px solid #454d55;border-top:1px solid #454d55}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border-bottom:1px solid #454d55;text-align:left;padding:4px 2px;font-size:.9em}td[_ngcontent-%COMP%]{padding-left:8px}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){display:flex;align-items:center}img[_ngcontent-%COMP%]{margin-right:10px}"]}),t})();console.warn("cai nay da duoc load");const g=[{path:"",component:a}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.Bz.forChild(g)],o.Bz]}),t})()}}]);