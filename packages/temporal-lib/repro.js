const { historyFromJSON } = require('@temporalio/common/proto-utils');
const where = (m, from) => require.resolve(m, { paths: [require.resolve(from)] });
console.log('common  ->', where('protobufjs', '@temporalio/common'));
console.log('proto   ->', where('protobufjs', '@temporalio/proto'));
historyFromJSON({ events: [{ eventId: '1', eventType: 'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED',
  workflowExecutionStartedEventAttributes: { workflowType: { name: 'w' } } }] });
console.log('historyFromJSON OK');
