export const projects = async (): Promise<string> => {
  return `
    <p>
      A lot of the work I've done is not publically available, but here are a
      few of my recent projects that I am able to show you:
    </p>
    <ul>
      <li>
          <a href="https://tspoolsupply.com/" target="_blank">TS Pool Supply</a>
          <p>
            Custom static headless Shopify storefront built using Next.js, React, TypeScript,
            SASS, CSS modules and Shopify's Store Front GraphQL API.
          </p>
          <p>
            This project also required custom Shopify apps built as Node.js
            microservices.
          </p>
      </li>
      <li>
          <a href="https://store.vansaircraft.com/" target="_blank">Van's Aircraft Store</a>
          <p>
            Large e-commerce overhaul utilizing the Magento platform. Custom front-end and
            heavily customized back-end.
          </p>
          <p>
            This project also has multiple auxiliary microservices built in Laravel and Node.
            These are used to augment store functionality, manage customer/aircraft data, and
            sync customers, orders, and products seamlessly with their ERP.
          </p>
      </li>
      <li>
        <a href="https://rockit.fruitlocator.com/" target="_blank">Store Locator</a>
        <p>
          White-labeled store locator built with Next.js, React, Styled Components,
          MapBox and Python. This product is used by Chelan Fresh for all of their
          fruit brands and has capabilities to be used by any company in need
          of a store locator for their product.
        </p>
      </li>
    </ul>
    `
}
