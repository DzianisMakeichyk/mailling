'use strict';

var Handlebars = require('gulp-compile-handlebars').Handlebars;

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
        '<td align="' + align + '" height="' + height_btn + '" width="'+ width_btn + '" bgcolor="' + bg_color + '" style="-webkit-border-radius:'+ border_radius + ';-moz-border-radius:' + border_radius + ';border-radius:'+ border_radius +'px;border-bottom: 3px solid #'+ border_color +';font-weight:'+ font_weight +';font-family:Arial,sans-serif,;color:#'+ text_color +';text-transform:'+ text_transform +';"mc:edit="6">' +
        '<a href="' + url + '123" style="color:#' + text_color + ';font-size:' + font_size + 'px;text-decoration:none; line-height:' + font_size + 'px;">' + text + '</a>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';

    return new Handlebars.SafeString(result);
});
