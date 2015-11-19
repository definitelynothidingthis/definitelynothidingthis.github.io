$(document).ready(function(){"use strict";function e(e,t,n){$("section.community").append("<div class='repo'><div class='repoTitle'><h4>"+e+"</h4></div><div class='repoDescription'><p>"+t+"</p></div><div class='repoButton'><a href="+n+" target='_blank'><button class='outline'>View on Github</button></a></div></div>")}function t(){$(".craneLineInner").velocity({translateY:[0,"-85%"]},{queue:!1,duration:600,easing:[.4,0,.2,1],complete:function(){$(".cranePivot").velocity({translateX:["646%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1]}),$(".craneLine").velocity({translateY:["-31.5%",0],translateX:["76%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1],complete:function(){$(".craneLineInner").velocity({translateY:["-40%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1]});for(var e=$(".apps rect"),t=$(".apps path"),n=0;n<t.length;n++)t.eq(n).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:[0,"90deg"]},{queue:!1,duration:600,delay:100*n+400,easing:[.175,.885,.32,1.275]});for(var o=0;o<e.length;o++)e.eq(o).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:0},{queue:!1,duration:600,delay:100*o+100*n+400,easing:[.175,.885,.32,1.275]});$(".phone1Screen").velocity({fill:"#EF3F61"},{queue:!1,duration:600,easing:[.4,0,.2,1]})}})}});var e=-105;600>m&&(e=-170),$(".middleLineOneInner").velocity({translateY:[0,"-105%"]},{queue:!1,duration:1200,delay:800,easing:[300,28],complete:function(){$(".pushOne").velocity({rotateZ:["12deg","0deg"]},{queue:!1,duration:300,easing:[.4,0,.2,1]}),$(".middleLineOne").velocity({translateY:["-100%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1],complete:function(){$(".middleLine2").velocity({translateY:[0,"-105%"]},{queue:!1,duration:1e3,delay:200,easing:[300,28],complete:function(){$(".middleLine2Inner").velocity({translateY:[e+"%",0]},{queue:!1,duration:1e3,delay:200,easing:[300,28]}),$(".phone2Color").velocity({scale:[1,0]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone2Screen").velocity({fill:"#4BBC6E"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".push2 path").velocity({fill:"#40a05b"},{queue:!1,duration:200,easing:[.4,0,.2,1]})}})}})}}),$(".hoist").velocity({translateX:[0,"100%"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1],complete:function(){$(".phone3Color").velocity({scale:["1","0"]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone3Screen").velocity({fill:"#555574"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".analytics path").velocity({fill:"#3A3A59"},{queue:!1,duration:200,easing:[.4,0,.2,1]}),$(".hoistLineInner").velocity({translateY:["-65%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1]})},begin:function(){$(".hoistWheels g").velocity({rotateZ:["-720deg","0deg"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1]})}})}function n(){var e=$(window).scrollTop();if(k===e)return!1;k=e;var t=$(".header").height();e>=0&&y>=e&&m>960&&($(".heroText").css({transform:"translateY(-"+e/1.6+"px)",opacity:1-e/t}),$(".skyline").css({transform:"translateY("+.135*e+"px)"}))}var o=0,i=0,a=0;if(gitJson)for(var s=0;s<gitJson.length;s++){var r=gitJson[s].name,l=r.toLowerCase(),d=gitJson[s].git_url,u=gitJson[s].description,c=parseInt(gitJson[s].stargazers_count),p=parseInt(gitJson[s].forks_count),g=gitJson[s].language,v=gitJson[s]["private"];v!==!0&&(a++,o+=c,i+=p,r=r.replace(/-/g," "),l.indexOf("sdk")>=0?(console.log(l),r.indexOf("ios")>=0?($(".iosRepo .sdkRepoStar").text(c),$(".iosRepo .sdkRepoFork").text(p)):r.indexOf("android")>=0?($(".androidRepo .sdkRepoStar").text(c),$(".androidRepo .sdkRepoFork").text(p)):r.indexOf("javascript")>=0?($(".javascriptRepo .sdkRepoStar").text(c),$(".javascriptRepo .sdkRepoFork").text(p)):r.indexOf("php")>=0?($(".phpRepo .sdkRepoStar").text(c),$(".phpRepo .sdkRepoFork").text(p)):r.indexOf("xamarin")>=0?($(".xamarinRepo .sdkRepoStar").text(c),$(".xamarinRepo .sdkRepoFork").text(p)):r.indexOf("arduino")>=0&&($(".arduinoRepo .sdkRepoStar").text(c),$(".arduinoRepo .sdkRepoFork").text(p),console.log("stars: "+c+" forks: "+p))):l.indexOf("tutorial")>=0||l.indexOf("any")>=0||l.indexOf("demo")>=0||l.indexOf("todo")>=0?$("section.sampleApps").append('<div class="repo"><div class="repoTitle"><h4>'+r+'</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">'+c+'</span><span><img src="img/forksDark.svg" alt="" class="icon">'+p+"</span><span>"+g+'</span></p></div><div class="repoDescription"><p>'+u+'</p></div><div class="repoButton"><a href="'+d+'" target="_blank"><button class="outline">View on Github</button></a></div></div>'):$("section.other").append('<div class="repo"><div class="repoTitle"><h4>'+r+'</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">'+c+'</span><span><img src="img/forksDark.svg" alt="" class="icon">'+p+"</span><span>"+g+'</span></p></div><div class="repoDescription"><p>'+u+'</p></div><div class="repoButton"><a href="'+d+'" target="_blank"><button class="outline">View on Github</button></a></div></div>'))}$(".heroText .repoCount").text(a),$(".heroText .starCount").text(o),$(".heroText .forkCount").text(i);var f=Parse.Object.extend("communityRepos"),h=new Parse.Query(f);h.ascending("repoName"),h.find({success:function(t){for(var n=0;n<t.length;n++){var o=t[n],i=o.get("repoName"),a=o.get("repoDescription"),s=o.get("repoUrl");e(i,a,s)}},error:function(e){console.log("Error: "+e.code+" "+e.message)}});var y=$(window).height(),m=$(window).width();$(window).resize(function(){y=$(window).height(),m=$(window).width()}),t();var x=0,k;$(window).on("mousewheel",function(){n(),x=1,clearTimeout($.data(this,"timer")),$.data(this,"timer",setTimeout(function(){x=0},100))}).scroll(function(){return 1===x?!1:void n()})});