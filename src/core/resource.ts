// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { McpStoreClient } from '../client';

export abstract class APIResource {
  protected _client: McpStoreClient;

  constructor(client: McpStoreClient) {
    this._client = client;
  }
}
