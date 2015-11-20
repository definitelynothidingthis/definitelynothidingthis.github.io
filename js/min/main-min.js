$(document).ready(function(){"use strict";function e(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,function(e){return e.toUpperCase()})}function t(e,t,n){$("section.community").append("<div class='repo'><div class='repoTitle'><h4>"+e+"</h4></div><div class='repoDescription'><p>"+t+"</p></div><div class='repoButton'><a href="+n+" target='_blank'><button class='outline'>View on Github</button></a></div></div>")}function n(){$(".craneLineInner").velocity({translateY:[0,"-85%"]},{queue:!1,duration:600,easing:[.4,0,.2,1],complete:function(){$(".cranePivot").velocity({translateX:["646%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1]}),$(".craneLine").velocity({translateY:["-31.5%",0],translateX:["76%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1],complete:function(){$(".craneLineInner").velocity({translateY:["-40%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1]});for(var e=$(".apps rect"),t=$(".apps path"),n=0;n<t.length;n++)t.eq(n).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:[0,"90deg"]},{queue:!1,duration:600,delay:100*n+400,easing:[.175,.885,.32,1.275]});for(var i=0;i<e.length;i++)e.eq(i).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:0},{queue:!1,duration:600,delay:100*i+100*n+400,easing:[.175,.885,.32,1.275]});$(".phone1Screen").velocity({fill:"#EF3F61"},{queue:!1,duration:600,easing:[.4,0,.2,1]})}})}});var e=-105;600>y&&(e=-170),$(".middleLineOneInner").velocity({translateY:[0,"-105%"]},{queue:!1,duration:1200,delay:800,easing:[300,28],complete:function(){$(".pushOne").velocity({rotateZ:["12deg","0deg"]},{queue:!1,duration:300,easing:[.4,0,.2,1]}),$(".middleLineOne").velocity({translateY:["-100%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1],complete:function(){$(".middleLine2").velocity({translateY:[0,"-105%"]},{queue:!1,duration:1e3,delay:200,easing:[300,28],complete:function(){$(".middleLine2Inner").velocity({translateY:[e+"%",0]},{queue:!1,duration:1e3,delay:200,easing:[300,28]}),$(".phone2Color").velocity({scale:[1,0]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone2Screen").velocity({fill:"#4BBC6E"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".push2 path").velocity({fill:"#40a05b"},{queue:!1,duration:200,easing:[.4,0,.2,1]})}})}})}}),$(".hoist").velocity({translateX:[0,"100%"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1],complete:function(){$(".phone3Color").velocity({scale:["1","0"]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone3Screen").velocity({fill:"#555574"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".analytics path").velocity({fill:"#3A3A59"},{queue:!1,duration:200,easing:[.4,0,.2,1]}),$(".hoistLineInner").velocity({translateY:["-65%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1]})},begin:function(){$(".hoistWheels g").velocity({rotateZ:["-720deg","0deg"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1]})}})}function i(){var e=$(window).scrollTop();if(b===e)return!1;b=e;var t=$(".header").height();e>=0&&k>=e&&y>960&&($(".heroText").css({transform:"translateY(-"+e/1.6+"px)",opacity:1-e/t}),$(".skyline").css({transform:"translateY("+.135*e+"px)"}))}var a=0,o=0,s=0;if(gitJson)for(var r=0;r<gitJson.length;r++){var l=gitJson[r].name,c=l.toLowerCase(),p=gitJson[r].git_url,d=gitJson[r].description,u=parseInt(gitJson[r].stargazers_count),v=parseInt(gitJson[r].forks_count),g=gitJson[r].language,h=gitJson[r]["private"];h!==!0&&(s++,a+=u,o+=v,l=l.replace(/-/g," "),l=e(l),c.indexOf("sdk")>=0?(console.log(c),c.includes("ios")===!0?($(".iosRepo .sdkRepoStar").text(u),$(".iosRepo .sdkRepoFork").text(v)):c.includes("android")===!0?($(".androidRepo .sdkRepoStar").text(u),$(".androidRepo .sdkRepoFork").text(v)):c.includes("java")===!0?($(".javascriptRepo .sdkRepoStar").text(u),$(".javascriptRepo .sdkRepoFork").text(v),console.log("javascript")):c.includes("php")===!0?($(".phpRepo .sdkRepoStar").text(u),$(".phpRepo .sdkRepoFork").text(v)):c.includes("net")===!0?($(".xamarinRepo .sdkRepoStar").text(u),$(".xamarinRepo .sdkRepoFork").text(v),console.log(".net")):c.includes("arduino")===!0?($(".arduinoRepo .sdkRepoStar").text(u),$(".arduinoRepo .sdkRepoFork").text(v)):c.includes("embedded")===!0&&($(".embeddedRepo .sdkRepoStar").text(u),$(".embeddedRepo .sdkRepoFork").text(v))):c.includes("facebook")===!0||c.includes("twitter")===!0?$("section.socialRepos").append('<div class="repo"><div class="repoTitle"><h4>'+l+'</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">'+u+'</span><span><img src="img/forksDark.svg" alt="" class="icon">'+v+"</span><span>"+g+'</span></p></div><div class="repoDescription"><p>'+d+'</p></div><div class="repoButton"><a href="'+p+'" target="_blank"><button class="outline">View on Github</button></a></div></div>'):c.includes("tutorial")===!0?$("section.tutorials").append('<div class="repo"><div class="repoTitle"><h4>'+l+'</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">'+u+'</span><span><img src="img/forksDark.svg" alt="" class="icon">'+v+"</span><span>"+g+'</span></p></div><div class="repoDescription"><p>'+d+'</p></div><div class="repoButton"><a href="'+p+'" target="_blank"><button class="outline">View on Github</button></a></div></div>'):c.includes("todo")===!0||c.includes("demo")===!0||c.includes("any")===!0||c.includes("scrumptious")===!0||c.includes("store")===!0||c.includes("f8")===!0||c.includes("internetcar")===!0?$("section.sampleApps").append('<div class="repo"><div class="repoTitle"><h4>'+l+'</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">'+u+'</span><span><img src="img/forksDark.svg" alt="" class="icon">'+v+"</span><span>"+g+'</span></p></div><div class="repoDescription"><p>'+d+'</p></div><div class="repoButton"><a href="'+p+'" target="_blank"><button class="outline">View on Github</button></a></div></div>'):$("section.other").append('<div class="repo"><div class="repoTitle"><h4>'+l+'</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">'+u+'</span><span><img src="img/forksDark.svg" alt="" class="icon">'+v+"</span><span>"+g+'</span></p></div><div class="repoDescription"><p>'+d+'</p></div><div class="repoButton"><a href="'+p+'" target="_blank"><button class="outline">View on Github</button></a></div></div>'))}$(".heroText .repoCount").text(s),$(".heroText .starCount").text(a),$(".heroText .forkCount").text(o);var m=Parse.Object.extend("communityRepos"),f=new Parse.Query(m);f.ascending("repoName"),f.find({success:function(e){for(var n=0;n<e.length;n++){var i=e[n],a=i.get("repoName"),o=i.get("repoDescription"),s=i.get("repoUrl");t(a,o,s)}},error:function(e){console.log("Error: "+e.code+" "+e.message)}});var k=$(window).height(),y=$(window).width();$(window).resize(function(){k=$(window).height(),y=$(window).width()}),n();var R=0,b;$(window).on("mousewheel",function(){i(),R=1,clearTimeout($.data(this,"timer")),$.data(this,"timer",setTimeout(function(){R=0},100))}).scroll(function(){return 1===R?!1:void i()})});