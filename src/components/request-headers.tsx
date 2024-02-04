import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Plus, Trash2 } from 'lucide-react'

import { generateUUID } from '@/lib/utils'

export type TRequestHeader = {
  id: string,
  key: string,
  value: string
}

interface RequestHeadersProps {
  headers: TRequestHeader[]
  setheaders?: React.Dispatch<React.SetStateAction<TRequestHeader[]>>,
}
const RequestHeaders = ({ headers, setheaders }: RequestHeadersProps) => {  
  const handleAdd = () => {
    if (!setheaders) return
    
    setheaders((headers) => [...headers, {
      id: generateUUID(),
      key: "",
      value: ""
    }])
  }

  const handleDelete = (id: string) => {
    if (!setheaders) return

    setheaders((headers) => {
      return headers.filter((header) => header.id !== id)
    })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Headers</CardTitle>
          <Button variant="ghost" onClick={handleAdd}><Plus /></Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {headers.map((header) => {
          return (
            <RequestHeaderItem key={header.id} header={header} onDelete={handleDelete} />
          )
        })}
      </CardContent>
    </Card>
  )
}

interface RequestHeaderItemProps {
  header: TRequestHeader, 
  onDelete: (id: string) => void
} 
const RequestHeaderItem = ({ header, onDelete }: RequestHeaderItemProps) => {
  const handleDelete = () => {
    onDelete(header.id)
  }

  return (
    <div className="flex items-center space-x-2">
      <Input placeholder="Key" defaultValue={header.key} />
      <Input placeholder="Value" defaultValue={header.value} />
      <Button variant="destructive" onClick={handleDelete} ><Trash2 /></Button>
    </div>
  )
}

export default RequestHeaders