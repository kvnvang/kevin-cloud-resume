import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);
const tableName = process.env.SAMPLE_TABLE;

export const putItemHandler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({ message: `Method not allowed: ${event.httpMethod}` })
        };
    }

    const visitorKey = { id: 'visitorCount' };
    let count = 0;

    try {
        // Get current count
        const getData = await ddbDocClient.send(new GetCommand({
            TableName: tableName,
            Key: visitorKey
        }));

        count = (getData.Item && getData.Item.count) || 0;
        count += 1;

        // Update with new count
        await ddbDocClient.send(new PutCommand({
            TableName: tableName,
            Item: { id: 'visitorCount', count }
        }));

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({ count })
        };
    } catch (err) {
        console.error("DynamoDB Error:", err);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ message: "Failed to update visitor count" })
        };
    }
};
