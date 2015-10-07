# Flatify v0.2
Small jQuery library to "flatify" Android-like icons for the web that works wonders with glyph and icons fonts like FontAwesome.
 
# Usage
* Download this file and add it to your website as you would with any .js file.
* Use this CDN in your meta section

    https://cdn.rawgit.com/n3x0/Flatify/master/flatify.js

1. Give your soon to be Material-Design icons a css id.
2. At your "$(document).ready(function())" apply your style
3. Enjoy pure HTML + jQuery + CSS3 Material-Design icons

# Methods
  $('#targetID').flatify(settings);

Full control providing JSON: function flatifySettings(target, settings) where
  targetID: id of the element, 
  settings: JSON containing the arguments.

#Parameters
     'r' : [ 0 - 255 ] for red color component for the icon,
     'g' : [ 0 - 255 ] for red color component for the icon,
     'b' : [ 0 - 255 ] for red color component for the icon,

     'f' : [ 20 - ∞ ] font size for the icon,
     'w' : [ 30 - ∞ ] width for the icon,
     'c' : [ 0 - 50 ] percentage of rounded for icon border,

     's' : [ 0 - 100 ] number of shadows for the icon text,
     'a' : [ 0 - 1 ] opacity for the icon text shadow,
     
  If any of the parameters are missing flatify will provide a default value.

#TODO list
1. Improve of icon sizes in Easy mode -- DONE
2. Greatly improve the handling of missing parameters -- DONE
2. Supply an example of use -- DONE
3. Get starred at least once -- DONE twice, thx guys
4. Give proper credit where credit is due (I will, I promise)
5. Provide a more verbose way to define parameters

