import React from 'react';

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="grid gap-12 row-gap-8">
        <div className="max-w-xl mb-6" id="about">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            About
          </h2>
          <div className="text-base text-gray-700 md:text-lg">
            <ul className="prose prose-sm list-disc list-inside">
              <li><span>Name</span>: いちび</li>
              <li><span>Job</span>: SRE Engineer</li>
              <li>Like
                <ul className="list-disc list-inside">
                  <li>Windows, Python🐍, Crawler, Kubernetes</li>
                  <li>Pokémon</li>
                </ul>
              </li>
              <li>Familiar
                <ul className="list-disc list-inside">
                  <li>C, go, Rust, LLVM, JavaScript, jQuery, React</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-xl mb-6" id="activity">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Activity
          </h2>
          <div className="text-base text-gray-700 md:text-lg">
            <ul className="prose prose-sm list-disc list-inside">
              <li>OSS contribution
                <ul className="list-disc list-inside">
                  <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Yamato-Security/RustyBlue">RustyBlue</a></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Yamato-Security/hayabusa">Hayabusa</a></li>
                </ul>
              </li>
              <li>2022 AWS Certified Solutions Architect – Associate</li>
              <li>2021 Professional Cloud Architect Google Cloud</li>
              <li>Codeblue 2018/2019 staff</li>
              <li>2019 安全確保支援士(セキュリティスペシャリスト) 秋 未登録</li>
              <li>2018 応用情報技術者試験 春</li>
            </ul>
          </div>
        </div>
        <div className="max-w-xl mb-6" id="contact">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Contact
          </h2>
          <div className="text-base text-gray-700 md:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
            <a>suzu144.iti.b[ at ]gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};