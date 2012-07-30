#Colladion : a basic accordion jQuery plugin
Colladion is an accordion jQuery plugin, HTML5 and Aria ready, basic and easy to use.

##Compatibilities
Work with jQuery 1.5+

##How to use
Colladion plugin is very usefull, in 3 steps, you've already done !

###First: Import the plugin
First you have to download and import the jQuery plugin into your javascript folder.
<pre><code>
	<!-- Grab Google CDN's jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <!-- Import Colladion plugin -->
    <script src="js/jquery.colladion.js"></script>
</code></pre>

###Second: HTML markup
There are many different markup because Colladion is flexible.
Colladion has to have a title zone and a text zone. You can use the "H1", "H2", "H3" markup for the title zone and "DIV", "P", "UL" for text zone. See exemples below.
In addition to have there HTML markup, you can use the "Dt" and "DD" of HTML5 markup.

<pre><code>
<dl class="accordion">
    <dt>Integer sollicitudin, mi tristique tincidunt lobortis?<span></span></dt>
    <dd>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec tellus et orci malesuada mollis. Vestibulum imperdiet leo sit amet nunc dignissim porttitor at tincidunt lorem. Curabitur eget diam nec nisi fringilla aliquam. Integer sollicitudin, mi tristique tincidunt lobortis, mauris tellus eleifend est, in tristique erat lectus a velit. Suspendisse potenti. Donec eget nisi condimentum lectus venenatis varius. In et imperdiet erat. Donec ac mattis sem. Quisque vulputate neque ut urna placerat id elementum turpis vehicula.
    </dd>
    <dt>Orespum at tincidunt<span></span></dt>
    <dd>
    	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec tellus et orci malesuada mollis. Vestibulum imperdiet leo sit amet nunc dignissim porttitor at tincidunt lorem. Curabitur eget diam nec nisi fringilla aliquam. Integer sollicitudin, mi tristique tincidunt lobortis, mauris tellus eleifend est, in tristique erat lectus a velit. Suspendisse potenti. Donec eget nisi condimentum lectus venenatis varius. In et imperdiet erat. Donec ac mattis sem. Quisque vulputate neque ut urna placerat id elementum turpis vehicula.
    </dd>

    <dt>Curabitur eget diam nec nisi<span></span></dt>
    <dd>
    	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec tellus et orci malesuada mollis. Vestibulum imperdiet leo sit amet nunc dignissim porttitor at tincidunt lorem. Curabitur eget diam nec nisi fringilla aliquam. Integer sollicitudin, mi tristique tincidunt lobortis, mauris tellus eleifend est, in tristique erat lectus a velit. Suspendisse potenti. Donec eget nisi condimentum lectus venenatis varius. In et imperdiet erat. Donec ac mattis sem. Quisque vulputate neque ut urna placerat id elementum turpis vehicula.
	</dd>
</dl>
</code></pre>

###Finally: Initialize Colladion
Initialize Colladion plugin in your javascript file and enjoy

<pre><code>
    /* Initialize Colladion */
	$(".accordion").colladion();
</code></pre>

##License
Dual licensed under the MIT or GPL Version 2 licenses.