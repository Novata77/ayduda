FlowRouter.route("/", {
	name:"mainLayout",
	action(){
		BlazeLayout.render("mainLayout",{main:"forms"});
	}
});
FlowRouter.route("/upload",{
	name:"upload",
	action(){
		BlazeLayout.render("mainLayout",{main:"uploadForm"});
	}
});
FlowRouter.route("/main",{
	name : "main",
	subscriptions:function(params, queryParams)
	{
		//console.log(queryParams.);
		this.register("loadComments",Meteor.subscribe("getComments",queryParams.id));
		this.register("loadWall",Meteor.subscribe("getArticles",Meteor.userId()));
	},
	action(){
		BlazeLayout.render("mainLayout",{main:"mainWall"});
	}
});
FlowRouter.route("/aboutus", {
	name:"aboutus",
	action() {
		BlazeLayout.render("mainLayout",{ main:"about" });
	}
});
FlowRouter.route("/chat", {
	name:"chat",
	subscriptions:function(params, queryParams)
	{
		this.register("loadMsn",Meteor.subscribe("getMsn"));
		this.register("loadUsers",Meteor.subscribe("getUsers"));
	
	},
	action() {
		BlazeLayout.render("mainLayout",{ main:"layout" });
	}
});

FlowRouter.route("/login", {
	name:"mainLayout",
	action(){
		BlazeLayout.render("mainLayout",{main:"login"});
	}
});

FlowRouter.route("/forms", {
	name:"mainLayout",
	action(){
		BlazeLayout.render("mainLayout",{main:"forms"});
	}
});