/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function(e){if(true)module.exports=e();else {}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t=undefined;if(!e&&t)return require(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l=undefined,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){"use strict";var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK ",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK \b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){"use strict";var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i))}return r.join("/")},a.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){"use strict";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)});

/***/ }),

/***/ 899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6697e24c4244b6134ea9.wasm";

/***/ }),

/***/ 878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8cdf049a0c70688300ba.wasm";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ruffle-extension:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			35: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkruffle_extension"] = self["webpackChunkruffle_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ../core/dist/load-options.js
/**
 * Represents the various types of auto-play behaviours that are supported.
 */
var AutoPlay;
(function (AutoPlay) {
    /**
     * The player should automatically play the movie as soon as it is loaded.
     *
     * If the browser does not support automatic audio, the movie will begin
     * muted.
     */
    AutoPlay["On"] = "on";
    /**
     * The player should not attempt to automatically play the movie.
     *
     * This will leave it to the user or API to actually play when appropriate.
     */
    AutoPlay["Off"] = "off";
    /**
     * The player should automatically play the movie as soon as it is deemed
     * "appropriate" to do so.
     *
     * The exact behaviour depends on the browser, but commonly requires some
     * form of user interaction on the page in order to allow auto playing videos
     * with sound.
     */
    AutoPlay["Auto"] = "auto";
})(AutoPlay || (AutoPlay = {}));
/**
 * Controls whether the content is letterboxed or pillarboxed when the
 * player's aspect ratio does not match the movie's aspect ratio.
 *
 * When letterboxed, black bars will be rendered around the exterior
 * margins of the content.
 */
var Letterbox;
(function (Letterbox) {
    /**
     * The content will never be letterboxed.
     */
    Letterbox["Off"] = "off";
    /**
     * The content will only be letterboxed if the content is running fullscreen.
     */
    Letterbox["Fullscreen"] = "fullscreen";
    /**
     * The content will always be letterboxed.
     */
    Letterbox["On"] = "on";
})(Letterbox || (Letterbox = {}));
/**
 * When the player is muted, this controls whether or not Ruffle will show a
 * "click to unmute" overlay on top of the movie.
 */
var UnmuteOverlay;
(function (UnmuteOverlay) {
    /**
     * Show an overlay explaining that the movie is muted.
     */
    UnmuteOverlay["Visible"] = "visible";
    /**
     * Don't show an overlay and pretend that everything is fine.
     */
    UnmuteOverlay["Hidden"] = "hidden";
})(UnmuteOverlay || (UnmuteOverlay = {}));
/**
 * Console logging level.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "error";
    LogLevel["Warn"] = "warn";
    LogLevel["Info"] = "info";
    LogLevel["Debug"] = "debug";
    LogLevel["Trace"] = "trace";
})(LogLevel || (LogLevel = {}));
/**
 * The window mode of a Ruffle player.
 */
var WindowMode;
(function (WindowMode) {
    /**
     * The Flash content is rendered in its own window and layering is done with the browser's
     * default behavior.
     *
     * In Ruffle, this mode functions like `WindowMode::Opaque` and will layer the Flash content
     * together with other HTML elements.
     */
    WindowMode["Window"] = "window";
    /**
     * The Flash content is layered together with other HTML elements, and the stage color is
     * opaque. Content can render above or below Ruffle based on CSS rendering order.
     */
    WindowMode["Opaque"] = "opaque";
    /**
     * The Flash content is layered together with other HTML elements, and the SWF stage color is
     * transparent. Content beneath Ruffle will be visible through transparent areas.
     */
    WindowMode["Transparent"] = "transparent";
    /**
     * Request compositing with hardware acceleration when possible.
     * This mode has no effect in Ruffle and will function like `WindowMode.Opaque`.
     */
    WindowMode["Direct"] = "direct";
    /**
     * Request a direct rendering path, bypassing browser compositing when possible.
     * This mode has no effect in Ruffle and will function like `WindowMode::Opaque`.
     */
    WindowMode["Gpu"] = "gpu";
})(WindowMode || (WindowMode = {}));
/**
 * The render backend of a Ruffle player.
 *
 * The available backends may change in future releases.
 */
var RenderBackend;
(function (RenderBackend) {
    /**
     * An [in-development API](https://caniuse.com/webgpu) that will be preferred if available in the future.
     * Should behave the same as wgpu-webgl, except with lower overhead and thus better performance.
     */
    RenderBackend["WebGpu"] = "webgpu";
    /**
     * The most featureful and currently preferred backend.
     * Rendering is done the same way as in the desktop app, then translated to WebGL on-the-fly.
     */
    RenderBackend["WgpuWebgl"] = "wgpu-webgl";
    /**
     * A vanilla WebGL backend. Was the default backend until the start of 2023,
     * but is now used as a fallback for devices that do not support WebGL 2.
     * Supports fewer features and has a faster initialization time;
     * may be useful for content that does not need advanced features like bitmap drawing or blend modes.
     */
    RenderBackend["Webgl"] = "webgl";
    /**
     * The slowest and most basic backend, used as a fallback when all else fails.
     * However, this is currently the only backend that accurately scales hairline strokes.
     * If you notice excessively thick strokes in specific content,
     * you may want to use the canvas renderer for that content until the issue is resolved.
     */
    RenderBackend["Canvas"] = "canvas";
})(RenderBackend || (RenderBackend = {}));
/**
 * Represents the various context menu options that are supported.
 */
var ContextMenu;
(function (ContextMenu) {
    /**
     * The context menu should appear when right-clicking or long-pressing
     * the Ruffle instance.
     */
    ContextMenu["On"] = "on";
    /**
     * The context menu should only appear when right-clicking
     * the Ruffle instance.
     */
    ContextMenu["RightClickOnly"] = "rightClickOnly";
    /**
     * The context menu should not appear when right-clicking or long-pressing
     * the Ruffle instance.
     */
    ContextMenu["Off"] = "off";
})(ContextMenu || (ContextMenu = {}));
/**
 * Represents the player runtime to emulate.
 */
var PlayerRuntime;
(function (PlayerRuntime) {
    /**
     * Emulate Adobe AIR.
     */
    PlayerRuntime["AIR"] = "air";
    /**
     * Emulate Adobe Flash Player.
     */
    PlayerRuntime["FlashPlayer"] = "flashPlayer";
})(PlayerRuntime || (PlayerRuntime = {}));
/**
 * The handling mode of links opening a new website.
 */
var OpenURLMode;
(function (OpenURLMode) {
    /**
     * Allow all links to open a new website.
     */
    OpenURLMode["Allow"] = "allow";
    /**
     * A confirmation dialog opens with every link trying to open a new website.
     */
    OpenURLMode["Confirm"] = "confirm";
    /**
     * Deny all links to open a new website.
     */
    OpenURLMode["Deny"] = "deny";
})(OpenURLMode || (OpenURLMode = {}));
/**
 * The networking API access mode of the Ruffle player.
 */
var NetworkingAccessMode;
(function (NetworkingAccessMode) {
    /**
     * All networking APIs are permitted in the SWF file.
     */
    NetworkingAccessMode["All"] = "all";
    /**
     * The SWF file may not call browser navigation or browser interaction APIs.
     *
     * The APIs navigateToURL(), fscommand() and ExternalInterface.call() are
     * prevented in this mode.
     */
    NetworkingAccessMode["Internal"] = "internal";
    /**
     * The SWF file may not call browser navigation or browser interaction APIs
     * and it cannot use any SWF-to-SWF communication APIs.
     *
     * Additionally to the ones in internal mode, the APIs sendToURL(),
     * FileReference.download(), FileReference.upload(), Loader.load(),
     * LocalConnection.connect(), LocalConnection.send(), NetConnection.connect(),
     * NetStream.play(), Security.loadPolicyFile(), SharedObject.getLocal(),
     * SharedObject.getRemote(), Socket.connect(), Sound.load(), URLLoader.load(),
     * URLStream.load() and XMLSocket.connect() are prevented in this mode.
     *
     * This mode is not implemented yet.
     */
    NetworkingAccessMode["None"] = "none";
})(NetworkingAccessMode || (NetworkingAccessMode = {}));

;// CONCATENATED MODULE: ../core/dist/config.js

const DEFAULT_CONFIG = {
    allowScriptAccess: false,
    parameters: {},
    autoplay: AutoPlay.Auto,
    backgroundColor: null,
    letterbox: Letterbox.Fullscreen,
    unmuteOverlay: UnmuteOverlay.Visible,
    upgradeToHttps: true,
    compatibilityRules: true,
    favorFlash: true,
    warnOnUnsupportedContent: true,
    logLevel: LogLevel.Error,
    showSwfDownload: false,
    contextMenu: ContextMenu.On,
    // Backwards-compatibility option
    preloader: true,
    splashScreen: true,
    maxExecutionDuration: 15,
    base: null,
    menu: true,
    salign: "",
    forceAlign: false,
    quality: "high",
    scale: "showAll",
    forceScale: false,
    frameRate: null,
    wmode: WindowMode.Window,
    publicPath: null,
    polyfills: true,
    playerVersion: null,
    preferredRenderer: null,
    openUrlMode: OpenURLMode.Allow,
    allowNetworking: NetworkingAccessMode.All,
    openInNewTab: null,
    socketProxy: [],
    fontSources: [],
    defaultFonts: {},
    credentialAllowList: [],
    playerRuntime: PlayerRuntime.FlashPlayer,
};

;// CONCATENATED MODULE: ./src/utils.ts

const DEFAULT_OPTIONS = Object.assign(Object.assign({}, DEFAULT_CONFIG), { ruffleEnable: true, ignoreOptout: false, autostart: false });
let i18n;
let storage;
let tabs;
let runtime;
let openOptionsPage;
let openPlayerPage;
function promisify(func) {
    return new Promise((resolve, reject) => {
        func((result) => {
            const error = chrome.runtime.lastError;
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
}
function promisifyStorageArea(storage) {
    return {
        clear: () => promisify((cb) => storage.clear(cb)),
        get: (keys) => promisify((cb) => storage.get(keys || null, cb)),
        remove: (keys) => promisify((cb) => storage.remove(keys, cb)),
        set: (items) => promisify((cb) => storage.set(items, cb)),
    };
}
if (typeof chrome !== "undefined") {
    i18n = chrome.i18n;
    storage = {
        local: promisifyStorageArea(chrome.storage.local),
        sync: promisifyStorageArea(chrome.storage.sync),
        onChanged: {
            addListener: (listener) => chrome.storage.onChanged.addListener(listener),
        },
    };
    tabs = {
        reload: (tabId) => promisify((cb) => chrome.tabs.reload(tabId, undefined, cb)),
        query: (query) => promisify((cb) => chrome.tabs.query(query, cb)),
        sendMessage: (tabId, message, options) => promisify((cb) => chrome.tabs.sendMessage(tabId, message, options || {}, cb)),
    };
    runtime = chrome.runtime;
    openOptionsPage = () => promisify((cb) => chrome.tabs.create({ url: "/options.html" }, cb));
    openPlayerPage = () => promisify((_cb) => chrome.tabs.create({ url: "/player.html" }));
}
else if (typeof browser !== "undefined") {
    i18n = browser.i18n;
    storage = browser.storage;
    tabs = browser.tabs;
    runtime = browser.runtime;
    openOptionsPage = () => browser.runtime.openOptionsPage();
    openPlayerPage = () => promisify((_cb) => browser.tabs.create({ url: "/player.html" }));
}
else {
    throw new Error("Extension API not found.");
}
async function getOptions() {
    const options = await storage.sync.get();
    // Copy over default options if they don't exist yet.
    return Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
}
/**
 * Gets the options that are explicitly different from the defaults.
 *
 * In the future we should just not store options we don't want to set.
 */
async function getExplicitOptions() {
    const options = await getOptions();
    const defaultOptions = DEFAULT_OPTIONS;
    for (const key in defaultOptions) {
        // @ts-expect-error: Element implicitly has an any type
        if (key in options && defaultOptions[key] === options[key]) {
            // @ts-expect-error: Element implicitly has an any type
            delete options[key];
        }
    }
    return options;
}

;// CONCATENATED MODULE: ../core/dist/version.js
/**
 * A representation of a semver 2 compliant version string
 */
class Version {
    /**
     * Construct a Version from specific components.
     *
     * If you wish to parse a string into a Version then please use [[fromSemver]].
     *
     * @param major The major version component.
     * @param minor The minor version component.
     * @param patch The patch version component.
     * @param prIdent A list of pre-release identifiers, if any
     * @param buildIdent A list of build identifiers, if any
     */
    constructor(major, minor, patch, prIdent, buildIdent) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.prIdent = prIdent;
        this.buildIdent = buildIdent;
    }
    /**
     * Construct a version from a semver 2 compliant string.
     *
     * This function is intended for use with semver 2 compliant strings.
     * Malformed strings may still parse correctly, but this result is not
     * guaranteed.
     *
     * @param versionString A semver 2.0.0 compliant version string
     * @returns A version object
     */
    static fromSemver(versionString) {
        const buildSplit = versionString.split("+"), prSplit = buildSplit[0].split("-"), versionSplit = prSplit[0].split(".");
        const major = parseInt(versionSplit[0], 10);
        let minor = 0;
        let patch = 0;
        let prIdent = null;
        let buildIdent = null;
        if (versionSplit[1] !== undefined) {
            minor = parseInt(versionSplit[1], 10);
        }
        if (versionSplit[2] !== undefined) {
            patch = parseInt(versionSplit[2], 10);
        }
        if (prSplit[1] !== undefined) {
            prIdent = prSplit[1].split(".");
        }
        if (buildSplit[1] !== undefined) {
            buildIdent = buildSplit[1].split(".");
        }
        return new Version(major, minor, patch, prIdent, buildIdent);
    }
    /**
     * Returns true if a given version is compatible with this one.
     *
     * Compatibility is defined as having the same nonzero major version
     * number, or if both major versions are zero, the same nonzero minor
     * version number, or if both minor versions are zero, the same nonzero
     * patch version number.
     *
     * This implements the ^ operator in npm's semver package, with the
     * exception of the prerelease exclusion rule.
     *
     * @param other The other version to test against
     * @returns True if compatible
     */
    isCompatibleWith(other) {
        return ((this.major !== 0 && this.major === other.major) ||
            (this.major === 0 &&
                other.major === 0 &&
                this.minor !== 0 &&
                this.minor === other.minor) ||
            (this.major === 0 &&
                other.major === 0 &&
                this.minor === 0 &&
                other.minor === 0 &&
                this.patch !== 0 &&
                this.patch === other.patch));
    }
    /**
     * Returns true if this version has precedence over (is newer than) another
     * version.
     *
     * Precedence is defined as in the Semver 2 spec. This implements the >
     * operator in npm's semver package, with the exception of the prerelease
     * exclusion rule.
     *
     * @param other The other version to test against
     * @returns True if this version has precedence over the other one
     */
    hasPrecedenceOver(other) {
        if (this.major > other.major) {
            return true;
        }
        else if (this.major < other.major) {
            return false;
        }
        if (this.minor > other.minor) {
            return true;
        }
        else if (this.minor < other.minor) {
            return false;
        }
        if (this.patch > other.patch) {
            return true;
        }
        else if (this.patch < other.patch) {
            return false;
        }
        if (this.prIdent === null && other.prIdent !== null) {
            return true;
        }
        else if (this.prIdent !== null && other.prIdent === null) {
            return false;
        }
        else if (this.prIdent !== null && other.prIdent !== null) {
            const isNumeric = /^[0-9]*$/;
            for (let i = 0; i < this.prIdent.length && i < other.prIdent.length; i += 1) {
                const numericThis = isNumeric.test(other.prIdent[i]);
                const numericOther = isNumeric.test(this.prIdent[i]);
                if (!numericOther && numericThis) {
                    return true;
                }
                else if (numericOther && numericThis) {
                    const intThis = parseInt(this.prIdent[i], 10);
                    const intOther = parseInt(other.prIdent[i], 10);
                    if (intThis > intOther) {
                        return true;
                    }
                    else if (intThis < intOther) {
                        return false;
                    }
                }
                else if (numericOther && !numericThis) {
                    return false;
                }
                else if (!numericOther && !numericThis) {
                    if (this.prIdent[i] > other.prIdent[i]) {
                        return true;
                    }
                    else if (this.prIdent[i] < other.prIdent[i]) {
                        return false;
                    }
                }
            }
            if (this.prIdent.length > other.prIdent.length) {
                return true;
            }
            else if (this.prIdent.length < other.prIdent.length) {
                return false;
            }
        }
        // Unlike prerelease, we prefer to have a build ident than to not
        if (this.buildIdent !== null && other.buildIdent === null) {
            return true;
        }
        else if (this.buildIdent === null && other.buildIdent !== null) {
            return false;
        }
        else if (this.buildIdent !== null && other.buildIdent !== null) {
            const isNumeric = /^[0-9]*$/;
            for (let i = 0; i < this.buildIdent.length && i < other.buildIdent.length; i += 1) {
                const numricThis = isNumeric.test(this.buildIdent[i]);
                const numericOther = isNumeric.test(other.buildIdent[i]);
                if (!numricThis && numericOther) {
                    return true;
                }
                else if (numricThis && numericOther) {
                    const intThis = parseInt(this.buildIdent[i], 10);
                    const intOther = parseInt(other.buildIdent[i], 10);
                    if (intThis > intOther) {
                        return true;
                    }
                    else if (intThis < intOther) {
                        return false;
                    }
                }
                else if (numricThis && !numericOther) {
                    return false;
                }
                else if (!numricThis && !numericOther) {
                    if (this.buildIdent[i] > other.buildIdent[i]) {
                        return true;
                    }
                    else if (this.buildIdent[i] < other.buildIdent[i]) {
                        return false;
                    }
                }
            }
            return this.buildIdent.length > other.buildIdent.length;
        }
        return false;
    }
    /**
     * Tests if a given version is equivalent to this one.
     *
     * Build and prerelease tags are ignored.
     *
     * @param other The other version to test against
     * @returns True if the given version is equivalent
     */
    isEqual(other) {
        return (this.major === other.major &&
            this.minor === other.minor &&
            this.patch === other.patch);
    }
    /**
     * Tests if a given version is stable or a compatible prerelease for this
     * version.
     *
     * This implements the prerelease exclusion rule of NPM semver: a
     * prerelease version can only pass this check if the major/minor/patch
     * components of both versions are the same. Otherwise, the prerelease
     * version always fails.
     *
     * @param other The other version to test against
     * @returns True if the given version is either stable, or a
     * prerelease in the same series as this one.
     */
    isStableOrCompatiblePrerelease(other) {
        if (other.prIdent === null) {
            return true;
        }
        else {
            return (this.major === other.major &&
                this.minor === other.minor &&
                this.patch === other.patch);
        }
    }
}

;// CONCATENATED MODULE: ../core/dist/version-range.js

/**
 * Represents a set of version requirements.
 */
class VersionRange {
    /**
     * Constructs a range of versions as specified by the given requirements.
     *
     * If you wish to construct this object from a string representation,
     * then use [[fromRequirementString]].
     *
     * @param requirements Requirements to set this range by
     */
    constructor(requirements) {
        this.requirements = requirements;
    }
    /**
     * Determine if a given version satisfies this range.
     *
     * @param fver A version object to test against.
     * @returns Whether or not the given version matches this range
     */
    satisfiedBy(fver) {
        for (const requirement of this.requirements) {
            let matches = true;
            for (const { comparator, version } of requirement) {
                matches =
                    matches && version.isStableOrCompatiblePrerelease(fver);
                if (comparator === "" || comparator === "=") {
                    matches = matches && version.isEqual(fver);
                }
                else if (comparator === ">") {
                    matches = matches && fver.hasPrecedenceOver(version);
                }
                else if (comparator === ">=") {
                    matches =
                        matches &&
                            (fver.hasPrecedenceOver(version) ||
                                version.isEqual(fver));
                }
                else if (comparator === "<") {
                    matches = matches && version.hasPrecedenceOver(fver);
                }
                else if (comparator === "<=") {
                    matches =
                        matches &&
                            (version.hasPrecedenceOver(fver) ||
                                version.isEqual(fver));
                }
                else if (comparator === "^") {
                    matches = matches && version.isCompatibleWith(fver);
                }
            }
            if (matches) {
                return true;
            }
        }
        return false;
    }
    /**
     * Parse a requirement string into a version range.
     *
     * @param requirement The version requirements, consisting of a
     * series of space-separated strings, each one being a semver version
     * optionally prefixed by a comparator or a separator.
     *
     * Valid comparators are:
     * - `""` or `"="`: Precisely this version
     * - `">`": A version newer than this one
     * - `">`=": A version newer or equal to this one
     * - `"<"`: A version older than this one
     * - `"<="`: A version older or equal to this one
     * - `"^"`: A version that is compatible with this one
     *
     * A separator is `"||`" which splits the requirement string into
     * left OR right.
     * @returns A version range object.
     */
    static fromRequirementString(requirement) {
        const components = requirement.split(" ");
        let set = [];
        const requirements = [];
        for (const component of components) {
            if (component === "||") {
                if (set.length > 0) {
                    requirements.push(set);
                    set = [];
                }
            }
            else if (component.length > 0) {
                const match = /[0-9]/.exec(component);
                if (match) {
                    const comparator = component.slice(0, match.index).trim();
                    const version = Version.fromSemver(component.slice(match.index).trim());
                    set.push({ comparator, version });
                }
            }
        }
        if (set.length > 0) {
            requirements.push(set);
        }
        return new VersionRange(requirements);
    }
}

;// CONCATENATED MODULE: ../../node_modules/wasm-feature-detect/dist/esm/index.js
const bigInt=()=>(async e=>{try{return(await WebAssembly.instantiate(e)).instance.exports.b(BigInt(0))===BigInt(0)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,126,1,126,3,2,1,0,7,5,1,1,98,0,0,10,6,1,4,0,32,0,11])),bulkMemory=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),exceptions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),extendedConst=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,0,1,11,9,1,0,65,1,65,2,106,11,0])),gc=()=>(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,1,120,0])))(),jspi=()=>(async()=>"Suspender"in WebAssembly)(),memory64=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,4,1])),multiMemory=()=>(async()=>{try{return new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,5,5,2,0,0,0,0])),!0}catch(e){return!1}})(),multiValue=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,0,2,127,127,3,2,1,0,10,8,1,6,0,65,0,65,0,11])),mutableGlobals=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,2,8,1,1,97,1,98,3,127,1,6,6,1,127,1,65,0,11,7,5,1,1,97,3,1])),referenceTypes=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),relaxedSimd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),saturatedFloatToInt=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),signExtensions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),simd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),streamingCompilation=()=>(async()=>"compileStreaming"in WebAssembly)(),tailCall=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,6,1,4,0,18,0,11])),threads=()=>(async e=>{try{return"undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),typeReflection=()=>(async()=>"Function"in WebAssembly)();

;// CONCATENATED MODULE: ../core/dist/js-polyfills.js
/**
 * Polyfills the `Array.prototype.reduce` method.
 *
 * Production steps of ECMA-262, Edition 5, 15.4.4.21
 * Reference: https://es5.github.io/#x15.4.4.21
 * https://tc39.github.io/ecma262/#sec-array.prototype.reduce
 */
function polyfillArrayPrototypeReduce() {
    Object.defineProperty(Array.prototype, "reduce", {
        value(...args) {
            if (args.length === 0 &&
                window.Prototype &&
                window.Prototype.Version &&
                window.Prototype.Version < "1.6.1") {
                // Off-spec: compatibility with prototype.js
                return this.length > 1 ? this : this[0];
            }
            const callback = args[0];
            if (this === null) {
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            }
            if (typeof callback !== "function") {
                throw new TypeError(`${callback} is not a function`);
            }
            const o = Object(this);
            const len = o.length >>> 0;
            let k = 0;
            let value;
            if (args.length >= 2) {
                value = args[1];
            }
            else {
                while (k < len && !(k in o)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                value = o[k++];
            }
            while (k < len) {
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }
                k++;
            }
            return value;
        },
    });
}
/**
 * Polyfills the `Window` function.
 */
function polyfillWindow() {
    if (typeof window.constructor !== "function" ||
        !isNativeFunction(window.constructor)) {
        // Don't polyfill `Window` if `window.constructor` has been overridden.
        return;
    }
    // @ts-expect-error: `Function not assignable to { new (): Window; prototype: Window; }`
    window.Window = window.constructor;
}
/**
 * Polyfills the `Reflect` object and members.
 *
 * This is a partial implementation, just enough to match our needs.
 */
function tryPolyfillReflect() {
    if (window.Reflect === undefined || window.Reflect === null) {
        // @ts-expect-error: {} indeed doesn't implement Reflect's interface.
        window.Reflect = {};
    }
    if (typeof Reflect.get !== "function") {
        Object.defineProperty(Reflect, "get", {
            value(target, key) {
                return target[key];
            },
        });
    }
    if (typeof Reflect.set !== "function") {
        Object.defineProperty(Reflect, "set", {
            value(target, key, value) {
                target[key] = value;
            },
        });
    }
    if (typeof Reflect.has !== "function") {
        Object.defineProperty(Reflect, "has", {
            value(target, key) {
                // @ts-expect-error: Type 'T' is not assignable to type 'object'.
                return key in target;
            },
        });
    }
    if (typeof Reflect.ownKeys !== "function") {
        Object.defineProperty(Reflect, "ownKeys", {
            value(target) {
                return [
                    ...Object.getOwnPropertyNames(target),
                    ...Object.getOwnPropertySymbols(target),
                ];
            },
        });
    }
}
/**
 * Determines whether a function is native or not.
 *
 * @param func The function to test.
 * @returns True if the function hasn't been overridden.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFunction(func) {
    const val = typeof Function.prototype.toString === "function"
        ? Function.prototype.toString()
        : null;
    if (typeof val === "string" && val.indexOf("[native code]") >= 0) {
        return (Function.prototype.toString.call(func).indexOf("[native code]") >= 0);
    }
    return false;
}
/**
 * Checks and applies the polyfills to the current window, if needed.
 */
function setPolyfillsOnLoad() {
    if (typeof Array.prototype.reduce !== "function" ||
        !isNativeFunction(Array.prototype.reduce)) {
        // Some external libraries override the `Array.prototype.reduce` method in a way
        // that causes Webpack to crash (#1507, #1865), so we need to override it again.
        polyfillArrayPrototypeReduce();
    }
    if (typeof Window !== "function" || !isNativeFunction(Window)) {
        // Overriding the native `Window` function causes issues in wasm-bindgen, as a
        // code like `window instanceof Window` will no longer work.
        polyfillWindow();
    }
    // Some pages override the native `Reflect` object, which causes various issues:
    // 1- wasm-bindgen's stdlib may crash (#3173).
    // 2- FlashVars may be ignored (#8537).
    tryPolyfillReflect();
}

;// CONCATENATED MODULE: ../core/dist/current-script.js
// This must be in global scope because `document.currentScript`
// works only while the script is initially being processed.
let currentScriptURL = null;
let isExtension = false;
try {
    if (document.currentScript !== undefined &&
        document.currentScript !== null &&
        "src" in document.currentScript &&
        document.currentScript.src !== "") {
        let src = document.currentScript.src;
        // CDNs allow omitting the filename. If it's omitted, append a slash to
        // prevent the last component from being dropped.
        if (!src.endsWith(".js") && !src.endsWith("/")) {
            src += "/";
        }
        currentScriptURL = new URL(".", src);
        isExtension = currentScriptURL.protocol.includes("extension");
    }
}
catch (e) {
    console.warn("Unable to get currentScript URL");
}

;// CONCATENATED MODULE: ../core/dist/public-path.js

/**
 * Attempt to discover the public path of the current Ruffle source. This can
 * be used to configure Webpack.
 *
 * A global public path can be specified for all sources using the RufflePlayer
 * config:
 *
 * ```js
 * window.RufflePlayer.config.publicPath = "/dist/";
 * ```
 *
 * If no such config is specified, then the parent path of where this script is
 * hosted is assumed, which should be the correct default in most cases.
 *
 * @param config The `window.RufflePlayer.config` object.
 * @returns The public path for the given source.
 */
function publicPath(config) {
    var _a;
    // Default to the directory where this script resides.
    let path = (_a = currentScriptURL === null || currentScriptURL === void 0 ? void 0 : currentScriptURL.href) !== null && _a !== void 0 ? _a : "";
    if (!isExtension &&
        "publicPath" in config &&
        config.publicPath !== null &&
        config.publicPath !== undefined) {
        path = config.publicPath;
    }
    // Webpack expects the paths to end with a slash.
    if (path !== "" && !path.endsWith("/")) {
        path += "/";
    }
    return path;
}

;// CONCATENATED MODULE: ../core/dist/load-ruffle.js
/**
 * Conditional ruffle loader
 */



/**
 * Load ruffle from an automatically-detected location.
 *
 * This function returns a new instance of Ruffle and downloads it every time.
 * You should not use it directly; this module will memoize the resource
 * download.
 *
 * @param config The `window.RufflePlayer.config` object.
 * @param progressCallback The callback that will be run with Ruffle's download progress.
 * @returns A ruffle constructor that may be used to create new Ruffle
 * instances.
 */
async function fetchRuffle(config, progressCallback) {
    var _a;
    // Apply some pure JavaScript polyfills to prevent conflicts with external
    // libraries, if needed.
    setPolyfillsOnLoad();
    // NOTE: Keep this list in sync with $RUSTFLAGS in the CI build config!
    const extensionsSupported = (await Promise.all([
        bulkMemory(),
        simd(),
        saturatedFloatToInt(),
        signExtensions(),
        referenceTypes(),
    ])).every(Boolean);
    if (!extensionsSupported) {
        console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module");
    }
    try {
        __webpack_require__.p = publicPath(config);
    }
    catch (_) {
        // Must not be using webpack... ignore this option, it's not applicable
    }
    // Note: The argument passed to import() has to be a simple string literal,
    // otherwise some bundler will get confused and won't include the module?
    const { default: init, Ruffle } = await (extensionsSupported
        ? __webpack_require__.e(/* import() */ 339).then(__webpack_require__.bind(__webpack_require__, 339))
        : __webpack_require__.e(/* import() */ 159).then(__webpack_require__.bind(__webpack_require__, 796)));
    let response;
    const wasmUrl = extensionsSupported
        ? new URL(/* asset import */ __webpack_require__(899), __webpack_require__.b)
        : new URL(/* asset import */ __webpack_require__(878), __webpack_require__.b);
    const wasmResponse = await fetch(wasmUrl);
    // The Pale Moon browser currently lacks support for ReadableStream.
    // Unfortunately, currently it also lacks a sufficient WASM runtime.
    // If this becomes the last thing Pale Moon lacks, allow Ruffle to work.
    const readableStreamDefined = typeof ReadableStream === "function";
    if (progressCallback && readableStreamDefined) {
        const contentLength = ((_a = wasmResponse === null || wasmResponse === void 0 ? void 0 : wasmResponse.headers) === null || _a === void 0 ? void 0 : _a.get("content-length")) || "";
        let bytesLoaded = 0;
        // Use parseInt rather than Number so the empty string is coerced to NaN instead of 0
        const bytesTotal = parseInt(contentLength);
        response = new Response(new ReadableStream({
            async start(controller) {
                var _a;
                const reader = (_a = wasmResponse.body) === null || _a === void 0 ? void 0 : _a.getReader();
                if (!reader) {
                    throw "Response had no body";
                }
                progressCallback(bytesLoaded, bytesTotal);
                for (;;) {
                    const { done, value } = await reader.read();
                    if (done) {
                        break;
                    }
                    if (value === null || value === void 0 ? void 0 : value.byteLength) {
                        bytesLoaded += value === null || value === void 0 ? void 0 : value.byteLength;
                    }
                    controller.enqueue(value);
                    progressCallback(bytesLoaded, bytesTotal);
                }
                controller.close();
            },
        }), wasmResponse);
    }
    else {
        response = wasmResponse;
    }
    await init(response);
    return Ruffle;
}
let nativeConstructor = null;
/**
 * Obtain an instance of `Ruffle`.
 *
 * This function returns a promise which yields `Ruffle` asynchronously.
 *
 * @param container The container that the resulting canvas will be added to.
 * @param player The `RufflePlayer` object responsible for this instance of Ruffle.
 * @param config The `window.RufflePlayer.config` object.
 * @param progressCallback The callback that will be run with Ruffle's download progress.
 * @returns A ruffle instance.
 */
async function loadRuffle(container, player, config, progressCallback) {
    if (nativeConstructor === null) {
        nativeConstructor = fetchRuffle(config, progressCallback);
    }
    const constructor = await nativeConstructor;
    return new constructor(container, player, config);
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/types.js
/**
 * The `FluentType` class is the base of Fluent's type system.
 *
 * Fluent types wrap JavaScript values and store additional configuration for
 * them, which can then be used in the `toString` method together with a proper
 * `Intl` formatter.
 */
class FluentType {
    /**
     * Create a `FluentType` instance.
     *
     * @param value The JavaScript value to wrap.
     */
    constructor(value) {
        this.value = value;
    }
    /**
     * Unwrap the raw value stored by this `FluentType`.
     */
    valueOf() {
        return this.value;
    }
}
/**
 * A `FluentType` representing no correct value.
 */
class FluentNone extends FluentType {
    /**
     * Create an instance of `FluentNone` with an optional fallback value.
     * @param value The fallback value of this `FluentNone`.
     */
    constructor(value = "???") {
        super(value);
    }
    /**
     * Format this `FluentNone` to the fallback string.
     */
    toString(scope) {
        return `{${this.value}}`;
    }
}
/**
 * A `FluentType` representing a number.
 *
 * A `FluentNumber` instance stores the number value of the number it
 * represents. It may also store an option bag of options which will be passed
 * to `Intl.NumerFormat` when the `FluentNumber` is formatted to a string.
 */
class FluentNumber extends FluentType {
    /**
     * Create an instance of `FluentNumber` with options to the
     * `Intl.NumberFormat` constructor.
     *
     * @param value The number value of this `FluentNumber`.
     * @param opts Options which will be passed to `Intl.NumberFormat`.
     */
    constructor(value, opts = {}) {
        super(value);
        this.opts = opts;
    }
    /**
     * Format this `FluentNumber` to a string.
     */
    toString(scope) {
        try {
            const nf = scope.memoizeIntlObject(Intl.NumberFormat, this.opts);
            return nf.format(this.value);
        }
        catch (err) {
            scope.reportError(err);
            return this.value.toString(10);
        }
    }
}
/**
 * A `FluentType` representing a date and time.
 *
 * A `FluentDateTime` instance stores the number value of the date it
 * represents, as a numerical timestamp in milliseconds. It may also store an
 * option bag of options which will be passed to `Intl.DateTimeFormat` when the
 * `FluentDateTime` is formatted to a string.
 */
class FluentDateTime extends FluentType {
    /**
     * Create an instance of `FluentDateTime` with options to the
     * `Intl.DateTimeFormat` constructor.
     *
     * @param value The number value of this `FluentDateTime`, in milliseconds.
     * @param opts Options which will be passed to `Intl.DateTimeFormat`.
     */
    constructor(value, opts = {}) {
        super(value);
        this.opts = opts;
    }
    /**
     * Format this `FluentDateTime` to a string.
     */
    toString(scope) {
        try {
            const dtf = scope.memoizeIntlObject(Intl.DateTimeFormat, this.opts);
            return dtf.format(this.value);
        }
        catch (err) {
            scope.reportError(err);
            return new Date(this.value).toISOString();
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/resolver.js
/* global Intl */
/**
 * @overview
 *
 * The role of the Fluent resolver is to format a `Pattern` to an instance of
 * `FluentValue`. For performance reasons, primitive strings are considered
 * such instances, too.
 *
 * Translations can contain references to other messages or variables,
 * conditional logic in form of select expressions, traits which describe their
 * grammatical features, and can use Fluent builtins which make use of the
 * `Intl` formatters to format numbers and dates into the bundle's languages.
 * See the documentation of the Fluent syntax for more information.
 *
 * In case of errors the resolver will try to salvage as much of the
 * translation as possible. In rare situations where the resolver didn't know
 * how to recover from an error it will return an instance of `FluentNone`.
 *
 * All expressions resolve to an instance of `FluentValue`. The caller should
 * use the `toString` method to convert the instance to a native value.
 *
 * Functions in this file pass around an instance of the `Scope` class, which
 * stores the data required for successful resolution and error recovery.
 */

/**
 * The maximum number of placeables which can be expanded in a single call to
 * `formatPattern`. The limit protects against the Billion Laughs and Quadratic
 * Blowup attacks. See https://msdn.microsoft.com/en-us/magazine/ee335713.aspx.
 */
const MAX_PLACEABLES = 100;
/** Unicode bidi isolation characters. */
const FSI = "\u2068";
const PDI = "\u2069";
/** Helper: match a variant key to the given selector. */
function match(scope, selector, key) {
    if (key === selector) {
        // Both are strings.
        return true;
    }
    // XXX Consider comparing options too, e.g. minimumFractionDigits.
    if (key instanceof FluentNumber &&
        selector instanceof FluentNumber &&
        key.value === selector.value) {
        return true;
    }
    if (selector instanceof FluentNumber && typeof key === "string") {
        let category = scope
            .memoizeIntlObject(Intl.PluralRules, selector.opts)
            .select(selector.value);
        if (key === category) {
            return true;
        }
    }
    return false;
}
/** Helper: resolve the default variant from a list of variants. */
function getDefault(scope, variants, star) {
    if (variants[star]) {
        return resolvePattern(scope, variants[star].value);
    }
    scope.reportError(new RangeError("No default"));
    return new FluentNone();
}
/** Helper: resolve arguments to a call expression. */
function getArguments(scope, args) {
    const positional = [];
    const named = Object.create(null);
    for (const arg of args) {
        if (arg.type === "narg") {
            named[arg.name] = resolveExpression(scope, arg.value);
        }
        else {
            positional.push(resolveExpression(scope, arg));
        }
    }
    return { positional, named };
}
/** Resolve an expression to a Fluent type. */
function resolveExpression(scope, expr) {
    switch (expr.type) {
        case "str":
            return expr.value;
        case "num":
            return new FluentNumber(expr.value, {
                minimumFractionDigits: expr.precision,
            });
        case "var":
            return resolveVariableReference(scope, expr);
        case "mesg":
            return resolveMessageReference(scope, expr);
        case "term":
            return resolveTermReference(scope, expr);
        case "func":
            return resolveFunctionReference(scope, expr);
        case "select":
            return resolveSelectExpression(scope, expr);
        default:
            return new FluentNone();
    }
}
/** Resolve a reference to a variable. */
function resolveVariableReference(scope, { name }) {
    let arg;
    if (scope.params) {
        // We're inside a TermReference. It's OK to reference undefined parameters.
        if (Object.prototype.hasOwnProperty.call(scope.params, name)) {
            arg = scope.params[name];
        }
        else {
            return new FluentNone(`$${name}`);
        }
    }
    else if (scope.args &&
        Object.prototype.hasOwnProperty.call(scope.args, name)) {
        // We're in the top-level Pattern or inside a MessageReference. Missing
        // variables references produce ReferenceErrors.
        arg = scope.args[name];
    }
    else {
        scope.reportError(new ReferenceError(`Unknown variable: $${name}`));
        return new FluentNone(`$${name}`);
    }
    // Return early if the argument already is an instance of FluentType.
    if (arg instanceof FluentType) {
        return arg;
    }
    // Convert the argument to a Fluent type.
    switch (typeof arg) {
        case "string":
            return arg;
        case "number":
            return new FluentNumber(arg);
        case "object":
            if (arg instanceof Date) {
                return new FluentDateTime(arg.getTime());
            }
        // eslint-disable-next-line no-fallthrough
        default:
            scope.reportError(new TypeError(`Variable type not supported: $${name}, ${typeof arg}`));
            return new FluentNone(`$${name}`);
    }
}
/** Resolve a reference to another message. */
function resolveMessageReference(scope, { name, attr }) {
    const message = scope.bundle._messages.get(name);
    if (!message) {
        scope.reportError(new ReferenceError(`Unknown message: ${name}`));
        return new FluentNone(name);
    }
    if (attr) {
        const attribute = message.attributes[attr];
        if (attribute) {
            return resolvePattern(scope, attribute);
        }
        scope.reportError(new ReferenceError(`Unknown attribute: ${attr}`));
        return new FluentNone(`${name}.${attr}`);
    }
    if (message.value) {
        return resolvePattern(scope, message.value);
    }
    scope.reportError(new ReferenceError(`No value: ${name}`));
    return new FluentNone(name);
}
/** Resolve a call to a Term with key-value arguments. */
function resolveTermReference(scope, { name, attr, args }) {
    const id = `-${name}`;
    const term = scope.bundle._terms.get(id);
    if (!term) {
        scope.reportError(new ReferenceError(`Unknown term: ${id}`));
        return new FluentNone(id);
    }
    if (attr) {
        const attribute = term.attributes[attr];
        if (attribute) {
            // Every TermReference has its own variables.
            scope.params = getArguments(scope, args).named;
            const resolved = resolvePattern(scope, attribute);
            scope.params = null;
            return resolved;
        }
        scope.reportError(new ReferenceError(`Unknown attribute: ${attr}`));
        return new FluentNone(`${id}.${attr}`);
    }
    scope.params = getArguments(scope, args).named;
    const resolved = resolvePattern(scope, term.value);
    scope.params = null;
    return resolved;
}
/** Resolve a call to a Function with positional and key-value arguments. */
function resolveFunctionReference(scope, { name, args }) {
    // Some functions are built-in. Others may be provided by the runtime via
    // the `FluentBundle` constructor.
    let func = scope.bundle._functions[name];
    if (!func) {
        scope.reportError(new ReferenceError(`Unknown function: ${name}()`));
        return new FluentNone(`${name}()`);
    }
    if (typeof func !== "function") {
        scope.reportError(new TypeError(`Function ${name}() is not callable`));
        return new FluentNone(`${name}()`);
    }
    try {
        let resolved = getArguments(scope, args);
        return func(resolved.positional, resolved.named);
    }
    catch (err) {
        scope.reportError(err);
        return new FluentNone(`${name}()`);
    }
}
/** Resolve a select expression to the member object. */
function resolveSelectExpression(scope, { selector, variants, star }) {
    let sel = resolveExpression(scope, selector);
    if (sel instanceof FluentNone) {
        return getDefault(scope, variants, star);
    }
    // Match the selector against keys of each variant, in order.
    for (const variant of variants) {
        const key = resolveExpression(scope, variant.key);
        if (match(scope, sel, key)) {
            return resolvePattern(scope, variant.value);
        }
    }
    return getDefault(scope, variants, star);
}
/** Resolve a pattern (a complex string with placeables). */
function resolveComplexPattern(scope, ptn) {
    if (scope.dirty.has(ptn)) {
        scope.reportError(new RangeError("Cyclic reference"));
        return new FluentNone();
    }
    // Tag the pattern as dirty for the purpose of the current resolution.
    scope.dirty.add(ptn);
    const result = [];
    // Wrap interpolations with Directional Isolate Formatting characters
    // only when the pattern has more than one element.
    const useIsolating = scope.bundle._useIsolating && ptn.length > 1;
    for (const elem of ptn) {
        if (typeof elem === "string") {
            result.push(scope.bundle._transform(elem));
            continue;
        }
        scope.placeables++;
        if (scope.placeables > MAX_PLACEABLES) {
            scope.dirty.delete(ptn);
            // This is a fatal error which causes the resolver to instantly bail out
            // on this pattern. The length check protects against excessive memory
            // usage, and throwing protects against eating up the CPU when long
            // placeables are deeply nested.
            throw new RangeError(`Too many placeables expanded: ${scope.placeables}, ` +
                `max allowed is ${MAX_PLACEABLES}`);
        }
        if (useIsolating) {
            result.push(FSI);
        }
        result.push(resolveExpression(scope, elem).toString(scope));
        if (useIsolating) {
            result.push(PDI);
        }
    }
    scope.dirty.delete(ptn);
    return result.join("");
}
/**
 * Resolve a simple or a complex Pattern to a FluentString
 * (which is really the string primitive).
 */
function resolvePattern(scope, value) {
    // Resolve a simple pattern.
    if (typeof value === "string") {
        return scope.bundle._transform(value);
    }
    return resolveComplexPattern(scope, value);
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/scope.js
class Scope {
    constructor(bundle, errors, args) {
        /**
         * The Set of patterns already encountered during this resolution.
         * Used to detect and prevent cyclic resolutions.
         * @ignore
         */
        this.dirty = new WeakSet();
        /** A dict of parameters passed to a TermReference. */
        this.params = null;
        /**
         * The running count of placeables resolved so far.
         * Used to detect the Billion Laughs and Quadratic Blowup attacks.
         * @ignore
         */
        this.placeables = 0;
        this.bundle = bundle;
        this.errors = errors;
        this.args = args;
    }
    reportError(error) {
        if (!this.errors || !(error instanceof Error)) {
            throw error;
        }
        this.errors.push(error);
    }
    memoizeIntlObject(ctor, opts) {
        let cache = this.bundle._intls.get(ctor);
        if (!cache) {
            cache = {};
            this.bundle._intls.set(ctor, cache);
        }
        let id = JSON.stringify(opts);
        if (!cache[id]) {
            cache[id] = new ctor(this.bundle.locales, opts);
        }
        return cache[id];
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/builtins.js
/**
 * @overview
 *
 * The FTL resolver ships with a number of functions built-in.
 *
 * Each function take two arguments:
 *   - args - an array of positional args
 *   - opts - an object of key-value args
 *
 * Arguments to functions are guaranteed to already be instances of
 * `FluentValue`.  Functions must return `FluentValues` as well.
 */

function values(opts, allowed) {
    const unwrapped = Object.create(null);
    for (const [name, opt] of Object.entries(opts)) {
        if (allowed.includes(name)) {
            unwrapped[name] = opt.valueOf();
        }
    }
    return unwrapped;
}
const NUMBER_ALLOWED = [
    "unitDisplay",
    "currencyDisplay",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
];
/**
 * The implementation of the `NUMBER()` builtin available to translations.
 *
 * Translations may call the `NUMBER()` builtin in order to specify formatting
 * options of a number. For example:
 *
 *     pi = The value of Ï€ is {NUMBER($pi, maximumFractionDigits: 2)}.
 *
 * The implementation expects an array of `FluentValues` representing the
 * positional arguments, and an object of named `FluentValues` representing the
 * named parameters.
 *
 * The following options are recognized:
 *
 *     unitDisplay
 *     currencyDisplay
 *     useGrouping
 *     minimumIntegerDigits
 *     minimumFractionDigits
 *     maximumFractionDigits
 *     minimumSignificantDigits
 *     maximumSignificantDigits
 *
 * Other options are ignored.
 *
 * @param args The positional arguments passed to this `NUMBER()`.
 * @param opts The named argments passed to this `NUMBER()`.
 */
function NUMBER(args, opts) {
    let arg = args[0];
    if (arg instanceof FluentNone) {
        return new FluentNone(`NUMBER(${arg.valueOf()})`);
    }
    if (arg instanceof FluentNumber) {
        return new FluentNumber(arg.valueOf(), {
            ...arg.opts,
            ...values(opts, NUMBER_ALLOWED),
        });
    }
    if (arg instanceof FluentDateTime) {
        return new FluentNumber(arg.valueOf(), {
            ...values(opts, NUMBER_ALLOWED),
        });
    }
    throw new TypeError("Invalid argument to NUMBER");
}
const DATETIME_ALLOWED = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "dayPeriod",
    "hour12",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
];
/**
 * The implementation of the `DATETIME()` builtin available to translations.
 *
 * Translations may call the `DATETIME()` builtin in order to specify
 * formatting options of a number. For example:
 *
 *     now = It's {DATETIME($today, month: "long")}.
 *
 * The implementation expects an array of `FluentValues` representing the
 * positional arguments, and an object of named `FluentValues` representing the
 * named parameters.
 *
 * The following options are recognized:
 *
 *     dateStyle
 *     timeStyle
 *     fractionalSecondDigits
 *     dayPeriod
 *     hour12
 *     weekday
 *     era
 *     year
 *     month
 *     day
 *     hour
 *     minute
 *     second
 *     timeZoneName
 *
 * Other options are ignored.
 *
 * @param args The positional arguments passed to this `DATETIME()`.
 * @param opts The named argments passed to this `DATETIME()`.
 */
function DATETIME(args, opts) {
    let arg = args[0];
    if (arg instanceof FluentNone) {
        return new FluentNone(`DATETIME(${arg.valueOf()})`);
    }
    if (arg instanceof FluentDateTime) {
        return new FluentDateTime(arg.valueOf(), {
            ...arg.opts,
            ...values(opts, DATETIME_ALLOWED),
        });
    }
    if (arg instanceof FluentNumber) {
        return new FluentDateTime(arg.valueOf(), {
            ...values(opts, DATETIME_ALLOWED),
        });
    }
    throw new TypeError("Invalid argument to DATETIME");
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/memoizer.js
const cache = new Map();
function getMemoizerForLocale(locales) {
    const stringLocale = Array.isArray(locales) ? locales.join(" ") : locales;
    let memoizer = cache.get(stringLocale);
    if (memoizer === undefined) {
        memoizer = new Map();
        cache.set(stringLocale, memoizer);
    }
    return memoizer;
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/bundle.js





/**
 * Message bundles are single-language stores of translation resources. They are
 * responsible for formatting message values and attributes to strings.
 */
class FluentBundle {
    /**
     * Create an instance of `FluentBundle`.
     *
     * @example
     * ```js
     * let bundle = new FluentBundle(["en-US", "en"]);
     *
     * let bundle = new FluentBundle(locales, {useIsolating: false});
     *
     * let bundle = new FluentBundle(locales, {
     *   useIsolating: true,
     *   functions: {
     *     NODE_ENV: () => process.env.NODE_ENV
     *   }
     * });
     * ```
     *
     * @param locales - Used to instantiate `Intl` formatters used by translations.
     * @param options - Optional configuration for the bundle.
     */
    constructor(locales, { functions, useIsolating = true, transform = (v) => v, } = {}) {
        /** @ignore */
        this._terms = new Map();
        /** @ignore */
        this._messages = new Map();
        this.locales = Array.isArray(locales) ? locales : [locales];
        this._functions = {
            NUMBER: NUMBER,
            DATETIME: DATETIME,
            ...functions,
        };
        this._useIsolating = useIsolating;
        this._transform = transform;
        this._intls = getMemoizerForLocale(locales);
    }
    /**
     * Check if a message is present in the bundle.
     *
     * @param id - The identifier of the message to check.
     */
    hasMessage(id) {
        return this._messages.has(id);
    }
    /**
     * Return a raw unformatted message object from the bundle.
     *
     * Raw messages are `{value, attributes}` shapes containing translation units
     * called `Patterns`. `Patterns` are implementation-specific; they should be
     * treated as black boxes and formatted with `FluentBundle.formatPattern`.
     *
     * @param id - The identifier of the message to check.
     */
    getMessage(id) {
        return this._messages.get(id);
    }
    /**
     * Add a translation resource to the bundle.
     *
     * @example
     * ```js
     * let res = new FluentResource("foo = Foo");
     * bundle.addResource(res);
     * bundle.getMessage("foo");
     * // â†’ {value: .., attributes: {..}}
     * ```
     *
     * @param res
     * @param options
     */
    addResource(res, { allowOverrides = false, } = {}) {
        const errors = [];
        for (let i = 0; i < res.body.length; i++) {
            let entry = res.body[i];
            if (entry.id.startsWith("-")) {
                // Identifiers starting with a dash (-) define terms. Terms are private
                // and cannot be retrieved from FluentBundle.
                if (allowOverrides === false && this._terms.has(entry.id)) {
                    errors.push(new Error(`Attempt to override an existing term: "${entry.id}"`));
                    continue;
                }
                this._terms.set(entry.id, entry);
            }
            else {
                if (allowOverrides === false && this._messages.has(entry.id)) {
                    errors.push(new Error(`Attempt to override an existing message: "${entry.id}"`));
                    continue;
                }
                this._messages.set(entry.id, entry);
            }
        }
        return errors;
    }
    /**
     * Format a `Pattern` to a string.
     *
     * Format a raw `Pattern` into a string. `args` will be used to resolve
     * references to variables passed as arguments to the translation.
     *
     * In case of errors `formatPattern` will try to salvage as much of the
     * translation as possible and will still return a string. For performance
     * reasons, the encountered errors are not returned but instead are appended
     * to the `errors` array passed as the third argument.
     *
     * If `errors` is omitted, the first encountered error will be thrown.
     *
     * @example
     * ```js
     * let errors = [];
     * bundle.addResource(
     *     new FluentResource("hello = Hello, {$name}!"));
     *
     * let hello = bundle.getMessage("hello");
     * if (hello.value) {
     *     bundle.formatPattern(hello.value, {name: "Jane"}, errors);
     *     // Returns "Hello, Jane!" and `errors` is empty.
     *
     *     bundle.formatPattern(hello.value, undefined, errors);
     *     // Returns "Hello, {$name}!" and `errors` is now:
     *     // [<ReferenceError: Unknown variable: name>]
     * }
     * ```
     */
    formatPattern(pattern, args = null, errors = null) {
        // Resolve a simple pattern without creating a scope. No error handling is
        // required; by definition simple patterns don't have placeables.
        if (typeof pattern === "string") {
            return this._transform(pattern);
        }
        // Resolve a complex pattern.
        let scope = new Scope(this, errors, args);
        try {
            let value = resolveComplexPattern(scope, pattern);
            return value.toString(scope);
        }
        catch (err) {
            if (scope.errors && err instanceof Error) {
                scope.errors.push(err);
                return new FluentNone().toString(scope);
            }
            throw err;
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/resource.js
// This regex is used to iterate through the beginnings of messages and terms.
// With the /m flag, the ^ matches at the beginning of every line.
const RE_MESSAGE_START = /^(-?[a-zA-Z][\w-]*) *= */gm;
// Both Attributes and Variants are parsed in while loops. These regexes are
// used to break out of them.
const RE_ATTRIBUTE_START = /\.([a-zA-Z][\w-]*) *= */y;
const RE_VARIANT_START = /\*?\[/y;
const RE_NUMBER_LITERAL = /(-?[0-9]+(?:\.([0-9]+))?)/y;
const RE_IDENTIFIER = /([a-zA-Z][\w-]*)/y;
const RE_REFERENCE = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y;
const RE_FUNCTION_NAME = /^[A-Z][A-Z0-9_-]*$/;
// A "run" is a sequence of text or string literal characters which don't
// require any special handling. For TextElements such special characters are: {
// (starts a placeable), and line breaks which require additional logic to check
// if the next line is indented. For StringLiterals they are: \ (starts an
// escape sequence), " (ends the literal), and line breaks which are not allowed
// in StringLiterals. Note that string runs may be empty; text runs may not.
const RE_TEXT_RUN = /([^{}\n\r]+)/y;
const RE_STRING_RUN = /([^\\"\n\r]*)/y;
// Escape sequences.
const RE_STRING_ESCAPE = /\\([\\"])/y;
const RE_UNICODE_ESCAPE = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y;
// Used for trimming TextElements and indents.
const RE_LEADING_NEWLINES = /^\n+/;
const RE_TRAILING_SPACES = / +$/;
// Used in makeIndent to strip spaces from blank lines and normalize CRLF to LF.
const RE_BLANK_LINES = / *\r?\n/g;
// Used in makeIndent to measure the indentation.
const RE_INDENT = /( *)$/;
// Common tokens.
const TOKEN_BRACE_OPEN = /{\s*/y;
const TOKEN_BRACE_CLOSE = /\s*}/y;
const TOKEN_BRACKET_OPEN = /\[\s*/y;
const TOKEN_BRACKET_CLOSE = /\s*] */y;
const TOKEN_PAREN_OPEN = /\s*\(\s*/y;
const TOKEN_ARROW = /\s*->\s*/y;
const TOKEN_COLON = /\s*:\s*/y;
// Note the optional comma. As a deviation from the Fluent EBNF, the parser
// doesn't enforce commas between call arguments.
const TOKEN_COMMA = /\s*,?\s*/y;
const TOKEN_BLANK = /\s+/y;
/**
 * Fluent Resource is a structure storing parsed localization entries.
 */
class FluentResource {
    constructor(source) {
        this.body = [];
        RE_MESSAGE_START.lastIndex = 0;
        let cursor = 0;
        // Iterate over the beginnings of messages and terms to efficiently skip
        // comments and recover from errors.
        while (true) {
            let next = RE_MESSAGE_START.exec(source);
            if (next === null) {
                break;
            }
            cursor = RE_MESSAGE_START.lastIndex;
            try {
                this.body.push(parseMessage(next[1]));
            }
            catch (err) {
                if (err instanceof SyntaxError) {
                    // Don't report any Fluent syntax errors. Skip directly to the
                    // beginning of the next message or term.
                    continue;
                }
                throw err;
            }
        }
        // The parser implementation is inlined below for performance reasons,
        // as well as for convenience of accessing `source` and `cursor`.
        // The parser focuses on minimizing the number of false negatives at the
        // expense of increasing the risk of false positives. In other words, it
        // aims at parsing valid Fluent messages with a success rate of 100%, but it
        // may also parse a few invalid messages which the reference parser would
        // reject. The parser doesn't perform any validation and may produce entries
        // which wouldn't make sense in the real world. For best results users are
        // advised to validate translations with the fluent-syntax parser
        // pre-runtime.
        // The parser makes an extensive use of sticky regexes which can be anchored
        // to any offset of the source string without slicing it. Errors are thrown
        // to bail out of parsing of ill-formed messages.
        function test(re) {
            re.lastIndex = cursor;
            return re.test(source);
        }
        // Advance the cursor by the char if it matches. May be used as a predicate
        // (was the match found?) or, if errorClass is passed, as an assertion.
        function consumeChar(char, errorClass) {
            if (source[cursor] === char) {
                cursor++;
                return true;
            }
            if (errorClass) {
                throw new errorClass(`Expected ${char}`);
            }
            return false;
        }
        // Advance the cursor by the token if it matches. May be used as a predicate
        // (was the match found?) or, if errorClass is passed, as an assertion.
        function consumeToken(re, errorClass) {
            if (test(re)) {
                cursor = re.lastIndex;
                return true;
            }
            if (errorClass) {
                throw new errorClass(`Expected ${re.toString()}`);
            }
            return false;
        }
        // Execute a regex, advance the cursor, and return all capture groups.
        function match(re) {
            re.lastIndex = cursor;
            let result = re.exec(source);
            if (result === null) {
                throw new SyntaxError(`Expected ${re.toString()}`);
            }
            cursor = re.lastIndex;
            return result;
        }
        // Execute a regex, advance the cursor, and return the capture group.
        function match1(re) {
            return match(re)[1];
        }
        function parseMessage(id) {
            let value = parsePattern();
            let attributes = parseAttributes();
            if (value === null && Object.keys(attributes).length === 0) {
                throw new SyntaxError("Expected message value or attributes");
            }
            return { id, value, attributes };
        }
        function parseAttributes() {
            let attrs = Object.create(null);
            while (test(RE_ATTRIBUTE_START)) {
                let name = match1(RE_ATTRIBUTE_START);
                let value = parsePattern();
                if (value === null) {
                    throw new SyntaxError("Expected attribute value");
                }
                attrs[name] = value;
            }
            return attrs;
        }
        function parsePattern() {
            let first;
            // First try to parse any simple text on the same line as the id.
            if (test(RE_TEXT_RUN)) {
                first = match1(RE_TEXT_RUN);
            }
            // If there's a placeable on the first line, parse a complex pattern.
            if (source[cursor] === "{" || source[cursor] === "}") {
                // Re-use the text parsed above, if possible.
                return parsePatternElements(first ? [first] : [], Infinity);
            }
            // RE_TEXT_VALUE stops at newlines. Only continue parsing the pattern if
            // what comes after the newline is indented.
            let indent = parseIndent();
            if (indent) {
                if (first) {
                    // If there's text on the first line, the blank block is part of the
                    // translation content in its entirety.
                    return parsePatternElements([first, indent], indent.length);
                }
                // Otherwise, we're dealing with a block pattern, i.e. a pattern which
                // starts on a new line. Discrad the leading newlines but keep the
                // inline indent; it will be used by the dedentation logic.
                indent.value = trim(indent.value, RE_LEADING_NEWLINES);
                return parsePatternElements([indent], indent.length);
            }
            if (first) {
                // It was just a simple inline text after all.
                return trim(first, RE_TRAILING_SPACES);
            }
            return null;
        }
        // Parse a complex pattern as an array of elements.
        function parsePatternElements(elements = [], commonIndent) {
            while (true) {
                if (test(RE_TEXT_RUN)) {
                    elements.push(match1(RE_TEXT_RUN));
                    continue;
                }
                if (source[cursor] === "{") {
                    elements.push(parsePlaceable());
                    continue;
                }
                if (source[cursor] === "}") {
                    throw new SyntaxError("Unbalanced closing brace");
                }
                let indent = parseIndent();
                if (indent) {
                    elements.push(indent);
                    commonIndent = Math.min(commonIndent, indent.length);
                    continue;
                }
                break;
            }
            let lastIndex = elements.length - 1;
            let lastElement = elements[lastIndex];
            // Trim the trailing spaces in the last element if it's a TextElement.
            if (typeof lastElement === "string") {
                elements[lastIndex] = trim(lastElement, RE_TRAILING_SPACES);
            }
            let baked = [];
            for (let element of elements) {
                if (element instanceof Indent) {
                    // Dedent indented lines by the maximum common indent.
                    element = element.value.slice(0, element.value.length - commonIndent);
                }
                if (element) {
                    baked.push(element);
                }
            }
            return baked;
        }
        function parsePlaceable() {
            consumeToken(TOKEN_BRACE_OPEN, SyntaxError);
            let selector = parseInlineExpression();
            if (consumeToken(TOKEN_BRACE_CLOSE)) {
                return selector;
            }
            if (consumeToken(TOKEN_ARROW)) {
                let variants = parseVariants();
                consumeToken(TOKEN_BRACE_CLOSE, SyntaxError);
                return {
                    type: "select",
                    selector,
                    ...variants,
                };
            }
            throw new SyntaxError("Unclosed placeable");
        }
        function parseInlineExpression() {
            if (source[cursor] === "{") {
                // It's a nested placeable.
                return parsePlaceable();
            }
            if (test(RE_REFERENCE)) {
                let [, sigil, name, attr = null] = match(RE_REFERENCE);
                if (sigil === "$") {
                    return { type: "var", name };
                }
                if (consumeToken(TOKEN_PAREN_OPEN)) {
                    let args = parseArguments();
                    if (sigil === "-") {
                        // A parameterized term: -term(...).
                        return { type: "term", name, attr, args };
                    }
                    if (RE_FUNCTION_NAME.test(name)) {
                        return { type: "func", name, args };
                    }
                    throw new SyntaxError("Function names must be all upper-case");
                }
                if (sigil === "-") {
                    // A non-parameterized term: -term.
                    return {
                        type: "term",
                        name,
                        attr,
                        args: [],
                    };
                }
                return { type: "mesg", name, attr };
            }
            return parseLiteral();
        }
        function parseArguments() {
            let args = [];
            while (true) {
                switch (source[cursor]) {
                    case ")": // End of the argument list.
                        cursor++;
                        return args;
                    case undefined: // EOF
                        throw new SyntaxError("Unclosed argument list");
                }
                args.push(parseArgument());
                // Commas between arguments are treated as whitespace.
                consumeToken(TOKEN_COMMA);
            }
        }
        function parseArgument() {
            let expr = parseInlineExpression();
            if (expr.type !== "mesg") {
                return expr;
            }
            if (consumeToken(TOKEN_COLON)) {
                // The reference is the beginning of a named argument.
                return {
                    type: "narg",
                    name: expr.name,
                    value: parseLiteral(),
                };
            }
            // It's a regular message reference.
            return expr;
        }
        function parseVariants() {
            let variants = [];
            let count = 0;
            let star;
            while (test(RE_VARIANT_START)) {
                if (consumeChar("*")) {
                    star = count;
                }
                let key = parseVariantKey();
                let value = parsePattern();
                if (value === null) {
                    throw new SyntaxError("Expected variant value");
                }
                variants[count++] = { key, value };
            }
            if (count === 0) {
                return null;
            }
            if (star === undefined) {
                throw new SyntaxError("Expected default variant");
            }
            return { variants, star };
        }
        function parseVariantKey() {
            consumeToken(TOKEN_BRACKET_OPEN, SyntaxError);
            let key;
            if (test(RE_NUMBER_LITERAL)) {
                key = parseNumberLiteral();
            }
            else {
                key = {
                    type: "str",
                    value: match1(RE_IDENTIFIER),
                };
            }
            consumeToken(TOKEN_BRACKET_CLOSE, SyntaxError);
            return key;
        }
        function parseLiteral() {
            if (test(RE_NUMBER_LITERAL)) {
                return parseNumberLiteral();
            }
            if (source[cursor] === '"') {
                return parseStringLiteral();
            }
            throw new SyntaxError("Invalid expression");
        }
        function parseNumberLiteral() {
            let [, value, fraction = ""] = match(RE_NUMBER_LITERAL);
            let precision = fraction.length;
            return {
                type: "num",
                value: parseFloat(value),
                precision,
            };
        }
        function parseStringLiteral() {
            consumeChar('"', SyntaxError);
            let value = "";
            while (true) {
                value += match1(RE_STRING_RUN);
                if (source[cursor] === "\\") {
                    value += parseEscapeSequence();
                    continue;
                }
                if (consumeChar('"')) {
                    return { type: "str", value };
                }
                // We've reached an EOL of EOF.
                throw new SyntaxError("Unclosed string literal");
            }
        }
        // Unescape known escape sequences.
        function parseEscapeSequence() {
            if (test(RE_STRING_ESCAPE)) {
                return match1(RE_STRING_ESCAPE);
            }
            if (test(RE_UNICODE_ESCAPE)) {
                let [, codepoint4, codepoint6] = match(RE_UNICODE_ESCAPE);
                let codepoint = parseInt(codepoint4 || codepoint6, 16);
                return codepoint <= 0xd7ff || 0xe000 <= codepoint
                    ? // It's a Unicode scalar value.
                        String.fromCodePoint(codepoint)
                    : // Lonely surrogates can cause trouble when the parsing result is
                        // saved using UTF-8. Use U+FFFD REPLACEMENT CHARACTER instead.
                        "ï¿½";
            }
            throw new SyntaxError("Unknown escape sequence");
        }
        // Parse blank space. Return it if it looks like indent before a pattern
        // line. Skip it othwerwise.
        function parseIndent() {
            let start = cursor;
            consumeToken(TOKEN_BLANK);
            // Check the first non-blank character after the indent.
            switch (source[cursor]) {
                case ".":
                case "[":
                case "*":
                case "}":
                case undefined: // EOF
                    // A special character. End the Pattern.
                    return false;
                case "{":
                    // Placeables don't require indentation (in EBNF: block-placeable).
                    // Continue the Pattern.
                    return makeIndent(source.slice(start, cursor));
            }
            // If the first character on the line is not one of the special characters
            // listed above, it's a regular text character. Check if there's at least
            // one space of indent before it.
            if (source[cursor - 1] === " ") {
                // It's an indented text character (in EBNF: indented-char). Continue
                // the Pattern.
                return makeIndent(source.slice(start, cursor));
            }
            // A not-indented text character is likely the identifier of the next
            // message. End the Pattern.
            return false;
        }
        // Trim blanks in text according to the given regex.
        function trim(text, re) {
            return text.replace(re, "");
        }
        // Normalize a blank block and extract the indent details.
        function makeIndent(blank) {
            let value = blank.replace(RE_BLANK_LINES, "\n");
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            let length = RE_INDENT.exec(blank)[1].length;
            return new Indent(value, length);
        }
    }
}
class Indent {
    constructor(value, length) {
        this.value = value;
        this.length = length;
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/index.js
/**
 * @module fluent
 * @overview
 *
 * `fluent` is a JavaScript implementation of Project Fluent, a localization
 * framework designed to unleash the expressive power of the natural language.
 *
 */




;// CONCATENATED MODULE: ../../node_modules/@fluent/langneg/esm/locale.js
/* eslint no-magic-numbers: 0 */
const languageCodeRe = "([a-z]{2,3}|\\*)";
const scriptCodeRe = "(?:-([a-z]{4}|\\*))";
const regionCodeRe = "(?:-([a-z]{2}|\\*))";
const variantCodeRe = "(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))";
/**
 * Regular expression splitting locale id into four pieces:
 *
 * Example: `en-Latn-US-macos`
 *
 * language: en
 * script:   Latn
 * region:   US
 * variant:  macos
 *
 * It can also accept a range `*` character on any position.
 */
const localeRe = new RegExp(`^${languageCodeRe}${scriptCodeRe}?${regionCodeRe}?${variantCodeRe}?$`, "i");
class Locale {
    /**
     * Parses a locale id using the localeRe into an array with four elements.
     *
     * If the second argument `range` is set to true, it places range `*` char
     * in place of any missing piece.
     *
     * It also allows skipping the script section of the id, so `en-US` is
     * properly parsed as `en-*-US-*`.
     */
    constructor(locale) {
        const result = localeRe.exec(locale.replace(/_/g, "-"));
        if (!result) {
            this.isWellFormed = false;
            return;
        }
        let [, language, script, region, variant] = result;
        if (language) {
            this.language = language.toLowerCase();
        }
        if (script) {
            this.script = script[0].toUpperCase() + script.slice(1);
        }
        if (region) {
            this.region = region.toUpperCase();
        }
        this.variant = variant;
        this.isWellFormed = true;
    }
    isEqual(other) {
        return (this.language === other.language &&
            this.script === other.script &&
            this.region === other.region &&
            this.variant === other.variant);
    }
    matches(other, thisRange = false, otherRange = false) {
        return ((this.language === other.language ||
            (thisRange && this.language === undefined) ||
            (otherRange && other.language === undefined)) &&
            (this.script === other.script ||
                (thisRange && this.script === undefined) ||
                (otherRange && other.script === undefined)) &&
            (this.region === other.region ||
                (thisRange && this.region === undefined) ||
                (otherRange && other.region === undefined)) &&
            (this.variant === other.variant ||
                (thisRange && this.variant === undefined) ||
                (otherRange && other.variant === undefined)));
    }
    toString() {
        return [this.language, this.script, this.region, this.variant]
            .filter(part => part !== undefined)
            .join("-");
    }
    clearVariants() {
        this.variant = undefined;
    }
    clearRegion() {
        this.region = undefined;
    }
    addLikelySubtags() {
        const newLocale = getLikelySubtagsMin(this.toString().toLowerCase());
        if (newLocale) {
            this.language = newLocale.language;
            this.script = newLocale.script;
            this.region = newLocale.region;
            this.variant = newLocale.variant;
            return true;
        }
        return false;
    }
}
/**
 * Below is a manually a list of likely subtags corresponding to Unicode
 * CLDR likelySubtags list.
 * This list is curated by the maintainers of Project Fluent and is
 * intended to be used in place of the full likelySubtags list in use cases
 * where full list cannot be (for example, due to the size).
 *
 * This version of the list is based on CLDR 30.0.3.
 */
const likelySubtagsMin = {
    ar: "ar-arab-eg",
    "az-arab": "az-arab-ir",
    "az-ir": "az-arab-ir",
    be: "be-cyrl-by",
    da: "da-latn-dk",
    el: "el-grek-gr",
    en: "en-latn-us",
    fa: "fa-arab-ir",
    ja: "ja-jpan-jp",
    ko: "ko-kore-kr",
    pt: "pt-latn-br",
    sr: "sr-cyrl-rs",
    "sr-ru": "sr-latn-ru",
    sv: "sv-latn-se",
    ta: "ta-taml-in",
    uk: "uk-cyrl-ua",
    zh: "zh-hans-cn",
    "zh-hant": "zh-hant-tw",
    "zh-hk": "zh-hant-hk",
    "zh-mo": "zh-hant-mo",
    "zh-tw": "zh-hant-tw",
    "zh-gb": "zh-hant-gb",
    "zh-us": "zh-hant-us",
};
const regionMatchingLangs = [
    "az",
    "bg",
    "cs",
    "de",
    "es",
    "fi",
    "fr",
    "hu",
    "it",
    "lt",
    "lv",
    "nl",
    "pl",
    "ro",
    "ru",
];
function getLikelySubtagsMin(loc) {
    if (Object.prototype.hasOwnProperty.call(likelySubtagsMin, loc)) {
        return new Locale(likelySubtagsMin[loc]);
    }
    const locale = new Locale(loc);
    if (locale.language && regionMatchingLangs.includes(locale.language)) {
        locale.region = locale.language.toUpperCase();
        return locale;
    }
    return null;
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/langneg/esm/matches.js
/* eslint no-magic-numbers: 0 */

/**
 * Negotiates the languages between the list of requested locales against
 * a list of available locales.
 *
 * The algorithm is based on the BCP4647 3.3.2 Extended Filtering algorithm,
 * with several modifications:
 *
 *  1) available locales are treated as ranges
 *
 *    This change allows us to match a more specific request against
 *    more generic available locale.
 *
 *    For example, if the available locale list provides locale `en`,
 *    and the requested locale is `en-US`, we treat the available locale as
 *    a locale that matches all possible english requests.
 *
 *    This means that we expect available locale ID to be as precize as
 *    the matches they want to cover.
 *
 *    For example, if there is only `sr` available, it's ok to list
 *    it in available locales. But once the available locales has both,
 *    Cyrl and Latn variants, the locale IDs should be `sr-Cyrl` and `sr-Latn`
 *    to avoid any `sr-*` request to match against whole `sr` range.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['en-US'] * ['en'] = ['en']
 *
 *  2) likely subtags from LDML 4.3 Likely Subtags has been added
 *
 *    The most obvious likely subtag that can be computed is a duplication
 *    of the language field onto region field (`fr` => `fr-FR`).
 *
 *    On top of that, likely subtags may use a list of mappings, that
 *    allow the algorithm to handle non-obvious matches.
 *    For example, making sure that we match `en` to `en-US` or `sr` to
 *    `sr-Cyrl`, while `sr-RU` to `sr-Latn-RU`.
 *
 *    This list can be taken directly from CLDR Supplemental Data.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['fr'] * ['fr-FR'] = ['fr-FR']
 *    ['en'] * ['en-US'] = ['en-US']
 *    ['sr'] * ['sr-Latn', 'sr-Cyrl'] = ['sr-Cyrl']
 *
 *  3) variant/region range check has been added
 *
 *    Lastly, the last form of check is against the requested locale ID
 *    but with the variant/region field replaced with a `*` range.
 *
 *    The rationale here laid out in LDML 4.4 Language Matching:
 *      "(...) normally the fall-off between the user's languages is
 *      substantially greated than regional variants."
 *
 *    In other words, if we can't match for the given region, maybe
 *    we can match for the same language/script but other region, and
 *    it will in most cases be preferred over falling back on the next
 *    language.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['en-AU'] * ['en-US'] = ['en-US']
 *    ['sr-RU'] * ['sr-Latn-RO'] = ['sr-Latn-RO'] // sr-RU -> sr-Latn-RU
 *
 *    It works similarly to getParentLocales algo, except that we stop
 *    after matching against variant/region ranges and don't try to match
 *    ignoring script ranges. That means that `sr-Cyrl` will never match
 *    against `sr-Latn`.
 */
function filterMatches(requestedLocales, availableLocales, strategy) {
    const supportedLocales = new Set();
    const availableLocalesMap = new Map();
    for (let locale of availableLocales) {
        let newLocale = new Locale(locale);
        if (newLocale.isWellFormed) {
            availableLocalesMap.set(locale, new Locale(locale));
        }
    }
    outer: for (const reqLocStr of requestedLocales) {
        const reqLocStrLC = reqLocStr.toLowerCase();
        const requestedLocale = new Locale(reqLocStrLC);
        if (requestedLocale.language === undefined) {
            continue;
        }
        // 1) Attempt to make an exact match
        // Example: `en-US` === `en-US`
        for (const key of availableLocalesMap.keys()) {
            if (reqLocStrLC === key.toLowerCase()) {
                supportedLocales.add(key);
                availableLocalesMap.delete(key);
                if (strategy === "lookup") {
                    return Array.from(supportedLocales);
                }
                else if (strategy === "filtering") {
                    continue;
                }
                else {
                    continue outer;
                }
            }
        }
        // 2) Attempt to match against the available range
        // This turns `en` into `en-*-*-*` and `en-US` into `en-*-US-*`
        // Example: ['en-US'] * ['en'] = ['en']
        for (const [key, availableLocale] of availableLocalesMap.entries()) {
            if (availableLocale.matches(requestedLocale, true, false)) {
                supportedLocales.add(key);
                availableLocalesMap.delete(key);
                if (strategy === "lookup") {
                    return Array.from(supportedLocales);
                }
                else if (strategy === "filtering") {
                    continue;
                }
                else {
                    continue outer;
                }
            }
        }
        // 3) Attempt to retrieve a maximal version of the requested locale ID
        // If data is available, it'll expand `en` into `en-Latn-US` and
        // `zh` into `zh-Hans-CN`.
        // Example: ['en'] * ['en-GB', 'en-US'] = ['en-US']
        if (requestedLocale.addLikelySubtags()) {
            for (const [key, availableLocale] of availableLocalesMap.entries()) {
                if (availableLocale.matches(requestedLocale, true, false)) {
                    supportedLocales.add(key);
                    availableLocalesMap.delete(key);
                    if (strategy === "lookup") {
                        return Array.from(supportedLocales);
                    }
                    else if (strategy === "filtering") {
                        continue;
                    }
                    else {
                        continue outer;
                    }
                }
            }
        }
        // 4) Attempt to look up for a different variant for the same locale ID
        // Example: ['en-US-mac'] * ['en-US-win'] = ['en-US-win']
        requestedLocale.clearVariants();
        for (const [key, availableLocale] of availableLocalesMap.entries()) {
            if (availableLocale.matches(requestedLocale, true, true)) {
                supportedLocales.add(key);
                availableLocalesMap.delete(key);
                if (strategy === "lookup") {
                    return Array.from(supportedLocales);
                }
                else if (strategy === "filtering") {
                    continue;
                }
                else {
                    continue outer;
                }
            }
        }
        // 5) Attempt to match against the likely subtag without region
        // In the example below, addLikelySubtags will turn
        // `zh-Hant` into `zh-Hant-TW` giving `zh-TW` priority match
        // over `zh-CN`.
        //
        // Example: ['zh-Hant-HK'] * ['zh-TW', 'zh-CN'] = ['zh-TW']
        requestedLocale.clearRegion();
        if (requestedLocale.addLikelySubtags()) {
            for (const [key, availableLocale] of availableLocalesMap.entries()) {
                if (availableLocale.matches(requestedLocale, true, false)) {
                    supportedLocales.add(key);
                    availableLocalesMap.delete(key);
                    if (strategy === "lookup") {
                        return Array.from(supportedLocales);
                    }
                    else if (strategy === "filtering") {
                        continue;
                    }
                    else {
                        continue outer;
                    }
                }
            }
        }
        // 6) Attempt to look up for a different region for the same locale ID
        // Example: ['en-US'] * ['en-AU'] = ['en-AU']
        requestedLocale.clearRegion();
        for (const [key, availableLocale] of availableLocalesMap.entries()) {
            if (availableLocale.matches(requestedLocale, true, true)) {
                supportedLocales.add(key);
                availableLocalesMap.delete(key);
                if (strategy === "lookup") {
                    return Array.from(supportedLocales);
                }
                else if (strategy === "filtering") {
                    continue;
                }
                else {
                    continue outer;
                }
            }
        }
    }
    return Array.from(supportedLocales);
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/langneg/esm/negotiate_languages.js

/**
 * Negotiates the languages between the list of requested locales against
 * a list of available locales.
 *
 * It accepts three arguments:
 *
 *   requestedLocales:
 *     an Array of strings with BCP47 locale IDs sorted
 *     according to user preferences.
 *
 *   availableLocales:
 *     an Array of strings with BCP47 locale IDs of locale for which
 *     resources are available. Unsorted.
 *
 *   options:
 *     An object with the following, optional keys:
 *
 *       strategy: 'filtering' (default) | 'matching' | 'lookup'
 *
 *       defaultLocale:
 *         a string with BCP47 locale ID to be used
 *         as a last resort locale.
 *
 *
 * It returns an Array of strings with BCP47 locale IDs sorted according to the
 * user preferences.
 *
 * The exact list will be selected differently depending on the strategy:
 *
 *   'filtering': (default)
 *     In the filtering strategy, the algorithm will attempt to match
 *     as many keys in the available locales in order of the requested locales.
 *
 *   'matching':
 *     In the matching strategy, the algorithm will attempt to find the
 *     best possible match for each element of the requestedLocales list.
 *
 *   'lookup':
 *     In the lookup strategy, the algorithm will attempt to find a single
 *     best available locale based on the requested locales list.
 *
 *     This strategy requires defaultLocale option to be set.
 */
function negotiateLanguages(requestedLocales, availableLocales, { strategy = "filtering", defaultLocale } = {}) {
    const supportedLocales = filterMatches(Array.from(requestedLocales !== null && requestedLocales !== void 0 ? requestedLocales : []).map(String), Array.from(availableLocales !== null && availableLocales !== void 0 ? availableLocales : []).map(String), strategy);
    if (strategy === "lookup") {
        if (defaultLocale === undefined) {
            throw new Error("defaultLocale cannot be undefined for strategy `lookup`");
        }
        if (supportedLocales.length === 0) {
            supportedLocales.push(defaultLocale);
        }
    }
    else if (defaultLocale && !supportedLocales.includes(defaultLocale)) {
        supportedLocales.push(defaultLocale);
    }
    return supportedLocales;
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/langneg/esm/index.js
/*
 * @module fluent-langneg
 * @overview
 *
 * `fluent-langneg` provides language negotiation API that fits into
 * Project Fluent localization composition and fallbacking strategy.
 *
 */




;// CONCATENATED MODULE: ../core/dist/i18n.js


// This is automatically populated by `tools/bundle_texts.js` via a postbuild script
const BUNDLED_TEXTS = {
  "ar-SA": {
    "context_menu.ftl": "context-menu-download-swf = ØªØ­Ù…ÙŠÙ„ .swf\ncontext-menu-copy-debug-info = Ù†Ø³Ø® Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªØµØ­ÙŠØ­\ncontext-menu-open-save-manager = ÙØªØ­ Ù…Ø¯ÙŠØ± Ø§Ù„Ø­ÙØ¸\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ø­ÙˆÙ„ Ù…Ù„Ø­Ù‚ Ø±ÙÙ„ ({ $version })\n       *[other] Ø­ÙˆÙ„ Ø±ÙÙ„ ({ $version })\n    }\ncontext-menu-hide = Ø¥Ø®ÙØ§Ø¡ Ù‡Ø°Ù‡ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©\ncontext-menu-exit-fullscreen = Ø§Ù„Ø®Ø±ÙˆØ¬ Ù…Ù† ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„Ø´Ø§Ø´Ø© Ø§Ù„ÙƒØ§Ù…Ù„Ø©\ncontext-menu-enter-fullscreen = ØªÙØ¹ÙŠÙ„ ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„Ø´Ø§Ø´Ø© Ø§Ù„ÙƒØ§Ù…Ù„Ø©\ncontext-menu-volume-controls = Ø§Ù„ØªØ­ÙƒÙ… Ø¨Ø§Ù„ØµÙˆØª\n",
    "messages.ftl": "message-cant-embed =\n    Ù„Ù… ØªÙƒÙ† Ø±ÙÙ„ Ù‚Ø§Ø¯Ø±Ø© Ø¹Ù„Ù‰ ØªØ´ØºÙŠÙ„ Ø§Ù„ÙÙ„Ø§Ø´ Ø§Ù„Ù…Ø¶Ù…Ù†Ø© ÙÙŠ Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø©.\n    ÙŠÙ…ÙƒÙ†Ùƒ Ù…Ø­Ø§ÙˆÙ„Ø© ÙØªØ­ Ø§Ù„Ù…Ù„Ù ÙÙŠ Ø¹Ù„Ø§Ù…Ø© ØªØ¨ÙˆÙŠØ¨ Ù…Ù†ÙØµÙ„Ø©ØŒ Ù„ØªØ¬Ø§ÙˆØ² Ù‡Ø°Ù‡ Ø§Ù„Ù…Ø´ÙƒÙ„Ø©.\npanic-title = Ù„Ù‚Ø¯ Ø­Ø¯Ø« Ø®Ø·Ø£ Ù…Ø§ :(\nmore-info = Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø£ÙƒØ«Ø±\nrun-anyway = Ø§Ù„ØªØ´ØºÙŠÙ„ Ø¹Ù„Ù‰ Ø£ÙŠ Ø­Ø§Ù„\ncontinue = Ø§Ù„Ø§Ø³ØªÙ…Ø±Ø§Ø±\nreport-bug = Ø¥Ø¨Ù„Ø§Øº Ø¹Ù† Ø®Ù„Ù„\nupdate-ruffle = ØªØ­Ø¯ÙŠØ« Ø±ÙÙ„\nruffle-demo = ÙˆÙŠØ¨ Ø§Ù„ØªØ¬Ø±ÙŠØ¨ÙŠ\nruffle-desktop = Ø¨Ø±Ù†Ø§Ù…Ø¬ Ø³Ø·Ø­ Ø§Ù„Ù…ÙƒØªØ¨\nruffle-wiki = Ø¹Ø±Ø¶ Ø±ÙÙ„ ÙˆÙŠÙƒÙŠ\nenable-hardware-acceleration = ÙŠØ¨Ø¯Ùˆ Ø£Ù† ØªØ³Ø§Ø±Ø¹ Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© ØºÙŠØ± Ù…ÙØ¹Ù„. Ø¨ÙŠÙ†Ù…Ø§ Ù‚Ø¯ ÙŠØ¹Ù…Ù„ Ø§Ù„Ø±ÙˆÙÙ„ØŒ Ù‚Ø¯ ÙŠÙƒÙˆÙ† Ø¨Ø·ÙŠØ¦Ø§Ù‹ Ø¨Ø´ÙƒÙ„ ØºÙŠØ± Ù…Ø¹Ù‚ÙˆÙ„. ÙŠÙ…ÙƒÙ†Ùƒ Ù…Ø¹Ø±ÙØ© ÙƒÙŠÙÙŠØ© ØªÙ…ÙƒÙŠÙ† ØªØ³Ø§Ø±Ø¹ Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© Ù…Ù† Ø®Ù„Ø§Ù„ Ù…ØªØ§Ø¨Ø¹Ø© Ù‡Ø°Ø§ Ø§Ù„Ø±Ø§Ø¨Ø·.\nview-error-details = Ø¹Ø±Ø¶ ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø®Ø·Ø£\nopen-in-new-tab = ÙØªØ­ ÙÙŠ Ø¹Ù„Ø§Ù…Ø© ØªØ¨ÙˆÙŠØ¨ Ø¬Ø¯ÙŠØ¯Ø©\nclick-to-unmute = Ø§Ù†Ù‚Ø± Ù„Ø¥Ù„ØºØ§Ø¡ Ø§Ù„ÙƒØªÙ…\nerror-file-protocol =\n    ÙŠØ¨Ø¯Ùˆ Ø£Ù†Ùƒ ØªÙ‚ÙˆÙ… Ø¨ØªØ´ØºÙŠÙ„ Ø±ÙÙ„ Ø¹Ù„Ù‰ Ø¨Ø±ÙˆØªÙˆÙƒÙˆÙ„ \"Ø§Ù„Ù…Ù„Ù:\".\n    Ù‡Ø°Ø§ Ù„Ù† ÙŠØ¹Ù…Ù„ Ù„Ø£Ù† Ø§Ù„Ù…ØªØµÙØ­Ø§Øª ØªÙ…Ù†Ø¹ Ø§Ù„Ø¹Ø¯ÙŠØ¯ Ù…Ù† Ø§Ù„Ù…ÙŠØ²Ø§Øª Ù…Ù† Ø§Ù„Ø¹Ù…Ù„ Ù„Ø£Ø³Ø¨Ø§Ø¨ Ø£Ù…Ù†ÙŠØ©.\n    Ø¨Ø¯Ù„Ø§Ù‹ Ù…Ù† Ø°Ù„ÙƒØŒ Ù†Ø¯Ø¹ÙˆÙƒ Ø¥Ù„Ù‰ Ø¥Ø¹Ø¯Ø§Ø¯ Ø®Ø§Ø¯Ù… Ù…Ø­Ù„ÙŠ Ø£Ùˆ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¹Ø±Ø¶ Ø§Ù„ÙˆÙŠØ¨ Ø£Ùˆ ØªØ·Ø¨ÙŠÙ‚ Ø³Ø·Ø­ Ø§Ù„Ù…ÙƒØªØ¨.\nerror-javascript-config =\n    ØªØ¹Ø±Ø¶ Ø±ÙÙ„ Ø¥Ù„Ù‰ Ù…Ø´ÙƒÙ„Ø© Ø±Ø¦ÙŠØ³ÙŠØ© Ø¨Ø³Ø¨Ø¨ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø®Ø§Ø·Ø¦Ø© Ù„Ù„Ø¬Ø§ÙØ§ Ø³ÙƒØ±ÙŠØ¨Øª.\n    Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ Ù†Ø­Ù† Ù†Ø¯Ø¹ÙˆÙƒ Ø¥Ù„Ù‰ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø®Ø·Ø£ Ù„Ù…Ø¹Ø±ÙØ© Ø³Ø¨Ø¨ Ø§Ù„Ù…Ø´ÙƒÙ„Ø©.\n    ÙŠÙ…ÙƒÙ†Ùƒ Ø£ÙŠØ¶Ø§ Ø§Ù„Ø±Ø¬ÙˆØ¹ Ø¥Ù„Ù‰ Ø±ÙÙ„ ÙˆÙŠÙƒÙŠ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©.\nerror-wasm-not-found =\n    ÙØ´Ù„ Ø±ÙÙ„ ÙÙŠ ØªØ­Ù…ÙŠÙ„ Ù…ÙƒÙˆÙ† Ø§Ù„Ù…Ù„Ù \".wasm\" Ø§Ù„Ù…Ø·Ù„ÙˆØ¨.\n    Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø§Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø£Ù† Ø§Ù„Ù…Ù„Ù Ù‚Ø¯ ØªÙ… ØªØ­Ù…ÙŠÙ„Ù‡ Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­.\n    Ø¥Ø°Ø§ Ø§Ø³ØªÙ…Ø±Øª Ø§Ù„Ù…Ø´ÙƒÙ„Ø©ØŒ Ù‚Ø¯ ØªØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª \"Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ø¹Ø§Ù…\": Ø§Ù„Ø±Ø¬Ø§Ø¡ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø±ÙÙ„ ÙˆÙŠÙƒÙŠ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©.\nerror-wasm-mime-type =\n    ÙˆØ§Ø¬Ù‡Øª Ø±ÙÙ„ Ù…Ø´ÙƒÙ„Ø© Ø±Ø¦ÙŠØ³ÙŠØ© Ø£Ø«Ù†Ø§Ø¡ Ù…Ø­Ø§ÙˆÙ„Ø© Ø§Ù„ØªÙ‡ÙŠØ¦Ø©.\n    Ø®Ø§Ø¯Ù… Ø§Ù„ÙˆÙŠØ¨ Ù‡Ø°Ø§ Ù„Ø§ ÙŠØ®Ø¯Ù… Ù…Ù„ÙØ§Øª \". wasm\" Ù…Ø¹ Ù†ÙˆØ¹ MIME Ø§Ù„ØµØ­ÙŠØ­.\n    Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ ÙŠØ±Ø¬Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø±ÙÙ„ ÙˆÙŠÙƒÙŠ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©.\nerror-swf-fetch =\n    ÙØ´Ù„ Ø±ÙÙ„ ÙÙŠ ØªØ­Ù…ÙŠÙ„ Ù…Ù„Ù ÙÙ„Ø§Ø´ SWF.\n    Ø§Ù„Ø³Ø¨Ø¨ Ø§Ù„Ø£ÙƒØ«Ø± Ø§Ø­ØªÙ…Ø§Ù„Ø§ Ù‡Ùˆ Ø£Ù† Ø§Ù„Ù…Ù„Ù Ù„Ù… ÙŠØ¹Ø¯ Ù…ÙˆØ¬ÙˆØ¯Ø§ØŒ Ù„Ø°Ù„Ùƒ Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø´ÙŠØ¡ Ù„ÙŠØ­Ù…Ù„Ù‡ Ø±ÙÙ„.\n    Ø­Ø§ÙˆÙ„ Ø§Ù„Ø§ØªØµØ§Ù„ Ø¨Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©.\nerror-swf-cors =\n    ÙØ´Ù„ Ø§Ù„Ø±ÙˆÙÙ„ ÙÙŠ ØªØ­Ù…ÙŠÙ„ Ù…Ù„Ù ÙÙ„Ø§Ø´ SWF.\n    Ù…Ù† Ø§Ù„Ù…Ø­ØªÙ…Ù„ Ø£Ù† ØªÙ… Ø­Ø¸Ø± Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ù†Ø§Ù„ Ø¨ÙˆØ§Ø³Ø·Ø© Ø³ÙŠØ§Ø³Ø© CORS.\n    Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ ÙŠØ±Ø¬Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø±ÙÙ„ ÙˆÙŠÙƒÙŠ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©.\nerror-wasm-cors =\n    ÙØ´Ù„ Ø±ÙÙ„ ÙÙŠ ØªØ­Ù…ÙŠÙ„ Ù…ÙƒÙˆÙ† Ù…Ù„Ù \".wasm\" Ø§Ù„Ù…Ø·Ù„ÙˆØ¨.\n    Ù…Ù† Ø§Ù„Ù…Ø­ØªÙ…Ù„ Ø£Ù† ØªÙ… Ø­Ø¸Ø± Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ù†Ø§Ù„ Ø¨ÙˆØ§Ø³Ø·Ø© Ø³ÙŠØ§Ø³Ø© CORS.\n    Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ ÙŠØ±Ø¬Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø±ÙÙ„ ÙˆÙŠÙƒÙŠ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©.\nerror-wasm-invalid =\n    ÙˆØ§Ø¬Ù‡Øª Ø±ÙÙ„ Ù…Ø´ÙƒÙ„Ø© Ø±Ø¦ÙŠØ³ÙŠØ© Ø£Ø«Ù†Ø§Ø¡ Ù…Ø­Ø§ÙˆÙ„Ø© Ø§Ù„ØªÙ‡ÙŠØ¦Ø©.\n    Ø®Ø§Ø¯Ù… Ø§Ù„ÙˆÙŠØ¨ Ù‡Ø°Ø§ Ù„Ø§ ÙŠØ®Ø¯Ù… Ù…Ù„ÙØ§Øª \". wasm\" Ù…Ø¹ Ù†ÙˆØ¹ MIME Ø§Ù„ØµØ­ÙŠØ­.\n    Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ ÙŠØ±Ø¬Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø±ÙÙ„ ÙˆÙŠÙƒÙŠ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©.\nerror-wasm-download =\n    ÙˆØ§Ø¬Ù‡Øª Ø±ÙÙ„ Ù…Ø´ÙƒÙ„Ø© Ø±Ø¦ÙŠØ³ÙŠØ© Ø£Ø«Ù†Ø§Ø¡ Ù…Ø­Ø§ÙˆÙ„ØªÙ‡Ø§ Ø§Ù„ØªÙ‡ÙŠØ¦Ø©.\n    Ù‡Ø°Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ­Ù„ Ù†ÙØ³Ù‡ ÙÙŠ ÙƒØ«ÙŠØ± Ù…Ù† Ø§Ù„Ø£Ø­ÙŠØ§Ù†ØŒ Ù„Ø°Ù„Ùƒ ÙŠÙ…ÙƒÙ†Ùƒ Ù…Ø­Ø§ÙˆÙ„Ø© Ø¥Ø¹Ø§Ø¯Ø© ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©.\n    Ø®Ù„Ø§Ù Ø°Ù„ÙƒØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø§ØªØµØ§Ù„ Ø¨Ù…Ø¯ÙŠØ± Ø§Ù„Ù…ÙˆÙ‚Ø¹.\nerror-wasm-disabled-on-edge =\n    ÙØ´Ù„ Ø±ÙÙ„ ÙÙŠ ØªØ­Ù…ÙŠÙ„ Ù…ÙƒÙˆÙ† Ø§Ù„Ù…Ù„Ù \".wasm\" Ø§Ù„Ù…Ø·Ù„ÙˆØ¨.\n    Ù„Ø¥ØµÙ„Ø§Ø­ Ù‡Ø°Ù‡ Ø§Ù„Ù…Ø´ÙƒÙ„Ø©ØŒ Ø­Ø§ÙˆÙ„ ÙØªØ­ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù…ØªØµÙØ­ Ø§Ù„Ø®Ø§Øµ Ø¨ÙƒØŒ Ø§Ù†Ù‚Ø± ÙÙˆÙ‚ \"Ø§Ù„Ø®ØµÙˆØµÙŠØ©ØŒ Ø§Ù„Ø¨Ø­Ø«ØŒ Ø§Ù„Ø®Ø¯Ù…Ø§Øª\"ØŒ ÙˆØ§Ù„ØªÙ…Ø±ÙŠØ± Ù„Ø£Ø³ÙÙ„ØŒ ÙˆØ¥ÙŠÙ‚Ø§Ù \"ØªØ¹Ø²ÙŠØ² Ø£Ù…Ø§Ù†Ùƒ Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙŠØ¨\".\n    Ù‡Ø°Ø§ Ø³ÙŠØ³Ù…Ø­ Ù„Ù„Ù…ØªØµÙØ­ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ Ø¨ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ù„ÙØ§Øª \".wasm\" Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø©.\n    Ø¥Ø°Ø§ Ø§Ø³ØªÙ…Ø±Øª Ø§Ù„Ù…Ø´ÙƒÙ„Ø©ØŒ Ù‚Ø¯ ØªØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…ØªØµÙØ­ Ø£Ø®Ø±.\nerror-javascript-conflict =\n    ÙˆØ§Ø¬Ù‡Øª Ø±ÙÙ„ Ù…Ø´ÙƒÙ„Ø© Ø±Ø¦ÙŠØ³ÙŠØ© Ø£Ø«Ù†Ø§Ø¡ Ù…Ø­Ø§ÙˆÙ„Ø© Ø§Ù„ØªÙ‡ÙŠØ¦Ø©.\n    ÙŠØ¨Ø¯Ùˆ Ø£Ù† Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© ØªØ³ØªØ®Ø¯Ù… ÙƒÙˆØ¯ Ø¬Ø§ÙØ§ Ø³ÙƒØ±ÙŠØ¨Øª Ø§Ù„Ø°ÙŠ ÙŠØªØ¹Ø§Ø±Ø¶ Ù…Ø¹ Ø±ÙÙ„.\n    Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ ÙØ¥Ù†Ù†Ø§ Ù†Ø¯Ø¹ÙˆÙƒ Ø¥Ù„Ù‰ Ù…Ø­Ø§ÙˆÙ„Ø© ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ù„Ù Ø¹Ù„Ù‰ ØµÙØ­Ø© ÙØ§Ø±ØºØ©.\nerror-javascript-conflict-outdated = ÙŠÙ…ÙƒÙ†Ùƒ Ø£ÙŠØ¶Ù‹Ø§ Ù…Ø­Ø§ÙˆÙ„Ø© ØªØ­Ù…ÙŠÙ„ Ù†Ø³Ø®Ø© Ø£Ø­Ø¯Ø« Ù…Ù† Ø±ÙÙ„ Ø§Ù„ØªÙŠ Ù‚Ø¯ ØªØ­Ù„ Ø§Ù„Ù…Ø´ÙƒÙ„Ø© (Ø§Ù„Ù†Ø³Ø®Ø© Ø§Ù„Ø­Ø§Ù„ÙŠØ© Ù‚Ø¯ÙŠÙ…Ø©: { $buildDate }).\nerror-csp-conflict =\n    ÙˆØ§Ø¬Ù‡Øª Ø±ÙÙ„ Ù…Ø´ÙƒÙ„Ø© Ø±Ø¦ÙŠØ³ÙŠØ© Ø£Ø«Ù†Ø§Ø¡ Ù…Ø­Ø§ÙˆÙ„Ø© Ø§Ù„ØªÙ‡ÙŠØ¦Ø©.\n    Ù„Ø§ ØªØ³Ù…Ø­ Ø³ÙŠØ§Ø³Ø© Ø£Ù…Ø§Ù† Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù„Ø®Ø§Ø¯Ù… Ø§Ù„ÙˆÙŠØ¨ Ù‡Ø°Ø§ Ø¨ØªØ´ØºÙŠÙ„ Ù…ÙƒÙˆÙ† \".wasm\" Ø§Ù„Ù…Ø·Ù„ÙˆØ¨.\n    Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„Ø±Ø¬ÙˆØ¹ Ø¥Ù„Ù‰ Ø±ÙÙ„ ÙˆÙŠÙƒÙŠ Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©.\nerror-unknown =\n    ÙˆØ§Ø¬Ù‡Øª Ø±ÙˆÙ„ Ù…Ø´ÙƒÙ„Ø© Ø±Ø¦ÙŠØ³ÙŠØ© Ø£Ø«Ù†Ø§Ø¡ Ù…Ø­Ø§ÙˆÙ„Ø© Ø¹Ø±Ø¶ Ù…Ø­ØªÙˆÙ‰ Ø§Ù„ÙÙ„Ø§Ø´ Ù‡Ø°Ø§.\n    { $outdated ->\n        [true] Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„Ø®Ø§Ø¯Ù…ØŒ Ø§Ù„Ø±Ø¬Ø§Ø¡ Ù…Ø­Ø§ÙˆÙ„Ø© ØªØ­Ù…ÙŠÙ„ Ø¥ØµØ¯Ø§Ø± Ø£Ø­Ø¯Ø« Ù…Ù† Ø±ÙÙ„ (Ø§Ù„Ù†Ø³Ø®Ø© Ø§Ù„Ø­Ø§Ù„ÙŠØ© Ù‚Ø¯ÙŠÙ…Ø©: { $buildDate }).\n       *[false] Ù„ÙŠØ³ Ù…Ù† Ø§Ù„Ù…ÙØªØ±Ø¶ Ø£Ù† ÙŠØ­Ø¯Ø« Ù‡Ø°Ø§ØŒ Ù„Ø°Ù„Ùƒ Ù†Ø­Ù† Ù†Ù‚Ø¯Ø± Ø­Ù‚Ù‹Ø§ Ø¥Ø°Ø§ Ù‚Ù…Øª Ø¨Ø§Ù„ØªØ¨Ù„ÙŠØº Ø¹Ù† Ø§Ù„Ø®Ø·Ø£!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Ù‡Ù„ Ø£Ù†Øª Ù…ØªØ£ÙƒØ¯ Ø£Ù†Ùƒ ØªØ±ÙŠØ¯ Ø­Ø°Ù Ù…Ù„Ù Ø­ÙØ¸ Ø§Ù„Ù„Ø¹Ø¨Ø© Ù‡Ø°Ø§ØŸ\nsave-reload-prompt =\n    Ø§Ù„Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„ÙˆØ­ÙŠØ¯Ø© Ù„Ù€ { $action ->\n        [delete] Ø­Ø°Ù\n       *[replace] Ø§Ø³ØªØ¨Ø¯Ø§Ù„\n    } Ù‡Ø°Ø§ Ø§Ù„Ù…Ù„Ù Ø§Ù„Ø­ÙØ¸ Ø¯ÙˆÙ† ØªØ¶Ø§Ø±Ø¨ Ù…Ø­ØªÙ…Ù„ Ù‡ÙŠ Ø¥Ø¹Ø§Ø¯Ø© ØªØ­Ù…ÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…Ø­ØªÙˆÙ‰. Ù‡Ù„ ØªØ±ØºØ¨ ÙÙŠ Ø§Ù„Ù…ØªØ§Ø¨Ø¹Ø© Ø¹Ù„Ù‰ Ø£ÙŠ Ø­Ø§Ù„ØŸ\nsave-download = ØªØ­Ù…ÙŠÙ„\nsave-replace = Ø§Ø³ØªØ¨Ø¯Ø§Ù„\nsave-delete = Ø­Ø°Ù\nsave-backup-all = ØªØ­Ù…ÙŠÙ„ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ù„ÙØ§Øª Ø§Ù„Ù…Ø­ÙÙˆØ¸Ø©\n",
    "volume-controls.ftl": "volume-controls = Ø§Ù„ØªØ­ÙƒÙ… Ø¨Ø§Ù„ØµÙˆØª\nvolume-controls-mute = ÙƒØªÙ…\nvolume-controls-volume = Ù…Ø³ØªÙˆÙ‰ Ø§Ù„ØµÙˆØª\n"
  },
  "ca-ES": {
    "context_menu.ftl": "context-menu-download-swf = Baixa el fitxer .swf\ncontext-menu-copy-debug-info = Copia la informaciÃ³ de depuraciÃ³\ncontext-menu-open-save-manager = Obre el gestor d'emmagatzematge\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Quant a l'extensiÃ³ de Ruffle ({ $version })\n       *[other] Quant a Ruffle ({ $version })\n    }\ncontext-menu-hide = Amaga aquest menÃº\ncontext-menu-exit-fullscreen = Surt de la pantalla completa\ncontext-menu-enter-fullscreen = Pantalla completa\ncontext-menu-volume-controls = Controls de volum\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta pÃ gina.\n    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.\npanic-title = Alguna cosa ha fallat :(\nmore-info = MÃ©s informaciÃ³\nrun-anyway = Reprodueix igualment\ncontinue = Continua\nreport-bug = Informa d'un error\nupdate-ruffle = Actualitza Ruffle\nruffle-demo = DemostraciÃ³ web\nruffle-desktop = AplicaciÃ³ d'escriptori\nruffle-wiki = Obre la wiki de Ruffle\nenable-hardware-acceleration = Sembla que l'acceleraciÃ³ per maquinari no estÃ  activada. Tot i que Ruffle podria funcionar, Ã©s probable que ho faci molt lentament. Pots trobar informaciÃ³ sobre com activar l'acceleraciÃ³ per maquinari al segÃ¼ent enllaÃ§.\nview-error-details = Mostra detalls de l'error\nopen-in-new-tab = Obre en una pestanya nova\nclick-to-unmute = Feu clic per activar el so\nerror-file-protocol =\n    Sembla que esteu executant Ruffle al protocol \"file:\".\n    AixÃ² no funcionarÃ  perquÃ¨ els navegadors bloquegen moltes caracterÃ­stiques per raons de seguretat. En comptes d'aixÃ², us suggerim que configureu un servidor local o bÃ© utilitzeu la demostraciÃ³ web o l'aplicaciÃ³ d'escriptori.\nerror-javascript-config =\n    Ruffle ha topat amb un problema greu a causa d'una configuraciÃ³ JavaScript errÃ²nia.\n    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el parÃ metre culpable.\n    TambÃ© podeu consultar la wiki del Ruffle per obtenir ajuda.\nerror-wasm-not-found =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.\n    Si el problema continua, Ã©s possible que hÃ giu d'utilitzar el parÃ¡metre \"publicPath\": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-wasm-mime-type =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Aquest servidor no estÃ  servint els fitxers \".wasm\" amb el tipus MIME adequat.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-swf-fetch =\n    Ruffle no ha pogut carregar el fitxer SWF Flash.\n    La raÃ³ mÃ©s probable Ã©s que el fitxer ja no existeixi, aixÃ­ que no hi ha res que el Ruffle pugui carregar.\n    Proveu de contactar a l'administrador del lloc per obtenir ajuda.\nerror-swf-cors =\n    Ruffle no ha pogut carregar el fitxer SWF Flash.\n    Ã‰s probable que l'accÃ©s a la cÃ rrega hagi estat denegat per una polÃ­tica CORS.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.\nerror-wasm-cors =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    Ã‰s probable que l'accÃ©s a la cÃ rrega hagi estat denegat per una polÃ­tica CORS.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.\nerror-wasm-invalid =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Sembla que a aquest lloc li manquen fitxers o aquests no sÃ³n vÃ lids per a l'execuciÃ³ de Ruffle.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-wasm-download =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    AixÃ² sovint aixÃ² pot resoldre's sol, aixÃ­ que podeu provar de recarregar la pÃ gina.\n    En cas contrari, us preguem que contacteu l'administrador del lloc.\nerror-wasm-disabled-on-edge =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    Per a arreglar-ho, proveu d'obrir els parÃ metres del navegador, feu clic sobre \"Privadesa, cerca i serveis\", i desactiveu \"PrevenciÃ³ de seguiment\".\n    AixÃ² permetrÃ  que el vostre navegador carregui els fitxers \".wasm\" necessaris.\n    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.\nerror-javascript-conflict =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-javascript-conflict-outdated = TambÃ© podeu provar de carregar una versiÃ³ mÃ©s recent de Ruffle que podria resoldre el problema (la compilaciÃ³ actual estÃ  desactualitzada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    La polÃ­tica de seguretat del contingut (CSP) no permet l'execuciÃ³ del component \".wasm\" necessari.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-unknown =\n    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.\n    { $outdated ->\n        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versiÃ³ mÃ©s recent de Ruffle (la compilaciÃ³ actual estÃ  desactualitzada: { $buildDate }).\n       *[false] AixÃ² no hauria d'haver passat, aixÃ­ que us agrairÃ­em molt que n'informÃ©ssiu l'error!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Segur que vols esborrar aquest fitxer desat?\nsave-reload-prompt =\n    L'Ãºnica forma d{ $action ->\n        [delete] 'eliminar\n       *[replace] e substituir\n    } aquest fitxer desat sense crear un potencial conflicte Ã©s recarregant el contingut. Voleu continuar igualment?\nsave-download = Baixa\nsave-replace = Substitueix\nsave-delete = Elimina\nsave-backup-all = Baixa tots els fitxers desats\n",
    "volume-controls.ftl": "volume-controls = Controls de volum\nvolume-controls-mute = Silenci\nvolume-controls-volume = Volum\n"
  },
  "cs-CZ": {
    "context_menu.ftl": "context-menu-download-swf = StÃ¡hnout .swf\ncontext-menu-copy-debug-info = ZkopÃ­rovat debug info\ncontext-menu-open-save-manager = OtevÅ™Ã­t sprÃ¡vce uloÅ¾enÃ­\ncontext-menu-about-ruffle =\n    { $flavor ->\n         [extension] O Ruffle rozÅ¡Ã­Å™enÃ­ ({ $version })\n        *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = SkrÃ½t menu\ncontext-menu-exit-fullscreen = UkonÄit reÅ¾im celÃ© obrazovky\ncontext-menu-enter-fullscreen = PÅ™ejÃ­t do reÅ¾imu celÃ© obrazovky\ncontext-menu-volume-controls = OvlÃ¡dÃ¡nÃ­ hlasitosti\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nemohl spustit Flash vloÅ¾enÃ½ na tÃ©to strÃ¡nce.\n    MÅ¯Å¾ete se pokusit otevÅ™Ã­t soubor na samostatnÃ© kartÄ›, abyste se vyhnuli tomuto problÃ©mu.\npanic-title = NÄ›co se pokazilo :(\nmore-info = DalÅ¡Ã­ informace\nrun-anyway = PÅ™esto spustit\ncontinue = PokraÄovat\nreport-bug = NahlÃ¡sit chybu\nupdate-ruffle = Aktualizovat Ruffle\nruffle-demo = Web Demo\nruffle-desktop = DesktopovÃ¡ aplikace\nruffle-wiki = Zobrazit Ruffle Wiki\nenable-hardware-acceleration = ZdÃ¡ se, Å¾e hardwarovÃ¡ akcelerace nenÃ­ povolena. I kdyÅ¾ Ruffle funguje sprÃ¡vnÄ›, mÅ¯Å¾e bÃ½t nepÅ™imÄ›Å™enÄ› pomalÃ½. Jak povolit hardwarovou akceleraci zjistÃ­te na tomto odkazu.\nview-error-details = Zobrazit podrobnosti o chybÄ›\nopen-in-new-tab = OtevÅ™Ã­t na novÃ© kartÄ›\nclick-to-unmute = KliknutÃ­m zruÅ¡Ã­te ztlumenÃ­\nerror-file-protocol =\n    ZdÃ¡ se, Å¾e pouÅ¾Ã­vÃ¡te Ruffle na protokolu \"file:\".\n    To nenÃ­ moÅ¾nÃ©, protoÅ¾e prohlÃ­Å¾eÄe blokujÃ­ fungovÃ¡nÃ­ mnoha funkcÃ­ z bezpeÄnostnÃ­ch dÅ¯vodÅ¯.\n    NamÃ­sto toho vÃ¡m doporuÄujeme nastavit lokÃ¡lnÃ­ server nebo pouÅ¾Ã­t web demo Äi desktopovou aplikaci.\nerror-javascript-config =\n    Ruffle narazil na problÃ©m v dÅ¯sledku nesprÃ¡vnÃ© konfigurace JavaScriptu.\n    Pokud jste sprÃ¡vcem serveru, doporuÄujeme vÃ¡m zkontrolovat podrobnosti o chybÄ›, abyste zjistili, kterÃ½ parametr je vadnÃ½.\n    Pomoc mÅ¯Å¾ete zÃ­skat takÃ© na wiki Ruffle.\nerror-wasm-not-found =\n    Ruffle se nepodaÅ™ilo naÄÃ­st poÅ¾adovanou komponentu souboru â€ž.wasmâ€œ.\n    Pokud jste sprÃ¡vcem serveru, zkontrolujte, zda byl soubor sprÃ¡vnÄ› nahrÃ¡n.\n    Pokud problÃ©m pÅ™etrvÃ¡vÃ¡, moÅ¾nÃ¡ budete muset pouÅ¾Ã­t nastavenÃ­ â€žpublicPathâ€œ: pomoc naleznete na wiki Ruffle.\nerror-wasm-mime-type =\n    Ruffle narazil na problÃ©m pÅ™i pokusu o inicializaci.\n    Tento webovÃ½ server neposkytuje soubory â€ž.wasmâ€œ se sprÃ¡vnÃ½m typem MIME.\n    Pokud jste sprÃ¡vcem serveru, nÃ¡povÄ›du najdete na Ruffle wiki.\nerror-swf-fetch =\n    Ruffle se nepodaÅ™ilo naÄÃ­st SWF soubor Flash.\n    NejpravdÄ›podobnÄ›jÅ¡Ã­m dÅ¯vodem je, Å¾e soubor jiÅ¾ neexistuje, takÅ¾e Ruffle nemÃ¡ co naÄÃ­st.\n    Zkuste poÅ¾Ã¡dat o pomoc sprÃ¡vce webu.\nerror-swf-cors =\n    Ruffle se nepodaÅ™ilo naÄÃ­st SWF soubor Flash.\n    PÅ™Ã­stup k naÄÃ­tÃ¡nÃ­ byl pravdÄ›podobnÄ› zablokovÃ¡n politikou CORS.\n    Pokud jste sprÃ¡vcem serveru, nÃ¡povÄ›du najdete na Ruffle wiki.\nerror-wasm-cors =\n    Ruffle se nepodaÅ™ilo naÄÃ­st poÅ¾adovanou komponentu souboru â€ž.wasmâ€œ.\n    PÅ™Ã­stup k naÄÃ­tÃ¡nÃ­ byl pravdÄ›podobnÄ› zablokovÃ¡n politikou CORS.\n    Pokud jste sprÃ¡vcem serveru, nÃ¡povÄ›du najdete na Ruffle wiki.\nerror-wasm-invalid =\n    Ruffle narazil na problÃ©m pÅ™i pokusu o inicializaci.\n    ZdÃ¡ se, Å¾e na tÃ©to strÃ¡nce chybÃ­ nebo jsou neplatnÃ© soubory ke spuÅ¡tÄ›nÃ­ Ruffle.\n    Pokud jste sprÃ¡vcem serveru, nÃ¡povÄ›du najdete na Ruffle wiki.\nerror-wasm-download =\n    Ruffle narazil na problÃ©m pÅ™i pokusu o inicializaci.\n    ProblÃ©m se mÅ¯Å¾e vyÅ™eÅ¡it i sÃ¡m, takÅ¾e mÅ¯Å¾ete zkusit strÃ¡nku naÄÃ­st znovu.\n    V opaÄnÃ©m pÅ™Ã­padÄ› kontaktujte administrÃ¡tora strÃ¡nky.\nerror-wasm-disabled-on-edge =\n    Ruffle se nepodaÅ™ilo naÄÃ­st poÅ¾adovanou komponentu souboru â€ž.wasmâ€œ.\n    Chcete-li tento problÃ©m vyÅ™eÅ¡it, zkuste otevÅ™Ã­t nastavenÃ­ prohlÃ­Å¾eÄe, kliknÄ›te na poloÅ¾ku â€žOchrana osobnÃ­ch ÃºdajÅ¯, vyhledÃ¡vÃ¡nÃ­ a sluÅ¾byâ€œ, pÅ™ejdÄ›te dolÅ¯ a vypnÄ›te moÅ¾nost â€žZvyÅ¡te svou bezpeÄnost na webuâ€œ.\n    VaÅ¡emu prohlÃ­Å¾eÄi to umoÅ¾nÃ­ naÄÃ­st poÅ¾adovanÃ© soubory â€ž.wasmâ€œ.\n    Pokud problÃ©m pÅ™etrvÃ¡vÃ¡, budete moÅ¾nÃ¡ muset pouÅ¾Ã­t jinÃ½ prohlÃ­Å¾eÄ.\nerror-javascript-conflict =\n    Ruffle narazil na problÃ©m pÅ™i pokusu o inicializaci.\n    ZdÃ¡ se, Å¾e tato strÃ¡nka pouÅ¾Ã­vÃ¡ kÃ³d JavaScript, kterÃ½ je v konfliktu s Ruffle.\n    Pokud jste sprÃ¡vcem serveru, doporuÄujeme vÃ¡m zkusit naÄÃ­st soubor na prÃ¡zdnou strÃ¡nku.\nerror-javascript-conflict-outdated = MÅ¯Å¾ete se takÃ© pokusit nahrÃ¡t novÄ›jÅ¡Ã­ verzi Ruffle, kterÃ¡ mÅ¯Å¾e danÃ½ problÃ©m vyÅ™eÅ¡it (aktuÃ¡lnÃ­ build je zastaralÃ½: { $buildDate }).\nerror-csp-conflict =\n    Ruffle narazil na problÃ©m pÅ™i pokusu o inicializaci.\n    ZÃ¡sady zabezpeÄenÃ­ obsahu tohoto webovÃ©ho serveru nepovolujÃ­ spuÅ¡tÄ›nÃ­ poÅ¾adovanÃ© komponenty â€ž.wasmâ€œ.\n    Pokud jste sprÃ¡vcem serveru, nÃ¡povÄ›du najdete na Ruffle wiki.\nerror-unknown =\n    Ruffle narazil na problÃ©m pÅ™i pokusu zobrazit tento Flash obsah.\n    { $outdated ->\n          [true] Pokud jste sprÃ¡vcem serveru, zkuste nahrÃ¡t novÄ›jÅ¡Ã­ verzi Ruffle (aktuÃ¡lnÃ­ build je zastaralÃ½: { $buildDate }).\n         *[false] Toto by se nemÄ›lo stÃ¡t, takÅ¾e bychom opravdu ocenili, kdybyste mohli nahlÃ¡sit chybu!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Opravdu chcete odstranit tento soubor s uloÅ¾enÃ½mi pozicemi?\nsave-reload-prompt =\n    JedinÃ½ zpÅ¯sob, jak { $action ->\n          [delete] vymazat\n         *[replace] nahradit\n    } tento soubor s uloÅ¾enÃ½mi pozicemi bez potenciÃ¡lnÃ­ho konfliktu je opÄ›tovnÃ© naÄtenÃ­ tohoto obsahu. Chcete pÅ™esto pokraÄovat?\nsave-download = StÃ¡hnout\nsave-replace = Nahradit\nsave-delete = Vymazat\nsave-backup-all = StÃ¡hnout vÅ¡echny soubory s uloÅ¾enÃ½mi pozicemi\n",
    "volume-controls.ftl": "volume-controls = OvlÃ¡dÃ¡nÃ­ hlasitosti\nvolume-controls-mute = Ztlumit\nvolume-controls-volume = Hlasitost\n"
  },
  "de-DE": {
    "context_menu.ftl": "context-menu-download-swf = .swf herunterladen\ncontext-menu-copy-debug-info = Debug-Info kopieren\ncontext-menu-open-save-manager = Dateimanager Ã¶ffnen\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ãœber Ruffle Erweiterung ({ $version })\n       *[other] Ãœber Ruffle ({ $version })\n    }\ncontext-menu-hide = MenÃ¼ ausblenden\ncontext-menu-exit-fullscreen = Vollbild verlassen\ncontext-menu-enter-fullscreen = Vollbildmodus aktivieren\ncontext-menu-volume-controls = LautstÃ¤rke einstellen\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle konnte den Flash in dieser Seite nicht ausfÃ¼hren.\n    Du kannst versuchen, die Datei in einem separaten Tab zu Ã¶ffnen, um dieses Problem zu umgehen.\npanic-title = Etwas ist schief gelaufen\nmore-info = Weitere Informationen\nrun-anyway = Trotzdem ausfÃ¼hren\ncontinue = Fortfahren\nreport-bug = Fehler melden\nupdate-ruffle = Ruffle aktuallisieren\nruffle-demo = Web-Demo\nruffle-desktop = Desktop-Anwendung\nruffle-wiki = Ruffle-Wiki anzeigen\nview-error-details = Fehlerdetails anzeigen\nopen-in-new-tab = In einem neuen Tab Ã¶ffnen\nclick-to-unmute = Klicke zum Entmuten\nerror-file-protocol =\n    Es scheint, dass Sie Ruffle auf dem \"file:\"-Protokoll ausfÃ¼hren.\n    Dies funktioniert nicht so, als Browser viele Funktionen aus SicherheitsgrÃ¼nden blockieren.\n    Stattdessen laden wir Sie ein, einen lokalen Server einzurichten oder entweder die Webdemo oder die Desktop-Anwendung zu verwenden.\nerror-javascript-config =\n    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein groÃŸes Problem gestoÃŸen.\n    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu Ã¼berprÃ¼fen, um herauszufinden, welcher Parameter fehlerhaft ist.\n    Sie kÃ¶nnen auch das Ruffle-Wiki fÃ¼r Hilfe konsultieren.\nerror-wasm-not-found =\n    Ruffle konnte die erforderliche \".wasm\"-Datei-Komponente nicht laden.\n    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.\n    Wenn das Problem weiterhin besteht, mÃ¼ssen Sie unter UmstÃ¤nden die \"publicPath\"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki fÃ¼r Hilfe.\nerror-wasm-mime-type =\n    Ruffle ist auf ein groÃŸes Problem beim Initialisieren gestoÃŸen.\n    Dieser Webserver dient nicht \". asm\"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki fÃ¼r Hilfe.\nerror-swf-fetch =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.\n    Kontaktieren Sie den Website-Administrator fÃ¼r Hilfe.\nerror-swf-cors =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki fÃ¼r Hilfe.\nerror-wasm-cors =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki fÃ¼r Hilfe.\nerror-wasm-invalid =\n    Ruffle ist auf ein groÃŸes Problem beim Initialisieren gestoÃŸen.\n    Dieser Webserver dient nicht \". asm\"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki fÃ¼r Hilfe.\nerror-wasm-download =\n    Ruffle ist auf ein groÃŸes Problem gestoÃŸen, wÃ¤hrend er versucht hat zu initialisieren.\n    Dies kann sich oft selbst beheben, so dass Sie versuchen kÃ¶nnen, die Seite neu zu laden.\n    Andernfalls kontaktieren Sie bitte den Website-Administrator.\nerror-wasm-disabled-on-edge =\n    Ruffle konnte die erforderliche \".wasm\"-Datei-Komponente nicht laden.\n    Um dies zu beheben, versuche die Einstellungen deines Browsers zu Ã¶ffnen, klicke auf \"PrivatsphÃ¤re, Suche und Dienste\", scrollen nach unten und schalte \"Verbessere deine Sicherheit im Web\" aus.\n    Dies erlaubt Ihrem Browser die erforderlichen \".wasm\"-Dateien zu laden.\n    Wenn das Problem weiterhin besteht, mÃ¼ssen Sie mÃ¶glicherweise einen anderen Browser verwenden.\nerror-javascript-conflict =\n    Ruffle ist auf ein groÃŸes Problem beim Initialisieren gestoÃŸen.\n    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.\n    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.\nerror-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen kÃ¶nnte (aktuelle Version ist veraltet: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ist auf ein groÃŸes Problem beim Initialisieren gestoÃŸen.\n    Dieser Webserver dient nicht \". asm\"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki fÃ¼r Hilfe.\nerror-unknown =\n    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein groÃŸes Problem gestoÃŸen.\n    { $outdated ->\n        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).\n       *[false] Dies soll nicht passieren, deshalb wÃ¼rden wir uns sehr darÃ¼ber freuen, wenn Sie einen Fehler melden kÃ¶nnten!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei lÃ¶schen mÃ¶chten?\nsave-reload-prompt =\n    Der einzige Weg zu { $action ->\n        [delete] lÃ¶schen\n       *[replace] ersetzen\n    } diese Speicherdatei ohne mÃ¶glichen Konflikt ist das erneute Laden dieses Inhalts. MÃ¶chten Sie trotzdem fortfahren?\nsave-download = Herunterladen\nsave-replace = Ersetzen\nsave-delete = LÃ¶schen\nsave-backup-all = Alle gespeicherten Dateien herunterladen\n",
    "volume-controls.ftl": "volume-controls = LautstÃ¤rkeeinstellungen\nvolume-controls-mute = Stummschalten\nvolume-controls-volume = LautstÃ¤rke\n"
  },
  "en-US": {
    "context_menu.ftl": "context-menu-download-swf = Download .swf\ncontext-menu-copy-debug-info = Copy debug info\ncontext-menu-open-save-manager = Open Save Manager\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] About Ruffle Extension ({$version})\n        *[other] About Ruffle ({$version})\n    }\ncontext-menu-hide = Hide this menu\ncontext-menu-exit-fullscreen = Exit fullscreen\ncontext-menu-enter-fullscreen = Enter fullscreen\ncontext-menu-volume-controls = Volume controls\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle wasn't able to run the Flash embedded in this page.\n    You can try to open the file in a separate tab, to sidestep this issue.\npanic-title = Something went wrong :(\nmore-info = More info\nrun-anyway = Run anyway\ncontinue = Continue\nreport-bug = Report Bug\nupdate-ruffle = Update Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktop Application\nruffle-wiki = View Ruffle Wiki\nenable-hardware-acceleration = It looks like hardware acceleration is not enabled. While Ruffle may work, it could be unreasonably slow. You can find out how to enable hardware acceleration by following this link.\nview-error-details = View Error Details\nopen-in-new-tab = Open in a new tab\nclick-to-unmute = Click to unmute\nerror-file-protocol =\n    It appears you are running Ruffle on the \"file:\" protocol.\n    This doesn't work as browsers block many features from working for security reasons.\n    Instead, we invite you to setup a local server or either use the web demo or the desktop application.\nerror-javascript-config =\n    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.\n    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.\n    You can also consult the Ruffle wiki for help.\nerror-wasm-not-found =\n    Ruffle failed to load the required \".wasm\" file component.\n    If you are the server administrator, please ensure the file has correctly been uploaded.\n    If the issue persists, you may need to use the \"publicPath\" setting: please consult the Ruffle wiki for help.\nerror-wasm-mime-type =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This web server is not serving \".wasm\" files with the correct MIME type.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-swf-fetch =\n    Ruffle failed to load the Flash SWF file.\n    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.\n    Try contacting the website administrator for help.\nerror-swf-cors =\n    Ruffle failed to load the Flash SWF file.\n    Access to fetch has likely been blocked by CORS policy.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-cors =\n    Ruffle failed to load the required \".wasm\" file component.\n    Access to fetch has likely been blocked by CORS policy.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-invalid =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    It seems like this page has missing or invalid files for running Ruffle.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-download =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This can often resolve itself, so you can try reloading the page.\n    Otherwise, please contact the website administrator.\nerror-wasm-disabled-on-edge =\n    Ruffle failed to load the required \".wasm\" file component.\n    To fix this, try opening your browser's settings, clicking \"Privacy, search, and services\", scrolling down, and turning off \"Enhance your security on the web\".\n    This will allow your browser to load the required \".wasm\" files.\n    If the issue persists, you might have to use a different browser.\nerror-javascript-conflict =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    It seems like this page uses JavaScript code that conflicts with Ruffle.\n    If you are the server administrator, we invite you to try loading the file on a blank page.\nerror-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).\nerror-csp-conflict =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This web server's Content Security Policy does not allow the required \".wasm\" component to run.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-unknown =\n    Ruffle has encountered a major issue whilst trying to display this Flash content.\n    {$outdated ->\n        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).\n        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Are you sure you want to delete this save file?\nsave-reload-prompt =\n    The only way to {$action ->\n    [delete] delete\n    *[replace] replace\n    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?\nsave-download = Download\nsave-replace = Replace\nsave-delete = Delete\nsave-backup-all = Download all save files",
    "volume-controls.ftl": "volume-controls = Volume controls\nvolume-controls-mute = Mute\nvolume-controls-volume = Volume\n"
  },
  "es-ES": {
    "context_menu.ftl": "context-menu-download-swf = Descargar .swf\ncontext-menu-copy-debug-info = Copiar InformaciÃ³n de depuraciÃ³n\ncontext-menu-open-save-manager = Abrir gestor de guardado\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre la extensiÃ³n de Ruffle ({ $version })\n       *[other] Sobre Ruffle ({ $version })\n    }\ncontext-menu-hide = Ocultar este menÃº\ncontext-menu-exit-fullscreen = Salir de pantalla completa\ncontext-menu-enter-fullscreen = Entrar a pantalla completa\ncontext-menu-volume-controls = Controles de volumen\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle no pudo ejecutar el Flash incrustado en esta pÃ¡gina.\n    Puedes intentar abrir el archivo en una pestaÃ±a aparte, para evitar este problema.\npanic-title = Algo saliÃ³ mal :(\nmore-info = MÃ¡s info\nrun-anyway = Ejecutar de todos modos\ncontinue = Continuar\nreport-bug = Reportar un Error\nupdate-ruffle = Actualizar Ruffle\nruffle-demo = DemostraciÃ³n de web\nruffle-desktop = AplicaciÃ³n de Desktop\nruffle-wiki = Ver la pÃ¡gina wiki\nenable-hardware-acceleration = Al parecer, la aceleraciÃ³n de hardware no esta habilitada. Puede que Ruffle funcione, pero serÃ¡ extremadamente lento. Puedes averiguar como habilitar la aceleraciÃ³n de hardware al entrar al enlace.\nview-error-details = Ver los detalles del error\nopen-in-new-tab = Abrir en una pestaÃ±a nueva\nclick-to-unmute = Haz clic para dejar de silenciar\nerror-file-protocol =\n    Parece que estÃ¡ ejecutando Ruffle en el protocolo \"archivo:\".\n    Esto no funciona porque los navegadores bloquean que muchas caracterÃ­sticas funcionen por razones de seguridad.\n    En su lugar, le invitamos a configurar un servidor local o bien usar la demostraciÃ³n web o la aplicaciÃ³n de desktop.\nerror-javascript-config =\n    Ruffle ha encontrado un problema crÃ­tico debido a una configuraciÃ³n JavaScript incorrecta.\n    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar quÃ© parÃ¡metro estÃ¡ en falta.\n    TambiÃ©n puedes consultar la wiki de Ruffle para obtener ayuda.\nerror-wasm-not-found =\n    Ruffle no pudo cargar el componente de archivo \".wasm\" requerido.\n    Si usted es el administrador del servidor, asegÃºrese de que el archivo ha sido subido correctamente.\n    Si el problema persiste, puede que necesite usar la configuraciÃ³n \"publicPath\": por favor consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-mime-type =\n    Ruffle ha encontrado un problema crÃ­tico al intentar inicializar.\n    Este servidor web no estÃ¡ sirviendo archivos wasm\" con el tipo MIME correcto.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-swf-fetch =\n    Ruffle no pudo cargar el archivo Flash SWF.\n    La razÃ³n mÃ¡s probable es que el archivo ya no existe, asÃ­ que no hay nada para cargar Ruffle.\n    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.\nerror-swf-cors =\n    Ruffle no pudo cargar el archivo Flash SWF.\n    Es probable que el acceso a la bÃºsqueda haya sido bloqueado por la polÃ­tica CORS.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-cors =\n    Ruffle no pudo cargar el archivo \".wasm.\"\n    Es probable que el acceso a la bÃºsqueda o la llamada a la funciÃ³n fetch haya sido bloqueado por la polÃ­tica CORS.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-invalid =\n    Ruffle ha encontrado un problema crÃ­tico al intentar inicializar.\n    Este servidor web no estÃ¡ sirviendo archivos wasm\" con el tipo Mime correcto.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-download =\n    Ruffle ha encontrado un problema crÃ­tico mientras intentaba inicializarse.\n    Esto a menudo puede resolverse por sÃ­ mismo, asÃ­ que puede intentar recargar la pÃ¡gina.\n    De lo contrario, pÃ³ngase en contacto con el administrador del sitio web.\nerror-wasm-disabled-on-edge =\n    Ruffle no pudo cargar el componente de archivo \".wasm\" requerido.\n    Para solucionar esto, intenta abrir la configuraciÃ³n de tu navegador, haciendo clic en \"Privacidad, bÃºsqueda y servicios\", desplazÃ¡ndote y apagando \"Mejore su seguridad en la web\".\n    Esto permitirÃ¡ a su navegador cargar los archivos \".wasm\" necesarios.\n    Si el problema persiste, puede que tenga que utilizar un navegador diferente.\nerror-javascript-conflict =\n    Ruffle ha encontrado un problema crÃ­tico mientras intentaba inicializarse.\n    Parece que esta pÃ¡gina utiliza cÃ³digo JavaScript que entra en conflicto con Ruffle.\n    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una pÃ¡gina en blanco.\nerror-javascript-conflict-outdated = TambiÃ©n puedes intentar subir una versiÃ³n mÃ¡s reciente de Ruffle que puede eludir el problema (la versiÃ³n actual estÃ¡ desactualizada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle encontrÃ³ un problema al intentar inicializarse.\n    La PolÃ­tica de Seguridad de Contenido de este servidor web no permite el componente requerido \".wasm\". \n    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.\nerror-unknown =\n    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.\n    { $outdated ->\n        [true] Si usted es el administrador del servidor, intenta cargar una version mÃ¡s reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).\n       *[false] Esto no deberia suceder! apreciariamos que reportes el error!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Â¿EstÃ¡ seguro de querer eliminar este archivo de guardado?\nsave-reload-prompt =\n    La Ãºnica forma de { $action ->\n        [delete] eliminar\n       *[replace] sobreescribir\n    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. Â¿Desea continuar de todos modos?\nsave-download = Descargar\nsave-replace = Sobreescribir\nsave-delete = Borrar\nsave-backup-all = Borrar todos los archivos de guardado\n",
    "volume-controls.ftl": "volume-controls = Controles de volumen\nvolume-controls-mute = Silenciar\nvolume-controls-volume = Volumen\n"
  },
  "fr-FR": {
    "context_menu.ftl": "context-menu-download-swf = TÃ©lÃ©charger en tant que .swf\ncontext-menu-copy-debug-info = Copier les infos de dÃ©bogage\ncontext-menu-open-save-manager = Ouvrir le gestionnaire de stockage\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ã€ propos de l'Extension Ruffle ({ $version })\n       *[other] Ã€ propos de Ruffle ({ $version })\n    }\ncontext-menu-hide = Masquer ce menu\ncontext-menu-exit-fullscreen = Sortir du mode plein Ã©cran\ncontext-menu-enter-fullscreen = Afficher en plein Ã©cran\ncontext-menu-volume-controls = ContrÃ´les du volume\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle n'a pas Ã©tÃ© en mesure de lire le fichier Flash intÃ©grÃ© dans cette page.\n    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolÃ©, pour contourner le problÃ¨me.\npanic-title = Une erreur est survenue :(\nmore-info = Plus d'infos\nrun-anyway = ExÃ©cuter quand mÃªme\ncontinue = Continuer\nreport-bug = Signaler le bug\nupdate-ruffle = Mettre Ã  jour Ruffle\nruffle-demo = DÃ©mo en ligne\nruffle-desktop = Application de bureau\nruffle-wiki = Wiki de Ruffle\nenable-hardware-acceleration = Il semblerait que l'accÃ©lÃ©ration matÃ©rielle ne soit pas activÃ©e. Cela n'empÃªche gÃ©nÃ©ralement pas Ruffle de fonctionner, mais il peut Ãªtre beaucoup plus lent. Vous pouvez trouver comment activer l'accÃ©lÃ©ration matÃ©rielle en suivant ce lien.\nview-error-details = DÃ©tails de l'erreur\nopen-in-new-tab = Ouvrir dans un nouvel onglet\nclick-to-unmute = Cliquez pour activer le son\nerror-file-protocol =\n    Il semblerait que vous exÃ©cutiez Ruffle sur le protocole \"file:\".\n    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalitÃ©s pour des raisons de sÃ©curitÃ©.\n    Nous vous invitons soit Ã  configurer un serveur local, soit Ã  utiliser la dÃ©mo en ligne ou l'application de bureau.\nerror-javascript-config =\n    Ruffle a rencontrÃ© un problÃ¨me majeur en raison d'une configuration JavaScript incorrecte.\n    Si vous Ãªtes l'administrateur du serveur, nous vous invitons Ã  vÃ©rifier les dÃ©tails de l'erreur pour savoir quel est le paramÃ¨tre en cause.\n    Vous pouvez Ã©galement consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-not-found =\n    Ruffle n'a pas rÃ©ussi Ã  charger son fichier \".wasm\".\n    Si vous Ãªtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien Ã©tÃ© mis en ligne.\n    Si le problÃ¨me persiste, il vous faudra peut-Ãªtre utiliser le paramÃ¨tre \"publicPath\" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-mime-type =\n    Ruffle a rencontrÃ© un problÃ¨me majeur durant sa phase d'initialisation.\n    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers \".wasm\".\n    Si vous Ãªtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-swf-fetch =\n    Ruffle n'a pas rÃ©ussi Ã  charger le fichier Flash.\n    La raison la plus probable est que le fichier n'existe pas ou plus.\n    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.\nerror-swf-cors =\n    Ruffle n'a pas rÃ©ussi Ã  charger le fichier Flash.\n    La requÃªte a probablement Ã©tÃ© rejetÃ©e en raison de la configuration du CORS.\n    Si vous Ãªtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-cors =\n    Ruffle n'a pas rÃ©ussi Ã  charger son fichier \".wasm\".\n    La requÃªte a probablement Ã©tÃ© rejetÃ©e en raison de la configuration du CORS.\n    Si vous Ãªtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-invalid =\n    Ruffle a rencontrÃ© un problÃ¨me majeur durant sa phase d'initialisation.\n    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exÃ©cuter Ruffle.\n    Si vous Ãªtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-download =\n    Ruffle a rencontrÃ© un problÃ¨me majeur durant sa phase d'initialisation.\n    Le problÃ¨me dÃ©tectÃ© peut souvent se rÃ©soudre de lui-mÃªme, donc vous pouvez essayer de recharger la page.\n    Si le problÃ¨me persiste, veuillez prendre contact avec l'administrateur du site.\nerror-wasm-disabled-on-edge =\n    Ruffle n'a pas rÃ©ussi Ã  charger son fichier \".wasm\".\n    Pour rÃ©soudre ce problÃ¨me, essayez d'ouvrir les paramÃ¨tres de votre navigateur et de cliquer sur \"ConfidentialitÃ©, recherche et services\". Puis, vers le bas de la page, dÃ©sactivez l'option \"AmÃ©liorez votre sÃ©curitÃ© sur le web\".\n    Cela permettra Ã  votre navigateur de charger les fichiers \".wasm\".\n    Si le problÃ¨me persiste, vous devrez peut-Ãªtre utiliser un autre navigateur.\nerror-javascript-conflict =\n    Ruffle a rencontrÃ© un problÃ¨me majeur durant sa phase d'initialisation.\n    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.\n    Si vous Ãªtes l'administrateur du serveur, nous vous invitons Ã  essayer de charger le fichier dans une page vide.\nerror-javascript-conflict-outdated = Vous pouvez Ã©galement essayer de mettre en ligne une version plus rÃ©cente de Ruffle qui pourrait avoir corrigÃ© le problÃ¨me (la version que vous utilisez est obsolÃ¨te : { $buildDate }).\nerror-csp-conflict =\n    Ruffle a rencontrÃ© un problÃ¨me majeur durant sa phase d'initialisation.\n    La stratÃ©gie de sÃ©curitÃ© du contenu (CSP) de ce serveur web n'autorise pas l'exÃ©cution de fichiers \".wasm\".\n    Si vous Ãªtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-unknown =\n    Ruffle a rencontrÃ© un problÃ¨me majeur durant l'exÃ©cution de ce contenu Flash.\n    { $outdated ->\n        [true] Si vous Ãªtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus rÃ©cente de Ruffle (la version que vous utilisez est obsolÃ¨te : { $buildDate }).\n       *[false] Cela n'est pas censÃ© se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?\nsave-reload-prompt =\n    La seule faÃ§on de { $action ->\n        [delete] supprimer\n       *[replace] remplacer\n    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand mÃªme continuer ?\nsave-download = TÃ©lÃ©charger\nsave-replace = Remplacer\nsave-delete = Supprimer\nsave-backup-all = TÃ©lÃ©charger tous les fichiers de sauvegarde\n",
    "volume-controls.ftl": "volume-controls = ContrÃ´les du volume\nvolume-controls-mute = Muet\nvolume-controls-volume = Volume\n"
  },
  "he-IL": {
    "context_menu.ftl": "context-menu-download-swf = ×”×•×¨×“×ª ×§×•×‘×¥ ×”swf.\ncontext-menu-copy-debug-info = ×”×¢×ª×§×ª × ×ª×•× ×™ × ×™×¤×•×™ ×©×’×™××•×ª\ncontext-menu-open-save-manager = ×¤×ª×— ××ª ×ž× ×”×œ ×”×©×ž×™×¨×•×ª\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] ××•×“×•×ª ×”×ª×•×¡×£ Ruffle ({ $version })\n       *[other] ××•×“×•×ª Ruffle ({ $version })\n    }\ncontext-menu-hide = ×”×¡×ª×¨ ×ª×¤×¨×™×˜ ×–×”\ncontext-menu-exit-fullscreen = ×™×¦×™××” ×ž×ž×¡×š ×ž×œ×\ncontext-menu-enter-fullscreen = ×ž×¡×š ×ž×œ×\ncontext-menu-volume-controls = ×‘×§×¨×ª ×¢×•×¦×ž×ª ×§×•×œ\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle ×œ× ×”×¦×œ×™×— ×œ×”×¨×™×¥ ××ª ×ª×•×›×Ÿ ×”×¤×œ××© ×”×ž×•×˜×ž×¢ ×‘×“×£ ×–×”.\n    ××ª×” ×™×›×•×œ ×œ×¤×ª×•×— ××ª ×”×§×•×‘×¥ ×‘×œ×©×•× ×™×ª × ×¤×¨×“×ª, ×¢×œ ×ž× ×ª ×œ×¢×§×•×£ ×‘×¢×™×” ×–×•.\npanic-title = ×ž×©×”×• ×”×©×ª×‘×© :(\nmore-info = ×ž×™×“×¢ × ×•×¡×£\nrun-anyway = ×”×¤×¢×œ ×‘×›×œ ×–××ª\ncontinue = ×”×ž×©×š\nreport-bug = ×“×•×•×— ×¢×œ ×ª×§×œ×”\nupdate-ruffle = ×¢×“×›×Ÿ ××ª Ruffle\nruffle-demo = ×”×“×’×ž×”\nruffle-desktop = ××¤×œ×™×§×¦×™×™×ª ×©×•×œ×—×Ÿ ×¢×‘×•×“×”\nruffle-wiki = ×¨××” ××ª Ruffle wiki\nenable-hardware-acceleration = × ×¨××” ×©×”××¦×ª ×”×—×•×ž×¨×” ×©×œ×š ×œ× ×ž×•×¤×¢×œ×ª. ×‘×¢×•×“ ×©×¨××¤×œ ×¢×©×•×™ ×œ×¢×‘×•×“, ×”×•× ×™×›×•×œ ×œ×”×™×•×ª ××™×˜×™. ×ª×•×›×œ ×œ×¨××•×ª ×›×™×¦×“ ×œ×”×¤×¢×™×œ ×ª×›×•× ×” ×–×• ×‘×œ×—×™×¦×” ×¢×œ ×”×œ×™× ×§ ×”×–×”.\nview-error-details = ×¨××” ×¤×¨×˜×™ ×©×’×™××”\nopen-in-new-tab = ×¤×ª×— ×‘×›×¨×˜×™×¡×™×™×” ×—×“×©×”\nclick-to-unmute = ×œ×—×¥ ×¢×œ ×ž× ×ª ×œ×‘×˜×œ ×”×©×ª×§×”\nerror-file-protocol =\n    × ×“×ž×” ×©××ª×” ×ž×¨×™×¥ ××ª Ruffle ×ª×—×ª ×¤×¨×•×˜×•×§×•×œ \"file:\".\n    ×–×” ×œ× ×™×¢×‘×•×“ ×ž×›×™×•×•×Ÿ ×©×“×¤×“×¤× ×™× ×—×•×¡×ž×™× ××¤×©×¨×•×™×•×ª ×¨×‘×•×ª ×ž×œ×¢×‘×•×“ ×¢×§×‘ ×¡×™×‘×•×ª ××‘×˜×—×”.\n    ×‘×ž×§×•× ×–×”, ×× ×• ×ž×–×ž×™× ×™× ××•×ª×š ×œ××—×¡×Ÿ ××ª×¨ ×–×” ×ª×—×ª ×©×¨×ª ×ž×§×•×ž×™ ××• ×”×“×’×ž×” ×‘×¨×©×ª ××• ×“×¨×š ××¤×œ×™×§×¦×™×™×ª ×©×•×œ×—×Ÿ ×”×¢×‘×•×“×”.\nerror-javascript-config =\n    Ruffle × ×ª×§×œ ×‘×ª×§×œ×” ×—×ž×•×¨×” ×¢×§×‘ ×”×’×“×¨×ª JavaScript ×©×’×•×™×”.\n    ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× ×• ×ž×–×ž×™× ×™× ××•×ª×š ×œ×‘×“×•×§ ××ª ×¤×¨×˜×™ ×”×©×’×™××” ×¢×œ ×ž× ×ª ×œ×ž×¦×•× ××™×–×” ×¤×¨×ž×˜×¨ ×”×•× ×©×’×•×™.\n    ××ª×” ×™×›×•×œ ×œ×¢×™×™×Ÿ ×•×œ×”×•×¢×¥ ×‘wiki ×©×œ Ruffle ×¢×œ ×ž× ×ª ×œ×§×‘×œ ×¢×–×¨×”.\nerror-wasm-not-found =\n    Ruffle × ×›×©×œ ×œ×˜×¢×•×Ÿ ××ª ×§×•×‘×¥ ×”\"wasm.\" ×”×“×¨×•×©.\n    ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× × ×•×•×“× ×›×™ ×”×§×•×‘×¥ ×”×•×¢×œ×” ×›×©×•×¨×”.\n    ×× ×”×‘×¢×™×” ×ž×ž×©×™×›×”, ×™×™×ª×›×Ÿ ×•×ª×¦×˜×¨×š ×œ×”×©×ª×ž×© ×‘×”×’×“×¨×ª \"publicPath\": ×× × ×¢×™×™×Ÿ ×•×”×•×¢×¥ ×‘wiki ×©×œ Ruffle ×¢×œ ×ž× ×ª ×œ×§×‘×œ ×¢×–×¨×”.\nerror-wasm-mime-type =\n    Ruffle × ×ª×§×œ ×‘×‘×¢×™×” ×—×ž×•×¨×” ×ª×•×š ×›×“×™ × ×™×¡×™×•×Ÿ ×œ××ª×—×œ.\n    ×©×¨×ª×• ×©×œ ××ª×¨ ×–×” ×œ× ×ž×©×™×™×š ×§×‘×¦×™ \".wasm\" ×¢× ×¡×•×’ ×”MIME ×”× ×›×•×Ÿ.\n    ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× × ×¢×™×™×Ÿ ×•×”×•×¢×¥ ×‘wiki ×©×œ Ruffle ×¢×œ ×ž× ×ª ×œ×§×‘×œ ×¢×–×¨×”.\nerror-swf-fetch =\n    Ruffle × ×›×©×œ ×œ×˜×¢×•×Ÿ ××ª ×§×•×‘×¥ ×”×¤×œ××©/swf. .\n    ×–×” × ×•×‘×¢ ×›×›×œ ×”× ×¨××” ×ž×›×™×•×•×Ÿ ×•×”×§×•×‘×¥ ×œ× ×§×™×™× ×™×•×ª×¨, ××– ××™×Ÿ ×œRuffle ×ž×” ×œ×˜×¢×•×Ÿ.\n    × ×¡×” ×œ×™×¦×•×¨ ×§×©×¨ ×¢× ×ž× ×”×œ ×”××ª×¨ ×¢×œ ×ž× ×ª ×œ×§×‘×œ ×¢×–×¨×”.\nerror-swf-cors =\n    Ruffle × ×›×©×œ ×œ×˜×¢×•×Ÿ ××ª ×§×•×‘×¥ ×”×¤×œ××©/swf. .\n    ×’×™×©×” ×œfetch ×›×›×œ ×”× ×¨××” × ×—×¡×ž×” ×¢×œ ×™×“×™ ×ž×“×™× ×™×•×ª CORS.\n    ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× × ×¢×™×™×Ÿ ×•×”×•×¢×¥ ×‘wiki ×©×œ Ruffle ×¢×œ ×ž× ×ª ×œ×§×‘×œ ×¢×–×¨×”.\nerror-wasm-cors =\n    Ruffle × ×›×©×œ ×œ×˜×¢×•×Ÿ ××ª ×§×•×‘×¥ ×”\".wasm\" ×”×“×¨×•×©.\n    ×’×™×©×” ×œfetch ×›×›×œ ×”× ×¨××” × ×—×¡×ž×” ×¢×œ ×™×“×™ ×ž×“×™× ×™×•×ª CORS.\n    ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× × ×¢×™×™×Ÿ ×•×”×•×¢×¥ ×‘wiki ×©×œ Ruffle ×¢×œ ×ž× ×ª ×œ×§×‘×œ ×¢×–×¨×”.\nerror-wasm-invalid =\n    Ruffle × ×ª×§×œ ×‘×‘×¢×™×” ×—×ž×•×¨×” ×ª×•×š ×›×“×™ × ×™×¡×™×•×Ÿ ×œ××ª×—×œ.\n    × ×“×ž×” ×›×™ ×‘×“×£ ×–×” ×—×¡×¨×™× ××• ×œ× ×¢×•×‘×“×™× ×›×¨××•×™ ×§×‘×¦×™× ××©×¨ ×ž×©×ž×©×™× ××ª Ruffle ×›×“×™ ×œ×¤×¢×•×œ\n    ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× × ×¢×™×™×Ÿ ×•×”×•×¢×¥ ×‘wiki ×©×œ Ruffle ×¢×œ ×ž× ×ª ×œ×§×‘×œ ×¢×–×¨×”.\nerror-wasm-download =\n    Ruffle × ×ª×§×œ ×‘×‘×¢×™×” ×—×ž×•×¨×” ×ª×•×š ×›×“×™ × ×™×¡×™×•×Ÿ ×œ××ª×—×œ.\n    ×œ×¢×™×ª×™× ×‘×¢×™×” ×–×• ×™×›×•×œ×” ×œ×¤×ª×•×¨ ××ª ×¢×¦×ž×”, ××– ××ª×” ×™×›×•×œ ×œ× ×¡×•×ª ×œ×˜×¢×•×Ÿ ×ž×—×“×© ××ª ×”×“×£ ×–×”.\n    ×× ×œ×, ×× × ×¤× ×” ×œ×ž× ×”×œ ×”××ª×¨.\nerror-wasm-disabled-on-edge =\n    Ruffle × ×›×©×œ ×œ×˜×¢×•×Ÿ ××ª ×§×•×‘×¥ ×”\".wasm\" ×”×“×¨×•×©.\n    ×¢×œ ×ž× ×ª ×œ×ª×§×Ÿ ×‘×¢×™×” ×–×•, × ×¡×” ×œ×¤×ª×•×— ××ª ×”×’×“×¨×•×ª ×”×“×¤×“×¤×Ÿ ×©×œ×š, ×œ×—×¥ ×¢×œ \"××‘×˜×—×”, ×—×™×¤×•×© ×•×©×™×¨×•×ª\",\n    ×’×œ×•×œ ×ž×˜×”, ×•×›×‘×” ××ª \"×”×’×‘×¨ ××ª ×”××‘×˜×—×” ×©×œ×š ×‘×¨×©×ª\".\n    ×–×” ×™××¤×©×¨ ×œ×“×¤×“×¤×Ÿ ×©×œ×š ×œ×˜×¢×•×Ÿ ××ª ×§×•×‘×¥ ×”\".wasm\" ×”×“×¨×•×©.\n    ×× ×”×‘×¢×™×” ×ž×ž×©×™×›×”, ×™×™×ª×›×Ÿ ×•×¢×œ×™×š ×œ×”×©×ª×ž×© ×‘×“×¤×“×¤×Ÿ ××—×¨.\nerror-javascript-conflict =\n    Ruffle × ×ª×§×œ ×‘×‘×¢×™×” ×—×ž×•×¨×” ×ª×•×š ×›×“×™ × ×™×¡×™×•×Ÿ ×œ××ª×—×œ.\n    × ×“×ž×” ×›×™ ×“×£ ×–×” ×ž×©×ª×ž×© ×‘×§×•×“ JavaScript ××©×¨ ×ž×ª× ×’×© ×¢× Ruffle.\n    ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× ×• ×ž×–×ž×™× ×™× ××•×ª×š ×œ× ×¡×•×ª ×œ×˜×¢×•×Ÿ ××ª ×”×“×£ ×ª×—×ª ×¢×ž×•×“ ×¨×™×§.\nerror-javascript-conflict-outdated = ×‘× ×•×¡×£, ××ª×” ×™×›×•×œ ×œ× ×¡×•×ª ×•×œ×”×¢×œ×•×ª ×’×¨×¡××•×ª ×¢×“×›× ×™×•×ª ×©×œ Ruffle ××©×¨ ×¢×œ×•×œ×™× ×œ×¢×§×•×£ ×‘×¢×™×” ×–×• (×’×¨×¡×” ×–×• ×”×™× ×” ×ž×™×•×©× ×ª : { $buildDate }).\nerror-csp-conflict =\n    Ruffle × ×ª×§×œ ×‘×‘×¢×™×” ×—×ž×•×¨×” ×ª×•×š ×›×“×™ × ×™×¡×™×•×Ÿ ×œ××ª×—×œ.\n    ×ž×“×™× ×™×•×ª ××‘×˜×—×ª ×”×ª×•×›×Ÿ ×©×œ ×©×¨×ª×• ×©×œ ××ª×¨ ×–×” ××™× ×” ×ž××¤×©×¨×ª ×œ×§×•×‘×¥ ×”\"wasm.\" ×”×“×¨×•×© ×œ×¤×¢×•×œ.\n    ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× × ×¢×™×™×Ÿ ×•×”×•×¢×¥ ×‘wiki ×©×œ Ruffle ×¢×œ ×ž× ×ª ×œ×§×‘×œ ×¢×–×¨×”.\nerror-unknown =\n    Ruffle × ×ª×§×œ ×‘×‘×¢×™×” ×—×ž×•×¨×” ×‘× ×™×¡×™×•×Ÿ ×œ×”×¦×™×’ ××ª ×ª×•×›×Ÿ ×¤×œ××© ×–×”.\n    { $outdated ->\n        [true] ×× ××ª×” ×ž× ×”×œ ×”××ª×¨, ×× × × ×¡×” ×œ×”×¢×œ×•×ª ×’×¨×¡×” ×¢×“×›× ×™×ª ×™×•×ª×¨ ×©×œ Ruffle (×’×¨×¡×” ×–×• ×”×™× ×” ×ž×™×•×©× ×ª:  { $buildDate }).\n       *[false] ×–×” ×œ× ××ž×•×¨ ×œ×§×¨×•×ª, × ×©×ž×— ×× ×ª×•×›×œ ×œ×©×ª×£ ×ª×§×œ×” ×–×•!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = ×”×× ××ª×” ×‘×˜×•×— ×©×‘×¨×¦×•× ×š ×œ×ž×—×•×§ ××ª ×§×•×‘×¥ ×©×ž×™×¨×” ×–×”?\nsave-reload-prompt =\n    ×”×“×¨×š ×”×™×—×™×“×” { $action ->\n        [delete] ×œ×ž×—×•×§\n       *[replace] ×œ×”×—×œ×™×£\n    } ××ª ×§×•×‘×¥ ×”×©×ž×™×¨×” ×”×–×” ×ž×‘×œ×™ ×œ×’×¨×•× ×œ×• ×œ×”×ª× ×’×© ×”×™× ×œ×˜×¢×•×Ÿ ×ž×—×“×© ××ª ×ª×•×›×Ÿ ×–×”. ×”×× ××ª×” ×¨×•×¦×” ×œ×”×ž×©×™×š ×‘×›×œ ×–××ª?\nsave-download = ×”×•×¨×“×”\nsave-replace = ×”×—×œ×¤×”\nsave-delete = ×ž×—×™×§×”\nsave-backup-all = ×”×•×¨×“×ª ×›×œ ×§×‘×¦×™ ×”×©×ž×™×¨×”\n",
    "volume-controls.ftl": "volume-controls = ×‘×§×¨×ª ×¢×•×¦×ž×ª ×§×•×œ\nvolume-controls-mute = ×”×©×ª×§\nvolume-controls-volume = ×¢×•×¦×ž×ª ×§×•×œ\n"
  },
  "hu-HU": {
    "context_menu.ftl": "context-menu-download-swf = .swf fÃ¡jl letÃ¶ltÃ©se\ncontext-menu-copy-debug-info = HibakeresÃ©si informÃ¡ciÃ³k mÃ¡solÃ¡sa\ncontext-menu-open-save-manager = MentÃ©skezelÅ‘ megnyitÃ¡sa\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] A Ruffle kiegÃ©szÃ­tÅ‘ ({ $version }) nÃ©vjegye\n       *[other] A Ruffle ({ $version }) nÃ©vjegye\n    }\ncontext-menu-hide = Ezen menÃ¼ elrejtÃ©se\ncontext-menu-exit-fullscreen = KilÃ©pÃ©s a teljes kÃ©pernyÅ‘bÅ‘l\ncontext-menu-enter-fullscreen = VÃ¡ltÃ¡s teljes kÃ©pernyÅ‘re\ncontext-menu-volume-controls = HangerÅ‘szabÃ¡lyzÃ³\n",
    "messages.ftl": "message-cant-embed =\n    A Ruffle nem tudta futtatni az oldalba Ã¡gyazott Flash tartalmat.\n    A problÃ©ma kikerÃ¼lÃ©sÃ©hez megprÃ³bÃ¡lhatod megnyitni a fÃ¡jlt egy kÃ¼lÃ¶n lapon.\npanic-title = Valami baj tÃ¶rtÃ©nt :(\nmore-info = TovÃ¡bbi informÃ¡ciÃ³\nrun-anyway = FuttatÃ¡s mÃ©gis\ncontinue = FolytatÃ¡s\nreport-bug = Hiba jelentÃ©se\nupdate-ruffle = Ruffle frissÃ­tÃ©se\nruffle-demo = Webes demÃ³\nruffle-desktop = Asztali alkalmazÃ¡s\nruffle-wiki = Ruffle Wiki megnyitÃ¡sa\nenable-hardware-acceleration = Ãšgy tÅ±nik, a hardveres gyorsÃ­tÃ¡s nincs engedÃ©lyezve. BÃ¡r a Ruffle mÅ±kÃ¶dhet, nagyon lassÃº lehet. Ezt a hivatkozÃ¡st kÃ¶vetve megtudhatod, hogyan engedÃ©lyezd a hardveres gyorsÃ­tÃ¡st.\nview-error-details = Hiba rÃ©szletei\nopen-in-new-tab = MegnyitÃ¡s Ãºj lapon\nclick-to-unmute = Kattints a nÃ©mÃ­tÃ¡s feloldÃ¡sÃ¡hoz\nerror-file-protocol =\n    Ãšgy tÅ±nik, a Ruffle-t a \"file:\" protokollon futtatod.\n    Ez nem mÅ±kÃ¶dik, mivel Ã­gy a bÃ¶ngÃ©szÅ‘k biztonsÃ¡gi okokbÃ³l szÃ¡mos funkciÃ³ mÅ±kÃ¶dÃ©sÃ©t letiltjÃ¡k.\n    Ehelyett azt ajÃ¡nljuk hogy indÃ­ts egy helyi kiszolgÃ¡lÃ³t, vagy hasznÃ¡ld a webes demÃ³t vagy az asztali alkalmazÃ¡st.\nerror-javascript-config =\n    A Ruffle komoly problÃ©mÃ¡ba Ã¼tkÃ¶zÃ¶tt egy helytelen JavaScript-konfigurÃ¡ciÃ³ miatt.\n    Ha a szerver rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k, ellenÅ‘rizd a hiba rÃ©szleteit, hogy megtudd, melyik paramÃ©ter a hibÃ¡s.\n    A Ruffle wikiben is talÃ¡lhatsz ehhez segÃ­tsÃ©get.\nerror-wasm-not-found =\n    A Ruffle nem tudta betÃ¶lteni a szÃ¼ksÃ©ges \".wasm\" Ã¶sszetevÅ‘t.\n    Ha a szerver rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k ellenÅ‘rizd, hogy a fÃ¡jl megfelelÅ‘en lett-e feltÃ¶ltve.\n    Ha a problÃ©ma tovÃ¡bbra is fennÃ¡ll, elÅ‘fordulhat, hogy a \"publicPath\" beÃ¡llÃ­tÃ¡st kell hasznÃ¡lnod: segÃ­tsÃ©gÃ©rt keresd fel a Ruffle wikit.\nerror-wasm-mime-type =\n    A Ruffle komoly problÃ©mÃ¡ba Ã¼tkÃ¶zÃ¶tt az inicializÃ¡lÃ¡s sorÃ¡n.\n    Ez a webszerver a \".wasm\" fÃ¡jlokat nem a megfelelÅ‘ MIME-tÃ­pussal szolgÃ¡lja ki.\n    Ha a szerver rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k, keresd fel a Ruffle wikit segÃ­tsÃ©gÃ©rt.\nerror-swf-fetch =\n    A Ruffle nem tudta betÃ¶lteni a Flash SWF fÃ¡jlt.\n    A legvalÃ³szÃ­nÅ±bb ok az, hogy a fÃ¡jl mÃ¡r nem lÃ©tezik, Ã­gy a Ruffle szÃ¡mÃ¡ra nincs mit betÃ¶lteni.\n    PrÃ³bÃ¡ld meg felvenni a kapcsolatot a webhely rendszergazdÃ¡jÃ¡val segÃ­tsÃ©gÃ©rt.\nerror-swf-cors =\n    A Ruffle nem tudta betÃ¶lteni a Flash SWF fÃ¡jlt.\n    A lekÃ©rÃ©shez valÃ³ hozzÃ¡fÃ©rÃ©st valÃ³szÃ­nÅ±leg letiltotta a CORS-hÃ¡zirend.\n    Ha a szerver rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k, keresd fel a Ruffle wikit segÃ­tsÃ©gÃ©rt.\nerror-wasm-cors =\n    A Ruffle nem tudta betÃ¶lteni a szÃ¼ksÃ©ges \".wasm\" Ã¶sszetevÅ‘t.\n    A lekÃ©rÃ©shez valÃ³ hozzÃ¡fÃ©rÃ©st valÃ³szÃ­nÅ±leg letiltotta a CORS-hÃ¡zirend.\n    Ha a szerver rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k keresd fel a Ruffle wikit segÃ­tsÃ©gÃ©rt.\nerror-wasm-invalid =\n    A Ruffle komoly problÃ©mÃ¡ba Ã¼tkÃ¶zÃ¶tt az inicializÃ¡lÃ¡s sorÃ¡n.\n    Ãšgy tÅ±nik, hogy ezen az oldalon hiÃ¡nyoznak vagy hibÃ¡sak a Ruffle futtatÃ¡sÃ¡hoz szÃ¼ksÃ©ges fÃ¡jlok.\n    Ha a szerver rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k keresd fel a Ruffle wikit segÃ­tsÃ©gÃ©rt.\nerror-wasm-download =\n    A Ruffle komoly problÃ©mÃ¡ba Ã¼tkÃ¶zÃ¶tt az inicializÃ¡lÃ¡s sorÃ¡n.\n    Ez gyakran magÃ¡tÃ³l megoldÃ³dik, ezÃ©rt megprÃ³bÃ¡lhatod ÃºjratÃ¶lteni az oldalt.\n    EllenkezÅ‘ esetben fordulj a webhely rendszergazdÃ¡jÃ¡hoz.\nerror-wasm-disabled-on-edge =\n    A Ruffle nem tudta betÃ¶lteni a szÃ¼ksÃ©ges \".wasm\" Ã¶sszetevÅ‘t.\n    A problÃ©ma megoldÃ¡sÃ¡hoz nyisd meg a bÃ¶ngÃ©szÅ‘ beÃ¡llÃ­tÃ¡sait, kattints az â€žAdatvÃ©delem, keresÃ©s Ã©s szolgÃ¡ltatÃ¡sokâ€ elemre, gÃ¶rgess le, Ã©s kapcsold ki a â€žFokozott biztonsÃ¡g a webenâ€ opciÃ³t.\n    Ez lehetÅ‘vÃ© teszi a bÃ¶ngÃ©szÅ‘ szÃ¡mÃ¡ra, hogy betÃ¶ltse a szÃ¼ksÃ©ges \".wasm\" fÃ¡jlokat.\n    Ha a problÃ©ma tovÃ¡bbra is fennÃ¡ll, lehet, hogy mÃ¡sik bÃ¶ngÃ©szÅ‘t kell hasznÃ¡lnod.\nerror-javascript-conflict =\n    A Ruffle komoly problÃ©mÃ¡ba Ã¼tkÃ¶zÃ¶tt az inicializÃ¡lÃ¡s sorÃ¡n.\n    Ãšgy tÅ±nik, ez az oldal olyan JavaScript-kÃ³dot hasznÃ¡l, amely Ã¼tkÃ¶zik a Ruffle-lel.\n    Ha a kiszolgÃ¡lÃ³ rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k, prÃ³bÃ¡ld meg a fÃ¡jlt egy Ã¼res oldalon betÃ¶lteni.\nerror-javascript-conflict-outdated = MegprÃ³bÃ¡lhatod tovÃ¡bbÃ¡ feltÃ¶lteni a Ruffle egy Ãºjabb verziÃ³jÃ¡t is, amely megkerÃ¼lheti a problÃ©mÃ¡t (a jelenlegi elavult: { $buildDate }).\nerror-csp-conflict =\n    A Ruffle komoly problÃ©mÃ¡ba Ã¼tkÃ¶zÃ¶tt az inicializÃ¡lÃ¡s sorÃ¡n.\n    A kiszolgÃ¡lÃ³ tartalombiztonsÃ¡gi hÃ¡zirendje nem teszi lehetÅ‘vÃ© a szÃ¼ksÃ©ges â€ž.wasmâ€ Ã¶sszetevÅ‘k futtatÃ¡sÃ¡t.\n    Ha a szerver rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k, keresd fel a Ruffle wikit segÃ­tsÃ©gÃ©rt.\nerror-unknown =\n    A Ruffle komoly problÃ©mÃ¡ba Ã¼tkÃ¶zÃ¶tt, mikÃ¶zben megprÃ³bÃ¡lta megjelenÃ­teni ezt a Flash-tartalmat.\n    { $outdated ->\n        [true] Ha a szerver rendszergazdÃ¡ja vagy, kÃ©rjÃ¼k, prÃ³bÃ¡ld meg feltÃ¶lteni a Ruffle egy Ãºjabb verziÃ³jÃ¡t (a jelenlegi elavult: { $buildDate }).\n       *[false] Ennek nem lett volna szabad megtÃ¶rtÃ©nnie, ezÃ©rt nagyon hÃ¡lÃ¡sak lennÃ©nk, ha jeleznÃ©d a hibÃ¡t!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Biztosan tÃ¶rÃ¶lni akarod ezt a mentÃ©st?\nsave-reload-prompt =\n    Ennek a mentÃ©snek az esetleges konfliktus nÃ©lkÃ¼li { $action ->\n        [delete] tÃ¶rlÃ©sÃ©hez\n       *[replace] cserÃ©jÃ©hez\n    } Ãºjra kell tÃ¶lteni a tartalmat. MÃ©gis szeretnÃ©d folytatni?\nsave-download = LetÃ¶ltÃ©s\nsave-replace = Csere\nsave-delete = TÃ¶rlÃ©s\nsave-backup-all = Az Ã¶sszes fÃ¡jl letÃ¶ltÃ©se\n",
    "volume-controls.ftl": "volume-controls = HangerÅ‘szabÃ¡lyzÃ³\nvolume-controls-mute = NÃ©mÃ­tÃ¡s\nvolume-controls-volume = HangerÅ‘\n"
  },
  "id-ID": {
    "context_menu.ftl": "context-menu-download-swf = Unduh .swf\ncontext-menu-copy-debug-info = Salin info debug\ncontext-menu-open-save-manager = Buka Manager Save\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Tentang Ekstensi Ruffle ({ $version })\n       *[other] Tentang Ruffle ({ $version })\n    }\ncontext-menu-hide = Sembunyikan Menu ini\ncontext-menu-exit-fullscreen = Keluar dari layar penuh\ncontext-menu-enter-fullscreen = Masuk mode layar penuh\ncontext-menu-volume-controls = Pengaturan Volume\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.\n    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.\npanic-title = Terjadi kesalahan :(\nmore-info = Info lebih lanjut\nrun-anyway = Jalankan\ncontinue = Lanjutkan\nreport-bug = Laporkan Bug\nupdate-ruffle = Perbarui Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Aplikasi Desktop\nruffle-wiki = Kunjungi Wiki Ruffle\nenable-hardware-acceleration = Sepertinya akselerasi perangkat keras tidak aktif. Ruffle tetap akan bekerja, Namun dapat bekerja dengan sangat lambat. Anda dapat mengaktifkan akselerasi perangkat keras dengan menggunakan link berikut.\nview-error-details = Tunjukan Detail Error\nopen-in-new-tab = Buka di Tab Baru\nclick-to-unmute = Tekan untuk menyalakan suara\nerror-file-protocol =\n    Sepertinya anda menjalankan Ruffle di protokol \"file:\". \n    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.\n    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.\nerror-javascript-config =\n    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.\n    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.\n    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-not-found =\n    Ruffle gagal memuat komponen file \".wasm\" yang diperlukan.\n    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.\n    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan \"publicPath\": silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-mime-type =\n    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.\n    Server web ini tidak melayani file \".wasm\" dengan tipe MIME yang benar.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-swf-fetch =\n    Ruffle gagal memuat file SWF Flash.\n    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.\n    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.\nerror-swf-cors =\n    Ruffle gagal memuat file SWF Flash.\n    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-cors =\n    Ruffle gagal memuat komponen file \".wasm\" yang diperlukan.\n    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-invalid =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-download =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.\n    Jika tidak, silakan hubungi administrator situs web ini.\nerror-wasm-disabled-on-edge =\n    Ruffle gagal memuat komponen file \".wasm\" yang diperlukan.\n    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik \"Privasi, pencarian, dan layanan\", turun ke bawah, dan matikan \"Tingkatkan keamanan Anda di web\".\n    Ini akan memungkinkan browser Anda memuat file \".wasm\" yang diperlukan.\n    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.\nerror-javascript-conflict =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.\n    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.\nerror-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).\nerror-csp-conflict =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen \".wasm\" yang diperlukan untuk dijalankan.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-unknown =\n    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.\n    { $outdated ->\n        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).\n       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Anda yakin ingin menghapus berkas ini?\nsave-reload-prompt =\n    Satu-satunya cara untuk { $action ->\n        [delete] menghapus\n       *[replace] mengganti\n    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?\nsave-download = Unduh\nsave-replace = Ganti\nsave-delete = Hapus\nsave-backup-all = Unduh semua berkas penyimpanan\n",
    "volume-controls.ftl": "volume-controls = Pengaturan Volume\nvolume-controls-mute = Bisukan\nvolume-controls-volume = Volume\n"
  },
  "it-IT": {
    "context_menu.ftl": "context-menu-download-swf = Scarica .swf\ncontext-menu-copy-debug-info = Copia informazioni di debug\ncontext-menu-open-save-manager = Apri Gestione salvataggi\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Informazioni su Ruffle Extension ({ $version })\n       *[other] Informazioni su Ruffle ({ $version })\n    }\ncontext-menu-hide = Nascondi questo menu\ncontext-menu-exit-fullscreen = Esci dallo schermo intero\ncontext-menu-enter-fullscreen = Entra a schermo intero\ncontext-menu-volume-controls = Controlli volume\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle non Ã¨ stato in grado di eseguire il Flash incorporato in questa pagina.\n    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.\npanic-title = Qualcosa Ã¨ andato storto :(\nmore-info = Maggiori informazioni\nrun-anyway = Esegui comunque\ncontinue = Continua\nreport-bug = Segnala Un Bug\nupdate-ruffle = Aggiorna Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Applicazione Desktop\nruffle-wiki = Visualizza Ruffle Wiki\nenable-hardware-acceleration = Sembra che l'accelerazione hardware non sia abilitata. Sebbene Ruffle possa funzionare, potrebbe essere irragionevolmente lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo questo collegamento.\nview-error-details = Visualizza Dettagli Errore\nopen-in-new-tab = Apri in una nuova scheda\nclick-to-unmute = Clicca per riattivare l'audio\nerror-file-protocol =\n    Sembra che tu stia eseguendo Ruffle sul protocollo \"file:\".\n    Questo non funziona come browser blocca molte funzionalitÃ  di lavoro per motivi di sicurezza.\n    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.\nerror-javascript-config =\n    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.\n    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro Ã¨ in errore.\n    Puoi anche consultare il wiki Ruffle per aiuto.\nerror-wasm-not-found =\n    Ruffle non Ã¨ riuscito a caricare il componente di file \".wasm\".\n    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.\n    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione \"publicPath\": si prega di consultare il wiki Ruffle per aiuto.\nerror-wasm-mime-type =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Questo server web non serve \". asm\" file con il tipo MIME corretto.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.\nerror-swf-fetch =\n    Ruffle non Ã¨ riuscito a caricare il file Flash SWF.\n    La ragione piÃ¹ probabile Ã¨ che il file non esiste piÃ¹, quindi non c'Ã¨ nulla che Ruffle possa caricare.\n    Prova a contattare l'amministratore del sito web per aiuto.\nerror-swf-cors =\n    Ruffle non Ã¨ riuscito a caricare il file SWF Flash.\n    L'accesso al recupero probabilmente Ã¨ stato bloccato dalla politica CORS.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-cors =\n    Ruffle non Ã¨ riuscito a caricare il componente di file \".wasm\".\n    L'accesso al recupero probabilmente Ã¨ stato bloccato dalla politica CORS.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-invalid =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-download =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Questo puÃ² spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.\n    Altrimenti, contatta l'amministratore del sito.\nerror-wasm-disabled-on-edge =\n    Ruffle non ha caricato il componente di file \".wasm\" richiesto.\n    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su \"Privacy, search, and services\", scorrendo verso il basso e disattivando \"Migliora la tua sicurezza sul web\".\n    Questo permetterÃ  al tuo browser di caricare i file \".wasm\" richiesti.\n    Se il problema persiste, potresti dover usare un browser diverso.\nerror-javascript-conflict =\n    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.\n    Sembra che questa pagina utilizzi il codice JavaScript che Ã¨ in conflitto con Ruffle.\n    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.\nerror-javascript-conflict-outdated = Puoi anche provare a caricare una versione piÃ¹ recente di Ruffle che potrebbe aggirare il problema (l'attuale build Ã¨ obsoleta: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.\n    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta\". asm\" componente da eseguire.\n    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.\nerror-unknown =\n    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.\n    { $outdated ->\n        [true] Se sei l'amministratore del server, prova a caricare una versione piÃ¹ recente di Ruffle (la versione attuale Ã¨ obsoleta: { $buildDate }).\n       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?\nsave-reload-prompt =\n    L'unico modo per { $action ->\n        [delete] delete\n       *[replace] replace\n    } questo salvataggio file senza potenziali conflitti Ã¨ quello di ricaricare questo contenuto. Volete continuare comunque?\nsave-download = Scarica\nsave-replace = Sostituisci\nsave-delete = Elimina\nsave-backup-all = Scarica tutti i file di salvataggio\n",
    "volume-controls.ftl": "volume-controls = Controlli volume\nvolume-controls-mute = Silenzia\nvolume-controls-volume = Volume\n"
  },
  "ja-JP": {
    "context_menu.ftl": "context-menu-download-swf = .swfã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰\ncontext-menu-copy-debug-info = ãƒ‡ãƒãƒƒã‚°æƒ…å ±ã‚’ã‚³ãƒ”ãƒ¼\ncontext-menu-open-save-manager = ã‚»ãƒ¼ãƒ–ãƒžãƒãƒ¼ã‚¸ãƒ£ãƒ¼ã‚’é–‹ã\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffleæ‹¡å¼µæ©Ÿèƒ½ã«ã¤ã„ã¦ ({ $version })\n       *[other] Ruffleã«ã¤ã„ã¦ ({ $version })\n    }\ncontext-menu-hide = ãƒ¡ãƒ‹ãƒ¥ãƒ¼ã‚’éš ã™\ncontext-menu-exit-fullscreen = ãƒ•ãƒ«ã‚¹ã‚¯ãƒªãƒ¼ãƒ³ã‚’çµ‚äº†\ncontext-menu-enter-fullscreen = ãƒ•ãƒ«ã‚¹ã‚¯ãƒªãƒ¼ãƒ³ã«ã™ã‚‹\ncontext-menu-volume-controls = éŸ³é‡\n",
    "messages.ftl": "message-cant-embed =\n    Ruffleã¯ã“ã®ãƒšãƒ¼ã‚¸ã«åŸ‹ã‚è¾¼ã¾ã‚ŒãŸ Flash ã‚’å®Ÿè¡Œã§ãã¾ã›ã‚“ã§ã—ãŸã€‚\n    åˆ¥ã®ã‚¿ãƒ–ã§ãƒ•ã‚¡ã‚¤ãƒ«ã‚’é–‹ãã“ã¨ã§ã€ã“ã®å•é¡Œã‚’è§£æ±ºã§ãã‚‹ã‹ã‚‚ã—ã‚Œã¾ã›ã‚“ã€‚\npanic-title = ã‚¨ãƒ©ãƒ¼ãŒç™ºç”Ÿã—ã¾ã—ãŸ :(\nmore-info = è©³ç´°æƒ…å ±\nrun-anyway = ã¨ã«ã‹ãå®Ÿè¡Œã™ã‚‹\ncontinue = ç¶šè¡Œ\nreport-bug = ãƒã‚°ã‚’å ±å‘Š\nupdate-ruffle = Ruffleã‚’æ›´æ–°\nruffle-demo = Webãƒ‡ãƒ¢\nruffle-desktop = ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã‚¢ãƒ—ãƒªã‚±ãƒ¼ã‚·ãƒ§ãƒ³\nruffle-wiki = Ruffle Wikiã‚’è¡¨ç¤º\nenable-hardware-acceleration = ãƒãƒ¼ãƒ‰ã‚¦ã‚§ã‚¢ã‚¢ã‚¯ã‚»ãƒ©ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³ãŒæœ‰åŠ¹ã«ãªã£ã¦ã„ãªã„ã‚ˆã†ã§ã™ã€‚RuffleãŒå‹•ä½œã—ãªã„ã‹ã€å‹•ä½œãŒé…ããªã‚‹å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚ ãƒãƒ¼ãƒ‰ã‚¦ã‚§ã‚¢ã‚¢ã‚¯ã‚»ãƒ©ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³ã‚’æœ‰åŠ¹ã«ã™ã‚‹æ–¹æ³•ã«ã¤ã„ã¦ã¯ã€ã“ã¡ã‚‰ã®ãƒªãƒ³ã‚¯ã‚’å‚ç…§ã—ã¦ãã ã•ã„ã€‚\nview-error-details = ã‚¨ãƒ©ãƒ¼ã®è©³ç´°ã‚’è¡¨ç¤º\nopen-in-new-tab = æ–°ã—ã„ã‚¿ãƒ–ã§é–‹ã\nclick-to-unmute = ã‚¯ãƒªãƒƒã‚¯ã§ãƒŸãƒ¥ãƒ¼ãƒˆã‚’è§£é™¤\nerror-file-protocol =\n    Ruffleã‚’\"file:\"ãƒ—ãƒ­ãƒˆã‚³ãƒ«ã§ä½¿ç”¨ã—ã¦ã„ã‚‹ã‚ˆã†ã§ã™ã€‚\n    ãƒ–ãƒ©ã‚¦ã‚¶ã¯ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ä¸Šã®ç†ç”±ã‹ã‚‰æ®†ã©ã®æ©Ÿèƒ½ã‚’åˆ¶é™ã—ã¦ã„ã‚‹ãŸã‚ã€æ­£ã—ãå‹•ä½œã—ã¾ã›ã‚“ã€‚\n    ãƒ­ãƒ¼ã‚«ãƒ«ã‚µãƒ¼ãƒãƒ¼ã‚’ã‚»ãƒƒãƒˆã‚¢ãƒƒãƒ—ã™ã‚‹ã‹ã€ã‚¦ã‚§ãƒ–ãƒ‡ãƒ¢ã¾ãŸã¯ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã‚¢ãƒ—ãƒªã‚’ã”åˆ©ç”¨ãã ã•ã„ã€‚\nerror-javascript-config =\n    JavaScriptã®è¨­å®šãŒæ­£ã—ããªã„ãŸã‚ã€Ruffleã§å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚\n    ã‚µãƒ¼ãƒãƒ¼ç®¡ç†è€…ã®æ–¹ã¯ã€ã‚¨ãƒ©ãƒ¼ã®è©³ç´°ã‹ã‚‰ã€ã©ã®ãƒ‘ãƒ©ãƒ¡ãƒ¼ã‚¿ãƒ¼ã«å•é¡ŒãŒã‚ã‚‹ã®ã‹ã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚\n    Ruffleã®wikiã‚’å‚ç…§ã™ã‚‹ã“ã¨ã§ã€è§£æ±ºæ–¹æ³•ãŒè¦‹ã¤ã‹ã‚‹ã‹ã‚‚ã—ã‚Œã¾ã›ã‚“ã€‚\nerror-wasm-not-found =\n    Ruffleã®åˆæœŸåŒ–æ™‚ã«é‡å¤§ãªå•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚\n    ã“ã®Webã‚µãƒ¼ãƒãƒ¼ã®ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ãƒãƒªã‚·ãƒ¼ãŒã€å®Ÿè¡Œã«å¿…è¦ã¨ãªã‚‹ã€Œ.wasmã€ã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆã®å®Ÿè¡Œã‚’è¨±å¯ã—ã¦ã„ã¾ã›ã‚“ã€‚ã‚µãƒ¼ãƒãƒ¼ã®ç®¡ç†è€…ã®å ´åˆã¯ã€ãƒ•ã‚¡ã‚¤ãƒ«ãŒæ­£ã—ãã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ã•ã‚Œã¦ã„ã‚‹ã‹ç¢ºèªã‚’ã—ã¦ãã ã•ã„ã€‚ã“ã®å•é¡ŒãŒè§£æ±ºã—ãªã„å ´åˆã¯ã€ã€ŒpublicPathã€ã®è¨­å®šã‚’ä½¿ç”¨ã™ã‚‹å¿…è¦ãŒã‚ã‚Šã¾ã™ã€‚\n    ã‚µãƒ¼ãƒãƒ¼ã®ç®¡ç†è€…ã¯ã€Ruffleã®wikiã‚’å‚ç…§ã—ã¦ãã ã•ã„ã€‚\nerror-wasm-mime-type =\n    Ruffleã®åˆæœŸåŒ–ã«å¤±æ•—ã™ã‚‹å¤§ããªå•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚\n    ã“ã®Webã‚µãƒ¼ãƒãƒ¼ã¯æ­£ã—ã„MIMEã‚¿ã‚¤ãƒ—ã®ã€Œ.wasmã€ãƒ•ã‚¡ã‚¤ãƒ«ã‚’æä¾›ã—ã¦ã„ã¾ã›ã‚“ã€‚\n    ã‚µãƒ¼ãƒãƒ¼ã®ç®¡ç†è€…ã¯ã€Ruffleã®wikiã‚’å‚ç…§ã—ã¦ãã ã•ã„ã€‚\nerror-swf-fetch =\n    RuffleãŒFlash SWFãƒ•ã‚¡ã‚¤ãƒ«ã®èª­ã¿è¾¼ã¿ã«å¤±æ•—ã—ã¾ã—ãŸã€‚\n    æœ€ã‚‚è€ƒãˆã‚‰ã‚Œã‚‹åŽŸå› ã¯ã€SWFãƒ•ã‚¡ã‚¤ãƒ«ãŒæ—¢ã«å­˜åœ¨ã—ãªã„äº‹ã§RuffleãŒèª­ã¿è¾¼ã¿ã«å¤±æ•—ã™ã‚‹ã¨ã„ã†å•é¡Œã§ã™ã€‚\n    Webã‚µã‚¤ãƒˆã®ç®¡ç†è€…ã«ãŠå•ã„åˆã‚ã›ãã ã•ã„ã€‚\nerror-swf-cors =\n    Ruffleã¯SWFãƒ•ã‚¡ã‚¤ãƒ«ã®èª­ã¿è¾¼ã¿ã«å¤±æ•—ã—ã¾ã—ãŸã€‚\n    CORSãƒãƒªã‚·ãƒ¼ã®è¨­å®šã«ã‚ˆã‚Šã€fetchã¸ã®ã‚¢ã‚¯ã‚»ã‚¹ãŒãƒ–ãƒ­ãƒƒã‚¯ã•ã‚Œã¦ã„ã‚‹å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚\n    ã‚µãƒ¼ãƒãƒ¼ç®¡ç†è€…ã®æ–¹ã¯ã€Ruffleã®wikiã‚’å‚ç…§ã—ã¦ãã ã•ã„ã€‚\nerror-wasm-cors =\n    Ruffleã«å¿…è¦ã¨ãªã‚‹ã€Œ.wasmã€ãƒ•ã‚¡ã‚¤ãƒ«ã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆã®èª­ã¿è¾¼ã¿ã«å¤±æ•—ã—ã¾ã—ãŸã€‚\n    CORSãƒãƒªã‚·ãƒ¼ã«ã‚ˆã£ã¦fetchã¸ã®ã‚¢ã‚¯ã‚»ã‚¹ãŒãƒ–ãƒ­ãƒƒã‚¯ã•ã‚Œã¦ã„ã‚‹å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚\n    ã‚µãƒ¼ãƒãƒ¼ã®ç®¡ç†è€…ã¯ã€Ruffle wikiã‚’å‚ç…§ã—ã¦ãã ã•ã„ã€‚\nerror-wasm-invalid =\n    Ruffleã®åˆæœŸåŒ–æ™‚ã«é‡å¤§ãªå•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚\n    ã“ã®ãƒšãƒ¼ã‚¸ã«ã¯Ruffleã‚’å®Ÿè¡Œã™ã‚‹ãŸã‚ã®ãƒ•ã‚¡ã‚¤ãƒ«ãŒå­˜åœ¨ã—ãªã„ã‹ã€ç„¡åŠ¹ãªãƒ•ã‚¡ã‚¤ãƒ«ãŒã‚ã‚‹ã‹ã‚‚ã—ã‚Œã¾ã›ã‚“ã€‚\n    ã‚µãƒ¼ãƒãƒ¼ã®ç®¡ç†è€…ã¯ã€Ruffleã®wikiã‚’å‚ç…§ã—ã¦ãã ã•ã„ã€‚\nerror-wasm-download =\n    Ruffleã®åˆæœŸåŒ–æ™‚ã«é‡å¤§ãªå•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚\n    ã“ã®å•é¡Œã¯ãƒšãƒ¼ã‚¸ã‚’å†èª­ã¿è¾¼ã¿ã™ã‚‹äº‹ã§å¤§æŠµã¯è§£æ±ºã™ã‚‹ã¯ãšãªã®ã§è¡Œãªã£ã¦ã¿ã¦ãã ã•ã„ã€‚\n    ã‚‚ã—ã‚‚è§£æ±ºã—ãªã„å ´åˆã¯ã€Webã‚µã‚¤ãƒˆã®ç®¡ç†è€…ã«ãŠå•ã„åˆã‚ã›ãã ã•ã„ã€‚\nerror-wasm-disabled-on-edge =\n    Ruffleã«å¿…è¦ã¨ãªã‚‹ã€Œ.wasmã€ãƒ•ã‚¡ã‚¤ãƒ«ã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆã®èª­ã¿è¾¼ã¿ã«å¤±æ•—ã—ã¾ã—ãŸã€‚\n    ã“ã®å•é¡Œã‚’è§£æ±ºã™ã‚‹ã«ã¯ãƒ–ãƒ©ã‚¦ã‚¶ãƒ¼ã®è¨­å®šã‚’é–‹ãã€ã€Œãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ã€æ¤œç´¢ã€ã‚µãƒ¼ãƒ“ã‚¹ã€ã‚’ã‚¯ãƒªãƒƒã‚¯ã—ã€ä¸‹ã«ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ã§ã€ŒWebä¸Šã®ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã‚’å¼·åŒ–ã™ã‚‹ã€ã‚’ã‚ªãƒ•ã«ã—ã¦ã¿ã¦ãã ã•ã„ã€‚\n    ã“ã‚Œã§å¿…è¦ã¨ãªã‚‹ã€Œ.wasmã€ãƒ•ã‚¡ã‚¤ãƒ«ãŒèª­ã¿è¾¼ã¾ã‚Œã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã™ã€‚\n    ãã‚Œã§ã‚‚å•é¡ŒãŒè§£æ±ºã—ãªã„å ´åˆã€åˆ¥ã®ãƒ–ãƒ©ã‚¦ã‚¶ãƒ¼ã‚’ä½¿ç”¨ã™ã‚‹å¿…è¦ãŒã‚ã‚‹ã‹ã‚‚ã—ã‚Œã¾ã›ã‚“ã€‚\nerror-javascript-conflict =\n    Ruffleã®åˆæœŸåŒ–æ™‚ã«é‡å¤§ãªå•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚\n    ã“ã®ãƒšãƒ¼ã‚¸ã§ã¯Ruffleã¨ç«¶åˆã™ã‚‹JavaScriptã‚³ãƒ¼ãƒ‰ãŒä½¿ç”¨ã•ã‚Œã¦ã„ã‚‹ã‹ã‚‚ã—ã‚Œã¾ã›ã‚“ã€‚\n    ã‚µãƒ¼ãƒãƒ¼ã®ç®¡ç†è€…ã¯ã€ç©ºç™½ã®ãƒšãƒ¼ã‚¸ã§ãƒ•ã‚¡ã‚¤ãƒ«ã‚’èª­ã¿è¾¼ã¿ã—ç›´ã—ã¦ã¿ã¦ãã ã•ã„ã€‚\nerror-javascript-conflict-outdated = æ–°ã—ã„ãƒãƒ¼ã‚¸ãƒ§ãƒ³ã®Ruffleã‚’ã‚¢ãƒƒãƒ—ãƒ­ãƒ¼ãƒ‰ã™ã‚‹ã“ã¨ã§ã€ã“ã®å•é¡Œã‚’å›žé¿ã§ãã‚‹å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚(ç¾åœ¨ã®ãƒ“ãƒ«ãƒ‰ã¯å¤ã„ç‰©ã§ã™:{ $buildDate })\nerror-csp-conflict =\n    Ruffleã®åˆæœŸåŒ–æ™‚ã«é‡å¤§ãªå•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚\n    ã“ã®Webã‚µãƒ¼ãƒãƒ¼ã®ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ãƒãƒªã‚·ãƒ¼ãŒå®Ÿè¡Œã«å¿…è¦ã¨ãªã‚‹ã€Œ.wasmã€ã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆã®å®Ÿè¡Œã‚’è¨±å¯ã—ã¦ã„ã¾ã›ã‚“ã€‚\n    ã‚µãƒ¼ãƒãƒ¼ã®ç®¡ç†è€…ã¯ã€Ruffleã®wikiã‚’å‚ç…§ã—ã¦ãã ã•ã„ã€‚\nerror-unknown =\n    Flashã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã‚’è¡¨ç¤ºã™ã‚‹éš›ã«Ruffleã§å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚\n    { $outdated ->\n        [true] ç¾åœ¨ä½¿ç”¨ã—ã¦ã„ã‚‹ãƒ“ãƒ«ãƒ‰ã¯æœ€æ–°ã§ã¯ãªã„ãŸã‚ã€ã‚µãƒ¼ãƒãƒ¼ç®¡ç†è€…ã®æ–¹ã¯ã€æœ€æ–°ç‰ˆã®Ruffleã«æ›´æ–°ã—ã¦ã¿ã¦ãã ã•ã„(ç¾åœ¨åˆ©ç”¨ä¸­ã®ãƒ“ãƒ«ãƒ‰: { $buildDate })ã€‚\n       *[false] æƒ³å®šå¤–ã®å•é¡Œãªã®ã§ã€ãƒã‚°ã¨ã—ã¦å ±å‘Šã—ã¦ã„ãŸã ã‘ã‚‹ã¨å¬‰ã—ã„ã§ã™!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = ã“ã®ã‚»ãƒ¼ãƒ–ãƒ•ã‚¡ã‚¤ãƒ«ã‚’å‰Šé™¤ã—ã¦ã‚‚ã‚ˆã‚ã—ã„ã§ã™ã‹?\nsave-reload-prompt =\n    ã‚»ãƒ¼ãƒ–ãƒ•ã‚¡ã‚¤ãƒ«ã‚’ç«¶åˆã®å¯èƒ½æ€§ãªã { $action ->\n        [delete] å‰Šé™¤ã™ã‚‹\n       *[replace] ç½®ãæ›ãˆã‚‹\n    } ãŸã‚ã«ã€ã“ã®ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã‚’å†èª­ã¿è¾¼ã¿ã™ã‚‹ã“ã¨ã‚’æŽ¨å¥¨ã—ã¾ã™ã€‚ç¶šè¡Œã—ã¾ã™ã‹ï¼Ÿ\nsave-download = ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰\nsave-replace = ç½®ãæ›ãˆ\nsave-delete = å‰Šé™¤\nsave-backup-all = ã™ã¹ã¦ã®ã‚»ãƒ¼ãƒ–ãƒ•ã‚¡ã‚¤ãƒ«ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰\n",
    "volume-controls.ftl": "volume-controls = éŸ³é‡\nvolume-controls-mute = æ¶ˆéŸ³\nvolume-controls-volume = éŸ³é‡\n"
  },
  "ko-KR": {
    "context_menu.ftl": "context-menu-download-swf = .swf ë‹¤ìš´ë¡œë“œ\ncontext-menu-copy-debug-info = ë””ë²„ê·¸ ì •ë³´ ë³µì‚¬\ncontext-menu-open-save-manager = ì €ìž¥ ê´€ë¦¬ìž ì—´ê¸°\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle í™•ìž¥ í”„ë¡œê·¸ëž¨ ì •ë³´ ({ $version })\n       *[other] Ruffle ì •ë³´ ({ $version })\n    }\ncontext-menu-hide = ì´ ë©”ë‰´ ìˆ¨ê¸°ê¸°\ncontext-menu-exit-fullscreen = ì „ì²´í™”ë©´ ë‚˜ê°€ê¸°\ncontext-menu-enter-fullscreen = ì „ì²´í™”ë©´ìœ¼ë¡œ ì—´ê¸°\ncontext-menu-volume-controls = ìŒëŸ‰ ì¡°ì ˆ\n",
    "messages.ftl": "message-cant-embed = Ruffleì´ ì´ íŽ˜ì´ì§€ì— í¬í•¨ëœ í”Œëž˜ì‹œë¥¼ ì‹¤í–‰í•  ìˆ˜ ì—†ì—ˆìŠµë‹ˆë‹¤. ë³„ë„ì˜ íƒ­ì—ì„œ íŒŒì¼ì„ ì—´ì–´ë´„ìœ¼ë¡œì„œ ì´ ë¬¸ì œë¥¼ í•´ê²°í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.\npanic-title = ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤ :(\nmore-info = ì¶”ê°€ ì •ë³´\nrun-anyway = ê·¸ëž˜ë„ ì‹¤í–‰í•˜ê¸°\ncontinue = ê³„ì†í•˜ê¸°\nreport-bug = ë²„ê·¸ ì œë³´\nupdate-ruffle = Ruffle ì—…ë°ì´íŠ¸\nruffle-demo = ì›¹ ë°ëª¨\nruffle-desktop = ë°ìŠ¤í¬í†± ì• í”Œë¦¬ì¼€ì´ì…˜\nruffle-wiki = Ruffle ìœ„í‚¤ ë³´ê¸°\nenable-hardware-acceleration = í•˜ë“œì›¨ì–´ ê°€ì†ì´ í™œì„±í™”ë˜ì§€ ì•Šì€ ê²ƒ ê°™ìŠµë‹ˆë‹¤. Ruffleì€ ê³„ì† ìž‘ë™í•˜ì§€ë§Œ ì‹¤í–‰ ì†ë„ê°€ ë§¤ìš° ëŠë¦´ ìˆ˜ ìžˆìŠµë‹ˆë‹¤. í•˜ë“œì›¨ì–´ ê°€ì†ì„ í™œì„±í™”í•˜ëŠ” ë°©ë²•ì„ ì•Œì•„ë³´ë ¤ë©´ ë‹¤ìŒ ë§í¬ë¥¼ ì°¸ê³ í•´ë³´ì„¸ìš”.\nview-error-details = ì˜¤ë¥˜ ì„¸ë¶€ ì •ë³´ ë³´ê¸°\nopen-in-new-tab = ìƒˆ íƒ­ì—ì„œ ì—´ê¸°\nclick-to-unmute = í´ë¦­í•˜ì—¬ ìŒì†Œê±° í•´ì œ\nerror-file-protocol =\n    Ruffleì„ \"file:\" í”„ë¡œí† ì½œì—ì„œ ì‹¤í–‰í•˜ê³  ìžˆëŠ” ê²ƒìœ¼ë¡œ ë³´ìž…ë‹ˆë‹¤.\n    ë¸Œë¼ìš°ì €ì—ì„œëŠ” ì´ í”„ë¡œí† ì½œì„ ë³´ì•ˆìƒì˜ ì´ìœ ë¡œ ë§Žì€ ê¸°ëŠ¥ì„ ìž‘ë™í•˜ì§€ ì•Šê²Œ ì°¨ë‹¨í•˜ë¯€ë¡œ ì´ ë°©ë²•ì€ ìž‘ë™í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤.\n    ëŒ€ì‹ , ë¡œì»¬ ì„œë²„ë¥¼ ì§ì ‘ ì—´ì–´ì„œ ì„¤ì •í•˜ê±°ë‚˜ ì›¹ ë°ëª¨ ë˜ëŠ” ë°ìŠ¤í¬í†± ì• í”Œë¦¬ì¼€ì´ì…˜ì„ ì‚¬ìš©í•˜ì‹œê¸° ë°”ëžë‹ˆë‹¤.\nerror-javascript-config =\n    ìž˜ëª»ëœ ìžë°”ìŠ¤í¬ë¦½íŠ¸ ì„¤ì •ìœ¼ë¡œ ì¸í•´ Ruffleì—ì„œ ì¤‘ëŒ€í•œ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.\n    ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžì¸ ê²½ìš°, ì˜¤ë¥˜ ì„¸ë¶€ì‚¬í•­ì„ í™•ì¸í•˜ì—¬ ì–´ë–¤ ë§¤ê°œë³€ìˆ˜ê°€ ìž˜ëª»ë˜ì—ˆëŠ”ì§€ ì•Œì•„ë³´ì„¸ìš”.\n    ë˜ëŠ” Ruffle ìœ„í‚¤ë¥¼ í†µí•´ ë„ì›€ì„ ë°›ì•„ ë³¼ ìˆ˜ë„ ìžˆìŠµë‹ˆë‹¤.\nerror-wasm-not-found =\n    Ruffleì´ \".wasm\" í•„ìˆ˜ íŒŒì¼ êµ¬ì„±ìš”ì†Œë¥¼ ë¡œë“œí•˜ì§€ ëª»í–ˆìŠµë‹ˆë‹¤.\n    ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžë¼ë©´ íŒŒì¼ì´ ì˜¬ë°”ë¥´ê²Œ ì—…ë¡œë“œë˜ì—ˆëŠ”ì§€ í™•ì¸í•˜ì„¸ìš”.\n    ë¬¸ì œê°€ ì§€ì†ëœë‹¤ë©´ \"publicPath\" ì˜µì…˜ì„ ì‚¬ìš©í•´ì•¼ í•  ìˆ˜ë„ ìžˆìŠµë‹ˆë‹¤: Ruffle ìœ„í‚¤ë¥¼ ì°¸ì¡°í•˜ì—¬ ë„ì›€ì„ ë°›ìœ¼ì„¸ìš”.\nerror-wasm-mime-type =\n    Ruffleì´ ì´ˆê¸°í™”ë¥¼ ì‹œë„í•˜ëŠ” ë™ì•ˆ ì¤‘ëŒ€í•œ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.\n    ì´ ì›¹ ì„œë²„ëŠ” ì˜¬ë°”ë¥¸ MIME ìœ í˜•ì˜ \".wasm\" íŒŒì¼ì„ ì œê³µí•˜ì§€ ì•ŠìŠµë‹ˆë‹¤.\n    ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžë¼ë©´ Ruffle ìœ„í‚¤ë¥¼ í†µí•´ ë„ì›€ì„ ë°›ìœ¼ì„¸ìš”.\nerror-swf-fetch =\n    Ruffleì´ í”Œëž˜ì‹œ SWF íŒŒì¼ì„ ë¡œë“œí•˜ëŠ” ë° ì‹¤íŒ¨í•˜ì˜€ìŠµë‹ˆë‹¤.\n    ì´ëŠ” ì£¼ë¡œ íŒŒì¼ì´ ë” ì´ìƒ ì¡´ìž¬í•˜ì§€ ì•Šì•„ Ruffleì´ ë¡œë“œí•  ìˆ˜ ìžˆëŠ” ê²ƒì´ ì—†ì„ ê°€ëŠ¥ì„±ì´ ë†’ìŠµë‹ˆë‹¤.\n    ì›¹ì‚¬ì´íŠ¸ ê´€ë¦¬ìžì—ê²Œ ë¬¸ì˜í•˜ì—¬ ë„ì›€ì„ ë°›ì•„ë³´ì„¸ìš”.\nerror-swf-cors =\n    Ruffleì´ í”Œëž˜ì‹œ SWF íŒŒì¼ì„ ë¡œë“œí•˜ëŠ” ë° ì‹¤íŒ¨í•˜ì˜€ìŠµë‹ˆë‹¤.\n    CORS ì •ì±…ì— ì˜í•´ ë°ì´í„° ê°€ì ¸ì˜¤ê¸°ì— ëŒ€í•œ ì•¡ì„¸ìŠ¤ê°€ ì°¨ë‹¨ë˜ì—ˆì„ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.\n    ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžë¼ë©´ Ruffle ìœ„í‚¤ë¥¼ ì°¸ì¡°í•˜ì—¬ ë„ì›€ì„ ë°›ì•„ë³¼ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.\nerror-wasm-cors =\n    Ruffleì´ \".wasm\" í•„ìˆ˜ íŒŒì¼ êµ¬ì„±ìš”ì†Œë¥¼ ë¡œë“œí•˜ì§€ ëª»í–ˆìŠµë‹ˆë‹¤.\n    CORS ì •ì±…ì— ì˜í•´ ë°ì´í„° ê°€ì ¸ì˜¤ê¸°ì— ëŒ€í•œ ì•¡ì„¸ìŠ¤ê°€ ì°¨ë‹¨ë˜ì—ˆì„ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.\n    ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžë¼ë©´ Ruffle ìœ„í‚¤ë¥¼ ì°¸ì¡°í•˜ì—¬ ë„ì›€ì„ ë°›ì•„ë³¼ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.\nerror-wasm-invalid =\n    Ruffleì´ ì´ˆê¸°í™”ë¥¼ ì‹œë„í•˜ëŠ” ë™ì•ˆ ì¤‘ëŒ€í•œ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.\n    ì´ íŽ˜ì´ì§€ì— Ruffleì„ ì‹¤í–‰í•˜ê¸° ìœ„í•œ íŒŒì¼ì´ ëˆ„ë½ë˜ì—ˆê±°ë‚˜ ìž˜ëª»ëœ ê²ƒ ê°™ìŠµë‹ˆë‹¤.\n    ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžë¼ë©´ Ruffle ìœ„í‚¤ë¥¼ ì°¸ì¡°í•˜ì—¬ ë„ì›€ì„ ë°›ì•„ë³¼ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.\nerror-wasm-download =\n    Ruffleì´ ì´ˆê¸°í™”ë¥¼ ì‹œë„í•˜ëŠ” ë™ì•ˆ ì¤‘ëŒ€í•œ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.\n    ì´ ë¬¸ì œëŠ” ë•Œë•Œë¡œ ë°”ë¡œ í•´ê²°ë  ìˆ˜ ìžˆìœ¼ë¯€ë¡œ íŽ˜ì´ì§€ë¥¼ ìƒˆë¡œê³ ì¹¨í•˜ì—¬ ë‹¤ì‹œ ì‹œë„í•´ë³´ì„¸ìš”.\n    ê·¸ëž˜ë„ ë¬¸ì œê°€ ì§€ì†ëœë‹¤ë©´, ì›¹ì‚¬ì´íŠ¸ ê´€ë¦¬ìžì—ê²Œ ë¬¸ì˜í•´ì£¼ì„¸ìš”.\nerror-wasm-disabled-on-edge =\n    Ruffleì´ \".wasm\" í•„ìˆ˜ íŒŒì¼ êµ¬ì„±ìš”ì†Œë¥¼ ë¡œë“œí•˜ì§€ ëª»í–ˆìŠµë‹ˆë‹¤.\n    ì´ë¥¼ í•´ê²°í•˜ë ¤ë©´ ë¸Œë¼ìš°ì € ì„¤ì •ì—ì„œ \"ê°œì¸ ì •ë³´, ê²€ìƒ‰ ë° ì„œë¹„ìŠ¤\"ë¥¼ í´ë¦­í•œ í›„, í•˜ë‹¨ìœ¼ë¡œ ìŠ¤í¬ë¡¤í•˜ì—¬ \"ì›¹ì—ì„œ ë³´ì•ˆ ê°•í™”\" ê¸°ëŠ¥ì„ êº¼ì•¼ í•©ë‹ˆë‹¤.\n    ì´ëŠ” í•„ìš”í•œ \".wasm\" íŒŒì¼ì„ ë¸Œë¼ìš°ì €ì—ì„œ ë¡œë“œí•  ìˆ˜ ìžˆë„ë¡ í—ˆìš©í•©ë‹ˆë‹¤.\n    ì´ ë¬¸ì œê°€ ì§€ì†ë  ê²½ìš° ë‹¤ë¥¸ ë¸Œë¼ìš°ì €ë¥¼ ì‚¬ìš©í•´ì•¼ í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.\nerror-javascript-conflict =\n    Ruffleì´ ì´ˆê¸°í™”ë¥¼ ì‹œë„í•˜ëŠ” ë™ì•ˆ ì¤‘ëŒ€í•œ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.\n    ì´ íŽ˜ì´ì§€ì—ì„œ ì‚¬ìš©ë˜ëŠ” ìžë°”ìŠ¤í¬ë¦½íŠ¸ ì½”ë“œê°€ Ruffleê³¼ ì¶©ëŒí•˜ëŠ” ê²ƒìœ¼ë¡œ ë³´ìž…ë‹ˆë‹¤.\n    ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžë¼ë©´ ë¹ˆ íŽ˜ì´ì§€ì—ì„œ íŒŒì¼ì„ ë¡œë“œí•´ë³´ì„¸ìš”.\nerror-javascript-conflict-outdated = ë˜í•œ Ruffleì˜ ìµœì‹  ë²„ì „ì„ ì—…ë¡œë“œí•˜ëŠ” ê²ƒì„ ì‹œë„í•˜ì—¬ ë¬¸ì œë¥¼ ìš°íšŒí•´ë³¼ ìˆ˜ ìžˆìŠµë‹ˆë‹¤. (í˜„ìž¬ ë¹Œë“œê°€ ì˜¤ëž˜ë˜ì—ˆìŠµë‹ˆë‹¤: { $buildDate }).\nerror-csp-conflict =\n    Ruffleì´ ì´ˆê¸°í™”ë¥¼ ì‹œë„í•˜ëŠ” ë™ì•ˆ ì¤‘ëŒ€í•œ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.\n    ì´ ì›¹ ì„œë²„ì˜ CSP(Content Security Policy) ì •ì±…ì´ \".wasm\" í•„ìˆ˜ êµ¬ì„±ìš”ì†Œë¥¼ ì‹¤í–‰í•˜ëŠ” ê²ƒì„ í—ˆìš©í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤.\n    ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžë¼ë©´ Ruffle ìœ„í‚¤ë¥¼ ì°¸ì¡°í•˜ì—¬ ë„ì›€ì„ ë°›ì•„ë³¼ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.\nerror-unknown =\n    Ruffleì´ í”Œëž˜ì‹œ ì½˜í…ì¸ ë¥¼ í‘œì‹œí•˜ë ¤ê³  ì‹œë„í•˜ëŠ” ë™ì•ˆ ì¤‘ëŒ€í•œ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.\n    { $outdated ->\n        [true] ë§Œì•½ ë‹¹ì‹ ì´ ì„œë²„ ê´€ë¦¬ìžë¼ë©´, Ruffleì˜ ìµœì‹  ë²„ì „ì„ ì—…ë¡œë“œí•˜ì—¬ ë‹¤ì‹œ ì‹œë„í•´ë³´ì„¸ìš”. (í˜„ìž¬ ë¹Œë“œê°€ ì˜¤ëž˜ë˜ì—ˆìŠµë‹ˆë‹¤: { $buildDate }).\n       *[false] ì´ëŸ° í˜„ìƒì´ ë°œìƒí•´ì„œëŠ” ì•ˆë˜ë¯€ë¡œ, ë²„ê·¸ë¥¼ ì œë³´í•´ì£¼ì‹ ë‹¤ë©´ ê°ì‚¬í•˜ê² ìŠµë‹ˆë‹¤!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = ì •ë§ë¡œ ì´ ì„¸ì´ë¸Œ íŒŒì¼ì„ ì‚­ì œí•˜ì‹œê² ìŠµë‹ˆê¹Œ?\nsave-reload-prompt =\n    \bì´ íŒŒì¼ì„ ìž ìž¬ì ì¸ ì¶©ëŒ ì—†ì´ { $action ->\n        [delete] ì‚­ì œ\n       *[replace] êµì²´\n    }í•˜ë ¤ë©´ ì½˜í…ì¸ ë¥¼ ë‹¤ì‹œ ë¡œë“œí•´ì•¼ í•©ë‹ˆë‹¤. ê·¸ëž˜ë„ ê³„ì†í•˜ì‹œê² ìŠµë‹ˆê¹Œ?\nsave-download = ë‹¤ìš´ë¡œë“œ\nsave-replace = êµì²´\nsave-delete = ì‚­ì œ\nsave-backup-all = ëª¨ë“  ì €ìž¥ íŒŒì¼ ë‹¤ìš´ë¡œë“œ\n",
    "volume-controls.ftl": "volume-controls = ìŒëŸ‰ ì¡°ì ˆ\nvolume-controls-mute = ìŒì†Œê±°\nvolume-controls-volume = ìŒëŸ‰\n"
  },
  "nl-NL": {
    "context_menu.ftl": "context-menu-download-swf = .swf downloaden\ncontext-menu-copy-debug-info = Kopieer debuginformatie\ncontext-menu-open-save-manager = Open opgeslagen-data-manager\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Over Ruffle Uitbreiding ({ $version })\n       *[other] Over Ruffle ({ $version })\n    }\ncontext-menu-hide = Verberg dit menu\ncontext-menu-exit-fullscreen = Verlaat volledig scherm\ncontext-menu-enter-fullscreen = Naar volledig scherm\ncontext-menu-volume-controls = Geluidsniveaus\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle kon de Flash-inhoud op de pagina niet draaien.\n    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.\npanic-title = Er ging iets mis :(\nmore-info = Meer informatie\nrun-anyway = Toch starten\ncontinue = Doorgaan\nreport-bug = Bug rapporteren\nupdate-ruffle = Ruffle updaten\nruffle-demo = Web Demo\nruffle-desktop = Desktopapplicatie\nruffle-wiki = Bekijk de Ruffle Wiki\nenable-hardware-acceleration = Het lijkt erop dat hardwareversnelling niet beschikbaar is. Ruffle zal werken, maar gaat waarschijnlijk erg traag zijn. Je kan lezen hoe hardwareversnelling in te schakelen is door deze link te volgen.\nview-error-details = Foutdetails tonen\nopen-in-new-tab = Openen in een nieuw tabblad\nclick-to-unmute = Klik om te ontdempen\nerror-file-protocol =\n    Het lijkt erop dat je Ruffle gebruikt met het \"file\" protocol.\n    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.\n    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.\nerror-javascript-config =\n    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.\n    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.\n    Je kan ook in de Ruffle wiki kijken voor hulp.\nerror-wasm-not-found =\n    Ruffle kon het vereiste \".wasm\" bestandscomponent niet laden.\n    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geÃ¼pload.\n    Mocht het probleem blijven voordoen, moet je misschien de \"publicPath\" instelling gebruiken: zie ook de Ruffle wiki voor hulp.\nerror-wasm-mime-type =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Deze webserver serveert \".wasm\" bestanden niet met het juiste MIME type.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-swf-fetch =\n    Ruffle kon het Flash SWF bestand niet inladen.\n    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.\n    Probeer contact op te nemen met de websitebeheerder voor hulp.\nerror-swf-cors =\n    Ruffle kon het Flash SWD bestand niet inladen.\n    Toegang is waarschijnlijk geblokeerd door het CORS beleid.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-cors =\n    Ruffle kon het vereiste \".wasm\" bestandscomponent niet laden.\n    Toegang is waarschijnlijk geblokeerd door het CORS beleid.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-invalid =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-download =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.\n    Zo niet, neem dan contact op met de websitebeheerder.\nerror-wasm-disabled-on-edge =\n    Ruffle kon het vereiste \".wasm\" bestandscomponent niet laden.\n    Om dit op te lossen, ga naar je browserinstellingen, klik op \"Privacy, zoeken en diensten\", scroll omlaag, en schakel \"Verbeter je veiligheid op he web\" uit.\n    Dan kan je browser wel de vereiste \".wasm\" bestanden inladen.\n    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.\nerror-javascript-conflict =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.\n    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.\nerror-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).\nerror-csp-conflict =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het CSP-beleid staat niet toe dat het vereiste \".wasm\" component kan draaien.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-unknown =\n    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.\n    { $outdated ->\n        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).\n       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?\nsave-reload-prompt =\n    De enige manier om deze opgeslagen data te { $action ->\n        [delete] verwijderen\n       *[replace] vervangen\n    } zonder potentiÃ«le problemen is door de inhoud opnieuw te laden. Toch doorgaan?\nsave-download = Downloaden\nsave-replace = Vervangen\nsave-delete = Verwijderen\nsave-backup-all = Download alle opgeslagen data\n",
    "volume-controls.ftl": "volume-controls = Geluidsniveaus\nvolume-controls-mute = Dempen\nvolume-controls-volume = Volume\n"
  },
  "pl-PL": {
    "context_menu.ftl": "context-menu-download-swf = Pobierz .swf\ncontext-menu-copy-debug-info = Kopiuj informacje debugowania\ncontext-menu-open-save-manager = OtwÃ³rz MenadÅ¼er ZapisÃ³w\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] O Rozszerzeniu Ruffle ({ $version })\n       *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Ukryj to menu\ncontext-menu-exit-fullscreen = Zamknij peÅ‚ny ekran\ncontext-menu-enter-fullscreen = PeÅ‚ny ekran\ncontext-menu-volume-controls = Sterowanie gÅ‚oÅ›noÅ›ciÄ…\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nie byÅ‚o w stanie uruchomiÄ‡ zawartoÅ›ci Flash w tej stronie.\n    MoÅ¼esz sprÃ³bowaÄ‡ otworzyÄ‡ plik w nowej karcie, aby uniknÄ…Ä‡ tego problemu.\npanic-title = CoÅ› poszÅ‚o nie tak :(\nmore-info = WiÄ™cej informacji\nrun-anyway = Uruchom mimo tego\ncontinue = Kontynuuj\nreport-bug = ZgÅ‚oÅ› bÅ‚Ä…d\nupdate-ruffle = Zaktualizuj Ruffle\nruffle-desktop = Aplikacja na komputer\nruffle-wiki = Zobacz Wiki Ruffle\nenable-hardware-acceleration = WyglÄ…da na to, Å¼e akceleracja sprzÄ™towa nie jest wÅ‚Ä…czona. ChociaÅ¼ Ruffle moÅ¼e dziaÅ‚aÄ‡, moÅ¼e byÄ‡ nieproporcjonalnie wolna. MoÅ¼esz dowiedzieÄ‡ siÄ™, jak wÅ‚Ä…czyÄ‡ akceleracjÄ™ sprzÄ™towÄ…, podÄ…Å¼ajÄ…c za tym linkiem.\nview-error-details = Zobacz szczegÃ³Å‚y bÅ‚Ä™du\nopen-in-new-tab = OtwÃ³rz w nowej karcie\nclick-to-unmute = Kliknij aby wyÅ‚Ä…czyÄ‡ wyciszenie\nerror-file-protocol =\n    WyglÄ…da na to, Å¼e uÅ¼ywasz Ruffle w protokole \"plik:\".\n    To nie dziaÅ‚a poniewaÅ¼ przeglÄ…darka blokuje wiele funkcji przed dziaÅ‚aniem ze wzglÄ™dÃ³w bezpieczeÅ„stwa.\n    Zamiast tego zapraszamy do konfiguracji serwera lokalnego lub uÅ¼ycia aplikacji demo lub desktopowej.\nerror-javascript-config =\n    Ruffle napotkaÅ‚ powaÅ¼ny problem z powodu nieprawidÅ‚owej konfiguracji JavaScript.\n    JeÅ›li jesteÅ› administratorem serwera, prosimy o sprawdzenie szczegÃ³Å‚Ã³w bÅ‚Ä™du, aby dowiedzieÄ‡ siÄ™, ktÃ³ry parametr jest bÅ‚Ä™dny.\n    MoÅ¼esz rÃ³wnieÅ¼ zapoznaÄ‡ siÄ™ z wiki Ruffle po pomoc.\nerror-wasm-not-found =\n    Ruffle nie udaÅ‚o siÄ™ zaÅ‚adowaÄ‡ wymaganego komponentu pliku \".wasm\".\n    JeÅ›li jesteÅ› administratorem serwera, upewnij siÄ™, Å¼e plik zostaÅ‚ poprawnie przesÅ‚any.\n    JeÅ›li problem bÄ™dzie siÄ™ powtarzaÅ‚, byÄ‡ moÅ¼e bÄ™dziesz musiaÅ‚ uÅ¼yÄ‡ ustawienia \"publicPath\": zapoznaj siÄ™ z wiki Ruffle aby uzyskaÄ‡ pomoc.\nerror-wasm-mime-type =\n    Ruffle napotkaÅ‚ powaÅ¼ny problem podczas prÃ³by zainicjowania.\n    Ten serwer internetowy nie obsÅ‚uguje \". asm\" pliki z poprawnym typem MIME.\n    JeÅ›li jesteÅ› administratorem serwera, zapoznaj siÄ™ z wiki Ruffle aby uzyskaÄ‡ pomoc.\nerror-swf-fetch =\n    Ruffle nie udaÅ‚o siÄ™ zaÅ‚adowaÄ‡ pliku Flash SWF.\n    Najbardziej prawdopodobnym powodem jest to, Å¼e plik juÅ¼ nie istnieje, wiÄ™c Ruffle nie ma nic do zaÅ‚adowania.\n    SprÃ³buj skontaktowaÄ‡ siÄ™ z administratorem witryny, aby uzyskaÄ‡ pomoc.\nerror-swf-cors =\n    Ruffle nie udaÅ‚o siÄ™ zaÅ‚adowaÄ‡ pliku Flash SWF.\n    DostÄ™p do pobierania zostaÅ‚ prawdopodobnie zablokowany przez politykÄ™ CORS.\n    JeÅ›li jesteÅ› administratorem serwera, prosimy o pomoc z wiki Ruffle.\nerror-wasm-cors =\n    Ruffle nie udaÅ‚o siÄ™ zaÅ‚adowaÄ‡ wymaganego komponentu pliku \".wasm\".\n    DostÄ™p do pobierania zostaÅ‚ prawdopodobnie zablokowany przez politykÄ™ CORS.\n    JeÅ›li jesteÅ› administratorem serwera, prosimy o pomoc z wiki Ruffle.\nerror-wasm-invalid =\n    Ruffle napotkaÅ‚ powaÅ¼ny problem podczas prÃ³by zainicjowania.\n    WyglÄ…da na to, Å¼e ta strona ma brakujÄ…ce lub nieprawidÅ‚owe pliki do uruchomienia Ruffle.\n    JeÅ›li jesteÅ› administratorem serwera, prosimy o pomoc z wiki Ruffle.\nerror-wasm-download =\n    Ruffle napotkaÅ‚ powaÅ¼ny problem podczas prÃ³by zainicjowania.\n    MoÅ¼e to czÄ™sto rozwiÄ…zaÄ‡ siebie, wiÄ™c moÅ¼esz sprÃ³bowaÄ‡ odÅ›wieÅ¼yÄ‡ stronÄ™.\n    W przeciwnym razie skontaktuj siÄ™ z administratorem witryny.\nerror-wasm-disabled-on-edge =\n    Ruffle nie udaÅ‚o siÄ™ zaÅ‚adowaÄ‡ wymaganego komponentu pliku \".wasm\".\n    Aby to naprawiÄ‡, sprÃ³buj otworzyÄ‡ ustawienia przeglÄ…darki, klikajÄ…c \"PrywatnoÅ›Ä‡, wyszukiwanie i usÅ‚ugi\", przewijajÄ…c w dÃ³Å‚ i wyÅ‚Ä…czajÄ…c \"ZwiÄ™ksz bezpieczeÅ„stwo w sieci\".\n    Pozwoli to przeglÄ…darce zaÅ‚adowaÄ‡ wymagane pliki \".wasm\".\n    JeÅ›li problem bÄ™dzie siÄ™ powtarzaÅ‚, byÄ‡ moÅ¼e bÄ™dziesz musiaÅ‚ uÅ¼yÄ‡ innej przeglÄ…darki.\nerror-javascript-conflict =\n    Ruffle napotkaÅ‚ powaÅ¼ny problem podczas prÃ³by zainicjowania.\n    WyglÄ…da na to, Å¼e ta strona uÅ¼ywa kodu JavaScript, ktÃ³ry koliduje z Ruffle.\n    JeÅ›li jesteÅ› administratorem serwera, zapraszamy CiÄ™ do Å‚adowania pliku na pustej stronie.\nerror-javascript-conflict-outdated = MoÅ¼esz rÃ³wnieÅ¼ sprÃ³bowaÄ‡ przesÅ‚aÄ‡ nowszÄ… wersjÄ™ Ruffle, ktÃ³ra moÅ¼e ominÄ…Ä‡ problem (obecna wersja jest przestarzaÅ‚a: { $buildDate }).\nerror-csp-conflict =\n    Ruffle napotkaÅ‚ powaÅ¼ny problem podczas prÃ³by zainicjowania.\n    Polityka bezpieczeÅ„stwa zawartoÅ›ci tego serwera nie zezwala na wymagany \". wasm\" komponent do uruchomienia.\n    JeÅ›li jesteÅ› administratorem serwera, zapoznaj siÄ™ z wiki Ruffle po pomoc.\nerror-unknown =\n    Ruffle napotkaÅ‚ powaÅ¼ny problem podczas prÃ³by wyÅ›wietlenia tej zawartoÅ›ci Flash.\n    { $outdated ->\n        [true] JeÅ›li jesteÅ› administratorem serwera, sprÃ³buj przesÅ‚aÄ‡ nowszÄ… wersjÄ™ Ruffle (obecna wersja jest przestarzaÅ‚a: { $buildDate }).\n       *[false] To nie powinno siÄ™ wydarzyÄ‡, wiÄ™c bylibyÅ›my wdziÄ™czni, gdybyÅ› mÃ³gÅ‚ zgÅ‚osiÄ‡ bÅ‚Ä…d!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Czy na pewno chcesz skasowaÄ‡ ten plik zapisu?\nsave-reload-prompt =\n    JedynÄ… opcjÄ…, aby { $action ->\n        [delete] usunÄ…Ä‡\n       *[replace] zamieniÄ‡\n    } ten plik zapisu bez potencjalnych konfliktÃ³w jest przeÅ‚adowanie zawartoÅ›ci. Czy chcesz kontynuowaÄ‡?\nsave-download = Pobierz\nsave-replace = ZamieÅ„\nsave-delete = UsuÅ„\nsave-backup-all = Pobierz wszystkie pliki zapisu\n",
    "volume-controls.ftl": "volume-controls = Sterowanie gÅ‚oÅ›noÅ›ciÄ…\nvolume-controls-mute = Wycisz\nvolume-controls-volume = GÅ‚oÅ›noÅ›Ä‡\n"
  },
  "pt-BR": {
    "context_menu.ftl": "context-menu-download-swf = Baixar .swf\ncontext-menu-copy-debug-info = Copiar informaÃ§Ã£o de depuraÃ§Ã£o\ncontext-menu-open-save-manager = Abrir o Gerenciador de Salvamento\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre a extensÃ£o do Ruffle ({ $version })\n       *[other] Sobre o Ruffle ({ $version })\n    }\ncontext-menu-hide = Esconder este menu\ncontext-menu-exit-fullscreen = Sair da tela cheia\ncontext-menu-enter-fullscreen = Entrar em tela cheia\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nÃ£o conseguiu executar o Flash incorporado nesta pÃ¡gina.\n    VocÃª pode tentar abrir o arquivo em uma guia separada para evitar esse problema.\npanic-title = Algo deu errado :(\nmore-info = Mais informaÃ§Ã£o\nrun-anyway = Executar mesmo assim\ncontinue = Continuar\nreport-bug = Reportar Bug\nupdate-ruffle = Atualizar Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Aplicativo de Desktop\nruffle-wiki = Ver Wiki do Ruffle\nview-error-details = Ver detalhes do erro\nopen-in-new-tab = Abrir em uma nova guia\nclick-to-unmute = Clique para ativar o som\nerror-file-protocol =\n    Parece que vocÃª estÃ¡ executando o Ruffle no protocolo \"file:\".\n    Isto nÃ£o funciona como navegadores bloqueiam muitos recursos de funcionar por razÃµes de seguranÃ§a.\n    Ao invÃ©s disso, convidamos vocÃª a configurar um servidor local ou a usar a demonstraÃ§Ã£o da web, ou o aplicativo de desktop.\nerror-javascript-config =\n    O Ruffle encontrou um grande problema devido a uma configuraÃ§Ã£o incorreta do JavaScript.\n    Se vocÃª for o administrador do servidor, convidamos vocÃª a verificar os detalhes do erro para descobrir qual parÃ¢metro estÃ¡ com falha.\n    VocÃª tambÃ©m pode consultar o wiki do Ruffle para obter ajuda.\nerror-wasm-not-found =\n    Ruffle falhou ao carregar o componente de arquivo \".wasm\" necessÃ¡rio.\n    Se vocÃª Ã© o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.\n    Se o problema persistir, vocÃª pode precisar usar a configuraÃ§Ã£o \"publicPath\": por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-mime-type =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Este servidor de web nÃ£o estÃ¡ servindo \".wasm\" arquivos com o tipo MIME correto.\n    Se vocÃª Ã© o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-swf-fetch =\n    Ruffle falhou ao carregar o arquivo Flash SWF.\n    A razÃ£o provÃ¡vel Ã© que o arquivo nÃ£o existe mais, entÃ£o nÃ£o hÃ¡ nada para o Ruffle carregar.\n    Tente contatar o administrador do site para obter ajuda.\nerror-swf-cors =\n    Ruffle falhou ao carregar o arquivo Flash SWF.\n    O acesso para fetch provavelmente foi bloqueado pela polÃ­tica CORS.\n    Se vocÃª for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-wasm-cors =\n    Ruffle falhou ao carregar o componente de arquivo \".wasm\" necessÃ¡rio.\n    O acesso para fetch foi provavelmente bloqueado pela polÃ­tica CORS.\n    Se vocÃª Ã© o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-invalid =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta pÃ¡gina tem arquivos ausentes ou invÃ¡lidos para executar o Ruffle.\n    Se vocÃª for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-wasm-download =\n    O Ruffle encontrou um grande problema ao tentar inicializar.\n    Muitas vezes isso pode se resolver sozinho, entÃ£o vocÃª pode tentar recarregar a pÃ¡gina.\n    Caso contrÃ¡rio, contate o administrador do site.\nerror-wasm-disabled-on-edge =\n    O Ruffle falhou ao carregar o componente de arquivo \".wasm\" necessÃ¡rio.\n    Para corrigir isso, tente abrir configuraÃ§Ãµes do seu navegador, clicando em \"Privacidade, pesquisa e serviÃ§os\", rolando para baixo e desativando \"Melhore sua seguranÃ§a na web\".\n    Isso permitirÃ¡ que seu navegador carregue os arquivos \".wasm\" necessÃ¡rios.\n    Se o problema persistir, talvez seja necessÃ¡rio usar um navegador diferente.\nerror-javascript-conflict =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta pÃ¡gina usa cÃ³digo JavaScript que entra em conflito com o Ruffle.\n    Se vocÃª for o administrador do servidor, convidamos vocÃª a tentar carregar o arquivo em uma pÃ¡gina em branco.\nerror-javascript-conflict-outdated = VocÃª tambÃ©m pode tentar fazer o upload de uma versÃ£o mais recente do Ruffle que pode contornar o problema (a compilaÃ§Ã£o atual estÃ¡ desatualizada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    A polÃ­tica de seguranÃ§a de conteÃºdo deste servidor da web nÃ£o permite a execuÃ§Ã£o do componente \".wasm\" necessÃ¡rio.\n    Se vocÃª for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-unknown =\n    O Ruffle encontrou um grande problema enquanto tentava exibir este conteÃºdo em Flash.\n    { $outdated ->\n        [true] Se vocÃª Ã© o administrador do servidor, por favor tente fazer o upload de uma versÃ£o mais recente do Ruffle (a compilaÃ§Ã£o atual estÃ¡ desatualizada: { $buildDate }).\n       *[false] Isso nÃ£o deveria acontecer, entÃ£o apreciarÃ­amos muito se vocÃª pudesse arquivar um bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?\nsave-reload-prompt =\n    A Ãºnica maneira de { $action ->\n        [delete] excluir\n       *[replace] substituir\n    } este arquivo sem potencial conflito Ã© recarregar este conteÃºdo. Deseja continuar mesmo assim?\nsave-download = Baixar\nsave-replace = Substituir\nsave-delete = Excluir\nsave-backup-all = Baixar todos os arquivos de salvamento\n",
    "volume-controls.ftl": ""
  },
  "pt-PT": {
    "context_menu.ftl": "context-menu-download-swf = Descarga.swf\ncontext-menu-copy-debug-info = Copiar informaÃ§Ãµes de depuraÃ§Ã£o\ncontext-menu-open-save-manager = Abrir Gestor de GravaÃ§Ãµes\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre a extensÃ£o do Ruffle ({ $version })\n       *[other] Sobre o Ruffle ({ $version })\n    }\ncontext-menu-hide = Esconder este menu\ncontext-menu-exit-fullscreen = Fechar EcrÃ£ Inteiro\ncontext-menu-enter-fullscreen = Abrir EcrÃ£ Inteiro\ncontext-menu-volume-controls = Controlos de volume\n",
    "messages.ftl": "message-cant-embed =\n    O Ruffle nÃ£o conseguiu abrir o Flash integrado nesta pÃ¡gina.\n    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.\npanic-title = Algo correu mal :(\nmore-info = Mais informaÃ§Ãµes\nrun-anyway = Executar mesmo assim\ncontinue = Continuar\nreport-bug = Reportar falha\nupdate-ruffle = Atualizar o Ruffle\nruffle-demo = DemonstraÃ§Ã£o na Web\nruffle-desktop = AplicaÃ§Ã£o para Desktop\nruffle-wiki = Ver a Wiki do Ruffle\nenable-hardware-acceleration = Parece que a aceleraÃ§Ã£o de hardware nÃ£o estÃ¡ ativada. Mesmo que o Ruffle funcione, pode estar excessivamente lento. Descubra como ativar a aceleraÃ§Ã£o de hardware seguindo este link.\nview-error-details = Ver detalhes do erro\nopen-in-new-tab = Abrir num novo separador\nclick-to-unmute = Clique para ativar o som\nerror-file-protocol =\n    Parece que executa o Ruffle no protocolo \"file:\".\n    Isto nÃ£o funciona, jÃ¡ que os navegadores bloqueiam muitas funcionalidades por razÃµes de seguranÃ§a.\n    Em vez disto, recomendados configurar um servidor local ou usar a demonstraÃ§Ã£o na web, ou a aplicaÃ§Ã£o para desktop.\nerror-javascript-config =\n    O Ruffle encontrou um problema maior devido a uma configuraÃ§Ã£o de JavaScript incorreta.\n    Se Ã© o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o parÃ¢metro problemÃ¡tico.\n    Pode ainda consultar a wiki do Ruffle para obter ajuda.\nerror-wasm-not-found =\n    O Ruffle falhou ao carregar o componente de ficheiro \".wasm\" necessÃ¡rio.\n    Se Ã© o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.\n    Se o problema persistir, poderÃ¡ querer usar a configuraÃ§Ã£o \"publicPath\": consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-mime-type =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Este servidor de web nÃ£o suporta ficheiros \".wasm\" com o tipo MIME correto.\n    Se Ã© o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-swf-fetch =\n    Ruffle falhou ao carregar o arquivo SWF do Flash\n    A razÃ£o mais provÃ¡vel Ã© que o arquivo nÃ£o existe mais, entÃ£o nÃ£o hÃ¡ nada para o Ruffle carregar.\n    Tente contactar o administrador do site para obter ajuda.\nerror-swf-cors =\n    O Ruffle falhou ao carregar o ficheiro Flash SWF.\n    Acesso a buscar foi provavelmente bloqueado pela polÃ­tica de CORS.\n    Se Ã© o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-cors =\n    O Ruffle falhou ao carregar o componente de ficheiro \".wasm\" necessÃ¡rio.\n    O acesso a buscar foi provavelmente bloqueado pela polÃ­tica CORS.\n    Se Ã© o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-invalid =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta pÃ¡gina estÃ¡ ausente ou arquivos invÃ¡lidos para executar o Ruffle.\n    Se vocÃª Ã© o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-download =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a pÃ¡gina.\n    Caso contrÃ¡rio, por favor contacte o administrador do site.\nerror-wasm-disabled-on-edge =\n    O Ruffle falhou ao carregar o componente de ficheiro \".wasm\" necessÃ¡rio.\n    Para corrigir isso, tente abrir as opÃ§Ãµes do seu navegador, clicando em \"Privacidade, pesquisa e serviÃ§os\", rolando para baixo e desativando \"Melhore a sua seguranÃ§a na web\".\n    Isto permitirÃ¡ ao seu navegador carregar os ficheiros \".wasm\" necessÃ¡rios.\n    Se o problema persistir, talvez seja necessÃ¡rio usar um navegador diferente.\nerror-javascript-conflict =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Parece que esta pÃ¡gina usa cÃ³digo JavaScript que entra em conflito com o Ruffle.\n    Se Ã© o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa pÃ¡gina em branco.\nerror-javascript-conflict-outdated = Pode ainda tentar carregar uma versÃ£o mais recente do Ruffle que talvez contorne o problema (a compilaÃ§Ã£o atual estÃ¡ desatualizada: { $buildDate }).\nerror-csp-conflict =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    A PolÃ­tica de SeguranÃ§a de ConteÃºdo deste servidor nÃ£o permite que o componente \".wasm\" necessÃ¡rio seja executado.\n    Se Ã© o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-unknown =\n    O Ruffle encontrou um problema maior enquanto tentava mostrar este conteÃºdo em Flash.\n    { $outdated ->\n        [true] Se Ã© o administrador do servidor, por favor tente carregar uma versÃ£o mais recente do Ruffle (a compilaÃ§Ã£o atual estÃ¡ desatualizada: { $buildDate }).\n       *[false] NÃ£o era suposto isto ter acontecido, por isso agradecerÃ­amos muito se pudesse reportar a falha!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Tem a certeza de que quer apagar esta gravaÃ§Ã£o?\nsave-reload-prompt =\n    A Ãºnica forma de { $action ->\n        [delete] apagar\n       *[replace] substituir\n    } esta gravaÃ§Ã£o sem um potencial conflito Ã© recarregar este conteÃºdo. Deseja continuar mesmo assim?\nsave-download = Descarregar\nsave-replace = Substituir\nsave-delete = Apagar\nsave-backup-all = Descarregar todas as gravaÃ§Ãµes\n",
    "volume-controls.ftl": "volume-controls = Controlos de volume\nvolume-controls-mute = Silenciar\nvolume-controls-volume = Volume\n"
  },
  "ro-RO": {
    "context_menu.ftl": "context-menu-download-swf = DescarcÄƒ .swf\ncontext-menu-copy-debug-info = CopiazÄƒ informaÈ›iile de depanare\ncontext-menu-open-save-manager = Deschide managerul de salvÄƒri\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Despre extensia Ruffle ({ $version })\n       *[other] Despre Ruffle ({ $version })\n    }\ncontext-menu-hide = Ascunde acest meniu\ncontext-menu-exit-fullscreen = IeÈ™i din ecranul complet\ncontext-menu-enter-fullscreen = IntrÄƒ Ã®n ecran complet\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nu a putut rula Flash Ã®ncorporat Ã®n aceastÄƒ paginÄƒ.\n    PuteÈ›i Ã®ncerca sÄƒ deschideÈ›i fiÈ™ierul Ã®ntr-o filÄƒ separatÄƒ, pentru a evita aceastÄƒ problemÄƒ.\npanic-title = Ceva a mers prost :(\nmore-info = Mai multe informaÈ›ii\nrun-anyway = RuleazÄƒ oricum\ncontinue = ContinuÄƒ\nreport-bug = RaporteazÄƒ un bug\nupdate-ruffle = ActualizeazÄƒ Ruffle\nruffle-demo = Demo web\nruffle-desktop = AplicaÈ›ie desktop\nruffle-wiki = Vezi wikiul Ruffle\nview-error-details = Vezi detaliile erorii\nopen-in-new-tab = Deschide Ã®ntr-o filÄƒ nouÄƒ\nclick-to-unmute = DÄƒ click pentru a dezmuÈ›i\nerror-file-protocol =\n    Se pare cÄƒ rulezi Ruffle pe protocolul â€žfile:â€.\n    Acesta nu funcÈ›ioneazÄƒ, deoarece browserele blocheazÄƒ funcÈ›ionarea multor funcÈ›ii din motive de securitate.\n    ÃŽn schimb, te invitÄƒm sÄƒ configurezi un server local sau sÄƒ foloseÈ™ti fie demoul web, fie aplicaÈ›ia desktop.\nerror-javascript-config =\n    Ruffle a Ã®ntÃ¢mpinat o problemÄƒ majorÄƒ din cauza unei configurÄƒri incorecte a JavaScript.\n    DacÄƒ sunteÈ›i administratorul serverului, vÄƒ invitÄƒm sÄƒ verificaÈ›i detaliile de eroare pentru a afla care parametru este defect.\n    PuteÈ›i consulta È™i Ruffle wiki pentru ajutor.\nerror-wasm-not-found =\n    Ruffle a eÈ™uat la Ã®ncÄƒrcarea componentei de fiÈ™ier \".wasm\".\n    DacÄƒ sunteÈ›i administratorul serverului, vÄƒ rugÄƒm sÄƒ vÄƒ asiguraÈ›i cÄƒ fiÈ™ierul a fost Ã®ncÄƒrcat corect.\n    DacÄƒ problema persistÄƒ, poate fi necesar sÄƒ utilizaÅ£i setarea \"publicPath\": vÄƒ rugÄƒm sÄƒ consultaÅ£i Ruffle wiki pentru ajutor.\nerror-wasm-mime-type =\n    Ruffle a Ã®ntÃ¢mpinat o problemÄƒ majorÄƒ Ã®n timp ce se Ã®ncerca iniÈ›ializarea.\n    Acest server web nu serveÈ™te \". asm\" fiÈ™iere cu tipul corect MIME.\n    DacÄƒ sunteÈ›i administrator de server, vÄƒ rugÄƒm sÄƒ consultaÈ›i Ruffle wiki pentru ajutor.\nerror-swf-fetch =\n    Ruffle a eÈ™uat la Ã®ncÄƒrcarea fiÈ™ierului Flash SWF.\n    Motivul cel mai probabil este cÄƒ fiÅŸierul nu mai existÄƒ, deci nu existÄƒ nimic pentru Ruffle sÄƒ se Ã®ncarce.\n    ÃŽncercaÈ›i sÄƒ contactaÈ›i administratorul site-ului web pentru ajutor.\nerror-swf-cors =\n    Ruffle a eÈ™uat la Ã®ncÄƒrcarea fiÈ™ierului Flash SWF.\n    Accesul la preluare a fost probabil blocat de politica CORS.\n    DacÄƒ sunteÅ£i administratorul serverului, vÄƒ rugÄƒm sÄƒ consultaÅ£i Ruffle wiki pentru ajutor.\nerror-wasm-cors =\n    Ruffle a eÈ™uat Ã®n Ã®ncÄƒrcarea componentei de fiÈ™ier \".wasm\".\n    Accesul la preluare a fost probabil blocat de politica CORS.\n    DacÄƒ sunteÅ£i administratorul serverului, vÄƒ rugÄƒm sÄƒ consultaÅ£i Ruffle wiki pentru ajutor.\nerror-wasm-invalid =\n    Ruffle a Ã®ntÃ¢mpinat o problemÄƒ majorÄƒ Ã®n timp ce se Ã®ncearcÄƒ iniÈ›ializarea.\n    Se pare cÄƒ aceastÄƒ paginÄƒ are fiÈ™iere lipsÄƒ sau invalide pentru rularea Ruffle.\n    DacÄƒ sunteÅ£i administratorul serverului, vÄƒ rugÄƒm sÄƒ consultaÅ£i Ruffle wiki pentru ajutor.\nerror-wasm-download =\n    Ruffle a Ã®ntÃ¢mpinat o problemÄƒ majorÄƒ Ã®n timp ce Ã®ncerca sÄƒ iniÈ›ializeze.\n    Acest lucru se poate rezolva adesea, astfel Ã®ncÃ¢t puteÅ£i Ã®ncerca sÄƒ reÃ®ncÄƒrcaÅ£i pagina.\n    Altfel, vÄƒ rugÄƒm sÄƒ contactaÅ£i administratorul site-ului.\nerror-wasm-disabled-on-edge =\n    Ruffle nu a putut Ã®ncÄƒrca componenta de fiÈ™ier \".wasm\".\n    Pentru a remedia acest lucru, Ã®ncercaÈ›i sÄƒ deschideÈ›i setÄƒrile browser-ului dvs., apÄƒsÃ¢nd pe \"ConfidenÈ›ialitate, cÄƒutare È™i servicii\", derulÃ¢nd Ã®n jos È™i Ã®nchizÃ¢nd \"ÃŽmbunÄƒtÄƒÈ›eÈ™te-È›i securitatea pe web\".\n    Acest lucru va permite browser-ului sÄƒ Ã®ncarce fiÈ™ierele \".wasm\" necesare.\n    DacÄƒ problema persistÄƒ, ar putea fi necesar sÄƒ folosiÈ›i un browser diferit.\nerror-javascript-conflict =\n    Ruffle a Ã®ntÃ¢mpinat o problemÄƒ majorÄƒ Ã®n timp ce Ã®ncerca sÄƒ iniÈ›ializeze.\n    Se pare cÄƒ aceastÄƒ paginÄƒ foloseÈ™te codul JavaScript care intrÄƒ Ã®n conflict cu Ruffle.\n    DacÄƒ sunteÅ£i administratorul serverului, vÄƒ invitÄƒm sÄƒ Ã®ncÄƒrcaÅ£i fiÅŸierul pe o paginÄƒ goalÄƒ.\nerror-javascript-conflict-outdated = De asemenea, poÈ›i Ã®ncerca sÄƒ Ã®ncarci o versiune mai recentÄƒ de Ruffle care poate ocoli problema (versiunea curentÄƒ este expiratÄƒ: { $buildDate }).\nerror-csp-conflict =\n    Ruffle a Ã®ntÃ¢mpinat o problemÄƒ majorÄƒ Ã®n timp ce se Ã®ncerca iniÈ›ializarea.\n    Politica de securitate a conÈ›inutului acestui server web nu permite serviciul necesar\". asm\" componentÄƒ pentru a rula.\n    DacÄƒ sunteÈ›i administratorul de server, consultaÈ›i Ruffle wiki pentru ajutor.\nerror-unknown =\n    Ruffle a Ã®ntÃ¢mpinat o problemÄƒ majorÄƒ Ã®n timp ce Ã®ncerca sÄƒ afiÈ™eze acest conÈ›inut Flash.\n    { $outdated ->\n        [true] DacÄƒ eÈ™ti administratorul serverului, te rugÄƒm sÄƒ Ã®ncerci sÄƒ Ã®ncarci o versiune mai recentÄƒ de Ruffle (versiunea actualÄƒ este depÄƒÅŸitÄƒ: { $buildDate }).\n       *[false] Acest lucru nu ar trebui sÄƒ se Ã®ntÃ¢mple, aÈ™a cÄƒ am aprecia foarte mult dacÄƒ ai putea trimite un bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Sigur vrei sÄƒ È™tergi acest fiÈ™ier de salvare?\nsave-reload-prompt =\n    Singura cale de a { $action ->\n        [delete] È™terge\n       *[replace] Ã®nlocui\n    } acest fiÈ™ier de salvare fÄƒrÄƒ un conflict potenÈ›ial este de a reÃ®ncÄƒrca acest conÈ›inut. DoreÈ™ti sÄƒ continui oricum?\nsave-download = DescarcÄƒ\nsave-replace = ÃŽnlocuieÈ™te\nsave-delete = È˜terge\n",
    "volume-controls.ftl": "volume-controls = Comenzi pentru volum\n"
  },
  "ru-RU": {
    "context_menu.ftl": "context-menu-download-swf = Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ .swf\ncontext-menu-copy-debug-info = ÐšÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¾Ñ‚Ð»Ð°Ð´Ð¾Ñ‡Ð½ÑƒÑŽ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ\ncontext-menu-open-save-manager = ÐœÐµÐ½ÐµÐ´Ð¶ÐµÑ€ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ð¹\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ðž Ñ€Ð°ÑÑˆÐ¸Ñ€ÐµÐ½Ð¸Ð¸ Ruffle ({ $version })\n       *[other] Ðž Ruffle ({ $version })\n    }\ncontext-menu-hide = Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ ÑÑ‚Ð¾ Ð¼ÐµÐ½ÑŽ\ncontext-menu-exit-fullscreen = ÐžÐºÐ¾Ð½Ð½Ñ‹Ð¹ Ñ€ÐµÐ¶Ð¸Ð¼\ncontext-menu-enter-fullscreen = ÐŸÐ¾Ð»Ð½Ð¾ÑÐºÑ€Ð°Ð½Ð½Ñ‹Ð¹ Ñ€ÐµÐ¶Ð¸Ð¼\ncontext-menu-volume-controls = Ð“Ñ€Ð¾Ð¼ÐºÐ¾ÑÑ‚ÑŒ\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle Ð½Ðµ ÑÐ¼Ð¾Ð³ Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Flash, Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼Ñ‹Ð¹ Ð½Ð° ÑÑ‚Ð¾Ð¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ.\n    Ð§Ñ‚Ð¾Ð±Ñ‹ Ð¾Ð±Ð¾Ð¹Ñ‚Ð¸ ÑÑ‚Ñƒ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ñƒ, Ð²Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±Ð¾Ð²Ð°Ñ‚ÑŒ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ñ„Ð°Ð¹Ð» Ð² Ð¾Ñ‚Ð´ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð²ÐºÐ»Ð°Ð´ÐºÐµ.\npanic-title = Ð§Ñ‚Ð¾-Ñ‚Ð¾ Ð¿Ð¾ÑˆÐ»Ð¾ Ð½Ðµ Ñ‚Ð°Ðº :(\nmore-info = ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½ÐµÐµ\nrun-anyway = Ð’ÑÑ‘ Ñ€Ð°Ð²Ð½Ð¾ Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ\ncontinue = ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ\nreport-bug = Ð¡Ð¾Ð¾Ð±Ñ‰Ð¸Ñ‚ÑŒ Ð¾Ð± Ð¾ÑˆÐ¸Ð±ÐºÐµ\nupdate-ruffle = ÐžÐ±Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ Ruffle\nruffle-demo = Ð’ÐµÐ±-Ð´ÐµÐ¼Ð¾\nruffle-desktop = ÐÐ°ÑÑ‚Ð¾Ð»ÑŒÐ½Ð¾Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ\nruffle-wiki = ÐžÑ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ð²Ð¸ÐºÐ¸ Ruffle\nenable-hardware-acceleration = ÐŸÐ¾Ñ…Ð¾Ð¶Ðµ, Ñ‡Ñ‚Ð¾ Ð°Ð¿Ð¿Ð°Ñ€Ð°Ñ‚Ð½Ð¾Ðµ ÑƒÑÐºÐ¾Ñ€ÐµÐ½Ð¸Ðµ Ð½Ðµ Ð²ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¾. Ð¥Ð¾Ñ‚ÑŒ Ruffle Ð¸ Ð±ÑƒÐ´ÐµÑ‚ Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚ÑŒ, Ð¾Ð½ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð½ÐµÐ¾Ð¿Ñ€Ð°Ð²Ð´Ð°Ð½Ð½Ð¾ Ð¼ÐµÐ´Ð»ÐµÐ½Ð½Ñ‹Ð¼. Ðž Ñ‚Ð¾Ð¼, ÐºÐ°Ðº Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð°Ð¿Ð¿Ð°Ñ€Ð°Ñ‚Ð½Ð¾Ðµ ÑƒÑÐºÐ¾Ñ€ÐµÐ½Ð¸Ðµ, Ð¼Ð¾Ð¶Ð½Ð¾ ÑƒÐ·Ð½Ð°Ñ‚ÑŒ, Ð¿ÐµÑ€ÐµÐ¹Ð´Ñ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ.\nview-error-details = Ð¡Ð²ÐµÐ´ÐµÐ½Ð¸Ñ Ð¾Ð± Ð¾ÑˆÐ¸Ð±ÐºÐµ\nopen-in-new-tab = ÐžÑ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ð² Ð½Ð¾Ð²Ð¾Ð¹ Ð²ÐºÐ»Ð°Ð´ÐºÐµ\nclick-to-unmute = Ð’ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð·Ð²ÑƒÐº\nerror-file-protocol =\n    ÐŸÐ¾Ñ…Ð¾Ð¶Ðµ, Ñ‡Ñ‚Ð¾ Ð²Ñ‹ Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÑ‚Ðµ Ruffle Ð¿Ð¾ Ð¿Ñ€Ð¾Ñ‚Ð¾ÐºÐ¾Ð»Ñƒ \"file:\".\n    Ð­Ñ‚Ð¾ Ð½Ðµ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚, Ð¿Ð¾ÑÐºÐ¾Ð»ÑŒÐºÑƒ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ñ‹ Ð±Ð»Ð¾ÐºÐ¸Ñ€ÑƒÑŽÑ‚ Ñ€Ð°Ð±Ð¾Ñ‚Ñƒ Ð¼Ð½Ð¾Ð³Ð¸Ñ… Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¹ Ð¿Ð¾ ÑÐ¾Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸ÑÐ¼ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸.\n    Ð’Ð¼ÐµÑÑ‚Ð¾ ÑÑ‚Ð¾Ð³Ð¾ Ð¼Ñ‹ Ð¿Ñ€ÐµÐ´Ð»Ð°Ð³Ð°ÐµÐ¼ Ð²Ð°Ð¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð½Ð°ÑÑ‚Ð¾Ð»ÑŒÐ½Ð¾Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ, Ð²ÐµÐ±-Ð´ÐµÐ¼Ð¾ Ð¸Ð»Ð¸ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ñ‹Ð¹ ÑÐµÑ€Ð²ÐµÑ€.\nerror-javascript-config =\n    Ð’Ð¾Ð·Ð½Ð¸ÐºÐ»Ð° ÑÐµÑ€ÑŒÑ‘Ð·Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ° Ð¸Ð·-Ð·Ð° Ð½ÐµÐ¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾Ð¹ ÐºÐ¾Ð½Ñ„Ð¸Ð³ÑƒÑ€Ð°Ñ†Ð¸Ð¸ JavaScript.\n    Ð•ÑÐ»Ð¸ Ð²Ñ‹ ÑÐ²Ð»ÑÐµÑ‚ÐµÑÑŒ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€Ð¾Ð¼ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¼Ñ‹ Ð¿Ñ€ÐµÐ´Ð»Ð°Ð³Ð°ÐµÐ¼ Ð²Ð°Ð¼ Ð¿Ñ€Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÑŒ Ð´ÐµÑ‚Ð°Ð»Ð¸ Ð¾ÑˆÐ¸Ð±ÐºÐ¸, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð²Ñ‹ÑÑÐ½Ð¸Ñ‚ÑŒ, ÐºÐ°ÐºÐ¾Ð¹ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€ Ð´Ð°Ð» ÑÐ±Ð¾Ð¹.\n    Ð’Ñ‹ Ñ‚Ð°ÐºÐ¶Ðµ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÑŒÑÑ Ð·Ð° Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ðº Ð²Ð¸ÐºÐ¸ Ruffle.\nerror-wasm-not-found =\n    Ruffle Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ð¹ ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚ Ñ„Ð°Ð¹Ð»Ð° \".wasm\".\n    Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, ÑƒÐ±ÐµÐ´Ð¸Ñ‚ÐµÑÑŒ, Ñ‡Ñ‚Ð¾ Ñ„Ð°Ð¹Ð» Ð±Ñ‹Ð» Ð·Ð°Ð³Ñ€ÑƒÐ¶ÐµÐ½ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾.\n    Ð•ÑÐ»Ð¸ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð° Ð½Ðµ ÑƒÑÑ‚Ñ€Ð°Ð½ÑÐµÑ‚ÑÑ, Ð²Ð°Ð¼ Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ñ‚ÑŒÑÑ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÑƒ \"publicPath\": Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ðº Ð²Ð¸ÐºÐ¸ Ruffle.\nerror-wasm-mime-type =\n    Ruffle ÑÑ‚Ð¾Ð»ÐºÐ½ÑƒÐ»ÑÑ Ñ ÑÐµÑ€ÑŒÑ‘Ð·Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð¾Ð¹ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸.\n    Ð­Ñ‚Ð¾Ñ‚ Ð²ÐµÐ±-ÑÐµÑ€Ð²ÐµÑ€ Ð½Ðµ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ Ñ„Ð°Ð¹Ð»Ñ‹ \".wasm\" Ñ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ñ‹Ð¼ Ñ‚Ð¸Ð¿Ð¾Ð¼ MIME.\n    Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ð·Ð° Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ðº Ð²Ð¸ÐºÐ¸ Ruffle.\nerror-swf-fetch =\n    Ruffle Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ SWF-Ñ„Ð°Ð¹Ð» Flash.\n    Ð’ÐµÑ€Ð¾ÑÑ‚Ð½ÐµÐµ Ð²ÑÐµÐ³Ð¾, Ñ„Ð°Ð¹Ð» Ð±Ð¾Ð»ÑŒÑˆÐµ Ð½Ðµ ÑÑƒÑ‰ÐµÑÑ‚Ð²ÑƒÐµÑ‚, Ð¿Ð¾ÑÑ‚Ð¾Ð¼Ñƒ Ruffle Ð½ÐµÑ‡ÐµÐ³Ð¾ Ð·Ð°Ð³Ñ€ÑƒÐ¶Ð°Ñ‚ÑŒ.\n    ÐŸÐ¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ ÑÐ²ÑÐ·Ð°Ñ‚ÑŒÑÑ Ñ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€Ð¾Ð¼ ÑÐ°Ð¹Ñ‚Ð° Ð´Ð»Ñ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰Ð¸.\nerror-swf-cors =\n    Ruffle Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ SWF-Ñ„Ð°Ð¹Ð» Flash.\n    Ð¡ÐºÐ¾Ñ€ÐµÐµ Ð²ÑÐµÐ³Ð¾, Ð´Ð¾ÑÑ‚ÑƒÐ¿ Ðº Ñ„Ð°Ð¹Ð»Ñƒ Ð±Ñ‹Ð» Ð·Ð°Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð½ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¾Ð¹ CORS.\n    Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ð·Ð° Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ðº Ð²Ð¸ÐºÐ¸ Ruffle.\nerror-wasm-cors =\n    Ruffle Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ð¹ ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚ Ñ„Ð°Ð¹Ð»Ð° \".wasm\".\n    Ð¡ÐºÐ¾Ñ€ÐµÐµ Ð²ÑÐµÐ³Ð¾, Ð´Ð¾ÑÑ‚ÑƒÐ¿ Ðº Ñ„Ð°Ð¹Ð»Ñƒ Ð±Ñ‹Ð» Ð·Ð°Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð½ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¾Ð¹ CORS.\n    Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ð·Ð° Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ðº Ð²Ð¸ÐºÐ¸ Ruffle.\nerror-wasm-invalid =\n    Ruffle ÑÑ‚Ð¾Ð»ÐºÐ½ÑƒÐ»ÑÑ Ñ ÑÐµÑ€ÑŒÑ‘Ð·Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð¾Ð¹ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸.\n    ÐŸÐ¾Ñ…Ð¾Ð¶Ðµ, Ñ‡Ñ‚Ð¾ Ð½Ð° ÑÑ‚Ð¾Ð¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚ Ñ„Ð°Ð¹Ð»Ñ‹ Ð´Ð»Ñ Ð·Ð°Ð¿ÑƒÑÐºÐ° Ruffle Ð¸Ð»Ð¸ Ð¾Ð½Ð¸ Ð½ÐµÐ´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹.\n    Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ð·Ð° Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ðº Ð²Ð¸ÐºÐ¸ Ruffle.\nerror-wasm-download =\n    Ruffle ÑÑ‚Ð¾Ð»ÐºÐ½ÑƒÐ»ÑÑ Ñ ÑÐµÑ€ÑŒÑ‘Ð·Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð¾Ð¹ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸.\n    Ð§Ð°Ñ‰Ðµ Ð²ÑÐµÐ³Ð¾ ÑÑ‚Ð° Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð° ÑƒÑÑ‚Ñ€Ð°Ð½ÑÐµÑ‚ÑÑ ÑÐ°Ð¼Ð° ÑÐ¾Ð±Ð¾ÑŽ, Ð¿Ð¾ÑÑ‚Ð¾Ð¼Ñƒ Ð²Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð¿ÐµÑ€ÐµÐ·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ.\n    Ð•ÑÐ»Ð¸ Ð¾ÑˆÐ¸Ð±ÐºÐ° Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð°ÐµÑ‚ Ð¿Ð¾ÑÐ²Ð»ÑÑ‚ÑŒÑÑ, ÑÐ²ÑÐ¶Ð¸Ñ‚ÐµÑÑŒ Ñ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€Ð¾Ð¼ ÑÐ°Ð¹Ñ‚Ð°.\nerror-wasm-disabled-on-edge =\n    Ruffle Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ð¹ ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚ Ñ„Ð°Ð¹Ð»Ð° \".wasm\".\n    Ð§Ñ‚Ð¾Ð±Ñ‹ Ð¸ÑÐ¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ ÑÑ‚Ñƒ Ð¾ÑˆÐ¸Ð±ÐºÑƒ, Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð² Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ°Ñ… Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð° Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÐµÐ»ÑŒÐ½ÑƒÑŽ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ. Ð­Ñ‚Ð¾ Ð¿Ð¾Ð·Ð²Ð¾Ð»Ð¸Ñ‚ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ñƒ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ðµ WASM-Ñ„Ð°Ð¹Ð»Ñ‹.\n    Ð•ÑÐ»Ð¸ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð° Ð¾ÑÑ‚Ð°Ð»Ð°ÑÑŒ, Ð²Ð°Ð¼ Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ñ‚ÑŒÑÑ Ð´Ñ€ÑƒÐ³Ð¾Ð¹ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€.\nerror-javascript-conflict =\n    Ruffle ÑÑ‚Ð¾Ð»ÐºÐ½ÑƒÐ»ÑÑ Ñ ÑÐµÑ€ÑŒÑ‘Ð·Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð¾Ð¹ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸.\n    ÐŸÐ¾Ñ…Ð¾Ð¶Ðµ, Ñ‡Ñ‚Ð¾ ÑÑ‚Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ ÐºÐ¾Ð½Ñ„Ð»Ð¸ÐºÑ‚ÑƒÑŽÑ‰Ð¸Ð¹ Ñ Ruffle ÐºÐ¾Ð´ JavaScript.\n    Ð•ÑÐ»Ð¸ Ð²Ñ‹ ÑÐ²Ð»ÑÐµÑ‚ÐµÑÑŒ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€Ð¾Ð¼ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¼Ñ‹ Ð¿Ñ€ÐµÐ´Ð»Ð°Ð³Ð°ÐµÐ¼ Ð²Ð°Ð¼ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±Ð¾Ð²Ð°Ñ‚ÑŒ Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Ñ„Ð°Ð¹Ð» Ð½Ð° Ð¿ÑƒÑÑ‚Ð¾Ð¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ.\nerror-javascript-conflict-outdated = Ð’Ñ‹ Ñ‚Ð°ÐºÐ¶Ðµ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±Ð¾Ð²Ð°Ñ‚ÑŒ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÑŽÑŽ Ð²ÐµÑ€ÑÐ¸ÑŽ Ruffle, ÐºÐ¾Ñ‚Ð¾Ñ€Ð°Ñ Ð¼Ð¾Ð¶ÐµÑ‚ Ð¾Ð±Ð¾Ð¹Ñ‚Ð¸ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ñƒ (Ñ‚ÐµÐºÑƒÑ‰Ð°Ñ Ð²ÐµÑ€ÑÐ¸Ñ ÑƒÑÑ‚Ð°Ñ€ÐµÐ»Ð°: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ÑÑ‚Ð¾Ð»ÐºÐ½ÑƒÐ»ÑÑ Ñ ÑÐµÑ€ÑŒÑ‘Ð·Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð¾Ð¹ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸.\n    ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ð¼Ð¾Ð³Ð¾ ÑÑ‚Ð¾Ð³Ð¾ Ð²ÐµÐ±-ÑÐµÑ€Ð²ÐµÑ€Ð° Ð½Ðµ Ð¿Ð¾Ð·Ð²Ð¾Ð»ÑÐµÑ‚ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ñ‚Ñ€ÐµÐ±ÑƒÐµÐ¼Ñ‹Ðµ ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ñ‹ Ð´Ð»Ñ Ð·Ð°Ð¿ÑƒÑÐºÐ° \".wasm\".\n    Ð•ÑÐ»Ð¸ Ð²Ñ‹ ÑÐ²Ð»ÑÐµÑ‚ÐµÑÑŒ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€Ð¾Ð¼ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ð·Ð° Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ðº Ð²Ð¸ÐºÐ¸ Ruffle.\nerror-unknown =\n    Ruffle ÑÑ‚Ð¾Ð»ÐºÐ½ÑƒÐ»ÑÑ Ñ ÑÐµÑ€ÑŒÑ‘Ð·Ð½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð¾Ð¹ Ð¿Ñ€Ð¸ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÐµ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð·Ð¸Ñ‚ÑŒ ÑÑ‚Ð¾Ñ‚ Flash-ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚.\n    { $outdated ->\n        [true] Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€ ÑÐµÑ€Ð²ÐµÑ€Ð°, Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð±Ð¾Ð»ÐµÐµ Ð½Ð¾Ð²ÑƒÑŽ Ð²ÐµÑ€ÑÐ¸ÑŽ Ruffle (Ñ‚ÐµÐºÑƒÑ‰Ð°Ñ Ð²ÐµÑ€ÑÐ¸Ñ ÑƒÑÑ‚Ð°Ñ€ÐµÐ»Ð°: { $buildDate }).\n       *[false] Ð­Ñ‚Ð¾Ð³Ð¾ Ð½Ðµ Ð´Ð¾Ð»Ð¶Ð½Ð¾ Ð¿Ñ€Ð¾Ð¸ÑÑ…Ð¾Ð´Ð¸Ñ‚ÑŒ, Ð¿Ð¾ÑÑ‚Ð¾Ð¼Ñƒ Ð¼Ñ‹ Ð±ÑƒÐ´ÐµÐ¼ Ð¾Ñ‡ÐµÐ½ÑŒ Ð¿Ñ€Ð¸Ð·Ð½Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹, ÐµÑÐ»Ð¸ Ð²Ñ‹ ÑÐ¾Ð¾Ð±Ñ‰Ð¸Ñ‚Ðµ Ð½Ð°Ð¼ Ð¾Ð± Ð¾ÑˆÐ¸Ð±ÐºÐµ!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ ÑÑ‚Ð¾Ñ‚ Ñ„Ð°Ð¹Ð» ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ?\nsave-reload-prompt =\n    Ð•Ð´Ð¸Ð½ÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ð¹ ÑÐ¿Ð¾ÑÐ¾Ð± { $action ->\n        [delete] ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ\n       *[replace] Ð·Ð°Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ\n    } ÑÑ‚Ð¾Ñ‚ Ñ„Ð°Ð¹Ð» ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ Ð±ÐµÐ· Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾Ð³Ð¾ ÐºÐ¾Ð½Ñ„Ð»Ð¸ÐºÑ‚Ð° â€“ Ð¿ÐµÑ€ÐµÐ·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Ð·Ð°Ð¿ÑƒÑ‰ÐµÐ½Ð½Ñ‹Ð¹ ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚. Ð’ÑÑ‘ Ñ€Ð°Ð²Ð½Ð¾ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ?\nsave-download = Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ\nsave-replace = Ð—Ð°Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ\nsave-delete = Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ\nsave-backup-all = Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ Ð²ÑÐµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ\n",
    "volume-controls.ftl": "volume-controls = Ð ÐµÐ³ÑƒÐ»Ð¸Ñ€Ð¾Ð²ÐºÐ° Ð³Ñ€Ð¾Ð¼ÐºÐ¾ÑÑ‚Ð¸\nvolume-controls-mute = Ð‘ÐµÐ· Ð·Ð²ÑƒÐºÐ°\nvolume-controls-volume = Ð“Ñ€Ð¾Ð¼ÐºÐ¾ÑÑ‚ÑŒ\n"
  },
  "sk-SK": {
    "context_menu.ftl": "context-menu-download-swf = StiahnuÅ¥ .swf\ncontext-menu-copy-debug-info = SkopÃ­rovaÅ¥ debug info\ncontext-menu-open-save-manager = OtvoriÅ¥ sprÃ¡vcu uloÅ¾enÃ­\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] O Ruffle rozÅ¡Ã­renÃ­ ({ $version })\n       *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = SkryÅ¥ menu\ncontext-menu-exit-fullscreen = UkonÄiÅ¥ reÅ¾im celej obrazovky\ncontext-menu-enter-fullscreen = PrejsÅ¥ do reÅ¾imu celej obrazovky\ncontext-menu-volume-controls = OvlÃ¡danie hlasitosti\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nemohol spustiÅ¥ Flash vloÅ¾enÃ½ na tejto strÃ¡nke.\n    MÃ´Å¾ete sa pokÃºsiÅ¥ otvoriÅ¥ sÃºbor na samostatnej karte, aby ste sa vyhli tomuto problÃ©mu.\npanic-title = NieÄo sa pokazilo :(\nmore-info = Viac informÃ¡ciÃ­\nrun-anyway = SpustiÅ¥ aj tak\ncontinue = PokraÄovaÅ¥\nreport-bug = NahlÃ¡siÅ¥ chybu\nupdate-ruffle = AktualizovaÅ¥ Ruffle\nruffle-demo = Web Demo\nruffle-desktop = DesktopovÃ¡ aplikÃ¡cia\nruffle-wiki = ZobraziÅ¥ Ruffle Wiki\nenable-hardware-acceleration = ZdÃ¡ sa, Å¾e hardvÃ©rovÃ¡ akcelerÃ¡cia nie je povolenÃ¡. Aj keÄ Ruffle funguje sprÃ¡vne, mÃ´Å¾e byÅ¥ neprimerane pomalÃ½. Ako povoliÅ¥ hardvÃ©rovÃº akcelerÃ¡ciu zistÃ­te na tomto odkaze.\nview-error-details = ZobraziÅ¥ podrobnosti o chybe\nopen-in-new-tab = OtvoriÅ¥ na novej karte\nclick-to-unmute = KliknutÃ­m zapnete zvuk\nerror-file-protocol =\n    ZdÃ¡ sa, Å¾e pouÅ¾Ã­vate Ruffle na protokole \"file:\".\n    To nie je moÅ¾nÃ©, pretoÅ¾e prehliadaÄe blokujÃº fungovanie mnohÃ½ch funkciÃ­ z bezpeÄnostnÃ½ch dÃ´vodov.\n    Namiesto toho vÃ¡m odporÃºÄame nastaviÅ¥ lokÃ¡lny server alebo pouÅ¾iÅ¥ web demo Äi desktopovÃº aplikÃ¡ciu.\nerror-javascript-config =\n    Ruffle narazil na problÃ©m v dÃ´sledku nesprÃ¡vnej konfigurÃ¡cie JavaScriptu.\n    Ak ste sprÃ¡vcom servera, odporÃºÄame vÃ¡m skontrolovaÅ¥ podrobnosti o chybe, aby ste zistili, ktorÃ½ parameter je chybnÃ½.\n    Pomoc mÃ´Å¾ete zÃ­skaÅ¥ aj na wiki Ruffle.\nerror-wasm-not-found =\n    Ruffle sa nepodarilo naÄÃ­taÅ¥ poÅ¾adovanÃ½ komponent sÃºboru â€ž.wasmâ€œ.\n    Ak ste sprÃ¡vcom servera, skontrolujte, Äi bol sÃºbor sprÃ¡vne nahranÃ½.\n    Ak problÃ©m pretrvÃ¡va, moÅ¾no budete musieÅ¥ pouÅ¾iÅ¥ nastavenie â€žpublicPathâ€œ: pomoc nÃ¡jdete na wiki Ruffle.\nerror-wasm-mime-type =\n    Ruffle narazil na problÃ©m pri pokuse o inicializÃ¡ciu.\n    Tento webovÃ½ server neposkytuje sÃºbory â€ž.wasmâ€œ so sprÃ¡vnym typom MIME.\n    Ak ste sprÃ¡vcom servera, pomoc nÃ¡jdete na Ruffle wiki.\nerror-swf-fetch =\n    Ruffle sa nepodarilo naÄÃ­taÅ¥ SWF sÃºbor Flash.\n    NajpravdepodobnejÅ¡Ã­m dÃ´vodom je, Å¾e sÃºbor uÅ¾ neexistuje, takÅ¾e Ruffle nemÃ¡ Äo naÄÃ­taÅ¥.\n    SkÃºste poÅ¾iadaÅ¥ o pomoc sprÃ¡vcu webovej lokality.\nerror-swf-cors =\n    Ruffle sa nepodarilo naÄÃ­taÅ¥ SWF sÃºbor Flash.\n    PrÃ­stup k naÄÃ­taniu bol pravdepodobne zablokovanÃ½ politikou CORS.\n    Ak ste sprÃ¡vcom servera, pomoc nÃ¡jdete na Ruffle wiki.\nerror-wasm-cors =\n    Ruffle sa nepodarilo naÄÃ­taÅ¥ poÅ¾adovanÃ½ komponent sÃºboru â€ž.wasmâ€œ.\n    PrÃ­stup k naÄÃ­taniu bol pravdepodobne zablokovanÃ½ politikou CORS.\n    Ak ste sprÃ¡vcom servera, pomoc nÃ¡jdete na Ruffle wiki.\nerror-wasm-invalid =\n    Ruffle narazil na problÃ©m pri pokuse o inicializÃ¡ciu.\n    ZdÃ¡ sa, Å¾e na tejto strÃ¡nke chÃ½bajÃº alebo sÃº neplatnÃ© sÃºbory na spustenie Ruffle.\n    Ak ste sprÃ¡vcom servera, pomoc nÃ¡jdete na Ruffle wiki.\nerror-wasm-download =\n    Ruffle narazil na problÃ©m pri pokuse o inicializÃ¡ciu.\n    ProblÃ©m sa mÃ´Å¾e vyrieÅ¡iÅ¥ aj sÃ¡m, takÅ¾e mÃ´Å¾ete skÃºsiÅ¥ strÃ¡nku naÄÃ­taÅ¥ znova.\n    V opaÄnom prÃ­pade kontaktujte administrÃ¡tora strÃ¡nky.\nerror-wasm-disabled-on-edge =\n    Ruffle sa nepodarilo naÄÃ­taÅ¥ poÅ¾adovanÃ½ komponent sÃºboru â€ž.wasmâ€œ.\n    Ak chcete tento problÃ©m vyrieÅ¡iÅ¥, skÃºste otvoriÅ¥ nastavenia prehliadaÄa, kliknite na poloÅ¾ku â€žOchrana osobnÃ½ch Ãºdajov, vyhÄ¾adÃ¡vanie a sluÅ¾byâ€œ, prejdite nadol a vypnite moÅ¾nosÅ¥ â€žZvÃ½Å¡te svoju bezpeÄnosÅ¥ na webeâ€œ.\n    VÃ¡Å¡mu prehliadaÄu to umoÅ¾nÃ­ naÄÃ­taÅ¥ poÅ¾adovanÃ© sÃºbory â€ž.wasmâ€œ.\n    Ak problÃ©m pretrvÃ¡va, moÅ¾no budete musieÅ¥ pouÅ¾iÅ¥ inÃ½ prehliadaÄ.\nerror-javascript-conflict =\n    Ruffle narazil na problÃ©m pri pokuse o inicializÃ¡ciu.\n    ZdÃ¡ sa, Å¾e tÃ¡to strÃ¡nka pouÅ¾Ã­va kÃ³d JavaScript, ktorÃ½ je v konflikte s Ruffle.\n    Ak ste sprÃ¡vcom servera, odporÃºÄame vÃ¡m skÃºsiÅ¥ naÄÃ­taÅ¥ sÃºbor na prÃ¡zdnu strÃ¡nku.\nerror-javascript-conflict-outdated = MÃ´Å¾ete sa tieÅ¾ pokÃºsiÅ¥ nahraÅ¥ novÅ¡iu verziu Ruffle, ktorÃ¡ mÃ´Å¾e danÃ½ problÃ©m vyrieÅ¡iÅ¥ (aktuÃ¡lny build je zastaranÃ½: { $buildDate }).\nerror-csp-conflict =\n    Ruffle narazil na problÃ©m pri pokuse o inicializÃ¡ciu.\n    ZÃ¡sady zabezpeÄenia obsahu tohto webovÃ©ho servera nepovoÄ¾ujÃº spustenie poÅ¾adovanÃ©ho komponentu â€ž.wasmâ€œ.\n    Ak ste sprÃ¡vcom servera, pomoc nÃ¡jdete na Ruffle wiki.\nerror-unknown =\n    Ruffle narazil na problÃ©m pri pokuse zobraziÅ¥ tento Flash obsah.\n    { $outdated ->\n         [true] Ak ste sprÃ¡vcom servera, skÃºste nahraÅ¥ novÅ¡iu verziu Ruffle (aktuÃ¡lny build je zastaranÃ½: { $buildDate }).\n        *[false] Toto by sa nemalo staÅ¥, takÅ¾e by sme naozaj ocenili, keby ste mohli nahlÃ¡siÅ¥ chybu!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Naozaj chcete odstrÃ¡niÅ¥ tento sÃºbor s uloÅ¾enÃ½mi pozÃ­ciami?\nsave-reload-prompt =\n    JedinÃ½ spÃ´sob, ako { $action ->\n         [delete] vymazaÅ¥\n        *[replace] nahradiÅ¥\n    } tento sÃºbor s uloÅ¾enÃ½mi pozÃ­ciami bez potenciÃ¡lneho konfliktu je opÃ¤tovnÃ© naÄÃ­tanie tohto obsahu. Chcete napriek tomu pokraÄovaÅ¥?\nsave-download = StiahnuÅ¥\nsave-replace = NahradiÅ¥\nsave-delete = VymazaÅ¥\nsave-backup-all = StiahnuÅ¥ vÅ¡etky sÃºbory s uloÅ¾enÃ½mi pozÃ­ciami\n",
    "volume-controls.ftl": "volume-controls = OvlÃ¡danie hlasitosti\nvolume-controls-mute = StlmiÅ¥\nvolume-controls-volume = HlasitosÅ¥\n"
  },
  "sv-SE": {
    "context_menu.ftl": "context-menu-download-swf = Ladda ner .swf\ncontext-menu-copy-debug-info = Kopiera felsÃ¶kningsinfo\ncontext-menu-open-save-manager = Ã–ppna Sparhanteraren\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Om Ruffle-tillÃ¤gget ({ $version })\n       *[other] Om Ruffle ({ $version })\n    }\ncontext-menu-hide = DÃ¶lj denna meny\ncontext-menu-exit-fullscreen = Avsluta helskÃ¤rm\ncontext-menu-enter-fullscreen = HelskÃ¤rm\ncontext-menu-volume-controls = Ljudkontroller\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle kunde inte kÃ¶ra det inbÃ¤ddade FlashinnehÃ¥llet pÃ¥ denna sida.\n    Du kan fÃ¶rsÃ¶ka Ã¶ppna filen i en separat flik fÃ¶r att kringgÃ¥ problemet.\npanic-title = NÃ¥got gick fel :(\nmore-info = Mer info\nrun-anyway = KÃ¶r Ã¤ndÃ¥\ncontinue = FortsÃ¤tt\nreport-bug = Rapportera Bugg\nupdate-ruffle = Uppdatera Ruffle\nruffle-demo = Webbdemo\nruffle-desktop = Skrivbordsprogram\nruffle-wiki = Se Ruffle-wiki\nenable-hardware-acceleration = Det verkar som att hÃ¥rdvaruacceleration inte Ã¤r pÃ¥. Ruffle kan fortfarande fungera men kan vara orimligt lÃ¥ngsam. Du kan ta reda pÃ¥ hur man sÃ¤tter pÃ¥ hÃ¥rdvaruacceleration genom att fÃ¶lja denna lÃ¤nk.\nview-error-details = Visa Felinformation\nopen-in-new-tab = Ã–ppna i en ny flik\nclick-to-unmute = Klicka fÃ¶r ljud\nerror-file-protocol =\n    Det verkar som att du kÃ¶r Ruffle pÃ¥ \"fil:\"-protokollet.\n    Detta fungerar inte eftersom webblÃ¤sare blockerar mÃ¥nga funktioner frÃ¥n att fungera av sÃ¤kerhetsskÃ¤l.\n    IstÃ¤llet bjuder vi in dig att sÃ¤tta upp en lokal server eller antingen anvÃ¤nda webbdemon eller skrivbordsprogrammet.\nerror-javascript-config =\n    Ruffle har stÃ¶tt pÃ¥ ett stort fel pÃ¥ grund av en felaktig JavaScript-konfiguration.\n    Om du Ã¤r serveradministratÃ¶ren bjuder vi in dig att kontrollera feldetaljerna fÃ¶r att ta reda pÃ¥ vilken parameter som Ã¤r felaktig.\n    Du kan ocksÃ¥ konsultera Ruffle-wikin fÃ¶r hjÃ¤lp.\nerror-wasm-not-found =\n    Ruffle misslyckades ladda \".wasm\"-filkomponenten.\n    Om du Ã¤r serveradministratÃ¶ren se till att filen har laddats upp korrekt.\n    Om problemet kvarstÃ¥r kan du behÃ¶va anvÃ¤nda instÃ¤llningen \"publicPath\": konsultera vÃ¤nligen Ruffle-wikin fÃ¶r hjÃ¤lp.\nerror-wasm-mime-type =\n    Ruffle har stÃ¶tt pÃ¥ ett stort fel under initialiseringen.\n    Denna webbserver serverar inte \".wasm\"-filer med korrekt MIME-typ.\n    Om du Ã¤r serveradministratÃ¶ren konsultera vÃ¤nligen Ruffle-wikin fÃ¶r hjÃ¤lp.\nerror-swf-fetch =\n    Ruffle misslyckades ladda SWF-filen.\n    Det mest sannolika skÃ¤let Ã¤r att filen inte lÃ¤ngre existerar, sÃ¥ det finns inget fÃ¶r Ruffle att kÃ¶ra.\n    FÃ¶rsÃ¶k att kontakta webbplatsadministratÃ¶ren fÃ¶r hjÃ¤lp.\nerror-swf-cors =\n    Ruffle misslyckades ladda SWF-filen.\n    Ã…tkomst att hÃ¤mta har sannolikt blockerats av CORS-policy.\n    Om du Ã¤r serveradministratÃ¶ren konsultera vÃ¤nligen Ruffle-wikin fÃ¶r hjÃ¤lp.\nerror-wasm-cors =\n    Ruffle misslyckades ladda \".wasm\"-filkomponenten.\n    Ã…tkomst att hÃ¤mta har sannolikt blockerats av CORS-policy.\n    Om du Ã¤r serveradministratÃ¶ren konsultera vÃ¤nligen Ruffle-wikin fÃ¶r hjÃ¤lp.\nerror-wasm-invalid =\n    Ruffle har stÃ¶tt pÃ¥ ett stort fel under initialiseringen.\n    Det verkar som att den hÃ¤r sidan har saknade eller ogiltiga filer fÃ¶r att kÃ¶ra Ruffle.\n    Om du Ã¤r serveradministratÃ¶ren konsultera vÃ¤nligen Ruffle-wikin fÃ¶r hjÃ¤lp.\nerror-wasm-download =\n    Ruffle har stÃ¶tt pÃ¥ ett stort fel under initialiseringen.\n    Detta kan ofta lÃ¶sas av sig sjÃ¤lv sÃ¥ du kan prova att ladda om sidan.\n    Kontakta annars vÃ¤nligen webbplatsens administratÃ¶r.\nerror-wasm-disabled-on-edge =\n    Ruffle misslyckades ladda \".wasm\"-filkomponenten.\n    FÃ¶r att Ã¥tgÃ¤rda detta fÃ¶rsÃ¶k att Ã¶ppna webblÃ¤sarens instÃ¤llningar, klicka pÃ¥ \"Sekretess, sÃ¶kning och tjÃ¤nster\", blÃ¤ddra ner och stÃ¤ng av \"FÃ¶rbÃ¤ttra sÃ¤kerheten pÃ¥ webben\".\n    Detta tillÃ¥ter din webblÃ¤sare ladda \".wasm\"-filerna.\n    Om problemet kvarstÃ¥r kan du behÃ¶va anvÃ¤nda en annan webblÃ¤sare.\nerror-javascript-conflict =\n    Ruffle har stÃ¶tt pÃ¥ ett stort fel under initialiseringen.\n    Det verkar som att den hÃ¤r sidan anvÃ¤nder JavaScript-kod som stÃ¶r Ruffle.\n    Om du Ã¤r serveradministratÃ¶ren bjuder vi in dig att fÃ¶rsÃ¶ka kÃ¶ra filen pÃ¥ en blank sida.\nerror-javascript-conflict-outdated = Du kan ocksÃ¥ fÃ¶rsÃ¶ka ladda upp en nyare version av Ruffle, vilket kan kringgÃ¥ problemet (nuvarande version Ã¤r utdaterad: { $buildDate }).\nerror-csp-conflict =\n    Ruffle har stÃ¶tt pÃ¥ ett stort fel under initialiseringen.\n    Denna webbservers Content Security Policy tillÃ¥ter inte \".wasm\"-komponenten att kÃ¶ra.\n    Om du Ã¤r serveradministratÃ¶ren konsultera vÃ¤nligen Ruffle-wikin fÃ¶r hjÃ¤lp.\nerror-unknown =\n    Ruffle har stÃ¶tt pÃ¥ ett stort fel medan den fÃ¶rsÃ¶kte visa FlashinnehÃ¥llet.\n    { $outdated ->\n        [true] Om du Ã¤r serveradministratÃ¶ren fÃ¶rsÃ¶k att ladda upp en nyare version av Ruffle (nuvarande version Ã¤r utdaterad: { $buildDate }).\n       *[false] Detta Ã¤r inte tÃ¤nkt att hÃ¤nda sÃ¥ vi skulle verkligen uppskatta om du kunde rapportera in en bugg!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Ã„r du sÃ¤ker pÃ¥ att du vill radera sparfilen?\nsave-reload-prompt =\n    Det enda sÃ¤ttet att { $action ->\n        [delete] radera\n       *[replace] ersÃ¤tta\n    } denna sparfil utan potentiell konflikt Ã¤r att ladda om innehÃ¥llet. Vill du fortsÃ¤tta Ã¤ndÃ¥?\nsave-download = Ladda ner\nsave-replace = ErsÃ¤tt\nsave-delete = Radera\nsave-backup-all = Ladda ner alla sparfiler\n",
    "volume-controls.ftl": "volume-controls = Ljudkontroller\nvolume-controls-mute = StÃ¤ng av ljud\nvolume-controls-volume = Volym\n"
  },
  "tr-TR": {
    "context_menu.ftl": "context-menu-download-swf = Ä°ndir .swf\ncontext-menu-copy-debug-info = Hata ayÄ±klama bilgisini kopyala\ncontext-menu-open-save-manager = KayÄ±t YÃ¶neticisini AÃ§\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle UzantÄ±sÄ± HakkÄ±nda ({ $version })\n       *[other] Ruffle HakkÄ±nda ({ $version })\n    }\ncontext-menu-hide = Bu menÃ¼yÃ¼ gizle\ncontext-menu-exit-fullscreen = Tam ekrandan Ã§Ä±k\ncontext-menu-enter-fullscreen = Tam ekran yap\ncontext-menu-volume-controls = Ses kontrolleri\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle, bu sayfaya gÃ¶mÃ¼lÃ¼ Flash'Ä± Ã§alÄ±ÅŸtÄ±ramadÄ±.\n    Bu sorunu ortadan kaldÄ±rmak iÃ§in dosyayÄ± ayrÄ± bir sekmede aÃ§mayÄ± deneyebilirsiniz.\npanic-title = Bir ÅŸeyler yanlÄ±ÅŸ gitti :(\nmore-info = Daha fazla bilgi\nrun-anyway = Yine de Ã§alÄ±ÅŸtÄ±r\ncontinue = Devam et\nreport-bug = Hata Bildir\nupdate-ruffle = Ruffle'Ä± GÃ¼ncelle\nruffle-demo = AÄŸ Demosu\nruffle-desktop = MasaÃ¼stÃ¼ UygulamasÄ±\nruffle-wiki = Ruffle Wiki'yi GÃ¶rÃ¼ntÃ¼le\nenable-hardware-acceleration = GÃ¶rÃ¼nÃ¼ÅŸe gÃ¶re donanÄ±m hÄ±zlandÄ±rma etkin deÄŸil. Ruffle Ã§alÄ±ÅŸabilir ancak fazlasÄ±yla yavaÅŸ olabilir. DonanÄ±m hÄ±zlandÄ±rmayÄ± nasÄ±l etkinleÅŸtirebiliceÄŸiniz hakkÄ±nda bu linkten bilgi alabilirsiniz.\nview-error-details = Hata AyrÄ±ntÄ±larÄ±nÄ± GÃ¶rÃ¼ntÃ¼le\nopen-in-new-tab = Yeni sekmede aÃ§\nclick-to-unmute = Sesi aÃ§mak iÃ§in tÄ±klayÄ±n\nerror-file-protocol =\n    GÃ¶rÃ¼nÃ¼ÅŸe gÃ¶re Ruffle'Ä± \"dosya:\" protokolÃ¼nde Ã§alÄ±ÅŸtÄ±rÄ±yorsunuz.\n    TarayÄ±cÄ±lar gÃ¼venlik nedenleriyle birÃ§ok Ã¶zelliÄŸin Ã§alÄ±ÅŸmasÄ±nÄ± engellediÄŸinden bu iÅŸe yaramaz.\n    Bunun yerine, sizi yerel bir sunucu kurmaya veya aÄŸÄ±n demosunu ya da masaÃ¼stÃ¼ uygulamasÄ±nÄ± kullanmaya davet ediyoruz.\nerror-javascript-config =\n    Ruffle, yanlÄ±ÅŸ bir JavaScript yapÄ±landÄ±rmasÄ± nedeniyle Ã¶nemli bir sorunla karÅŸÄ±laÅŸtÄ±.\n    Sunucu yÃ¶neticisiyseniz, hangi parametrenin hatalÄ± olduÄŸunu bulmak iÃ§in sizi hata ayrÄ±ntÄ±larÄ±nÄ± kontrol etmeye davet ediyoruz.\n    YardÄ±m iÃ§in Ruffle wiki'sine de baÅŸvurabilirsiniz.\nerror-wasm-not-found =\n    Ruffle gerekli \".wasm\" dosya bileÅŸenini yÃ¼kleyemedi.\n    Sunucu yÃ¶neticisi iseniz, lÃ¼tfen dosyanÄ±n doÄŸru bir ÅŸekilde yÃ¼klendiÄŸinden emin olun.\n    Sorun devam ederse, \"publicPath\" ayarÄ±nÄ± kullanmanÄ±z gerekebilir: yardÄ±m iÃ§in lÃ¼tfen Ruffle wiki'sine baÅŸvurun.\nerror-wasm-mime-type =\n    Ruffle, baÅŸlatmaya Ã§alÄ±ÅŸÄ±rken Ã¶nemli bir sorunla karÅŸÄ±laÅŸtÄ±.\n    Bu web sunucusu, doÄŸru MIME tipinde \".wasm\" dosyalarÄ± sunmuyor.\n    Sunucu yÃ¶neticisiyseniz, yardÄ±m iÃ§in lÃ¼tfen Ruffle wiki'sine baÅŸvurun.\nerror-swf-fetch =\n    Ruffle, Flash SWF dosyasÄ±nÄ± yÃ¼kleyemedi.\n    Bunun en olasÄ± nedeni, dosyanÄ±n artÄ±k mevcut olmamasÄ± ve bu nedenle Ruffle'Ä±n yÃ¼kleyeceÄŸi hiÃ§bir ÅŸeyin olmamasÄ±dÄ±r.\n    YardÄ±m iÃ§in web sitesi yÃ¶neticisiyle iletiÅŸime geÃ§meyi deneyin.\nerror-swf-cors =\n    Ruffle, Flash SWF dosyasÄ±nÄ± yÃ¼kleyemedi.\n    Getirme eriÅŸimi muhtemelen CORS politikasÄ± tarafÄ±ndan engellenmiÅŸtir.\n    Sunucu yÃ¶neticisiyseniz, yardÄ±m iÃ§in lÃ¼tfen Ruffle wiki'sine baÅŸvurun.\nerror-wasm-cors =\n    Ruffle gerekli \".wasm\" dosya bileÅŸenini yÃ¼kleyemedi.\n    Getirme eriÅŸimi muhtemelen CORS politikasÄ± tarafÄ±ndan engellenmiÅŸtir.\n    Sunucu yÃ¶neticisiyseniz, yardÄ±m iÃ§in lÃ¼tfen Ruffle wiki'sine baÅŸvurun.\nerror-wasm-invalid =\n    Ruffle, baÅŸlatmaya Ã§alÄ±ÅŸÄ±rken Ã¶nemli bir sorunla karÅŸÄ±laÅŸtÄ±.\n    GÃ¶rÃ¼nÃ¼ÅŸe gÃ¶re bu sayfada Ruffle'Ä± Ã§alÄ±ÅŸtÄ±rmak iÃ§in eksik veya geÃ§ersiz dosyalar var.\n    Sunucu yÃ¶neticisiyseniz, yardÄ±m iÃ§in lÃ¼tfen Ruffle wiki'sine baÅŸvurun.\nerror-wasm-download =\n    Ruffle, baÅŸlatmaya Ã§alÄ±ÅŸÄ±rken Ã¶nemli bir sorunla karÅŸÄ±laÅŸtÄ±.\n    Bu genellikle kendi kendine Ã§Ã¶zÃ¼lebilir, bu nedenle sayfayÄ± yeniden yÃ¼klemeyi deneyebilirsiniz.\n    Aksi takdirde, lÃ¼tfen site yÃ¶neticisiyle iletiÅŸime geÃ§in.\nerror-wasm-disabled-on-edge =\n    Ruffle gerekli \".wasm\" dosya bileÅŸenini yÃ¼kleyemedi.\n    Bunu dÃ¼zeltmek iÃ§in tarayÄ±cÄ±nÄ±zÄ±n ayarlarÄ±nÄ± aÃ§Ä±n, \"Gizlilik, arama ve hizmetler\"i tÄ±klayÄ±n, aÅŸaÄŸÄ± kaydÄ±rÄ±n ve \"Web'de gÃ¼venliÄŸinizi artÄ±rÄ±n\"Ä± kapatmayÄ± deneyin.\n    Bu, tarayÄ±cÄ±nÄ±zÄ±n gerekli \".wasm\" dosyalarÄ±nÄ± yÃ¼klemesine izin verecektir.\n    Sorun devam ederse, farklÄ± bir tarayÄ±cÄ± kullanmanÄ±z gerekebilir.\nerror-javascript-conflict =\n    Ruffle, baÅŸlatmaya Ã§alÄ±ÅŸÄ±rken Ã¶nemli bir sorunla karÅŸÄ±laÅŸtÄ±.\n    GÃ¶rÃ¼nÃ¼ÅŸe gÃ¶re bu sayfa, Ruffle ile Ã§akÄ±ÅŸan JavaScript kodu kullanÄ±yor.\n    Sunucu yÃ¶neticisiyseniz, sizi dosyayÄ± boÅŸ bir sayfaya yÃ¼klemeyi denemeye davet ediyoruz.\nerror-javascript-conflict-outdated = AyrÄ±ca sorunu giderebilecek daha yeni bir Ruffle sÃ¼rÃ¼mÃ¼ yÃ¼klemeyi de deneyebilirsiniz (mevcut yapÄ±m eskimiÅŸ: { $buildDate }).\nerror-csp-conflict =\n    Ruffle, baÅŸlatmaya Ã§alÄ±ÅŸÄ±rken Ã¶nemli bir sorunla karÅŸÄ±laÅŸtÄ±.\n    Bu web sunucusunun Ä°Ã§erik GÃ¼venliÄŸi PolitikasÄ±, gerekli \".wasm\" bileÅŸeninin Ã§alÄ±ÅŸmasÄ±na izin vermiyor.\n    Sunucu yÃ¶neticisiyseniz, yardÄ±m iÃ§in lÃ¼tfen Ruffle wiki'sine bakÄ±n.\nerror-unknown =\n    Ruffle, bu Flash iÃ§eriÄŸini gÃ¶rÃ¼ntÃ¼lemeye Ã§alÄ±ÅŸÄ±rken Ã¶nemli bir sorunla karÅŸÄ±laÅŸtÄ±.\n    { $outdated ->\n        [true] Sunucu yÃ¶neticisiyseniz, lÃ¼tfen Ruffle'Ä±n daha yeni bir sÃ¼rÃ¼mÃ¼nÃ¼ yÃ¼klemeyi deneyin (mevcut yapÄ±m eskimiÅŸ: { $buildDate }).\n       *[false] Bunun olmamasÄ± gerekiyor, bu yÃ¼zden bir hata bildirebilirseniz Ã§ok memnun oluruz!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Bu kayÄ±t dosyasÄ±nÄ± silmek istediÄŸinize emin misiniz?\nsave-reload-prompt =\n    Bu kaydetme dosyasÄ±nÄ± potansiyel Ã§akÄ±ÅŸma olmadan { $action ->\n        [delete] silmenin\n       *[replace] deÄŸiÅŸtirmenin\n    } tek yolu, bu iÃ§eriÄŸi yeniden yÃ¼klemektir. Yine de devam etmek istiyor musunuz?\nsave-download = Ä°ndir\nsave-replace = DeÄŸiÅŸtir\nsave-delete = Sil\nsave-backup-all = TÃ¼m kayÄ±t dosyalarÄ±nÄ± indir\n",
    "volume-controls.ftl": "volume-controls = Ses kontrolleri\nvolume-controls-mute = Sustur\nvolume-controls-volume = Ses\n"
  },
  "zh-CN": {
    "context_menu.ftl": "context-menu-download-swf = ä¸‹è½½ .swf\ncontext-menu-copy-debug-info = å¤åˆ¶è°ƒè¯•ä¿¡æ¯\ncontext-menu-open-save-manager = æ‰“å¼€å­˜æ¡£ç®¡ç†å™¨\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] å…³äºŽ Ruffle æ‰©å±• ({ $version })\n       *[other] å…³äºŽ Ruffle ({ $version })\n    }\ncontext-menu-hide = éšè—æ­¤èœå•\ncontext-menu-exit-fullscreen = é€€å‡ºå…¨å±\ncontext-menu-enter-fullscreen = è¿›å…¥å…¨å±\ncontext-menu-volume-controls = éŸ³é‡æŽ§åˆ¶\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle æ— æ³•è¿è¡ŒåµŒå…¥åœ¨æ­¤é¡µé¢ä¸­çš„ Flashã€‚\n    æ‚¨å¯ä»¥å°è¯•åœ¨å•ç‹¬çš„æ ‡ç­¾é¡µä¸­æ‰“å¼€è¯¥æ–‡ä»¶ï¼Œä»¥å›žé¿æ­¤é—®é¢˜ã€‚\npanic-title = å‡ºäº†äº›é—®é¢˜ :(\nmore-info = æ›´å¤šä¿¡æ¯\nrun-anyway = ä»ç„¶è¿è¡Œ\ncontinue = ç»§ç»­\nreport-bug = åé¦ˆé—®é¢˜\nupdate-ruffle = æ›´æ–° Ruffle\nruffle-demo = ç½‘é¡µæ¼”ç¤º\nruffle-desktop = æ¡Œé¢åº”ç”¨ç¨‹åº\nruffle-wiki = æŸ¥çœ‹ Ruffle Wiki\nenable-hardware-acceleration = çœ‹èµ·æ¥ç¡¬ä»¶åŠ é€Ÿæœªå¯ç”¨ã€‚è™½ç„¶ Ruffle å¯èƒ½è¿è¡Œï¼Œä½†å¯èƒ½ä¼šéžå¸¸æ…¢ã€‚æ‚¨å¯ä»¥é€šè¿‡æ­¤é“¾æŽ¥äº†è§£å¯ç”¨ç¡¬ä»¶åŠ é€Ÿçš„æ–¹æ³•ã€‚\nview-error-details = æŸ¥çœ‹é”™è¯¯è¯¦æƒ…\nopen-in-new-tab = åœ¨æ–°æ ‡ç­¾é¡µä¸­æ‰“å¼€\nclick-to-unmute = ç‚¹å‡»å–æ¶ˆé™éŸ³\nerror-file-protocol =\n    çœ‹æ¥æ‚¨æ­£åœ¨ \"file:\" åè®®ä¸Šä½¿ç”¨ Ruffleã€‚\n    ç”±äºŽæµè§ˆå™¨ä»¥å®‰å…¨åŽŸå› é˜»æ­¢è®¸å¤šåŠŸèƒ½ï¼Œå› æ­¤è¿™ä¸èµ·ä½œç”¨ã€‚\n    ç›¸åæˆ‘ä»¬é‚€è¯·æ‚¨è®¾ç½®æœ¬åœ°æœåŠ¡å™¨æˆ–ä½¿ç”¨ç½‘é¡µæ¼”ç¤ºæˆ–æ¡Œé¢åº”ç”¨ç¨‹åºã€‚\nerror-javascript-config =\n    ç”±äºŽé”™è¯¯çš„ JavaScript é…ç½®ï¼ŒRuffle é‡åˆ°äº†ä¸€ä¸ªé‡å¤§é—®é¢˜ã€‚\n    å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œæˆ‘ä»¬é‚€è¯·æ‚¨æ£€æŸ¥é”™è¯¯è¯¦ç»†ä¿¡æ¯ï¼Œä»¥æ‰¾å‡ºå“ªä¸ªå‚æ•°æœ‰æ•…éšœã€‚\n    æ‚¨ä¹Ÿå¯ä»¥æŸ¥é˜… Ruffle çš„ Wiki èŽ·å–å¸®åŠ©ã€‚\nerror-wasm-not-found =\n    Ruffle æ— æ³•åŠ è½½æ‰€éœ€çš„ â€œ.wasmâ€ æ–‡ä»¶ç»„ä»¶ã€‚\n    å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œè¯·ç¡®ä¿æ–‡ä»¶å·²æ­£ç¡®ä¸Šä¼ ã€‚\n    å¦‚æžœé—®é¢˜ä»ç„¶å­˜åœ¨ï¼Œæ‚¨å¯èƒ½éœ€è¦ä½¿ç”¨ â€œpublicPathâ€ è®¾ç½®ï¼šè¯·æŸ¥çœ‹ Ruffle çš„ Wiki èŽ·å–å¸®åŠ©ã€‚\nerror-wasm-mime-type =\n    Ruffle åœ¨è¯•å›¾åˆå§‹åŒ–æ—¶é‡åˆ°äº†ä¸€ä¸ªé‡å¤§é—®é¢˜ã€‚\n    è¯¥ç½‘ç«™æœåŠ¡å™¨æ²¡æœ‰æä¾› \".asmâ€ æ–‡ä»¶æ­£ç¡®çš„ MIME ç±»åž‹ã€‚\n    å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œè¯·æŸ¥é˜… Ruffle Wiki èŽ·å–å¸®åŠ©ã€‚\nerror-swf-fetch =\n    Ruffle æ— æ³•åŠ è½½ Flash SWF æ–‡ä»¶ã€‚\n    æœ€å¯èƒ½çš„åŽŸå› æ˜¯æ–‡ä»¶ä¸å†å­˜åœ¨æ‰€ä»¥ Ruffle æ²¡æœ‰è¦åŠ è½½çš„å†…å®¹ã€‚\n    è¯·å°è¯•è”ç³»ç½‘ç«™ç®¡ç†å‘˜å¯»æ±‚å¸®åŠ©ã€‚\nerror-swf-cors =\n    Ruffle æ— æ³•åŠ è½½ Flash SWF æ–‡ä»¶ã€‚\n    èŽ·å–æƒé™å¯èƒ½è¢« CORS ç­–ç•¥é˜»æ­¢ã€‚\n    å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œè¯·å‚è€ƒ Ruffle Wiki èŽ·å–å¸®åŠ©ã€‚\nerror-wasm-cors =\n    Ruffle æ— æ³•åŠ è½½æ‰€éœ€çš„â€œ.wasmâ€æ–‡ä»¶ç»„ä»¶ã€‚\n    èŽ·å–æƒé™å¯èƒ½è¢« CORS ç­–ç•¥é˜»æ­¢ã€‚\n    å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œè¯·æŸ¥é˜… Ruffle Wiki èŽ·å–å¸®åŠ©ã€‚\nerror-wasm-invalid =\n    Ruffle åœ¨è¯•å›¾åˆå§‹åŒ–æ—¶é‡åˆ°äº†ä¸€ä¸ªé‡å¤§é—®é¢˜ã€‚\n    è¿™ä¸ªé¡µé¢ä¼¼ä¹Žç¼ºå°‘æ–‡ä»¶æ¥è¿è¡Œ Curlã€‚\n    å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œè¯·æŸ¥é˜… Ruffle Wiki èŽ·å–å¸®åŠ©ã€‚\nerror-wasm-download =\n    Ruffle åœ¨è¯•å›¾åˆå§‹åŒ–æ—¶é‡åˆ°äº†ä¸€ä¸ªé‡å¤§é—®é¢˜ã€‚\n    è¿™é€šå¸¸å¯ä»¥è‡ªè¡Œè§£å†³ï¼Œå› æ­¤æ‚¨å¯ä»¥å°è¯•é‡æ–°åŠ è½½é¡µé¢ã€‚\n    å¦åˆ™è¯·è”ç³»ç½‘ç«™ç®¡ç†å‘˜ã€‚\nerror-wasm-disabled-on-edge =\n    Ruffle æ— æ³•åŠ è½½æ‰€éœ€çš„ â€œ.wasmâ€ æ–‡ä»¶ç»„ä»¶ã€‚\n    è¦è§£å†³è¿™ä¸ªé—®é¢˜ï¼Œè¯·å°è¯•æ‰“å¼€æ‚¨çš„æµè§ˆå™¨è®¾ç½®ï¼Œå•å‡»\"éšç§ã€æœç´¢å’ŒæœåŠ¡\"ï¼Œå‘ä¸‹æ»šåŠ¨å¹¶å…³é—­\"å¢žå¼º Web å®‰å…¨æ€§\"ã€‚\n    è¿™å°†å…è®¸æ‚¨çš„æµè§ˆå™¨åŠ è½½æ‰€éœ€çš„ â€œ.wasmâ€ æ–‡ä»¶ã€‚\n    å¦‚æžœé—®é¢˜ä»ç„¶å­˜åœ¨ï¼Œæ‚¨å¯èƒ½å¿…é¡»ä½¿ç”¨ä¸åŒçš„æµè§ˆå™¨ã€‚\nerror-javascript-conflict =\n    Ruffle åœ¨è¯•å›¾åˆå§‹åŒ–æ—¶é‡åˆ°äº†ä¸€ä¸ªé‡å¤§é—®é¢˜ã€‚\n    è¿™ä¸ªé¡µé¢ä¼¼ä¹Žä½¿ç”¨äº†ä¸Ž Ruffle å†²çªçš„ JavaScript ä»£ç ã€‚\n    å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œæˆ‘ä»¬å»ºè®®æ‚¨å°è¯•åœ¨ç©ºç™½é¡µé¢ä¸ŠåŠ è½½æ–‡ä»¶ã€‚\nerror-javascript-conflict-outdated = æ‚¨è¿˜å¯ä»¥å°è¯•ä¸Šä¼ å¯èƒ½è§„é¿è¯¥é—®é¢˜çš„æœ€æ–°ç‰ˆæœ¬çš„ (å½“å‰æž„å»ºå·²è¿‡æ—¶: { $buildDate })ã€‚\nerror-csp-conflict =\n    Ruffle åœ¨è¯•å›¾åˆå§‹åŒ–æ—¶é‡åˆ°äº†ä¸€ä¸ªé‡å¤§é—®é¢˜ã€‚\n    è¯¥ç½‘ç«™æœåŠ¡å™¨çš„å†…å®¹å®‰å…¨ç­–ç•¥ä¸å…è®¸è¿è¡Œæ‰€éœ€çš„ â€œ.wasmâ€ ç»„ä»¶ã€‚\n    å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œè¯·æŸ¥é˜… Ruffle Wiki èŽ·å–å¸®åŠ©ã€‚\nerror-unknown =\n    Ruffle åœ¨è¯•å›¾æ˜¾ç¤ºæ­¤ Flash å†…å®¹æ—¶é‡åˆ°äº†ä¸€ä¸ªé‡å¤§é—®é¢˜ã€‚\n    { $outdated ->\n        [true] å¦‚æžœæ‚¨æ˜¯æœåŠ¡å™¨ç®¡ç†å‘˜ï¼Œè¯·å°è¯•ä¸Šä¼ æ›´æ–°çš„ Ruffle ç‰ˆæœ¬ (å½“å‰ç‰ˆæœ¬å·²è¿‡æ—¶: { $buildDate }).\n       *[false] è¿™ä¸åº”è¯¥å‘ç”Ÿï¼Œå› æ­¤å¦‚æžœæ‚¨å¯ä»¥æŠ¥å‘Šé”™è¯¯ï¼Œæˆ‘ä»¬å°†éžå¸¸æ„Ÿè°¢ï¼\n    }\n",
    "save-manager.ftl": "save-delete-prompt = ç¡®å®šè¦åˆ é™¤æ­¤å­˜æ¡£å—ï¼Ÿ\nsave-reload-prompt =\n    ä¸ºäº†é¿å…æ½œåœ¨çš„å†²çªï¼Œ{ $action ->\n        [delete] åˆ é™¤\n       *[replace] æ›¿æ¢\n    } æ­¤å­˜æ¡£æ–‡ä»¶éœ€è¦é‡æ–°åŠ è½½å½“å‰å†…å®¹ã€‚æ˜¯å¦ä»ç„¶ç»§ç»­ï¼Ÿ\nsave-download = ä¸‹è½½\nsave-replace = æ›¿æ¢\nsave-delete = åˆ é™¤\nsave-backup-all = ä¸‹è½½æ‰€æœ‰å­˜æ¡£æ–‡ä»¶\n",
    "volume-controls.ftl": "volume-controls = éŸ³é‡æŽ§åˆ¶\nvolume-controls-mute = é™éŸ³\nvolume-controls-volume = éŸ³é‡\n"
  },
  "zh-TW": {
    "context_menu.ftl": "context-menu-download-swf = ä¸‹è¼‰SWFæª”æ¡ˆ\ncontext-menu-copy-debug-info = è¤‡è£½é™¤éŒ¯è³‡è¨Š\ncontext-menu-open-save-manager = æ‰“é–‹å­˜æª”ç®¡ç†å™¨\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] é—œæ–¼Ruffleæ“´å……åŠŸèƒ½ ({ $version })\n       *[other] é—œæ–¼Ruffle ({ $version })\n    }\ncontext-menu-hide = éš±è—èœå–®\ncontext-menu-exit-fullscreen = é€€å‡ºå…¨èž¢å¹•\ncontext-menu-enter-fullscreen = é€²å…¥å…¨èž¢å¹•\ncontext-menu-volume-controls = éŸ³é‡æŽ§åˆ¶\n",
    "messages.ftl": "message-cant-embed =\n    ç›®å‰Ruffleæ²’è¾¦æ³•åŸ·è¡ŒåµŒå…¥å¼Flashã€‚\n    ä½ å¯ä»¥åœ¨æ–°åˆ†é ä¸­é–‹å•Ÿä¾†è§£æ±ºé€™å€‹å•é¡Œã€‚\npanic-title = å®Œè›‹ï¼Œå‡ºå•é¡Œäº† :(\nmore-info = æ›´å¤šè³‡è¨Š\nrun-anyway = ç›´æŽ¥åŸ·è¡Œ\ncontinue = ç¹¼çºŒ\nreport-bug = å›žå ±BUG\nupdate-ruffle = æ›´æ–°Ruffle\nruffle-demo = ç¶²é å±•ç¤º\nruffle-desktop = æ¡Œé¢æ‡‰ç”¨ç¨‹å¼\nruffle-wiki = æŸ¥çœ‹Ruffle Wiki\nenable-hardware-acceleration =\n    çœ‹èµ·ä¾†ä½ çš„ç¡¬é«”åŠ é€Ÿæ²’æœ‰é–‹å•Ÿï¼Œé›–ç„¶Ruffleé‚„å¯ä»¥åŸ·è¡Œï¼Œä½†æ˜¯ä½ æœƒæ„Ÿè¦ºåˆ°æœƒå¾ˆæ…¢ã€‚\n    ä½ å¯ä»¥åœ¨ä¸‹æ–¹é€£çµæ‰¾åˆ°å¦‚ä½•é–‹å•Ÿç¡¬é«”åŠ é€Ÿã€‚\nview-error-details = æª¢è¦–éŒ¯èª¤è©³ç´°è³‡æ–™\nopen-in-new-tab = é–‹å•Ÿæ–°å¢žåˆ†é \nclick-to-unmute = é»žæ“Šä»¥å–æ¶ˆéœéŸ³\nerror-file-protocol =\n    çœ‹èµ·ä¾†ä½ æƒ³è¦ç”¨Ruffleä¾†åŸ·è¡Œ\"file:\"çš„å”è­°ã€‚\n    å› ç‚ºç€è¦½å™¨ç¦äº†å¾ˆå¤šåŠŸèƒ½ä»¥è³‡å®‰çš„ç†ç”±ä¾†è¬›ã€‚\n    æˆ‘å€‘å»ºè­°ä½ å»ºç«‹æœ¬åœ°ä¼ºæœå™¨æˆ–è‘—ç›´æŽ¥ä½¿ç”¨ç¶²é å±•ç¤ºæˆ–æ¡Œé¢æ‡‰ç”¨ç¨‹å¼ã€‚\nerror-javascript-config =\n    ç›®å‰Ruffleé‡åˆ°ä¸æ­£ç¢ºçš„JavaScripté…ç½®ã€‚\n    å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œæˆ‘å€‘å»ºè­°ä½ æª¢æŸ¥å“ªå€‹ç’°ç¯€å‡ºéŒ¯ã€‚\n    æˆ–è‘—ä½ å¯ä»¥æŸ¥è©¢Ruffle wikiå¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-wasm-not-found =\n    ç›®å‰Ruffleæ‰¾ä¸åˆ°\".wasm\"æª”æ¡ˆã€‚\n    å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œç¢ºä¿æª”æ¡ˆæ˜¯å¦æ”¾å°ä½ç½®ã€‚\n    å¦‚æžœé‚„æ˜¯æœ‰å•é¡Œçš„è©±ï¼Œä½ è¦ç”¨\"publicPath\"ä¾†è¨­å®š: æˆ–è‘—æŸ¥è©¢Ruffle wikiå¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-wasm-mime-type =\n    ç›®å‰Ruffleåˆå§‹åŒ–æ™‚é‡åˆ°é‡å¤§å•é¡Œã€‚\n    é€™ç¶²é ä¼ºæœå™¨ä¸¦æ²’æœ‰æœå‹™\".wasm\"æª”æ¡ˆæˆ–æ­£ç¢ºçš„ç¶²éš›ç¶²è·¯åª’é«”é¡žåž‹ã€‚\n    å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œè«‹æŸ¥è©¢Ruffle wikiå¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-swf-fetch =\n    ç›®å‰Ruffleç„¡æ³•è®€å–Flashçš„SWFæª”æ¡ˆã€‚\n    å¾ˆæœ‰å¯èƒ½è¦è®€å–çš„æª”æ¡ˆä¸å­˜åœ¨ï¼Œæ‰€ä»¥Ruffleè®€ä¸åˆ°æ±è¥¿ã€‚\n    è«‹å˜—è©¦æºé€šä¼ºæœå™¨ç®¡ç†å“¡å¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-swf-cors =\n    ç›®å‰Ruffleç„¡æ³•è®€å–Flashçš„SWFæª”æ¡ˆã€‚\n    çœ‹èµ·ä¾†æ˜¯ä½¿ç”¨æ¬Šè¢«è·¨ä¾†æºè³‡æºå…±ç”¨æ©Ÿåˆ¶è¢«æ“‹åˆ°äº†ã€‚\n    å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œè«‹æŸ¥è©¢Ruffle wikiå¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-wasm-cors =\n    ç›®å‰Ruffleç„¡æ³•è®€å–\".wasm\"æª”æ¡ˆã€‚\n    çœ‹èµ·ä¾†æ˜¯ä½¿ç”¨æ¬Šè¢«è·¨ä¾†æºè³‡æºå…±ç”¨æ©Ÿåˆ¶è¢«æ“‹åˆ°äº†ã€‚\n    å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œè«‹æŸ¥è©¢Ruffle wikiå¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-wasm-invalid =\n    ç›®å‰Ruffleåˆå§‹åŒ–æ™‚é‡åˆ°é‡å¤§å•é¡Œã€‚\n    çœ‹èµ·ä¾†é€™ç¶²é æœ‰ç¼ºå¤±æª”æ¡ˆå°Žè‡´Ruffleç„¡æ³•é‹è¡Œã€‚\n    å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œè«‹æŸ¥è©¢Ruffle wikiå¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-wasm-download =\n    ç›®å‰Ruffleåˆå§‹åŒ–æ™‚é‡åˆ°é‡å¤§å•é¡Œã€‚\n    é€™å¯ä»¥ä½ è‡ªå·±è§£æ±ºï¼Œä½ åªè¦é‡æ–°æ•´ç†å°±å¥½äº†ã€‚\n    å¦å‰‡ï¼Œè«‹å˜—è©¦æºé€šä¼ºæœå™¨ç®¡ç†å“¡å¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-wasm-disabled-on-edge =\n    ç›®å‰Ruffleç„¡æ³•è®€å–\".wasm\"æª”æ¡ˆã€‚\n    è¦ä¿®æ­£çš„è©±ï¼Œæ‰“é–‹ä½ çš„ç€è¦½å™¨è¨­å®šï¼Œé»žé¸\"éš±ç§æ¬Šã€æœå°‹èˆ‡æœå‹™\"ï¼ŒæŠŠ\"é˜²æ­¢è¿½è¹¤\"çµ¦é—œæŽ‰ã€‚\n    é€™æ¨£ä¸€ä¾†ä½ çš„ç€è¦½å™¨æœƒè®€å–éœ€è¦çš„\".wasm\"æª”æ¡ˆã€‚\n    å¦‚æžœå•é¡Œä¸€ç›´é‚„åœ¨çš„è©±ï¼Œä½ å¿…é ˆè¦æ›ç€è¦½å™¨äº†ã€‚\nerror-javascript-conflict =\n    ç›®å‰Ruffleåˆå§‹åŒ–æ™‚é‡åˆ°é‡å¤§å•é¡Œã€‚\n    çœ‹èµ·ä¾†é€™ç¶²é ä½¿ç”¨çš„JavaScriptæœƒè·ŸRuffleèµ·è¡çªã€‚\n    å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œæˆ‘å€‘å»ºè­°ä½ é–‹å€‹ç©ºç™½é ä¾†æ¸¬è©¦ã€‚\nerror-javascript-conflict-outdated = ä½ ä¹Ÿå¯ä»¥ä¸Šå‚³æœ€æ–°ç‰ˆçš„Ruffleï¼Œèªªä¸å®šä½ è¦èªªçš„çš„å•é¡Œå·²ç¶“ä¸è¦‹äº†(ç¾åœ¨ä½¿ç”¨çš„ç‰ˆæœ¬å·²ç¶“éŽæ™‚: { $buildDate })ã€‚\nerror-csp-conflict =\n    ç›®å‰Ruffleåˆå§‹åŒ–æ™‚é‡åˆ°é‡å¤§å•é¡Œã€‚\n    é€™ç¶²é ä¼ºæœå™¨è¢«è·¨ä¾†æºè³‡æºå…±ç”¨æ©Ÿåˆ¶ç¦æ­¢è®€å–\".wasm\"æª”æ¡ˆã€‚\n    å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œè«‹æŸ¥è©¢Ruffle wikiå¾—åˆ°éœ€æ±‚å¹«åŠ©ã€‚\nerror-unknown =\n    ç›®å‰Ruffleåˆå§‹åŒ–è¦è®€å–Flashå…§å®¹æ™‚é‡åˆ°é‡å¤§å•é¡Œ\n    { $outdated ->\n        [true] å¦‚æžœä½ æ˜¯ä¼ºæœå™¨ç®¡ç†å“¡ï¼Œ è«‹ä¸Šå‚³æœ€æ–°ç‰ˆçš„Ruffle(ç¾åœ¨ä½¿ç”¨çš„ç‰ˆæœ¬å·²ç¶“éŽæ™‚: { $buildDate }).\n       *[false] é€™ä¸æ‡‰è©²ç™¼ç”Ÿçš„ï¼Œæˆ‘å€‘ä¹Ÿå¾ˆé«˜èˆˆä½ å‘ŠçŸ¥bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = ä½ ç¢ºå®šè¦åˆªé™¤é€™å€‹å­˜æª”å—Žï¼Ÿ\nsave-reload-prompt =\n    å”¯ä¸€æ–¹æ³•åªæœ‰ { $action ->\n        [delete] åˆªé™¤\n       *[replace] å–ä»£\n    } é€™å€‹å­˜æª”ä¸æœƒå®Œå…¨å–ä»£ç›´åˆ°é‡æ–°å•Ÿå‹•. ä½ éœ€è¦ç¹¼çºŒå—Ž?\nsave-download = ä¸‹è¼‰\nsave-replace = å–ä»£\nsave-delete = åˆªé™¤\nsave-backup-all = ä¸‹è¼‰æ‰€æœ‰å­˜æª”æª”æ¡ˆã€‚\n",
    "volume-controls.ftl": "volume-controls = éŸ³é‡æŽ§åˆ¶\nvolume-controls-mute = éœéŸ³\nvolume-controls-volume = éŸ³é‡\n"
  }
};
const bundles = {};
for (const [locale, files] of Object.entries(BUNDLED_TEXTS)) {
    const bundle = new FluentBundle(locale);
    if (files) {
        for (const [filename, text] of Object.entries(files)) {
            if (text) {
                for (const error of bundle.addResource(new FluentResource(text))) {
                    console.error(`Error in text for ${locale} ${filename}: ${error}`);
                }
            }
        }
    }
    bundles[locale] = bundle;
}
/**
 * Gets the localised text for the given locale and text ID.
 *
 * If the locale does not contain a text for this ID, it will return null.
 *
 * @param locale Locale to prefer when retrieving text, ie "en-US"
 * @param id ID of the text to retrieve
 * @param args Any arguments to use when creating the localised text
 * @returns Localised text or null if not found
 */
function tryText(locale, id, args) {
    const bundle = bundles[locale];
    if (bundle !== undefined) {
        const message = bundle.getMessage(id);
        if (message !== undefined && message.value) {
            return bundle.formatPattern(message.value, args);
        }
    }
    return null;
}
/**
 * Gets the localised text for the given text ID.
 *
 * The users preferred locales are used, in priority order, to find the given text.
 *
 * If no text is found for any preferred locale, en-US will be used.
 * If en-US does not contain a text for this ID, an error will be logged and the ID itself will be returned.
 *
 * @param id ID of the text to retrieve
 * @param args Any arguments to use when creating the localised text
 * @returns Localised text
 */
function i18n_text(id, args) {
    const locales = negotiateLanguages(navigator.languages, Object.keys(bundles), { defaultLocale: "en-US" });
    for (const i in locales) {
        const result = tryText(locales[i], id, args);
        if (result) {
            return result;
        }
    }
    console.error(`Unknown text key '${id}'`);
    return id;
}
/**
 * Gets the localised text for the given text ID, as <p>paragraphs</p> and HTML entities safely encoded.
 *
 * The users preferred locales are used, in priority order, to find the given text.
 *
 * If no text is found for any preferred locale, en-US will be used.
 * If en-US does not contain a text for this ID, an error will be logged and the ID itself will be returned.
 *
 * @param id ID of the text to retrieve
 * @param args Any arguments to use when creating the localised text
 * @returns Localised text with each line in a Paragraph element
 */
function textAsParagraphs(id, args) {
    const result = document.createElement("div");
    i18n_text(id, args)
        .split("\n")
        .forEach((line) => {
        const p = document.createElement("p");
        p.innerText = line;
        result.appendChild(p);
    });
    return result;
}

;// CONCATENATED MODULE: ../core/dist/shadow-template.js

/**
 * Insert all rules from array in the style sheet.
 *
 * @param sheet The style sheet to which to apply the rules.
 * @param rules An array of rules to be applied.
 */
function insertRules(sheet, rules) {
    for (const rule of rules) {
        try {
            sheet.insertRule(rule);
        }
        catch (err) {
            // Ignore unsupported rules
        }
    }
}
/**
 * The default styles to apply to the shadow template.
 * This function must be run after the shadow template is added to the page.
 *
 * @param styleElement The static style element to which to add the rules
 */
function applyStaticStyles(styleElement) {
    if (!styleElement.sheet) {
        return;
    }
    const rules = [
        `:host {
            all: initial;
            pointer-events: inherit;

            --ruffle-blue: #37528c;
            --ruffle-orange: #ffad33;

            display: inline-block;
            position: relative;
            /* Default width/height; this will get overridden by user styles/attributes. */
            width: 550px;
            height: 400px;
            font-family: Arial, sans-serif;
            letter-spacing: 0.4px;
            touch-action: none;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
        }`,
        /* Ruffle's width/height CSS interferes with Safari's fullscreen CSS. */
        /* Ensure that Safari's fullscreen mode actually fills the screen. */
        `:host(:-webkit-full-screen) {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }`,
        `.hidden {
            display: none !important;
        }`,
        /* All of these use the dimensions specified by the embed. */
        `#container,
        #play-button,
        #unmute-overlay,
        #unmute-overlay .background,
        #panic,
        #splash-screen,
        #message-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }`,
        `#container {
            overflow: hidden;
        }`,
        `#container canvas {
            width: 100%;
            height: 100%;
        }`,
        `#play-button,
        #unmute-overlay {
            cursor: pointer;
            display: none;
        }`,
        `#unmute-overlay .background {
            background: black;
            opacity: 0.7;
        }`,
        `#play-button .icon,
        #unmute-overlay .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 50%;
            max-width: 384px;
            max-height: 384px;
            transform: translate(-50%, -50%);
            opacity: 0.8;
        }`,
        `#play-button:hover .icon,
        #unmute-overlay:hover .icon {
            opacity: 1;
        }`,
        /* Includes inverted colors from play button! */
        `#panic {
            font-size: 20px;
            text-align: center;
            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);
            color: white;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
        }`,
        `#panic a {
            color: var(--ruffle-blue);
            font-weight: bold;
        }`,
        `#panic-title {
            font-size: xxx-large;
            font-weight: bold;
        }`,
        `#panic-body.details {
            flex: 0.9;
            margin: 0 10px;
        }`,
        `#panic-body textarea {
            width: 100%;
            height: 100%;
            resize: none;
        }`,
        `#panic ul {
            padding: 0;
            display: flex;
            list-style-type: none;
            justify-content: space-evenly;
        }`,
        `#message-overlay {
            position: absolute;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            opacity: 1;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;
        }`,
        `#message-overlay .message {
            text-align: center;
            max-height: 100%;
            max-width: 100%;
            padding: 5%;
            font-size: 20px;
        }`,
        `#message-overlay p {
            margin: 0.5em 0;
        }`,
        `#message-overlay .message div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            column-gap: 1em;
        }`,
        `#message-overlay a, #message-overlay button {
            cursor: pointer;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            border: 2px solid var(--ruffle-orange);
            font-weight: bold;
            font-size: 1.25em;
            border-radius: 0.6em;
            padding: 10px;
            text-decoration: none;
            margin: 2% 0;
        }`,
        `#message-overlay a:hover, #message-overlay button:hover {
            background: #ffffff4c;
        }`,
        `#continue-btn {
             cursor: pointer;
             background: var(--ruffle-blue);
             color: var(--ruffle-orange);
             border: 2px solid var(--ruffle-orange);
             font-weight: bold;
             font-size: 20px;
             border-radius: 20px;
             padding: 10px;
        }`,
        `#continue-btn:hover {
            background: #ffffff4c;
        }`,
        `#context-menu-overlay {
            width: 100%;
            height: 100%;
            z-index: 1;
            position: absolute;
        }`,
        `#context-menu {
            color: black;
            background: #fafafa;
            border: 1px solid gray;
            box-shadow: 0px 5px 10px -5px black;
            position: absolute;
            font-size: 14px;
            text-align: left;
            list-style: none;
            padding: 0;
            margin: 0;
        }`,
        `#context-menu .menu-item {
            padding: 5px 10px;
            cursor: pointer;
            color: black;
        }`,
        `#context-menu .menu-item.disabled {
            cursor: default;
            color: gray;
        }`,
        `#context-menu .menu-item:not(.disabled):hover {
            background: lightgray;
        }`,
        `#context-menu .menu-separator hr {
            border: none;
            border-bottom: 1px solid lightgray;
            margin: 2px;
        }`,
        `#splash-screen {
            display: flex;
            flex-direction: column;
            background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));
            align-items: center;
            justify-content: center;
        }`,
        `.loadbar {
            width: 100%;
            max-width: 316px;
            max-height: 10px;
            height: 20%;
            background: #253559;
        }`,
        `.loadbar-inner {
            width: 0px;
            max-width: 100%;
            height: 100%;
            background: var(--ruffle-orange);
        }`,
        `.logo {
            display: var(--logo-display, block);
            max-width: 380px;
            max-height: 150px;
        }`,
        `.loading-animation {
            max-width: 28px;
            max-height: 28px;
            margin-bottom: 2%;
            width: 10%;
            aspect-ratio: 1;
        }`,
        `.spinner {
            stroke-dasharray: 180;
            stroke-dashoffset: 135;
            stroke: var(--ruffle-orange);
            transform-origin: 50% 50%;
            animation: rotate 1.5s linear infinite;
        }`,
        `@keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }`,
        `#virtual-keyboard {
            position: absolute;
            opacity: 0;
            top: -100px;
            width: 1px;
            height: 1px;
        }`,
        `.modal {
            height: inherit;
            user-select: text;
        }`,
        `.modal-area {
            position: sticky;
            background: white;
            width: fit-content;
            padding: 16px 28px 16px 16px;
            border: 3px solid black;
            margin: auto;
        }`,
        `#modal-area {
            height: 500px;
            max-height: calc(100% - 38px);
            min-height: 80px;
        }`,
        `#restore-save {
            display: none;
        }`,
        `.replace-save {
            display: none;
        }`,
        `.save-option {
            display: inline-block;
            padding: 3px 10px;
            margin: 5px 2px;
            cursor: pointer;
            border-radius: 50px;
            background-color: var(--ruffle-blue);
            color: white;
        }`,
        `.close-modal {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            font-size: x-large;
        }`,
        `.general-save-options {
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid #888;
        }`,
        `#local-saves {
            border-collapse: collapse;
            overflow-y: auto;
            display: block;
            padding-right: 16px;
            height: calc(100% - 45px);
            min-height: 30px;
        }`,
        `#local-saves td {
            border-bottom: 1px solid #bbb;
            height: 30px;
        }`,
        `#local-saves tr td:nth-child(1) {
            padding-right: 1em;
            word-break: break-all;
        }`,
        `#local-saves tr:nth-child(even) {
            background-color: #f2f2f2;
        }`,
        `#video-holder {
            padding-top: 20px;
        }`,
        `#video-holder video {
            max-width: 100%;
            height: calc(100% - 58px);
        }`,
        `.slider-container {
            margin-top: 10px;
            display: flex;
            align-items: center;
        }`,
        `#volume-slider {
            margin-left: 10px;
            margin-right: 10px;
        }`,
        `#volume-slider-text {
            text-align: right;
            width: 28px;
        }`,
        `.acceleration-link {
            color: var(--ruffle-blue);
            text-decoration: none;
        }`,
        `.acceleration-link:hover {
            text-decoration: underline;
        }`,
    ];
    insertRules(styleElement.sheet, rules);
}
/**
 * Create and return a new HTML Element with the given arguments.
 *
 * @param tag The HTML tag name of the new element.
 * @param id The id of the new element.
 * @param className The class name of the new element.
 * @param attributes A hash of attributes for the new element.
 * @param ns The namespace of the new element.
 *
 * @returns The newly created Element
 */
function createElement(tag, id, className, attributes, ns) {
    const element = ns
        ? document.createElementNS(ns, tag)
        : document.createElement(tag);
    if (id) {
        element.id = id;
    }
    if (className && ns) {
        element.classList.add(className);
    }
    else if (className) {
        element.className = className;
    }
    if (attributes) {
        for (const [key, attr] of Object.entries(attributes)) {
            element.setAttribute(key, attr);
        }
    }
    return element;
}
/**
 * Create and return a new HTMLInputElement with the given arguments.
 *
 * @param htmlType The type of input element.
 * @param id The id of the input element.
 * @param min The min of the input element.
 * @param max The max of the input element.
 * @param step The step of the input element.
 *
 * @returns The newly created HTMLInputElement
 */
function createInputElement(htmlType, id, min, max, step) {
    const element = createElement("input", id);
    element.type = htmlType;
    if (min) {
        element.min = min;
    }
    if (max) {
        element.max = max;
    }
    if (step) {
        element.step = step;
    }
    return element;
}
/**
 * Create and return a new HTMLLabelElement with the given arguments.
 *
 * @param id The id of the label element.
 * @param htmlFor The for of the label element.
 *
 * @returns The newly created HTMLLabelElement
 */
function createLabelElement(id, htmlFor) {
    const element = createElement("label", id);
    element.htmlFor = htmlFor;
    return element;
}
/**
 *
 * @param parentElement The node to which to append a child element.
 * @param childElement The node to be appended to the parent element.
 */
function appendElement(parentElement, childElement) {
    parentElement.appendChild(childElement);
}
/**
 * The shadow template which is used to fill the actual Ruffle player element
 * on the page.
 *
 */
const ruffleShadowTemplate = document.createElement("template");
const svgns = "http://www.w3.org/2000/svg";
const staticStyles = createElement("style", "static-styles");
const dynamicStyles = createElement("style", "dynamic-styles");
const container = createElement("div", "container");
// Play button elements
const playButton = createElement("div", "play-button");
const playIcon = createElement("div", undefined, "icon");
const playSvg = createElement("svg", undefined, undefined, {
    xmlns: svgns,
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 250 250",
    width: "100%",
    height: "100%",
}, svgns);
const playDefs = createElement("defs", undefined, undefined, undefined, svgns);
const playLinearGradient = createElement("linearGradient", "a", undefined, {
    gradientUnits: "userSpaceOnUse",
    x1: "125",
    y1: "0",
    x2: "125",
    y2: "250",
    spreadMethod: "pad",
}, svgns);
const playStop0 = createElement("stop", undefined, undefined, {
    offset: "0%",
    "stop-color": "#FDA138",
}, svgns);
const playStop100 = createElement("stop", undefined, undefined, {
    offset: "100%",
    "stop-color": "#FD3A40",
}, svgns);
const playG = createElement("g", "b", undefined, undefined, svgns);
const playPath1 = createElement("path", undefined, undefined, {
    fill: "url(#a)",
    d: "M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z",
}, svgns);
const playPath2 = createElement("path", undefined, undefined, {
    fill: "#FFF",
    d: "M87 55v140l100-70L87 55z",
}, svgns);
const playUse = document.createElementNS(svgns, "use");
playUse.href.baseVal = "#b";
// Unmute overlay elements
const unmuteOverlay = createElement("div", "unmute-overlay");
const background = createElement("div", undefined, "background");
const unmuteIcon = createElement("div", undefined, "icon");
const unmuteSvg = createElement("svg", "unmute-overlay-svg", undefined, {
    xmlns: svgns,
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 512 584",
    width: "100%",
    height: "100%",
    scale: "0.8",
}, svgns);
const unmutePath1 = createElement("path", undefined, undefined, {
    fill: "#FFF",
    stroke: "#FFF",
    d: "m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z",
}, svgns);
const unmutePath2 = createElement("path", undefined, undefined, {
    fill: "#FFF",
    stroke: "#FFF",
    d: "m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z",
}, svgns);
const unmutePath3 = createElement("path", undefined, undefined, {
    fill: "#FFF",
    stroke: "#FFF",
    d: "m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z",
}, svgns);
const unmuteText = createElement("text", "unmute-text", undefined, {
    x: "256",
    y: "560",
    "text-anchor": "middle",
    "font-size": "60px",
    fill: "#FFF",
    stroke: "#FFF",
}, svgns);
// Virtual keyboard element
const virtualKeyboard = createElement("input", "virtual-keyboard", undefined, {
    type: "text",
    autocapitalize: "off",
    autocomplete: "off",
    autocorrect: "off",
});
// Splash screen elements
const splashScreen = createElement("div", "splash-screen", "hidden");
const splashScreenSvg = createElement("svg", undefined, "logo", {
    xmlns: svgns,
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 380 150",
}, svgns);
const splashScreenG = createElement("g", undefined, undefined, undefined, svgns);
const splashScreenPath1 = createElement("path", undefined, undefined, {
    fill: "#966214",
    d: "M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z",
}, svgns);
const splashScreenPath2 = createElement("path", undefined, undefined, {
    fill: "var(--ruffle-orange)",
    d: "M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z",
}, svgns);
const loadingAnimation = createElement("svg", undefined, "loading-animation", {
    xmlns: svgns,
    viewBox: "0 0 66 66",
}, svgns);
const spinner = createElement("circle", undefined, "spinner", {
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30",
}, svgns);
const loadbar = createElement("div", undefined, "loadbar");
const loadbarInner = createElement("div", undefined, "loadbar-inner");
// Save manager elements
const saveManager = createElement("div", "save-manager", "modal hidden");
const saveModalArea = createElement("div", "modal-area", "modal-area");
const saveModalClose = createElement("span", undefined, "close-modal");
saveModalClose.textContent = "\u00D7";
const generalSaveOptions = createElement("div", undefined, "general-save-options");
const backupSaves = createElement("span", "backup-saves", "save-option");
const localSaves = createElement("table", "local-saves");
// Volume control elements
const volumeControlsModal = createElement("div", "volume-controls-modal", "modal hidden");
const volumeModalArea = createElement("div", undefined, "modal-area");
const volumeModalClose = createElement("span", undefined, "close-modal");
volumeModalClose.textContent = "\u00D7";
const volumeControls = createElement("div", "volume-controls");
const volumeControlsHeading = createElement("h2", "volume-controls-heading");
const muteCheckboxLabel = createLabelElement("mute-checkbox-label", "mute-checkbox");
const muteCheckbox = createInputElement("checkbox", "mute-checkbox");
const sliderContainer = createElement("div", undefined, "slider-container");
const volumeSliderLabel = createLabelElement("volume-slider-label", "volume-slider");
const volumeSlider = createInputElement("range", "volume-slider", "0", "100", "1");
const volumeSliderText = createElement("span", "volume-slider-text");
// Video modal elements
const videoModal = createElement("div", "video-modal", "modal hidden");
const videoModalArea = createElement("div", undefined, "modal-area");
const videoModalClose = createElement("span", undefined, "close-modal");
videoModalClose.textContent = "\u00D7";
const videoHolder = createElement("div", "video-holder");
// Hardware acceleration modal elements
const hardwareModal = createElement("div", "hardware-acceleration-modal", "modal hidden");
const hardwareModalArea = createElement("div", undefined, "modal-area");
const hardwareModalClose = createElement("span", undefined, "close-modal");
hardwareModalClose.textContent = "\u00D7";
const hardwareModalLink = document.createElement("a");
hardwareModalLink.href =
    "https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration";
hardwareModalLink.target = "_blank";
hardwareModalLink.className = "acceleration-link";
hardwareModalLink.textContent = i18n_text("enable-hardware-acceleration");
// Context menu overlay elements
const contextMenuOverlay = createElement("div", "context-menu-overlay", "hidden");
const contextMenu = createElement("ul", "context-menu");
appendElement(ruffleShadowTemplate.content, staticStyles);
appendElement(ruffleShadowTemplate.content, dynamicStyles);
appendElement(ruffleShadowTemplate.content, container);
// Play button append
appendElement(container, playButton);
appendElement(playButton, playIcon);
appendElement(playIcon, playSvg);
appendElement(playSvg, playDefs);
appendElement(playDefs, playLinearGradient);
appendElement(playLinearGradient, playStop0);
appendElement(playLinearGradient, playStop100);
appendElement(playDefs, playG);
appendElement(playG, playPath1);
appendElement(playG, playPath2);
appendElement(playSvg, playUse);
// Unmute overlay append
appendElement(container, unmuteOverlay);
appendElement(unmuteOverlay, background);
appendElement(unmuteOverlay, unmuteIcon);
appendElement(unmuteIcon, unmuteSvg);
appendElement(unmuteSvg, unmutePath1);
appendElement(unmuteSvg, unmutePath2);
appendElement(unmuteSvg, unmutePath3);
appendElement(unmuteSvg, unmuteText);
// Virtual keyboard append
appendElement(container, virtualKeyboard);
// Splash screen append
appendElement(ruffleShadowTemplate.content, splashScreen);
appendElement(splashScreen, splashScreenSvg);
appendElement(splashScreenSvg, splashScreenG);
appendElement(splashScreenG, splashScreenPath1);
appendElement(splashScreenG, splashScreenPath2);
appendElement(splashScreen, loadingAnimation);
appendElement(loadingAnimation, spinner);
appendElement(splashScreen, loadbar);
appendElement(loadbar, loadbarInner);
// Save manager append
appendElement(ruffleShadowTemplate.content, saveManager);
appendElement(saveManager, saveModalArea);
appendElement(saveModalArea, saveModalClose);
appendElement(saveModalArea, generalSaveOptions);
appendElement(generalSaveOptions, backupSaves);
appendElement(saveModalArea, localSaves);
// Volume control append
appendElement(ruffleShadowTemplate.content, volumeControlsModal);
appendElement(volumeControlsModal, volumeModalArea);
appendElement(volumeModalArea, volumeModalClose);
appendElement(volumeModalArea, volumeControls);
appendElement(volumeControls, volumeControlsHeading);
appendElement(volumeControls, muteCheckboxLabel);
appendElement(volumeControls, muteCheckbox);
appendElement(volumeControls, sliderContainer);
appendElement(sliderContainer, volumeSliderLabel);
appendElement(sliderContainer, volumeSlider);
appendElement(sliderContainer, volumeSliderText);
// Video modal append
appendElement(ruffleShadowTemplate.content, videoModal);
appendElement(videoModal, videoModalArea);
appendElement(videoModalArea, videoModalClose);
appendElement(videoModalArea, videoHolder);
// Hardware acceleration modal append
appendElement(ruffleShadowTemplate.content, hardwareModal);
appendElement(hardwareModal, hardwareModalArea);
appendElement(hardwareModalArea, hardwareModalClose);
appendElement(hardwareModalArea, hardwareModalLink);
// Context menu overlay append
appendElement(ruffleShadowTemplate.content, contextMenuOverlay);
appendElement(contextMenuOverlay, contextMenu);

;// CONCATENATED MODULE: ../core/dist/register-element.js
/**
 * Number of times to try defining a custom element.
 */
const MAX_TRIES = 999;
/**
 * A mapping between internal element IDs and DOM element IDs.
 */
const privateRegistry = {};
/**
 * Lookup a previously registered custom element.
 *
 * The returned object will have `name`, `class`, and `internal_name`
 * properties listing the external name, implementing class, and internal name
 * respectively.
 *
 * @param elementName The internal element name, previously used to
 * register the element with the private registry.
 * @returns The element data in the registry, or null if there is
 * no such element name registered.
 */
function lookupElement(elementName) {
    const data = privateRegistry[elementName];
    if (data !== undefined) {
        return {
            internalName: elementName,
            name: data.name,
            class: data.class,
        };
    }
    else {
        return null;
    }
}
/**
 * Register a custom element.
 *
 * This function is designed to be tolerant of naming conflicts. If
 * registration fails, we modify the name, and try again. As a result, this
 * function returns the real element name to use.
 *
 * Calling this function multiple times will *not* register multiple elements.
 * We store a private registry mapping internal element names to DOM names.
 * Thus, the proper way to use this function is to call it every time you are
 * about to work with custom element names.
 *
 * @param elementName The internal name of the element.
 * @param elementClass The class of the element.
 *
 * You must call this function with the same class every time.
 * @returns The actual element name.
 * @throws Throws an error if two different elements were registered with the
 * same internal name.
 */
function registerElement(elementName, elementClass) {
    const registration = privateRegistry[elementName];
    if (registration !== undefined) {
        if (registration.class !== elementClass) {
            throw new Error("Internal naming conflict on " + elementName);
        }
        else {
            return registration.name;
        }
    }
    let tries = 0;
    if (window.customElements !== undefined) {
        while (tries < MAX_TRIES) {
            let externalName = elementName;
            if (tries > 0) {
                externalName = externalName + "-" + tries;
            }
            if (window.customElements.get(externalName) !== undefined) {
                tries += 1;
                continue;
            }
            else {
                window.customElements.define(externalName, elementClass);
            }
            privateRegistry[elementName] = {
                class: elementClass,
                name: externalName,
                internalName: elementName,
            };
            return externalName;
        }
    }
    throw new Error("Failed to assign custom element " + elementName);
}

;// CONCATENATED MODULE: ../core/dist/flash-identifiers.js
const FLASH_MIMETYPE = "application/x-shockwave-flash";
const FUTURESPLASH_MIMETYPE = "application/futuresplash";
const FLASH7_AND_8_MIMETYPE = "application/x-shockwave-flash2-preview";
const FLASH_MOVIE_MIMETYPE = "application/vnd.adobe.flash.movie";
const FLASH_ACTIVEX_CLASSID = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";

;// CONCATENATED MODULE: ../core/dist/swf-utils.js

/**
 * Returns whether the given filename ends in a known Flash extension.
 *
 * @param filename The filename to test.
 * @returns True if the filename is a Flash movie (swf or spl).
 */
function isSwfFilename(filename) {
    let pathname = "";
    try {
        // A base URL is required if `filename` is a relative URL, but we don't need to detect the real URL origin.
        pathname = new URL(filename, "https://example.com").pathname;
    }
    catch (err) {
        // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
    }
    if (pathname && pathname.length >= 4) {
        const extension = pathname.slice(-4).toLowerCase();
        if (extension === ".swf" || extension === ".spl") {
            return true;
        }
    }
    return false;
}
/**
 * Returns whether the given MIME type is a known Flash type.
 *
 * @param mimeType The MIME type to test.
 * @param allowExtraMimes Whether extra MIME types, non-Flash related, are allowed.
 * @returns True if the MIME type is a Flash MIME type.
 */
function isSwfMimeType(mimeType, allowExtraMimes) {
    mimeType = mimeType.toLowerCase();
    switch (mimeType) {
        case FLASH_MIMETYPE.toLowerCase():
        case FUTURESPLASH_MIMETYPE.toLowerCase():
        case FLASH7_AND_8_MIMETYPE.toLowerCase():
        case FLASH_MOVIE_MIMETYPE.toLowerCase():
            return true;
        default:
            if (allowExtraMimes) {
                // Allow extra MIME types to improve detection of Flash content.
                // Extension: Some sites (e.g. swfchan.net) might (wrongly?) serve files with octet-stream.
                // Polyfill: Other sites (e.g. #11050) might use octet-stream when defining an <embed> tag.
                switch (mimeType) {
                    case "application/octet-stream":
                    case "binary/octet-stream":
                        return true;
                }
            }
    }
    return false;
}
/**
 * Returns whether the given filename and MIME type resolve as a Flash content.
 *
 * @param filename The filename to test.
 * @param mimeType The MIME type to test.
 * @returns True if the given arguments resolve as a Flash content.
 */
function isSwf(filename, mimeType) {
    const isSwfExtension = isSwfFilename(filename);
    if (!mimeType) {
        // If no MIME type is specified (null or empty string), returns whether the movie ends in a known Flash extension.
        return isSwfExtension;
    }
    else {
        return isSwfMimeType(mimeType, isSwfExtension);
    }
}
/**
 * Create a filename to save a downloaded SWF into.
 *
 * @param swfUrl The URL of the SWF file.
 * @returns The filename the SWF file can be saved at.
 */
function swfFileName(swfUrl) {
    const pathName = swfUrl.pathname;
    const name = pathName.substring(pathName.lastIndexOf("/") + 1);
    return name;
}

;// CONCATENATED MODULE: ../core/dist/build-info.js
/**
 * Stores build information. The string literals are replaces at compile time by `set_version.js`.
 */
const buildInfo = {
    versionNumber: "0.1.0",
    versionName: "nightly 2024-01-13",
    versionChannel: "nightly",
    buildDate: "2024-01-13T00:14:58.057Z",
    commitHash: "2775c917bf61254dbddf67b604d36157efdff7d5",
};

// EXTERNAL MODULE: ../../node_modules/jszip/dist/jszip.min.js
var jszip_min = __webpack_require__(297);
var jszip_min_default = /*#__PURE__*/__webpack_require__.n(jszip_min);
;// CONCATENATED MODULE: ../core/dist/ruffle-player.js










const RUFFLE_ORIGIN = "https://ruffle.rs";
const DIMENSION_REGEX = /^\s*(\d+(\.\d+)?(%)?)/;
let isAudioContextUnmuted = false;
var PanicError;
(function (PanicError) {
    PanicError[PanicError["Unknown"] = 0] = "Unknown";
    PanicError[PanicError["CSPConflict"] = 1] = "CSPConflict";
    PanicError[PanicError["FileProtocol"] = 2] = "FileProtocol";
    PanicError[PanicError["InvalidWasm"] = 3] = "InvalidWasm";
    PanicError[PanicError["JavascriptConfiguration"] = 4] = "JavascriptConfiguration";
    PanicError[PanicError["JavascriptConflict"] = 5] = "JavascriptConflict";
    PanicError[PanicError["WasmCors"] = 6] = "WasmCors";
    PanicError[PanicError["WasmDownload"] = 7] = "WasmDownload";
    PanicError[PanicError["WasmMimeType"] = 8] = "WasmMimeType";
    PanicError[PanicError["WasmNotFound"] = 9] = "WasmNotFound";
    PanicError[PanicError["WasmDisabledMicrosoftEdge"] = 10] = "WasmDisabledMicrosoftEdge";
    PanicError[PanicError["SwfFetchError"] = 11] = "SwfFetchError";
    PanicError[PanicError["SwfCors"] = 12] = "SwfCors";
})(PanicError || (PanicError = {}));
/**
 * Converts arbitrary input to an easy to use record object.
 *
 * @param parameters Parameters to sanitize
 * @returns A sanitized map of param name to param value
 */
function sanitizeParameters(parameters) {
    if (parameters === null || parameters === undefined) {
        return {};
    }
    if (!(parameters instanceof URLSearchParams)) {
        parameters = new URLSearchParams(parameters);
    }
    const output = {};
    for (const [key, value] of parameters) {
        // Every value must be type of string
        output[key] = value.toString();
    }
    return output;
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distanceTo(other) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
class PanicLinkInfo {
    constructor(url = "#", label = i18n_text("view-error-details")) {
        this.url = url;
        this.label = label;
    }
}
/**
 * The ruffle player element that should be inserted onto the page.
 *
 * This element will represent the rendered and intractable flash movie.
 */
class RufflePlayer extends HTMLElement {
    /**
     * Indicates the readiness of the playing movie.
     *
     * @returns The `ReadyState` of the player.
     */
    get readyState() {
        return this._readyState;
    }
    /**
     * The metadata of the playing movie (such as movie width and height).
     * These are inherent properties stored in the SWF file and are not affected by runtime changes.
     * For example, `metadata.width` is the width of the SWF file, and not the width of the Ruffle player.
     *
     * @returns The metadata of the movie, or `null` if the movie metadata has not yet loaded.
     */
    get metadata() {
        return this._metadata;
    }
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     */
    constructor() {
        super();
        // Allows the user to permanently disable the context menu.
        this.contextMenuForceDisabled = false;
        // Whether the most recent pointer event was from a touch (or pen).
        this.isTouch = false;
        // Whether this device sends contextmenu events.
        // Set to true when a contextmenu event is seen.
        this.contextMenuSupported = false;
        this.panicked = false;
        this.rendererDebugInfo = "";
        this.longPressTimer = null;
        this.pointerDownPosition = null;
        this.pointerMoveMaxDistance = 0;
        /**
         * Any configuration that should apply to this specific player.
         * This will be defaulted with any global configuration.
         */
        this.config = {};
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(ruffleShadowTemplate.content.cloneNode(true));
        this.dynamicStyles = (this.shadow.getElementById("dynamic-styles"));
        this.staticStyles = (this.shadow.getElementById("static-styles"));
        this.container = this.shadow.getElementById("container");
        this.playButton = this.shadow.getElementById("play-button");
        this.playButton.addEventListener("click", () => this.play());
        this.unmuteOverlay = this.shadow.getElementById("unmute-overlay");
        this.splashScreen = this.shadow.getElementById("splash-screen");
        this.virtualKeyboard = (this.shadow.getElementById("virtual-keyboard"));
        this.virtualKeyboard.addEventListener("input", this.virtualKeyboardInput.bind(this));
        this.saveManager = (this.shadow.getElementById("save-manager"));
        this.videoModal = (this.shadow.getElementById("video-modal"));
        this.hardwareAccelerationModal = (this.shadow.getElementById("hardware-acceleration-modal"));
        this.volumeControls = (this.shadow.getElementById("volume-controls-modal"));
        this.addModalJavaScript(this.saveManager);
        this.addModalJavaScript(this.volumeControls);
        this.addModalJavaScript(this.videoModal);
        this.addModalJavaScript(this.hardwareAccelerationModal);
        this.volumeSettings = new VolumeControls(false, 100);
        this.addVolumeControlsJavaScript(this.volumeControls);
        const backupSaves = (this.saveManager.querySelector("#backup-saves"));
        if (backupSaves) {
            backupSaves.addEventListener("click", this.backupSaves.bind(this));
            backupSaves.innerText = i18n_text("save-backup-all");
        }
        const unmuteSvg = (this.unmuteOverlay.querySelector("#unmute-overlay-svg"));
        if (unmuteSvg) {
            const unmuteText = (unmuteSvg.querySelector("#unmute-text"));
            unmuteText.textContent = i18n_text("click-to-unmute");
        }
        this.contextMenuOverlay = this.shadow.getElementById("context-menu-overlay");
        this.contextMenuElement = this.shadow.getElementById("context-menu");
        document.documentElement.addEventListener("pointerdown", this.checkIfTouch.bind(this));
        this.addEventListener("contextmenu", this.showContextMenu.bind(this));
        this.container.addEventListener("pointerdown", this.pointerDown.bind(this));
        this.container.addEventListener("pointermove", this.checkLongPressMovement.bind(this));
        this.container.addEventListener("pointerup", this.checkLongPress.bind(this));
        this.container.addEventListener("pointercancel", this.clearLongPressTimer.bind(this));
        this.addEventListener("fullscreenchange", this.fullScreenChange.bind(this));
        this.addEventListener("webkitfullscreenchange", this.fullScreenChange.bind(this));
        this.instance = null;
        this.onFSCommand = null;
        this._readyState = ReadyState.HaveNothing;
        this._metadata = null;
        this.lastActivePlayingState = false;
        this.setupPauseOnTabHidden();
    }
    /**
     * Add functions to open and close a modal.
     *
     * @param modalElement The element containing the modal.
     */
    addModalJavaScript(modalElement) {
        const videoHolder = modalElement.querySelector("#video-holder");
        this.container.addEventListener("click", () => {
            modalElement.classList.add("hidden");
            if (videoHolder) {
                videoHolder.textContent = "";
            }
        });
        const modalArea = modalElement.querySelector(".modal-area");
        if (modalArea) {
            modalArea.addEventListener("click", (event) => event.stopPropagation());
        }
        const closeModal = modalElement.querySelector(".close-modal");
        if (closeModal) {
            closeModal.addEventListener("click", () => {
                modalElement.classList.add("hidden");
                if (videoHolder) {
                    videoHolder.textContent = "";
                }
            });
        }
    }
    /**
     * Add the volume control texts, set the controls to the current settings and
     * add event listeners to update the settings and controls when being changed.
     *
     * @param volumeControlsModal The element containing the volume controls modal.
     */
    addVolumeControlsJavaScript(volumeControlsModal) {
        const muteCheckbox = volumeControlsModal.querySelector("#mute-checkbox");
        const volumeSlider = volumeControlsModal.querySelector("#volume-slider");
        const volumeSliderText = volumeControlsModal.querySelector("#volume-slider-text");
        const heading = volumeControlsModal.querySelector("#volume-controls-heading");
        const muteCheckboxLabel = volumeControlsModal.querySelector("#mute-checkbox-label");
        const volumeSliderLabel = volumeControlsModal.querySelector("#volume-slider-label");
        // Add the texts.
        heading.textContent = i18n_text("volume-controls");
        muteCheckboxLabel.textContent = i18n_text("volume-controls-mute");
        volumeSliderLabel.textContent = i18n_text("volume-controls-volume");
        // Set the controls to the current settings.
        muteCheckbox.checked = this.volumeSettings.isMuted;
        volumeSlider.disabled = muteCheckbox.checked;
        volumeSlider.valueAsNumber = this.volumeSettings.volume;
        volumeSliderLabel.style.color = muteCheckbox.checked ? "grey" : "black";
        volumeSliderText.style.color = muteCheckbox.checked ? "grey" : "black";
        volumeSliderText.textContent = String(this.volumeSettings.volume);
        // Add event listeners to update the settings and controls.
        muteCheckbox.addEventListener("change", () => {
            var _a;
            volumeSlider.disabled = muteCheckbox.checked;
            volumeSliderLabel.style.color = muteCheckbox.checked
                ? "grey"
                : "black";
            volumeSliderText.style.color = muteCheckbox.checked
                ? "grey"
                : "black";
            this.volumeSettings.isMuted = muteCheckbox.checked;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_volume(this.volumeSettings.get_volume());
        });
        volumeSlider.addEventListener("input", () => {
            var _a;
            volumeSliderText.textContent = volumeSlider.value;
            this.volumeSettings.volume = volumeSlider.valueAsNumber;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_volume(this.volumeSettings.get_volume());
        });
    }
    /**
     * Setup event listener to detect when tab is not active to pause instance playback.
     * this.instance.play() is called when the tab becomes visible only if the
     * the instance was not paused before tab became hidden.
     *
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
     * @ignore
     * @internal
     */
    setupPauseOnTabHidden() {
        document.addEventListener("visibilitychange", () => {
            if (!this.instance) {
                return;
            }
            // Tab just changed to be inactive. Record whether instance was playing.
            if (document.hidden) {
                this.lastActivePlayingState = this.instance.is_playing();
                this.instance.pause();
            }
            // Play only if instance was playing originally.
            if (!document.hidden && this.lastActivePlayingState === true) {
                this.instance.play();
            }
        }, false);
    }
    /**
     * Polyfill of height getter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    get height() {
        return this.getAttribute("height") || "";
    }
    /**
     * Polyfill of height setter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    set height(height) {
        this.setAttribute("height", height);
    }
    /**
     * Polyfill of width getter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    get width() {
        return this.getAttribute("width") || "";
    }
    /**
     * Polyfill of width setter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    set width(widthVal) {
        this.setAttribute("width", widthVal);
    }
    /**
     * Polyfill of type getter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    get type() {
        return this.getAttribute("type") || "";
    }
    /**
     * Polyfill of type setter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    set type(typeVal) {
        this.setAttribute("type", typeVal);
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        this.updateStyles();
        applyStaticStyles(this.staticStyles);
    }
    /**
     * @ignore
     * @internal
     */
    static get observedAttributes() {
        return ["width", "height"];
    }
    /**
     * @ignore
     * @internal
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === "width" || name === "height") {
            this.updateStyles();
        }
    }
    /**
     * @ignore
     * @internal
     */
    disconnectedCallback() {
        this.destroy();
    }
    /**
     * Updates the internal shadow DOM to reflect any set attributes from
     * this element.
     */
    updateStyles() {
        if (this.dynamicStyles.sheet) {
            if (this.dynamicStyles.sheet.cssRules) {
                for (let i = this.dynamicStyles.sheet.cssRules.length - 1; i >= 0; i--) {
                    this.dynamicStyles.sheet.deleteRule(i);
                }
            }
            const widthAttr = this.attributes.getNamedItem("width");
            if (widthAttr !== undefined && widthAttr !== null) {
                const width = RufflePlayer.htmlDimensionToCssDimension(widthAttr.value);
                if (width !== null) {
                    this.dynamicStyles.sheet.insertRule(`:host { width: ${width}; }`);
                }
            }
            const heightAttr = this.attributes.getNamedItem("height");
            if (heightAttr !== undefined && heightAttr !== null) {
                const height = RufflePlayer.htmlDimensionToCssDimension(heightAttr.value);
                if (height !== null) {
                    this.dynamicStyles.sheet.insertRule(`:host { height: ${height}; }`);
                }
            }
        }
    }
    /**
     * Determine if this element is the fallback content of another Ruffle
     * player.
     *
     * This heuristic assumes Ruffle objects will never use their fallback
     * content. If this changes, then this code also needs to change.
     *
     * @private
     */
    isUnusedFallbackObject() {
        const element = lookupElement("ruffle-object");
        if (element !== null) {
            let parent = this.parentNode;
            while (parent !== document && parent !== null) {
                if (parent.nodeName === element.name) {
                    return true;
                }
                parent = parent.parentNode;
            }
        }
        return false;
    }
    /**
     * Ensure a fresh Ruffle instance is ready on this player before continuing.
     *
     * @throws Any exceptions generated by loading Ruffle Core will be logged
     * and passed on.
     *
     * @private
     */
    async ensureFreshInstance() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.destroy();
        if (this.loadedConfig &&
            this.loadedConfig.splashScreen !== false &&
            this.loadedConfig.preloader !== false) {
            this.showSplashScreen();
        }
        if (this.loadedConfig && this.loadedConfig.preloader === false) {
            console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration.");
        }
        if (this.loadedConfig &&
            this.loadedConfig.maxExecutionDuration &&
            typeof this.loadedConfig.maxExecutionDuration !== "number") {
            console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, " +
                "please use a single number indicating seconds instead. For instance '15' instead of " +
                "'{secs: 15, nanos: 0}'.");
        }
        if (this.loadedConfig &&
            typeof this.loadedConfig.contextMenu === "boolean") {
            console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');
        }
        this.instance = await loadRuffle(this.container, this, this.loadedConfig || {}, this.onRuffleDownloadProgress.bind(this)).catch((e) => {
            console.error(`Serious error loading Ruffle: ${e}`);
            // Serious duck typing. In error conditions, let's not make assumptions.
            if (window.location.protocol === "file:") {
                e.ruffleIndexError = PanicError.FileProtocol;
            }
            else {
                e.ruffleIndexError = PanicError.WasmNotFound;
                const message = String(e.message).toLowerCase();
                if (message.includes("mime")) {
                    e.ruffleIndexError = PanicError.WasmMimeType;
                }
                else if (message.includes("networkerror") ||
                    message.includes("failed to fetch")) {
                    e.ruffleIndexError = PanicError.WasmCors;
                }
                else if (message.includes("disallowed by embedder")) {
                    e.ruffleIndexError = PanicError.CSPConflict;
                }
                else if (e.name === "CompileError") {
                    e.ruffleIndexError = PanicError.InvalidWasm;
                }
                else if (message.includes("could not download wasm module") &&
                    e.name === "TypeError") {
                    e.ruffleIndexError = PanicError.WasmDownload;
                }
                else if (e.name === "TypeError") {
                    e.ruffleIndexError = PanicError.JavascriptConflict;
                }
                else if (navigator.userAgent.includes("Edg") &&
                    message.includes("webassembly is not defined")) {
                    // Microsoft Edge detection.
                    e.ruffleIndexError = PanicError.WasmDisabledMicrosoftEdge;
                }
            }
            this.panic(e);
            throw e;
        });
        if ((_a = this.loadedConfig) === null || _a === void 0 ? void 0 : _a.fontSources) {
            for (const url of this.loadedConfig.fontSources) {
                try {
                    const response = await fetch(url);
                    this.instance.add_font(url, new Uint8Array(await response.arrayBuffer()));
                }
                catch (error) {
                    console.warn(`Couldn't download font source from ${url}`, error);
                }
            }
        }
        if ((_c = (_b = this.loadedConfig) === null || _b === void 0 ? void 0 : _b.defaultFonts) === null || _c === void 0 ? void 0 : _c.sans) {
            this.instance.set_default_font("sans", (_d = this.loadedConfig) === null || _d === void 0 ? void 0 : _d.defaultFonts.sans);
        }
        if ((_f = (_e = this.loadedConfig) === null || _e === void 0 ? void 0 : _e.defaultFonts) === null || _f === void 0 ? void 0 : _f.serif) {
            this.instance.set_default_font("serif", (_g = this.loadedConfig) === null || _g === void 0 ? void 0 : _g.defaultFonts.serif);
        }
        if ((_j = (_h = this.loadedConfig) === null || _h === void 0 ? void 0 : _h.defaultFonts) === null || _j === void 0 ? void 0 : _j.typewriter) {
            this.instance.set_default_font("typewriter", (_k = this.loadedConfig) === null || _k === void 0 ? void 0 : _k.defaultFonts.typewriter);
        }
        this.instance.set_volume(this.volumeSettings.get_volume());
        this.rendererDebugInfo = this.instance.renderer_debug_info();
        if (this.rendererDebugInfo.includes("Adapter Device Type: Cpu")) {
            this.container.addEventListener("mouseover", this.openHardwareAccelerationModal.bind(this), {
                once: true,
            });
        }
        const actuallyUsedRendererName = this.instance.renderer_name();
        const constructor = this.instance.constructor;
        console.log("%c" +
            "New Ruffle instance created (Version: " +
            buildInfo.versionName +
            " | WebAssembly extensions: " +
            (constructor.is_wasm_simd_used() ? "ON" : "OFF") +
            " | Used renderer: " +
            (actuallyUsedRendererName !== null && actuallyUsedRendererName !== void 0 ? actuallyUsedRendererName : "") +
            ")", "background: #37528C; color: #FFAD33");
        // In Firefox, AudioContext.state is always "suspended" when the object has just been created.
        // It may change by itself to "running" some milliseconds later. So we need to wait a little
        // bit before checking if autoplay is supported and applying the instance config.
        if (this.audioState() !== "running") {
            this.container.style.visibility = "hidden";
            await new Promise((resolve) => {
                window.setTimeout(() => {
                    resolve();
                }, 200);
            });
            this.container.style.visibility = "";
        }
        this.unmuteAudioContext();
        // On Android, the virtual keyboard needs to be dismissed as otherwise it re-focuses when clicking elsewhere
        if (navigator.userAgent.toLowerCase().includes("android")) {
            this.container.addEventListener("click", () => this.virtualKeyboard.blur());
        }
        // Treat invalid values as `AutoPlay.Auto`.
        if (!this.loadedConfig ||
            this.loadedConfig.autoplay === AutoPlay.On ||
            (this.loadedConfig.autoplay !== AutoPlay.Off &&
                this.audioState() === "running")) {
            this.play();
            if (this.audioState() !== "running") {
                // Treat invalid values as `UnmuteOverlay.Visible`.
                if (!this.loadedConfig ||
                    this.loadedConfig.unmuteOverlay !== UnmuteOverlay.Hidden) {
                    this.unmuteOverlay.style.display = "block";
                }
                this.container.addEventListener("click", this.unmuteOverlayClicked.bind(this), {
                    once: true,
                });
                const audioContext = (_l = this.instance) === null || _l === void 0 ? void 0 : _l.audio_context();
                if (audioContext) {
                    audioContext.onstatechange = () => {
                        if (audioContext.state === "running") {
                            this.unmuteOverlayClicked();
                        }
                        audioContext.onstatechange = null;
                    };
                }
            }
        }
        else {
            this.playButton.style.display = "block";
        }
    }
    /**
     * Uploads the splash screen progress bar.
     *
     * @param bytesLoaded The size of the Ruffle WebAssembly file downloaded so far.
     * @param bytesTotal The total size of the Ruffle WebAssembly file.
     */
    onRuffleDownloadProgress(bytesLoaded, bytesTotal) {
        const loadBar = (this.splashScreen.querySelector(".loadbar-inner"));
        const outerLoadbar = (this.splashScreen.querySelector(".loadbar"));
        if (Number.isNaN(bytesTotal)) {
            if (outerLoadbar) {
                outerLoadbar.style.display = "none";
            }
        }
        else {
            loadBar.style.width = `${100.0 * (bytesLoaded / bytesTotal)}%`;
        }
    }
    /**
     * Destroys the currently running instance of Ruffle.
     */
    destroy() {
        if (this.instance) {
            this.instance.destroy();
            this.instance = null;
            this._metadata = null;
            this._readyState = ReadyState.HaveNothing;
            console.log("Ruffle instance destroyed.");
        }
    }
    checkOptions(options) {
        if (typeof options === "string") {
            return { url: options };
        }
        const check = (condition, message) => {
            if (!condition) {
                const error = new TypeError(message);
                error.ruffleIndexError = PanicError.JavascriptConfiguration;
                this.panic(error);
                throw error;
            }
        };
        check(options !== null && typeof options === "object", "Argument 0 must be a string or object");
        check("url" in options || "data" in options, "Argument 0 must contain a `url` or `data` key");
        check(!("url" in options) || typeof options.url === "string", "`url` must be a string");
        return options;
    }
    /**
     * Reloads the player, as if you called {@link RufflePlayer.load} with the same config as the last time it was called.
     *
     * If this player has never been loaded, this method will return an error.
     */
    async reload() {
        if (this.loadedConfig) {
            await this.load(this.loadedConfig);
        }
        else {
            throw new Error("Cannot reload if load wasn't first called");
        }
    }
    /**
     * Loads a specified movie into this player.
     *
     * This will replace any existing movie that may be playing.
     *
     * @param options One of the following:
     * - A URL, passed as a string, which will load a URL with default options.
     * - A [[URLLoadOptions]] object, to load a URL with options.
     * - A [[DataLoadOptions]] object, to load data with options.
     * The options, if provided, must only contain values provided for this specific movie.
     * They must not contain any default values, since those would overwrite other configuration
     * settings with a lower priority (e.g. the general RufflePlayer config).
     * @param isPolyfillElement Whether the element is a polyfilled Flash element or not.
     * This is used to determine a default value of the configuration.
     *
     * The options will be defaulted by the [[config]] field, which itself
     * is defaulted by a global `window.RufflePlayer.config`.
     */
    async load(options, isPolyfillElement = false) {
        var _a, _b;
        options = this.checkOptions(options);
        if (!this.isConnected || this.isUnusedFallbackObject()) {
            console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");
            return;
        }
        if (isFallbackElement(this)) {
            // Silently fail on attempt to play a Ruffle element inside a specific node.
            return;
        }
        try {
            this.loadedConfig = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, DEFAULT_CONFIG), (isPolyfillElement && "url" in options
                ? {
                    allowScriptAccess: parseAllowScriptAccess("samedomain", options.url),
                }
                : {})), ((_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {})), this.config), options);
            // Pre-emptively set background color of container while Ruffle/SWF loads.
            if (this.loadedConfig.backgroundColor &&
                this.loadedConfig.wmode !== WindowMode.Transparent) {
                this.container.style.backgroundColor =
                    this.loadedConfig.backgroundColor;
            }
            await this.ensureFreshInstance();
            if ("url" in options) {
                console.log(`Loading SWF file ${options.url}`);
                this.swfUrl = new URL(options.url, document.baseURI);
                this.instance.stream_from(this.swfUrl.href, sanitizeParameters(options.parameters));
            }
            else if ("data" in options) {
                console.log("Loading SWF data");
                this.instance.load_data(new Uint8Array(options.data), sanitizeParameters(options.parameters), options.swfFileName || "movie.swf");
            }
        }
        catch (e) {
            console.error(`Serious error occurred loading SWF file: ${e}`);
            const err = new Error(e);
            if (err.message.includes("Error parsing config")) {
                err.ruffleIndexError = PanicError.JavascriptConfiguration;
            }
            this.panic(err);
            throw err;
        }
    }
    /**
     * Plays or resumes the movie.
     */
    play() {
        if (this.instance) {
            this.instance.play();
            this.playButton.style.display = "none";
        }
    }
    /**
     * Whether this player is currently playing.
     *
     * @returns True if this player is playing, false if it's paused or hasn't started yet.
     */
    get isPlaying() {
        if (this.instance) {
            return this.instance.is_playing();
        }
        return false;
    }
    /**
     * Returns the master volume of the player.
     *
     * The volume is linear and not adapted for logarithmic hearing.
     *
     * @returns The volume. 1.0 is 100% volume.
     */
    get volume() {
        if (this.instance) {
            return this.instance.volume();
        }
        return 1.0;
    }
    /**
     * Sets the master volume of the player.
     *
     * The volume should be linear and not adapted for logarithmic hearing.
     *
     * @param value The volume. 1.0 is 100% volume.
     */
    set volume(value) {
        if (this.instance) {
            this.instance.set_volume(value);
        }
    }
    /**
     * Checks if this player is allowed to be fullscreen by the browser.
     *
     * @returns True if you may call [[enterFullscreen]].
     */
    get fullscreenEnabled() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    }
    /**
     * Checks if this player is currently fullscreen inside the browser.
     *
     * @returns True if it is fullscreen.
     */
    get isFullscreen() {
        return ((document.fullscreenElement || document.webkitFullscreenElement) ===
            this);
    }
    /**
     * Exported function that requests the browser to change the fullscreen state if
     * it is allowed.
     *
     * @param isFull Whether to set to fullscreen or return to normal.
     */
    setFullscreen(isFull) {
        if (this.fullscreenEnabled && isFull !== this.isFullscreen) {
            if (isFull) {
                this.enterFullscreen();
            }
            else {
                this.exitFullscreen();
            }
        }
    }
    /**
     * Requests the browser to make this player fullscreen.
     *
     * This is not guaranteed to succeed, please check [[fullscreenEnabled]] first.
     */
    enterFullscreen() {
        const options = {
            navigationUI: "hide",
        };
        if (this.requestFullscreen) {
            this.requestFullscreen(options);
        }
        else if (this.webkitRequestFullscreen) {
            this.webkitRequestFullscreen(options);
        }
        else if (this.webkitRequestFullScreen) {
            this.webkitRequestFullScreen(options);
        }
    }
    /**
     * Requests the browser to no longer make this player fullscreen.
     */
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    /**
     * Called when entering / leaving fullscreen.
     */
    fullScreenChange() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_fullscreen(this.isFullscreen);
    }
    /**
     * Prompt the user to download a file.
     *
     * @param blob The content to download.
     * @param name The name to give the file.
     */
    saveFile(blob, name) {
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobURL;
        link.style.display = "none";
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobURL);
    }
    checkIfTouch(event) {
        this.isTouch =
            event.pointerType === "touch" || event.pointerType === "pen";
    }
    base64ToBlob(bytesBase64, mimeString) {
        const byteString = atob(bytesBase64);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        return blob;
    }
    /**
     * @returns If the string represent a base-64 encoded SOL file
     * Check if string is a base-64 encoded SOL file
     * @param solData The base-64 encoded SOL string
     */
    isB64SOL(solData) {
        try {
            const decodedData = atob(solData);
            return decodedData.slice(6, 10) === "TCSO";
        }
        catch (e) {
            return false;
        }
    }
    confirmReloadSave(solKey, b64SolData, replace) {
        if (this.isB64SOL(b64SolData)) {
            if (localStorage[solKey]) {
                if (!replace) {
                    const confirmDelete = confirm(i18n_text("save-delete-prompt"));
                    if (!confirmDelete) {
                        return;
                    }
                }
                const swfPath = this.swfUrl ? this.swfUrl.pathname : "";
                const swfHost = this.swfUrl
                    ? this.swfUrl.hostname
                    : document.location.hostname;
                const savePath = solKey.split("/").slice(1, -1).join("/");
                if (swfPath.includes(savePath) && solKey.startsWith(swfHost)) {
                    const confirmReload = confirm(i18n_text("save-reload-prompt", {
                        action: replace ? "replace" : "delete",
                    }));
                    if (confirmReload && this.loadedConfig) {
                        this.destroy();
                        replace
                            ? localStorage.setItem(solKey, b64SolData)
                            : localStorage.removeItem(solKey);
                        this.reload();
                        this.populateSaves();
                        this.saveManager.classList.add("hidden");
                    }
                    return;
                }
                replace
                    ? localStorage.setItem(solKey, b64SolData)
                    : localStorage.removeItem(solKey);
                this.populateSaves();
                this.saveManager.classList.add("hidden");
            }
        }
    }
    /**
     * Replace save from SOL file.
     *
     * @param event The change event fired
     * @param solKey The localStorage save file key
     */
    replaceSOL(event, solKey) {
        const fileInput = event.target;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            if (reader.result && typeof reader.result === "string") {
                const b64Regex = new RegExp("data:.*;base64,");
                const b64SolData = reader.result.replace(b64Regex, "");
                this.confirmReloadSave(solKey, b64SolData, true);
            }
        });
        if (fileInput &&
            fileInput.files &&
            fileInput.files.length > 0 &&
            fileInput.files[0]) {
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
    /**
     * Delete local save.
     *
     * @param key The key to remove from local storage
     */
    deleteSave(key) {
        const b64SolData = localStorage.getItem(key);
        if (b64SolData) {
            this.confirmReloadSave(key, b64SolData, false);
        }
    }
    /**
     * Puts the local save SOL file keys in a table.
     */
    populateSaves() {
        const saveTable = this.saveManager.querySelector("#local-saves");
        if (!saveTable) {
            return;
        }
        try {
            if (localStorage === null) {
                return;
            }
        }
        catch (e) {
            return;
        }
        saveTable.textContent = "";
        Object.keys(localStorage).forEach((key) => {
            const solName = key.split("/").pop();
            const solData = localStorage.getItem(key);
            if (solName && solData && this.isB64SOL(solData)) {
                const row = document.createElement("TR");
                const keyCol = document.createElement("TD");
                keyCol.textContent = solName;
                keyCol.title = key;
                const downloadCol = document.createElement("TD");
                const downloadSpan = document.createElement("SPAN");
                downloadSpan.textContent = i18n_text("save-download");
                downloadSpan.className = "save-option";
                downloadSpan.addEventListener("click", () => {
                    const blob = this.base64ToBlob(solData, "application/octet-stream");
                    this.saveFile(blob, solName + ".sol");
                });
                downloadCol.appendChild(downloadSpan);
                const replaceCol = document.createElement("TD");
                const replaceInput = (document.createElement("INPUT"));
                replaceInput.type = "file";
                replaceInput.accept = ".sol";
                replaceInput.className = "replace-save";
                replaceInput.id = "replace-save-" + key;
                const replaceLabel = (document.createElement("LABEL"));
                replaceLabel.htmlFor = "replace-save-" + key;
                replaceLabel.textContent = i18n_text("save-replace");
                replaceLabel.className = "save-option";
                replaceInput.addEventListener("change", (event) => this.replaceSOL(event, key));
                replaceCol.appendChild(replaceInput);
                replaceCol.appendChild(replaceLabel);
                const deleteCol = document.createElement("TD");
                const deleteSpan = document.createElement("SPAN");
                deleteSpan.textContent = i18n_text("save-delete");
                deleteSpan.className = "save-option";
                deleteSpan.addEventListener("click", () => this.deleteSave(key));
                deleteCol.appendChild(deleteSpan);
                row.appendChild(keyCol);
                row.appendChild(downloadCol);
                row.appendChild(replaceCol);
                row.appendChild(deleteCol);
                saveTable.appendChild(row);
            }
        });
    }
    /**
     * Gets the local save information as SOL files and downloads them as a single ZIP file.
     */
    async backupSaves() {
        const zip = new (jszip_min_default())();
        const duplicateNames = [];
        Object.keys(localStorage).forEach((key) => {
            let solName = String(key.split("/").pop());
            const solData = localStorage.getItem(key);
            if (solData && this.isB64SOL(solData)) {
                const blob = this.base64ToBlob(solData, "application/octet-stream");
                const duplicate = duplicateNames.filter((value) => value === solName).length;
                duplicateNames.push(solName);
                if (duplicate > 0) {
                    solName += ` (${duplicate + 1})`;
                }
                zip.file(solName + ".sol", blob);
            }
        });
        const blob = await zip.generateAsync({ type: "blob" });
        this.saveFile(blob, "saves.zip");
    }
    /**
     * Opens the hardware acceleration info modal.
     */
    openHardwareAccelerationModal() {
        this.hardwareAccelerationModal.classList.remove("hidden");
    }
    /**
     * Opens the save manager.
     */
    openSaveManager() {
        this.saveManager.classList.remove("hidden");
    }
    /**
     * Opens the volume controls.
     */
    openVolumeControls() {
        this.volumeControls.classList.remove("hidden");
    }
    /**
     * Fetches the loaded SWF and downloads it.
     */
    async downloadSwf() {
        try {
            if (this.swfUrl) {
                console.log("Downloading SWF: " + this.swfUrl);
                const response = await fetch(this.swfUrl.href);
                if (!response.ok) {
                    console.error("SWF download failed");
                    return;
                }
                const blob = await response.blob();
                this.saveFile(blob, swfFileName(this.swfUrl));
            }
            else {
                console.error("SWF download failed");
            }
        }
        catch (err) {
            console.error("SWF download failed");
        }
    }
    virtualKeyboardInput() {
        const input = this.virtualKeyboard;
        const string = input.value;
        for (const char of string) {
            for (const eventType of ["keydown", "keyup"]) {
                this.dispatchEvent(new KeyboardEvent(eventType, {
                    key: char,
                    bubbles: true,
                }));
            }
        }
        input.value = "";
    }
    openVirtualKeyboard() {
        // On Android, the Rust code that opens the virtual keyboard triggers
        // before the TypeScript code that closes it, so delay opening it
        if (navigator.userAgent.toLowerCase().includes("android")) {
            setTimeout(() => {
                this.virtualKeyboard.focus({ preventScroll: true });
            }, 100);
        }
        else {
            this.virtualKeyboard.focus({ preventScroll: true });
        }
    }
    isVirtualKeyboardFocused() {
        return this.shadow.activeElement === this.virtualKeyboard;
    }
    contextMenuItems() {
        const CHECKMARK = String.fromCharCode(0x2713);
        const items = [];
        const addSeparator = () => {
            // Don't start with or duplicate separators.
            if (items.length > 0 && items[items.length - 1] !== null) {
                items.push(null);
            }
        };
        if (this.instance && this.isPlaying) {
            const customItems = this.instance.prepare_context_menu();
            customItems.forEach((item, index) => {
                if (item.separatorBefore) {
                    addSeparator();
                }
                items.push({
                    // TODO: better checkboxes
                    text: item.caption + (item.checked ? ` (${CHECKMARK})` : ``),
                    onClick: () => { var _a; return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.run_context_menu_callback(index); },
                    enabled: item.enabled,
                });
            });
            addSeparator();
        }
        if (this.fullscreenEnabled) {
            if (this.isFullscreen) {
                items.push({
                    text: i18n_text("context-menu-exit-fullscreen"),
                    onClick: () => { var _a; return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_fullscreen(false); },
                });
            }
            else {
                items.push({
                    text: i18n_text("context-menu-enter-fullscreen"),
                    onClick: () => { var _a; return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_fullscreen(true); },
                });
            }
        }
        items.push({
            text: i18n_text("context-menu-volume-controls"),
            onClick: () => {
                this.openVolumeControls();
            },
        });
        if (this.instance &&
            this.swfUrl &&
            this.loadedConfig &&
            this.loadedConfig.showSwfDownload === true) {
            addSeparator();
            items.push({
                text: i18n_text("context-menu-download-swf"),
                onClick: this.downloadSwf.bind(this),
            });
        }
        if (navigator.clipboard && window.isSecureContext) {
            items.push({
                text: i18n_text("context-menu-copy-debug-info"),
                onClick: () => navigator.clipboard.writeText(this.getPanicData()),
            });
        }
        this.populateSaves();
        const localSaveTable = this.saveManager.querySelector("#local-saves");
        if (localSaveTable && localSaveTable.textContent !== "") {
            items.push({
                text: i18n_text("context-menu-open-save-manager"),
                onClick: this.openSaveManager.bind(this),
            });
        }
        addSeparator();
        items.push({
            text: i18n_text("context-menu-about-ruffle", {
                flavor: isExtension ? "extension" : "",
                version: buildInfo.versionName,
            }),
            onClick() {
                window.open(RUFFLE_ORIGIN, "_blank");
            },
        });
        // Give option to disable context menu when touch support is being used
        // to avoid a long press triggering the context menu. (#1972)
        if (this.isTouch) {
            addSeparator();
            items.push({
                text: i18n_text("context-menu-hide"),
                onClick: () => (this.contextMenuForceDisabled = true),
            });
        }
        return items;
    }
    pointerDown(event) {
        this.pointerDownPosition = new Point(event.pageX, event.pageY);
        this.pointerMoveMaxDistance = 0;
        this.startLongPressTimer();
    }
    clearLongPressTimer() {
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }
    }
    startLongPressTimer() {
        const longPressTimeout = 800;
        this.clearLongPressTimer();
        this.longPressTimer = setTimeout(() => this.clearLongPressTimer(), longPressTimeout);
    }
    checkLongPressMovement(event) {
        if (this.pointerDownPosition !== null) {
            const currentPosition = new Point(event.pageX, event.pageY);
            const distance = this.pointerDownPosition.distanceTo(currentPosition);
            if (distance > this.pointerMoveMaxDistance) {
                this.pointerMoveMaxDistance = distance;
            }
        }
    }
    checkLongPress(event) {
        const maxAllowedDistance = 15;
        if (this.longPressTimer) {
            this.clearLongPressTimer();
            // The pointerType condition is to ensure right-click does not trigger
            // a context menu the wrong way the first time you right-click,
            // before contextMenuSupported is set.
        }
        else if (!this.contextMenuSupported &&
            event.pointerType !== "mouse" &&
            this.pointerMoveMaxDistance < maxAllowedDistance) {
            this.showContextMenu(event);
        }
    }
    showContextMenu(event) {
        var _a, _b, _c;
        const modalOpen = Array.from(this.shadow.querySelectorAll(".modal")).some((modal) => !modal.classList.contains("hidden"));
        if (this.panicked || modalOpen) {
            return;
        }
        event.preventDefault();
        if (event.type === "contextmenu") {
            this.contextMenuSupported = true;
            document.documentElement.addEventListener("click", this.hideContextMenu.bind(this), {
                once: true,
            });
        }
        else {
            document.documentElement.addEventListener("pointerup", this.hideContextMenu.bind(this), { once: true });
            event.stopPropagation();
        }
        if ([false, ContextMenu.Off].includes((_b = (_a = this.loadedConfig) === null || _a === void 0 ? void 0 : _a.contextMenu) !== null && _b !== void 0 ? _b : ContextMenu.On) ||
            (this.isTouch &&
                ((_c = this.loadedConfig) === null || _c === void 0 ? void 0 : _c.contextMenu) ===
                    ContextMenu.RightClickOnly) ||
            this.contextMenuForceDisabled) {
            return;
        }
        // Clear all context menu items.
        while (this.contextMenuElement.firstChild) {
            this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
        }
        // Populate context menu items.
        for (const item of this.contextMenuItems()) {
            if (item === null) {
                const menuSeparator = document.createElement("li");
                menuSeparator.className = "menu-separator";
                const hr = document.createElement("hr");
                menuSeparator.appendChild(hr);
                this.contextMenuElement.appendChild(menuSeparator);
            }
            else {
                const { text, onClick, enabled } = item;
                const menuItem = document.createElement("li");
                menuItem.className = "menu-item";
                menuItem.textContent = text;
                this.contextMenuElement.appendChild(menuItem);
                if (enabled !== false) {
                    menuItem.addEventListener(this.contextMenuSupported ? "click" : "pointerup", onClick);
                }
                else {
                    menuItem.classList.add("disabled");
                }
            }
        }
        // Place a context menu in the top-left corner, so
        // its `clientWidth` and `clientHeight` are not clamped.
        this.contextMenuElement.style.left = "0";
        this.contextMenuElement.style.top = "0";
        this.contextMenuOverlay.classList.remove("hidden");
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.x;
        const y = event.clientY - rect.y;
        const maxX = rect.width - this.contextMenuElement.clientWidth - 1;
        const maxY = rect.height - this.contextMenuElement.clientHeight - 1;
        this.contextMenuElement.style.left =
            Math.floor(Math.min(x, maxX)) + "px";
        this.contextMenuElement.style.top =
            Math.floor(Math.min(y, maxY)) + "px";
    }
    hideContextMenu() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.clear_custom_menu_items();
        this.contextMenuOverlay.classList.add("hidden");
    }
    /**
     * Pauses this player.
     *
     * No more frames, scripts or sounds will be executed.
     * This movie will be considered inactive and will not wake up until resumed.
     */
    pause() {
        if (this.instance) {
            this.instance.pause();
            this.playButton.style.display = "block";
        }
    }
    audioState() {
        if (this.instance) {
            const audioContext = this.instance.audio_context();
            return (audioContext && audioContext.state) || "running";
        }
        return "suspended";
    }
    unmuteOverlayClicked() {
        if (this.instance) {
            if (this.audioState() !== "running") {
                const audioContext = this.instance.audio_context();
                if (audioContext) {
                    audioContext.resume();
                }
            }
            this.unmuteOverlay.style.display = "none";
        }
    }
    /**
     * Plays a silent sound based on the AudioContext's sample rate.
     *
     * This is used to unmute audio on iOS and iPadOS when silent mode is enabled on the device (issue 1552).
     */
    unmuteAudioContext() {
        // No need to play the dummy sound again once audio is unmuted.
        if (isAudioContextUnmuted) {
            return;
        }
        // TODO: Use `navigator.userAgentData` to detect the platform when support improves?
        if (navigator.maxTouchPoints < 1) {
            isAudioContextUnmuted = true;
            return;
        }
        this.container.addEventListener("click", () => {
            var _a;
            if (isAudioContextUnmuted) {
                return;
            }
            const audioContext = (_a = this.instance) === null || _a === void 0 ? void 0 : _a.audio_context();
            if (!audioContext) {
                return;
            }
            const audio = new Audio();
            audio.src = (() => {
                // Returns a seven samples long 8 bit mono WAVE file.
                // This is required to prevent the AudioContext from desyncing and crashing.
                const arrayBuffer = new ArrayBuffer(10);
                const dataView = new DataView(arrayBuffer);
                const sampleRate = audioContext.sampleRate;
                dataView.setUint32(0, sampleRate, true);
                dataView.setUint32(4, sampleRate, true);
                dataView.setUint16(8, 1, true);
                const missingCharacters = window
                    .btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
                    .slice(0, 13);
                return `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${missingCharacters}AgAZGF0YQcAAACAgICAgICAAAA=`;
            })();
            audio.load();
            audio
                .play()
                .then(() => {
                isAudioContextUnmuted = true;
            })
                .catch((err) => {
                console.warn(`Failed to play dummy sound: ${err}`);
            });
        }, { once: true });
    }
    /**
     * Copies attributes and children from another element to this player element.
     * Used by the polyfill elements, RuffleObject and RuffleEmbed.
     *
     * @param element The element to copy all attributes from.
     */
    copyElement(element) {
        if (element) {
            for (const attribute of element.attributes) {
                if (attribute.specified) {
                    // Issue 468: Chrome "Click to Active Flash" box stomps on title attribute
                    if (attribute.name === "title" &&
                        attribute.value === "Adobe Flash Player") {
                        continue;
                    }
                    try {
                        this.setAttribute(attribute.name, attribute.value);
                    }
                    catch (err) {
                        // The embed may have invalid attributes, so handle these gracefully.
                        console.warn(`Unable to set attribute ${attribute.name} on Ruffle instance`);
                    }
                }
            }
            for (const node of Array.from(element.children)) {
                this.appendChild(node);
            }
        }
    }
    /**
     * Converts a dimension attribute on an HTML embed/object element to a valid CSS dimension.
     * HTML element dimensions are unitless, but can also be percentages.
     * Add a 'px' unit unless the value is a percentage.
     * Returns null if this is not a valid dimension.
     *
     * @param attribute The attribute to convert
     *
     * @private
     */
    static htmlDimensionToCssDimension(attribute) {
        if (attribute) {
            const match = attribute.match(DIMENSION_REGEX);
            if (match) {
                let out = match[1];
                if (!match[3]) {
                    // Unitless -- add px for CSS.
                    out += "px";
                }
                return out;
            }
        }
        return null;
    }
    /**
     * When a movie presents a new callback through `ExternalInterface.addCallback`,
     * we are informed so that we can expose the method on any relevant DOM element.
     *
     * This should only be called by Ruffle itself and not by users.
     *
     * @param name The name of the callback that is now available.
     *
     * @internal
     * @ignore
     */
    onCallbackAvailable(name) {
        const instance = this.instance;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this[name] = (...args) => {
            return instance === null || instance === void 0 ? void 0 : instance.call_exposed_callback(name, args);
        };
    }
    /**
     * Sets a trace observer on this flash player.
     *
     * The observer will be called, as a function, for each message that the playing movie will "trace" (output).
     *
     * @param observer The observer that will be called for each trace.
     */
    set traceObserver(observer) {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_trace_observer(observer);
    }
    /**
     * Get data included in any panic of this ruffle-player
     *
     * @returns A string containing all the data included in the panic.
     */
    getPanicData() {
        let result = "\n# Player Info\n";
        result += `Allows script access: ${this.loadedConfig ? this.loadedConfig.allowScriptAccess : false}\n`;
        result += `${this.rendererDebugInfo}\n`;
        result += this.debugPlayerInfo();
        result += "\n# Page Info\n";
        result += `Page URL: ${document.location.href}\n`;
        if (this.swfUrl) {
            result += `SWF URL: ${this.swfUrl}\n`;
        }
        result += "\n# Browser Info\n";
        result += `User Agent: ${window.navigator.userAgent}\n`;
        result += `Platform: ${window.navigator.platform}\n`;
        result += `Has touch support: ${window.navigator.maxTouchPoints > 0}\n`;
        result += "\n# Ruffle Info\n";
        result += `Version: ${buildInfo.versionNumber}\n`;
        result += `Name: ${buildInfo.versionName}\n`;
        result += `Channel: ${buildInfo.versionChannel}\n`;
        result += `Built: ${buildInfo.buildDate}\n`;
        result += `Commit: ${buildInfo.commitHash}\n`;
        result += `Is extension: ${isExtension}\n`;
        result += "\n# Metadata\n";
        if (this.metadata) {
            for (const [key, value] of Object.entries(this.metadata)) {
                result += `${key}: ${value}\n`;
            }
        }
        return result;
    }
    /**
     * @param footerInfo An array of PanicLinkInfo objects.
     *
     * @returns The <ul> element to be used as the error footer
     */
    createErrorFooter(footerInfo) {
        const errorFooter = document.createElement("ul");
        for (const linkInfo of footerInfo) {
            const footerItem = document.createElement("li");
            const footerLink = document.createElement("a");
            footerLink.href = linkInfo.url;
            footerLink.textContent = linkInfo.label;
            if (linkInfo.url === "#") {
                footerLink.id = "panic-view-details";
            }
            else {
                footerLink.target = "_top";
            }
            footerItem.appendChild(footerLink);
            errorFooter.appendChild(footerItem);
        }
        return errorFooter;
    }
    /**
     * Panics this specific player, forcefully destroying all resources and displays an error message to the user.
     *
     * This should be called when something went absolutely, incredibly and disastrously wrong and there is no chance
     * of recovery.
     *
     * Ruffle will attempt to isolate all damage to this specific player instance, but no guarantees can be made if there
     * was a core issue which triggered the panic. If Ruffle is unable to isolate the cause to a specific player, then
     * all players will panic and Ruffle will become "poisoned" - no more players will run on this page until it is
     * reloaded fresh.
     *
     * @param error The error, if any, that triggered this panic.
     */
    panic(error) {
        var _a;
        if (this.panicked) {
            // Only show the first major error, not any repeats - they aren't as important
            return;
        }
        this.panicked = true;
        this.hideSplashScreen();
        if (error instanceof Error &&
            (error.name === "AbortError" ||
                error.message.includes("AbortError"))) {
            // Firefox: Don't display the panic screen if the user leaves the page while something is still loading
            return;
        }
        const errorIndex = (_a = error === null || error === void 0 ? void 0 : error.ruffleIndexError) !== null && _a !== void 0 ? _a : PanicError.Unknown;
        const errorArray = Object.assign([], {
            stackIndex: -1,
            avmStackIndex: -1,
        });
        errorArray.push("# Error Info\n");
        if (error instanceof Error) {
            errorArray.push(`Error name: ${error.name}\n`);
            errorArray.push(`Error message: ${error.message}\n`);
            if (error.stack) {
                const stackIndex = errorArray.push(`Error stack:\n\`\`\`\n${error.stack}\n\`\`\`\n`) - 1;
                if (error.avmStack) {
                    const avmStackIndex = errorArray.push(`AVM2 stack:\n\`\`\`\n    ${error.avmStack
                        .trim()
                        .replace(/\t/g, "    ")}\n\`\`\`\n`) - 1;
                    errorArray.avmStackIndex = avmStackIndex;
                }
                errorArray.stackIndex = stackIndex;
            }
        }
        else {
            errorArray.push(`Error: ${error}\n`);
        }
        errorArray.push(this.getPanicData());
        const errorText = errorArray.join("");
        const buildDate = new Date(buildInfo.buildDate);
        const monthsPrior = new Date();
        monthsPrior.setMonth(monthsPrior.getMonth() - 6); // 6 months prior
        const isBuildOutdated = monthsPrior > buildDate;
        // Create a link to GitHub with all of the error data, if the build is not outdated.
        // Otherwise, create a link to the downloads section on the Ruffle website.
        let actionLink;
        if (!isBuildOutdated) {
            let url;
            if (document.location.protocol.includes("extension")) {
                url = this.swfUrl.href;
            }
            else {
                url = document.location.href;
            }
            // Remove query params for the issue title.
            url = url.split(/[?#]/, 1)[0];
            const issueTitle = `Error on ${url}`;
            let issueLink = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(issueTitle)}&template=error_report.md&labels=error-report&body=`;
            let issueBody = encodeURIComponent(errorText);
            if (errorArray.stackIndex > -1 &&
                String(issueLink + issueBody).length > 8195) {
                // Strip the stack error from the array when the produced URL is way too long.
                // This should prevent "414 Request-URI Too Large" errors on GitHub.
                errorArray[errorArray.stackIndex] = null;
                if (errorArray.avmStackIndex > -1) {
                    errorArray[errorArray.avmStackIndex] = null;
                }
                issueBody = encodeURIComponent(errorArray.join(""));
            }
            issueLink += issueBody;
            actionLink = new PanicLinkInfo(issueLink, i18n_text("report-bug"));
        }
        else {
            actionLink = new PanicLinkInfo(RUFFLE_ORIGIN + "/downloads#desktop-app", i18n_text("update-ruffle"));
        }
        // Clears out any existing content (ie play button or canvas) and replaces it with the error screen
        let errorBody, errorFooter;
        switch (errorIndex) {
            case PanicError.FileProtocol:
                // General error: Running on the `file:` protocol
                errorBody = textAsParagraphs("error-file-protocol");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo(RUFFLE_ORIGIN + "/demo", i18n_text("ruffle-demo")),
                    new PanicLinkInfo(RUFFLE_ORIGIN + "/downloads#desktop-app", i18n_text("ruffle-desktop")),
                ]);
                break;
            case PanicError.JavascriptConfiguration:
                // General error: Incorrect JavaScript configuration
                errorBody = textAsParagraphs("error-javascript-config");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.WasmNotFound:
                // Self hosted: Cannot load `.wasm` file - file not found
                errorBody = textAsParagraphs("error-wasm-not-found");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.WasmMimeType:
                // Self hosted: Cannot load `.wasm` file - incorrect MIME type
                errorBody = textAsParagraphs("error-wasm-mime-type");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.SwfFetchError:
                errorBody = textAsParagraphs("error-swf-fetch");
                errorFooter = this.createErrorFooter([new PanicLinkInfo()]);
                break;
            case PanicError.SwfCors:
                // Self hosted: Cannot load SWF file - CORS issues
                errorBody = textAsParagraphs("error-swf-cors");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.WasmCors:
                // Self hosted: Cannot load `.wasm` file - CORS issues
                errorBody = textAsParagraphs("error-wasm-cors");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.InvalidWasm:
                // Self hosted: Cannot load `.wasm` file - incorrect configuration or missing files
                errorBody = textAsParagraphs("error-wasm-invalid");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.WasmDownload:
                // Usually a transient network error or botched deployment
                errorBody = textAsParagraphs("error-wasm-download");
                errorFooter = this.createErrorFooter([new PanicLinkInfo()]);
                break;
            case PanicError.WasmDisabledMicrosoftEdge:
                // Self hosted: User has disabled WebAssembly in Microsoft Edge through the
                // "Enhance your Security on the web" setting.
                errorBody = textAsParagraphs("error-wasm-disabled-on-edge");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error", i18n_text("more-info")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.JavascriptConflict:
                // Self hosted: Cannot load `.wasm` file - a native object / function is overriden
                errorBody = textAsParagraphs("error-javascript-conflict");
                if (isBuildOutdated) {
                    errorBody.appendChild(textAsParagraphs("error-javascript-conflict-outdated", {
                        buildDate: buildInfo.buildDate,
                    }));
                }
                errorFooter = this.createErrorFooter([
                    actionLink,
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.CSPConflict:
                // General error: Cannot load `.wasm` file - a native object / function is overriden
                errorBody = textAsParagraphs("error-csp-conflict");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            default:
                // Unknown error
                errorBody = textAsParagraphs("error-unknown", {
                    buildDate: buildInfo.buildDate,
                    outdated: String(isBuildOutdated),
                });
                errorFooter = this.createErrorFooter([
                    actionLink,
                    new PanicLinkInfo(),
                ]);
                break;
        }
        const panicDiv = document.createElement("div");
        panicDiv.id = "panic";
        const panicTitle = document.createElement("div");
        panicTitle.id = "panic-title";
        panicTitle.textContent = i18n_text("panic-title");
        panicDiv.appendChild(panicTitle);
        const panicBody = document.createElement("div");
        panicBody.id = "panic-body";
        panicBody.appendChild(errorBody);
        panicDiv.appendChild(panicBody);
        const panicFooter = document.createElement("div");
        panicFooter.id = "panic-footer";
        panicFooter.appendChild(errorFooter);
        panicDiv.appendChild(panicFooter);
        this.container.textContent = "";
        this.container.appendChild(panicDiv);
        const viewDetails = (this.container.querySelector("#panic-view-details"));
        if (viewDetails) {
            viewDetails.onclick = () => {
                const panicBody = (this.container.querySelector("#panic-body"));
                panicBody.classList.add("details");
                const panicText = document.createElement("textarea");
                panicText.readOnly = true;
                panicText.value = errorText;
                panicBody.replaceChildren(panicText);
                return false;
            };
        }
        // Do this last, just in case it causes any cascading issues.
        this.destroy();
    }
    displayRootMovieDownloadFailedMessage() {
        var _a, _b, _c;
        const openInNewTab = (_a = this.loadedConfig) === null || _a === void 0 ? void 0 : _a.openInNewTab;
        if (openInNewTab && window.location.origin !== this.swfUrl.origin) {
            const url = new URL(this.swfUrl);
            if ((_b = this.loadedConfig) === null || _b === void 0 ? void 0 : _b.parameters) {
                const parameters = sanitizeParameters((_c = this.loadedConfig) === null || _c === void 0 ? void 0 : _c.parameters);
                Object.entries(parameters).forEach(([key, value]) => {
                    url.searchParams.set(key, value);
                });
            }
            this.hideSplashScreen();
            const div = document.createElement("div");
            div.id = "message-overlay";
            const innerDiv = document.createElement("div");
            innerDiv.className = "message";
            innerDiv.appendChild(textAsParagraphs("message-cant-embed"));
            const buttonDiv = document.createElement("div");
            const link = document.createElement("a");
            link.innerText = i18n_text("open-in-new-tab");
            link.onclick = () => openInNewTab(url);
            buttonDiv.appendChild(link);
            innerDiv.appendChild(buttonDiv);
            div.appendChild(innerDiv);
            this.container.prepend(div);
        }
        else {
            const error = new Error("Failed to fetch: " + this.swfUrl);
            if (!this.swfUrl.protocol.includes("http")) {
                error.ruffleIndexError = PanicError.FileProtocol;
            }
            else if (window.location.origin === this.swfUrl.origin ||
                // The extension's internal player page is not restricted by CORS
                window.location.protocol.includes("extension")) {
                error.ruffleIndexError = PanicError.SwfFetchError;
            }
            else {
                // This is a selfhosted build of Ruffle that tried to make a cross-origin request
                error.ruffleIndexError = PanicError.SwfCors;
            }
            this.panic(error);
        }
    }
    /**
     * Show a dismissible message in front of the player.
     *
     * @param message The message shown to the user.
     */
    displayMessage(message) {
        const div = document.createElement("div");
        div.id = "message-overlay";
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        const messageP = document.createElement("p");
        messageP.textContent = message;
        messageDiv.appendChild(messageP);
        const buttonDiv = document.createElement("div");
        const continueButton = document.createElement("button");
        continueButton.id = "continue-btn";
        continueButton.textContent = i18n_text("continue");
        buttonDiv.appendChild(continueButton);
        messageDiv.appendChild(buttonDiv);
        div.appendChild(messageDiv);
        this.container.prepend(div);
        (this.container.querySelector("#continue-btn")).onclick = () => {
            div.parentNode.removeChild(div);
        };
    }
    /**
     * Show a video that uses an unsupported codec in a pop up.
     *
     * @param url The url of the video to be shown over the canvas.
     */
    displayUnsupportedVideo(url) {
        const videoHolder = this.videoModal.querySelector("#video-holder");
        if (videoHolder) {
            const video = document.createElement("video");
            video.addEventListener("contextmenu", (event) => event.stopPropagation());
            video.src = url;
            video.autoplay = true;
            video.controls = true;
            videoHolder.textContent = "";
            videoHolder.appendChild(video);
            this.videoModal.classList.remove("hidden");
        }
    }
    debugPlayerInfo() {
        return "";
    }
    hideSplashScreen() {
        this.splashScreen.classList.add("hidden");
        this.container.classList.remove("hidden");
    }
    showSplashScreen() {
        this.splashScreen.classList.remove("hidden");
        this.container.classList.add("hidden");
    }
    setMetadata(metadata) {
        this._metadata = metadata;
        // TODO: Switch this to ReadyState.Loading when we have streaming support.
        this._readyState = ReadyState.Loaded;
        this.hideSplashScreen();
        this.dispatchEvent(new CustomEvent(RufflePlayer.LOADED_METADATA));
        // TODO: Move this to whatever function changes the ReadyState to Loaded when we have streaming support.
        this.dispatchEvent(new CustomEvent(RufflePlayer.LOADED_DATA));
    }
}
/**
 * Triggered when a movie metadata has been loaded (such as movie width and height).
 *
 * @event RufflePlayer#loadedmetadata
 */
RufflePlayer.LOADED_METADATA = "loadedmetadata";
/**
 * Triggered when a movie is fully loaded.
 *
 * @event RufflePlayer#loadeddata
 */
RufflePlayer.LOADED_DATA = "loadeddata";
/**
 * Describes the loading state of an SWF movie.
 */
var ReadyState;
(function (ReadyState) {
    /**
     * No movie is loaded, or no information is yet available about the movie.
     */
    ReadyState[ReadyState["HaveNothing"] = 0] = "HaveNothing";
    /**
     * The movie is still loading, but it has started playback, and metadata is available.
     */
    ReadyState[ReadyState["Loading"] = 1] = "Loading";
    /**
     * The movie has completely loaded.
     */
    ReadyState[ReadyState["Loaded"] = 2] = "Loaded";
})(ReadyState || (ReadyState = {}));
/**
 * Parses a given string or null value to a boolean or null and returns it.
 *
 * @param value The string or null value that should be parsed to a boolean or null.
 * @returns The string as a boolean, if it exists and contains a boolean, otherwise null.
 */
function parseBoolean(value) {
    switch (value === null || value === void 0 ? void 0 : value.toLowerCase()) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return null;
    }
}
/**
 * Parses a string with script access options or null and returns whether the script
 * access options allow the SWF file with the given URL to call JavaScript code in
 * the surrounding HTML file if they exist correctly, otherwise null.
 *
 * @param access The string with the script access options or null.
 * @param url The URL of the SWF file.
 * @returns Whether the script access options allow the SWF file with the given URL to
 * call JavaScript code in the surrounding HTML file if they exist correctly, otherwise null.
 */
function parseAllowScriptAccess(access, url) {
    switch (access === null || access === void 0 ? void 0 : access.toLowerCase()) {
        case "always":
            return true;
        case "never":
            return false;
        case "samedomain":
            try {
                return (new URL(window.location.href).origin ===
                    new URL(url, window.location.href).origin);
            }
            catch (_a) {
                return false;
            }
        default:
            return null;
    }
}
/**
 * Returns the URLLoadOptions that have been provided for a specific movie.
 *
 * The function getOptionString is given as an argument and used to get values of configuration
 * options that have been overwritten for this specific movie.
 *
 * The returned URLLoadOptions interface only contains values for the configuration options
 * that have been overwritten for the movie and no default values.
 * This is necessary because any default values would overwrite other configuration
 * settings with a lower priority (e.g. the general RufflePlayer config).
 *
 * @param url The url of the movie.
 * @param getOptionString A function that takes the name of a configuration option.
 * If that configuration option has been overwritten for this specific movie, it returns that value.
 * Otherwise, it returns null.
 * @returns The URLLoadOptions for the movie.
 */
function getPolyfillOptions(url, getOptionString) {
    const options = { url };
    const allowNetworking = getOptionString("allowNetworking");
    if (allowNetworking !== null) {
        options.allowNetworking = allowNetworking;
    }
    const allowScriptAccess = parseAllowScriptAccess(getOptionString("allowScriptAccess"), url);
    if (allowScriptAccess !== null) {
        options.allowScriptAccess = allowScriptAccess;
    }
    const backgroundColor = getOptionString("bgcolor");
    if (backgroundColor !== null) {
        options.backgroundColor = backgroundColor;
    }
    const base = getOptionString("base");
    if (base !== null) {
        // "." tells Flash Player to load relative URLs from the SWF's directory
        // All other base values are evaluated relative to the page URL
        if (base === ".") {
            const swfUrl = new URL(url, document.baseURI);
            options.base = new URL(base, swfUrl).href;
        }
        else {
            options.base = base;
        }
    }
    const menu = parseBoolean(getOptionString("menu"));
    if (menu !== null) {
        options.menu = menu;
    }
    const parameters = getOptionString("flashvars");
    if (parameters !== null) {
        options.parameters = parameters;
    }
    const quality = getOptionString("quality");
    if (quality !== null) {
        options.quality = quality;
    }
    const salign = getOptionString("salign");
    if (salign !== null) {
        options.salign = salign;
    }
    const scale = getOptionString("scale");
    if (scale !== null) {
        options.scale = scale;
    }
    const wmode = getOptionString("wmode");
    if (wmode !== null) {
        options.wmode = wmode;
    }
    return options;
}
/**
 * Returns whether the given filename is a Youtube Flash source.
 *
 * @param filename The filename to test.
 * @returns True if the filename is a Youtube Flash source.
 */
function isYoutubeFlashSource(filename) {
    if (filename) {
        let pathname = "";
        let hostname = "";
        try {
            // A base URL is required if `filename` is a relative URL, but we don't need to detect the real URL origin.
            const url = new URL(filename, RUFFLE_ORIGIN);
            pathname = url.pathname;
            hostname = url.hostname;
        }
        catch (err) {
            // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
        }
        // See https://wiki.mozilla.org/QA/Youtube_Embedded_Rewrite
        if (pathname.startsWith("/v/") &&
            /^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(hostname)) {
            return true;
        }
    }
    return false;
}
/**
 * Workaround Youtube mixed content if upgradeToHttps is true.
 *
 * @param elem The element to change.
 * @param attr The attribute to adjust.
 */
function workaroundYoutubeMixedContent(elem, attr) {
    var _a, _b;
    const value = elem.getAttribute(attr);
    const config = (_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {};
    if (value) {
        try {
            const url = new URL(value);
            if (url.protocol === "http:" &&
                window.location.protocol === "https:" &&
                (!("upgradeToHttps" in config) ||
                    config.upgradeToHttps !== false)) {
                url.protocol = "https:";
                elem.setAttribute(attr, url.toString());
            }
        }
        catch (err) {
            // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
        }
    }
}
/**
 * Determine if an element is a child of a node that was not supported
 * in non-HTML5 compliant browsers. If so, the element was meant to be
 * used as a fallback content.
 *
 * @param elem The element to test.
 * @returns True if the element is inside an <audio> or <video> node.
 */
function isFallbackElement(elem) {
    let parent = elem.parentElement;
    while (parent !== null) {
        switch (parent.tagName) {
            case "AUDIO":
            case "VIDEO":
                return true;
        }
        parent = parent.parentElement;
    }
    return false;
}
/**
 * The volume controls of the Ruffle web GUI.
 */
class VolumeControls {
    constructor(isMuted, volume) {
        this.isMuted = isMuted;
        this.volume = volume;
    }
    /**
     * Returns the volume between 0 and 1 (calculated out of the
     * checkbox and the slider).
     *
     * @returns The volume between 0 and 1.
     */
    get_volume() {
        return !this.isMuted ? this.volume / 100 : 0;
    }
}

;// CONCATENATED MODULE: ../core/dist/ruffle-embed.js



/**
 * A polyfill html element.
 *
 * This specific class tries to polyfill existing `<embed>` tags,
 * and should not be used. Prefer [[RufflePlayer]] instead.
 *
 * @internal
 */
class RuffleEmbed extends RufflePlayer {
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     *
     * This specific class tries to polyfill existing `<embed>` tags,
     * and should not be used. Prefer [[RufflePlayer]] instead.
     */
    constructor() {
        super();
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        const src = this.attributes.getNamedItem("src");
        if (src) {
            // Get the configuration options that have been overwritten for this movie.
            const getOptionString = (optionName) => { var _a, _b; return (_b = (_a = this.attributes.getNamedItem(optionName)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null; };
            const options = getPolyfillOptions(src.value, getOptionString);
            // Kick off the SWF download.
            this.load(options, true);
        }
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    get src() {
        var _a;
        return (_a = this.attributes.getNamedItem("src")) === null || _a === void 0 ? void 0 : _a.value;
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    set src(srcval) {
        if (srcval) {
            const attr = document.createAttribute("src");
            attr.value = srcval;
            this.attributes.setNamedItem(attr);
        }
        else {
            this.attributes.removeNamedItem("src");
        }
    }
    /**
     * @ignore
     * @internal
     */
    static get observedAttributes() {
        return ["src", "width", "height"];
    }
    /**
     * @ignore
     * @internal
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (this.isConnected && name === "src") {
            const src = this.attributes.getNamedItem("src");
            if (src) {
                const getOptionString = (optionName) => { var _a, _b; return (_b = (_a = this.attributes.getNamedItem(optionName)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null; };
                const options = getPolyfillOptions(src.value, getOptionString);
                this.load(options, true);
            }
        }
    }
    /**
     * Checks if the given element may be polyfilled with this one.
     *
     * @param elem Element to check.
     * @returns True if the element looks like a Flash embed.
     */
    static isInterdictable(elem) {
        const src = elem.getAttribute("src");
        const type = elem.getAttribute("type");
        // Don't polyfill when no file is specified.
        if (!src) {
            return false;
        }
        // Don't polyfill if the element is inside a specific node.
        if (isFallbackElement(elem)) {
            return false;
        }
        // Don't polyfill when the file is a YouTube Flash source.
        if (isYoutubeFlashSource(src)) {
            // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well.
            workaroundYoutubeMixedContent(elem, "src");
            return false;
        }
        return isSwf(src, type);
    }
    /**
     * Creates a RuffleEmbed that will polyfill and replace the given element.
     *
     * @param elem Element to replace.
     * @returns Created RuffleEmbed.
     */
    static fromNativeEmbedElement(elem) {
        const externalName = registerElement("ruffle-embed", RuffleEmbed);
        const ruffleObj = document.createElement(externalName);
        ruffleObj.copyElement(elem);
        return ruffleObj;
    }
}

;// CONCATENATED MODULE: ../core/dist/ruffle-object.js





/**
 * Find and return the first value in obj with the given key.
 * Many Flash params were case insensitive, so we use this when checking for them.
 *
 * @param obj Object to check
 * @param key Key to find
 * @param defaultValue Value if not found
 * @returns Value if found, else [[defaultValue]]
 */
function findCaseInsensitive(obj, key, defaultValue) {
    key = key.toLowerCase();
    for (const [k, value] of Object.entries(obj)) {
        if (k.toLowerCase() === key) {
            return value;
        }
    }
    return defaultValue;
}
/**
 * Returns all flash params ([[HTMLParamElement]]) that are for the given object.
 *
 * @param elem Element to check.
 * @returns A record of every parameter.
 */
function paramsOf(elem) {
    var _a, _b;
    const params = {};
    for (const param of elem.children) {
        if (param instanceof HTMLParamElement) {
            const key = (_a = param.attributes.getNamedItem("name")) === null || _a === void 0 ? void 0 : _a.value;
            const value = (_b = param.attributes.getNamedItem("value")) === null || _b === void 0 ? void 0 : _b.value;
            if (key && value) {
                params[key] = value;
            }
        }
    }
    return params;
}
/**
 * A polyfill html element.
 *
 * This specific class tries to polyfill existing `<object>` tags,
 * and should not be used. Prefer [[RufflePlayer]] instead.
 *
 * @internal
 */
class RuffleObject extends RufflePlayer {
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     *
     * This specific class tries to polyfill existing `<object>` tags,
     * and should not be used. Prefer [[RufflePlayer]] instead.
     */
    constructor() {
        super();
        this.params = {};
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.params = paramsOf(this);
        let url = null;
        if (this.attributes.getNamedItem("data")) {
            url = (_a = this.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value;
        }
        else if (this.params["movie"]) {
            url = this.params["movie"];
        }
        if (url) {
            // Get the configuration options that have been overwritten for this movie.
            const attributeCheckOptions = [
                "allowNetworking",
                "base",
                "bgcolor",
                "flashvars",
            ];
            const getOptionString = (optionName) => findCaseInsensitive(this.params, optionName, attributeCheckOptions.includes(optionName)
                ? this.getAttribute(optionName)
                : null);
            const options = getPolyfillOptions(url, getOptionString);
            // Kick off the SWF download.
            this.load(options, true);
        }
    }
    debugPlayerInfo() {
        var _a;
        let result = "Player type: Object\n";
        let url = null;
        if (this.attributes.getNamedItem("data")) {
            url = (_a = this.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value;
        }
        else if (this.params["movie"]) {
            url = this.params["movie"];
        }
        result += `SWF URL: ${url}\n`;
        Object.keys(this.params).forEach((key) => {
            result += `Param ${key}: ${this.params[key]}\n`;
        });
        Object.keys(this.attributes).forEach((key) => {
            var _a;
            result += `Attribute ${key}: ${(_a = this.attributes.getNamedItem(key)) === null || _a === void 0 ? void 0 : _a.value}\n`;
        });
        return result;
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    get data() {
        return this.getAttribute("data");
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    set data(href) {
        if (href) {
            const attr = document.createAttribute("data");
            attr.value = href;
            this.attributes.setNamedItem(attr);
        }
        else {
            this.attributes.removeNamedItem("data");
        }
    }
    /**
     * Checks if the given element may be polyfilled with this one.
     *
     * @param elem Element to check.
     * @returns True if the element looks like a Flash object.
     */
    static isInterdictable(elem) {
        var _a, _b, _c, _d;
        // Don't polyfill if the element is inside a specific node.
        if (isFallbackElement(elem)) {
            return false;
        }
        // Don't polyfill if there's already a <ruffle-object> or a <ruffle-embed> inside the <object>.
        if (elem.getElementsByTagName("ruffle-object").length > 0 ||
            elem.getElementsByTagName("ruffle-embed").length > 0) {
            return false;
        }
        const data = (_a = elem.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value.toLowerCase();
        const type = (_c = (_b = elem.attributes.getNamedItem("type")) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : null;
        const params = paramsOf(elem);
        // Check for SWF file.
        let filename;
        if (data) {
            // Don't polyfill when the file is a YouTube Flash source.
            if (isYoutubeFlashSource(data)) {
                // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well.
                workaroundYoutubeMixedContent(elem, "data");
                return false;
            }
            filename = data;
        }
        else if (params && params["movie"]) {
            // Don't polyfill when the file is a YouTube Flash source.
            if (isYoutubeFlashSource(params["movie"])) {
                // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well.
                const movieElem = elem.querySelector("param[name='movie']");
                if (movieElem) {
                    workaroundYoutubeMixedContent(movieElem, "value");
                    // The data attribute needs to be set for the re-fetch to happen.
                    // It also needs to be set on Firefox for the YouTube object rewrite to work, regardless of mixed content.
                    const movieSrc = movieElem.getAttribute("value");
                    if (movieSrc) {
                        elem.setAttribute("data", movieSrc);
                    }
                }
                return false;
            }
            filename = params["movie"];
        }
        else {
            // Don't polyfill when no file is specified.
            return false;
        }
        // Check ActiveX class ID.
        const classid = (_d = elem.attributes
            .getNamedItem("classid")) === null || _d === void 0 ? void 0 : _d.value.toLowerCase();
        if (classid === FLASH_ACTIVEX_CLASSID.toLowerCase()) {
            // classid is an old-IE style embed that would not work on modern browsers.
            // Often there will be an <embed> inside the <object> that would take precedence.
            // Only polyfill this <object> if it doesn't contain a polyfillable <embed> or
            // another <object> that would be supported on modern browsers.
            return (!Array.from(elem.getElementsByTagName("object")).some(RuffleObject.isInterdictable) &&
                !Array.from(elem.getElementsByTagName("embed")).some(RuffleEmbed.isInterdictable));
        }
        else if (classid) {
            // Non-Flash classid.
            return false;
        }
        return isSwf(filename, type);
    }
    /**
     * Creates a RuffleObject that will polyfill and replace the given element.
     *
     * @param elem Element to replace.
     * @returns Created RuffleObject.
     */
    static fromNativeObjectElement(elem) {
        const externalName = registerElement("ruffle-object", RuffleObject);
        const ruffleObj = (document.createElement(externalName));
        // Avoid copying embeds-inside-objects to avoid double polyfilling.
        for (const embedElem of Array.from(elem.getElementsByTagName("embed"))) {
            if (RuffleEmbed.isInterdictable(embedElem)) {
                embedElem.remove();
            }
        }
        // Avoid copying objects-inside-objects to avoid double polyfilling.
        // This may happen when Internet Explorer's conditional comments are used.
        for (const objectElem of Array.from(elem.getElementsByTagName("object"))) {
            if (RuffleObject.isInterdictable(objectElem)) {
                objectElem.remove();
            }
        }
        ruffleObj.copyElement(elem);
        return ruffleObj;
    }
}

;// CONCATENATED MODULE: ../core/dist/plugin-polyfill.js

/**
 * Replacement object for `MimeTypeArray` that lets us install new fake mime
 * types.
 *
 * Unlike plugins we can at least enumerate mime types in Firefox, so we don't
 * lose data.
 *
 * We also expose a method called `install` which adds a new plugin. This is
 * used to falsify Flash detection. If the existing `navigator.mimeTypes` has an
 * `install` method, you should not use `RuffleMimeTypeArray` as some other
 * plugin emulator is already present.
 */
class RuffleMimeTypeArray {
    constructor(mimeTypes) {
        this.__mimeTypes = [];
        this.__namedMimeTypes = {};
        if (mimeTypes) {
            for (let i = 0; i < mimeTypes.length; i++) {
                this.install(mimeTypes[i]);
            }
        }
    }
    /**
     * Install a MIME Type into the array.
     *
     * @param mimeType The mime type to install
     */
    install(mimeType) {
        const index = this.__mimeTypes.length;
        this.__mimeTypes.push(mimeType);
        this.__namedMimeTypes[mimeType.type] = mimeType;
        this[mimeType.type] = mimeType;
        this[index] = mimeType;
    }
    item(index) {
        // This behavior is done to emulate a 32-bit uint,
        // which browsers use.
        return this.__mimeTypes[index >>> 0];
    }
    namedItem(name) {
        return this.__namedMimeTypes[name];
    }
    get length() {
        return this.__mimeTypes.length;
    }
    [Symbol.iterator]() {
        return this.__mimeTypes[Symbol.iterator]();
    }
}
/**
 * Equivalent object to `Plugin` that allows us to falsify plugins.
 */
class RufflePlugin extends RuffleMimeTypeArray {
    constructor(name, description, filename) {
        super();
        this.name = name;
        this.description = description;
        this.filename = filename;
    }
}
/**
 * Replacement object for `PluginArray` that lets us install new fake plugins.
 *
 * This object needs to wrap the native plugin array, since the user might have
 * actual plugins installed. Firefox doesn't let us enumerate the array, though,
 * which has some consequences. Namely, we can't actually perfectly wrap the
 * native plugin array, at least unless there's some secret "unresolved object
 * property name handler" that I've never known before in JS...
 *
 * We can still wrap `namedItem` perfectly at least.
 *
 * We also expose a method called `install` which adds a new plugin. This is
 * used to falsify Flash detection. If the existing `navigator.plugins` has an
 * `install` method, you should not use `RufflePluginArray` as some other plugin
 * emulator is already present.
 */
class RufflePluginArray {
    constructor(plugins) {
        this.__plugins = [];
        this.__namedPlugins = {};
        for (let i = 0; i < plugins.length; i++) {
            this.install(plugins[i]);
        }
    }
    install(plugin) {
        const index = this.__plugins.length;
        this.__plugins.push(plugin);
        this.__namedPlugins[plugin.name] = plugin;
        this[plugin.name] = plugin;
        this[index] = plugin;
    }
    item(index) {
        // This behavior is done to emulate a 32-bit uint,
        // which browsers use. Cloudflare's anti-bot
        // checks rely on this.
        return this.__plugins[index >>> 0];
    }
    namedItem(name) {
        return this.__namedPlugins[name];
    }
    refresh() {
        // Nothing to do, we just need to define the method.
    }
    [Symbol.iterator]() {
        return this.__plugins[Symbol.iterator]();
    }
    get length() {
        return this.__plugins.length;
    }
}
/**
 * A fake plugin designed to trigger Flash detection scripts.
 */
const FLASH_PLUGIN = new RufflePlugin("Shockwave Flash", "Shockwave Flash 32.0 r0", "ruffle.js");
FLASH_PLUGIN.install({
    type: FUTURESPLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "spl",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH7_AND_8_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH_MOVIE_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
/**
 * Install a fake plugin such that detectors will see it in `navigator.plugins`.
 *
 * This function takes care to check if the existing implementation of
 * `navigator.plugins` already accepts fake plugin entries. If so, it will use
 * that version of the plugin array. This allows the plugin polyfill to compose
 * across multiple plugin emulators with the first emulator's polyfill winning.
 *
 * @param plugin The plugin to install
 */
function installPlugin(plugin) {
    if (!("install" in navigator.plugins) || !navigator.plugins["install"]) {
        Object.defineProperty(navigator, "plugins", {
            value: new RufflePluginArray(navigator.plugins),
            writable: false,
        });
    }
    const plugins = navigator.plugins;
    plugins.install(plugin);
    if (plugin.length > 0 &&
        (!("install" in navigator.mimeTypes) || !navigator.mimeTypes["install"])) {
        Object.defineProperty(navigator, "mimeTypes", {
            value: new RuffleMimeTypeArray(navigator.mimeTypes),
            writable: false,
        });
    }
    const mimeTypes = navigator.mimeTypes;
    for (let i = 0; i < plugin.length; i += 1) {
        mimeTypes.install(plugin[i]);
    }
}

;// CONCATENATED MODULE: ../core/dist/polyfills.js
var _a, _b;





const globalConfig = (_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {};
const jsScriptUrl = publicPath(globalConfig) + "ruffle.js";
/**
 * Polyfill native Flash elements with Ruffle equivalents.
 *
 * This polyfill isn't fool-proof: If there's a chance site JavaScript has
 * access to a pre-polyfill element, then this will break horribly. We can
 * keep native objects out of the DOM, and thus out of JavaScript's grubby
 * little hands, but only if we load first.
 */
let objects;
let polyfills_embeds;
/**
 * Check if this browser has pre-existing Flash support.
 *
 * @returns Whether this browser has a plugin indicating pre-existing Flash support.
 */
function isFlashEnabledBrowser() {
    var _a, _b;
    // If the user sets a configuration value not to favor Flash, pretend the browser does not support Flash so Ruffle takes effect.
    if ("favorFlash" in globalConfig && globalConfig["favorFlash"] === false) {
        return false;
    }
    // Otherwise, check for pre-exisiting Flash support.
    return (((_b = (_a = navigator.plugins.namedItem("Shockwave Flash")) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : "ruffle.js") !== "ruffle.js");
}
/**
 *
 */
function polyfillFlashInstances() {
    try {
        // Create live collections to track embed tags.
        objects = objects !== null && objects !== void 0 ? objects : document.getElementsByTagName("object");
        polyfills_embeds = polyfills_embeds !== null && polyfills_embeds !== void 0 ? polyfills_embeds : document.getElementsByTagName("embed");
        // Replace <object> first, because <object> often wraps <embed>.
        for (const elem of Array.from(objects)) {
            if (RuffleObject.isInterdictable(elem)) {
                const ruffleObject = RuffleObject.fromNativeObjectElement(elem);
                elem.replaceWith(ruffleObject);
            }
        }
        for (const elem of Array.from(polyfills_embeds)) {
            if (RuffleEmbed.isInterdictable(elem)) {
                const ruffleEmbed = RuffleEmbed.fromNativeEmbedElement(elem);
                elem.replaceWith(ruffleEmbed);
            }
        }
    }
    catch (err) {
        console.error(`Serious error encountered when polyfilling native Flash elements: ${err}`);
    }
}
/**
 * Inject Ruffle into <iframe> and <frame> elements.
 *
 * This polyfill isn't fool-proof either: On self-hosted builds, it may
 * not work due to browsers CORS policy or be loaded too late for some
 * libraries like SWFObject. These should be less of a problem on the
 * web extension. This polyfill should, however, do the trick in most
 * cases, but users should be aware of its natural limits.
 */
let iframes;
let polyfills_frames;
/**
 *
 */
function polyfillFrames() {
    // Create live collections to track embed tags.
    iframes = iframes !== null && iframes !== void 0 ? iframes : document.getElementsByTagName("iframe");
    polyfills_frames = polyfills_frames !== null && polyfills_frames !== void 0 ? polyfills_frames : document.getElementsByTagName("frame");
    [iframes, polyfills_frames].forEach((elements) => {
        for (const element of elements) {
            if (element.dataset["rufflePolyfilled"] !== undefined) {
                // Don't re-polyfill elements with the "data-ruffle-polyfilled" attribute.
                continue;
            }
            element.dataset["rufflePolyfilled"] = "";
            const elementWindow = element.contentWindow;
            // Cross origin requests may reach an exception, so let's prepare for this eventuality.
            const errorMessage = `Couldn't load Ruffle into ${element.tagName}[${element.src}]: `;
            try {
                if (elementWindow.document.readyState === "complete") {
                    injectRuffle(elementWindow, errorMessage);
                }
            }
            catch (err) {
                if (!isExtension) {
                    // The web extension should be able to load Ruffle into cross origin frames
                    // because it has "all_frames" set to true in its manifest.json: RufflePlayer
                    // config won't be injected but it's not worth showing an error.
                    console.warn(errorMessage + err);
                }
            }
            // Attach listener to the element to handle frame navigation.
            element.addEventListener("load", () => {
                injectRuffle(elementWindow, errorMessage);
            }, false);
        }
    });
}
/**
 * @param elementWindow The (i)frame's window object.
 * @param errorMessage The message to log when Ruffle cannot access the (i)frame's document.
 */
async function injectRuffle(elementWindow, errorMessage) {
    var _a;
    // The document is supposed to be completely loaded when this function is run.
    // As Chrome may be unable to access the document properties, we have to delay the execution a little bit.
    await new Promise((resolve) => {
        window.setTimeout(() => {
            resolve();
        }, 100);
    });
    let elementDocument;
    try {
        elementDocument = elementWindow.document;
        if (!elementDocument) {
            // Don't polyfill if the window has no document: the element may have been removed from the parent window.
            return;
        }
    }
    catch (err) {
        if (!isExtension) {
            console.warn(errorMessage + err);
        }
        return;
    }
    if (!isExtension &&
        elementDocument.documentElement.dataset["ruffleOptout"] !== undefined) {
        // Don't polyfill elements with the "data-ruffle-optout" attribute.
        return;
    }
    if (!isExtension) {
        if (!elementWindow.RufflePlayer) {
            const script = elementDocument.createElement("script");
            script.setAttribute("src", jsScriptUrl);
            script.onload = () => {
                // Inject parent configuration once the script is loaded, preventing it from being ignored.
                elementWindow.RufflePlayer = {};
                elementWindow.RufflePlayer.config = globalConfig;
            };
            elementDocument.head.appendChild(script);
        }
    }
    else {
        if (!elementWindow.RufflePlayer) {
            elementWindow.RufflePlayer = {};
        }
        // Merge parent window and frame configurations, will likely be applied too late though.
        elementWindow.RufflePlayer.config = Object.assign(Object.assign({}, globalConfig), ((_a = elementWindow.RufflePlayer.config) !== null && _a !== void 0 ? _a : {}));
    }
}
/**
 * Listen for changes to the DOM.
 */
function initMutationObserver() {
    const observer = new MutationObserver(function (mutationsList) {
        // If any embed or object nodes were added, re-run the polyfill to detect any new instances.
        const embedOrObjectAdded = mutationsList.some((mutation) => Array.from(mutation.addedNodes).some((node) => ["EMBED", "OBJECT"].includes(node.nodeName) ||
            (node instanceof Element &&
                node.querySelector("embed, object") !==
                    null)));
        if (embedOrObjectAdded) {
            polyfillFlashInstances();
            polyfillFrames();
        }
    });
    observer.observe(document, { childList: true, subtree: true });
}
/**
 * Polyfills the detection of Flash plugins in the browser.
 */
function pluginPolyfill() {
    if (!isFlashEnabledBrowser()) {
        installPlugin(FLASH_PLUGIN);
    }
}
/**
 * Polyfills legacy Flash content on the page.
 */
function polyfill() {
    if (!isFlashEnabledBrowser()) {
        polyfillFlashInstances();
        polyfillFrames();
        initMutationObserver();
    }
}

;// CONCATENATED MODULE: ../core/dist/source-api.js




/**
 * Represents this particular version of Ruffle.
 *
 * Multiple APIs can be instantiated from different sources; e.g. an "extension"
 * version, versus a "local" version. This expresses to the Public API
 * negotiator (see [[PublicAPI]]) what this particular version of Ruffle is and
 * how to control it.
 */
const SourceAPI = {
    /**
     * The version of this particular API, as a string in a semver compatible format.
     */
    version: buildInfo.versionNumber + "+" + buildInfo.buildDate.substring(0, 10),
    /**
     * Start up the polyfills.
     *
     * Do not run polyfills for more than one Ruffle source at a time.
     */
    polyfill() {
        polyfill();
    },
    /**
     * Polyfill the plugin detection.
     *
     * This needs to run before any plugin detection script does.
     */
    pluginPolyfill() {
        pluginPolyfill();
    },
    /**
     * Create a Ruffle player element using this particular version of Ruffle.
     *
     * @returns The player element. This is a DOM element that may be inserted
     * into the current page as you wish.
     */
    createPlayer() {
        const name = registerElement("ruffle-player", RufflePlayer);
        return document.createElement(name);
    },
};

;// CONCATENATED MODULE: ../core/dist/public-api.js



/**
 * Represents the Ruffle public API.
 *
 * The public API exists primarily to allow multiple installs of Ruffle on a
 * page (e.g. an extension install and a local one) to cooperate. In an ideal
 * situation, all Ruffle sources on the page install themselves into a single
 * public API, and then the public API picks the newest version by default.
 *
 * This API *is* versioned, in case we need to upgrade it. However, it must be
 * backwards- and forwards-compatible with all known sources.
 */
class PublicAPI {
    /**
     * Construct the Ruffle public API.
     *
     * Do not use this function to negotiate a public API. Instead, use
     * `public_api` to register your Ruffle source with an existing public API
     * if it exists.
     *
     * Constructing a Public API will also trigger it to initialize Ruffle once
     * the page loads, if the API has not already been superseded.
     *
     * @param prev What used to be in the public API slot.
     *
     * This is used to upgrade from a prior version of the public API, or from
     * a user-defined configuration object placed in the public API slot.
     */
    constructor(prev) {
        var _a;
        this.sources = (prev === null || prev === void 0 ? void 0 : prev.sources) || {};
        this.config = (prev === null || prev === void 0 ? void 0 : prev.config) || {};
        this.invoked = (prev === null || prev === void 0 ? void 0 : prev.invoked) || false;
        this.newestName = (prev === null || prev === void 0 ? void 0 : prev.newestName) || null;
        (_a = prev === null || prev === void 0 ? void 0 : prev.superseded) === null || _a === void 0 ? void 0 : _a.call(prev);
        if (document.readyState === "loading") {
            // Cloudflare Rocket Loader interferes with the DOMContentLoaded event,
            // so we listen for readystatechange instead
            document.addEventListener("readystatechange", this.init.bind(this));
        }
        else {
            window.setTimeout(this.init.bind(this), 0);
        }
    }
    /**
     * The version of the public API.
     *
     * This is *not* the version of Ruffle itself.
     *
     * This allows a page with an old version of the Public API to be upgraded
     * to a new version of the API. The public API is intended to be changed
     * very infrequently, if at all, but this provides an escape mechanism for
     * newer Ruffle sources to upgrade older installations.
     *
     * @returns The version of this public API.
     */
    get version() {
        return "0.1.0";
    }
    /**
     * Register a given source with the Ruffle Public API.
     *
     * @param name The name of the source.
     */
    registerSource(name) {
        this.sources[name] = SourceAPI;
    }
    /**
     * Determine the name of the newest registered source in the Public API.
     *
     * @returns The name of the source, or `null` if no source
     * has yet to be registered.
     */
    newestSourceName() {
        let newestName = null, newestVersion = Version.fromSemver("0.0.0");
        for (const k in this.sources) {
            if (Object.prototype.hasOwnProperty.call(this.sources, k)) {
                const kVersion = Version.fromSemver(this.sources[k].version);
                if (kVersion.hasPrecedenceOver(newestVersion)) {
                    newestName = k;
                    newestVersion = kVersion;
                }
            }
        }
        return newestName;
    }
    /**
     * Negotiate and start Ruffle.
     *
     * This function reads the config parameter to determine which polyfills
     * should be enabled. If the configuration parameter is missing, then we
     * use a built-in set of defaults sufficient to fool sites with static
     * content and weak plugin detection.
     */
    init() {
        if (!this.invoked) {
            this.invoked = true;
            this.newestName = this.newestSourceName();
            if (this.newestName === null) {
                throw new Error("No registered Ruffle source!");
            }
            const polyfills = "polyfills" in this.config ? this.config.polyfills : true;
            if (polyfills !== false) {
                this.sources[this.newestName].polyfill();
            }
        }
    }
    /**
     * Look up the newest Ruffle source and return it's API.
     *
     * @returns An instance of the Source API.
     */
    newest() {
        const name = this.newestSourceName();
        return name !== null ? this.sources[name] : null;
    }
    /**
     * Look up a specific Ruffle version (or any version satisfying a given set
     * of requirements) and return it's API.
     *
     * @param requirementString A set of semantic version requirement
     * strings that the player version must satisfy.
     * @returns An instance of the Source API, if one or more
     * sources satisfied the requirement.
     */
    satisfying(requirementString) {
        const requirement = VersionRange.fromRequirementString(requirementString);
        let valid = null;
        for (const k in this.sources) {
            if (Object.prototype.hasOwnProperty.call(this.sources, k)) {
                const version = Version.fromSemver(this.sources[k].version);
                if (requirement.satisfiedBy(version)) {
                    valid = this.sources[k];
                }
            }
        }
        return valid;
    }
    /**
     * Look up the newest Ruffle version compatible with the `local` source, if
     * it's installed. Otherwise, use the latest version.
     *
     * @returns An instance of the Source API
     */
    localCompatible() {
        if (this.sources["local"] !== undefined) {
            return this.satisfying("^" + this.sources["local"].version);
        }
        else {
            return this.newest();
        }
    }
    /**
     * Look up the newest Ruffle version with the exact same version as the
     * `local` source, if it's installed. Otherwise, use the latest version.
     *
     * @returns An instance of the Source API
     */
    local() {
        if (this.sources["local"] !== undefined) {
            return this.satisfying("=" + this.sources["local"].version);
        }
        else {
            return this.newest();
        }
    }
    /**
     * Indicates that this version of the public API has been superseded by a
     * newer version.
     *
     * This should only be called by a newer version of the Public API.
     * Identical versions of the Public API should not supersede older versions
     * of that same API.
     *
     * Unfortunately, we can't disable polyfills after-the-fact, so this
     * only lets you disable the init event...
     */
    superseded() {
        this.invoked = true;
    }
    /**
     * Join a source into the public API, if it doesn't already exist.
     *
     * @param prevRuffle The previous iteration of the Ruffle API.
     *
     * The `prevRuffle` param lists the previous object in the RufflePlayer
     * slot. We perform some checks to see if this is a Ruffle public API or a
     * conflicting object. If this is conflicting, then a new public API will
     * be constructed (see the constructor information for what happens to
     * `prevRuffle`).
     *
     * Note that Public API upgrades are deliberately not enabled in this
     * version of Ruffle, since there is no Public API to upgrade from.
     * @param sourceName The name of this particular
     * Ruffle source.
     *
     * If both parameters are provided they will be used to define a new Ruffle
     * source to register with the public API.
     * @returns The Ruffle Public API.
     */
    static negotiate(prevRuffle, sourceName) {
        let publicAPI;
        if (prevRuffle instanceof PublicAPI) {
            publicAPI = prevRuffle;
        }
        else {
            publicAPI = new PublicAPI(prevRuffle);
        }
        if (sourceName !== undefined) {
            publicAPI.registerSource(sourceName);
            // Install the faux plugin detection immediately.
            // This is necessary because scripts such as SWFObject check for the
            // Flash Player immediately when they load.
            // TODO: Maybe there's a better place for this.
            const polyfills = "polyfills" in publicAPI.config
                ? publicAPI.config.polyfills
                : true;
            if (polyfills !== false) {
                SourceAPI.pluginPolyfill();
            }
        }
        return publicAPI;
    }
}

;// CONCATENATED MODULE: ./src/player.ts


const api = PublicAPI.negotiate(window.RufflePlayer, "local");
window.RufflePlayer = api;
const ruffle = api.newest();
let player;
const playerContainer = document.getElementById("player-container");
const overlay = document.getElementById("overlay");
const localFileInput = document.getElementById("local-file");
const localFileName = document.getElementById("local-file-name");
const toggleInfo = document.getElementById("toggle-info");
const reloadSwf = document.getElementById("reload-swf");
const infoContainer = document.getElementById("info-container");
const webFormSubmit = document.getElementById("web-form-submit");
const webURL = document.getElementById("web-url");
// This is the base config always used by the extension player.
// It has the highest priority and its options cannot be overwritten.
const baseExtensionConfig = {
    letterbox: "on",
    forceScale: true,
    forceAlign: true,
};
const swfToFlashVersion = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9.0",
    10: "10.0/10.1",
    11: "10.2",
    12: "10.3",
    13: "11.0",
    14: "11.1",
    15: "11.2",
    16: "11.3",
    17: "11.4",
    18: "11.5",
    19: "11.6",
    20: "11.7",
    21: "11.8",
    22: "11.9",
    23: "12",
    24: "13",
    25: "14",
    26: "15",
    27: "16",
    28: "17",
    29: "18",
    30: "19",
    31: "20",
    32: "21",
    33: "22",
    34: "23",
    35: "24",
    36: "25",
    37: "26",
    38: "27",
    39: "28",
    40: "29",
    41: "30",
    42: "31",
    43: "32",
};
function unload() {
    if (player) {
        player.remove();
        document.querySelectorAll("span.metadata").forEach((el) => {
            el.textContent = "Loading";
        });
        document.getElementById("backgroundColor").style.backgroundColor =
            "white";
    }
}
function load(options) {
    unload();
    player = ruffle.createPlayer();
    player.id = "player";
    playerContainer.append(player);
    player.load(options, false);
    player.addEventListener("loadedmetadata", () => {
        var _a;
        if (player.metadata) {
            for (const [key, value] of Object.entries(player.metadata)) {
                const metadataElement = document.getElementById(key);
                if (metadataElement) {
                    switch (key) {
                        case "backgroundColor":
                            metadataElement.style.backgroundColor =
                                value !== null && value !== void 0 ? value : "white";
                            break;
                        case "uncompressedLength":
                            metadataElement.textContent = `${value >> 10}Kb`;
                            break;
                        // @ts-expect-error This intentionally falls through to the default case
                        case "swfVersion":
                            document.getElementById("flashVersion").textContent = (_a = swfToFlashVersion[value]) !== null && _a !== void 0 ? _a : null;
                        // falls through and executes the default case as well
                        default:
                            metadataElement.textContent = value;
                            break;
                    }
                }
            }
        }
    });
}
async function loadFile(file) {
    if (!file) {
        return;
    }
    if (file.name) {
        localFileName.textContent = file.name;
    }
    const data = await new Response(file).arrayBuffer();
    const options = await getExplicitOptions();
    load(Object.assign(Object.assign(Object.assign({}, options), { data: data, swfFileName: file.name }), baseExtensionConfig));
    history.pushState("", document.title, window.location.pathname);
}
localFileInput.addEventListener("change", (event) => {
    const eventTarget = event.target;
    if ((eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.files) &&
        (eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.files.length) > 0 &&
        eventTarget.files[0]) {
        loadFile(eventTarget.files[0]);
    }
});
playerContainer.addEventListener("dragenter", (event) => {
    event.stopPropagation();
    event.preventDefault();
});
playerContainer.addEventListener("dragleave", (event) => {
    event.stopPropagation();
    event.preventDefault();
    overlay.classList.remove("drag");
});
playerContainer.addEventListener("dragover", (event) => {
    event.stopPropagation();
    event.preventDefault();
    overlay.classList.add("drag");
});
playerContainer.addEventListener("drop", (event) => {
    event.stopPropagation();
    event.preventDefault();
    overlay.classList.remove("drag");
    if (event.dataTransfer) {
        localFileInput.files = event.dataTransfer.files;
        loadFile(event.dataTransfer.files[0]);
    }
});
localFileInput.addEventListener("dragleave", (event) => {
    event.stopPropagation();
    event.preventDefault();
    overlay.classList.remove("drag");
});
localFileInput.addEventListener("dragover", (event) => {
    event.stopPropagation();
    event.preventDefault();
    overlay.classList.add("drag");
});
localFileInput.addEventListener("drop", (event) => {
    event.stopPropagation();
    event.preventDefault();
    overlay.classList.remove("drag");
    if (event.dataTransfer) {
        localFileInput.files = event.dataTransfer.files;
        loadFile(event.dataTransfer.files[0]);
    }
});
toggleInfo.addEventListener("click", () => {
    if (infoContainer.style.display === "none") {
        infoContainer.style.display = "flex";
    }
    else {
        infoContainer.style.display = "none";
    }
});
reloadSwf.addEventListener("click", () => {
    if (player) {
        const confirmReload = confirm("Reload the current SWF?");
        if (confirmReload) {
            player.reload();
        }
    }
});
window.addEventListener("load", () => {
    if (navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        (navigator.platform === "MacIntel" &&
            typeof navigator.standalone !== "undefined")) {
        localFileInput.removeAttribute("accept");
    }
    overlay.removeAttribute("hidden");
});
async function loadSwf(swfUrl) {
    try {
        const pathname = new URL(swfUrl).pathname;
        document.title = pathname.substring(pathname.lastIndexOf("/") + 1);
    }
    catch (_) {
        // Ignore URL parsing errors.
    }
    const options = await getExplicitOptions();
    localFileName.textContent = document.title;
    localFileInput.value = "";
    load(Object.assign(Object.assign(Object.assign({}, options), { url: swfUrl, base: swfUrl.substring(0, swfUrl.lastIndexOf("/") + 1) }), baseExtensionConfig));
}
async function loadSwfFromHash() {
    const url = new URL(window.location.href);
    // Hash always starts with #, gotta slice that off
    const swfUrl = url.hash.length > 1 ? url.hash.slice(1) : null;
    if (swfUrl) {
        webURL.value = swfUrl;
        await loadSwf(swfUrl);
    }
}
window.addEventListener("pageshow", loadSwfFromHash);
window.addEventListener("hashchange", loadSwfFromHash);
window.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("local-file-label")
        .addEventListener("click", () => {
        document.getElementById("local-file").click();
    });
    webFormSubmit.addEventListener("click", () => {
        if (webURL.value !== "") {
            window.location.hash = webURL.value;
        }
    });
    webURL.addEventListener("keydown", (event) => event.key === "Enter" ? webFormSubmit.click() : undefined);
});

})();

/******/ })()
;