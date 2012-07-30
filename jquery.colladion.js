/**
 * Colladion: a basic accordion plugin for jQuery
 * http://github.com/slapandthink/Colladion-jQuery-Plugin/
 *
 * A some theme for exemples
 *
 * @author Benjamin Cabanes (http://slapandthink.com)
 * @version 0.1
*/

 (function($){

 	$.fn.colladion = function(options){

 			/* Defaults vars */
 			var defaults = {
 				head: "h1, h2, h3, dt",
 				content: "div, p, ul, dd",
 				//default function for showing content
 				show: function(selector){
 					$(selector).slideDown(250);
 				},
 				//default function for hiding content
 				hide: function(selector){
 					$(selector).slideUp(250);
 				}
 			};

 			//default CSS classes
			var active   = "active",
				inactive = "inactive";

 			//merging vars
 			var working = $.extend(defaults, options);

 			//fore each instance we execute the plugin
 			return this.each(function(){
 				var obj = $(this);
 				//find all headers ond wrap them in <a> for accessibility.
 				var sections = obj.find(working.head).wrapInner('<a href="#" class="colladion-link"></a>');
				//locate all panels directly following a header
				var panel = obj.find(working.head).map(function(){
					var head = $(this);
					if(!head.hasClass(active)){
						return head.next(working.content).hide()[0];
					}
					return head.next(working.content)[0];
				});

 				//bind event for showing content
 				obj.bind('show', function(e, bypass){
 					var obj = $(e.target);
 					//set attribute and change classe
 					obj.attr('aria-hidden', false)
 						.prev()
 						.removeClass(inactive)
 						.addClass(active);

 					//bypass method for instant display
 					if(bypass){
 						obj.hide();
 					}else{
 						working.show(obj.dequeue().stop(true, false)); // "dequeue().stop(true, false)" disables the repeat again and again
 					}
 				});

 				//bind event for hiding content
 				obj.bind('hide', function(e, bypass){
 					var obj = $(e.target);
 					obj.attr('aria-hidden', true)
 						.prev()
 						.removeClass(active)
 						.addClass(inactive);

 					//bypass method for instant hiding
 					if(bypass){
 						obj.hide();
 					}else{
 						working.hide(obj.dequeue().stop(true, false)); // "dequeue().stop(true, false)" disables the repeat again and again
 					}
 				});

 				//delegate click event to show/hide content
 				obj.bind('click', function(e){
 					var t = $(e.target);
 					//check if header was clicked
 					if(!t.is(working.head)){
 						//what about link inside header
 						if(t.parent().is(working.head)){
 							t = t.parent();
 						}else{
 							return;
 						}
 						e.preventDefault();
 					}
 					//figure out what position the clicked header has
 					var content = t.next(working.content);
 					//if content is already active, hide it
 					if(t.hasClass(active)){
 						content.trigger('hide');
 						return;
 					}
 					//otherwise show it
 					content.trigger('show');
 				});
 			});
 		};

 })(jQuery);