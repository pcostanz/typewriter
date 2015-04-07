'use strict';

angular.module('typewritertv')
    .directive('typewriter', function($localStorage) {
        return {
            'restrict'    : 'E',
            'replace'     : true,
            'templateUrl' : 'app/components/typewriter/typewriter.html',
            'link'        : function(scope) {
                scope.$storage = $localStorage;

                if (scope.$storage && scope.$storage.content.length === 0) {
                    scope.$storage.content = 'typewriter.tv/';
                }
            }
        };
    });
