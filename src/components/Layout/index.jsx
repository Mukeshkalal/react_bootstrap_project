import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Layout(props) {
  return (
  <>
  <Header/>
  <main style={{minHeight:'80vh', boxSizing:'border-box'}}>{props.children}</main>
  <Footer />
  </>
  )
}

export default Layout