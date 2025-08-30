// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ServersAPI from './servers';
import {
  Argument,
  ServerCreateParams,
  ServerDeleteResponse,
  ServerListParams,
  ServerListResponse,
  ServerListResponsesOffsetPage,
  ServerResponse,
  ServerUpdateParams,
  Servers,
} from './servers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);

  /**
   * Check the health and status of the MCP Store API
   */
  healthCheck(options?: RequestOptions): APIPromise<V1HealthCheckResponse> {
    return this._client.get('/api/v1/health', options);
  }
}

export interface V1HealthCheckResponse {
  message: string;

  status: string;
}

V1.Servers = Servers;

export declare namespace V1 {
  export { type V1HealthCheckResponse as V1HealthCheckResponse };

  export {
    Servers as Servers,
    type Argument as Argument,
    type ServerResponse as ServerResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerListResponsesOffsetPage as ServerListResponsesOffsetPage,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
  };
}
