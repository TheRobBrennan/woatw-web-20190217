# Welcome
This concept site for WOATW was based off the `gatsby-starter-dimension` starter pack available at [https://github.com/codebushi/gatsby-starter-dimension](https://github.com/codebushi/gatsby-starter-dimension)

![src/images/screenshots/demo-20191004.png](src/images/screenshots/demo-20191004.png)

## Installation
To run the development site on your local machine, simply run `npm start`.

## Deploy the application
This demo project is configured so you can deploy your application to [ZEIT Now](https://zeit.co/now) - my deployment platform of choice.

One benefit of [ZEIT Now](https://zeit.co/now) is that your application will automatically be served via a secure HTTPS address. No custom coding, configuration, or routing required.

As an added bonus, the free tier will work just fine for this example.

### Setup
To get started, simply download and install [Now Desktop](https://zeit.co/download) - or just the [Now CLI](https://zeit.co/download#now-cli) tool globally on your system:

```
$ npm install -g now
```

There are two things we need to make sure we've defined.

First, we need to include a `builds` key that uses the `@now/static-build` builder in `now.json`. This is how our static site will be served in the serverless environment.

```sh
{
  "version": 2,
  "name": "woatw-web-20190217",
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build",
      "config": { "distDir": "public" }
    }
  ]
}
```

Lastly, we need to create a `now-build` script in `package.json` for the builder.

### Deploy
To deploy your project, simply ensure you have `now.json` configured and run:

```
$ npm run deploy
```

If your deployment was a success, you will see something similar to:

```sh
> Deploying ~/repos/woatw-web-20190217 under therobbrennan
> Using project woatw-web-20190217
> Synced 1 file (1.55KB) [1s]
> https://woatw-web-20190217-3exxpmfk3.now.sh [v2] [in clipboard] [2s]
┌ package.json        Deploying
: : : : Lots of output : : : :
├── workbox-v3.6.3/workbox-sw.js (1.47KB)
└── workbox-v3.6.3/workbox-sw.js.map (1.61KB)
> Success! Deployment ready [2m]
```

In the above example, our site is available at [https://woatw-web-20190217-3exxpmfk3.now.sh](https://woatw-web-20190217-3exxpmfk3.now.sh)

#### BONUS: Use a custom domain
Assuming that the deployment has just occurred, you can give your deployment a custom URL (for free) with:

```
$ now alias mysite.now.sh
```

If you have configured your ZEIT Now account for a custom domain, you could even do something like:

```
$ now alias mysite.com

OR

$ now alias preview.mysite.com
```
