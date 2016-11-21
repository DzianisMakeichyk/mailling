'use strict';

var Handlebars = require('gulp-compile-handlebars').Handlebars;
//`````````````````````````````````````````````````````````````````````Button`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('makeButton', function(text, font_size, font_weight, text_transform, url, width_btn, height_btn, bg_color, border_color, border_radius, text_color, align) {
    text = Handlebars.escapeExpression(text),
        font_size = Handlebars.escapeExpression(font_size),
        font_weight = Handlebars.escapeExpression(font_weight),
        text_transform = Handlebars.escapeExpression(text_transform),
        url = Handlebars.escapeExpression(url),
        width_btn = Handlebars.escapeExpression(width_btn),
        height_btn = Handlebars.escapeExpression(height_btn),
        bg_color = Handlebars.escapeExpression(bg_color),
        border_color = Handlebars.escapeExpression(border_color),
        border_radius = Handlebars.escapeExpression(border_radius),
        text_color = Handlebars.escapeExpression(text_color),
        align = Handlebars.escapeExpression(align);

    var result ='' +
        '<table border="0" cellpadding="0" cellspacing="0" align="' + align + '" class="buttonScale">' +
          '<tbody>' +
            '<tr>' +
              '<td align="' + align + '" height="' + height_btn + '" width="'+ width_btn + '" bgcolor="' + bg_color + '" style="-webkit-border-radius:'+ border_radius + 'px;-moz-border-radius:' + border_radius + 'px;border-radius:'+ border_radius +'px;border-bottom: 3px solid #'+ border_color +';font-weight:'+ font_weight +';font-family:Arial,sans-serif,;color:#'+ text_color +';text-transform:'+ text_transform +';text-align: center;"mc:edit="6">' +
                '<a href="' + url + '123" style="color:#' + text_color + ';font-size:' + font_size + 'px;text-decoration:none; line-height:' + font_size + 'px; text-align: center;">' + text + '</a>' +
              '</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Header Pic`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('headerPic', function(link_header, url_header, alt_header) {
    link_header = Handlebars.escapeExpression(link_header),
    url_header = Handlebars.escapeExpression(url_header),
    alt_header = Handlebars.escapeExpression(alt_header);

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
        '<td align="center" width="100%" style="text-align: center; line-height: 1px;" class="image600" style="border-top:2px solid #fe3267">' +
        '<a href="' + link_header + '/?utm_content=top_pic" style="text-decoration: none;"><img src="' + url_header + '" width="600" alt="' + alt_header + '" border="0" class="hover" mc:edit="5"></a>' +
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
Handlebars.registerHelper('textMain', function(font_size, font_weight, text_color, text_width, text_align, text_transform, text_main) {
    font_size = Handlebars.escapeExpression(font_size),
    font_weight = Handlebars.escapeExpression(font_weight),
    text_color = Handlebars.escapeExpression(text_color),
    text_width = Handlebars.escapeExpression(text_width),
    text_align = Handlebars.escapeExpression(text_align),
    text_transform = Handlebars.escapeExpression(text_transform),
    text_main = Handlebars.escapeExpression(text_main);

    var result ='<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" class="full" bgcolor="#ffffff"mc:repeatable="module6">' +
          '<tbody>' +
            '<tr>' +
              '<td width="100%" valign="top" align="' + text_align + '">' +
                '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" class="mobile">' +
                  '<tbody>' +
                    '<tr>' +
                      '<td align="' + text_align + '">' +
                        '<table width="600" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" class="full">' +
                          '<tbody>' +
                            '<tr>' +
                              '<td width="100%" align="' + text_align + '"> ' +
        '<!-- Centered Title -->' +
                                '<table width="600" border="0" cellpadding="0" cellspacing="0" align="' + text_align + '" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">' +
                                  '<tbody>' +
                                    '<tr>' +
                                      '<td valign="middle" width="100%" style="font-family: Helvetica, Arial, sans-serif; display:block;margin:auto; max-width:' + text_width + '; text-align:' + text_align + '; font-size:' + font_size + 'px; color: #' + text_color +'; line-height: 140%; font-weight: ' + font_weight + '; text-transform:' + text_transform + '" mc:edit="7">' +
                                        '' + text_main + '' +
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

//`````````````````````````````````````````````````````````````````````Space`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('space', function(space_height) {
    space_height = Handlebars.escapeExpression(space_height);

    var result ='<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full" bgcolor="#ffffff"mc:repeatable="module5">' +
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
    '</table>';

    return new Handlebars.SafeString(result);
});


//`````````````````````````````````````````````````````````````````````Short Line`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('shortLine', function(line_width, line_height, line_color) {
    line_width = Handlebars.escapeExpression(line_width),
    line_height = Handlebars.escapeExpression(line_height),
    line_color = Handlebars.escapeExpression(line_color);

    var result ='<table width="600" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; text-align: center;" class="fullCenter">' +
        '<tbody>' +
          '<tr>' +
            '<td width="100%" height="' + line_height + '" align="center">' +
              '<table width="' + line_width + '" align="center" border="0" cellpadding="0" cellspacing="0">' +
                '<tbody>' +
                  '<tr>' +
                    '<td height="' + line_height + '" width="100%" bgcolor="#' + line_color + '" style="font-size: 1px; line-height: 1px;">&nbsp;</td>' +
                  '</tr>' +
                '</tbody>' +
              '</table>' +
            '</td>' +
          '</tr>' +
        '</tbody>' +
        '</table>';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Baner`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('baner', function(link_baner, url_baner, alt_baner, utm_baner) {
    link_baner = Handlebars.escapeExpression(link_baner),
    url_baner = Handlebars.escapeExpression(url_baner),
    alt_baner = Handlebars.escapeExpression(alt_baner),
    utm_baner = Handlebars.escapeExpression(utm_baner);

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
        '<a href="' + link_baner + utm_baner + '" style="text-decoration: none;"><img src="' + url_baner + '" width="600" alt="' + alt_baner + '" border="0" class="hover" mc:edit="5"></a>' +
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