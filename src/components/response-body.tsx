import { AxiosResponse } from 'axios'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export interface TResponse extends AxiosResponse {}

interface ResponseBodyProps {
  response: TResponse | undefined
}

const ResponseBody = ({ response }: ResponseBodyProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div>
          <CardTitle>Response</CardTitle>
          {response && <p className="text-sm mt-1">Status: <span className="text-green-500 font-medium">{response.status}</span></p>}
        </div>
      </CardHeader>
      <CardContent className="overflow-x-scroll max-w-fit">
        {response && <pre>{JSON.stringify(response.data, undefined, 2)}</pre>}
      </CardContent>
    </Card>
  )
}

export default ResponseBody