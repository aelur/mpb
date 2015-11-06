    $(function(){
		
		var scrollers = [];
		var classLists = [];
        var scroller = $('#scroller div.innerScrollArea');
		var classList = $('#scroller').attr('class');
		
		scrollers.push(scroller);
		classLists.push(classList);
		
        scroller = $('#scroller1 div.innerScrollArea');
		classList = $('#scroller1').attr('class');
		scrollers.push(scroller);
		classLists.push(classList);
		
        scroller = $('#scroller2 div.innerScrollArea');
		classList = $('#scroller2').attr('class');
		scrollers.push(scroller);
		classLists.push(classList);
		
        scroller = $('#scroller3 div.innerScrollArea');
		classList = $('#scroller3').attr('class');
		scrollers.push(scroller);
		classLists.push(classList);
		
		for (var i = 0; i<3; i++){
			 var scrollerContent = scrollers[i].children('ul');
			scrollerContent.children().clone().appendTo(scrollerContent);
			var curX = 0;
			scrollerContent.children().each(function(){
				var $this = $(this);
				$this.css('left', curX);
				curX += $this.outerWidth(true);
			});
			var fullW = curX / 2;
			var viewportW = scrollers[i].width();
	
			// Scrolling speed management
			
			var controller;
			if (classLists[i] == 'speed1'){
				controller = {curSpeed:0, fullSpeed:1};
			}else if (classLists[i] == 'speed2'){
				controller = {curSpeed:0, fullSpeed:2};
			}else if (classLists[i] == 'speed3'){
				controller = {curSpeed:0, fullSpeed:3};
			}
			var $controller = $(controller);
			var tweenToNewSpeed = function(newSpeed, duration)
			{
				if (duration === undefined)
					duration = 600;
				$controller.stop(true).animate({curSpeed:newSpeed}, duration);
			};
	
			// Scrolling management; start the automatical scrolling
			var doScroll = function()
			{
				var curX = scrollers[i].scrollLeft();
				var newX = curX + controller.curSpeed;
				if (newX > fullW*2 - viewportW)
					newX -= fullW;
				scrollers[i].scrollLeft(newX);
			};
			setInterval(doScroll, 20);
			tweenToNewSpeed(controller.fullSpeed);
		}
       
    });