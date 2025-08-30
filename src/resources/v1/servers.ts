// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ServersAPI from './servers';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Servers extends APIResource {
  /**
   * Create a new MCP server with optional icon upload
   */
  create(body: ServerCreateParams, options?: RequestOptions): APIPromise<ServerResponse> {
    return this._client.post(
      '/api/v1/servers',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Retrieve detailed information about a specific MCP server
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ServerResponse> {
    return this._client.get(path`/api/v1/servers/${id}`, options);
  }

  /**
   * Update an existing MCP server with optional icon replacement
   */
  update(
    id: string,
    body: ServerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServerResponse> {
    return this._client.put(
      path`/api/v1/servers/${id}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Retrieve a paginated list of available MCP servers
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServerListResponse> {
    return this._client.get('/api/v1/servers', { query, ...options });
  }

  /**
   * Delete an existing MCP server and clean up associated resources
   */
  delete(id: string, options?: RequestOptions): APIPromise<ServerDeleteResponse> {
    return this._client.delete(path`/api/v1/servers/${id}`, options);
  }
}

export interface Argument {
  /**
   * The format of the input
   */
  format: 'string' | 'number' | 'boolean' | 'file_path';

  /**
   * Whether the input is required
   */
  isRequired: boolean;

  /**
   * Whether the input is a secret
   */
  isSecret: boolean;

  /**
   * The type of the argument (positional or named)
   */
  type: 'positional' | 'named';

  /**
   * The choices of the input
   */
  choices?: Array<string>;

  /**
   * The default value of the input
   */
  default?: string;

  /**
   * The description of the input
   */
  description?: string;

  /**
   * Whether the argument can be repeated
   */
  isRepeated?: boolean;

  /**
   * The name of the argument
   */
  name?: string;

  /**
   * Nested properties of the input
   */
  properties?: { [key: string]: unknown };

  /**
   * The template of the input
   */
  template?: string;

  /**
   * The value of the input
   */
  value?: string;

  /**
   * Hint for the argument value
   */
  valueHint?: string;

  /**
   * The variables of the input
   */
  variables?: { [key: string]: unknown };
}

export interface ServerResponse {
  server: ServerResponse.Server;
}

export namespace ServerResponse {
  export interface Server {
    /**
     * The unique identifier of the MCP server
     */
    id: string;

    /**
     * The description of the MCP server
     */
    description: string;

    /**
     * The technical name of the MCP server (e.g., io.github.owner/repo)
     */
    name: string;

    /**
     * The repository information
     */
    repository: Server.Repository;

    /**
     * The version details
     */
    versionDetail: Server.VersionDetail;

    /**
     * The image URL of the MCP server
     */
    iconUrl?: string;

    /**
     * The packages of the MCP server
     */
    packages?: Array<Server.Package>;

    /**
     * The remote connections of the MCP server
     */
    remotes?: Array<Server.Remote>;
  }

  export namespace Server {
    /**
     * The repository information
     */
    export interface Repository {
      /**
       * The repository ID on the platform
       */
      id: string;

      /**
       * The source platform (github, gitlab, etc.)
       */
      source: string;

      /**
       * The repository URL
       */
      url: string;
    }

    /**
     * The version details
     */
    export interface VersionDetail {
      /**
       * Whether this is the latest version
       */
      isLatest: boolean;

      /**
       * The release date of the MCP server (ISO 8601)
       */
      releaseDate: string;

      /**
       * The version of the MCP server
       */
      version: string;
    }

    export interface Package {
      /**
       * The name of the MCP server package
       */
      name: string;

      /**
       * The registry/provider name of the MCP server
       */
      registryName: string;

      /**
       * The version of the MCP server
       */
      version: string;

      /**
       * Environment variables for the server
       */
      environmentVariables?: Array<Package.EnvironmentVariable>;

      /**
       * The package arguments of the MCP server
       */
      packageArguments?: Array<ServersAPI.Argument>;

      /**
       * The runtime arguments of the MCP server
       */
      runtimeArguments?: Array<ServersAPI.Argument>;

      /**
       * The runtime hint of the MCP server
       */
      runtimeHint?: string;
    }

    export namespace Package {
      export interface EnvironmentVariable {
        /**
         * The format of the input
         */
        format: 'string' | 'number' | 'boolean' | 'file_path';

        /**
         * Whether the input is required
         */
        isRequired: boolean;

        /**
         * Whether the input is a secret
         */
        isSecret: boolean;

        /**
         * The name/key of the input
         */
        name: string;

        /**
         * The choices of the input
         */
        choices?: Array<string>;

        /**
         * The default value of the input
         */
        default?: string;

        /**
         * The description of the input
         */
        description?: string;

        /**
         * Nested properties of the input
         */
        properties?: { [key: string]: unknown };

        /**
         * The template of the input
         */
        template?: string;

        /**
         * The value of the input
         */
        value?: string;

        /**
         * The variables of the input
         */
        variables?: { [key: string]: unknown };
      }
    }

    export interface Remote {
      /**
       * The transport type of the MCP server (SSE, HTTP, etc.)
       */
      transportType: string;

      /**
       * The URL of the MCP server
       */
      url: string;

      /**
       * Custom headers for the connection
       */
      headers?: Array<Remote.Header>;
    }

    export namespace Remote {
      export interface Header {
        /**
         * The format of the input
         */
        format: 'string' | 'number' | 'boolean' | 'file_path';

        /**
         * Whether the input is required
         */
        isRequired: boolean;

        /**
         * Whether the input is a secret
         */
        isSecret: boolean;

        /**
         * The choices of the input
         */
        choices?: Array<string>;

        /**
         * The default value of the input
         */
        default?: string;

        /**
         * The description of the input
         */
        description?: string;

        /**
         * Nested properties of the input
         */
        properties?: { [key: string]: unknown };

        /**
         * The template of the input
         */
        template?: string;

        /**
         * The value of the input
         */
        value?: string;
      }
    }
  }
}

export interface ServerListResponse {
  /**
   * Number of servers returned in this response
   */
  count: number;

  data: Array<ServerListResponse.Data>;

  /**
   * Maximum number of servers requested
   */
  limit: number;

  /**
   * Number of servers skipped
   */
  offset: number;

  /**
   * Total number of servers available
   */
  total: number;
}

export namespace ServerListResponse {
  export interface Data {
    /**
     * The unique identifier of the MCP server
     */
    id: string;

    /**
     * The description of the MCP server
     */
    description: string;

    /**
     * The technical name of the MCP server (e.g., io.github.owner/repo)
     */
    name: string;

    /**
     * The repository information
     */
    repository: Data.Repository;

    /**
     * The version details
     */
    versionDetail: Data.VersionDetail;

    /**
     * The image URL of the MCP server
     */
    iconUrl?: string;

    /**
     * The packages of the MCP server
     */
    packages?: Array<Data.Package>;

    /**
     * The remote connections of the MCP server
     */
    remotes?: Array<Data.Remote>;
  }

  export namespace Data {
    /**
     * The repository information
     */
    export interface Repository {
      /**
       * The repository ID on the platform
       */
      id: string;

      /**
       * The source platform (github, gitlab, etc.)
       */
      source: string;

      /**
       * The repository URL
       */
      url: string;
    }

    /**
     * The version details
     */
    export interface VersionDetail {
      /**
       * Whether this is the latest version
       */
      isLatest: boolean;

      /**
       * The release date of the MCP server (ISO 8601)
       */
      releaseDate: string;

      /**
       * The version of the MCP server
       */
      version: string;
    }

    export interface Package {
      /**
       * The name of the MCP server package
       */
      name: string;

      /**
       * The registry/provider name of the MCP server
       */
      registryName: string;

      /**
       * The version of the MCP server
       */
      version: string;

      /**
       * Environment variables for the server
       */
      environmentVariables?: Array<Package.EnvironmentVariable>;

      /**
       * The package arguments of the MCP server
       */
      packageArguments?: Array<ServersAPI.Argument>;

      /**
       * The runtime arguments of the MCP server
       */
      runtimeArguments?: Array<ServersAPI.Argument>;

      /**
       * The runtime hint of the MCP server
       */
      runtimeHint?: string;
    }

    export namespace Package {
      export interface EnvironmentVariable {
        /**
         * The format of the input
         */
        format: 'string' | 'number' | 'boolean' | 'file_path';

        /**
         * Whether the input is required
         */
        isRequired: boolean;

        /**
         * Whether the input is a secret
         */
        isSecret: boolean;

        /**
         * The name/key of the input
         */
        name: string;

        /**
         * The choices of the input
         */
        choices?: Array<string>;

        /**
         * The default value of the input
         */
        default?: string;

        /**
         * The description of the input
         */
        description?: string;

        /**
         * Nested properties of the input
         */
        properties?: { [key: string]: unknown };

        /**
         * The template of the input
         */
        template?: string;

        /**
         * The value of the input
         */
        value?: string;

        /**
         * The variables of the input
         */
        variables?: { [key: string]: unknown };
      }
    }

    export interface Remote {
      /**
       * The transport type of the MCP server (SSE, HTTP, etc.)
       */
      transportType: string;

      /**
       * The URL of the MCP server
       */
      url: string;

      /**
       * Custom headers for the connection
       */
      headers?: Array<Remote.Header>;
    }

    export namespace Remote {
      export interface Header {
        /**
         * The format of the input
         */
        format: 'string' | 'number' | 'boolean' | 'file_path';

        /**
         * Whether the input is required
         */
        isRequired: boolean;

        /**
         * Whether the input is a secret
         */
        isSecret: boolean;

        /**
         * The choices of the input
         */
        choices?: Array<string>;

        /**
         * The default value of the input
         */
        default?: string;

        /**
         * The description of the input
         */
        description?: string;

        /**
         * Nested properties of the input
         */
        properties?: { [key: string]: unknown };

        /**
         * The template of the input
         */
        template?: string;

        /**
         * The value of the input
         */
        value?: string;
      }
    }
  }
}

export interface ServerDeleteResponse {
  message: string;
}

export interface ServerCreateParams {
  /**
   * Server description
   */
  description: string;

  /**
   * Server name
   */
  name: string;

  /**
   * Repository information
   */
  repository: { [key: string]: unknown };

  /**
   * Version details
   */
  versionDetail: { [key: string]: unknown };

  /**
   * Optional server icon image file
   */
  icon?: Uploadable;
}

export interface ServerUpdateParams {
  /**
   * Server description
   */
  description?: string;

  /**
   * Optional replacement server icon image file
   */
  icon?: Uploadable;

  /**
   * Server name
   */
  name?: string;

  /**
   * Repository information
   */
  repository?: { [key: string]: unknown };

  /**
   * Version details
   */
  versionDetail?: { [key: string]: unknown };
}

export interface ServerListParams {
  '#/components/schemas/ServerListQuery'?: ServerListParams.ComponentsSchemasServerListQuery;

  /**
   * Maximum number of servers to return
   */
  limit?: string;

  /**
   * Number of servers to skip for pagination
   */
  offset?: string;

  /**
   * Search term to filter servers by name or description
   */
  search?: string;

  /**
   * Field to sort by
   */
  sort?: string;
}

export namespace ServerListParams {
  export interface ComponentsSchemasServerListQuery {
    /**
     * Maximum number of servers to return
     */
    limit?: string;

    /**
     * Number of servers to skip for pagination
     */
    offset?: string;

    /**
     * Search term to filter servers by name or description
     */
    search?: string;

    /**
     * Field to sort by
     */
    sort?: string;
  }
}

export declare namespace Servers {
  export {
    type Argument as Argument,
    type ServerResponse as ServerResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
  };
}
