$(document).ready(function(){"use strict";function e(e,t,n){$("section.community").append("<div class='repo'><div class='repoTitle'><h4>"+e+"</h4></div><div class='repoDescription'><p>"+t+"</p></div><div class='repoButton'><a href="+n+" target='_blank'><button class='outline'>View on Github</button></a></div></div>")}function t(){var e=52e3;$(".foregroundContainer").velocity({translateX:"-150%"},{queue:!1,duration:e,easing:"linear"}),$(".skyline").velocity({translateX:-($(".skyline").width()-m)},{queue:!1,duration:3*e,easing:"linear"}),$(".transport").velocity({translateX:["180%","50%"]},{queue:!1,duration:e,easing:"linear",begin:function(){$(".transportWheels .wheel").velocity({rotateZ:"1242deg"},{queue:!1,duration:e,easing:"linear"})}}),$(".loadInner line, .loadInner circle, .videoLoad").velocity({translateX:[0,"12vh"],translateY:[0,"-12vh"]},{queue:!1,duration:3200,delay:800,easing:[.4,0,.2,1],begin:function(){$(".craneInner .anchor").velocity({translateX:[0,"12vh"]},{queue:!1,duration:3200,easing:[.4,0,.2,1]})},complete:function(){$(".loadInner line, .loadInner circle").velocity({translateY:["-12vh",0]},{queue:!1,duration:4800,easing:[.4,0,.2,1]});for(var e=$(".cranePhoneContent path"),t=0;t<e.length;t++)e.eq(t).velocity({scale:[1,.6],opacity:1},{queue:!1,duration:3200,delay:200*t,easing:[.23,1,.32,1]})}}),$(".laptopHook, .laptopData").velocity({translateY:[0,"-100%"],translateX:["20%","20%"]},{queue:!1,duration:3200,delay:e/3,easing:[.4,0,.2,1],complete:function(){$(".laptopHook").velocity({translateY:["-100%",0],translateX:["20%","20%"]},{queue:!1,duration:3200,easing:[.4,0,.2,1]}),$(".laptopData g").velocity({scale:.4,opacity:0},{queue:!1,duration:1200,delay:400,easing:[.175,.885,.32,1.275]}),$(".laptopContent").velocity({translateY:[0,"100%"]},{queue:!1,duration:1200,delay:1200,easing:[.4,0,.2,1]}),$(".browserChrome").velocity({translateY:[0,"-100%"]},{queue:!1,duration:1200,delay:1200,easing:[.4,0,.2,1]})}}),$(".tanker").velocity({translateX:["750%","520%"]},{queue:!1,duration:e,delay:e/1.2,easing:"linear",begin:function(){$(".tanker .wheel").velocity({rotateZ:"1242deg"},{queue:!1,duration:e,easing:"linear"})}})}function n(){var e=$(window).scrollTop();if(k===e)return!1;k=e;var t=$(".header").height();e>=0&&t>=e&&$(".heroText").css({transform:"translateY(-"+e/1.5+"px)",opacity:1-e/t})}var a=0,i=0,o=0;if(gitJson)for(var r=0;r<gitJson.length;r++){var s=gitJson[r].name,l=s.toLowerCase(),c=gitJson[r].git_url,u=gitJson[r].description,d=parseInt(gitJson[r].stargazers_count),p=parseInt(gitJson[r].forks_count),g=gitJson[r].language,v=gitJson[r]["private"];v!==!0&&(o++,a+=d,i+=p,s=s.replace(/-/g," "),l.indexOf("sdk")>=0||(l.indexOf("tutorial")>=0||l.indexOf("any")>=0||l.indexOf("demo")>=0||l.indexOf("todo")>=0?$("section.sampleApps").append('<div class="repo"><div class="repoTitle"><h4>'+s+'</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">'+d+'</span><span><img src="img/forksDark.svg" alt="" class="icon">'+p+"</span><span>"+g+'</span></p></div><div class="repoDescription"><p>'+u+'</p></div><div class="repoButton"><a href="'+c+'" target="_blank"><button class="outline">View on Github</button></a></div></div>'):$("section.other").append('<div class="repo"><div class="repoTitle"><h4>'+s+'</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">'+d+'</span><span><img src="img/forksDark.svg" alt="" class="icon">'+p+"</span><span>"+g+'</span></p></div><div class="repoDescription"><p>'+u+'</p></div><div class="repoButton"><a href="'+c+'" target="_blank"><button class="outline">View on Github</button></a></div></div>')))}$(".heroText .repoCount").text(o),$(".heroText .starCount").text(a),$(".heroText .forkCount").text(i);var h=Parse.Object.extend("communityRepos"),f=new Parse.Query(h);f.ascending("repoName"),f.find({success:function(t){for(var n=0;n<t.length;n++){var a=t[n],i=a.get("repoName"),o=a.get("repoDescription"),r=a.get("repoUrl");e(i,o,r)}},error:function(e){console.log("Error: "+e.code+" "+e.message)}});var y=$(window).height(),m=$(window).width();$(window).resize(function(){y=$(window).height(),m=$(window).width()}),t();var w=0,k;$(window).on("mousewheel",function(){n(),w=1,clearTimeout($.data(this,"timer")),$.data(this,"timer",setTimeout(function(){w=0},100))}).scroll(function(){return 1===w?!1:void n()})});