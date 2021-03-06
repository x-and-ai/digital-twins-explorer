/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * A route which directs notification and telemetry events to an endpoint. Endpoints are a
 * destination outside of Azure Digital Twins such as an EventHub.
 */
export interface EventRoute {
  /**
   * The id of the event route.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The id of the endpoint this event route is bound to.
   */
  endpointId: string;
  /**
   * An expression which describes the events which are routed to the endpoint.
   */
  filter?: string;
}

/**
 * A model definition and metadata for that model.
 */
export interface ModelData {
  /**
   * A language map that contains the localized display names as specified in the model definition.
   */
  displayName?: any;
  /**
   * A language map that contains the localized descriptions as specified in the model definition.
   */
  description?: any;
  /**
   * The id of the model as specified in the model definition.
   */
  id: string;
  /**
   * The time the model was uploaded to the service.
   */
  uploadTime?: Date;
  /**
   * Indicates if the model is decommissioned. Decommissioned models cannot be referenced by newly
   * created digital twins. Default value: false.
   */
  decommissioned?: boolean;
  /**
   * The model definition.
   */
  model?: any;
}

/**
 * An incoming relationship.
 */
export interface IncomingRelationship {
  /**
   * A user-provided string representing the id of this relationship, unique in the context of the
   * source digital twin, i.e. sourceId + relationshipId is unique in the context of the service.
   */
  relationshipId?: string;
  /**
   * The id of the source digital twin.
   */
  sourceId?: string;
  /**
   * The name of the relationship.
   */
  relationshipName?: string;
  /**
   * Link to the relationship, to be used for deletion.
   */
  relationshipLink?: string;
}

/**
 * A query specification containing either a query statement or a continuation token from a
 * previous query result.
 */
export interface QuerySpecification {
  /**
   * The query to execute. This value is ignored if a continuation token is provided.
   */
  query?: string;
  /**
   * A token which is used to retrieve the next set of results from a previous query.
   */
  continuationToken?: string;
}

/**
 * The results of a query operation and an optional continuation token.
 */
export interface QueryResult {
  /**
   * The query results.
   */
  items?: any[];
  /**
   * A token which can be used to construct a new QuerySpecification to retrieve the next set of
   * results.
   */
  continuationToken?: string;
}

/**
 * A more specific error description than was provided by the containing error.
 */
export interface InnerError {
  /**
   * A more specific error code than was provided by the containing error.
   */
  code?: string;
  /**
   * An object containing more specific information than the current object about the error.
   */
  innererror?: InnerError;
}

/**
 * Error definition.
 */
export interface ErrorModel {
  /**
   * Service specific error code which serves as the substatus for the HTTP error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * A human-readable representation of the error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * Internal error details.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: ErrorModel[];
  /**
   * An object containing more specific information than the current object about the error.
   */
  innererror?: InnerError;
}

/**
 * Error response.
 */
export interface ErrorResponse {
  /**
   * The error details.
   */
  error?: ErrorModel;
}

/**
 * Additional parameters for list operation.
 */
export interface DigitalTwinModelsListOptions {
  /**
   * The maximum number of items to retrieve per request. The server may choose to return less than
   * the requested max. Default value: -1.
   */
  maxItemCount?: number;
}

/**
 * Additional parameters for list operation.
 */
