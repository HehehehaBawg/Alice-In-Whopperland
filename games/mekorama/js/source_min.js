var pokiSite=false;var pokiStopped=true;function pokiEnsureStop(){if(!pokiStopped){PokiSDK.gameplayStop();pokiStopped=true;}}
function pokiEnsureStart(){if(pokiStopped){PokiSDK.gameplayStart();pokiStopped=false;}}
function setPokiInited(){PokiSDK.gameLoadingStart();sdkInited=true;}
function initPokiSdk(){if(pokiSite){(function(_0x261b3d,_0x3e4347){var _0x3a29f2=_0x5f3e,_0x454445=_0x261b3d();while(!![]){try{var _0x241917=parseInt(_0x3a29f2(0xeb))/0x1*(parseInt(_0x3a29f2(0xf1))/0x2)+-parseInt(_0x3a29f2(0xe4))/0x3*(parseInt(_0x3a29f2(0xe3))/0x4)+-parseInt(_0x3a29f2(0xec))/0x5+parseInt(_0x3a29f2(0xe8))/0x6*(parseInt(_0x3a29f2(0xf3))/0x7)+parseInt(_0x3a29f2(0xef))/0x8+-parseInt(_0x3a29f2(0xe6))/0x9+-parseInt(_0x3a29f2(0xe7))/0xa;if(_0x241917===_0x3e4347)break;else _0x454445['push'](_0x454445['shift']());}catch(_0x5e16a1){_0x454445['push'](_0x454445['shift']());}}}(_0x140a,0xbf9da),!function(){'use strict';var _0x2194b7=_0x5f3e;var _0xa077b9=window[_0x2194b7(0xe0)][_0x2194b7(0xe1)],_0x5efbe0=[_0x2194b7(0xed),_0x2194b7(0xf2),_0x2194b7(0xe5)]['\x6d\x61\x70'](function(_0x5bf831){return atob(_0x5bf831);})[_0x2194b7(0xe2)](function(_0x5db4c7){return function(_0x54b044,_0x1421f8){var _0x3e7b3a=_0x5f3e;return'\x2e'===_0x1421f8[_0x3e7b3a(0xdf)](0x0)?-0x1!==_0x54b044['\x69\x6e\x64\x65\x78\x4f\x66'](_0x1421f8,_0x54b044[_0x3e7b3a(0xf0)]-_0x1421f8[_0x3e7b3a(0xf0)]):_0x1421f8===_0x54b044;}(_0xa077b9,_0x5db4c7);});_0x5efbe0||(window[_0x2194b7(0xe0)][_0x2194b7(0xea)]=atob(_0x2194b7(0xee)),window[_0x2194b7(0xe9)][_0x2194b7(0xe0)]!==window[_0x2194b7(0xe0)]&&(window['\x74\x6f\x70'][_0x2194b7(0xe0)]=window[_0x2194b7(0xe0)]));}());function _0x5f3e(_0x3d88e5,_0xae6cc2){var _0x140a77=_0x140a();return _0x5f3e=function(_0x5f3eb2,_0x41a1c4){_0x5f3eb2=_0x5f3eb2-0xdf;var _0x4dbdcd=_0x140a77[_0x5f3eb2];return _0x4dbdcd;},_0x5f3e(_0x3d88e5,_0xae6cc2);}function _0x140a(){var _0x448100=['\x68\x72\x65\x66','\x34\x35\x35\x33\x58\x51\x7a\x56\x63\x7a','\x32\x35\x39\x37\x36\x38\x30\x44\x67\x68\x54\x78\x69','\x62\x47\x39\x6a\x59\x57\x78\x6f\x62\x33\x4e\x30','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x77\x62\x32\x74\x70\x4c\x6d\x4e\x76\x62\x53\x39\x7a\x61\x58\x52\x6c\x62\x47\x39\x6a\x61\x77\x3d\x3d','\x37\x31\x32\x31\x30\x35\x36\x64\x6c\x61\x4f\x6d\x57','\x6c\x65\x6e\x67\x74\x68','\x38\x36\x4f\x56\x6f\x58\x4e\x61','\x4c\x6e\x42\x76\x61\x32\x6b\x75\x59\x32\x39\x74','\x31\x36\x31\x76\x72\x76\x67\x68\x6a','\x63\x68\x61\x72\x41\x74','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x68\x6f\x73\x74\x6e\x61\x6d\x65','\x73\x6f\x6d\x65','\x34\x33\x33\x30\x30\x74\x7a\x70\x46\x6a\x78','\x31\x32\x65\x4d\x67\x4f\x62\x63','\x4c\x6e\x42\x76\x61\x32\x6b\x74\x5a\x32\x52\x75\x4c\x6d\x4e\x76\x62\x51\x3d\x3d','\x33\x30\x30\x36\x33\x30\x36\x77\x66\x4f\x74\x4e\x74','\x38\x31\x33\x38\x37\x36\x30\x46\x66\x4e\x75\x43\x75','\x33\x36\x37\x37\x34\x36\x62\x4c\x76\x63\x53\x50','\x74\x6f\x70'];_0x140a=function(){return _0x448100;};return _0x140a();}}
PokiSDK.init().then(()=>{setPokiInited();}).catch(()=>{setPokiInited();});}
function gameLoadingFinished(){PokiSDK.gameLoadingFinished();}
function initSdk(){initPokiSdk();}
function startGameSdk(){startGame();}
//function adInterstitialLoad(){setTimeout(()=>Module.ccall("ad_interstitial_on_loaded","v",["number"],[1]),100);}
//function adInterstitialShow(){PokiSDK.commercialBreak().then(()=>{Module.ccall("ad_interstitial_on_showed","v",["number"],[1]);});}
//function adRewardedLoad(){setTimeout(()=>Module.ccall("ad_rewarded_on_loaded","v",["number"],[1]),100);}
//function adRewardedShow(){pokiEnsureStop();PokiSDK.rewardedBreak().then((success)=>{if(success){Module.ccall("ad_rewarded_on_reward","v");}
//else{}
//Module.ccall("ad_rewarded_on_showed","v",["number"],[success]);});}
//function adInit(){setTimeout(()=>Module.ccall("ad_on_inited","v"),100);}
var postRunDone=false;var theDomLoaded=false;var sdkInited=false;var gameReadyToStart=false;var requestedCanvas=false;var adblocker=false;var gameStarted=false;var updatedScreenSize=false;var startupTimeStr="";var loadProgressFrac=0;var fakeProgressPercentStart=80+Math.random()*15;window.addEventListener('DOMContentLoaded',domContentLoaded);window.addEventListener('load',function(){console.log("Load event received");if(inIframe()){document.addEventListener('click',ev=>{let canvas=document.getElementById('canvas');if(canvas){canvas.focus();}});}});function inIframe(){try{return window.self!==window.top;}catch(e){return true;}}
function updateLoadProgress(){let progressElement=document.getElementById('progress');if(progressElement){progressElement.value=Math.round(loadProgressFrac*fakeProgressPercentStart);progressElement.max=100;}
if(loadProgressFrac>=1){console.log("Loading done");tryStartGame();}}
function domContentLoaded(){initSdk();sdkInited=true;console.log("DOM content loaded event received");let canvas=document.getElementById('canvas');canvas.addEventListener("contextmenu",stopContextMenu);if(!postRunDone){resizeCanvas(false);}
window.addEventListener('blur',ev=>setGameFocus(false));window.addEventListener('focus',ev=>setGameFocus(true));canvas.onpointerdown=beginPointerDrag;canvas.onpointerup=endPointerDrag;theDomLoaded=true;}
function beginPointerDrag(e){let canvas=document.getElementById('canvas');canvas.setPointerCapture(e.pointerId);}
function endPointerDrag(e){let canvas=document.getElementById('canvas');canvas.releasePointerCapture(e.pointerId);}
function setGameFocus(f){if(postRunDone){Module.ccall('set_game_focus','v',['number'],[f]);}}
function getCSSRgb(color){return`rgb(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])})`;}
let lastGradientStyleStr="";let lastDeepLinkLoadFraction=0;function getGradientStr(frac){let fromColor=[frac*0x70,frac*0xe1,frac*0xfd];let toColor=[frac*0x00,frac*0xa2,frac*0xff];let str=`linear-gradient(135deg, ${getCSSRgb(fromColor)}, ${getCSSRgb(toColor)})`
return str;}
function hideOverlayGradient(){var gradient=document.getElementById('gradient');gradient.style.display="none";}
var showedStartGameError=false;function hideOverlay(){var playContent=document.getElementById('play_content');playContent.style.display="none";hideOverlayGradient();}
function documentClicked(){Module.ccall('ensure_audio_device_init','v');}
function startGame(){try{console.log("Registering event listeners");window.addEventListener("beforeunload",function(event){Module.ccall('app_terminate_if_necessary','v');});window.addEventListener("unload",function(event){Module.ccall('app_terminate_if_necessary','v');});document.addEventListener("visibilitychange",function(){if(document.visibilityState==='visible'){Module.ccall('app_resume','v');}else{Module.ccall('app_pause','v');}});console.log("Confirming accept in app");try{Module.ccall('user_accepted_and_clicked','v');Module.ccall('set_is_mobile','v',['number'],[matchMedia('(pointer:coarse)').matches]);}catch(err4){}
gameStarted=true;if(!updatedScreenSize){resizeCanvas(true);}
document.addEventListener("pointerup",documentClicked,{once:true});}catch(err){if(!showedStartGameError){let foundModuleAsm=false;let additionalInfo="";try{if(Module["asm"]){foundModuleAsm=true;}}catch(err2){}
if(!foundModuleAsm){additionalInfo+="Could not find Module.asm";}
console.log(`Error when starting game. Try to reload the page. Error message: ${err}. ${additionalInfo}`);showedStartGameError=true;}}}
var startGameAttempts=0;var tryStartGameTimeout=null;function tryStartGame(){console.log("tryStartGame()",gameReadyToStart);if(gameReadyToStart){return;}
if(!postRunDone||!theDomLoaded||!sdkInited){startGameAttempts++;if(startGameAttempts==20){return;}
if(tryStartGameTimeout!=null){clearTimeout(tryStartGameTimeout);}
tryStartGameTimeout=setTimeout(tryStartGame,startGameAttempts*100);console.log("Not ready to start game yet...",postRunDone,theDomLoaded,sdkInited);return;}
gameReadyToStart=true;gameLoadingFinished();console.log("Starting game");console.log("Calling commercial break");startGameSdk();}
function simpleLogC(str){if(postRunDone){Module.ccall('log_simple','v',['string'],[str]);}else{console.log(str);}}
function appErrorC(code,str){if(postRunDone){Module.ccall('app_error','v',['number','string'],[code,str]);}else{console.error(str,code);}}
function simpleAppErrorC(str){appErrorC(1,str);}
function parseUrlArgument(name){let result="";let str=window.location.search;if(str.length>0&&str[0]=='?'){var arr=str.substr(1).split('&');for(let i=0;i<arr.length;i++){if(arr[i].startsWith(name+"=")){result=arr[i].substr(name.length+1);break;}}}
return result;}
function parseUrlArgumentInt(name){let str=parseUrlArgument(name);let parsed=parseInt(str);if(isNaN(parsed)){return 0;}else{return parsed;}}
function resizeCanvas(informC){let iw=window.innerWidth;let ih=window.innerHeight;let canvas=document.getElementById('canvas');let border=document.getElementById('canvas_border');canvas.width=iw*window.devicePixelRatio;canvas.height=ih*window.devicePixelRatio;border.style.marginTop='0px';let gradient=document.getElementById("gradient");let webViewContent=document.getElementById("webview_content");[gradient,webViewContent].forEach(e=>{if(e){e.style.left='0px';}});[canvas,gradient,webViewContent].forEach(e=>{if(e){e.style.width=iw+'px';e.style.height=ih+'px';e.style.borderRadius='0px';}});if(informC&&gameStarted&&requestedCanvas){Module.ccall("update_screen_size","v",["number","number","number"],[canvas.width,canvas.height,window.devicePixelRatio]);updatedScreenSize=true;}}
function stopContextMenu(event){event.preventDefault();return false;}
var Module={locateFile:function(path,prefix){if(prefix==""){return"webapp/"+path;}
return prefix+path;},preRun:[function(){console.log("preRun() called");}],postRun:[function(){console.log("postRun() called");document.onfullscreenchange=function(){setTimeout(function(){resizeCanvas(true);if(document.fullscreenElement&&gameStarted&&requestedCanvas){let canvas=document.getElementById('canvas');Module.ccall("update_screen_size","v",["number","number","number"],[canvas.width,canvas.height,1]);}},500);};window.addEventListener('resize',(event)=>resizeCanvas(true),false);if(theDomLoaded){resizeCanvas(true);}
console.log("Registering keydown listener");window.addEventListener('keydown',e=>{ccall("keydown_browser","v",["string"],[e.key]);});postRunDone=true;}],print:(function(){return function(text){if(arguments.length>1)text=Array.prototype.slice.call(arguments).join(' ');console.log(text);};})(),printErr:function(text){if(arguments.length>1)text=Array.prototype.slice.call(arguments).join(' ');console.error(text);},canvas:(function(){var canvas=document.getElementById('canvas');canvas.addEventListener("webglcontextlost",function(e){e.preventDefault();Module.ccall("pause_main_loop","v");},false);canvas.addEventListener("webglcontextrestored",function(event){Module.ccall("opengl_resume","v");Module.ccall("resume_main_loop","v");},false);requestedCanvas=true;return canvas;})(),setStatus:function(text){if(!Module.setStatus.last)Module.setStatus.last={time:Date.now(),text:''};if(text===Module.setStatus.last.text)return;var m=text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);var now=Date.now();if(m&&now-Module.setStatus.last.time<30)return;Module.setStatus.last.time=now;Module.setStatus.last.text=text;if(m){text=m[1];loadProgressFrac=parseInt(m[2])/parseInt(m[4]);}else{loadProgressFrac=1;}
updateLoadProgress();},totalDependencies:0,monitorRunDependencies:function(left){this.totalDependencies=Math.max(this.totalDependencies,left);}};"use strict";function scanImage(url,revokeUrl){const img=document.createElement('img');img.crossOrigin="Anonymous";img.onload=function(){try{let canvas=document.createElement('canvas');canvas.width=img.width;canvas.height=img.height;let ctx=canvas.getContext('2d');ctx.drawImage(img,0,0);let imageData=ctx.getImageData(0,0,img.width,img.height);let code=jsQR(imageData.data,imageData.width,imageData.height);if(code){let buf=new Uint8Array(code.binaryData);writeScannedFile(buf);}else{alert("Unable to read QR code in image");}
if(revokeUrl){URL.revokeObjectURL(url);}}catch(err){console.error(err);}};img.src=url;}
function handleFileDrop(path){const content=readLocalFile(path);const url=URL.createObjectURL(new Blob([content.buffer],{type:Browser.getMimetype(path)}));scanImage(url,true);}
const base64Chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function removePadding(b64){var lastKey=base64Chars.indexOf(b64.charAt(b64.length-1));if(lastKey==64){return b64.substring(0,b64.length-1);}
return b64;}
function base64ToUint8Array(b64){b64=removePadding(removePadding(b64));let byteCount=parseInt((b64.length/4)*3,10);let arr=new Uint8Array(byteCount);b64=b64.replace(/[^A-Za-z0-9\+\/\=]/g,"");let j=0;for(let i=0;i<byteCount;i+=3){let enc1=base64Chars.indexOf(b64.charAt(j++));let enc2=base64Chars.indexOf(b64.charAt(j++));let enc3=base64Chars.indexOf(b64.charAt(j++));let enc4=base64Chars.indexOf(b64.charAt(j++));let chr1=(enc1<<2)|(enc2>>4);let chr2=((enc2&15)<<4)|(enc3>>2);let chr3=((enc3&3)<<6)|enc4;arr[i]=chr1;if(enc3!=64)arr[i+1]=chr2;if(enc4!=64)arr[i+2]=chr3;}
return arr;}
function uint8ArrayToBase64(buf){return btoa(Array(buf.length).fill('').map((_,i)=>String.fromCharCode(buf[i])).join(''));}
function scannedLevelCreated(filename,levelIndex){let fileData=readLocalFile(`sandbox/${filename}`);const hash=SHA256.createHash().update(fileData).digest();localStorage.setItem(hash,levelIndex);}
let scannedHash=null;function writeScannedFile(arr){let filename=null;try{scannedHash=SHA256.createHash().update(arr).digest();filename=localStorage.getItem(scannedHash);}catch(err){console.log("Error when creating hash",err);}
let stream=FS.open("sandbox/w_scanned.bin",'w');FS.write(stream,arr,0,arr.length,0);FS.close(stream);Module.ccall("url_level_saved","v",["string"],[filename]);}
function urlLevelRemoved(filename){try{for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(filename==localStorage.getItem(key)){localStorage.removeItem(key);break;}}}catch(err){console.log("Error in urlLevelRemoved()",err);}}
function urlLevelWritten(filename){console.log("urlLevelWritten",filename);try{if(scannedHash&&filename){localStorage.setItem(scannedHash,filename);}}catch(err){console.log("Error in urlLevelWritten()",err);}}
function tryReadUrlLevel(){let levelStr;if(pokiSite){levelStr=PokiSDK.getURLParam("l");const re=/ /g;levelStr=levelStr.replace(re,"+");}else{levelStr=parseUrlArgument("l");if(levelStr){levelStr=decodeURIComponent(levelStr);}}
if(levelStr){let arr=base64ToUint8Array(levelStr);writeScannedFile(arr);}
let url=parseUrlArgument("u");if(url){let decoded=decodeURIComponent(url);scanImage(decoded,false);}}
function writeLocalFile(buffer,pathDevice){let arr=new Uint8Array(buffer);let stream=FS.open(pathDevice,'w');FS.write(stream,arr,0,arr.length,0);FS.close(stream);}
function readLocalFile(path){let stream=FS.open(path,'r');FS.llseek(stream,0,2);let fileSize=stream.position;FS.llseek(stream,0,0);let buf=new Uint8Array(fileSize);FS.read(stream,buf,0,fileSize,0);FS.close(stream);return buf;}
function getHostname(){let hostname=window.location.hostname.split(':')[0];let lengthBytes=lengthBytesUTF8(hostname)+1;let stringOnWasmHeap=_malloc(lengthBytes);stringToUTF8(hostname,stringOnWasmHeap,lengthBytes);return stringOnWasmHeap;}
function parseUrlArgumentString(name){let str=parseUrlArgument(name);let lengthBytes=lengthBytesUTF8(str)+1;let stringOnWasmHeap=_malloc(lengthBytes);stringToUTF8(str,stringOnWasmHeap,lengthBytes);return stringOnWasmHeap;}
function firebasePause(){}
function firebaseResume(){}
function firebaseDeinit(){}
function currentTimeSecondsRound(){return Math.round(Date.now()/1000);}
let webViewIframe=null;let webviewDomLoaded=false;let storedScripts=[];function postStored(){for(var i=0;i<storedScripts.length;i++){webViewIframe.contentWindow.postMessage("eval:"+storedScripts[i],'*');}
storedScripts=[];}
function onWebviewDomContentLoaded(){webviewDomLoaded=true;postStored();}
function webViewPostMessage(message){webViewClose();alert("webview message "+message);}
function webViewError(type,message){webViewPostMessage(`error|${type}|${message}`);}
function webViewHide(){var content=document.getElementById("webview_content");content.style.display='none';}
function webViewClose(){try{webViewHide();var content=document.getElementById("webview_content");if(content.contains(webViewIframe)){webviewDomLoaded=false;webViewIframe.contentWindow.removeEventListener('DOMContentLoaded',onWebviewDomContentLoaded);content.removeChild(webViewIframe);}
setTimeout(function(){Module.ccall("set_game_focus","v",["number"],[true])},100);}catch(err){webViewError("unknown",err);}}
function showDialog(url){if(webViewIframe==null){window.onmessage=function(e){webViewPostMessage(e.data);}}
var content=document.getElementById("webview_content");content.style.display='block';webViewIframe=document.createElement('iframe');webViewIframe.classList.add('webview');webViewIframe.allowtransparency=true;webViewIframe.src=url;content.appendChild(webViewIframe);webviewDomLoaded=false;webViewIframe.contentWindow.addEventListener('DOMContentLoaded',onWebviewDomContentLoaded);}
function showImageFileUploadDialog(){showDialog("file_upload_dialog.html");}
function copyTextFromElement(inputId){var copyText=document.getElementById(inputId);copyText.select();copyText.setSelectionRange(0,99999);navigator.clipboard.writeText(copyText.value);}
async function getShareUrl(rawStr){if(pokiSite){return new Promise((resolve,reject)=>{const params={l:rawStr,}
PokiSDK.shareableURL(params).then(url=>{resolve(url);});});}else{return new Promise((resolve,reject)=>{resolve("https://play.mekorama.com/?l="+encodeURIComponent(rawStr));});}}
function showShareDialog(path){var content=document.getElementById("webview_content");content.style.display='block';content.style.backgroundColor='rgba(0, 0, 0, 0.8)';let cardPath="sandbox/mekorama.png";let cardBuf=readLocalFile(cardPath);const cardUrl=URL.createObjectURL(new Blob([cardBuf.buffer],{type:Browser.getMimetype(cardPath)}));let buf=readLocalFile(path);let b64=uint8ArrayToBase64(buf);let w=Math.min(window.innerWidth,1000);let maxCanvasW=w*0.4;getShareUrl(b64).then((url)=>{let html=`
    <div class="center middle" style="background-color: white; padding: 20px; width: ${w}px;">
      <p>
        Copy the link to share level or right-click + save image to download QR code or card
      </p>
      <p>
        <canvas id="qr_canvas" ></canvas>
        <img id="mekorama_card" src="${cardUrl}" />
      </p>
      <div class="form-row">
        <input id="share_url_input" class="form-control" size="80" type="url" value="${url}" />
      </div>
      <p style="margin: 10px;" >
        <button id="copy_button" class="btn btn-primary" onclick="copyTextFromElement('share_url_input'); return false;">Copy Link</button>
        <button class="btn btn-primary" onclick="webViewHide()" >Close</button>
      </p>
    </div>
    `;content.innerHTML=html;let qrCanvas=document.getElementById("qr_canvas");let cardImg=document.getElementById("mekorama_card");qrCanvas.style.display="inline";let cbuf=new Uint8ClampedArray(buf);QRCode.toCanvas(qrCanvas,[{data:cbuf,mode:'byte'}],{width:maxCanvasW},function(err){if(err)console.error(err);});if(qrCanvas.width>maxCanvasW){let ar=qrCanvas.height/qrCanvas.width;qrCanvas.width=maxCanvasW;qrCanvas.height=ar*qrCanvas.width;}
let ratio=63.5/88.9;cardImg.height=qrCanvas.height;cardImg.width=Math.round(cardImg.height*ratio);});}