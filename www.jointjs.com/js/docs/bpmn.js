var graph = new joint.dia.Graph;

var paper = new joint.dia.Paper({

    el: $('#paper-holder-overview'),
    width: 1000,
    height: 600,
    gridSize: 10,
    model: graph,
    perpendicularLinks: true

}).on('cell:pointerdblclick', function(cellView, evt) {

    var subProcess = $(evt.target).attr('data-sub-process');

    if (subProcess) {
        alert(subProcess);
    }
});

var startEvent = new joint.shapes.bpmn.Event({
    position: { x: 150, y: 150 },
    eventType: 'start',
    icon: 'message'
});

var endEvent = new joint.shapes.bpmn.Event({
    position: { x: 850, y: 160 },
    eventType: 'end'
});

var intermediateEvent = new joint.shapes.bpmn.Event({
    position: { x: 600, y: 400 },
    eventType: 'intermediate',
    icon: 'message'
});

var gateway = new joint.shapes.bpmn.Gateway({
    position: { x: 500, y: 150 },
    icon: 'cross'
});

var task1 = new joint.shapes.bpmn.Activity({
    position: { x: 300, y: 130 },
    content: 'Task Example',
    icon: 'user'
});

var task2 = new joint.shapes.bpmn.Activity({
    position: { x: 800, y: 380 },
    content: 'Task Example',
    icon: 'message'
});

var subprocess = new joint.shapes.bpmn.Activity({
    position: { x: 280, y: 380 },
    size: { width: 150, height: 100 },
    content: 'Task With Sub-process Example',
    subProcess: 'mySubprocess'
});

var annotation = new joint.shapes.bpmn.Annotation({
    position: { x: 650, y: 60 },
    size: { width: 150, height: 100 },
    attrs: {
        rect: {
            fill: '#FFF',
            'fill-opacity': .4
        }
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
});

var group = new joint.shapes.bpmn.Group({
    position: { x: 250, y: 100 },
    size: { width: 200, height: 420 },
    attrs: {
        text: {
            text: 'Group Example',
            fill: '#333'
        },
        '.label-rect': {
            fill: 'green',
            opacity: 0.2,
            stroke: 'none',
            rx: 5,
            ry: 5
        }
    },
    z: -2
});

var data = new joint.shapes.bpmn.DataObject({
    position: { x: 140, y: 390 },
    attrs: { text: { text: 'Data Object' }}
});

var pool = new joint.shapes.bpmn.Pool({
    position: { x: 50, y: 50 },
    size: { width: 900, height: 500 },
    attrs: {
        '.myClass .lane-body': {
            fill: 'yellow',
            'fill-opacity': 0.2
        },
        '.header': {
            fill:'#16A',
            'fill-opacity': 0.3
        },
        '.lane-header': {
            fill:'#16A',
            'fill-opacity': 0.1
        },
        '.blackbox-label': {
            visibility: 'hidden'
        }
    },
    lanes: { label: 'pool', sublanes: [
        { label: 'lane 1', name: 'myClass' },
        { label: 'lane 2' /* sublanes: [] */ }
    ]},
    z: -3
});

var flow1 = new joint.shapes.bpmn.Flow({
    source: { id: startEvent.id },
    target: { id: task1.id },
    z: -1
});

var flow2 = new joint.shapes.bpmn.Flow({
    source: { id: gateway.id },
    target: { id: subprocess.id },
    flowType: 'default',
    vertices: [{ x: 540, y: 430 }],
    z: -1
});

var flow3 = new joint.shapes.bpmn.Flow({
    source: { id: annotation.id },
    target: { id: gateway.id },
    flowType: 'message',
    z: -1
});

var flow4 = new joint.shapes.bpmn.Flow({
    source: { id: subprocess.id },
    target: { id: data.id },
    flowType: 'association',
    z: -1
});

var flow5 = new joint.shapes.bpmn.Flow({
    source: { id: task1.id },
    target: { id: gateway.id },
    flowType: 'conditional',
    z: -1
});

var flow6 = new joint.shapes.bpmn.Flow({
    source: { id: gateway.id },
    target: { id: intermediateEvent.id },
    labels: [{ attrs: { text: { text: 'option 2' }}, position: '30' }],
    vertices: [{ x: 540, y: 100 }, { x: 630, y: 100 }],
    z: -1
});

var flow7 = new joint.shapes.bpmn.Flow({
    source: { id: gateway.id },
    target: { id: endEvent.id },
    labels: [{ attrs: { text: { text: 'option 1' }}, position: '40' }],
    z: -1
});

var flow8 = new joint.shapes.bpmn.Flow({
    source: { id: intermediateEvent.id },
    target: { id: task2.id },
    z: -1
});

graph.addCells([
    pool,
    data,
    startEvent,
    endEvent,
    intermediateEvent,
    gateway,
    task1,
    task2,
    subprocess,
    annotation,
    flow1,
    flow2,
    flow3,
    flow4,
    flow5,
    flow6,
    flow7,
    flow8,
    group
]);
