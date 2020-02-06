# PSSR (Partial-SSR) in NextJS: proof of concept

## Setup and Run

1. Pull the code
2. `$ yarn install`
3. `$ yarn dev`
4. Visit `https://localhost:3000/blog/1`
5. Visit `https://localhost:3000/blog/2`

See that you aren't limited by some fixed (static) list of ids.
The HTML payload contains data. It's all static server-side with the ability to fetch data.
And all dynamic client-side with the ability to... everything.

```html
<title>Post 2</title> -- static HEAD (any meta you like)

<div><p>Loading...</p></div> -- dynamic BODY
```

---

Check my blog post ["SSR is not the future of web development"](https://paqmind.com/en/blog/ssr-is-not-the-future) for more details.
