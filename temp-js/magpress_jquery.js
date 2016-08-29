jQuery(function(){jQuery("a[rel=lightbox]").lightBox();});
function slide_frame(frame_no, new_frame, div){

	container = jQuery(div).parent().children(".copy").children("ul");
	image_container = jQuery(div).parent().children(".gallery-container");
	
	//Fade Out
	container.children("li").eq(frame_no).fadeOut({duration: 250});
	setTimeout(function(){image_container.children("li").eq(frame_no).fadeOut({duration: 350});}, 250);

	//Set Dot
	jQuery(".dot-selected").removeClass("dot-selected");
	container.parent().children(".slider-dots").children("a").eq(new_frame).addClass("dot-selected");
	
	//Fade In
	slideTimeout = setTimeout(function(){
		container.children("li").eq(new_frame).fadeIn({duration: 250});
		setTimeout(function(){
			
			image_container.children("li").eq(new_frame).fadeIn({duration: 350});
		}, 250);
	}, 350);
}

jQuery(window).resizeend({
	onDragEnd: function(){
		jQuery.noslide = 1;
	}
});

jQuery(document).ready(function()
	{
		if(jQuery.browser.msie || jQuery.browser.mozilla)
			{Screen = jQuery("html");}
		else
			{Screen = jQuery("body");}
		
		jQuery(".fitvid, .post-image").fitVids();
		
		jQuery.frame_no = 0;
		jQuery("div[id^='slider-auto-']").each(function(){
			if(!isNaN(jQuery(this).text()) && jQuery(this).text() !== "0" && jQuery(this).text() !== "")
				{
					var div = jQuery(this);
					var container = jQuery(this).parent().children(".copy").children("ul");					
					var image_container = jQuery(this).parent().children(".gallery-container");
					var id = jQuery(this).attr("id").replace("slider-auto-", "");
					var frame_div = "#slider-number-"+id;
					var max_clicks = container.children("li").size();	
					
					var SliderInterval = setInterval(function(){
						var frame_no = jQuery(frame_div).text();
						var new_frame = (frame_no/1+1);
						
						if(new_frame == max_clicks){new_frame = 0;}
						slide_frame(frame_no, new_frame, div);
			
						jQuery(frame_div).text(new_frame);
					}, (jQuery(this).text()*1000));
				}
		});
		
		jQuery(".next").click(function(){	
			container = jQuery(this).parent().children(".copy").children("ul");
			max_clicks = container.children("li").size();	
			
			var frame_div = jQuery(this).parent().children("div[id^='slider-number-']")
			var frame_no = frame_div.text();
			var div = jQuery(this);
			
			new_frame = (frame_no/1+1);
			if(new_frame == max_clicks){new_frame = 0;}

			slide_frame(frame_no, new_frame, div);
			
			jQuery(frame_div).text(new_frame);
						
			return false;
		});
		
		jQuery(".previous").click(function(){
			container = jQuery(this).parent().children(".copy").children("ul");
			max_clicks = container.children("li").size();	
			
			var frame_div = jQuery(this).parent().children("div[id^='slider-number-']")
			var frame_no = frame_div.text();
			var div = jQuery(this);
			
			new_frame = (frame_no/1-1);
			if(new_frame < 0){new_frame = (max_clicks-1), frame_no = 0;}
			
			slide_frame(frame_no, new_frame, div);
			
			frame_div.text(new_frame);
			
			return false;
		});

		jQuery(".slider-dots a").click(function(){
			var frame_div = jQuery(this).parent().parent().parent().children("div[id^='slider-number-']")
			var frame_no = frame_div.text();
			var div = jQuery(this).parent().parent();
			
			new_frame = jQuery(this).attr("rel");
			
			slide_frame(frame_no, new_frame, div);
			frame_div.text(new_frame);
			return false;
		});
		
		jQuery.video_frame = 1;
		jQuery(".video-selector li a").click(function(){
			videoid = jQuery(this).attr("rel");
			
			new_videoid = jQuery(this).attr("rel").replace("#video_widget_", "");
			old_videoid = "#video_widget_"+jQuery.video_frame;
			
			jQuery(old_videoid).slideUp();
			jQuery(videoid).slideDown();
			
			jQuery(this).parent().parent().children(".selected").removeClass("selected");
			jQuery(this).parent().addClass("selected");
			
			jQuery.video_frame = new_videoid;
			return false;
		});
		if(window.location.hash){
			commentScroll = jQuery(window.location.hash).offset().top;
			Screen.animate({scrollTop: commentScroll});
		};
		
		jQuery("#menu-drop-button").live("click", function(){
			jQuery("#nav").slideToggle();
			jQuery(".sub-menu").css({'visibility': 'visible'});
			jQuery(".sub-menu").css({'display': 'block'});
			return false;
		});
		
		
		
		jQuery("#ajaxcommentform").submit(function(){return false;});
		jQuery("#comment_jump").click(function(){
			setTimeout(function(){jQuery("html").animate({scrollTop: jQuery("#comment_anchor").offset().top}, 1000);}, 500);
			return false;
		});
		jQuery("#ajax_comment_submit").live("click", function(){
			// Compile the request location
			post_page = ThemeAjax.ajaxurl;
			
			// Compile all the request details
			author = jQuery("#author").attr("value");
			email = jQuery("#email").attr("value");
			url = jQuery("#url").attr("value");
			comment = jQuery("#comment").attr("value");
			twitter = jQuery("#twitter").attr("value");
			email_subscribe = jQuery("#email_subscribe").attr("checked");
			post_id = jQuery("#comment_post_id").attr("value");
			comment_parent_id = jQuery("#comment_parent_id").attr("value");
	
			// Set which area the new comment will end up in
			if(comment_parent_id !== "0" && comment_parent_id !== "")
				{new_comments_id = "#new-reply-"+comment_parent_id;}
			else
				{new_comments_id = "#new_comments";}
			
			// Fade out the new comment div so that we can fade it in after posting our new comment
			jQuery("#commment-post-alert").fadeIn("slow");
			
			// Perform the "Magic" which is just a bit of Ajax
			jQuery.post(post_page,
				{action : 'ocmx_comment-post', author: author, email: email, url: url, twitter: twitter, email_subscribe: email_subscribe, comment: comment, comment_post_id: post_id, comment_parent: comment_parent_id}, 
				function(data) {
					if(jQuery.browser.msie)
						{location.reload();}
					else
						{jQuery(new_comments_id).html(jQuery(new_comments_id).html()+" "+data).fadeIn("slow");}
					jQuery("#commment-post-alert").fadeOut("fast");
					jQuery("#comment").attr("value", "");
			});
			return false;
		});
		
		jQuery("a[id^='reply-']").live("click", function(){
			// Create the Comment Id and apply it to the comment form
			comment_id = jQuery(this).attr("id").replace("reply-", "");
			
			// Set which href we're dealing with
			href_id = "#reply-"+comment_id;
			
			//Set where exactly the comment form will end up
			new_location_id = "#form-placement-"+comment_id;
			
			//Create the Id for the new placement of the comment Form and put it there
			if(jQuery(new_location_id).html().toString().indexOf("Post") == -1)
				{
					jQuery("#comment_form_container").remove().appendTo(new_location_id);
					jQuery(new_location_id).fadeIn("slow");
					jQuery("#comment_parent_id").attr("value", comment_id);
					// Change href to Cancel
					jQuery(href_id).html("Cancel Reply");
				}
			else
				{
					jQuery(new_location_id).fadeOut("fast");
					jQuery("#comment_form_container").remove().appendTo("#original_comment_location");
					jQuery("#comment_parent_id").attr("value", "0");
					// Change href back to Reply
					jQuery(href_id).html("Reply");
				}
			setTimeout(function(){jQuery("html").animate({scrollTop: jQuery("#comment_form_container").offset().top}, 1000);}, 500);
			return false;
		});
		
		/*************************/
		/* Comments Form Clearer */
		var author = "author";
		jQuery("#"+author).focus(function(){
			if(jQuery("#"+author).attr("value") == "Name")
				{jQuery("#"+author).attr("value", "");}
		});
		
		jQuery("#"+author).blur(function(){
			if(jQuery("#"+author).attr("value") == "")
				{jQuery("#"+author).attr("value", "Name");}
		});
		
		var email = "email";	
		jQuery("#"+email).focus(function(){
			if(jQuery("#"+email).attr("value") == "Email")
				{jQuery("#"+email).attr("value", "");}
		});
		
		jQuery("#"+email).blur(function(){
			if(jQuery("#"+email).attr("value") == "")
				{jQuery("#"+email).attr("value", "Email");}
		});
		
		var url = "url";		
		jQuery("#"+url).focus(function(){
			if(jQuery("#"+url).attr("value") == "URL")
				{jQuery("#"+url).attr("value", "");}
		});
		jQuery("#"+url).blur(function(){
			if(jQuery("#"+url).attr("value") == "")
				{jQuery("#"+url).attr("value", "URL");}
		});
		
		var twitter = "twitter";		
		jQuery("#"+twitter).focus(function(){
			if(jQuery("#"+twitter).attr("value") == "Twitter")
				{jQuery("#"+twitter).attr("value", "");}
		});
		jQuery("#"+twitter).blur(function(){
			if(jQuery("#"+twitter).attr("value") == "")
				{jQuery("#"+twitter).attr("value", "Twitter");}
		});
	});