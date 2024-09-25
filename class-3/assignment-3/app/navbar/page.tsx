import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>this is navbar page</h1>
      <Link href={'/about'} >go to about page</Link>
    </div>
  )
}

export default page
