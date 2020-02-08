import {useRouter} from "next/router"
import Head from "next/head"
import React from "react"

export default function Page({title}) {
  let {query} = useRouter()

  let [loading, setLoading] = React.useState(true)
  let [data, setData] = React.useState(null)

  React.useEffect(_ => {
    let t = setTimeout(() => {
      setLoading(false)
      setData({
        title: "Post #" + query.slug,
        body: "Some body",
      })
    }, 1000)
    return () => clearTimeout(t)
  }, [])

  if (loading) {
    return <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Post {query.slug}</h1>
      <p>
        Loading...
      </p>
    </div>
  }

  return <div>
    Post {query.slug} is ready to use :)
  </div>
}

Page.getInitialProps = async function () {
  let title = await Promise.resolve("Async Title")
  return {
    title
  }
}

// export async function unstable_getStaticProps() {
//   return {
//     props: {}
//   }
// }
