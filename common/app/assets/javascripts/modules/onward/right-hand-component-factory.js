define( [
    'lodash/objects/assign',

    'common/modules/onward/right-most-popular',
    'common/modules/onward/right-recommended'
], function (
    extend,

    RightMostPopular,
    RightRecommendedForYou
){

    function RightHandComponentFactory(mediator, config) {
        this.config = extend(this.config, config);
        this.mediator = mediator;
        this.renderRightHandComponent();
    }

    RightHandComponentFactory.recommended = false;
    RightHandComponentFactory.setRecommenedForYou = function() {
        RightHandComponentFactory.recommended = true;
    };

    RightHandComponentFactory.prototype.renderRightHandComponent = function() {

        if(RightHandComponentFactory.recommended) {
            var rmd = new RightRecommendedForYou(this.mediator,  {type: 'image', maxTrails: 5});
        } else {
            var rmp = new RightMostPopular(this.mediator, {type: 'image', maxTrails: 5});
        }
    };

    return RightHandComponentFactory;

});                                             l