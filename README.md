Custom Animu Homepage
====

![alt tag](https://my.mixtape.moe/eeienc.jpg "Homepage preview")

Live demo: 
* EN: https://39-chan.github.io/gokou-ruri
* JP: https://39-chan.github.io/gokou-ruri/languages/jp/index.html
* ID: https://39-chan.github.io/gokou-ruri/languages/id/index.html

This repository contains a modified shits of a awesome work by Gokouri-san. Feel free to download and modify. Comments and suggestions appreciated. Please don't expect too much.

Features:
* 6 Random high-res 2D mascots (but the same girl lol)
* Switchable on-the-fly boring themes
* Over 69+ random bullshit quotes in 3 different languages
* 5 Fucking useless searchboxes
* 4chan weeb links
* Reddit weeb links
* High-res animu fap material links
* Illegal animu download links
* Illegal animu streaming links (with 1 legal tho)
* Very useful sauce links

Customizing, adding mascots and themes
----
 ̶T̶o̶ ̶c̶h̶a̶n̶g̶e̶ ̶c̶u̶r̶r̶e̶n̶t̶ ̶t̶h̶e̶m̶e̶,̶ ̶r̶e̶p̶l̶a̶c̶e̶ ̶i̶t̶s̶ ̶n̶a̶m̶e̶ ̶i̶n̶ [index.html](index.html#L15-17)
Now you don't need to manually replacing the css name if you want to change the theme, just press a buttons / text / whatever you call it, on the bottom right
 
To customize the mascots of all themes, modify the array in [themes/mascots.js](themes/mascots.js):
```javascript
var mascotList = [ "ruri-01.png", "ruri-02.png", "ruri-03.png" "ruri-04.png" "ruri-05.png" "ruri-06.png"];
```

To make a new theme, you can copy an existing one, and change images and [colors-dark.css](themes/colors-dark.css) or [colors-light.css](themes/colors-light.css) as you like.  
Please note that entries in your theme's [mascots.js](themes/mascots.js) should match with contents of [mascots/](themes/mascots/) directory.  

Disclaimer
----
Base codes are written by Gokouri. I only modified some (I actually modified a lot) of his/her codes to suites my need.

Images of cute girls were made by Anons from /w/ and stolen from their [Google Drive](https://drive.google.com/folderview?id=0B_VmbVyD4eT3N1VUbGN4Wjd5OVE).
