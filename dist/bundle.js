!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,n,o,i,r,c,s){void 0===i&&(i=[]),void 0===r&&(r=[]),void 0===c&&(c=[]),void 0===s&&(s=[]),this._category=e,this._name=t,this._adress=n,this._telephone=o,this._allPacks=i,this._sendedPacks=r,this._acceptedPacks=c,this.waitingPackFor=s}return Object.defineProperty(e.prototype,"category",{get:function(){return this._category},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"adress",{get:function(){return this._adress},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"telephone",{get:function(){return this._telephone},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allPacks",{get:function(){return this._allPacks},enumerable:!0,configurable:!0}),e.prototype.getPack=function(e,t){var n;return this._allPacks.forEach((function(o,i){if(o.name===e&&t===o.type)return n=i})),this.allPacks.splice(n,1)[0]},e.prototype.addPack=function(e){this._allPacks.push(e)},e.prototype.deletePack=function(e){var t=this._allPacks.indexOf(e);this._allPacks.splice(t,1)},Object.defineProperty(e.prototype,"sendedPacks",{get:function(){return this._sendedPacks},enumerable:!0,configurable:!0}),e.prototype.addSendedPack=function(e){this._sendedPacks.push(e)},Object.defineProperty(e.prototype,"acceptedPacks",{get:function(){return this._acceptedPacks},enumerable:!0,configurable:!0}),e.prototype.addAcceptedPack=function(e){this._acceptedPacks.push(e)},e}();t.Client=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(4),r=new o.HumanClient("human","Ivan Ivanov","Khmelnitskiy, Svoboda str. 12/1",26,"1-2-3-4"),c=new o.HumanClient("human","Oleg Olegovych","Khmelnitskiy, Bandera str. 22/5",26,"4-22-31-44");r.createPack({type:"box",name:"Box 1",weight:"300g",price:"$22"}),r.createPack({type:"box",name:"Box 2",weight:"400g",price:"$42"}),c.createPack({type:"banderol",name:"small banderol",weight:"40g",price:"$4"});var s=new i.PostCompany("0001","Ukraine Post","Kyiv, Shevchenka street, 23","Mr. X"),a=s.createOffice({name:"UkrPoshta Lviv ",city:"Lviv",id:"1"}),u=s.createOffice({name:"UkrPoshta Kyiv",city:"Kyiv",id:"2"});new i.PostCompany("012081","Nova Poshta","Kyiv, Maidan Nezalejnosti, 2","Mr. Y").createOffice({name:"NovaPoshta Kherson ",city:"Kherson",id:"1"});console.log(r.toString()),console.log(c.toString()),console.log("::::::::::TRANSACTION - BEGIN:::::::::"),a.sendPackage(r,c,u,r.getPack("Box 1","box")),console.log("::::::::::TRANSACTION - END:::::::::"),console.log(r.toString()),console.log("KYIV OFFICE STORE BEFORE GIVE:"),u.showStore(),u.givePackToClient(c),console.log("KYIV OFFICE STORE AFTER GIVING:"),u.showStore(),console.log(c.toString())},function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),c=n(3),s=function(e){function t(t,n,o,i,r,c,s,a){void 0===c&&(c=[]),void 0===s&&(s=[]),void 0===a&&(a=[]);var u=e.call(this,t,n,o,r,c,s,a)||this;return u._age=i,u}return i(t,e),Object.defineProperty(t.prototype,"age",{get:function(){return this._age},enumerable:!0,configurable:!0}),t.prototype.createPack=function(e){this.addPack(new c.Package(e.type,e.name,e.weight,e.price,this))},t.prototype.toString=function(){var e="";return this.allPacks.forEach((function(t,n){e+="#"+n+t.getInfo()+"\n"})),"::CLIENT INFORMATION::\n        Category: "+this.category+";\n        Name: "+this.name+";\n        Adress: "+this.adress+";\n        Age: "+this._age+";\n        Telephone: "+this.telephone+";\n        ::Packages:: \n        "+e},t}(r.Client);t.HumanClient=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(){function e(e,t,n,o,i){this.type=e,this.name=t,this.weight=n,this.price=o,this.owner=i}return e.prototype.getInfo=function(){var e=(this.owner,o.Client,this.owner.name);return"\n        Name: "+this.name+";\n        Type: "+this.type+";\n        Owner: "+e+";\n        Weight: "+this.weight+";\n        Price:  "+this.price+";"},e}();t.Package=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=function(){function e(e,t,n,o,i){void 0===i&&(i=[]),this._id=e,this._name=t,this._adress=n,this._owner=o,this._offices=i}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"adress",{get:function(){return this._adress},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"owner",{get:function(){return this._owner},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),e.prototype.createOffice=function(e){return this._offices.push(new o.PostOffice(e.name,e.city,this,this._id+"-"+e.id)),this._offices[this._offices.length-1]},e.prototype.deleteOffice=function(e){var t=[].indexOf.call(this._offices,e);this._offices.splice(t,1),console.log(this._offices)},e.prototype.getOffice=function(e){var t;return this._offices.filter((function(n,o){if(e===n.id)return t=o,!0})),this._offices[t]},e.prototype.getOfficesList=function(){var e;return this._offices.map((function(t,n){e+="\nOffice # "+(n+1)+" \n ID: "+t.id+"; \nName: "+t.name+"; \nAdress: "+t.city+"; \n Owner: "+t.owner+"\n"})),e},e.prototype.toString=function(){return"\n            Post Company Iformation: \n            ID: "+this.id+";\n            Name: "+this.name+";\n            Adress: "+this.adress+";\n            Owner: "+this.owner+";\n        "},e}();t.PostCompany=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,n,o,i,r){void 0===i&&(i=[]),void 0===r&&(r=[]),this._name=e,this._city=t,this._owner=n,this._id=o,this._clients=i,this._transactionLog=r,this._transactionCount=0,this._store=[]}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"city",{get:function(){return this._city},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"owner",{get:function(){return this._owner},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"client",{get:function(){return this._clients},enumerable:!0,configurable:!0}),e.prototype.addClient=function(e){this._clients.push(e)},e.prototype.addClients=function(e){this._clients.concat(e)},e.prototype.removeClient=function(e){try{var t=this._clients.indexOf(e);this._clients.splice(t,1)}catch(e){console.log("client not founded")}},e.prototype.sendPackage=function(e,t,n,o){this._transactionCount++;var i={id:this._transactionCount.toString(),method:"send",package:o,sendFromClient:e,sendFromOffice:this,sendToClient:t,sendToOffice:n};this._transactionLog.push(i),n.addPackage(t,e,this,o),t.waitingPackFor.push(o)},e.prototype.addPackage=function(e,t,n,o){this._transactionCount++;var i={id:this._transactionCount.toString(),method:"get",package:o,sendFromClient:t,sendFromOffice:n,sendToClient:e,sendToOffice:this};this._transactionLog.push(i),this._store.push(o)},e.prototype.givePackToClient=function(e){if(1===e.waitingPackFor.length){var t=this._store.indexOf(e.waitingPackFor[0]);e.addPack(this._store[t]),this._store.splice(t,1)}},e.prototype.getTransactionsLog=function(){return this._transactionLog},e.prototype.showTransactionsLog=function(){var e="";if(0===this._transactionLog.length)return console.log("NO TRANSACTIONS YET");this._transactionLog.forEach((function(t,n){e+="TRANSACTION #"+n+"\n            ID: "+t.id+";\n            Method: "+t.method+"\n            Package:  "+t.package+"\n            SendFromClient: "+t.sendFromClient+"\n            sendFromOffice: "+t.sendFromOffice+"\n            Sent To Client: "+t.sendToClient+"\n            To Office: "+t.sendToOffice})),console.log(e)},e.prototype.showStore=function(){console.log("STORE OF "+this.name+":");var e="";if(0===this._store.length)return console.log("[EMPTY]");this._store.forEach((function(t,n){e+="Package #"+n+":\n",e+="Type: "+t.type+"\n",e+="Name: "+t.name+"\n",e+="Owner: "+t.owner.name+"\n",e+="Price: "+t.price+"\n",e+="Weight: "+t.weight+"\n"})),console.log(e)},e.prototype.toString=function(){return"\n            ::POST OFFICE INFORMATION:: \n            ID: "+this.id+";\n            Name: "+this.name+";\n            Adress: "+this.city+";\n            Owner: "+this.owner.name+";\n        "},e}();t.PostOffice=o}]);