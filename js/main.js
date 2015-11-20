/* global Parse */
/* global console */
/* global gitJson */
$(document).ready(function(){
	"use strict";
	   //====================================//
	  //  Use Jekyll Metadata to list the repos 
	 // (except for community repos)
	//====================================//
	var totalStars = 0,
		totalForks = 0,
		totalRepos = 0;

	function unCamelCase(str){
    	return str
        	// insert a space between lower & upper
        	.replace(/([a-z])([A-Z])/g, '$1 $2')
        	// space before last upper in a sequence followed by lower
        	.replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        	// uppercase the first character
        	.replace(/^./, function(str){ return str.toUpperCase(); });
	}

	if (gitJson){
		for (var j = 0; j < gitJson.length; j++) {
			var title 		= gitJson[j].name,
				sortTitle 	= title.toLowerCase(),
				url 		= gitJson[j].git_url,
				description = gitJson[j].description,
				stars 		= parseInt(gitJson[j].stargazers_count),
				forks 		= parseInt(gitJson[j].forks_count),
				language    = gitJson[j].language,
				privateRepo = gitJson[j].private;

			//ignore private repos
			if (privateRepo === true){
				continue;
			}

			//keep tally of total forks, stars and repos
			totalRepos++;
			totalStars = totalStars + stars;
			totalForks = totalForks + forks;
				
			//replace dashes with spaces
			title = title.replace(/-/g, ' ');

			//make camelcase into spaces
			title = unCamelCase(title);
			console.log(unCamelCase(title));
			//***should also ignore iOS, github and OAuth

			//if title contains sdk hide it (since we hardcode them)
			if (sortTitle.includes("sdk") === true) {
				//if title matches hardcoded repo title then use these forks/stars
				if (sortTitle.includes("ios") === true){
					$(".iosRepo .sdkRepoStar").text(stars);
					$(".iosRepo .sdkRepoFork").text(forks);
				} else if (sortTitle.includes("android") === true){
					$(".androidRepo .sdkRepoStar").text(stars);
					$(".androidRepo .sdkRepoFork").text(forks);
				} else if (sortTitle.includes("javascript") === true){
					$(".javascriptRepo .sdkRepoStar").text(stars);
					$(".javascriptRepo .sdkRepoFork").text(forks);
				} else if (sortTitle.includes("php") === true){
					$(".phpRepo .sdkRepoStar").text(stars);
					$(".phpRepo .sdkRepoFork").text(forks);
				} else if (sortTitle.includes("xamarin") === true){
					$(".xamarinRepo .sdkRepoStar").text(stars);
					$(".xamarinRepo .sdkRepoFork").text(forks);
				} else if (sortTitle.includes("arduino") === true){
					$(".arduinoRepo .sdkRepoStar").text(stars);
					$(".arduinoRepo .sdkRepoFork").text(forks);
				} else if (sortTitle.includes("embedded") === true){
					$(".embeddedRepo .sdkRepoStar").text(stars);
					$(".embeddedRepo .sdkRepoFork").text(forks);
				}
				continue;
			}

			//Sort non-SDK repos into categories

			//SOCIAL CATEGORY
			//  if name includes facebook, twitter
			if (sortTitle.includes("facebook") === true || sortTitle.includes("twitter") === true){
				//write them to the page
				$("section.socialRepos").append('<div class="repo"><div class="repoTitle"><h4>' + title + '</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">' + stars + '</span><span><img src="img/forksDark.svg" alt="" class="icon">' + forks + '</span><span>' + language + '</span></p></div><div class="repoDescription"><p>' + description + '</p></div><div class="repoButton"><a href="' + url + '" target="_blank"><button class="outline">View on Github</button></a></div></div>');
			
			//TUTORIALS CATEGORY
			//  if name tutorial
			} else if (sortTitle.includes("tutorial") === true){
				//write them to the page
				$("section.tutorials").append('<div class="repo"><div class="repoTitle"><h4>' + title + '</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">' + stars + '</span><span><img src="img/forksDark.svg" alt="" class="icon">' + forks + '</span><span>' + language + '</span></p></div><div class="repoDescription"><p>' + description + '</p></div><div class="repoButton"><a href="' + url + '" target="_blank"><button class="outline">View on Github</button></a></div></div>');
			
			//SAMPLES CATEGORY
			//  if name todo, demo, any, scrumptious, store, f8, internetcar 
			} else if (sortTitle.includes("todo") === true || sortTitle.includes("demo") === true || sortTitle.includes("any") === true || sortTitle.includes("scrumptious") === true || sortTitle.includes("store") === true || sortTitle.includes("f8") === true || sortTitle.includes("internetcar") === true){
				//write them to the page
				$("section.sampleApps").append('<div class="repo"><div class="repoTitle"><h4>' + title + '</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">' + stars + '</span><span><img src="img/forksDark.svg" alt="" class="icon">' + forks + '</span><span>' + language + '</span></p></div><div class="repoDescription"><p>' + description + '</p></div><div class="repoButton"><a href="' + url + '" target="_blank"><button class="outline">View on Github</button></a></div></div>');
			
			//OTHER CATEGORY
			//   ...everything else
			} else {
				//write them to the page
				$("section.other").append('<div class="repo"><div class="repoTitle"><h4>' + title + '</h4><p><span><img src="img/starsDark.svg" alt="" class="icon">' + stars + '</span><span><img src="img/forksDark.svg" alt="" class="icon">' + forks + '</span><span>' + language + '</span></p></div><div class="repoDescription"><p>' + description + '</p></div><div class="repoButton"><a href="' + url + '" target="_blank"><button class="outline">View on Github</button></a></div></div>');
			}
		}
	}

	//write total forks, stars and repos into the page
	$(".heroText .repoCount").text(totalRepos);
	$(".heroText .starCount").text(totalStars);
	$(".heroText .forkCount").text(totalForks);

	  //====================================//
	 // Get community projects from a parse class
	//====================================//
	//add new repo to the HTML
	function addCommunityRepoToHTML(title, description, url){
		$("section.community").append("<div class='repo'><div class='repoTitle'><h4>" + title + "</h4></div><div class='repoDescription'><p>" + description + "</p></div><div class='repoButton'><a href=" + url + " target='_blank'><button class='outline'>View on Github</button></a></div></div>");
	}

	//write this into the page
	var communityRepos = Parse.Object.extend("communityRepos");
	var query = new Parse.Query(communityRepos);
	query.ascending("repoName");
	query.find({
		success: function(results) {
		    // Do something with the returned Parse.Object values
		    for (var i = 0; i < results.length; i++) {
		      	var object 		= results[i];
      			var title  		= object.get('repoName');
      			var description = object.get('repoDescription');
      			var url  		= object.get('repoUrl');
      			addCommunityRepoToHTML(title, description, url);
		    }
		},
		error: function(error) {
		    console.log("Error: " + error.code + " " + error.message);
		}
	});

	  //====================================//
	 //  Header animation
	//====================================//
	var browserHeight 		= $(window).height(),
		browserWidth 		= $(window).width();

	//recalc sizes on browser resize
	$(window).resize(function(){
		browserHeight 	= $(window).height();
		browserWidth 	= $(window).width();
	});

	function headerAnimation(){
		  //
		 // Phone 1 (Left)
		//
		//move line down to grab video
		$(".craneLineInner").velocity({ 
			translateY: [0, "-85%"],
		}, { queue: false, duration: 600, easing: [ 0.4, 0, 0.2, 1 ], complete: function(){
			//move line anchor right
			$(".cranePivot").velocity({ 
				translateX: ["646%", 0]
			}, { queue: false, duration: 600, delay: 200, easing: [ 0.4, 0, 0.2, 1 ] });
			//move line + video onto the phone
			$(".craneLine").velocity({ 
				translateY: ["-31.5%", 0],
				translateX: ["76%", 0]
			}, { queue: false, duration: 600, delay: 200, easing: [ 0.4, 0, 0.2, 1 ], complete: function(){ 
				//move the line back up away from phone
				$(".craneLineInner").velocity({ 
					translateY: ["-40%", 0],
				}, { queue: false, duration: 800, easing: [ 0.4, 0, 0.2, 1 ] });
				//fade + animate in apps
				var rectApps = $(".apps rect"),
					pathApps = $(".apps path");
				for (var p = 0; p < pathApps.length; p++) {
					pathApps.eq(p).velocity({ 
						opacity: 1,
						scale: [1, 0.45],
						translateY: 0,
						rotateZ: [0, "90deg"]
					}, { queue: false, duration: 600, delay: 100 * p + 400, easing: [ 0.175, 0.885, 0.320, 1.275 ] });
				}
				for (var r = 0; r < rectApps.length; r++) {
					rectApps.eq(r).velocity({ 
						opacity: 1,
						scale: [1, 0.45],
						translateY: 0,
						rotateZ: 0
					}, { queue: false, duration: 600, delay: ((100 * r) + (100 * p) + 400), easing: [ 0.175, 0.885, 0.320, 1.275 ] });
				}
				//turn screen on
				$(".phone1Screen").velocity({ 
					fill: "#EF3F61"
				}, { queue: false, duration: 600, easing: [ 0.4, 0, 0.2, 1 ] });
			} });
		} });

		  //
		 // Phone 2 (Center)
		//
		//value of how much we have to move the line up to hide it
		var middleLineUp = -105;
		if (browserWidth < 600){
			middleLineUp = -170;
		}

		//move middle line to grab push icon
		$(".middleLineOneInner").velocity({ 
			translateY: [0, "-105%"],
		}, { queue: false, duration: 1200, delay: 800, easing: [ 300, 28 ], complete: function(){
			//rotate the push icon
			$(".pushOne").velocity({ 
				rotateZ: ["12deg", "0deg"],
			}, { queue: false, duration: 300, easing: [ 0.4, 0, 0.2, 1 ] });

			//lift up the push icon
			$(".middleLineOne").velocity({ 
				translateY: ["-100%", 0],
			}, { queue: false, duration: 800, easing: [ 0.4, 0, 0.2, 1 ], complete: function(){
				//put the icon on the phone screen
				$(".middleLine2").velocity({ 
					translateY: [0, "-105%"],
				}, { queue: false, duration: 1000, delay: 200, easing: [ 300, 28 ], complete: function(){
					//pull the line back up
					$(".middleLine2Inner").velocity({ 
						translateY: [middleLineUp + "%", 0],
					}, { queue: false, duration: 1000, delay: 200, easing: [ 300, 28 ] });
					//turn phone screen on
					$(".phone2Color").velocity({ 
						scale: [1, 0]
					}, { queue: false, duration: 350, easing: [ 0.25, 0.46, 0.45, 0.94 ] });
					$(".phone2Screen").velocity({ 
						fill: "#4BBC6E"
					}, { queue: false, duration: 150, delay: 200, easing: [ 0.4, 0, 0.2, 1 ] });
					//change icon color
					$(".push2 path").velocity({ 
						fill: "#40a05b"
					}, { queue: false, duration: 200, easing: [ 0.4, 0, 0.2, 1 ] });
				} });
			} });
		} });

		  //
		 // Phone 3 (Right)
		//
		//drive in the hoist
		$(".hoist").velocity({ 
			translateX: [0, "100%"],
		}, { queue: false, duration: 4400, easing: [0.39, 0.575, 0.565, 1], complete: function(){
			//turn screen on
			$(".phone3Color").velocity({ 
				scale: ["1", "0"]
			}, { queue: false, duration: 350, easing: [ 0.25, 0.46, 0.45, 0.94 ] });
			$(".phone3Screen").velocity({ 
				fill: "#555574"
			}, { queue: false, duration: 150, delay: 200, easing: [ 0.4, 0, 0.2, 1 ] });
			$(".analytics path").velocity({ 
				fill: "#3A3A59"
			}, { queue: false, duration: 200, easing: [ 0.4, 0, 0.2, 1 ] });

			//lift hoist line up
			$(".hoistLineInner").velocity({ 
				translateY: ["-65%", 0]
			}, { queue: false, duration: 800, easing: [ 0.4, 0, 0.2, 1 ] });

		}, begin: function(){
			//turn hoist wheels
			$(".hoistWheels g").velocity({ 
				rotateZ: ["-720deg", "0deg"],
			}, { queue: false, duration: 4400, easing: [0.39, 0.575, 0.565, 1]});
		} });
	}

	headerAnimation();

	  //====================================//
	 // Main Scrolling Events
	//====================================//
	var scrollwheelActive = 0,
		lastScrollPosition;
	function scrollAnimation(){
		//variables
		var scrolled 		= $(window).scrollTop();

		//don't recalculate if not scrolling
		if (lastScrollPosition === scrolled) {
			
			return false;
		} else {

			//update last position when scrolling
			lastScrollPosition = scrolled;

			//parallax header
			var headerheight = $(".header").height();
			if (scrolled >= 0 && scrolled <= browserHeight && browserWidth > 960){
				$(".heroText").css({
					'transform': 'translateY(-' + (scrolled / 1.6) + 'px)',
					'opacity': 1 - (scrolled / headerheight)
				});
				$(".skyline").css({
					'transform': 'translateY(' + (scrolled * 0.135) + 'px)',
				});
			}
			
	    }
	}

	// Call the loop to execute scroll events
	$(window).on('mousewheel', function() {
		scrollAnimation();
		scrollwheelActive = 1;

		//timer to avoid more scroll functions if mousewheel event is already being used
		clearTimeout($.data(this, 'timer'));
		$.data(this, 'timer', setTimeout(function() {
		    //not using the scrollwheel anymore to scroll
		    scrollwheelActive = 0;
		}, 100));
	})

	//for non-scrollwheel
	.scroll(function(){
		//only run if scrollwheel isn't being used
		if (scrollwheelActive === 1){
			return false;
		} else{
			scrollAnimation();
		}
	});
});