import { useState } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios'
import { TRequestHeader } from './request-headers'
import { TResponse } from './response-body'

// export type TRequestMethod = "GET" | "POST" | "DELETE" | "PUT"

interface RequestFormProps {
  headers: TRequestHeader[],
  setresponse: React.Dispatch<React.SetStateAction<TResponse | undefined>>
}
const RequestForm = ({ headers, setresponse }: RequestFormProps) => {
  const [method, setmethod] = useState<string>("get")
  const [url, seturl] = useState<string>("https://jsonplaceholder.typicode.com/posts/1")
  
  const handleMethodChange = (value: string) => {  
    setmethod(() => value.toLowerCase())
  }

  const handleUrlChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value =  e.currentTarget.value
    seturl(() => value)
  }

  const handleSendRequest = async () => {
    let axiosHeaders: Record<string, string> = {} 
    headers.forEach((header) => {
      if (header.key === "") return
      axiosHeaders[header.key] = header.value
    })
  
    try {
      const res = await axios({
        method: method,
        url: url,
        headers: axiosHeaders
      })      

      setresponse(() => res)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex items-center space-x-2 pt-3">
      <Select onValueChange={handleMethodChange} defaultValue="get">
        <SelectTrigger className="w-24">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="get">GET</SelectItem>
          <SelectItem value="post">POST</SelectItem>
          <SelectItem value="delete">DELETE</SelectItem>
          <SelectItem value="put">PUT</SelectItem>
        </SelectContent>
      </Select>

      <Input placeholder="https://www.example.com" defaultValue={url} onChangeCapture={handleUrlChange} className="flex-1" />
      <Button onClick={handleSendRequest}>SEND</Button>
    </div>
  )
}

export default RequestForm