import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const helloWorldHandler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
    }),
  };

  return response;
};
