This is my attempt at learning Redux.

This has implemented
-> a counter increment and decremetn using redux
-> login status checker using redux

You can refer this code in future to quickly setup the stufff.

📂The folder structure is as follow

✅in the src folder -> you have store.js

✅in the src/app -> you have page.js which has an app component. The app component is enclosed inside Provider tag

✅in the src/app -> you also have two folders reducers and actions

✅in the src/app/reducers -> you have counter.js isLogged.js index.js , here index.js is used to create a combined reducer for counter and isLogged

✅in the src/app/actions -> you have index.js thiss one has all the 4 actiosn (increment and decrement for counter) and (login and logout for loginState)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
