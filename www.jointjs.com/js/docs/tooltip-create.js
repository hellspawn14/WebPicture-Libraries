(function() {

    new joint.ui.Tooltip({
        target: '.top-tooltip',
        content: 'Top directed tooltip.',
        top: '.top-tooltip',
        direction: 'top'
    });

    new joint.ui.Tooltip({
        target: '.left-tooltip',
        content: 'Left directed tooltip.',
        left: '.left-tooltip',
        direction: 'left'
    });

    new joint.ui.Tooltip({
        target: '.right-tooltip',
        content: 'Right directed tooltip.',
        right: '.right-tooltip',
        direction: 'right'
    });

    new joint.ui.Tooltip({
        target: '.bottom-tooltip',
        content: 'Bottom directed tooltip.',
        bottom: '.bottom-tooltip',
        direction: 'bottom'
    });

    new joint.ui.Tooltip({
        target: '.after-tooltip',
        content: 'This tooltip appears AFTER the vertical line.',
        left: '.vertical-line',
        direction: 'left'
    });

    new joint.ui.Tooltip({
        target: '.html-tooltip',
        content: '<h4>HTML Tooltip</h4> <img src="/images/logo.png" width="30" style="position: absolute; top: 2px; right: 2px;"/><hr/><b>JointJS</b> tooltips can contain arbitrary HTML.',
        direction: 'left'
    });
    
}())