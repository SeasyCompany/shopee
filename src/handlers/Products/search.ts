import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { SearchUsecase } from '../../usecases'
import { errorHandler } from '@vmotta8/price-comparison'

export async function handler (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  try {
    const payload = event.queryStringParameters as any

    const usecase = new SearchUsecase()
    const result = await usecase.execute(payload)
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  } catch (e) {
    const error = errorHandler.format(e)
    console.log(error)
    return error
  }
}
