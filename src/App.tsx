import { useState } from "react"

import Navbar from "./components/navbar"
import RequestForm from "./components/request-form"
import RequestHeaders, { TRequestHeader } from "./components/request-headers"
import ResponseBody, { TResponse } from "./components/response-body"

import { generateUUID } from "./lib/utils"

const App = () => {
  const [response, setresponse] = useState<TResponse>()
  const [headers, setheaders] = useState<TRequestHeader[]>([
    {
      id: generateUUID(),
      key: "Content-Type",
      value: "application/json"
    },
    {
      id: generateUUID(),
      key: "",
      value: ""
    }]
  )

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden antialiased">

      <header>
        <Navbar />
      </header>

      <main className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <RequestForm headers={headers} setresponse={setresponse} />

        <RequestHeaders headers={headers} setheaders={setheaders} />

        <ResponseBody response={response} />
      </main>

    </div>
  )
}

export default App
