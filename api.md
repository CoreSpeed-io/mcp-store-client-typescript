# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">V1HealthCheckResponse</a></code>

Methods:

- <code title="get /api/v1/health">client.v1.<a href="./src/resources/v1/v1.ts">healthCheck</a>() -> V1HealthCheckResponse</code>

## Servers

Types:

- <code><a href="./src/resources/v1/servers.ts">Argument</a></code>
- <code><a href="./src/resources/v1/servers.ts">ServerResponse</a></code>
- <code><a href="./src/resources/v1/servers.ts">ServerListResponse</a></code>
- <code><a href="./src/resources/v1/servers.ts">ServerDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/servers">client.v1.servers.<a href="./src/resources/v1/servers.ts">create</a>({ ...params }) -> ServerResponse</code>
- <code title="get /api/v1/servers/{id}">client.v1.servers.<a href="./src/resources/v1/servers.ts">retrieve</a>(id) -> ServerResponse</code>
- <code title="put /api/v1/servers/{id}">client.v1.servers.<a href="./src/resources/v1/servers.ts">update</a>(id, { ...params }) -> ServerResponse</code>
- <code title="get /api/v1/servers">client.v1.servers.<a href="./src/resources/v1/servers.ts">list</a>({ ...params }) -> ServerListResponse</code>
- <code title="delete /api/v1/servers/{id}">client.v1.servers.<a href="./src/resources/v1/servers.ts">delete</a>(id) -> ServerDeleteResponse</code>
