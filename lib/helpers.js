'use strict';

var Handlebars = require('gulp-compile-handlebars').Handlebars;
//`````````````````````````````````````````````````````````````````````Button`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('makeButton', function(font_size, text_color, align, font_weight, text_transform, width_btn, height_btn, bg_color, border_color, border_radius, url, options) {
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

    var result =''+
    '<!-- Button -->' +
        '<table border="0" cellpadding="0" cellspacing="0" align="' + align + '" class="buttonScale">' +
          '<tbody>' +
            '<tr>' +
              '<td align="' + align + '" height="' + height_btn + '" width="'+ width_btn + '" bgcolor="' + bg_color + '" style="-webkit-border-radius:'+ border_radius + 'px;-moz-border-radius:' + border_radius + 'px;border-radius:'+ border_radius +'px;border-bottom: 3px solid #'+ border_color +';font-weight:'+ font_weight +';font-family:Arial,sans-serif,;color:#'+ text_color +';text-transform:'+ text_transform +';text-align: center;"mc:edit="6">' +
                '<a href="' + url + '/?utm_content=btn_apl" style="color:#' + text_color + ';font-size:' + font_size + 'px;text-decoration:none; line-height:' + font_size + 'px; text-align: center;">' + options.fn(this) + '</a>' +
              '</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
        '<!-- End Button -->';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Header Pic`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('headerPic', function(header_link, header_url, header_alt) {
    header_link = Handlebars.escapeExpression(header_link),
    header_url = Handlebars.escapeExpression(header_url),
    header_alt = Handlebars.escapeExpression(header_alt);

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
        '<a href="' + header_link + '/?utm_content=top_pic" style="text-decoration: none;"><img src="' + header_url + '" width="600" alt="' + header_alt + '" border="0" class="hover" mc:edit="5"></a>' +
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
Handlebars.registerHelper('textMain', function(font_size, text_color, text_align, font_weight, text_width, text_transform, options) {
    font_size = Handlebars.escapeExpression(font_size),
    font_weight = Handlebars.escapeExpression(font_weight),
    text_color = Handlebars.escapeExpression(text_color),
    text_width = Handlebars.escapeExpression(text_width),
    text_align = Handlebars.escapeExpression(text_align),
    text_transform = Handlebars.escapeExpression(text_transform);

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
                                      '<td valign="middle" width="100%" style="font-family: Arial, sans-serif; display:block;margin:auto; max-width:' + text_width + '; text-align:' + text_align + '; font-size:' + font_size + 'px; color: #' + text_color +'; line-height: 140%; font-weight: ' + font_weight + '; text-transform:' + text_transform + '" mc:edit="7">' +
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

//`````````````````````````````````````````````````````````````````````Space`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('space', function(space_height) {
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
Handlebars.registerHelper('shortLine', function(line_width, line_height, line_color) {
    line_width = Handlebars.escapeExpression(line_width),
    line_height = Handlebars.escapeExpression(line_height),
    line_color = Handlebars.escapeExpression(line_color);

    var result ='' +
        '<!-- Short Line -->' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; text-align: center;" class="fullCenter">' +
        '<tbody>' +
          '<tr>' +
            '<td width="100%" height="' + line_height + '" align="center">' +
              '<table width="' + line_width + '" align="center" border="0" cellpadding="0" cellspacing="0">' +
                '<tbody>' +
                  '<tr>' +
                    '<td height="' + line_height + '" width="' + line_width + '" bgcolor="#' + line_color + '" style="font-size: 1px; line-height: 1px;">&nbsp;</td>' +
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
Handlebars.registerHelper('baner', function(baner_link, baner_url, baner_alt, baner_utm) {
    baner_link = Handlebars.escapeExpression(baner_link),
    baner_url = Handlebars.escapeExpression(baner_url),
    baner_alt = Handlebars.escapeExpression(baner_alt),
    baner_utm = Handlebars.escapeExpression(baner_utm);

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
        '<a href="' + baner_link + baner_utm + '" style="text-decoration: none;"><img src="' + baner_url + '" width="600" alt="' + baner_alt + '" border="0" class="hover" mc:edit="5"></a>' +
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
Handlebars.registerHelper('block', function(col_left, col_center, col_right, options) {
    col_left = Handlebars.escapeExpression(col_left),
    col_center = Handlebars.escapeExpression(col_center),
    col_right = Handlebars.escapeExpression(col_right);

    return new Handlebars.SafeString(
        '<!-- Block -->' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; width: 100% !important; line-height: 100% !important; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">' +
        '<tr style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<td width="600" valign="top" align="center" style="border-collapse: collapse; width: 100%; max-width: 600px; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; width: 100% !important; line-height: 100% !important; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left;">' +
        '<tr style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<td width="100%" align="left" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; width: 100% !important; line-height: 100% !important; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left;">' +
        '<tr style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<td width="' + col_left + '%" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
        '<!--[if gte mso 9]> <![endif]-->' +
        '</td>' +
        '<td width="' + col_center + '%" align="left" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">'
        + options.fn(this)
        + '</td>' +
        '<td width="' + col_right + '%" style="border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0;">' +
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

//`````````````````````````````````````````````````````````````````````List`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('list', function(list_aligh, dot_color, dot_size, font_color, font_size, font_weight, list_width, context, options) {
    list_aligh = Handlebars.escapeExpression(list_aligh),
    dot_color = Handlebars.escapeExpression(dot_color),
    dot_size = Handlebars.escapeExpression(dot_size),
    font_color = Handlebars.escapeExpression(font_color),
    font_size = Handlebars.escapeExpression(font_size),
    font_weight = Handlebars.escapeExpression(font_weight),
    list_width = Handlebars.escapeExpression(list_width);

    var ret = '' +
    '<!-- List -->' +
    '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="' + list_aligh + '" class="full" >' +
    '<tbody>' +
    '<tr>' +
    '<td width="100%" align="' + list_aligh + '" style="text-align:' + list_aligh + ';">' +
    '<ul style="margin:0;padding: 0">';

    for(var i=0, j=context.length; i<j; i++) {
        ret = ret + '<li align="' + list_aligh + '" style="margin: auto; max-width:' + list_width + ';text-align: ' + list_aligh + ';padding: 0; white-space: normal; color: #' + dot_color + '; line-height: 140%; font-size: ' + dot_size + 'px;list-style-position: inside;">' +
            '<span style="margin: auto; max-width:' + list_width + ';color: #' + font_color + '; vertical-align: middle; font-weight: ' + font_weight + '; font-size: ' + font_size + 'px">' + options.fn(context[i]) + '</span></li>';
    }

    return ret + '' +
        '</ul>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<!-- End List -->';
});

//`````````````````````````````````````````````````````````````````````Context`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('context', function(top_height, bottom_height, options) {
    top_height = Handlebars.escapeExpression(top_height),
    bottom_height = Handlebars.escapeExpression(bottom_height);

    return new Handlebars.SafeString(
        '<!-- Context -->' +
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
        '<td width="100%" height="' + top_height +'">' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="full">' +
        '<tbody' +
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
        '<td width="100%" height="' + bottom_height + '">' +
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
        '</table>'+
        '<!-- Context end -->');
});

//`````````````````````````````````````````````````````````````````````Columns`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('column', function(column_width, column_side, options) {
    column_width = Handlebars.escapeExpression(column_width),
    column_side = Handlebars.escapeExpression(column_side);

    return new Handlebars.SafeString(
        '<!-- Column -->' +
        '<table width="' + column_width + '" border="0" cellpadding="0" cellspacing="0" align="' + column_side + '" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" class="fullCenter">' +
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

//`````````````````````````````````````````````````````````````````````Context height`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('context_height', function(context_height) {
    context_height = Handlebars.escapeExpression(context_height);

    var result ='' +
        '<!-- Context height -->' +
        '<tr>' +
        '<td width="100%" height="' + context_height + '">' +
        '</td>' +
        '</tr>' +
        '<!-- End Context height -->';

    return new Handlebars.SafeString(result);
});

//`````````````````````````````````````````````````````````````````````Context text`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('context_text', function(font_size, font_weight, text_color, text_width, text_align, text_transform, options) {
    font_size = Handlebars.escapeExpression(font_size),
    font_weight = Handlebars.escapeExpression(font_weight),
    text_color = Handlebars.escapeExpression(text_color),
    text_width = Handlebars.escapeExpression(text_width),
    text_align = Handlebars.escapeExpression(text_align),
    text_transform = Handlebars.escapeExpression(text_transform);

    return new Handlebars.SafeString(
        '<!-- Context text -->' +
        '<tr>' +
        '<td valign="middle" width="100%" style="text-align:' + text_align + '; font-family:Arial, sans-serif; font-size:' + font_size + 'px; color: #' + text_color + '; line-height: 140%; font-weight:' + font_weight + ';max-width:' + text_width + ';text-transform:' + text_transform + ';" class="fullCenter" mc:edit="51">'
        + options.fn(this) +
        '</td>' +
        '</tr>' +
        '<!-- End Context text -->');
});

//`````````````````````````````````````````````````````````````````````Context link`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('context_link', function(context_link, font_size, font_weight, text_color, text_align, text_transform, text_decoration, options) {
    context_link = Handlebars.escapeExpression(context_link),
    font_size = Handlebars.escapeExpression(font_size),
    font_weight = Handlebars.escapeExpression(font_weight),
    text_color = Handlebars.escapeExpression(text_color),
    text_align = Handlebars.escapeExpression(text_align),
    text_decoration = Handlebars.escapeExpression(text_decoration),
    text_transform = Handlebars.escapeExpression(text_transform);

    return new Handlebars.SafeString(
        '<!-- Context link -->' +
        '<tr>' +
    '<td valign="middle" width="100%" style="text-align: ' + text_align + '; font-family: Arial, sans-serif,; font-size: ' + font_size + 'px; color: #' + text_color + '; line-height: 140% font-weight: ' + font_weight + ';" class="fullCenter" mc:edit="52">' +
    '<a href="' + context_link + '" style="text-decoration: ' + text_decoration + '; color: #' + text_color + ';text-transform:' + text_transform + '">'
        + options.fn(this) +
        '</a>' +
        '</td>' +
        '</tr>' +
        '<!-- End Context link -->');
});

//`````````````````````````````````````````````````````````````````````Context img`````````````````````````````````````````````````````````````````````
Handlebars.registerHelper('context_img', function(img_width, img_height, img_align, img_src, img_alt, img_link ) {
    img_width = Handlebars.escapeExpression(img_width),
    img_height = Handlebars.escapeExpression(img_height),
    img_align = Handlebars.escapeExpression(img_align),
    img_src = Handlebars.escapeExpression(img_src),
    img_alt = Handlebars.escapeExpression(img_alt),
    img_link = Handlebars.escapeExpression(img_link);

    var result ='' +
        '<!-- Context img -->' +
        '<tr>' +
        '<td width="100%" align="' + img_align + '" style="text-align:' + img_align + ';">' +
        '<a href="' + img_link + '" class="rotator" style="text-decoration: none;">' +
        '<img src="' + img_src + '" alt="' + img_alt + '" border="0" width="' + img_width + '" height="' + img_height + '" class="hover" mc:edit="8" />' +
        '</a>' +
        '</td>' +
        '</tr>' +
        '<!-- End Context img -->';

    return new Handlebars.SafeString(result);
});