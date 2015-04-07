'use strict';

angular.module('typewritertv')
    .directive('focusFirst', function($timeout) {
        return {
            'restrict'    : 'A',
            'replace'     : true,
            'link'        : function(scope, elem) {
                $timeout(function() {
                    elem[0].focus();
                }, 100);
            }
        };
    });
