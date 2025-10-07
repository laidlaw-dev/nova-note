export const createResponse = (
  statusCode: number,
  body: object,
  headers?: object
) => {
  const clientOrigin = process.env.CLIENT_ORIGIN || '*';

  const responseHeaders = {
    'Access-Control-Allow-Origin': clientOrigin,
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Content-Type': 'application/json',
  };

  return {
    statusCode,
    headers: { ...responseHeaders, ...headers },
    body: JSON.stringify(body),
  };
};
