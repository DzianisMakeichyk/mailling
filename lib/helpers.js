'use strict';

var Handlebars = require('gulp-compile-handlebars').Handlebars;
//`````````````````````````````````````````````````````````````````````Button`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('makeButton', function(context, options) {
    var font_size = options.hash.font_size ? options.hash.font_size : 16;
    var display = options.hash.display ? options.hash.display : 0;
    var weight = options.hash.weight ? options.hash.weight : 400;
    var href = options.hash.href;
    var width = options.hash.width_btn ? options.hash.width_btn : 260;
    var height = options.hash.height_btn ? options.hash.height_btn : 50;
    var btn_color = options.hash.btn_color ? options.hash.btn_color : 'fe3267';
    var border_color = options.hash.border_color ? options.hash.border_color : 'cb2852';
    var color = options.hash.text_color ? options.hash.text_color : 'fff';
    var align = options.hash.align ? options.hash.align : center;

    var result =''+
    '<!-- Button -->' +
        '<center style="display:' + display + ';margin-bottom: 5px">' +
        '<div>' +
        '<!--[if mso]>' +
        '<v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="' + href + '/?utm_content=btn_apl" style="border-radius:3px;border-bottom:3px solid #' + border_color + ';height:' + height + 'px;font-size:' + font_size + 'px;v-text-anchor:middle;width:' + width + 'px;font-weight: ' + weight + ';border-radius:3px;font-family: Arial, sans-serif;" stroke="f" fillcolor="#' + btn_color + '">' +
        '<w:anchorlock/>' +
        '<center>' +
        '<![endif]-->' +
        '<a href="' + href + '/?utm_content=btn_apl" style="border-radius:3px;border-bottom:3px solid #' + border_color + ';background-color:#' + btn_color + ';color:#' + color + ';display:block;font-family: Arial, sans-serif; font-size:' + font_size + 'px;line-height:40px;text-align:center;text-decoration:none;width:' + width + 'px;-webkit-text-size-adjust:none;font-weight: ' + weight + ';margin-bottom: 10px;text-transform: uppercase">'
         + options.fn(this) +
        '</a>' +
        '<!--[if mso]>' +
        '</center>' +
        '</v:rect>' +
        '<![endif]-->' +
        '</div>' +
        '</center>' +
        '<!-- End Button -->';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Header Pic`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('headerImg', function(options) {
    var href = options.hash.href;
    var src = options.hash.src;
    var alt = options.hash.alt;

    var result ='' +
        '<!-- Header img -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff"mc:repeatable="module4">' +
        '<tbody>' +
        '<tr>' +
        '<td width="100%" valign="top" align="center"  style="border-top:2px solid #fe3267">' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile">' +
        '<tbody>' +
        '<tr>' +
        '<td align="center">' +
        '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="full">' +
        '<tbody>' +
        '<tr>' +
        '<td width="100%" align="center">' +
        '<!-- Image 600px -->' +
        '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="full">' +
        '<tbody>' +
        '<tr>' +
        '<td align="center" width="100%" style="text-align: center; line-height: 1px;" class="image600">' +
        '<a href="' + href + '/?utm_content=top_pic" style="text-decoration: none;"><img src="' + src + '" width="600" alt="' + alt + '" border="0" class="hover" mc:edit="5"></a>' +
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
        '</table>' +
        '<!-- Header img end -->';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Text`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('textMain', function(context, options) {
    var font_size = options.hash.font_size ? options.hash.font_size : 16;
    var weight = options.hash.weight ? options.hash.weight : 400;
    var color = options.hash.color ? options.hash.color : 'fff';
    var max_width = options.hash.max_width ? options.hash.max_width : '100%';
    var text_align = options.hash.text_align ? options.hash.text_align : center;

    var result ='' +
        '<!-- Text -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" class="full" bgcolor="#ffffff"mc:repeatable="module6">' +
          '<tbody>' +
            '<tr>' +
              '<td width="100%" valign="top" align="' + text_align + '">' +
                '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" class="mobile">' +
                  '<tbody>' +
                    '<tr>' +
                      '<td align="' + text_align + '">' +
                        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" class="full">' +
                          '<tbody>' +
                            '<tr>' +
                              '<td width="100%" align="' + text_align + '"> ' +
        '<!-- Centered Title -->' +
                                '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">' +
                                  '<tbody>' +
                                    '<tr>' +
                                      '<td valign="middle" width="100%" style="font-family: Arial, sans-serif; display:block;margin:auto; max-width:' + max_width + '; text-align:' + text_align + '; font-size:' + font_size + 'px; color: #' + color +'; line-height: 140%; font-weight: ' + weight + ';" mc:edit="7">' +
                                        '' + options.fn(this) + '' +
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
          '</table>' +
        '<!-- End Text -->';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Spacer`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('spacer', function(space_height) {
    space_height = Handlebars.escapeExpression(space_height);

    var result ='' +
        '<!-- Space -->' +
    '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff"mc:repeatable="module5">' +
        '<tbody>' +
          '<tr>' +
            '<td width="100%" valign="top" align="center">' +
              '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full">' +
                '<tbody>' +
                  '<tr>' +
                    '<td align="center">' +
        '<!-- Divider -->' +
                      '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full">' +
                        '<tbody>' +
                          '<tr>' +
                            '<td width="100%" height="' + space_height + '"></td>' +
                          '</tr>' +
                        '</tbody>' +
                      '</table>' +
        '<!-- End Divider -->' +
                    '</td>' +
                  '</tr>' +
                '</tbody>' +
              '</table>' +
            '</td>' +
          '</tr>' +
        '</tbody>' +
    '</table>' +
        '<!-- End Space -->';

    return new Handlebars.SafeString(result);
});


//`````````````````````````````````````````````````````````````````````Short Line`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('dash', function(options) {
    var width = options.hash.width;
    var height = options.hash.height;
    var color = options.hash.color;

    var result ='' +
        '<!-- Short Line -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; text-align: center;" class="fullCenter">' +
        '<tbody>' +
          '<tr>' +
            '<td width="100%" height="' + height + '" align="center">' +
              '<table width="' + width + '" align="center" border="0" cellpadding="0" cellspacing="0">' +
                '<tbody>' +
                  '<tr>' +
                    '<td height="' + height + '" width="' + width + '" bgcolor="#' + color + '" style="font-size: 1px; line-height: 1px;">&nbsp;</td>' +
                  '</tr>' +
                '</tbody>' +
              '</table>' +
            '</td>' +
          '</tr>' +
        '</tbody>' +
        '</table>' +
        '<!-- End Short Line -->';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Baner`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('baner', function(options) {
    var href = options.hash.href;
    var src = options.hash.src;
    var alt = options.hash.alt;
    var utm = options.hash.utm;

    var result ='' +
        '<!-- Header img -->' +
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
        '<!-- Image 600px -->' +
        '<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="full">' +
        '<tbody>' +
        '<tr>' +
        '<td align="center" width="100%" style="text-align: center; line-height: 1px;" class="image600">' +
        '<a href="' + href + utm + '" style="text-decoration: none;"><img src="' + src + '" width="600" alt="' + alt + '" border="0" class="hover" mc:edit="5"></a>' +
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
        '</table>' +
        '<!-- Header img end -->';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Block`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('table', function(center, options) {
    center = Handlebars.escapeExpression(center);
    var left = (100 - center)/2;
    var right = (100 - center)/2;

    return new Handlebars.SafeString(
        '<!-- Block -->' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; width: 100% !important; line-height: 100% !important; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">' +
        '<tr style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<td width="600" valign="top" align="center" style="border-collapse: collapse; width: 100%; max-width: 600px; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; width: 100% !important; line-height: 100% !important; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left;">' +
        '<tr style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<td width="100%" align="center" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; width: 100% !important; line-height: 100% !important; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left;">' +
        '<tr style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<td width="' + left + '%" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<!--[if gte mso 9]> <![endif]-->' +
        '</td>' +
        '<td width="' + center + '%" align="center" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">'
        + options.fn(this)
        + '</td>' +
        '<td width="' + right + '%" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<!--[if gte mso 9]> <![endif]-->' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<!-- End Block -->');
});

//`````````````````````````````````````````````````````````````````````List position`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('list_post', function(options) {
    var dot = options.hash.dot ? options.hash.dot : ' • ';
    var dot_color = options.hash.dot_color ? options.hash.dot_color : '000';
    var dot_size = options.hash.dot_size ? options.hash.dot_size : 16;
    var color = options.hash.color ? options.hash.color : '000';
    var font_size = options.hash.font_size ? options.hash.font_size : 16;
    var weight = options.hash.weight ? options.hash.weight : 400;
    var align = options.hash.align ? options.hash.align : center;
    var width = options.hash.width ? options.hash.width : '100%';

    return new Handlebars.SafeString(
        '<!-- List -->' +
        '<p width="15" style="font-size:' + dot_size + 'px;text-align:' + align + '; vertical-align: middle; font-weight: 800; color: #' + dot_color + '; margin: 0; white-space: normal; line-height: 140%; font-family: Arial, sans-serif;">' +
        ' '+ dot +' ' +
        '<span style="margin: 0; text-align:' + align + '; width:' + width + '; white-space: normal; color: #' + color + '; line-height: 140%; font-weight:' + weight + '; font-family: Arial, sans-serif; font-size:' + font_size + 'px;">' +
         options.fn(this) +
        '</span>' +
        '</p>' +
    '<!-- End List -->');
});


//`````````````````````````````````````````````````````````````````````Box`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('box', function(options) {
    var top = options.hash.top;
    var bottom = options.hash.bottom;

    return new Handlebars.SafeString(
        '<!-- Box -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff"mc:repeatable="module19">' +
        '<tbody>' +
        '<tr>' +
        '<td width="100%" valign="top" align="center">' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile">' +
        '<tbody>' +
        '<tr>' +
        '<td align="center">' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full">' +
        '<tbody>' +
        '<tr>' +
        '<td width="100%" height="' + top +'">' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full">' +
        '<tbody>' +
        '<tr>' +
        '<td width="100%" valign="top" align="center">'
        + options.fn(this) +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full">' +
        '<tbody>' +
        '<tr>' +
        '<td width="100%" height="' + bottom + '">' +
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
        '</table>'+
        '<!-- Box end -->');
});

//`````````````````````````````````````````````````````````````````````Columns`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('column', function(options) {
    var width = options.hash.width;

    return new Handlebars.SafeString(
        '<!-- Column -->' +
        '<table class="table1-3" width="' + width + '" align="left" border="0" cellspacing="0" cellpadding="0">' +
        '<tbody>' +
        '<tr>' +
        '<td width="100%">'
        + options.fn(this) +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<!-- Column end -->');
});

//`````````````````````````````````````````````````````````````````````Box height`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('box_height', function(height) {
    height = Handlebars.escapeExpression(height);

    var result ='' +
        '<!-- Box height -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff"mc:repeatable="module19">' +
        '<tr>' +
        '<td width="100%" height="' + height + '">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<!-- End Box height -->';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Box text`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('box_text', function(context, options) {
    var font_size = options.hash.font_size ? options.hash.font_size : 16;
    var weight = options.hash.weight ? options.hash.weight : 400;
    var color = options.hash.color ? options.hash.color : '000';
    var max_width = options.hash.max_width ? options.hash.max_width : '100%';
    var text_align = options.hash.text_align ? options.hash.text_align : center;

    return new Handlebars.SafeString(
        '<!-- Box text -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" class="full" bgcolor="#ffffff"mc:repeatable="module19">'+
        '<tr>' +
        '<td valign="middle" width="100%" style="text-align:' + text_align + '; font-family:Arial, sans-serif; font-size:' + font_size + 'px; color: #' + color + '; line-height: 140%; font-weight:' + weight + ';max-width:' + max_width + '" class="fullCenter" mc:edit="51">'
        + options.fn(this) +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<!-- End Box text -->');
});

//`````````````````````````````````````````````````````````````````````Box link`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('box_link', function(options) {
    var href = options.hash.href;
    var font_size = options.hash.font_size ? options.hash.font_size : 16;
    var weight = options.hash.weight ? options.hash.weight : 400;
    var color = options.hash.color ? options.hash.color : '000';
    var align = options.hash.align ? options.hash.align : center;

    return new Handlebars.SafeString(
        '<!-- Box link -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + align + '"> ' +
        '<tr>' +
        '<td valign="middle" width="100%" align="' + align + '" style="text-align: ' + align + '; font-family: Arial, sans-serif; font-size: ' + font_size + 'px; color: #' + color + '; line-height: 140% font-weight: ' + weight + ';" class="fullCenter" mc:edit="52">' +
        '<a href="' + href + '" style="color: #' + color + ';">'
        + options.fn(this) +
        '</a>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<!-- End Box link -->');
});

//`````````````````````````````````````````````````````````````````````Box img`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('box_img', function(options) {
    var width = options.hash.width ? options.hash.width : '100%';
    var height = options.hash.height ? options.hash.height : '100%';
    var align = options.hash.align ? options.hash.align : center;
    var src = options.hash.src;
    var alt = options.hash.alt;
    var href = options.hash.href;

    var result ='' +
        '<!-- Box img -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff"mc:repeatable="module19">' +
        '<tr>' +
        '<td width="100%" valign="middle" align="' + align + '" style="text-align:' + align + ';">' +
        '<a href="' + href + '" class="rotator" style="text-decoration: none;">' +
        '<img src="' + src + '" alt="' + alt + '" border="0" width="' + width + '" height="' + height + '" mc:edit="8" />' +
        '</a>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<!-- End Box img -->';

    return new Handlebars.SafeString(result);
});
