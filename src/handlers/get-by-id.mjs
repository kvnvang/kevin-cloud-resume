// Create clients and set shared const values outside of the handler.

// Create a DocumentClient that represents the query to add an item
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
export const getByIdHandler = async (lambdaEvent) => {
  if (lambdaEvent.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: `Method Not Allowed: ${lambdaEvent.httpMethod}` }),
    };
  }
}
  // All log statements are written to CloudWatch
  console.info('Received event:', lambdaEvent);
 
  // Get id from pathParameters from APIGateway because of `/{id}` at template.yaml
  const {id} = lambdaEvent.pathParameters;
 
  // Get the item from the table
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property
  const params = {
    TableName : tableName,
    Key: { id },
  };

  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    if (!data.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `Item with ID ${id} not found` }),
      };
  } 
 
  const response = {
    statusCode: 200,
    body: JSON.stringify(data.Item)
  };
 
  // All log statements are written to CloudWatch
  console.info(`response from: ${lambdaEvent.path} statusCode: ${response.statusCode} body: ${response.body}`);
  return response;
}
