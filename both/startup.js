Meteor.startup(() => {

	Accounts.config({
	  sendVerificationEmail: true,
	  forbidClientAccountCreation: false
	});

	Accounts.ui.config({
	  passwordSignupFields: 'EMAIL_ONLY',
	  loginPath: '/signin',
	  signUpPath: '/signup',
	//  resetPasswordPath: '/reset-password',
	//  profilePath: '/profile',
	//  onSignedInHook: () => FlowRouter.go('/general'),
	//  onSignedOutHook: () => FlowRouter.go('/login'),
	  minimumPasswordLength: 6
	});
});