# React useEffect Dependency Issue

This project demonstrates a common React pitfall: putting **referential data types** (like objects) in the `useEffect` dependency array. Because objects are compared by reference, React sees them as new on every render, which can cause effects to run repeatedly and trigger unnecessary API calls.

This exact class of issue contributed to a real-world outage. Cloudflare experienced a major incident on **September 12, 2025**, where repeated API calls—triggered by a dependency array mistake—overloaded their systems.

Read Cloudflare’s official deep dive here:  
[Deep dive into Cloudflare’s September 12 dashboard and API outage](https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/)
