'use strict';

var Handlebars = require('gulp-compile-handlebars').Handlebars;

Handlebars.registerHelper('headerPic', function(text) {
    text = Handlebars.escapeExpression(text);

    var result ='' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff"mc:repeatable="module4">' +
          '<tbody>' +
            '<tr>' +
              '<td width="100%" valign="top" align="center">' +
                '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile">' +
                  '<tbody>' +
                    '<tr>' +
                      '<td align="center">' +
                        '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full">' +
                          '<tbody>' +
                            '<tr>' +
                              '<td width="100%" align="center">' +
                                '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="full">' +
                                  '<tbody>' +
                                    '<tr>' +
                                      '<td width="100%" height="35"></td>' +
                                    '</tr>' +
                                  '</tbody>' +
                                '</table>' +
        '<!-- Image 600px -->' +
                                '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="full">' +
                                  '<tbody>' +
                                    '<tr>' +
                                      '<td align="center" width="100%" style="text-align: center; line-height: 1px;" class="image600">' +
                                        '<a href="#" style="text-decoration: none;"><img src="images/header_image.png" width="600" alt="" border="0" class="hover" mc:edit="5"></a>' +
                                      '</td>' +
                                    '</tr>' +
                                  '</tbody>' +
                                '</table>' +
                              '</td>' +
                            '</tr>' +
                          '</tbody>' +
                        '</table>' +
                      '</td>' +
                    '</tr>' +
                  '</tbody>' +
                '</table>' +
              '</td>' +
            '</tr>' +
          '</table>';

    return new Handlebars.SafeString(result);
});
