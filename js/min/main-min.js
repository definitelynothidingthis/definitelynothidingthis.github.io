Parse.initialize("vc59bNX5cbtFv4Upaz4y31IJ6zOH5uKqJbRqoSgy","jbMROx6VuQ6wVWRur29gYcQ7o3ucD4VYdh7DoFHj"),$(document).ready(function(){"use strict";function e(e,t,o,n,i,a,s){e.append("<tr class='repoList'><a href='"+t+"' target='_blank'><td><h4>"+o+"</h4><p class='repoDescription'>"+n+"</p></td><td class='repoInfo'><td>"+s+"</td><td><img src='img/starsDark.svg' alt='' class='icon'>"+a+"</td><td><img src='img/forksDark.svg' alt='' class='icon'>"+i+"</td></td></a></tr>")}function t(e,t,o){$("section.community").append("<div class='repo'><div class='repoTitle'><h4>"+e+"</h4></div><div class='repoDescription'><p>"+t+"</p></div><div class='repoButton'><a href="+o+" target='_blank'><button class='outline'>View on GitHub</button></a></div></div>")}function o(){function e(){var e=1;R>=1480?(e=.75,$(".wheelsContainer, .hoist, .hoistParts").velocity({scale:[e,e]},{queue:!1,duration:0})):$(".wheelsContainer, .hoist, .hoistParts").velocity({scale:[e,e]},{queue:!1,duration:0})}$(".craneLine").velocity({translateY:[0,"-25%"]},{queue:!1,duration:600,easing:[.4,0,.2,1],complete:function(){$(".craneLine").velocity({translateX:["13%",0],translateY:["-14.8%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1]}),$(".cranePivot").velocity({translateX:["13%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1]}),$(".craneVideo").velocity({translateY:["-14.8%",0],translateX:["13.4%",0]},{queue:!1,duration:600,delay:200,easing:[.4,0,.2,1],complete:function(){$(".craneLine").velocity({translateY:["-30%","-14.8%"]},{queue:!1,duration:800,easing:[.4,0,.2,1]});for(var e=$(".appRect"),t=$(".appSquare"),o=0;o<t.length;o++)t.eq(o).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:[0,"90deg"]},{queue:!1,duration:600,delay:100*o+400,easing:[.175,.885,.32,1.275]});for(var n=0;n<e.length;n++)e.eq(n).velocity({opacity:1,scale:[1,.45],translateY:0,rotateZ:0},{queue:!1,duration:600,delay:100*n+100*o+400,easing:[.175,.885,.32,1.275]});$(".phone1ScreenContainer").velocity({backgroundColor:"#EF3F61"},{queue:!1,duration:600,easing:[.4,0,.2,1]})}})}});var t="-"+$(".middleLineOne").height()/$(".pushOne").height()*100+"%";$(".middleLineOne").velocity({translateY:[0,"-105%"]},{queue:!1,duration:1200,delay:800,easing:[300,28],complete:function(){$(".pushOne").velocity({translateY:[t,0]},{queue:!1,duration:800,easing:[.4,0,.2,1]}).velocity({rotateZ:["12deg","0deg"]},{queue:!1,duration:300,easing:[.4,0,.2,1]}),$(".middleLineOne").velocity({translateY:["-100%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1],complete:function(){$(".middleLine2, .push2").velocity({y:[0,"-125%"]},{queue:!1,duration:1e3,delay:200,easing:[300,28],complete:function(){$(".middleLine2").velocity({y:["-125%",0]},{queue:!1,duration:1e3,delay:200,easing:[300,28]}),$(".phone2Screen .phoneCircle").velocity({scale:[1,0]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone2Screen").velocity({backgroundColor:"#4BBC6E"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".push2 path").velocity({fill:"#40a05b"},{queue:!1,duration:200,easing:[.4,0,.2,1]})}})}})}}),$(window).resize(function(){e()}),e(),$(".wheelsContainer").velocity({translateX:[0,"100%"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1]}),$(".hoist, .hoistParts").velocity({translateX:[0,"100%"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1],complete:function(){$(".phone3Screen .phoneCircle").velocity({scale:[1,0]},{queue:!1,duration:350,easing:[.25,.46,.45,.94]}),$(".phone3Screen").velocity({backgroundColor:"#555574"},{queue:!1,duration:150,delay:200,easing:[.4,0,.2,1]}),$(".analytics path").velocity({fill:"#3A3A59"},{queue:!1,duration:200,easing:[.4,0,.2,1]}),$(".hoistLineInner").velocity({y:["-22%",0]},{queue:!1,duration:800,easing:[.4,0,.2,1]})},begin:function(){$(".hoistWheel").velocity({rotateZ:["-=720deg"]},{queue:!1,duration:4400,easing:[.39,.575,.565,1]})}})}function n(){var e=$(window).scrollTop();if(q===e)return!1;q=e;var t=$(".header").height();e>=0&&k>=e&&R>960&&($(".heroText").css({transform:"translateY(-"+e/1.6+"px)",opacity:1-e/t}),$(".skyline").css({transform:"translateY("+.135*e+"px)"}));var o=$(".secondaryNav");e>=$(".header").height()?o.addClass("shown"):o.removeClass("shown");for(var n=$("section"),i=0;i<n.length;i++){var a=n.eq(i).offset().top,s=n.eq(i).height();e>a-64&&a+s-64>e&&w===!1&&($(".secondaryNav ul a").removeClass("active"),$(".secondaryNav ul a").eq(i).addClass("active"))}}var i=0,a=0,s=0;if("undefined"!=typeof gitJson)for(var r=0;r<gitJson.length;r++){var d=gitJson[r].name,c=d.toLowerCase(),l=gitJson[r].html_url,u=gitJson[r].has_issues,p=gitJson[r].description,h=parseInt(gitJson[r].stargazers_count),g=parseInt(gitJson[r].forks_count),v=gitJson[r].language,y=gitJson[r]["private"];y!==!0&&(s++,i+=h,a+=g,c.indexOf("sdk")>=0||c.indexOf("cli")>=0?c.includes("ios")===!0?($(".iosRepo .sdkRepoStar").text(h),$(".iosRepo .sdkRepoFork").text(g)):c.includes("android")===!0?($(".androidRepo .sdkRepoStar").text(h),$(".androidRepo .sdkRepoFork").text(g)):c.includes("javascript")===!0||c.includes("js")===!0?($(".javascriptRepo .sdkRepoStar").text(h),$(".javascriptRepo .sdkRepoFork").text(g)):c.includes("php")===!0?($(".phpRepo .sdkRepoStar").text(h),$(".phpRepo .sdkRepoFork").text(g)):c.includes("net")===!0?($(".xamarinRepo .sdkRepoStar").text(h),$(".xamarinRepo .sdkRepoFork").text(g),$(".unityRepo .sdkRepoStar").text(h),$(".unityRepo .sdkRepoFork").text(g)):c.includes("arduino")===!0?($(".arduinoRepo .sdkRepoStar").text(h),$(".arduinoRepo .sdkRepoFork").text(g)):c.includes("embedded")===!0?($(".embeddedRepo .sdkRepoStar").text(h),$(".embeddedRepo .sdkRepoFork").text(g)):c.includes("cli")===!0&&($(".cloudCodeRepo .sdkRepoStar").text(h),$(".cloudCodeRepo .sdkRepoFork").text(g)):u!==!1&&(c.includes("facebook")===!0||c.includes("twitter")===!0?e($("section.socialRepos table"),l,d,p,g,h,v):c.includes("tutorial")===!0?e($("section.tutorials table"),l,d,p,g,h,v):c.includes("todo")===!0||c.includes("demo")===!0||c.includes("any")===!0||c.includes("scrumptious")===!0||c.includes("store")===!0||c.includes("f8")===!0||c.includes("internetcar")===!0?e($("section.sampleApps table"),l,d,p,g,h,v):e($("section.other table"),l,d,p,g,h,v)))}$(".heroText .repoCount").text(s),$(".heroText .starCount").text(i),$(".heroText .forkCount").text(a);var f=Parse.Object.extend("communityRepos"),m=new Parse.Query(f);m.ascending("repoName"),m.find({success:function(e){for(var o=0;o<e.length;o++){var n=e[o],i=n.get("repoName"),a=n.get("repoDescription"),s=n.get("repoUrl");t(i,a,s)}},error:function(e){console.log("Error: "+e.code+" "+e.message)}}),$(".expandableRepoLink").click(function(){var e=$(this);$(".expandableRepoLink").not(e).removeClass("expanded"),e.toggleClass("expanded")});var k=$(window).height(),R=$(window).width();$(window).resize(function(){k=$(window).height(),R=$(window).width()}),$(window).load(function(){o()});var x=0,q,w=!1;$(window).on("mousewheel",function(){n(),x=1,clearTimeout($.data(this,"timer")),$.data(this,"timer",setTimeout(function(){x=0},100))}).scroll(function(){return 1===x?!1:void n()}),$("a[href*=#]:not([href=#])").click(function(){var e=$(this),t=e.attr("href");location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname&&$(t).velocity("scroll",{duration:600,easing:[.4,0,.2,1],begin:function(){$(".secondaryNav ul a").removeClass("active"),e.addClass("active"),w=!0},complete:function(){w=!1}})})});