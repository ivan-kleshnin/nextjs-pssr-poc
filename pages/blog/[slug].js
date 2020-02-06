import {useRouter} from "next/router"
import Head from "next/head"
import React from "react"

export default function Page(ctx) {
  let {query} = useRouter()

  console.log("query:", query)

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
        <title>Post {query.slug}</title>
      </Head>
      <p>
        Loading...
      </p>
    </div>
  }

  return <div>
    Post {query.slug} is ready to use :)
  </div>
}

// Page.getInitialProps = function () {
//   return {}
// }

export async function unstable_getStaticProps() {
  return {
    props: {}
  }
}
