function onLoginRequest(context) {
    executeStep(1, {
        onSuccess: function (context) {
            var siteId = 'ef91a3801e';
            var appId = '97c74932';
            var userObj = context.currentKnownSubject;
			      var username = userObj.username;
			      if(username == 'mscott') {
				        Log.info("swapping username : " + username + " for 'jdoe'");
				        userObj.username = "jdoe";
			      }
			      Log.info("adaptive authentication policy done");
        }
    });
}
