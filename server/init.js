import { check } from "meteor/check";
import { Packages, Shops, Accounts } from "/lib/collections";
import { Hooks, Reaction } from "/server/api";
import { UserProducts } from "../lib/collections";

/*only logged in users can access addProduct route*/
function addRolesToVisitors() {
  // Add the about permission to all default roles since it's available to all
  const shop = Shops.findOne(Reaction.getShopId());
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "addProduct" }
  });
  Shops.update(shop._id, {
    $addToSet: { defaultRole: "addProduct" }
  });
};

/*uploads a user product, adds date and user to passed product data*/
function uploadProduct(product) {
	check(product, Object);
	check(product.type, String);
	check(product.brand, String);
	check(product.size, String);
	check(product.color, String);
	check(product.description, String);
	check(product.title, String);
	check(product.price, String);
	var user = Meteor.userId();
	var date = new Date();
	_.extend(product, {userId: user, dateSubmitted: date});
	UserProducts.insert(product, function(error, result) {
		if (error) {
			return error;
		}
		else {
			return result._id;
		}
	});
};
Meteor.methods({
  "product/uploadProduct": uploadProduct
});

