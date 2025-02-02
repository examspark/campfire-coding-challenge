export function parseJson<T>(json: string | null | undefined) {
  if (json === null) return json as null;
  if (json === undefined) return json as undefined;
  return JSON.parse(json) as T;
}
