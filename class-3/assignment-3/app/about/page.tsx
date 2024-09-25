import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>this is about page</h1>
      <Link href={'/contact'}>go to contact page </Link>
    
    </div>
  )
}

export default page
