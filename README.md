## Tindle Example
### Usage
Install react-native using the installation instructions provided by the (React Native documentation)[https://facebook.github.io/react-native/docs/getting-started.html#content].

For iOS:
```bash
npm install
open ios/Tindle.xcodeproj
```

Run application and than do the folliwng:
```bash
npm start
```

Press CMD+ALT+Z and enable Chrome Debugging/LiveReload. Open http://localhost:8081/debugger-ui in Chrome and open the debugger.

You're all set!

# Roadmap
- Use Blendle Mailing tool endpoint for staff picks instead of trending
- Optimize performance
- Better reader with HTML parsing
- Add notification where you swiped
- Implement redux-storage instead of own storage implementation
- Add login functionality that saves the refreshToken
- Add pull down to complete reading
- Add refund when you complete reading within 10 seconds
- Add logo
- Android build

# Changelog
## 2016-02-27
- Implement read later list
- Implement deleted list
- Save to read later when swiped right
- Save deleted in store so they don't show up again
- Fetch new items on app open
