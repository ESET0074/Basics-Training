import React from 'react'

export default function ApiPage() {
  return (
    <div>
    {
      loading && <>loading...</>
    }
    {
      !loading && error && <>{error.message}</>
    }
    {
      !loading && error && data && data.map((elemnt)=><div key={Element.id}>{element})
    }
    </div>
  )
}
