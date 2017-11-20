// https://gist.github.com/fyrebase/4604f540bc4a329ff3bfde225775d39e
'use strict';

exports.type = 'full';

exports.active = true; //have to be true !

exports.description = 'removes width and height in presence of viewBox';

/**
 * Convert width/height to viewBox. Remove width/height attributes when a viewBox attribute converted.
 *
 * @author Kirk Bentley / Fyrebase
 */
exports.fn = function(data) {

    var svg = data.content[0];

    if (svg.isElem('svg')) {
        svg.addAttr({
            name: 'viewBox',
            value: '0 0 ' + svg.attr('width').value + ' ' + svg.attr('height').value,
            prefix: '',
            local: 'class'
        });

        svg.removeAttr('width');
        svg.removeAttr('height');
    }

    return data;
};
