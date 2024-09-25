import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>this is contact page</h1>
      <Link href={'/footer'}>go to footer page</Link>
    
      
    </div>
  )
}

export default page
