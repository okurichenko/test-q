import DS from 'ember-data';

const { Model, attr, } = DS;

export default Model.extend({
  createdAt: attr(),
  currency: attr(),
  counterpartyName: attr(),
  operationType: attr(),
  amount: attr('number'),
  attachment: attr(),
});
