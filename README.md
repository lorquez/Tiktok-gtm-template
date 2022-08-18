# TikTok gtm template
 GTM template for the TikTok pixel


 # Main features

 * Compatible with multiple pixel ids (*needs additional custom html tag, keep reading for more info*)
 * Can get the event name as a variable
 * Can receive the event parameters as table (key&value pairs) or as javascript object
 
# Compatibility with multiple pixels

 Multiple pixels compatibility cannot be provided by simply using a GTM template because its code runs in a sandbox environment with limited access to the actual TikTok pixel functions. To be more precise, the sandbox environment is not compatible with *TikTok instances*.
 
 As a workaround, a custom HTML tag is needed to support the TikTok pixel tag. The code can be found in the `TikTokInstance.js` file in this repository. Make sure the custom HTML tag is loaded before any TikTok pixel tag using tag sequencing, tag priority or any other method you see fit.



