var fs          = require('fs');
var path        = require('path');
var fontfacegen = require('fontfacegen');

var source = 'src/';
var dest   = './';
var fonts  = fs.readdirSync(source);

for (var i = fonts.length - 1; i >= 0; i--) {
    var font = fonts[i];
    var extension = path.extname(font);
    var fontname = path.basename(font, extension);

    // Test with embedded ttf
    if (extension == '.ttf' || extension == '.otf') {
        fontfacegen({
            source: path.join(source, font),
            dest: dest,
            css_fontpath: '../',
            // embed: ['ttf'],
            // subset: 'abcdef',
            collate: true
        });
    }
};
