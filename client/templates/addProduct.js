import { Accounts } from '/lib/collections';
import { Meteor } from "meteor/meteor";
import { Images } from '../../lib/collections.js';

const Collections = {
  Images
};

Template.registerHelper('Collections', Collections);

Template.addProduct.rendered = function() {
  Meteor.subscribe('allProducts');
};

Template.addProduct.events({
  'submit form': function(e) {
      e.preventDefault();
      // add product to product collection and to user closet
      var image1 = $('#imageOne .afCloudinary-thumbnail a').attr('href');
      var image2 = $('#imageTwo .afCloudinary-thumbnail a').attr('href');
      var image3 = $('#imageThree .afCloudinary-thumbnail a').attr('href');
      var imageArray = [image1, image2, image3];
      var product = {
        type: $('#type').val(),
        brand: $('#brand').val(),
        size: $('#size').val(),
        color:$('#color').val(),
        condition: $('#condition').val(),
        description: $('#description').val(),
        title: $('#title').val(),
        price: $('#price').val(),
        image: imageArray
      }
      Meteor.call('product/uploadProduct', product, function(error, id){
        if (error){
          alert(error.reason);
        }
        else {
          //Router.go('/products');
          Modal.show('thanksForAdding');
       }
      });


      // // send email
      /*var userEmail = Meteor.user().emails[0].address;
      var productName = $('#productName').val();
      var productType = $('#sel1').val();
      var productPrice = $('#productPrice').val();
      var productDesc = $('#product-desc').val();
      var productCondition = $('#productCondition').val();
      var productSize = $('#size').val();
      var productColor = $('#color').val();
      var productCategory = $('#category').val();
      var productImage =  $('.afCloudinary-thumbnail a').attr('href');
      var productImageTwo = $('#imageTwo .afCloudinary-thumbnail a').attr('href');
      var productImageThree = $('#imageThree .afCloudinary-thumbnail a').attr('href');*/

      // // Send email to huntrs
      /*Meteor.call('sendEmail', {
        to: 'ikeewell@gmail.com, sam@onehunted.com',
        from: 'no-reply@huntrs.com',
        subject: userEmail + ' has added a new product, please review',
        text: 'Mailgun is totally awesome for sending emails!',
        html: '<h1>Product Details </h1> <br> <img style="width:100%" src='+ productImage +'> <img style="width:100%" src='+ productImageTwo +'> <img style="width:100%" src='+ productImageTwo +'> <h2> Product Title: </h2> <p>' + productName + '</p> <br> <h2>Product Price: </h2> <p>' + productPrice +
              '</p> <br> <h2> Product Description: </h2> <p>' + productDesc + ' </p> <br> <h2> Product Condition: </h2> <p>' + productCondition + '</p>'
              + ' </p> <br> <h2> Product Size: </h2> <p>' + productSize + '</p>' + ' </p> <br> <h2> Product Color: </h2> <p>' + productColor + '</p>'
              + ' </p> <br> <h2> Product Category: </h2> <p>' + productCategory + '</p> <br> <h2> User ID: </h2> <p>' + Meteor.userId() + '</p>'
      });*/

      // Send email to user
      /*Meteor.call('sendEmail', {
        to: Meteor.user().emails[0].address,
        from: 'no-reply@huntrs.com',
        subject: 'Thank you for adding a product!',
        text: 'Mailgun is totally awesome for sending emails!',
        html: '<table width="100%" bgcolor="#FFF" cellpadding="0" cellspacing="0" border="0">'+
        '    <tbody>'+
        '        <tr>'+
        '            <td style="padding:40px 0;">'+
        '                <!-- begin main block -->'+
        '                <table cellpadding="0" cellspacing="0" width="608" border="0" align="center">'+
        '                    <tbody>'+
        '                        <tr>'+
        '                            <td>'+
        '                                <!-- begin wrapper -->'+
        '                                <table cellpadding="0" cellspacing="0" border="0" width="100%">'+
        '                                    <tbody>'+
        '                                        <tr>'+
        '                                            <td width="8" height="4" colspan="2" style="background:url(http://demo.artlance.ru/email/shadow-top-left.png) no-repeat 100% 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td height="4" style="background:url(http://demo.artlance.ru/email/shadow-top-center.png) repeat-x 0 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="8" height="4" colspan="2" style="background:url(http://demo.artlance.ru/email/shadow-top-right.png) no-repeat 0 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                        '+
        '                                        <tr>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-left-top.png) no-repeat 100% 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td colspan="3" rowspan="3" bgcolor="#FFFFFF" style="padding:0 0 30px;">'+
        '                                                <!-- begin content -->'+
        '                                                <p style="margin:2em 30px 33px; text-align:center; text-transform:uppercase; font-size:24px; line-height:30px; font-weight:bold; color:#484a42;">'+
        '                                                    Thank you for your interest in listing your product on HUNTRS. Our team will now review your product and decide if it meets our quality and condition standards. We want to ensure that items listed on our app are of high-quality and interest to our fellow HUNTRS. You will be informed shortly if your product has made the cut.'+
        '                                                </p>'+
        '                                                <h3 style="margin:2em 30px 33px; text-align:center; line-height:30px; font-weight:bold; color:#484a42;">We will be in touch with you soon! Happy HUNTING! </h3>'+
        '                                                <!-- begin articles -->'+
        '                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">'+
        '                                                    <tbody>'+
        '                                                        <tr valign="top">'+
        '                                                            <td width="30"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                                            <td colspan="3">'+
        '                                                                <a style="display:block; margin:0 0 14px;" href="http://huntrsapp-s.herokuapp.com/"><img src="http://huntrsapp-s.herokuapp.com/resources/skate.jpg" width="540" height="auto" alt="More" style="display:block; margin:0; border:0; background:#eeeeee;"></a>'+
        '                                                                <p style="font-size:2em; font-weight:bold; color:#000; margin:0 0 5px;"><a href="http://huntrsapp-s.herokuapp.com/products">In the meantime checkout some of the already listed products here at Huntrs</a></p>'+
        '                                                            </td>'+
        '                                                            <td width="30"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                                        </tr>'+
        '                                                    </tbody>'+
        '                                                <!-- end content --> '+
        '                                            </td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-right-top.png) no-repeat 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                        '+
        '                                        '+
        '                                        <tr>'+
        '                                            <td width="4" style="background:url(http://demo.artlance.ru/email/shadow-left-center.png) repeat-y 100% 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" style="background:url(http://demo.artlance.ru/email/shadow-right-center.png) repeat-y 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                        '+
        '                                        <tr> '+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-left-bottom.png) repeat-y 100% 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-right-bottom.png) repeat-y 0 100%;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                 '+
        '                                        <tr>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-corner-left.png) no-repeat 100% 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-left.png) no-repeat 100% 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-center.png) repeat-x 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-right.png) no-repeat 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                            <td width="4" height="4" style="background:url(http://demo.artlance.ru/email/shadow-bottom-corner-right.png) no-repeat 0 0;"><p style="margin:0; font-size:1px; line-height:1px;"> </p></td>'+
        '                                        </tr>'+
        '                                    </tbody>'+
        '                                </table>'+
        '                                <!-- end wrapper-->'+
        ''+
        '                            </td>'+
        '                        </tr>'+
        '                    </tbody>'+
        '                </table>'+
        '                <!-- end main block -->'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table>'
      });*/
    }
});
