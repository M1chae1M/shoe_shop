Shoe Store
https://shoe-shop-project-m1.netlify.app

Description:
An e-commerce application created in React and Next.js.

Database:
The database was created in db4free. It stores information about products, their descriptions, photos, and prices.

Hosting:
The application is hosted on the Netlify platform.

Limitations:
For security reasons, the application only allows access to selected URL addresses. Paths to components other than:
  /
  /profile
  /history/[order]
  /products/[boot]
  /cart
are illegal, and attempting to access them will result in a redirect to the main page.