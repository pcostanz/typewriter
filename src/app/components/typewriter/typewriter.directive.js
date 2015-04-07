'use strict';

angular.module('typewritertv')
    .directive('typewriter', function($localStorage, $timeout) {
        return {
            'restrict'    : 'E',
            'replace'     : true,
            'templateUrl' : 'app/components/typewriter/typewriter.html',
            'link'        : function(scope) {
                scope.$storage = $localStorage;

                $timeout(function() {
                    if (scope.$storage && scope.$storage.content.length === 0) {
                        scope.$storage.content = 'typepen.com/';
                    }
                });
            }
        };
    });
