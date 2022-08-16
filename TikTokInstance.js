window[window.TiktokAnalyticsObject+'Instance'] = function(args){
    try{
      // parsing arguments
      var eventName = args['eventName'];
      var eventParams = args['eventParams'];
      var pixelId = args['pixelId'];
      
      // creating current instance
      var instance = window[window.TiktokAnalyticsObject].instance(pixelId);
      
      // tracking the event depending on its name and params
      if (eventName == 'PageView'){
        instance.page();
      } else {
        if (eventParams){
          instance.track(eventName,eventParams);
        } else {
          instance.track(eventName);
        }
      }
      return true;
    } catch (e) {
      return false;
    }
  };