export interface EventRoutesListOptions {
  /**
   * The maximum number of items to retrieve per request. The server may choose to return less than
   * the requested max. Default value: -1.
   */
  maxItemCount?: number;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinModelsAddOptionalParams extends msRest.RequestOptionsBase {
  /**
   * An array of models to add.
   */
  models?: any[];
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinModelsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The set of the models which will have their dependencies retrieved. If omitted, all models are
   * retrieved.
   */
  dependenciesFor?: string[];
  /**
   * When true the model definition will be returned as part of the result. Default value: false.
   */
  includeModelDefinition?: boolean;
  /**
   * Additional parameters for the operation
   */
  digitalTwinModelsListOptions?: DigitalTwinModelsListOptions;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinModelsGetByIdOptionalParams extends msRest.RequestOptionsBase {
  /**
   * When true the model definition will be returned as part of the result. Default value: false.
   */
  includeModelDefinition?: boolean;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinModelsListNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Additional parameters for the operation
   */
  digitalTwinModelsListOptions?: DigitalTwinModelsListOptions;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsAddOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Only perform the operation if the entity does not already exist. Possible values include: '*'
   */
  ifNoneMatch?: IfNoneMatch;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Only perform the operation if the entity's etag matches one of the etags provided or * is
   * provided.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Only perform the operation if the entity's etag matches one of the etags provided or * is
   * provided.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsAddRelationshipOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The data for the relationship.
   */
  relationship?: any;
  /**
   * Only perform the operation if the entity does not already exist. Possible values include: '*'
   */
  ifNoneMatch?: IfNoneMatch1;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsDeleteRelationshipOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Only perform the operation if the entity's etag matches one of the etags provided or * is
   * provided.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsUpdateRelationshipOptionalParams extends msRest.RequestOptionsBase {
  /**
   * JSON Patch description of the update to the relationship properties.
   */
  patchDocument?: any[];
  /**
   * Only perform the operation if the entity's etag matches one of the etags provided or * is
   * provided.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsListRelationshipsOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The name of the relationship.
   */
  relationshipName?: string;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsSendTelemetryOptionalParams extends msRest.RequestOptionsBase {
  /**
   * An RFC 3339 timestamp that identifies the time the telemetry was measured.
   */
  dtTimestamp?: string;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsSendComponentTelemetryOptionalParams extends msRest.RequestOptionsBase {
  /**
   * An RFC 3339 timestamp that identifies the time the telemetry was measured.
   */
  dtTimestamp?: string;
}

/**
 * Optional Parameters.
 */
export interface DigitalTwinsUpdateComponentOptionalParams extends msRest.RequestOptionsBase {
  /**
   * An update specification described by JSON Patch. Updates to property values and $model
   * elements may happen in the same request. Operations are limited to add, replace and remove.
   */
  patchDocument?: any[];
  /**
   * Only perform the operation if the entity's etag matches one of the etags provided or * is
   * provided.
   */
  ifMatch?: string;
}

/**
 * Optional Parameters.
 */
export interface EventRoutesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Additional parameters for the operation
   */
  eventRoutesListOptions?: EventRoutesListOptions;
}

/**
 * Optional Parameters.
 */
export interface EventRoutesAddOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The event route data
   */
  eventRoute?: EventRoute;
}

/**
 * Optional Parameters.
 */
export interface EventRoutesListNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Additional parameters for the operation
   */
  eventRoutesListOptions?: EventRoutesListOptions;
}

/**
 * An interface representing AzureDigitalTwinsAPIOptions.
 */
export interface AzureDigitalTwinsAPIOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Defines headers for QueryTwins operation.
 */
export interface QueryQueryTwinsHeaders {
  /**
   * The query charge.
   */
  queryCharge: string;
}

/**
 * Defines headers for GetById operation.
 */
export interface DigitalTwinsGetByIdHeaders {
  /**
   * Weak Etag.
   */
  eTag: string;
}

/**
 * Defines headers for Add operation.
 */
export interface DigitalTwinsAddHeaders {
  /**
   * Weak Etag.
   */
  eTag: string;
}

/**
 * Defines headers for Update operation.
 */
export interface DigitalTwinsUpdateHeaders {
  /**
   * Weak Etag.
   */
  eTag: string;
}

/**
 * Defines headers for GetRelationshipById operation.
 */
export interface DigitalTwinsGetRelationshipByIdHeaders {
  /**
   * Weak Etag.
   */
  eTag: string;
}

/**
 * Defines headers for AddRelationship operation.
 */
export interface DigitalTwinsAddRelationshipHeaders {
  /**
   * Weak Etag.
   */
  eTag: string;
}

/**
 * Defines headers for UpdateRelationship operation.
 */
export interface DigitalTwinsUpdateRelationshipHeaders {
  /**
   * Weak Etag.
   */
  eTag: string;
}

/**
 * Defines headers for GetComponent operation.
 */
export interface DigitalTwinsGetComponentHeaders {
  /**
   * Weak Etag.
   */
  eTag: string;
}

/**
 * Defines headers for UpdateComponent operation.
 */
export interface DigitalTwinsUpdateComponentHeaders {
  /**
   * Weak Etag.
   */
  eTag: string;
}

/**
 * @interface
 * A collection of ModelData objects.
 * @extends Array<ModelData>
 */
export interface PagedModelDataCollection extends Array<ModelData> {
  /**
   * A URI to retrieve the next page of objects.
   */
  nextLink?: string;
}

/**
 * @interface
 * A collection of relationships which relate digital twins together.
 * @extends Array<any>
 */
export interface RelationshipCollection extends Array<any> {
  /**
   * A URI to retrieve the next page of objects.
   */
  nextLink?: string;
}

/**
 * @interface
 * A collection of incoming relationships which relate digital twins together.
 * @extends Array<IncomingRelationship>
 */
export interface IncomingRelationshipCollection extends Array<IncomingRelationship> {
  /**
   * A URI to retrieve the next page of objects.
   */
  nextLink?: string;
}

/**
 * @interface
 * A collection of EventRoute objects.
 * @extends Array<EventRoute>
 */
export interface EventRouteCollection extends Array<EventRoute> {
  /**
   * A URI to retrieve the next page of results.
   */
  nextLink?: string;
}

/**
 * Defines values for IfNoneMatch.
 * Possible values include: '*'
 * @readonly
 * @enum {string}
 */
export type IfNoneMatch = '*';

/**
 * Defines values for IfNoneMatch1.
 * Possible values include: '*'
 * @readonly
 * @enum {string}
 */
export type IfNoneMatch1 = '*';

/**
 * Contains response data for the add operation.
 */
export type DigitalTwinModelsAddResponse = Array<ModelData> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ModelData[];
    };
};

