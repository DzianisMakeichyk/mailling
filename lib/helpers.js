'use strict';

var Handlebars = require('gulp-compile-handlebars').Handlebars;

exports.makeButton = function(text, url, width_btn, color_btn) {
    text = Handlebars.Utils.escapeExpression(text);
    url = Handlebars.Utils.escapeExpression(url);
    width_btn = Handlebars.Utils.escapeExpression(width_btn);
    color_btn = Handlebars.Utils.escapeExpression(color_btn);

    var theButton = '<table border="0" cellpadding="0" cellspacing="0" align="left" class="buttonScale">' +
        ' <tbody>' +
        ' <tr>' +
        ' <td align="center" height="36" width=' + width_btn + ' bgcolor=' + color_btn + ' style="-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; padding-left: 20px; padding-right: 20px; font-weight: 700; font-family: Arial, sans-serif,; color: #ffffff; text-transform: uppercase;" mc:edit="6"> ' +
        '<a href="' + url +'" style="color: #ffffff; font-size: 12px; text-decoration: none; line-height: 28px;">'+ text +'</a>' +
        ' </td>' +
        ' </tr> ' +
        '</tbody> ' +
        '</table>';

    return new Handlebars.SafeString(theButton);
}
