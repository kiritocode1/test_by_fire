import * as React from "react";

function MyComponent(props) {
  return (
    <span className="items-center bg-zinc-950 flex flex-col py-9">
      <div className="justify-between items-center self-center flex w-full max-w-[1290px] gap-5 px-6 py-5 rounded-3xl border-2 border-solid border-white max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <span className="items-stretch flex gap-2.5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e22fb6ceeb46067e708c513d21bcaaaeeb1e44a6342346d451340bee54b3b276?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-[1.37] object-contain object-center w-[41px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-stone-300 text-xl font-medium my-auto">
            Growchief
          </div>
        </span>
        <span className="items-stretch self-stretch flex justify-between gap-5 p-2.5">
          <div className="text-stone-300 text-base leading-6">Home</div>
          <div className="text-stone-300 text-base leading-6">Product</div>
          <div className="text-stone-300 text-base leading-6">Pricing</div>
          <div className="text-stone-300 text-base leading-6">Blog</div>
        </span>
        <span className="justify-center bg-neutral-900 flex gap-2 px-5 py-2 rounded-lg border-[1.35px] border-solid border-stone-500 self-start items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2761c62346f52c8a3bd71b76e85dfc8d3bfd65f7abf23a35449b3839669c5ebb?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-xl font-medium self-stretch grow whitespace-nowrap">
            Star Us | 2.9k
          </div>
        </span>
      </div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[774px] w-full items-stretch px-20 py-12 max-md:max-w-full max-md:mr-1.5 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a23bf9b379f994c6d716dbecd9a520164fba14c6f35a3ec753813fcb7057a7a?apiKey=26d324bcddde4ec09710346b7dc2af54&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative mt-3.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <span className="relative z-[1] flex grow flex-col items-start max-md:max-w-full">
                <div className="items-stretch flex gap-0">
                  <div className="justify-center items-center border backdrop-blur-lg bg-white bg-opacity-10 flex aspect-square flex-col w-10 h-10 px-2 rounded-[30px] border-solid border-white border-opacity-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d31298aee194d4542189ca1e48b90ac258232f6d465a3ca7f221f1bca0fce7d5?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <span className="text-violet-400 text-sm font-medium leading-5 tracking-tight uppercase whitespace-nowrap justify-center items-stretch border backdrop-blur-lg bg-white bg-opacity-10 self-center grow my-auto px-6 py-2 rounded-[30px] border-solid border-white border-opacity-10 max-md:px-5">
                    No More Wasted Time
                  </span>
                </div>
                <div className="text-8xl font-medium leading-[92px] bg-clip-text self-stretch mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Devtools Launch Weeks
                </div>
                <div className="text-white text-xl leading-8 self-stretch mt-4 max-md:max-w-full">
                  We do a whole week of launch around your prouct, including an
                  article, Reddit promotion, influencers posts, and so much more
                </div>
                <div className="items-stretch flex gap-5 mt-12 max-md:mt-10">
                  <span className="text-white text-xl font-medium whitespace-nowrap justify-center items-stretch shadow-lg grow px-9 py-4 rounded-[30px] max-md:px-5">
                    Book a Call
                  </span>
                  <span className="text-white text-xl font-medium whitespace-nowrap justify-center items-stretch border grow px-8 py-4 rounded-[30px] border-solid border-neutral-600 max-md:px-5">
                    Gitroom Blog
                  </span>
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b3308af5ece4123eff6960d8ae16910578541b6a919a35b2e78fe96f9619b?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b3308af5ece4123eff6960d8ae16910578541b6a919a35b2e78fe96f9619b?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b3308af5ece4123eff6960d8ae16910578541b6a919a35b2e78fe96f9619b?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b3308af5ece4123eff6960d8ae16910578541b6a919a35b2e78fe96f9619b?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b3308af5ece4123eff6960d8ae16910578541b6a919a35b2e78fe96f9619b?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b3308af5ece4123eff6960d8ae16910578541b6a919a35b2e78fe96f9619b?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b3308af5ece4123eff6960d8ae16910578541b6a919a35b2e78fe96f9619b?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b3308af5ece4123eff6960d8ae16910578541b6a919a35b2e78fe96f9619b?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative text-stone-300 text-center text-xl font-medium leading-6 self-center mt-24 max-md:max-w-full max-md:mt-10">
          Trusted by
        </div>
        <div className="relative items-stretch self-center flex w-full max-w-[1163px] justify-between gap-5 mt-8 mb-3.5 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57bedb920a5e195e384b822a9b71fe001a5b0f8af0e60a4f2fe709e53c5c4099?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-[5.78] object-contain object-center w-52 overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/506d320a349fbd07bab69d76848ff6a9920b6889a551bdc939cd05c4476efbe8?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-[4.31] object-contain object-center w-[155px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa4ac983aa3b8dbfe43349b1c6e1d2e46b243ee92bc2c018867a599e427ab44?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-[3.31] object-contain object-center w-[119px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/006772e66c2c0febad77171282fefc4366cf4d8781449a4e1825ae444cb3e250?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-[3.64] object-contain object-center w-[131px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83d39b4739923e226270ff857ec84128ca78df77129e92abccff92566d60de0f?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-[4.67] object-contain object-center w-[168px] overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce15f0ffe1378db89a55d9ca0856ac87d9f191c0a0d2e23c9c71e29be5b3111a?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-[3.39] object-contain object-center w-[122px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="justify-between self-stretch flex gap-5 pb-12 items-start max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/925aced8000900c8592e9cd24a6943084699883ff528a2b3f800c92a4815cb58?apiKey=26d324bcddde4ec09710346b7dc2af54&"
          className="aspect-[0.3] object-contain object-center w-[153px] overflow-hidden shrink-0 max-w-full"
        />
        <span className="items-stretch self-center flex grow basis-[0%] flex-col my-auto px-5 max-md:max-w-full">
          <div className="text-purple-400 text-lg tracking-[5.4px] max-md:max-w-full">
            WHAT’S GROWCHIEF
          </div>
          <div className="text-6xl font-medium leading-[64px] bg-clip-text mt-3 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            We specialize in human-centered design where technology serves
            humanity, not the other way around.{" "}
          </div>
          <div className="mt-28 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ee925cf4aea9c9c8b4193fcebfd4986f75a7c5dba906b39531a05be790eefd1?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee925cf4aea9c9c8b4193fcebfd4986f75a7c5dba906b39531a05be790eefd1?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee925cf4aea9c9c8b4193fcebfd4986f75a7c5dba906b39531a05be790eefd1?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee925cf4aea9c9c8b4193fcebfd4986f75a7c5dba906b39531a05be790eefd1?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee925cf4aea9c9c8b4193fcebfd4986f75a7c5dba906b39531a05be790eefd1?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee925cf4aea9c9c8b4193fcebfd4986f75a7c5dba906b39531a05be790eefd1?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee925cf4aea9c9c8b4193fcebfd4986f75a7c5dba906b39531a05be790eefd1?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ee925cf4aea9c9c8b4193fcebfd4986f75a7c5dba906b39531a05be790eefd1?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                  className="aspect-[0.95] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                <div className="text-white text-xl leading-8 my-auto max-md:max-w-full max-md:mt-10">
                  This not only elevates your brand but also solves real-world
                  problems. We see ourselves as your long-term partner – working
                  closely with you for true collaboration, from initial concept
                  to final product. This way, we’re invested in your success.
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
      <div className="justify-center self-center w-full max-w-[1292px] mt-32 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d23daee14869ce5e02093ca35f13f15ebe92e5c0b6ebf097d1aa5e6ebac3618?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[6.03] object-contain object-center w-[476px] overflow-hidden my-auto max-md:max-w-full max-md:mt-7"
            />
          </div>
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-center flex grow flex-col">
              <div className="text-purple-400 text-lg tracking-[5.4px] whitespace-nowrap">
                TESTIMONIALS
              </div>
              <div className="text-center text-6xl font-medium leading-[64px] bg-clip-text self-stretch mt-3 max-md:text-4xl max-md:leading-10">
                What our clients say
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9869cfbd17b76b708a1c1d7f8d2f41a7c334a1519b2ad925923180ea98f23491?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[6.04] object-contain object-center w-[477px] overflow-hidden my-auto max-md:max-w-full max-md:mt-7"
            />
          </div>
        </div>
      </div>
      <div className="items-stretch self-center flex w-full max-w-[1292px] justify-between gap-5 mt-20 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <span className="text-neutral-300 text-xl leading-8 justify-center items-stretch bg-neutral-900 pr-8 pt-32 pb-20 rounded-3xl border-[1.35px] border-solid border-stone-500 max-md:pr-5 max-md:pt-10">
          Nevo's knowledge and expertise in building communities, engaging with
          developers, and reaching out to them wherever they are, is invaluable.
        </span>{" "}
        <span className="items-stretch bg-neutral-900 flex grow basis-[0%] flex-col p-8 rounded-3xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:px-5">
          <div className="items-center flex gap-4 self-start">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/960009fbbd9c2984692e787276218e45906c126ed85440dada8b9473467137ef?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/960009fbbd9c2984692e787276218e45906c126ed85440dada8b9473467137ef?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/960009fbbd9c2984692e787276218e45906c126ed85440dada8b9473467137ef?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/960009fbbd9c2984692e787276218e45906c126ed85440dada8b9473467137ef?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/960009fbbd9c2984692e787276218e45906c126ed85440dada8b9473467137ef?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/960009fbbd9c2984692e787276218e45906c126ed85440dada8b9473467137ef?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/960009fbbd9c2984692e787276218e45906c126ed85440dada8b9473467137ef?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/960009fbbd9c2984692e787276218e45906c126ed85440dada8b9473467137ef?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
            />{" "}
            <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
              <div className="text-white text-2xl font-medium leading-8 whitespace-nowrap">
                Matija Sosic
              </div>{" "}
              <div className="text-slate-500 text-lg leading-7 capitalize">
                CEO @Wasp
              </div>
            </span>
          </div>{" "}
          <div className="text-neutral-300 text-xl leading-8 mt-10 max-md:max-w-full">
            Nevo fundamentally changed how we approach dev marketing and made it
            a whole-team activity that we all enjoy because we see the momentum.
          </div>{" "}
          <span className="items-stretch flex gap-2 mt-10 self-start">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8af64672e556ee3a69488badf54c46ca895b435787b9be5a2545f64133d93b3e?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8af64672e556ee3a69488badf54c46ca895b435787b9be5a2545f64133d93b3e?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8af64672e556ee3a69488badf54c46ca895b435787b9be5a2545f64133d93b3e?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8af64672e556ee3a69488badf54c46ca895b435787b9be5a2545f64133d93b3e?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8af64672e556ee3a69488badf54c46ca895b435787b9be5a2545f64133d93b3e?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8af64672e556ee3a69488badf54c46ca895b435787b9be5a2545f64133d93b3e?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8af64672e556ee3a69488badf54c46ca895b435787b9be5a2545f64133d93b3e?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8af64672e556ee3a69488badf54c46ca895b435787b9be5a2545f64133d93b3e?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
            />{" "}
            <div className="text-white text-2xl font-medium leading-8 grow whitespace-nowrap self-start">
              Wasp
            </div>
          </span>
        </span>{" "}
        <span className="bg-neutral-900 flex grow basis-[0%] flex-col pt-8 pb-12 px-8 rounded-3xl border-[1.35px] border-solid border-stone-500 items-start max-md:max-w-full max-md:px-5">
          <div className="items-center flex gap-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee317017ba5304fb9d246ac7631243e7d7541e4e862a6945ed575c0a4471ade6?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee317017ba5304fb9d246ac7631243e7d7541e4e862a6945ed575c0a4471ade6?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee317017ba5304fb9d246ac7631243e7d7541e4e862a6945ed575c0a4471ade6?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee317017ba5304fb9d246ac7631243e7d7541e4e862a6945ed575c0a4471ade6?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee317017ba5304fb9d246ac7631243e7d7541e4e862a6945ed575c0a4471ade6?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee317017ba5304fb9d246ac7631243e7d7541e4e862a6945ed575c0a4471ade6?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee317017ba5304fb9d246ac7631243e7d7541e4e862a6945ed575c0a4471ade6?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee317017ba5304fb9d246ac7631243e7d7541e4e862a6945ed575c0a4471ade6?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
            />{" "}
            <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
              <div className="text-white text-2xl font-medium leading-8 whitespace-nowrap">
                Tomer Barnea
              </div>{" "}
              <div className="text-slate-500 text-lg leading-7 capitalize">
                CEO @Novu
              </div>
            </span>
          </div>{" "}
          <div className="self-stretch text-neutral-300 text-xl leading-8 mt-10 mb-9 max-md:max-w-full max-md:mt-10">
            Nevo has achieved great growth for Novu in a remarkably short time.
            His creative, and practical strategies have resulted in immediate
            and tangible results.
          </div>
        </span>{" "}
        <span className="items-stretch bg-neutral-900 flex basis-[0%] flex-col pl-8 pt-8 pb-12 rounded-3xl border-[1.35px] border-solid border-stone-500 max-md:pl-5">
          <div className="items-center flex justify-between gap-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d0d5f10bfc412742990ab11d27af9a3ba2228b4f9e0750831f1b72663242?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d0d5f10bfc412742990ab11d27af9a3ba2228b4f9e0750831f1b72663242?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d0d5f10bfc412742990ab11d27af9a3ba2228b4f9e0750831f1b72663242?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d0d5f10bfc412742990ab11d27af9a3ba2228b4f9e0750831f1b72663242?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d0d5f10bfc412742990ab11d27af9a3ba2228b4f9e0750831f1b72663242?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d0d5f10bfc412742990ab11d27af9a3ba2228b4f9e0750831f1b72663242?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d0d5f10bfc412742990ab11d27af9a3ba2228b4f9e0750831f1b72663242?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d0d5f10bfc412742990ab11d27af9a3ba2228b4f9e0750831f1b72663242?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
            />{" "}
            <span className="items-stretch self-stretch flex flex-col">
              <div className="text-white text-2xl font-medium leading-8">
                Nicklas Gellner
              </div>{" "}
              <div className="text-slate-500 text-lg leading-7 capitalize">
                COO @Medusa
              </div>
            </span>
          </div>{" "}
          <div className="text-neutral-300 text-xl leading-8 mt-10 mb-9">
            Nevo is an outstanding Growth Engineer. He really understands how to
            create traction around a developer products and his results speak
            for themselves!
          </div>
        </span>
      </div>{" "}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d836173ee84a12c9716e9a7c5816ff9873a66c65a976f4bcb1f222920cf91c?apiKey=26d324bcddde4ec09710346b7dc2af54&"
        className="aspect-[2.51] object-contain object-center w-[118px] overflow-hidden self-center max-w-full mt-6"
      />{" "}
      <div className="text-purple-400 text-lg tracking-[5.4px] self-center mt-48 max-md:max-w-full max-md:mt-10">
        THE BENEFIT
      </div>{" "}
      <div className="self-center w-[1290px] max-w-full mt-3 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
            <div className="text-6xl font-medium leading-[64px] bg-clip-text w-full max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Crafting quality you’ll remember
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa5e411886622c265a5be6a9e9b9a5e59ff49eeec5a831be555a8ab72b0bc848?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[8.81] object-contain object-center w-[696px] overflow-hidden grow mt-12 max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1290px] mt-14 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
            <span className="items-stretch bg-neutral-900 flex grow flex-col w-full pt-8 px-5 rounded-3xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:mt-7">
              <div className="self-center text-white text-5xl font-medium leading-10 max-md:max-w-full max-md:text-4xl">
                Instant Impact
              </div>{" "}
              <div className="self-center text-neutral-300 text-lg leading-7 w-[675px] max-w-full mt-4">
                From strategizing your optimal UX, to building a flexible
                back-end that syncs with your internal ops, our goal is
                beautifully fluid and flawlessly functional websites that solve
                the right problems—and look really good while they do it.
              </div>{" "}
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae82c7783269844bf15b8103b109c3ee273ff39a354aaf103247a103c707ace8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae82c7783269844bf15b8103b109c3ee273ff39a354aaf103247a103c707ace8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae82c7783269844bf15b8103b109c3ee273ff39a354aaf103247a103c707ace8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae82c7783269844bf15b8103b109c3ee273ff39a354aaf103247a103c707ace8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae82c7783269844bf15b8103b109c3ee273ff39a354aaf103247a103c707ace8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae82c7783269844bf15b8103b109c3ee273ff39a354aaf103247a103c707ace8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae82c7783269844bf15b8103b109c3ee273ff39a354aaf103247a103c707ace8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae82c7783269844bf15b8103b109c3ee273ff39a354aaf103247a103c707ace8?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                className="aspect-[2.51] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch bg-neutral-900 flex grow flex-col w-full pt-8 pb-12 px-8 rounded-3xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:mt-7 max-md:px-5">
              <div className="text-white text-5xl font-medium leading-10 max-md:max-w-full max-md:text-4xl">
                Branding
              </div>{" "}
              <div className="text-neutral-300 text-lg leading-7 mt-4 mb-48 max-md:max-w-full max-md:mb-10">
                From strategizing your optimal UX, to building a flexible
                back-end that syncs with your internal ops, our goal is
                beautifully fluid
              </div>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1290px] mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
            <div className="items-stretch bg-neutral-900 flex grow flex-col justify-center w-full rounded-3xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:mt-7">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5bbb486b54b313a247a19d11abebafce214d5aa1f49208157fa3e2f6c581c25?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bbb486b54b313a247a19d11abebafce214d5aa1f49208157fa3e2f6c581c25?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bbb486b54b313a247a19d11abebafce214d5aa1f49208157fa3e2f6c581c25?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bbb486b54b313a247a19d11abebafce214d5aa1f49208157fa3e2f6c581c25?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bbb486b54b313a247a19d11abebafce214d5aa1f49208157fa3e2f6c581c25?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bbb486b54b313a247a19d11abebafce214d5aa1f49208157fa3e2f6c581c25?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bbb486b54b313a247a19d11abebafce214d5aa1f49208157fa3e2f6c581c25?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bbb486b54b313a247a19d11abebafce214d5aa1f49208157fa3e2f6c581c25?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                className="aspect-[1.11] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch bg-neutral-900 flex grow flex-col w-full pt-8 px-5 rounded-3xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:mt-7">
              <div className="self-center text-white text-5xl font-medium leading-10 max-md:max-w-full max-md:text-4xl">
                Stay on Developers Mind
              </div>{" "}
              <div className="self-center text-neutral-300 text-lg leading-7 w-[675px] max-w-full mt-4">
                From strategizing your optimal UX, to building a flexible
                back-end that syncs with your internal ops, our goal is
                beautifully fluid and flawlessly functional websites that solve
                the right problems—and look really good while they do it.
              </div>{" "}
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9c1164010d68cfe27c853d07c694757f6e0f0cb4bcda2dfe2549aeb5200f0a?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9c1164010d68cfe27c853d07c694757f6e0f0cb4bcda2dfe2549aeb5200f0a?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9c1164010d68cfe27c853d07c694757f6e0f0cb4bcda2dfe2549aeb5200f0a?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9c1164010d68cfe27c853d07c694757f6e0f0cb4bcda2dfe2549aeb5200f0a?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9c1164010d68cfe27c853d07c694757f6e0f0cb4bcda2dfe2549aeb5200f0a?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9c1164010d68cfe27c853d07c694757f6e0f0cb4bcda2dfe2549aeb5200f0a?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9c1164010d68cfe27c853d07c694757f6e0f0cb4bcda2dfe2549aeb5200f0a?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd9c1164010d68cfe27c853d07c694757f6e0f0cb4bcda2dfe2549aeb5200f0a?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                className="aspect-[2.51] object-contain object-center w-full stroke-[2px] stroke-fuchsia-500 stroke-opacity-10 overflow-hidden max-md:max-w-full"
              />
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="justify-center self-center w-full max-w-[1290px] mt-32 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/977c1b27686db01e90f7eb5d3ac2486ac1b23310e1186fc9582eac0d3add4443?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[5.33] object-contain object-center w-[421px] overflow-hidden max-md:max-w-full max-md:mt-1.5"
            />
          </div>{" "}
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-center flex grow flex-col px-3.5 max-md:max-w-full max-md:mt-1.5">
              <div className="text-purple-400 text-lg tracking-[5.4px] whitespace-nowrap">
                OUR PROCESS
              </div>{" "}
              <div className="text-center text-6xl font-medium leading-[64px] bg-clip-text self-stretch whitespace-nowrap mt-3 max-md:text-4xl">
                How We Work
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb53f15b15c134539f60be5f96ac6772a2c62c2aeb7716db869762c9aaa233f4?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[5.34] object-contain object-center w-[422px] overflow-hidden max-md:max-w-full max-md:mt-1.5"
            />
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1097px] mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
            <span className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-white text-5xl font-medium leading-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Topic Selection and Article Preparation
              </div>{" "}
              <div className="text-neutral-300 text-lg leading-7 mt-6 max-md:max-w-full">
                The process begins with the provision of various topics from
                which you can choose. This selection phase typically takes 1-2
                days. Once the topic is selected, the next step is to work on
                the article. This stage involves research, drafting, and
                finalizing the article, which usually takes about 7 days.
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1358d9229e7cca0c47e8e62432c45097c8b1beb01b7c3e8103c6e8475db44d8c?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[1.24] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
            />
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1078px] mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
            <span className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-white text-5xl font-medium leading-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Article Posting and Promotion
              </div>{" "}
              <div className="text-neutral-300 text-lg leading-7 mt-6 max-md:max-w-full">
                After the article is ready, it's time to post it. The article
                should be posted on a specific date for maximum impact. Once
                posted, the article should be promoted on various platforms.
                This includes posting the article on Reddit with the aim of
                making it trending. Additionally, the article should be
                cross-posted on Hashnode and Medium to reach a wider audience.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/612d27e02605043758701f94d01f1bc9a6897695b804af7e9bc26e9b218ab014?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[1.3] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="self-center w-[1097px] max-w-full mt-20 max-md:mt-10 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
            <span className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-white text-5xl font-medium leading-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Traffic Generation and Trending Potential
              </div>
              <div className="text-neutral-300 text-lg leading-7 mt-6 max-md:max-w-full">
                The final section of the process involves driving traffic to
                your website. This is achieved through the use of an influencer,
                who will promote your article 2 days after it has been posted.
                <br />
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a331b057c17e99d7adbacef666f4d36a5c34a4551ec8b7629c691f9dbeb2918e?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[0.71] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="text-indigo-500 text-center text-base font-medium leading-5 tracking-[3.2px] uppercase self-center whitespace-nowrap mt-32 max-md:mt-10">
        FAQ
      </div>
      <div className="self-center text-center text-6xl font-medium leading-[64px] bg-clip-text mt-4 max-md:max-w-full max-md:text-4xl">
        Frequently Asked Questions
      </div>
      <div className="text-neutral-300 text-center text-lg leading-7 self-center max-w-[373px] mt-4">
        Still unsure? Find the answers you’re looking for here in our laatest
        FAQ
      </div>
      <span className="justify-center items-stretch self-center bg-neutral-900 flex w-full max-w-[1070px] flex-col mt-10 p-8 rounded-2xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:px-5">
        <span className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-white text-xl font-medium leading-5 my-auto">
            What are launch weeks
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d403a9566d146f88cc07a1542dc6103556c3bb612e7e67d33aca4a7fa8a2da?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </span>
        <div className="text-neutral-300 text-sm leading-5 mt-2 max-md:max-w-full">
          Launch weeks is a concept of driving traffic into a specific source
          within a week.
          <br />
          The goal is to achieve virality. Most platforms reward you when you
          bring massive traffic in a short period. That's the best way to drive
          a lot of attention in a short time.
          <br />
          Once the launch week is finished, you will remain with unique assets
          that drive SEO traffic.
          <br />
          The service is Done-For-You. Sit back and relax. We take care of
          everything.
        </div>
      </span>{" "}
      <div className="justify-center items-stretch self-center bg-neutral-900 flex w-full max-w-[1070px] flex-col mt-6 p-8 rounded-2xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:px-5">
        <span className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-white text-xl font-medium leading-5 grow shrink basis-auto my-auto">
            What type of content do you write?
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e890bffe43f2e4f667dfd9d5e8a4f90a4618f30e629b948a8377ff3981bfba9?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </span>
      </div>{" "}
      <div className="justify-center items-stretch self-center bg-neutral-900 flex w-full max-w-[1070px] flex-col mt-6 p-8 rounded-2xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:px-5">
        <span className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-white text-xl font-medium leading-5 grow shrink basis-auto my-auto">
            Can you work with any company?
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e890bffe43f2e4f667dfd9d5e8a4f90a4618f30e629b948a8377ff3981bfba9?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </span>
      </div>{" "}
      <div className="justify-center items-stretch self-center bg-neutral-900 flex w-full max-w-[1070px] flex-col mt-6 p-8 rounded-2xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:px-5">
        <span className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-white text-xl font-medium leading-5 grow shrink basis-auto my-auto">
            How do I know it will work?
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e890bffe43f2e4f667dfd9d5e8a4f90a4618f30e629b948a8377ff3981bfba9?apiKey=26d324bcddde4ec09710346b7dc2af54&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </span>
      </div>{" "}
      <div className="text-indigo-500 text-center text-base font-medium leading-5 tracking-[3.2px] uppercase self-center whitespace-nowrap mt-32 max-md:mt-10">
        pricing
      </div>{" "}
      <div className="text-center text-6xl font-medium leading-[64px] bg-clip-text self-center mt-4 max-md:max-w-full max-md:text-4xl">
        The Startup Package
      </div>{" "}
      <div className="self-center text-neutral-300 text-center text-lg leading-7 max-w-[621px] mt-4 max-md:max-w-full">
        Should you be unsatisfied with the initial article, we are committed to
        offering a full refund.
      </div>{" "}
      <div className="self-stretch px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/620158c624e5a67c1aa6de05d02d1903b4f4c67a37aa13cf46972f1f422f8f06?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/620158c624e5a67c1aa6de05d02d1903b4f4c67a37aa13cf46972f1f422f8f06?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/620158c624e5a67c1aa6de05d02d1903b4f4c67a37aa13cf46972f1f422f8f06?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/620158c624e5a67c1aa6de05d02d1903b4f4c67a37aa13cf46972f1f422f8f06?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/620158c624e5a67c1aa6de05d02d1903b4f4c67a37aa13cf46972f1f422f8f06?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/620158c624e5a67c1aa6de05d02d1903b4f4c67a37aa13cf46972f1f422f8f06?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/620158c624e5a67c1aa6de05d02d1903b4f4c67a37aa13cf46972f1f422f8f06?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/620158c624e5a67c1aa6de05d02d1903b4f4c67a37aa13cf46972f1f422f8f06?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[0.83] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
            />
          </div>{" "}
          <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-sm bg-neutral-900 flex flex-col w-full mt-12 p-8 rounded-3xl border-[1.35px] border-solid border-stone-500 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="text-white text-3xl font-medium leading-8 max-md:max-w-full">
                Explosive Growth
              </div>{" "}
              <div className="text-neutral-300 text-sm leading-5 mt-2 max-md:max-w-full">
                Perfect for your next content, leave to us and enjoy the result!
              </div>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c02aae35a53a37293b7c1a78897e2efebdfe59b779f6f6240fb886e901e05012?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                className="aspect-[459] object-contain object-center w-full stroke-[1px] stroke-zinc-800 overflow-hidden mt-6 max-md:max-w-full"
              />{" "}
              <span className="items-center flex justify-between gap-2 mt-6 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/124690f40b541d2d6d01efdb15e66ffc2380430f86ae21ccac9b5c2f35dc5c43?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
                />{" "}
                <div className="text-neutral-300 text-2xl leading-9 self-stretch grow whitespace-nowrap">
                  10 Launch Weeks
                </div>
              </span>{" "}
              <span className="items-center flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/124690f40b541d2d6d01efdb15e66ffc2380430f86ae21ccac9b5c2f35dc5c43?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
                />{" "}
                <div className="text-neutral-300 text-2xl leading-9 self-stretch grow whitespace-nowrap">
                  10 Influencers Posts
                </div>
              </span>{" "}
              <span className="items-center flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/124690f40b541d2d6d01efdb15e66ffc2380430f86ae21ccac9b5c2f35dc5c43?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
                />{" "}
                <div className="text-neutral-300 text-2xl leading-9 self-stretch grow whitespace-nowrap">
                  100,000 views
                </div>
              </span>{" "}
              <span className="items-center flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/124690f40b541d2d6d01efdb15e66ffc2380430f86ae21ccac9b5c2f35dc5c43?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
                />{" "}
                <div className="text-neutral-300 text-2xl leading-9 self-stretch grow whitespace-nowrap">
                  10 Reddit Posts
                </div>
              </span>{" "}
              <span className="items-center flex justify-between gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/124690f40b541d2d6d01efdb15e66ffc2380430f86ae21ccac9b5c2f35dc5c43?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
                />{" "}
                <div className="text-neutral-300 text-2xl leading-9 self-stretch grow whitespace-nowrap">
                  2 Hours Marketing Consultation
                </div>
              </span>{" "}
              <span className="text-white text-xl font-medium whitespace-nowrap justify-center items-center shadow-lg mt-6 px-16 py-4 rounded-[30px] max-md:max-w-full max-md:px-5">
                Book a Call
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5d5be5c3ca9cf4503f400e1c4235c2629d2cbd289e98d81f4d61b237ee413f8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5d5be5c3ca9cf4503f400e1c4235c2629d2cbd289e98d81f4d61b237ee413f8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5d5be5c3ca9cf4503f400e1c4235c2629d2cbd289e98d81f4d61b237ee413f8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5d5be5c3ca9cf4503f400e1c4235c2629d2cbd289e98d81f4d61b237ee413f8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5d5be5c3ca9cf4503f400e1c4235c2629d2cbd289e98d81f4d61b237ee413f8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5d5be5c3ca9cf4503f400e1c4235c2629d2cbd289e98d81f4d61b237ee413f8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5d5be5c3ca9cf4503f400e1c4235c2629d2cbd289e98d81f4d61b237ee413f8?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5d5be5c3ca9cf4503f400e1c4235c2629d2cbd289e98d81f4d61b237ee413f8?apiKey=26d324bcddde4ec09710346b7dc2af54&"
              className="aspect-[0.83] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
            />
          </div>
        </div>
      </div>{" "}
      <div className="justify-center bg-neutral-900 self-center w-[1287px] max-w-full mt-24 pl-16 py-px rounded-[40px] border-[1.35px] border-solid border-stone-500 max-md:mt-10 max-md:pl-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
            <span className="z-[1] flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
              <div className="text-5xl font-medium leading-[52px] bg-clip-text self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Ready to build something? <br />
                Go with us!
              </div>{" "}
              <div className="text-neutral-300 text-lg leading-7 self-stretch mt-6 max-md:max-w-full">
                We merge tech with marketing. Helping you trend on different
                platforms. Gain genuine clients, effortlessly.
              </div>{" "}
              <span className="text-white text-xl font-medium whitespace-nowrap justify-center items-center shadow-lg w-60 max-w-full mt-6 px-16 py-4 rounded-[30px] max-md:px-5">
                Book a Call
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col text-stone-300 text-base font-bold relative whitespace-nowrap overflow-hidden min-h-[443px] grow items-center pt-7 pb-80 px-16 max-md:max-w-full max-md:pb-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8b266d965cc3cb46f4a56d8d6a4b447e9d7a246c58e4e57c6de569c1fe958fa?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b266d965cc3cb46f4a56d8d6a4b447e9d7a246c58e4e57c6de569c1fe958fa?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b266d965cc3cb46f4a56d8d6a4b447e9d7a246c58e4e57c6de569c1fe958fa?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b266d965cc3cb46f4a56d8d6a4b447e9d7a246c58e4e57c6de569c1fe958fa?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b266d965cc3cb46f4a56d8d6a4b447e9d7a246c58e4e57c6de569c1fe958fa?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b266d965cc3cb46f4a56d8d6a4b447e9d7a246c58e4e57c6de569c1fe958fa?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b266d965cc3cb46f4a56d8d6a4b447e9d7a246c58e4e57c6de569c1fe958fa?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8b266d965cc3cb46f4a56d8d6a4b447e9d7a246c58e4e57c6de569c1fe958fa?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              by
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="justify-center items-stretch self-stretch flex w-full flex-col mt-6 pt-12 px-20 max-md:max-w-full max-md:px-5">
        <div className="items-stretch flex justify-between gap-5 mt-3.5 px-0.5 max-md:max-w-full max-md:flex-wrap">
          <span className="items-stretch flex flex-col">
            <span className="items-stretch flex justify-between gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8772df93fb0fa36557bf5082ac4a46bdca51d919323d801d163b7888c95f4134?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                className="aspect-[1.36] object-contain object-center w-[87px] justify-center items-center overflow-hidden shrink-0 max-w-full"
              />{" "}
              <div className="text-white text-4xl font-medium my-auto">
                Growchief
              </div>
            </span>{" "}
            <div className="text-gray-400 text-base leading-6 mt-8">
              We do a whole week of launch around your prouct, including an
              article, Reddit promotion, influencers posts, and so much more
            </div>
          </span>{" "}
          <span className="items-stretch flex flex-col self-start max-md:max-w-full">
            <div className="text-white text-3xl font-medium leading-9 max-md:max-w-full">
              Subscribe to Our Newsletter
            </div>{" "}
            <div className="items-stretch flex justify-between gap-4 mt-7 max-md:max-w-full max-md:flex-wrap">
              <span className="text-white text-base leading-6 whitespace-nowrap justify-center grow pl-6 pr-16 py-4 rounded-[80px] border-2 border-solid border-neutral-700 items-start max-md:px-5">
                Your email address
              </span>{" "}
              <span className="text-white text-xl font-medium whitespace-nowrap justify-center items-stretch shadow-lg grow px-10 py-4 rounded-[30px] max-md:px-5">
                Subscribe
              </span>
            </div>
          </span>
        </div>{" "}
        <div className="z-[1] mt-0 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[73%] max-md:w-full max-md:ml-0">
              <div className="justify-between items-stretch flex w-full gap-5 my-auto px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="items-stretch flex justify-between gap-5">
                  <span className="items-start flex flex-col">
                    <div className="text-white text-xl font-medium leading-6 self-stretch whitespace-nowrap">
                      Page
                    </div>{" "}
                    <div className="text-gray-400 text-center text-base leading-6 whitespace-nowrap mt-6 self-start">
                      Home
                    </div>{" "}
                    <div className="text-gray-400 text-center text-base leading-6 whitespace-nowrap mt-4 self-start">
                      Pricing
                    </div>{" "}
                    <div className="text-gray-400 text-center text-base leading-6 whitespace-nowrap mt-4 self-start">
                      Blog
                    </div>
                  </span>{" "}
                  <span className="items-stretch flex flex-col">
                    <div className="text-white text-xl font-medium leading-6 whitespace-nowrap">
                      Resources
                    </div>{" "}
                    <div className="text-gray-400 text-center text-base leading-6 whitespace-nowrap mt-6 max-md:mr-0.5">
                      Book a Call
                    </div>{" "}
                    <div className="text-gray-400 text-center text-base leading-6 whitespace-nowrap mt-4 max-md:mr-0.5">
                      Term of Use
                    </div>{" "}
                    <div className="text-gray-400 text-center text-base leading-6 whitespace-nowrap mt-4 max-md:mr-0.5">
                      Privacy Policy
                    </div>
                  </span>
                </div>{" "}
                <div className="flex items-stretch justify-between gap-5 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6a291552c88558f81e92fd6a6e424ee2ef3c964dd7792bd10343c6128757bfb?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                    className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4850486f05673a1dce3db347cf619db066f6105ddd7830ec29ab6dbb6cbcec9e?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                    className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/65b3bf14d15259832e2929b7d919f4129f11180a077f3b7bae2e5e3b539e3584?apiKey=26d324bcddde4ec09710346b7dc2af54&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/65b3bf14d15259832e2929b7d919f4129f11180a077f3b7bae2e5e3b539e3584?apiKey=26d324bcddde4ec09710346b7dc2af54&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65b3bf14d15259832e2929b7d919f4129f11180a077f3b7bae2e5e3b539e3584?apiKey=26d324bcddde4ec09710346b7dc2af54&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/65b3bf14d15259832e2929b7d919f4129f11180a077f3b7bae2e5e3b539e3584?apiKey=26d324bcddde4ec09710346b7dc2af54&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/65b3bf14d15259832e2929b7d919f4129f11180a077f3b7bae2e5e3b539e3584?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65b3bf14d15259832e2929b7d919f4129f11180a077f3b7bae2e5e3b539e3584?apiKey=26d324bcddde4ec09710346b7dc2af54&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/65b3bf14d15259832e2929b7d919f4129f11180a077f3b7bae2e5e3b539e3584?apiKey=26d324bcddde4ec09710346b7dc2af54&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/65b3bf14d15259832e2929b7d919f4129f11180a077f3b7bae2e5e3b539e3584?apiKey=26d324bcddde4ec09710346b7dc2af54&"
                className="aspect-[1.41] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default MyComponent;