const {format } = require("url")
const url = format({
    protocol: "https",
    hostname: "google",
    port: 5000,
    pathname: "/home",
    query:{my:"wewew",m:232}
})
console.log(url)
