(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"9oXm":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var r=n("+qE3"),o=n.n(r),a=n("qPxQ");class i{constructor(){this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this.deviceModel=null,this._events=new o.a,this.send=async(t,n,r,o,i=e.alloc(0),s=[a.StatusCodes.OK])=>{if(i.length>=256)throw new a.TransportError("data.length exceed 256 bytes limit. Got: "+i.length,"DataLengthTooBig");const c=await this.exchange(e.concat([e.from([t,n,r,o]),e.from([i.length]),i])),u=c.readUInt16BE(c.length-2);if(!s.some(e=>e===u))throw new a.TransportStatusError(u);return c},this.exchangeBusyPromise=void 0,this.exchangeAtomicImpl=async e=>{if(this.exchangeBusyPromise)throw new a.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");let t;const n=new Promise(e=>{t=e});this.exchangeBusyPromise=n;let r=!1;const o=setTimeout(()=>{r=!0,this.emit("unresponsive")},this.unresponsiveTimeout);try{const n=await e();return r&&this.emit("responsive"),n}finally{clearTimeout(o),t&&t(),this.exchangeBusyPromise=null}},this._appAPIlock=null}exchange(e){throw new Error("exchange not implemented")}setScrambleKey(e){}close(){return Promise.resolve()}on(e,t){this._events.on(e,t)}off(e,t){this._events.removeListener(e,t)}emit(e,...t){this._events.emit(e,...t)}setDebugMode(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}setExchangeTimeout(e){this.exchangeTimeout=e}setExchangeUnresponsiveTimeout(e){this.unresponsiveTimeout=e}static create(e=3e3,t){return new Promise((n,r)=>{let o=!1;const i=this.listen({next:t=>{o=!0,i&&i.unsubscribe(),s&&clearTimeout(s),this.open(t.descriptor,e).then(n,r)},error:e=>{s&&clearTimeout(s),r(e)},complete:()=>{s&&clearTimeout(s),o||r(new a.TransportError(this.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),s=t?setTimeout(()=>{i.unsubscribe(),r(new a.TransportError(this.ErrorMessage_ListenTimeout,"ListenTimeout"))},t):null})}decorateAppAPIMethods(e,t,n){for(let r of t)e[r]=this.decorateAppAPIMethod(r,e[r],e,n)}decorateAppAPIMethod(e,t,n,r){return async(...o)=>{const{_appAPIlock:i}=this;if(i)return Promise.reject(new a.TransportError("Ledger Device is busy (lock "+i+")","TransportLocked"));try{return this._appAPIlock=e,this.setScrambleKey(r),await t.apply(n,o)}finally{this._appAPIlock=null}}}}i.isSupported=void 0,i.list=void 0,i.listen=void 0,i.open=void 0,i.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",i.ErrorMessage_NoDeviceFound="No Ledger device found"}).call(this,n("tjlA").Buffer)},MV7B:function(e,t,n){"use strict";(function(t){var r=n("tnHP"),o=n("vY81"),a=r.BN,i=new a("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),s=function(){function e(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=n||{};var o=[{name:"nonce",length:32,allowLess:!0,default:new t([])},{name:"gasPrice",length:32,allowLess:!0,default:new t([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new t([])},{name:"to",allowZero:!0,length:20,default:new t([])},{name:"value",length:32,allowLess:!0,default:new t([])},{name:"data",alias:"input",allowZero:!0,default:new t([])},{name:"v",allowZero:!0,default:new t([28])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new t([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new t([])}];r.defineProperties(this,o,n),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)});var a=r.bufferToInt(this.v),i=Math.floor((a-35)/2);i<0&&(i=0),this._chainId=i||n.chainId||0,this._homestead=!0}return e.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},e.prototype.hash=function(e){void 0===e&&(e=!0);var t=void 0;if(e)t=this.raw;else if(this._chainId>0){var n=this.raw.slice();this.v=this._chainId,this.r=0,this.s=0,t=this.raw,this.raw=n}else t=this.raw.slice(0,6);return r.rlphash(t)},e.prototype.getChainId=function(){return this._chainId},e.prototype.getSenderAddress=function(){if(this._from)return this._from;var e=this.getSenderPublicKey();return this._from=r.publicToAddress(e),this._from},e.prototype.getSenderPublicKey=function(){if(!(this._senderPubKey&&this._senderPubKey.length||this.verifySignature()))throw new Error("Invalid Signature");return this._senderPubKey},e.prototype.verifySignature=function(){var e=this.hash(!1);if(this._homestead&&1===new a(this.s).cmp(i))return!1;try{var t=r.bufferToInt(this.v);this._chainId>0&&(t-=2*this._chainId+8),this._senderPubKey=r.ecrecover(e,t,this.r,this.s)}catch(n){return!1}return!!this._senderPubKey},e.prototype.sign=function(e){var t=this.hash(!1),n=r.ecsign(t,e);this._chainId>0&&(n.v+=2*this._chainId+8),Object.assign(this,n)},e.prototype.getDataFee=function(){for(var e=this.raw[5],t=new a(0),n=0;n<e.length;n++)t.iaddn(0===e[n]?o.txDataZeroGas.v:o.txDataNonZeroGas.v);return t},e.prototype.getBaseFee=function(){var e=this.getDataFee().iaddn(o.txGas.v);return this._homestead&&this.toCreationAddress()&&e.iaddn(o.txCreation.v),e},e.prototype.getUpfrontCost=function(){return new a(this.gasLimit).imul(new a(this.gasPrice)).iadd(new a(this.value))},e.prototype.validate=function(e){var t=[];return this.verifySignature()||t.push("Invalid Signature"),this.getBaseFee().cmp(new a(this.gasLimit))>0&&t.push(["gas limit is too low. Need at least "+this.getBaseFee()]),void 0===e||!1===e?0===t.length:t.join(" ")},e}();e.exports=s}).call(this,n("tjlA").Buffer)},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Q0pZ:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r='\n\t<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#1652F0"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M5.45508 20.0006C5.45508 28.0338 11.9673 34.546 20.0006 34.546C28.0338 34.546 34.546 28.0338 34.546 20.0006C34.546 11.9673 28.0338 5.45508 20.0006 5.45508C11.9673 5.45508 5.45508 11.9673 5.45508 20.0006ZM17.3137 15.3145C16.2091 15.3145 15.3137 16.2099 15.3137 17.3145V22.6882C15.3137 23.7928 16.2091 24.6882 17.3137 24.6882H22.6874C23.792 24.6882 24.6874 23.7928 24.6874 22.6882V17.3145C24.6874 16.2099 23.792 15.3145 22.6874 15.3145H17.3137Z" fill="white"/>\n\t</svg>\n'},QFga:function(e,t,n){"use strict";n.r(t),n.d(t,"generateAddresses",function(){return u}),n.d(t,"isValidPath",function(){return d});var r=n("ZDeM"),o=n("vUa2"),a=n.n(o),i=n("tjlA"),s=r.publicToAddress,c=r.toChecksumAddress;function u(e,t){var n=e.publicKey,r=e.chainCode,o=e.path,u=new a.a;u.publicKey=new i.Buffer(n,"hex"),u.chainCode=new i.Buffer(r,"hex");for(var d=[],f=t;f<5+t;f++){var l=u.deriveChild(f),p=s(l.publicKey,!0).toString("hex");d.push({dPath:"".concat(o,"/").concat(f),address:c("0x".concat(p))})}return d}function d(e){var t=e.split("/");if("m"!==t[0])return!1;if("44'"!==t[1])return!1;if(!["60'","1'","73799'","246'"].includes(t[2]))return!1;if(void 0===t[3]||"0'"===t[3])return!0;var n=Number(t[3].slice(0,-1));if(isNaN(n)||n<0||"'"!==t[3].slice(-1))return!1;if(void 0===t[4])return!0;var r=Number(t[4]);if(isNaN(r)||r<0)return!1;if(void 0===t[5])return!0;var o=Number(t[5]);return!(isNaN(o)||o<0)}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},cDf5:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},o0o1:function(e,t,n){e.exports=n("ls82")},qPxQ:function(e,t,n){"use strict";n.r(t),n.d(t,"AccountNameRequiredError",function(){return d}),n.d(t,"AccountNotSupported",function(){return f}),n.d(t,"AmountRequired",function(){return l}),n.d(t,"BluetoothRequired",function(){return p}),n.d(t,"BtcUnmatchedApp",function(){return h}),n.d(t,"CantOpenDevice",function(){return v}),n.d(t,"CantScanQRCode",function(){return Me}),n.d(t,"CashAddrNotSupported",function(){return g}),n.d(t,"CurrencyNotSupported",function(){return m}),n.d(t,"DBNotReset",function(){return Ye}),n.d(t,"DBWrongPassword",function(){return Ke}),n.d(t,"DeviceAppVerifyNotSupported",function(){return y}),n.d(t,"DeviceGenuineSocketEarlyClose",function(){return b}),n.d(t,"DeviceHalted",function(){return N}),n.d(t,"DeviceInOSUExpected",function(){return T}),n.d(t,"DeviceNameInvalid",function(){return I}),n.d(t,"DeviceNotGenuineError",function(){return w}),n.d(t,"DeviceOnDashboardExpected",function(){return E}),n.d(t,"DeviceOnDashboardUnexpected",function(){return A}),n.d(t,"DeviceShouldStayInApp",function(){return Pe}),n.d(t,"DeviceSocketFail",function(){return D}),n.d(t,"DeviceSocketNoBulkStatus",function(){return S}),n.d(t,"DisconnectedDevice",function(){return C}),n.d(t,"DisconnectedDeviceDuringOperation",function(){return O}),n.d(t,"ETHAddressNonEIP",function(){return ke}),n.d(t,"EnpointConfigError",function(){return R}),n.d(t,"EthAppPleaseEnableContractData",function(){return P}),n.d(t,"FeeEstimationFailed",function(){return _}),n.d(t,"FeeNotLoaded",function(){return Ge}),n.d(t,"FeeRequired",function(){return Fe}),n.d(t,"FeeTooHigh",function(){return Be}),n.d(t,"FirmwareNotRecognized",function(){return L}),n.d(t,"FirmwareOrAppUpdateRequired",function(){return Ve}),n.d(t,"GasLessThanEstimate",function(){return se}),n.d(t,"GenuineCheckFailed",function(){return We}),n.d(t,"HardResetFail",function(){return x}),n.d(t,"InvalidAddress",function(){return k}),n.d(t,"InvalidAddressBecauseDestinationIsAlsoSource",function(){return M}),n.d(t,"InvalidXRPTag",function(){return U}),n.d(t,"LatestMCUInstalledError",function(){return G}),n.d(t,"LedgerAPI4xx",function(){return je}),n.d(t,"LedgerAPI5xx",function(){return He}),n.d(t,"LedgerAPIError",function(){return B}),n.d(t,"LedgerAPIErrorWithMessage",function(){return z}),n.d(t,"LedgerAPINotAvailable",function(){return q}),n.d(t,"MCUNotGenuineToDashboard",function(){return he}),n.d(t,"ManagerAppAlreadyInstalledError",function(){return W}),n.d(t,"ManagerAppDepInstallRequired",function(){return H}),n.d(t,"ManagerAppDepUninstallRequired",function(){return V}),n.d(t,"ManagerAppRelyOnBTCError",function(){return j}),n.d(t,"ManagerDeviceLockedError",function(){return Z}),n.d(t,"ManagerFirmwareNotEnoughSpaceError",function(){return K}),n.d(t,"ManagerNotEnoughSpaceError",function(){return Y}),n.d(t,"ManagerUninstallBTCDep",function(){return J}),n.d(t,"NetworkDown",function(){return X}),n.d(t,"NoAccessToCamera",function(){return oe}),n.d(t,"NoAddressesFound",function(){return Q}),n.d(t,"NoDBPathGiven",function(){return Ze}),n.d(t,"NotEnoughBalance",function(){return $}),n.d(t,"NotEnoughBalanceBecauseDestinationNotCreated",function(){return re}),n.d(t,"NotEnoughBalanceInParentAccount",function(){return te}),n.d(t,"NotEnoughBalanceToDelegate",function(){return ee}),n.d(t,"NotEnoughGas",function(){return ae}),n.d(t,"NotEnoughSpendableBalance",function(){return ne}),n.d(t,"NotSupportedLegacyAddress",function(){return ie}),n.d(t,"PairingFailed",function(){return qe}),n.d(t,"PasswordIncorrectError",function(){return ue}),n.d(t,"PasswordsDontMatchError",function(){return ce}),n.d(t,"RecipientRequired",function(){return ve}),n.d(t,"RecommendSubAccountsToEmpty",function(){return de}),n.d(t,"RecommendUndelegation",function(){return fe}),n.d(t,"StatusCodes",function(){return Xe}),n.d(t,"SyncError",function(){return ze}),n.d(t,"TimeoutTagged",function(){return le}),n.d(t,"TransportError",function(){return Je}),n.d(t,"TransportInterfaceNotAvailable",function(){return Ce}),n.d(t,"TransportOpenUserCancelled",function(){return Se}),n.d(t,"TransportRaceCondition",function(){return Oe}),n.d(t,"TransportStatusError",function(){return $e}),n.d(t,"TransportWebUSBGestureRequired",function(){return Re}),n.d(t,"UnavailableTezosOriginatedAccountReceive",function(){return ge}),n.d(t,"UnavailableTezosOriginatedAccountSend",function(){return me}),n.d(t,"UnexpectedBootloader",function(){return pe}),n.d(t,"UnknownMCU",function(){return F}),n.d(t,"UpdateFetchFileFail",function(){return ye}),n.d(t,"UpdateIncorrectHash",function(){return be}),n.d(t,"UpdateIncorrectSig",function(){return we}),n.d(t,"UpdateYourApp",function(){return Ee}),n.d(t,"UserRefusedAddress",function(){return Te}),n.d(t,"UserRefusedAllowManager",function(){return Ie}),n.d(t,"UserRefusedDeviceNameChange",function(){return Ae}),n.d(t,"UserRefusedFirmwareUpdate",function(){return Ne}),n.d(t,"UserRefusedOnDevice",function(){return De}),n.d(t,"WebsocketConnectionError",function(){return _e}),n.d(t,"WebsocketConnectionFailed",function(){return Le}),n.d(t,"WrongAppForCurrency",function(){return Ue}),n.d(t,"WrongDeviceForAccount",function(){return xe}),n.d(t,"addCustomErrorDeserializer",function(){return a}),n.d(t,"createCustomErrorClass",function(){return i}),n.d(t,"deserializeError",function(){return s}),n.d(t,"getAltStatusMessage",function(){return Qe}),n.d(t,"serializeError",function(){return c});var r={},o={},a=function(e,t){o[e]=t},i=function(e){var t=function(t,n){Object.assign(this,n),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,r[e]=t,t},s=function(e){if("object"==typeof e&&e){try{var t=JSON.parse(e.message);t.message&&t.name&&(e=t)}catch(f){}var n=void 0;if("string"==typeof e.name){var a=e.name,c=o[a];if(c)n=c(e);else{var u="Error"===a?Error:r[a];u||(console.warn("deserializing an unknown class '"+a+"'"),u=i(a)),n=Object.create(u.prototype);try{for(var d in e)e.hasOwnProperty(d)&&(n[d]=e[d])}catch(f){}}}else n=new Error(e.message);return!n.stack&&Error.captureStackTrace&&Error.captureStackTrace(n,s),n}return new Error(String(e))},c=function(e){return e?"object"==typeof e?u(e,[]):"function"==typeof e?"[Function: "+(e.name||"anonymous")+"]":e:e};function u(e,t){var n={};t.push(e);for(var r=0,o=Object.keys(e);r<o.length;r++){var a=o[r],i=e[a];"function"!=typeof i&&(n[a]=i&&"object"==typeof i?-1!==t.indexOf(e[a])?"[Circular]":u(e[a],t.slice(0)):i)}return"string"==typeof e.name&&(n.name=e.name),"string"==typeof e.message&&(n.message=e.message),"string"==typeof e.stack&&(n.stack=e.stack),n}var d=i("AccountNameRequired"),f=i("AccountNotSupported"),l=i("AmountRequired"),p=i("BluetoothRequired"),h=i("BtcUnmatchedApp"),v=i("CantOpenDevice"),g=i("CashAddrNotSupported"),m=i("CurrencyNotSupported"),y=i("DeviceAppVerifyNotSupported"),b=i("DeviceGenuineSocketEarlyClose"),w=i("DeviceNotGenuine"),E=i("DeviceOnDashboardExpected"),A=i("DeviceOnDashboardUnexpected"),T=i("DeviceInOSUExpected"),N=i("DeviceHalted"),I=i("DeviceNameInvalid"),D=i("DeviceSocketFail"),S=i("DeviceSocketNoBulkStatus"),C=i("DisconnectedDevice"),O=i("DisconnectedDeviceDuringOperation"),R=i("EnpointConfig"),P=i("EthAppPleaseEnableContractData"),_=i("FeeEstimationFailed"),L=i("FirmwareNotRecognized"),x=i("HardResetFail"),U=i("InvalidXRPTag"),k=i("InvalidAddress"),M=i("InvalidAddressBecauseDestinationIsAlsoSource"),G=i("LatestMCUInstalledError"),F=i("UnknownMCU"),B=i("LedgerAPIError"),z=i("LedgerAPIErrorWithMessage"),q=i("LedgerAPINotAvailable"),W=i("ManagerAppAlreadyInstalled"),j=i("ManagerAppRelyOnBTC"),H=i("ManagerAppDepInstallRequired"),V=i("ManagerAppDepUninstallRequired"),Z=i("ManagerDeviceLocked"),K=i("ManagerFirmwareNotEnoughSpace"),Y=i("ManagerNotEnoughSpace"),J=i("ManagerUninstallBTCDep"),X=i("NetworkDown"),Q=i("NoAddressesFound"),$=i("NotEnoughBalance"),ee=i("NotEnoughBalanceToDelegate"),te=i("NotEnoughBalanceInParentAccount"),ne=i("NotEnoughSpendableBalance"),re=i("NotEnoughBalanceBecauseDestinationNotCreated"),oe=i("NoAccessToCamera"),ae=i("NotEnoughGas"),ie=i("NotSupportedLegacyAddress"),se=i("GasLessThanEstimate"),ce=i("PasswordsDontMatch"),ue=i("PasswordIncorrect"),de=i("RecommendSubAccountsToEmpty"),fe=i("RecommendUndelegation"),le=i("TimeoutTagged"),pe=i("UnexpectedBootloader"),he=i("MCUNotGenuineToDashboard"),ve=i("RecipientRequired"),ge=i("UnavailableTezosOriginatedAccountReceive"),me=i("UnavailableTezosOriginatedAccountSend"),ye=i("UpdateFetchFileFail"),be=i("UpdateIncorrectHash"),we=i("UpdateIncorrectSig"),Ee=i("UpdateYourApp"),Ae=i("UserRefusedDeviceNameChange"),Te=i("UserRefusedAddress"),Ne=i("UserRefusedFirmwareUpdate"),Ie=i("UserRefusedAllowManager"),De=i("UserRefusedOnDevice"),Se=i("TransportOpenUserCancelled"),Ce=i("TransportInterfaceNotAvailable"),Oe=i("TransportRaceCondition"),Re=i("TransportWebUSBGestureRequired"),Pe=i("DeviceShouldStayInApp"),_e=i("WebsocketConnectionError"),Le=i("WebsocketConnectionFailed"),xe=i("WrongDeviceForAccount"),Ue=i("WrongAppForCurrency"),ke=i("ETHAddressNonEIP"),Me=i("CantScanQRCode"),Ge=i("FeeNotLoaded"),Fe=i("FeeRequired"),Be=i("FeeTooHigh"),ze=i("SyncError"),qe=i("PairingFailed"),We=i("GenuineCheckFailed"),je=i("LedgerAPI4xx"),He=i("LedgerAPI5xx"),Ve=i("FirmwareOrAppUpdateRequired"),Ze=i("NoDBPathGiven"),Ke=i("DBWrongPassword"),Ye=i("DBNotReset");function Je(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}Je.prototype=new Error,a("TransportError",function(e){return new Je(e.message,e.id)});var Xe={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function Qe(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}function $e(e){this.name="TransportStatusError";var t=Object.keys(Xe).find(function(t){return Xe[t]===e})||"UNKNOWN_ERROR",n=Qe(e)||t,r=e.toString(16);this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}$e.prototype=new Error,a("TransportStatusError",function(e){return new $e(e.statusCode)})},vULT:function(e,t,n){"use strict";n.d(t,"a",function(){return a});let r=0;const o=[],a=(e,t,n)=>{const a={type:e,id:String(++r),date:new Date};t&&(a.message=t),n&&(a.data=n),function(e){for(let n=0;n<o.length;n++)try{o[n](e)}catch(t){console.error(t)}}(a)};"undefined"!=typeof window&&(window.__ledgerLogsListen=e=>(o.push(e),()=>{const t=o.indexOf(e);-1!==t&&(o[t]=o[o.length-1],o.pop())}))},vY81:function(e){e.exports=JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}')},yXPU:function(e,t){function n(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,c,"next",e)}function c(e){n(i,o,a,s,c,"throw",e)}s(void 0)})}}},z3bg:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"v1",function(){return v}),n.d(t,"v3",function(){return I}),n.d(t,"v4",function(){return D}),n.d(t,"v5",function(){return O}),n.d(t,"NIL",function(){return R}),n.d(t,"version",function(){return P}),n.d(t,"validate",function(){return s}),n.d(t,"stringify",function(){return l}),n.d(t,"parse",function(){return g});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}for(var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,s=function(e){return"string"==typeof e&&i.test(e)},c=[],u=0;u<256;++u)c.push((u+256).toString(16).substr(1));var d,f,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n},p=0,h=0,v=function(e,t,n){var r=t&&n||0,o=t||new Array(16),i=(e=e||{}).node||d,s=void 0!==e.clockseq?e.clockseq:f;if(null==i||null==s){var c=e.random||(e.rng||a)();null==i&&(i=d=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==s&&(s=f=16383&(c[6]<<8|c[7]))}var u=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:h+1,g=u-p+(v-h)/1e4;if(g<0&&void 0===e.clockseq&&(s=s+1&16383),(g<0||u>p)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=u,h=v,f=s;var m=(1e4*(268435455&(u+=122192928e5))+v)%4294967296;o[r++]=m>>>24&255,o[r++]=m>>>16&255,o[r++]=m>>>8&255,o[r++]=255&m;var y=u/4294967296*1e4&268435455;o[r++]=y>>>8&255,o[r++]=255&y,o[r++]=y>>>24&15|16,o[r++]=y>>>16&255,o[r++]=s>>>8|128,o[r++]=255&s;for(var b=0;b<6;++b)o[r+b]=i[b];return t||l(o)},g=function(e){if(!s(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n},m=function(e,t,n){function r(e,r,o,a){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=g(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var i=new Uint8Array(16+e.length);if(i.set(r),i.set(e,r.length),(i=n(i))[6]=15&i[6]|t,i[8]=63&i[8]|128,o){a=a||0;for(var s=0;s<16;++s)o[a+s]=i[s];return o}return l(i)}try{r.name=e}catch(o){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r};function y(e){return 14+(e+64>>>9<<4)+1}function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function w(e,t,n,r,o,a){return b((i=b(b(t,e),b(r,a)))<<(s=o)|i>>>32-s,n);var i,s}function E(e,t,n,r,o,a,i){return w(t&n|~t&r,e,t,o,a,i)}function A(e,t,n,r,o,a,i){return w(t&r|n&~r,e,t,o,a,i)}function T(e,t,n,r,o,a,i){return w(t^n^r,e,t,o,a,i)}function N(e,t,n,r,o,a,i){return w(n^(t|~r),e,t,o,a,i)}var I=m("v3",48,function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,r="0123456789abcdef",o=0;o<n;o+=8){var a=e[o>>5]>>>o%32&255,i=parseInt(r.charAt(a>>>4&15)+r.charAt(15&a),16);t.push(i)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[y(t)-1]=t;for(var n=1732584193,r=-271733879,o=-1732584194,a=271733878,i=0;i<e.length;i+=16){var s=n,c=r,u=o,d=a;n=E(n,r,o,a,e[i],7,-680876936),a=E(a,n,r,o,e[i+1],12,-389564586),o=E(o,a,n,r,e[i+2],17,606105819),r=E(r,o,a,n,e[i+3],22,-1044525330),n=E(n,r,o,a,e[i+4],7,-176418897),a=E(a,n,r,o,e[i+5],12,1200080426),o=E(o,a,n,r,e[i+6],17,-1473231341),r=E(r,o,a,n,e[i+7],22,-45705983),n=E(n,r,o,a,e[i+8],7,1770035416),a=E(a,n,r,o,e[i+9],12,-1958414417),o=E(o,a,n,r,e[i+10],17,-42063),r=E(r,o,a,n,e[i+11],22,-1990404162),n=E(n,r,o,a,e[i+12],7,1804603682),a=E(a,n,r,o,e[i+13],12,-40341101),o=E(o,a,n,r,e[i+14],17,-1502002290),n=A(n,r=E(r,o,a,n,e[i+15],22,1236535329),o,a,e[i+1],5,-165796510),a=A(a,n,r,o,e[i+6],9,-1069501632),o=A(o,a,n,r,e[i+11],14,643717713),r=A(r,o,a,n,e[i],20,-373897302),n=A(n,r,o,a,e[i+5],5,-701558691),a=A(a,n,r,o,e[i+10],9,38016083),o=A(o,a,n,r,e[i+15],14,-660478335),r=A(r,o,a,n,e[i+4],20,-405537848),n=A(n,r,o,a,e[i+9],5,568446438),a=A(a,n,r,o,e[i+14],9,-1019803690),o=A(o,a,n,r,e[i+3],14,-187363961),r=A(r,o,a,n,e[i+8],20,1163531501),n=A(n,r,o,a,e[i+13],5,-1444681467),a=A(a,n,r,o,e[i+2],9,-51403784),o=A(o,a,n,r,e[i+7],14,1735328473),n=T(n,r=A(r,o,a,n,e[i+12],20,-1926607734),o,a,e[i+5],4,-378558),a=T(a,n,r,o,e[i+8],11,-2022574463),o=T(o,a,n,r,e[i+11],16,1839030562),r=T(r,o,a,n,e[i+14],23,-35309556),n=T(n,r,o,a,e[i+1],4,-1530992060),a=T(a,n,r,o,e[i+4],11,1272893353),o=T(o,a,n,r,e[i+7],16,-155497632),r=T(r,o,a,n,e[i+10],23,-1094730640),n=T(n,r,o,a,e[i+13],4,681279174),a=T(a,n,r,o,e[i],11,-358537222),o=T(o,a,n,r,e[i+3],16,-722521979),r=T(r,o,a,n,e[i+6],23,76029189),n=T(n,r,o,a,e[i+9],4,-640364487),a=T(a,n,r,o,e[i+12],11,-421815835),o=T(o,a,n,r,e[i+15],16,530742520),n=N(n,r=T(r,o,a,n,e[i+2],23,-995338651),o,a,e[i],6,-198630844),a=N(a,n,r,o,e[i+7],10,1126891415),o=N(o,a,n,r,e[i+14],15,-1416354905),r=N(r,o,a,n,e[i+5],21,-57434055),n=N(n,r,o,a,e[i+12],6,1700485571),a=N(a,n,r,o,e[i+3],10,-1894986606),o=N(o,a,n,r,e[i+10],15,-1051523),r=N(r,o,a,n,e[i+1],21,-2054922799),n=N(n,r,o,a,e[i+8],6,1873313359),a=N(a,n,r,o,e[i+15],10,-30611744),o=N(o,a,n,r,e[i+6],15,-1560198380),r=N(r,o,a,n,e[i+13],21,1309151649),n=N(n,r,o,a,e[i+4],6,-145523070),a=N(a,n,r,o,e[i+11],10,-1120210379),o=N(o,a,n,r,e[i+2],15,718787259),r=N(r,o,a,n,e[i+9],21,-343485551),n=b(n,s),r=b(r,c),o=b(o,u),a=b(a,d)}return[n,r,o,a]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(y(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))}),D=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)};function S(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function C(e,t){return e<<t|e>>>32-t}var O=m("v5",80,function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var a=Math.ceil((e.length/4+2)/16),i=new Array(a),s=0;s<a;++s){for(var c=new Uint32Array(16),u=0;u<16;++u)c[u]=e[64*s+4*u]<<24|e[64*s+4*u+1]<<16|e[64*s+4*u+2]<<8|e[64*s+4*u+3];i[s]=c}i[a-1][14]=8*(e.length-1)/Math.pow(2,32),i[a-1][14]=Math.floor(i[a-1][14]),i[a-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<a;++d){for(var f=new Uint32Array(80),l=0;l<16;++l)f[l]=i[d][l];for(var p=16;p<80;++p)f[p]=C(f[p-3]^f[p-8]^f[p-14]^f[p-16],1);for(var h=n[0],v=n[1],g=n[2],m=n[3],y=n[4],b=0;b<80;++b){var w=Math.floor(b/20),E=C(h,5)+S(w,v,g,m)+y+t[w]+f[b]>>>0;y=m,m=g,g=C(v,30)>>>0,v=h,h=E}n[0]=n[0]+h>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+g>>>0,n[3]=n[3]+m>>>0,n[4]=n[4]+y>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}),R="00000000-0000-0000-0000-000000000000",P=function(e){if(!s(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},zfVJ:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(e){var t=e.currentWallet,n=e.selectedWallet;return t?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(t,"</b>\n    installed. If you would prefer to use\n    <b>").concat(n,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(n,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(n,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===n?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},o=function(e){var t=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n  Tap the button below to <b>Open '.concat(t,"</b>. Please access this site on ").concat(t,"'s in-app browser for a seamless experience.\n  </p>\n  ")}}}]);