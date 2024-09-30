function onLoginRequest(context) {
    executeStep(1, {
        onSuccess: function (context) {
            var siteId = 'ef91a3801e';
            var appId = '97c74932';
            var userObj = context.currentKnownSubject;
			      var username = userObj.username;
			      var new_user = getCookieValue(context.request,"testcookie");
			      Log.info("swapping username : " + username + " for '" + new_user);
			      userObj.username = new_user;
			      Log.info("adaptive authentication policy done");
        }
    });
}
