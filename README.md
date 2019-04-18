### What is this 🚀

The Dunedin City Council used to have a page that showed temperatures around the city, including by where I live.

To get around CORS and such, I made a simple pass through proxy on my VPS so I could access: 
```
https://www.dunedin.govt.nz/_designs/nested_assets/new-dcc-design-nested-assets/dcc-v7-refresh-nested-assets/content-via-ajax/road-cond-temp-json
```

However, with their new website for some reason that link is now broken, so I don't know the official temperatures near my house anymore.

You can see an example of how it looked on WayBack Machine https://web.archive.org/web/20180202235956/https://veb.co.nz/

### Tech 💥
- Used super simple create-react-app
- Pass-thru CORS proxy in node/express to the dunedin.govt.nz website
