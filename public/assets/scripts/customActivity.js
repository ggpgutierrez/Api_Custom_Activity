define(['postmonger'], (Postmonger) => {
    const connection = new Postmonger.Session();
    const steps = [
        { "label": "Introduction", "key": "introduction" },
        { "label": "Setup", "key": "setup" },
        { "label": "Review", "key": "review" }
    ];
    const inArguments = [];

    let eventDefinitionKey = null;
    let payload = {};
    let step = steps[0].key;

    $(window).ready(onRender);

    connection.on('initActivity', initialize);
    connection.on('requestedTriggerEventDefinition', onRequestEventDefinition);
    connection.on('requestedSchema', onRequestSchema);

    connection.on('clickedNext', onClickedNext);
    connection.on('clickedBack', onClickedBack);
    connection.on('gotoStep', onGotoStep);

    function onRender() {
        connection.trigger('ready');

        connection.trigger('requestSchema');
        connection.trigger('requestTriggerEventDefinition');
    }

    function initialize(data) {
        if(data) {
            payload = data;
        }
        
        console.log('initialize', data);
    }

    function onClickedNext() {
        if(currentStep.key === 'review') {
            save();
        } else {
            connection.trigger('nextStep');
        }
    }

    function onClickedBack() {
        connection.trigger('prevStep');
    }

    function onGotoStep(step) {
        currentStep = step;

        console.log('currentStep', currentStep.key);

        $('.step').hide();
        $(`#${currentStep.key}`).show();
    }

    function onRequestSchema(schemaDefinition) {
        console.log('schemaDefinition', schemaDefinition);
        
        schemaDefinition.schema.forEach((definition) => {
            let key = definition.key.split('.').pop();
            let value = definition.key;

            inArguments.push({ [key]: `{{${value}}}` });
        });

        console.log(inArguments);
        $('#schemaFields').text(inArguments);
    }
    
    function onRequestEventDefinition(eventDefinition) {
        console.log('eventDefinition', eventDefinition);

        eventDefinitionKey = eventDefinition.eventDefinitionKey;

        console.log('eventDefinitionKey', eventDefinitionKey);
        $('#eventDefinitionKey').text(eventDefinitionKey);
    }

    function save() {
        payload.arguments = payload.arguments || {};
		payload.arguments.execute = payload.arguments.execute || {};
		payload.metaData = payload.metaData || {};
        payload.arguments.execute.inArguments = inArguments;
        
        payload.metaData.isConfigured = true;

		console.log(JSON.stringify(payload));
        connection.trigger('updateActivity', payload);
    }
});