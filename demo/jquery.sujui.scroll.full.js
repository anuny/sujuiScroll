(function($){
	$.fn.extend({
		sujuiScroll:function(opt){
			var w = window,
			doc = w.document,
			title = doc.title,
			hash=w.location.hash,
			HB = 'html,body',
			ul = 'ul',
			li = 'li',
			a = 'a',
			str = '[',
			end = ']',
			nex = '>',
			equ = '=',
			nda = '-',
			nhs='#/',
			epx = '',
			nav = $(this),
			navList = nav.find(ul + nex + li + nex + a),
			navData = 'data-nav',
			pageData = 'data-page',
			navHeight = opt.hasOwnProperty('navHeight')?opt.navHeight:null||50,
			speed = opt.hasOwnProperty('speed')?opt.speed:null||1000,
			current = 'current',
			fix = 'fix';
			navList.bind('click',
			function() {
				var salf = $(this),
				pageUrl = salf.attr(navData),
				target = $(getPage(pageUrl));
				openPage(target);
				return false
			});
			$(w).bind('scroll',
			function() {
				var winScrollTop = $(w).scrollTop(),
				firstNav = nav.find(ul + nex + li).first().find(a),
				firstData = firstNav.attr(navData),
				firstPage = $(getPage(firstData)),
				firstOffsetTop = firstPage.offset().top,
				firstHeight = firstPage.height(),
				firstOffset = firstOffsetTop + firstHeight;
				if (winScrollTop >= firstOffset) {
					setStyle.fix()
				} else {
					setStyle.noneFix()
				};
				navList.each(function(i) {
					var salf = $(this),
					thisLi = salf.parent(li),
					pageData = salf.attr(navData),
					pageId = $(getPage(pageData)),
					pageOffsetTop = pageId.offset().top,
					pageHeight = pageId.height() / 2,
					pageMin = pageOffsetTop - navHeight,
					pageMax = pageOffsetTop + navHeight;
					if (winScrollTop >= pageMin && winScrollTop <= pageMax) {
						setStyle.addCurrent(salf);
						setStyle.setInfo(salf)
					}
				})
			});
			var setStyle = {
				fix: function() {
					nav.addClass(fix)
				},
				noneFix: function() {
					nav.removeClass(fix);
					
				},
				addCurrent: function(e) {
					var siblings = e.parent(li).siblings(li).find(a);
					siblings.removeClass(current);
					e.addClass(current)
				},
				setInfo: function(salf) {
					var addTitle = salf.text(),
					hash = salf.attr(navData);
					w.location.hash = nhs+hash;
					doc.title = addTitle + nda + title
				}
			};
			function openPage(target) {
				var offsetTop = target.offset().top;
				$(HB).animate({
					scrollTop: offsetTop - navHeight
				},
				speed)
			};
			function getPage(pageId) {
				var id = str + pageData + equ + pageId + end;
				return id
			};
			function getHash(){
				if(hash.length>0){
					var pageId=hash.replace(nhs,epx),
					target=$(getPage(pageId)),
					offsetTop=target.offset().top;
					$(HB).scrollTop(offsetTop);
				}
			};
			getHash();
		}
	})    
})(jQuery);
