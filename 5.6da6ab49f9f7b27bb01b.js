(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/uSP":function(e,t,r){const s=r("+qE3").EventEmitter,n=r("MCLT").inherits;function o(){s.call(this),this.isLocked=!0}e.exports=o,n(o,s),o.prototype.go=function(){this.isLocked=!1,this.emit("unlock")},o.prototype.stop=function(){this.isLocked=!0,this.emit("lock")},o.prototype.await=function(e){this.isLocked?this.once("unlock",e):setTimeout(e)}},14:function(e,t){},"1TIO":function(e){e.exports=JSON.parse('{"4001":{"standard":"EIP 1193","message":"User rejected the request."},"4100":{"standard":"EIP 1193","message":"The requested account and/or method has not been authorized by the user."},"4200":{"standard":"EIP 1193","message":"The requested method is not supported by this Ethereum provider."},"-32700":{"standard":"JSON RPC 2.0","message":"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{"standard":"JSON RPC 2.0","message":"The JSON sent is not a valid Request object."},"-32601":{"standard":"JSON RPC 2.0","message":"The method does not exist / is not available."},"-32602":{"standard":"JSON RPC 2.0","message":"Invalid method parameter(s)."},"-32603":{"standard":"JSON RPC 2.0","message":"Internal JSON-RPC error."},"-32000":{"standard":"EIP 1474","message":"Invalid input."},"-32001":{"standard":"EIP 1474","message":"Resource not found."},"-32002":{"standard":"EIP 1474","message":"Resource unavailable."},"-32003":{"standard":"EIP 1474","message":"Transaction rejected."},"-32004":{"standard":"EIP 1474","message":"Method not supported."}}')},"468V":function(e,t,r){"use strict";r.r(t),r("ls82");var s=r("NcyZ"),n=(r("kB5k"),r("/TMw"),r("M39V"),r("f4g2")),o=r.n(n),a=r("WPTD"),i=r.n(a),c=r("Rlsf"),u=r.n(c),d=r("EqmL"),p=r.n(d),l=r("cC/c"),g=r.n(l);t.default=function(e){var t=e.getAccounts,r=e.signTransaction,n=e.rpcUrl,a=e.processMessage,c=e.processPersonalMessage,d=e.signMessage,l=e.signPersonalMessage,h=e.signTypedMessage,f=Object(s.i)(s.c).blockPollingInterval,m=t&&new u.a({getAccounts:t,signTransaction:r,processMessage:a,processPersonalMessage:c,signMessage:d,signPersonalMessage:l,signTypedMessage:h}),y=new i.a({rpcUrl:n.includes("http")?n:"https://".concat(n)}),v=new o.a({pollingInterval:f});return v.addProvider(new p.a),v.addProvider(new g.a),m&&v.addProvider(m),v.addProvider(y),v.start(),v.on("error",console.error),v}},EqmL:function(e,t,r){const s=r("ja2i"),n=r("t7TP");e.exports=class extends s{constructor(){super(({blockTracker:e,provider:t,engine:r})=>{const{events:s,middleware:o}=n({blockTracker:e,provider:t});return s.on("notification",e=>r.emit("data",null,e)),o})}}},Lf5n:function(e,t,r){const s=r("N1pS");class n extends Error{constructor(e,t,r){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string.');super(t),this.code=e,void 0!==r&&(this.data=r)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return s(this.serialize(),o,2)}}function o(e,t){if("[Circular]"!==t)return t}e.exports={EthereumRpcError:n,EthereumProviderError:class extends n{constructor(e,t,r){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,t,r)}}}},Rlsf:function(e,t,r){const s=r("l1gh"),n=r("KWkM"),o=r("MCLT").inherits,a=r("tnHP"),i=r("HtlB"),c=r("U6jy"),u=r("odnP"),d=r("Uu7K"),p=r("a5O3"),l=/^[0-9A-Fa-f]+$/g;function g(e){const t=this;t.nonceLock=u(1),e.getAccounts&&(t.getAccounts=e.getAccounts),e.processTransaction&&(t.processTransaction=e.processTransaction),e.processMessage&&(t.processMessage=e.processMessage),e.processPersonalMessage&&(t.processPersonalMessage=e.processPersonalMessage),e.processTypedMessage&&(t.processTypedMessage=e.processTypedMessage),t.approveTransaction=e.approveTransaction||t.autoApprove,t.approveMessage=e.approveMessage||t.autoApprove,t.approvePersonalMessage=e.approvePersonalMessage||t.autoApprove,t.approveDecryptMessage=e.approveDecryptMessage||t.autoApprove,t.approveEncryptionPublicKey=e.approveEncryptionPublicKey||t.autoApprove,t.approveTypedMessage=e.approveTypedMessage||t.autoApprove,e.signTransaction&&(t.signTransaction=e.signTransaction||v("signTransaction")),e.signMessage&&(t.signMessage=e.signMessage||v("signMessage")),e.signPersonalMessage&&(t.signPersonalMessage=e.signPersonalMessage||v("signPersonalMessage")),e.decryptMessage&&(t.decryptMessage=e.decryptMessage||v("decryptMessage")),e.encryptionPublicKey&&(t.encryptionPublicKey=e.encryptionPublicKey||v("encryptionPublicKey")),e.signTypedMessage&&(t.signTypedMessage=e.signTypedMessage||v("signTypedMessage")),e.recoverPersonalSignature&&(t.recoverPersonalSignature=e.recoverPersonalSignature),e.publishTransaction&&(t.publishTransaction=e.publishTransaction),t.estimateGas=e.estimateGas||t.estimateGas,t.getGasPrice=e.getGasPrice||t.getGasPrice}function h(e){return e.toLowerCase()}function f(e){const t=a.addHexPrefix(e);return a.isValidAddress(t)}function m(e){const t=a.addHexPrefix(e);return!a.isValidAddress(t)&&y(e)}function y(e){return"string"==typeof e&&"0x"===e.slice(0,2)&&e.slice(2).match(l)}function v(e){return function(t,r){r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "'+e+'" fn in constructor options'))}}e.exports=g,o(g,d),g.prototype.handleRequest=function(e,t,r){const n=this;let o,a,i,u,d;switch(n._parityRequests={},n._parityRequestCount=0,e.method){case"eth_coinbase":return void n.getAccounts(function(e,t){if(e)return r(e);r(null,t[0]||null)});case"eth_accounts":return void n.getAccounts(function(e,t){if(e)return r(e);r(null,t)});case"eth_sendTransaction":return o=e.params[0],void s([e=>n.validateTransaction(o,e),e=>n.processTransaction(o,e)],r);case"eth_signTransaction":return o=e.params[0],void s([e=>n.validateTransaction(o,e),e=>n.processSignTransaction(o,e)],r);case"eth_sign":return d=e.params[0],u=e.params[1],i=e.params[2]||{},a=c(i,{from:d,data:u}),void s([e=>n.validateMessage(a,e),e=>n.processMessage(a,e)],r);case"personal_sign":return function(){const t=e.params[0];if(m(e.params[1])&&f(t)){let t="The eth_personalSign method requires params ordered ";t+="[message, address]. This was previously handled incorrectly, ",t+="and has been corrected automatically. ",t+="Please switch this param order for smooth behavior in the future.",console.warn(t),d=e.params[0],u=e.params[1]}else u=e.params[0],d=e.params[1];i=e.params[2]||{},a=c(i,{from:d,data:u}),s([e=>n.validatePersonalMessage(a,e),e=>n.processPersonalMessage(a,e)],r)}();case"eth_decryptMessage":return function(){const t=e.params[0];if(m(e.params[1])&&f(t)){let t="The eth_decryptMessage method requires params ordered ";t+="[message, address]. This was previously handled incorrectly, ",t+="and has been corrected automatically. ",t+="Please switch this param order for smooth behavior in the future.",console.warn(t),d=e.params[0],u=e.params[1]}else u=e.params[0],d=e.params[1];i=e.params[2]||{},a=c(i,{from:d,data:u}),s([e=>n.validateDecryptMessage(a,e),e=>n.processDecryptMessage(a,e)],r)}();case"encryption_public_key":return function(){const t=e.params[0];s([e=>n.validateEncryptionPublicKey(t,e),e=>n.processEncryptionPublicKey(t,e)],r)}();case"personal_ecRecover":return u=e.params[0],i=e.params[2]||{},a=c(i,{sig:e.params[1],data:u}),void n.recoverPersonalSignature(a,r);case"eth_signTypedData":case"eth_signTypedData_v3":case"eth_signTypedData_v4":return function(){const t=e.params[0],o=e.params[1];f(t)?(d=t,u=o):(u=t,d=o),i=e.params[2]||{},a=c(i,{from:d,data:u}),s([e=>n.validateTypedMessage(a,e),e=>n.processTypedMessage(a,e)],r)}();case"parity_postTransaction":return o=e.params[0],void n.parityPostTransaction(o,r);case"parity_postSign":return d=e.params[0],u=e.params[1],void n.parityPostSign(d,u,r);case"parity_checkRequest":return void n.parityCheckRequest(e.params[0],r);case"parity_defaultAccount":return void n.getAccounts(function(e,t){if(e)return r(e);r(null,t[0]||null)});default:return void t()}},g.prototype.getAccounts=function(e){e(null,[])},g.prototype.processTransaction=function(e,t){const r=this;s([t=>r.approveTransaction(e,t),(e,t)=>r.checkApproval("transaction",e,t),t=>r.finalizeAndSubmitTx(e,t)],t)},g.prototype.processSignTransaction=function(e,t){const r=this;s([t=>r.approveTransaction(e,t),(e,t)=>r.checkApproval("transaction",e,t),t=>r.finalizeTx(e,t)],t)},g.prototype.processMessage=function(e,t){const r=this;s([t=>r.approveMessage(e,t),(e,t)=>r.checkApproval("message",e,t),t=>r.signMessage(e,t)],t)},g.prototype.processPersonalMessage=function(e,t){const r=this;s([t=>r.approvePersonalMessage(e,t),(e,t)=>r.checkApproval("message",e,t),t=>r.signPersonalMessage(e,t)],t)},g.prototype.processDecryptMessage=function(e,t){const r=this;s([t=>r.approveDecryptMessage(e,t),(e,t)=>r.checkApproval("decryptMessage",e,t),t=>r.decryptMessage(e,t)],t)},g.prototype.processEncryptionPublicKey=function(e,t){const r=this;s([t=>r.approveEncryptionPublicKey(e,t),(e,t)=>r.checkApproval("encryptionPublicKey",e,t),t=>r.encryptionPublicKey(e,t)],t)},g.prototype.processTypedMessage=function(e,t){const r=this;s([t=>r.approveTypedMessage(e,t),(e,t)=>r.checkApproval("message",e,t),t=>r.signTypedMessage(e,t)],t)},g.prototype.autoApprove=function(e,t){t(null,!0)},g.prototype.checkApproval=function(e,t,r){r(t?null:new Error("User denied "+e+" signature."))},g.prototype.parityPostTransaction=function(e,t){const r=this,s=`0x${r._parityRequestCount.toString(16)}`;r._parityRequestCount++,r.emitPayload({method:"eth_sendTransaction",params:[e]},function(e,t){r._parityRequests[s]=e?{error:e}:t.result}),t(null,s)},g.prototype.parityPostSign=function(e,t,r){const s=this,n=`0x${s._parityRequestCount.toString(16)}`;s._parityRequestCount++,s.emitPayload({method:"eth_sign",params:[e,t]},function(e,t){s._parityRequests[n]=e?{error:e}:t.result}),r(null,n)},g.prototype.parityCheckRequest=function(e,t){const r=this._parityRequests[e]||null;return r?r.error?t(r.error):void t(null,r):t(null,null)},g.prototype.recoverPersonalSignature=function(e,t){let r;try{r=i.recoverPersonalSignature(e)}catch(s){return t(s)}t(null,r)},g.prototype.validateTransaction=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign transaction."));this.validateSender(e.from,function(r,s){return r?t(r):s?void t():t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`))})},g.prototype.validateMessage=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign message."));this.validateSender(e.from,function(r,s){return r?t(r):s?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))})},g.prototype.validatePersonalMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign personal message.")):void 0===e.data?t(new Error("Undefined message - message required to sign personal message.")):y(e.data)?void this.validateSender(e.from,function(r,s){return r?t(r):s?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))}):t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))},g.prototype.validateDecryptMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to decrypt message.")):void 0===e.data?t(new Error("Undefined message - message required to decrypt message.")):y(e.data)?void this.validateSender(e.from,function(r,s){return r?t(r):s?void t():t(new Error(`Unknown address - unable to decrypt message for this address: "${e.from}"`))}):t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))},g.prototype.validateEncryptionPublicKey=function(e,t){this.validateSender(e,function(r,s){return r?t(r):s?void t():t(new Error(`Unknown address - unable to obtain encryption public key for this address: "${e}"`))})},g.prototype.validateTypedMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign typed data.")):void 0===e.data?t(new Error("Undefined data - message required to sign typed data.")):void this.validateSender(e.from,function(r,s){return r?t(r):s?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))})},g.prototype.validateSender=function(e,t){if(!e)return t(null,!1);this.getAccounts(function(r,s){if(r)return t(r);const n=-1!==s.map(h).indexOf(e.toLowerCase());t(null,n)})},g.prototype.finalizeAndSubmitTx=function(e,t){const r=this;r.nonceLock.take(function(){s([r.fillInTxExtras.bind(r,e),r.signTransaction.bind(r),r.publishTransaction.bind(r)],function(e,s){if(r.nonceLock.leave(),e)return t(e);t(null,s)})})},g.prototype.finalizeTx=function(e,t){const r=this;r.nonceLock.take(function(){s([r.fillInTxExtras.bind(r,e),r.signTransaction.bind(r)],function(s,n){if(r.nonceLock.leave(),s)return t(s);t(null,{raw:n,tx:e})})})},g.prototype.publishTransaction=function(e,t){this.emitPayload({method:"eth_sendRawTransaction",params:[e]},function(e,r){if(e)return t(e);t(null,r.result)})},g.prototype.estimateGas=function(e,t){p(this.engine,e,t)},g.prototype.getGasPrice=function(e){this.emitPayload({method:"eth_gasPrice",params:[]},function(t,r){if(t)return e(t);e(null,r.result)})},g.prototype.fillInTxExtras=function(e,t){const r=this,s=e.from,o={};void 0===e.gasPrice&&(o.gasPrice=r.getGasPrice.bind(r)),void 0===e.nonce&&(o.nonce=r.emitPayload.bind(r,{method:"eth_getTransactionCount",params:[s,"pending"]})),void 0===e.gas&&(o.gas=r.estimateGas.bind(r,function(e){return{from:e.from,to:e.to,value:e.value,data:e.data,gas:e.gas,gasPrice:e.gasPrice,nonce:e.nonce}}(e))),n(o,function(r,s){if(r)return t(r);const n={};s.gasPrice&&(n.gasPrice=s.gasPrice),s.nonce&&(n.nonce=s.nonce.result),s.gas&&(n.gas=s.gas),t(null,c(e,n))})}},Uu7K:function(e,t,r){const s=r("xQaN");function n(){}e.exports=n,n.prototype.setEngine=function(e){const t=this;t.engine||(t.engine=e,e.on("block",function(e){t.currentBlock=e}),e.on("start",function(){t.start()}),e.on("stop",function(){t.stop()}))},n.prototype.handleRequest=function(e,t,r){throw new Error("Subproviders should override `handleRequest`.")},n.prototype.emitPayload=function(e,t){this.engine.sendAsync(s(e),t)},n.prototype.stop=function(){},n.prototype.start=function(){}},WPTD:function(e,t,r){(function(t){const s=r(t.browser?"7sdD":14),n=r("MCLT").inherits,o=r("xQaN"),a=r("Uu7K"),{ethErrors:i,serializeError:c}=r("z8+S");function u(e){this.rpcUrl=e.rpcUrl}e.exports=u,n(u,a),u.prototype.handleRequest=function(e,t,r){const n=this.rpcUrl,a=function(e){return{id:e.id,jsonrpc:e.jsonrpc,method:e.method,params:e.params}}(e),u=o(a);s({uri:n,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(u),rejectUnauthorized:!1,timeout:2e4},function(e,t,s){if(e)return r(c(e));switch(t.statusCode){case 405:return r(i.rpc.methodNotFound());case 504:return function(){let e="Gateway timeout. The request took too long to process. ";e+="This can happen when querying logs over too wide a block range.";const t=new Error("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range.");return r(c(t))}();case 429:return function(){const e=new Error("Too Many Requests");return r(c(e))}();default:if(200!=t.statusCode){const e=new Error("Unknown Error: "+t.body);return r(c(e))}}let n;try{n=JSON.parse(s)}catch(e){return console.error(e.stack),r(c(e))}if(n.error)return r(n.error);r(null,n.result)})}}).call(this,r("8oxB"))},a5O3:function(e,t,r){const s=r("xQaN");e.exports=function(e,t,r){e.sendAsync(s({method:"eth_estimateGas",params:[t]}),function(e,t){if(e)return"no contract code at given address"===e.message?r(null,"0xcf08"):r(e);r(null,t.result)})}},"cC/c":function(e,t,r){const s=r("ja2i"),n=r("2nhq");e.exports=class extends s{constructor(){super(({blockTracker:e,provider:t})=>n({blockTracker:e,provider:t}))}}},drvL:function(e){e.exports=JSON.parse('{"rpc":{"invalidInput":-32000,"resourceNotFound":-32001,"resourceUnavailable":-32002,"transactionRejected":-32003,"methodNotSupported":-32004,"parse":-32700,"invalidRequest":-32600,"methodNotFound":-32601,"invalidParams":-32602,"internal":-32603},"provider":{"userRejectedRequest":4001,"unauthorized":4100,"unsupportedMethod":4200}}')},f4g2:function(e,t,r){const s=r("+qE3").EventEmitter,n=r("MCLT").inherits,o=r("tnHP"),a=r("V5x4"),i=r("LCem"),c=r("YOJA"),u=r("/uSP"),d=(r("gO+T"),r("xQaN")),p=function(){};function l(e){const t=this;s.call(t),t.setMaxListeners(30),e=e||{};const r={sendAsync:t._handleAsync.bind(t)};t._blockTracker=e.blockTracker||new a({provider:e.blockTrackerProvider||r,pollingInterval:e.pollingInterval||4e3,setSkipCacheFlag:!0}),t._ready=new u,t.currentBlock=null,t._providers=[]}e.exports=l,n(l,s),l.prototype.start=function(e=p){const t=this;t._ready.go(),t._blockTracker.on("latest",e=>{t._getBlockByNumberWithRetry(e,(e,r)=>{if(e)return void this.emit("error",e);if(!r)return console.log(r),void this.emit("error",new Error("Could not find block"));const s={number:o.toBuffer((n=r).number),hash:o.toBuffer(n.hash),parentHash:o.toBuffer(n.parentHash),nonce:o.toBuffer(n.nonce),mixHash:o.toBuffer(n.mixHash),sha3Uncles:o.toBuffer(n.sha3Uncles),logsBloom:o.toBuffer(n.logsBloom),transactionsRoot:o.toBuffer(n.transactionsRoot),stateRoot:o.toBuffer(n.stateRoot),receiptsRoot:o.toBuffer(n.receiptRoot||n.receiptsRoot),miner:o.toBuffer(n.miner),difficulty:o.toBuffer(n.difficulty),totalDifficulty:o.toBuffer(n.totalDifficulty),size:o.toBuffer(n.size),extraData:o.toBuffer(n.extraData),gasLimit:o.toBuffer(n.gasLimit),gasUsed:o.toBuffer(n.gasUsed),timestamp:o.toBuffer(n.timestamp),transactions:n.transactions};var n;t._setCurrentBlock(s),t.emit("rawBlock",r),t.emit("latest",r)})}),t._blockTracker.on("sync",t.emit.bind(t,"sync")),t._blockTracker.on("error",t.emit.bind(t,"error")),t._running=!0,t.emit("start")},l.prototype.stop=function(){const e=this;e._blockTracker.removeAllListeners(),e._running=!1,e.emit("stop")},l.prototype.isRunning=function(){return this._running},l.prototype.addProvider=function(e,t){"number"==typeof t?this._providers.splice(t,0,e):this._providers.push(e),e.setEngine(this)},l.prototype.removeProvider=function(e){const t=this._providers.indexOf(e);if(t<0)throw new Error("Provider not found.");this._providers.splice(t,1)},l.prototype.send=function(e){throw new Error("Web3ProviderEngine does not support synchronous requests.")},l.prototype.sendAsync=function(e,t){const r=this;r._ready.await(function(){Array.isArray(e)?i(e,r._handleAsync.bind(r),t):r._handleAsync(e,t)})},l.prototype._getBlockByNumberWithRetry=function(e,t){const r=this;let s=5;return void n();function n(){r._getBlockByNumber(e,o)}function o(e,r){return e?t(e):r?void t(null,r):s>0?(s--,void setTimeout(function(){n()},1e3)):void t(null,null)}},l.prototype._getBlockByNumber=function(e,t){const r=d({method:"eth_getBlockByNumber",params:[e,!1],skipCache:!0});this._handleAsync(r,(e,r)=>e?t(e):t(null,r.result))},l.prototype._handleAsync=function(e,t){var r=this,s=-1,n=null,o=null,a=[];function i(r,s){o=r,n=s,c(a,function(e,t){e?e(o,n,t):t()},function(){var r={id:e.id,jsonrpc:e.jsonrpc,result:n};null!=o?(r.error={message:o.stack||o.message||o,code:-32e3},t(o,r)):t(null,r)})}!function t(n){if(s+=1,a.unshift(n),s>=r._providers.length)i(new Error('Request for method "'+e.method+'" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try{r._providers[s].handleRequest(e,t,i)}catch(o){i(o)}}()},l.prototype._setCurrentBlock=function(e){this.currentBlock=e,this.emit("block",e)}},"gO+T":function(e,t,r){const s=r("rE/H");function n(e){return"never"!==i(e)}function o(e){var t=a(e);return t>=e.params.length?e.params:"eth_getBlockByNumber"===e.method?e.params.slice(1):e.params.slice(0,t)}function a(e){switch(e.method){case"eth_getStorageAt":return 2;case"eth_getBalance":case"eth_getCode":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":return 1;case"eth_getBlockByNumber":return 0;default:return}}function i(e){switch(e.method){case"web3_clientVersion":case"web3_sha3":case"eth_protocolVersion":case"eth_getBlockTransactionCountByHash":case"eth_getUncleCountByBlockHash":case"eth_getCode":case"eth_getBlockByHash":case"eth_getTransactionByHash":case"eth_getTransactionByBlockHashAndIndex":case"eth_getTransactionReceipt":case"eth_getUncleByBlockHashAndIndex":case"eth_getCompilers":case"eth_compileLLL":case"eth_compileSolidity":case"eth_compileSerpent":case"shh_version":return"perma";case"eth_getBlockByNumber":case"eth_getBlockTransactionCountByNumber":case"eth_getUncleCountByBlockNumber":case"eth_getTransactionByBlockNumberAndIndex":case"eth_getUncleByBlockNumberAndIndex":return"fork";case"eth_gasPrice":case"eth_getBalance":case"eth_getStorageAt":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":case"eth_getFilterLogs":case"eth_getLogs":case"eth_blockNumber":return"block";case"net_version":case"net_peerCount":case"net_listening":case"eth_syncing":case"eth_sign":case"eth_coinbase":case"eth_mining":case"eth_hashrate":case"eth_accounts":case"eth_sendTransaction":case"eth_sendRawTransaction":case"eth_newFilter":case"eth_newBlockFilter":case"eth_newPendingTransactionFilter":case"eth_uninstallFilter":case"eth_getFilterChanges":case"eth_getWork":case"eth_submitWork":case"eth_submitHashrate":case"db_putString":case"db_getString":case"db_putHex":case"db_getHex":case"shh_post":case"shh_newIdentity":case"shh_hasIdentity":case"shh_newGroup":case"shh_addToGroup":case"shh_newFilter":case"shh_uninstallFilter":case"shh_getFilterChanges":case"shh_getMessages":return"never"}}e.exports={cacheIdentifierForPayload:function(e,t={}){if(!n(e))return null;const{includeBlockRef:r}=t,a=r?e.params:o(e);return e.method+":"+s(a)},canCache:n,blockTagForPayload:function(e){var t=a(e);return t>=e.params.length?null:e.params[t]},paramsWithoutBlockTag:o,blockTagParamIndex:a,cacheTypeForPayload:i}},ja2i:function(e,t,r){const s=r("Uu7K");e.exports=class extends s{constructor(e){if(super(),!e)throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");this._constructorFn=e}setEngine(e){if(this.middleware)throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");const t=this._constructorFn({engine:e,provider:e,blockTracker:e._blockTracker});if(!t)throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");if("function"!=typeof t)throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");this.middleware=t}handleRequest(e,t,r){const s={id:e.id};this.middleware(e,s,function(e){t((t,r,n)=>{t?(delete s.result,s.error={message:t.message||t}):s.result=r,e?e(n):n()})},function(e){if(e)return r(e);r(null,s.result)})}}},"kzD/":function(e,t){e.exports=function(){return Math.floor(Number.MAX_SAFE_INTEGER*Math.random())}},rdiz:function(e,t,r){const s=r("1TIO"),n=r("drvL").rpc.internal,{EthereumRpcError:o}=r("Lf5n"),a="Unspecified server error.",i={code:n,message:c(n)};function c(e,t="Unspecified error message. This is a bug, please report it."){if(Number.isInteger(e)){const t=e.toString();if(s[t])return s[t].message;if(d(e))return a}return t}function u(e){if(!Number.isInteger(e))return!1;const t=e.toString();return!!s[t]||!!d(e)}function d(e){return e>=-32099&&e<=-32e3}function p(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.assign({},e):e}e.exports={getMessageFromCode:c,isValidCode:u,serializeError:function(e,t=i){if(!t||!Number.isInteger(t.code)||"string"!=typeof t.message)throw new Error("fallbackError must contain integer number code and string message.");if(e instanceof o)return e.serialize();const r={};return e&&u(e.code)?(r.code=e.code,e.message&&"string"==typeof e.message?(r.message=e.message,e.hasOwnProperty("data")&&(r.data=e.data)):(r.message=c(r.code),r.data={originalError:p(e)})):(r.code=t.code,r.message=e&&e.message?e.message:t.message,r.data={originalError:p(e)}),e&&e.stack&&(r.stack=e.stack),r},JSON_RPC_SERVER_ERROR_MESSAGE:a}},xQaN:function(e,t,r){const s=r("kzD/"),n=r("U6jy");e.exports=function(e){return n({id:s(),jsonrpc:"2.0",params:[]},e)}},"z8+S":function(e,t,r){const{EthereumRpcError:s,EthereumProviderError:n}=r("Lf5n"),{serializeError:o,getMessageFromCode:a}=r("rdiz"),i=r("zUc0"),c=r("drvL");e.exports={ethErrors:i,EthereumRpcError:s,EthereumProviderError:n,serializeError:o,getMessageFromCode:a,ERROR_CODES:c}},zUc0:function(e,t,r){const{EthereumRpcError:s,EthereumProviderError:n}=r("Lf5n"),{getMessageFromCode:o}=r("rdiz"),a=r("drvL");function i(e,t){const[r,n]=u(t);return new s(e,r||o(e),n)}function c(e,t){const[r,s]=u(t);return new n(e,r||o(e),s)}function u(e){let t,r;return e&&("string"==typeof e?t=e:"object"!=typeof e||Array.isArray(e)||(t=e.message,r=e.data)),[t,r]}e.exports={rpc:{parse:e=>i(a.rpc.parse,e),invalidRequest:e=>i(a.rpc.invalidRequest,e),invalidParams:e=>i(a.rpc.invalidParams,e),methodNotFound:e=>i(a.rpc.methodNotFound,e),internal:e=>i(a.rpc.internal,e),server:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:t}=e;if(!Number.isInteger(t)||t>-32005||t<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return i(t,e)},invalidInput:e=>i(a.rpc.invalidInput,e),resourceNotFound:e=>i(a.rpc.resourceNotFound,e),resourceUnavailable:e=>i(a.rpc.resourceUnavailable,e),transactionRejected:e=>i(a.rpc.transactionRejected,e),methodNotSupported:e=>i(a.rpc.methodNotSupported,e)},provider:{userRejectedRequest:e=>c(a.provider.userRejectedRequest,e),unauthorized:e=>c(a.provider.unauthorized,e),unsupportedMethod:e=>c(a.provider.unsupportedMethod,e),custom:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:t,message:r,data:s}=e;if(!r||"string"!=typeof r)throw new Error('"message" must be a nonempty string');return new n(t,r,s)}}}}}]);