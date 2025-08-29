// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CoreSpeed } from '../client';

export abstract class APIResource {
  protected _client: CoreSpeed;

  constructor(client: CoreSpeed) {
    this._client = client;
  }
}
