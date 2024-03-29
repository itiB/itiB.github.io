import React from 'react';

import itib from "./images/itib.jpg"

// https://kitwind.io/products/kometa/components/contents
// https://iconmonstr.com/
export const Top = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
            いちび
          </h5>
          <p className="mb-5 text-gray-900">
            SRE Engineer/Programmer
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
            {/* Twitter */}
            <a
              href="https://twitter.com/itiB_S144"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            {/* Github */}
            <a
              href="https://github.com/itiB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* Blog */}
            <a
              href="https://itib.hatenablog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 300 300" fill="currentColor" className="h-5">
                <path d="M150.593,300C68.212,300,1.189,232.979,1.189,150.592C1.189,68.21,68.212,1.184,150.593,1.184 C232.986,1.184,300,68.21,300,150.592C300,232.979,232.986,300,150.593,300z M150.593,20.187 c-71.903,0-130.406,58.493-130.406,130.405c0,71.91,58.503,130.409,130.406,130.409c71.92,0,130.419-58.499,130.419-130.409 C281.012,78.679,222.513,20.187,150.593,20.187z" />
                <path d="M167.994,76.816c-7.299-14.782-11.757-29.154-14.009-37.53v105.822c3.697,1.385,6.341,4.919,6.341,9.094 c0,5.375-4.359,9.731-9.733,9.731c-5.377,0-9.733-4.356-9.733-9.731c0-4.375,2.908-8.033,6.884-9.261V39.174 c-2.243,8.355-6.704,22.797-14.038,37.642c-11.437,23.133-25.692,43.539-25.692,43.539l9.118,124.768c0,0,8.665,9.672,33.7,9.684 c0.01,0,0.01,0,0.019,0c0.007,0,0.007,0,0.015,0c25.035-0.012,33.702-9.684,33.702-9.684l9.118-124.768 C193.687,120.355,179.429,99.949,167.994,76.816z"></path>
              </svg>
            </a>
            {/* Amazon */}
            <a
              href="https://www.amazon.jp/hz/wishlist/ls/3PVWQIDVDZWVW?ref_=wl_share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M13.305 10.271v.456c0 .821.019 1.504-.394 2.234-.334.594-.867.958-1.458.958-.809 0-1.282-.616-1.282-1.528.001-1.794 1.611-2.12 3.134-2.12zm10.695-5.271v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-10.695 3.31v.274c-1.222.136-2.818.227-3.961.73-1.32.57-2.247 1.732-2.247 3.442 0 2.189 1.38 3.283 3.154 3.283 1.498 0 2.317-.353 3.473-1.531.384.554.508.823 1.21 1.404.155.085.363.081.502-.045.419-.374 1.184-1.038 1.615-1.399.171-.139.142-.368.006-.56-.384-.532-.795-.965-.795-1.952v-3.282c0-1.391.097-2.668-.928-3.625-.807-.776-2.147-1.049-3.172-1.049-2.004 0-4.241.748-4.711 3.226-.05.263.143.402.315.44l2.041.222c.191-.01.33-.198.366-.388.175-.853.89-1.265 1.693-1.265.434 0 .927.16 1.183.546.296.434.256 1.027.256 1.529zm4.497 8.879c-1.832.981-3.823 1.454-5.635 1.454-2.684 0-5.284-.929-7.387-2.471-.185-.135-.321.103-.167.277 1.949 2.218 4.523 3.551 7.383 3.551 2.04 0 4.41-.809 6.044-2.33.271-.251.039-.629-.238-.481zm1.594-.96c-.182-.224-1.741-.417-2.693.252-.147.103-.121.245.041.225.536-.064 1.73-.208 1.942.065.213.272-.236 1.395-.437 1.896-.061.151.07.213.207.098.892-.747 1.122-2.311.94-2.536z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-40 h-40 mr-4 rounded-full shadow"
            src={itib}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};