/**
 * Contains response data for the list operation.
 */
export type DigitalTwinModelsListResponse = PagedModelDataCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PagedModelDataCollection;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type DigitalTwinModelsGetByIdResponse = ModelData & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ModelData;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type DigitalTwinModelsListNextResponse = PagedModelDataCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PagedModelDataCollection;
    };
};

/**
 * Contains response data for the queryTwins operation.
 */
export type QueryQueryTwinsResponse = QueryResult & QueryQueryTwinsHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: QueryQueryTwinsHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: QueryResult;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type DigitalTwinsGetByIdResponse = DigitalTwinsGetByIdHeaders & {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DigitalTwinsGetByIdHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the add operation.
 */
export type DigitalTwinsAddResponse = DigitalTwinsAddHeaders & {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DigitalTwinsAddHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the update operation.
 */
export type DigitalTwinsUpdateResponse = DigitalTwinsUpdateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DigitalTwinsUpdateHeaders;
    };
};

/**
 * Contains response data for the getRelationshipById operation.
 */
export type DigitalTwinsGetRelationshipByIdResponse = DigitalTwinsGetRelationshipByIdHeaders & {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DigitalTwinsGetRelationshipByIdHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the addRelationship operation.
 */
export type DigitalTwinsAddRelationshipResponse = DigitalTwinsAddRelationshipHeaders & {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DigitalTwinsAddRelationshipHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the updateRelationship operation.
 */
export type DigitalTwinsUpdateRelationshipResponse = DigitalTwinsUpdateRelationshipHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DigitalTwinsUpdateRelationshipHeaders;
    };
};

/**
 * Contains response data for the listRelationships operation.
 */
export type DigitalTwinsListRelationshipsResponse = RelationshipCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelationshipCollection;
    };
};

/**
 * Contains response data for the listIncomingRelationships operation.
 */
export type DigitalTwinsListIncomingRelationshipsResponse = IncomingRelationshipCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IncomingRelationshipCollection;
    };
};

/**
 * Contains response data for the getComponent operation.
 */
export type DigitalTwinsGetComponentResponse = DigitalTwinsGetComponentHeaders & {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DigitalTwinsGetComponentHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the updateComponent operation.
 */
export type DigitalTwinsUpdateComponentResponse = DigitalTwinsUpdateComponentHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: DigitalTwinsUpdateComponentHeaders;
    };
};

/**
 * Contains response data for the listRelationshipsNext operation.
 */
export type DigitalTwinsListRelationshipsNextResponse = RelationshipCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelationshipCollection;
    };
};

/**
 * Contains response data for the listIncomingRelationshipsNext operation.
 */
export type DigitalTwinsListIncomingRelationshipsNextResponse = IncomingRelationshipCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IncomingRelationshipCollection;
    };
};

/**
 * Contains response data for the list operation.
 */
export type EventRoutesListResponse = EventRouteCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EventRouteCollection;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type EventRoutesGetByIdResponse = EventRoute & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EventRoute;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type EventRoutesListNextResponse = EventRouteCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EventRouteCollection;
    };
};
