package com.tns.gen.org.nativescript.plugins.firebase;

public class FirebasePluginListener implements org.nativescript.plugins.firebase.FirebasePluginListener {
	public FirebasePluginListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void success(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "success", void.class, args);
	}

	public void error(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "error", void.class, args);
	}

}
