An experiment of a very alpha library named [gqless](https://gqless.dev/).

Summary:

This library's idea is really cool: instead of writing GraphQL queries, queries are generated at runtime(they are bothe typed by TypeScript)
And also it solve a few client side GraphQL issues like [double declaration problem](https://babel-blade.netlify.com/docs/declarationdeclaration)

**drawback**
- no support for class component
- `tscongfig` needs to be set `strict: false`
- no subscription or mutations support. 

So I'll keep update this repo when those are added.