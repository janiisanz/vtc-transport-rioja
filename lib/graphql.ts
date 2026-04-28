const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ??
  'https://cms.vtctransporioja.com/graphql'

export class GraphQLError extends Error {
  constructor(public errors: { message: string }[]) {
    super(errors.map((e) => e.message).join(', '))
    this.name = 'GraphQLError'
  }
}

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidate = 60,
): Promise<T> {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  })

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()

  if (json.errors?.length) {
    throw new GraphQLError(json.errors)
  }

  return json.data as T
}
