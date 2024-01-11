import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3000';

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedDocument = super.normalizeArrayResponse(...arguments);

    // Customize document meta
    normalizedDocument.meta = camelCaseKeys(normalizedDocument.meta);

    return normalizedDocument;
  }

  extractRelationship(relationshipHash) {
    let normalizedRelationship = super.extractRelationship(...arguments);

    // Customize relationship meta
    normalizedRelationship.meta = camelCaseKeys(normalizedRelationship.meta);

    return normalizedRelationship;
  }
}
