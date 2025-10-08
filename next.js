⚙️ Client-Side Rendering (CSR)
✅ How It Works:
The server sends a minimal HTML file with a <div id="root"></div> and JS bundle.

The browser downloads JavaScript, then renders the UI dynamically.

🔍 Pros:
Fast navigation after initial load

Great for SPAs (Single Page Applications)

Rich interactivity

❌ Cons:
Slower first load

Poor SEO (unless hydrated later)

Blank screen until JS loads

🧪 Example:
React apps created with create-react-app use CSR by default.








  Server-Side Rendering (SSR)
✅ How It Works:
The server generates full HTML for each request.

The browser receives a ready-to-view page, then hydrates it with JS.

🔍 Pros:
Faster initial load

Better SEO (search engines see full content)

Content is visible even if JS fails

❌ Cons:
More server load

Slightly slower navigation between pages

Complex caching and data fetching

🧪 Example:
Next.js supports SSR out of the box using getServerSideProps.
