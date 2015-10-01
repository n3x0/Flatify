# Flatify v0.1
Small jQuery library to "flatify" Android-like icons for the web
 
# Usage
Download this file and add it to your website as you would with any .js file.

1. Give your soon to be Material-Design icons an id.
2. At your "$(document).ready(function())" apply your style for the icon using 1 of the 4 methods
3. Enjoy pure HTML + jQuery + CSS3 Material-Design icons

# Methods
1. Full control: function flatify(target, r, g, b, f, w, s, a) RECOMMENDED where
  target: id of the element
  r: red component of the bg-color
  g: green component of the bg-color
  b: blue component of the bg-color
  f: font-size of the icon
  w: width of the icon
  s: shadow length
  a: shadow opacity
2. Full control providing JSON: function flatifySettings(target, settings) where
  target: id of the element
  settings: JSON containing the arguments for a full control of the effects
3. Easy mode: function flatifyColorShadow(target, color, shadow) where
  target: id of the element
  color: JSON with the three components for a rgb color
  shadow: JSON with the 3 arguments for width of the icon, lenght and opacity of the shadow
4. Small mode: function flatifyColor(target, r, g, b) where
  target: id of the element
  r: red component of the bg-color
  g: green component of the bg-color
  b: blue component of the bg-color
