// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Tab } from '@components/Tab/Tab'
import { useState } from 'react'

const Click = () => {
  const [isClicked, setClick] = useState(false)
  const handleClick = () => {
    setClick(!isClicked)
  }

  return (
    <>
      <button
        type="button"
        className="peer"
        onClick={handleClick}
        data-hoge={isClicked}
      >
        Click me
      </button>
      <div className="hidden peer-data-hoge:block">isClicked!!</div>
    </>
  )
}

export default Click
