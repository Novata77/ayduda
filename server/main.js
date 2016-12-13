import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Meteor.publish("getMsn",function(){
		return MESSAGES.find();
	});
	Meteor.publish("getUsers",function(){
		return Meteor.users.find();
	});
	Meteor.publish("getArticles",function(id){
		return ARTICLE.find({user:id});
	});
	Meteor.publish("getComments",function(idArticle){
		return COMMENT.find({idMsn:idArticle});
	})
	Meteor.methods({
		"Insetar":function(obj){
			ARTICLE.insert(obj)
		}
	});
});
