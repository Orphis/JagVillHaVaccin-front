var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20;function _taggedTemplateLiteralLoose(e,t){return t||(t=e.slice(0)),e.raw=t,e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function asyncGeneratorStep(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,a)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){asyncGeneratorStep(i,r,a,o,c,"next",e)}function c(e){asyncGeneratorStep(i,r,a,o,c,"throw",e)}o(void 0)}))}}var __vite_style__=document.createElement("style");__vite_style__.innerHTML=".rdvForm-fields{max-width:75vw;margin:auto}@media (min-width:1200px){.rdvForm-fields{max-width:65vw}}@media (min-width:768px){.rdvForm-fields input,.rdvForm-fields label,.rdvForm-fields select{font-size:2.4rem}}.eligibility-criteria{position:fixed;bottom:0;left:0;color:#b02a37;width:100%;background-color:#f8d7da;text-align:center;vertical-align:center}.eligibility-criteria p{margin:.5em}.fade-in-then-fade-out{-webkit-animation-name:fade-in-then-fade-out;animation-name:fade-in-then-fade-out;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes fade-in-then-fade-out{0%,100%{opacity:0}10%,90%{opacity:1}}@keyframes fade-in-then-fade-out{0%,100%{opacity:0}10%,90%{opacity:1}}vmd-appointment-card{display:block;opacity:1;-webkit-animation:fade-in ease-in .2s;animation:fade-in ease-in .2s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards;-webkit-animation-delay:calc((var(--list-index) * 60ms) + 50ms);animation-delay:calc((var(--list-index) * 60ms) + 50ms)}@-webkit-keyframes fade-in{from{opacity:0;filter:saturate(0)}to{opacity:1;filter:saturate(100%)}}@keyframes fade-in{from{opacity:0;filter:saturate(0)}to{opacity:1;filter:saturate(100%)}}.criteria-container.search-standard{background-color:#e6e7f9}.criteria-container.search-chronodose{background-color:#fdeeef}.container-content{max-width:80vw;margin:0 auto}@media (min-width:1200px){.container-content{max-width:65vw}}",document.head.appendChild(__vite_style__),System.register(["./index-legacy.1980c1d7.js","./vendor-legacy.068dccb3.js"],(function(e){"use strict";var t,n,r,a,i,o,c,s,u,l,d,p,m,h,f,b,v,y,g,_,x,S,T,w,D,k,O,j,L;return{setters:[function(e){t=e.r,n=e.t,r=e.f,a=e.g,i=e.i,o=e.A,c=e.j,s=e.L,u=e.S,l=e.R,d=e.l,p=e.a,m=e.b,h=e.h,f=e.k,b=e.m,v=e.n,y=e.o,g=e.q,_=e.s,x=e.u,S=e.C,T=e.d,w=e.v,D=e.w,k=e.T,O=e.p,j=e.x,L=e.e},function(){}],execute:function(){function C(e,r){t(2,arguments);var a=n(e),i=n(r),o=a.getTime()-i.getTime();return o<0?-1:o>0?1:o}function A(e,r){t(2,arguments);var a=n(e),i=n(r),o=a.getFullYear()-i.getFullYear(),c=a.getMonth()-i.getMonth();return 12*o+c}function P(e,r){t(2,arguments);var a=n(e),i=n(r);return a.getTime()-i.getTime()}function M(e){t(1,arguments);var r=n(e);return r.setHours(23,59,59,999),r}function R(e){t(1,arguments);var r=n(e),a=r.getMonth();return r.setFullYear(r.getFullYear(),a+1,0),r.setHours(23,59,59,999),r}function I(e){t(1,arguments);var r=n(e);return M(r).getTime()===R(r).getTime()}function F(e,r){t(2,arguments);var a,i=n(e),o=n(r),c=C(i,o),s=Math.abs(A(i,o));if(s<1)a=0;else{1===i.getMonth()&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-c*s);var u=C(i,o)===-c;I(n(e))&&1===s&&1===C(e,o)&&(u=!1),a=c*(s-Number(u))}return 0===a?0:a}function B(e,n){t(2,arguments);var r=P(e,n)/1e3;return r>0?Math.floor(r):Math.ceil(r)}function J(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}var V=1440,E=43200;function N(e,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t(2,arguments);var c=o.locale||r;if(!c.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=C(e,i);if(isNaN(s))throw new RangeError("Invalid time value");var u,l,d=J(o);d.addSuffix=Boolean(o.addSuffix),d.comparison=s,s>0?(u=n(i),l=n(e)):(u=n(e),l=n(i));var p,m=B(l,u),h=(a(l)-a(u))/1e3,f=Math.round((m-h)/60);if(f<2)return o.includeSeconds?m<5?c.formatDistance("lessThanXSeconds",5,d):m<10?c.formatDistance("lessThanXSeconds",10,d):m<20?c.formatDistance("lessThanXSeconds",20,d):m<40?c.formatDistance("halfAMinute",null,d):m<60?c.formatDistance("lessThanXMinutes",1,d):c.formatDistance("xMinutes",1,d):0===f?c.formatDistance("lessThanXMinutes",1,d):c.formatDistance("xMinutes",f,d);if(f<45)return c.formatDistance("xMinutes",f,d);if(f<90)return c.formatDistance("aboutXHours",1,d);if(f<V){var b=Math.round(f/60);return c.formatDistance("aboutXHours",b,d)}if(f<2520)return c.formatDistance("xDays",1,d);if(f<E){var v=Math.round(f/V);return c.formatDistance("xDays",v,d)}if(f<86400)return p=Math.round(f/E),c.formatDistance("aboutXMonths",p,d);if((p=F(l,u))<12){var y=Math.round(f/E);return c.formatDistance("xMonths",y,d)}var g=p%12,_=Math.floor(p/12);return g<3?c.formatDistance("aboutXYears",_,d):g<9?c.formatDistance("overXYears",_,d):c.formatDistance("almostXYears",_+1,d)}
/**
       * @license
       * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
       * This code may only be used under the BSD style license found at
       * http://polymer.github.io/LICENSE.txt
       * The complete set of authors may be found at
       * http://polymer.github.io/AUTHORS.txt
       * The complete set of contributors may be found at
       * http://polymer.github.io/CONTRIBUTORS.txt
       * Code distributed by Google as part of the polymer project is also
       * subject to an additional IP rights grant found at
       * http://polymer.github.io/PATENTS.txt
       */
var U=new WeakMap,G=i((function(e){return function(t){if(!(t instanceof o)||t instanceof c||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");var n=t.committer,r=n.element.style,a=U.get(t);for(var i in void 0===a&&(r.cssText=n.strings.join(" "),U.set(t,a=new Set)),a.forEach((function(t){t in e||(a.delete(t),-1===t.indexOf("-")?r[t]=null:r.removeProperty(t))})),e)a.add(i),-1===i.indexOf("-")?r[i]=e[i]:r.setProperty(i,e[i])}}));function X(e){return e*(Math.PI/180)}var q={"01":["38","73","74","39","71","69"],"02":["59","80","60","77","51","08"],"03":["42","71","58","18","23","63"],"04":["83","06","05","26","84","13"],"05":["04","26","38","73"],"06":["83","04"],"07":["48","30","84","26","38","69","43"],"08":["55","51","02","59"],"09":["31","11","66"],10:["89","21","52","51","77"],11:["09","31","81","34"],12:["34","30","48","15","46","82","81"],13:["30","84","83"],14:["27","61","50"],15:["48","43","63","19","46","12"],16:["17","79","86","87","24"],17:["85","79","16","33"],18:["36","41","45","89","58","03","23"],19:["23","87","24","46","15","63"],"2A":["2B"],"2B":["2A"],21:["10","89","58","71","39","70","52"],22:["29","56","35"],23:["87","19","63","03","18","36"],24:["17","16","87","19","46","47","33"],25:["39","70","90"],26:["84","04","05","38","69","07"],27:["76","60","95","78","28","61","14"],28:["27","78","91","45","41","72","61"],29:["22","56"],30:["34","12","48","07","26","84","13"],31:["65","32","82","81","11","09"],32:["31","65","64","40","47","82"],33:["17","24","47","40"],34:["11","81","12","30"],35:["50","53","49","44","56","22"],36:["37","41","18","23","87","86"],37:["41","36","86","49","72"],38:["05","73","01","69","07","26","05"],39:["01","71","21","70","25"],40:["33","47","32","64"],41:["72","37","36","18","45","28"],42:["43","69","71","03","63"],43:["48","07","69","42","63","15"],44:["56","35","53","49","85"],45:["91","77","28","41","18","58","89"],46:["15","19","24","47","82","12"],47:["33","40","32","82","46","24"],48:["12","30","07","43","15"],49:["44","53","72","37","86","79","85"],50:["14","61","53","35"],51:["02","77","10","52","55","08"],52:["21","70","88","55","51","10"],53:["49","72","61","50","35","44"],54:["57","67","88","55"],55:["54","88","52","51","08"],56:["29","22","35","44"],57:["67","88","54"],58:["03","71","21","89","45","18"],59:["02","80","62","08"],60:["02","80","76","27","95","77"],61:["14","27","28","72","53","50"],62:["80","59","02"],63:["15","43","42","03","23","19"],64:["40","32","65"],65:["64","32","31"],66:["09","11"],67:["68","88","54","57"],68:["90","70","88","67"],69:["01","71","42","43","07","26","38"],70:["21","39","25","90","88","52"],71:["03","42","69","01","39","21","58"],72:["28","61","53","49","37","41"],73:["74","01","38","05"],74:["73","01"],75:["92","93","94"],76:["80","60","27"],77:["89","10","51","02","60","93","91","45"],78:["95","27","28","91","92"],79:["17","85","49","86","16"],80:["62","59","02","60","76"],81:["11","34","12","82","31"],82:["32","31","81","12","46","47"],83:["13","84","04","06"],84:["13","04","26","07","30"],85:["44","49","79","17"],86:["36","37","49","79","16","87"],87:["23","19","24","16","86"],88:["70","90","68","67","57","54","55","52"],89:["58","21","10","77","45"],90:["25","70","88","68"],91:["45","28","77","78","92","94"],92:["75","95","78","93"],93:["92","95","94","77"],94:["77","75","92","93","91"],95:["78","27","60","93","92"],971:[],972:[],973:[],974:[],976:[],om:[]};function H(e){return new Promise((function(t){return setTimeout(t,e)}))}var Y=function(){function e(e){this.array=e}var t=e.prototype;return t.concat=function(e){return this.array=this.array.concat(e),this},t.map=function(t){return new e(this.array.map(t))},t.filter=function(e){return this.array=this.array.filter(e),this},t.sort=function(e){return this.array.sort(e),this},t.sortBy=function(e){return this.sort((function(t,n){return e(t).localeCompare(e(n))}))},t.build=function(){return this.array},e.from=function(t){return new e(t)},e}(),z=Object.defineProperty,K=Object.getOwnPropertyDescriptor,$=function(e,t,n,r){for(var a,i=r>1?void 0:r?K(t,n):t,o=e.length-1;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&z(t,n,i),i},W=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).DELAI_VERIFICATION_MISE_A_JOUR=45e3,t.lieuxParDepartementAffiches=void 0,t.searchInProgress=!1,t.miseAJourDisponible=!1,t.currentSearch=void 0,t.derniereCommuneSelectionnee=void 0,t.lieuBackgroundRefreshIntervalId=void 0,t}_inheritsLoose(n,e);var r=n.prototype;return r.beforeNewSearchFromLocation=function(e){return e},r.onSearchSelected=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.detail,this.goToNewSearch(this.beforeNewSearchFromLocation(n));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),r.goToNewSearch=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.isByDepartement(t)){e.next=4;break}l.navigateToRendezVousAvecDepartement(t.departement.code_departement,d(t.departement),t.type),e.next=10;break;case 4:return e.next=6,p.current.departementsDisponibles();case 6:n=e.sent,r=n.find((function(e){return e.code_departement===t.commune.codeDepartement})),a=t.commune,l.navigateToRendezVousAvecCommune(t.tri,a.codeDepartement,d(r),a.code,a.codePostal,m(a),t.type);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.render=function(){var e=this,n=this.lieuxParDepartementAffiches&&this.lieuxParDepartementAffiches.lieuxAffichables?this.lieuxParDepartementAffiches.lieuxAffichables.filter((function(t){return e.currentSearch&&u.isChronodoseType(e.currentSearch)?t.appointment_count>0:t.disponible})):[];return h(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n            <div class="criteria-container text-dark rounded-3 pb-3 ','">\n              <ul class="p-0 d-flex flex-row mb-5 bg-white fs-5">\n                <li class="col bg-std text-std tab ','" @click="','">\n                  Alla tider\n                </li>\n              </ul>\n              <div class="rdvForm-fields row align-items-center mb-3 mb-md-5">\n                    <vmd-search\n                          .value="','"\n                          @on-search="','"\n                        />\n                </div>\n                ','\n            </div>\n\n            <div class="spacer mt-5 mb-5"></div>\n\n            ',"\n        "])),f({"bg-std":u.isStandardType(this.currentSearch),"bg-chronodose":u.isChronodoseType(this.currentSearch)}),f({selected:u.isStandardType(this.currentSearch)}),(function(){return e.updateSearchTypeTo("standard")}),this.currentSearch,this.onSearchSelected,this.renderAdditionnalSearchCriteria(),this.searchInProgress?h(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n              <div class="d-flex justify-content-center">\n                <div class="spinner-border text-primary" style="height: 50px; width: 50px" role="status">\n                </div>\n              </div>\n            ']))):h(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['\n                <h3 class="fw-normal text-center h4 ','"\n                    style="','">\n                    ',"\n                  ","\n                  <br/>\n                  ",'\n                  </h3>\n\n                <div class="spacer mt-5 mb-5"></div>\n                <div class="resultats px-2 py-5 text-dark bg-light rounded-3">\n                    ',"\n\n                    ","\n                </div>\n                ","\n            "])),f({"search-chronodose":u.isChronodoseType(this.currentSearch),"search-standard":u.isStandardType(this.currentSearch)}),G({display:this.lieuxParDepartementAffiches?"block":"none"}),u.isChronodoseType(this.currentSearch)?this.totalCreneaux.toLocaleString()+"  vaccintid"+b.plural(this.totalCreneaux,"er")+" chronodose"+b.plural(this.totalCreneaux)+" hittade":this.totalCreneaux.toLocaleString()+" vaccintid"+b.plural(this.totalCreneaux,"er")+" hittade",this.libelleLieuSelectionne(),this.lieuxParDepartementAffiches&&this.lieuxParDepartementAffiches.derniereMiseAJour?h(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['\n                      <p class="fs-6 text-gray-600">\n                        Senast uppdaterat för\n                        ',"\n                        ",'\n                      </p>\n                      <p class="alert alert-warning fs-6">\n                          <i class="bi vmdicon-attention-fill"></i>\n                          Idag kan <strong>Jag Vill Ha Vaccin</strong> bara visa lediga tider från vissa regioner (Blekinge, Jönköping, Kalmar, Kronoberg och Örebro) och vissa mottagningar.\n                      </p>\n                        '])),function(e,n){return t(1,arguments),N(e,Date.now(),n)}(y(this.lieuxParDepartementAffiches.derniereMiseAJour),{locale:v}),this.miseAJourDisponible?h(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(['\n                          <button class="btn btn-primary" @click="','">Rafraîchir</button>\n                        '])),(function(){e.refreshLieux(),e.miseAJourDisponible=!1,e.launchCheckingUpdates()})):h(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose([""])))):h(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose([""]))),n.length?h(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(['\n                        <h2 class="row align-items-center justify-content-center mb-5 h5 px-3">\n                            <i class="bi vmdicon-calendar2-check-fill text-success me-2 fs-3 col-auto"></i>\n                            <span class="col col-sm-auto">\n                                '," vaccinationsmottagning"," med lediga ","\n                            </span>\n                        </h2>\n                    "])),n.length,b.plural(n.length,"ar"),u.isChronodoseType(this.currentSearch)?"chronodoses":"tider"):h(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(['\n                        <h2 class="row align-items-center justify-content-center mb-5 h5">\n                          <i class="bi vmdicon-calendar-x-fill text-black-50 me-2 fs-3 col-auto"></i>\n                          Ingen ',' hittad\n                        </h2>\n                        <div class="mb-5 container-content">\n                          <p class="fst-italic">Vi hittade ingen <strong>vaccintid</strong> på Regionens bokningsplattformar. </p>\n                          <p class="fst-italic"><strong>Jag Vill Ha Vaccin</strong> kan inte ännu se tider på alla plattformar och därför finns det bara data från regionerna Blekinge, Jönköping, Kalmar, Kronoberg och Örebro. Vi rekommenderar att kolla manuellt genom att trycka på knappen "Kolla på mottagningssidan".\n                            ','\n                          </p>\n                          <p class="fst-italic">Snart kommer vi även släppa ut mobilappar så man kan få push-notiser när nya vaccintider släpps i närheten.\n                          </p>\n                        </div>\n                    '])),u.isChronodoseType(this.currentSearch)?"chronodose":"vaccintid",u.isChronodoseType(this.currentSearch)?h(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(['\n                                    Si vous êtes déjà éligible, vous pouvez <a class="text-decoration-underline" href="','"">consulter les créneaux classiques</a>.\n                            '])),this.getStandardResultsLink()):""),g(this.lieuxParDepartementAffiches?this.lieuxParDepartementAffiches.lieuxAffichables:[],(function(e){return e.departement+"||"+e.nom+"||"+e.plateforme+"}"}),(function(t,n){return h(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(['<vmd-appointment-card\n                            style="--list-index: ','"\n                            .lieu="','"\n                            theme="','"\n                            .highlightable="','"\n                            @prise-rdv-cliquee="','"\n                            @verification-rdv-cliquee="','"\n                        />'])),n,t,e.currentSearch?e.currentSearch.type:"",u.isChronodoseType(e.currentSearch),(function(t){return e.prendreRdv(t.detail.lieu)}),(function(t){return e.verifierRdv(t.detail.lieu)}))})),u.isStandardType(this.currentSearch)?h(_templateObject12||(_templateObject12=_taggedTemplateLiteralLoose(['\n                <div class="eligibility-criteria fade-in-then-fade-out">\n                    <p>Kolla noggrant att du ingår i grupperna som kan vaccinera sig i din region innan du bokar en dos.</p>\n                </div>']))):h(_templateObject13||(_templateObject13=_taggedTemplateLiteralLoose([""])))))},r.updated=function(t){e.prototype.updated.call(this,t),_(this.$chronodoseLabel,{content:function(e){return e.getAttribute("title")}})},r.connectedCallback=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.prototype.connectedCallback.call(this),this.launchCheckingUpdates();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),r.disconnectedCallback=function(){e.prototype.disconnectedCallback.call(this),this.stopCheckingUpdates()},r.stopCheckingUpdates=function(){this.lieuBackgroundRefreshIntervalId&&(clearInterval(this.lieuBackgroundRefreshIntervalId),this.lieuBackgroundRefreshIntervalId=void 0)},r.launchCheckingUpdates=function(){var e=this;void 0===this.lieuBackgroundRefreshIntervalId&&(this.lieuBackgroundRefreshIntervalId=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=!1;return setInterval(_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=3;break}return console.warn("Skipped setDebouncedInterval()'s handler as ongoing already"),t.abrupt("return");case 3:return t.prev=3,i=!0,t.next=7,e.apply(void 0,r);case 7:return t.prev=7,i=!1,t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[3,,7,10]])}))),t)}(_asyncToGenerator(regeneratorRuntime.mark((function t(){var n,r,a,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=e.currentSearch)){t.next=11;break}return a=u.isByDepartement(n)?n.departement.code_departement:n.commune.codeDepartement,i=null==(r=e.lieuxParDepartementAffiches)?void 0:r.derniereMiseAJour,t.next=6,p.current.lieuxPour(a);case 6:return o=t.sent,e.miseAJourDisponible=i!==o.derniereMiseAJour,e.miseAJourDisponible&&e.stopCheckingUpdates(),t.next=11,e.requestUpdate();case 11:case"end":return t.stop()}}),t)}))),this.DELAI_VERIFICATION_MISE_A_JOUR))},r.refreshLieux=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,n,r,a,i,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.currentSearch)){e.next=22;break}return n=u.isByDepartement(t)?t.departement.code_departement:t.commune.codeDepartement,e.prev=3,this.searchInProgress=!0,e.next=7,H(1);case 7:return e.next=9,Promise.all([p.current.lieuxPour(n)].concat(this.codeDepartementAdditionnels(n).map((function(e){return p.current.lieuxPour(e)}))));case 9:r=e.sent,a=r[0],i=r.slice(1),o=[a].concat(i).reduce((function(e,t){return{codeDepartements:e.codeDepartements.concat(t.codeDepartements),derniereMiseAJour:e.derniereMiseAJour,lieuxDisponibles:e.lieuxDisponibles.concat(t.lieuxDisponibles),lieuxIndisponibles:e.lieuxIndisponibles.concat(t.lieuxIndisponibles)}}),{codeDepartements:[],derniereMiseAJour:a.derniereMiseAJour,lieuxDisponibles:[],lieuxIndisponibles:[]}),this.lieuxParDepartementAffiches=this.afficherLieuxParDepartement(o,t),u.isChronodoseType(this.currentSearch)&&(this.lieuxParDepartementAffiches.lieuxAffichables=this.lieuxParDepartementAffiches.lieuxAffichables.filter((function(e){return!e.appointment_by_phone_only}))),c=u.isByCommune(t)?t.commune:void 0,x.INSTANCE.rechercheLieuEffectuee(n,this.currentCritereTri(),t.type,c,this.lieuxParDepartementAffiches);case 17:return e.prev=17,this.searchInProgress=!1,e.finish(17);case 20:e.next=23;break;case 22:this.lieuxParDepartementAffiches=void 0;case 23:case"end":return e.stop()}}),e,this,[[3,,17,20]])})));return function(){return e.apply(this,arguments)}}(),r.getStandardResultsLink=function(){if(this.currentSearch&&u.isByDepartement(this.currentSearch))return l.getLinkToRendezVousAvecDepartement(this.currentSearch.departement.code_departement,d(this.currentSearch.departement),"standard")},r.prendreRdv=function(e){this.currentSearch&&u.isByCommune(this.currentSearch)&&e.url&&x.INSTANCE.clickSurRdv(e,this.currentCritereTri(),this.currentSearch.type,this.currentSearch.commune),l.navigateToUrlIfPossible(e.url)},r.verifierRdv=function(e){this.currentSearch&&u.isByCommune(this.currentSearch)&&e.url&&x.INSTANCE.clickSurVerifRdv(e,this.currentCritereTri(),this.currentSearch.type,this.currentSearch.commune),l.navigateToUrlIfPossible(e.url)},r.renderAdditionnalSearchCriteria=function(){return h(_templateObject14||(_templateObject14=_taggedTemplateLiteralLoose([""])))},r.extraireFormuleDeTri=function(e,t){if("date"===t)return(e.appointment_by_phone_only&&e.metadata.phone_number?2:e.url?0!==e.appointment_count?null!==e.prochain_rdv?0:1:3:4)+"__"+b.padLeft(Date.parse(e.prochain_rdv)||0,15,"0");if("distance"===t)return(e.appointment_by_phone_only&&e.metadata.phone_number||e.url&&0!==e.appointment_count?0:1)+"__"+b.padLeft(Math.round(1e3*e.distance),8,"0");throw new Error("Unsupported tri : "+t)},r.updateSearchTypeTo=function(e){this.currentSearch&&this.goToNewSearch(Object.assign({},this.currentSearch,{type:e}))},r.transformLieuEnFonctionDuTypeDeRecherche=function(e){var t,n,r;return u.isChronodoseType(this.currentSearch)?Object.assign({},e,{appointment_count:(null==(t=null!=(r=e.appointment_schedules)&&r.length?e.appointment_schedules:[])||null==(n=t.find((function(e){return"chronodose"===e.name})))?void 0:n.total)||0}):e},_createClass(n,[{key:"totalCreneaux",get:function(){return this.lieuxParDepartementAffiches?this.lieuxParDepartementAffiches.lieuxAffichables.reduce((function(e,t){return e+t.appointment_count}),0):0}}]),n}(s);e("AbstractVmdRdvView",W),W.styles=[S,T(_templateObject15||(_templateObject15=_taggedTemplateLiteralLoose(["",""])),w(".rdvForm-fields {\n  max-width: 75vw;\n  margin: auto;\n}\n@media (min-width: 1200px) {\n  .rdvForm-fields {\n    max-width: 65vw;\n  }\n}\n@media (min-width: 768px) {\n  .rdvForm-fields label, .rdvForm-fields select, .rdvForm-fields input {\n    font-size: 2.4rem;\n  }\n}\n.eligibility-criteria {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  color: #b02a37;\n  width: 100%;\n  background-color: #f8d7da;\n  text-align: center;\n  vertical-align: center;\n}\n.eligibility-criteria p {\n  margin: 0.5em;\n}\n.fade-in-then-fade-out {\n  -webkit-animation-name: fade-in-then-fade-out;\n          animation-name: fade-in-then-fade-out;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes fade-in-then-fade-out {\n  0%, 100% {\n    opacity: 0;\n  }\n  10%, 90% {\n    opacity: 1;\n  }\n}\n@keyframes fade-in-then-fade-out {\n  0%, 100% {\n    opacity: 0;\n  }\n  10%, 90% {\n    opacity: 1;\n  }\n}\nvmd-appointment-card {\n  display: block;\n  opacity: 1;\n  -webkit-animation: fade-in ease-in 200ms;\n          animation: fade-in ease-in 200ms;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n  -webkit-animation-delay: calc((var(--list-index) * 60ms) + 50ms);\n          animation-delay: calc((var(--list-index) * 60ms) + 50ms);\n}\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 0;\n    filter: saturate(0%);\n  }\n  to {\n    opacity: 1;\n    filter: saturate(100%);\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    filter: saturate(0%);\n  }\n  to {\n    opacity: 1;\n    filter: saturate(100%);\n  }\n}\n.criteria-container.search-standard {\n  background-color: #e6e7f9;\n}\n.criteria-container.search-chronodose {\n  background-color: #fdeeef;\n}\n.container-content {\n  max-width: 80vw;\n  margin: 0 auto;\n}\n@media (min-width: 1200px) {\n  .container-content {\n    max-width: 65vw;\n  }\n}")),T(_templateObject16||(_templateObject16=_taggedTemplateLiteralLoose(["\n        "])))],$([O({type:Array,attribute:!1})],W.prototype,"lieuxParDepartementAffiches",2),$([O({type:Boolean,attribute:!1})],W.prototype,"searchInProgress",2),$([O({type:Boolean,attribute:!1})],W.prototype,"miseAJourDisponible",2),$([D()],W.prototype,"currentSearch",2),$([j("#chronodose-label")],W.prototype,"$chronodoseLabel",2);var Q=e("VmdRdvParCommuneView",function(e){function t(){var t;return(t=e.apply(this,arguments)||this).currentSearch=void 0,t._searchType=void 0,t._codeCommuneSelectionne=void 0,t._codePostalSelectionne=void 0,t._critèreDeTri="distance",t.currentSearchMarker={},t}_inheritsLoose(t,e);var n=t.prototype;return n.updateCurrentSearch=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this._codeCommuneSelectionne&&this._codePostalSelectionne&&this._critèreDeTri&&this._searchType)){e.next=11;break}return t={},this.currentSearchMarker=t,e.next=5,H(20);case 5:if(this.currentSearchMarker===t){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,p.current.autocomplete.findCommune(this._codePostalSelectionne,this._codeCommuneSelectionne);case 9:(n=e.sent)&&(this.currentSearch=u.ByCommune(n,this._critèreDeTri,this._searchType),this.refreshLieux());case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.codeDepartementAdditionnels=function(e){return q[e]},n.libelleLieuSelectionne=function(){var e="???";if(this.currentSearch){var t=this.currentSearch.commune;e=t.nom+" ("+t.codePostal+")"}return h(_templateObject17||(_templateObject17=_taggedTemplateLiteralLoose(['\n          autour de\n          <span class="fw-bold">',"</span>\n        "])),e)},n.afficherLieuxParDepartement=function(e,t){var n=this,r=t.commune,a=function(e){return e.location?(t=r,n=e.location,a=t.latitude,i=t.longitude,o=n.latitude,c=n.longitude,s=X(o-a),u=X(c-i),l=Math.sin(s/2)*Math.sin(s/2)+Math.cos(X(a))*Math.cos(X(o))*Math.sin(u/2)*Math.sin(u/2),2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))*6371):1/0;var t,n,a,i,o,c,s,u,l},i=e.lieuxDisponibles,o=e.lieuxIndisponibles;return Object.assign({},e,{lieuxAffichables:Y.from([].concat(i).map((function(e){return Object.assign({},e,{disponible:!0})}))).concat([].concat(o).map((function(e){return Object.assign({},e,{disponible:!1})}))).map((function(e){return Object.assign({},e,{distance:a(e)})})).map((function(e){return n.transformLieuEnFonctionDuTypeDeRecherche(e)})).filter((function(e){return!e.distance||e.distance<100})).sortBy((function(e){return n.extraireFormuleDeTri(e,t.tri)})).filter((function(e,t){return t<180})).build()})},n.critereTriUpdated=function(e){if(x.INSTANCE.critereTriCentresMisAJour(e),this.currentSearch){var t=Object.assign({},this.currentSearch,{tri:e});this.goToNewSearch(t)}},n.beforeNewSearchFromLocation=function(e){return u.isByCommune(e)&&this.currentSearch?Object.assign({},e,{tri:this.currentSearch.tri}):e},n.renderAdditionnalSearchCriteria=function(){var e=this;return u.isStandardType(this.currentSearch)?h(_templateObject18||(_templateObject18=_taggedTemplateLiteralLoose(['\n          <div class="rdvForm-fields row align-items-center">\n            <label class="col-sm-24 col-md-auto mb-md-3">\n              Je recherche une dose de vaccin :\n            </label>\n            <div class="col">\n              <vmd-button-switch class="mb-3"\n                     codeSelectionne="','"\n                     .options="','"\n                     @changed="','">\n              </vmd-button-switch>\n            </div>\n          </div>\n        '])),this._critèreDeTri,Array.from(k.values()).map((function(e){return{code:e.codeTriCentre,libelle:e.libelle}})),(function(t){return e.critereTriUpdated(t.detail.value)})):h(_templateObject19||(_templateObject19=_taggedTemplateLiteralLoose([""])))},n.updateSearchTypeTo=function(t){"chronodose"===t&&(this.critèreDeTri="distance"),e.prototype.updateSearchTypeTo.call(this,t)},n.currentCritereTri=function(){return this.critèreDeTri},_createClass(t,[{key:"searchType",set:function(e){this._searchType=e,this.updateCurrentSearch()}},{key:"codeCommuneSelectionne",set:function(e){this._codeCommuneSelectionne=e,this.updateCurrentSearch()}},{key:"codePostalSelectionne",set:function(e){this._codePostalSelectionne=e,this.updateCurrentSearch()}},{key:"critèreDeTri",set:function(e){this._critèreDeTri=e,this.updateCurrentSearch()}}]),t}(W));$([D()],Q.prototype,"currentSearch",2),$([O({type:String})],Q.prototype,"searchType",1),$([O({type:String})],Q.prototype,"codeCommuneSelectionne",1),$([O({type:String})],Q.prototype,"codePostalSelectionne",1),$([O({type:String})],Q.prototype,"critèreDeTri",1),$([D()],Q.prototype,"_searchType",2),$([D()],Q.prototype,"_codeCommuneSelectionne",2),$([D()],Q.prototype,"_codePostalSelectionne",2),$([D()],Q.prototype,"_critèreDeTri",2),Q=e("VmdRdvParCommuneView",$([L("vmd-rdv-par-commune")],Q));var Z=e("VmdRdvParDepartementView",function(e){function t(){var t;return(t=e.apply(this,arguments)||this)._searchType=void 0,t._codeDepartement=void 0,t.currentSearch=void 0,t}_inheritsLoose(t,e);var n=t.prototype;return n.updateCurrentSearch=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this._codeDepartement)||!this._searchType){e.next=7;break}return e.next=4,p.current.departementsDisponibles();case 4:n=e.sent,(r=n.find((function(e){return e.code_departement===t})))&&(this.currentSearch=u.ByDepartement(r,this._searchType),this.refreshLieux());case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.codeDepartementAdditionnels=function(){return[]},n.libelleLieuSelectionne=function(){var e="???";if(this.currentSearch){var t=this.currentSearch.departement;e=t.nom_departement+" ("+t.code_departement+")"}return h(_templateObject20||(_templateObject20=_taggedTemplateLiteralLoose(['\n          för Region\n          <span class="fw-bold">',"</span>\n        "])),e)},n.afficherLieuxParDepartement=function(e){var t=this,n=e.lieuxDisponibles,r=e.lieuxIndisponibles;return Object.assign({},e,{lieuxAffichables:Y.from([].concat(n).map((function(e){return Object.assign({},e,{disponible:!0})}))).concat([].concat(r).map((function(e){return Object.assign({},e,{disponible:!1})}))).map((function(e){return Object.assign({},e,{distance:void 0})})).map((function(e){return t.transformLieuEnFonctionDuTypeDeRecherche(e)})).sortBy((function(e){return t.extraireFormuleDeTri(e,"date")})).filter((function(e,t){return t<180})).build()})},n.currentCritereTri=function(){return"date"},_createClass(t,[{key:"searchType",set:function(e){this._searchType=e,this.updateCurrentSearch()}},{key:"codeDepartementSelectionne",set:function(e){this._codeDepartement=e,this.updateCurrentSearch()}}]),t}(W));$([O({type:String})],Z.prototype,"searchType",1),$([O({type:String})],Z.prototype,"codeDepartementSelectionne",1),$([D()],Z.prototype,"_searchType",2),$([D()],Z.prototype,"_codeDepartement",2),$([D()],Z.prototype,"currentSearch",2),Z=e("VmdRdvParDepartementView",$([L("vmd-rdv-par-departement")],Z))}}}));
