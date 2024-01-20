import React from 'react'
import Logo2 from '../../assets/Logo2.svg'
import placeholder2 from '../../assets/placeholder2.jpg'
import placeholder from '../../assets/placeholder.jpg'
import placeholder1 from '../../assets/placeholder1.jpg'
import ofmflex from '../../assets/ofmflex.jpg'


function Home() {
  return (
    <div data-sveltekit-preload-data="hover" data-theme="skeleton">
    <div style={{display: "contents"}} class="h-full overflow-hidden">
      <nav class="hidden lg:block w-full fixed z-10 top-0 left-0">
        <div class="sub-nav bg-primary-500 h-[50px] text-primary-50 svelte-1eir9q0">
          <div class="container xs:px-6 mx-auto flex h-full justify-between">
            <ul class="flex gap-6 svelte-1eir9q0">
              <li class="svelte-1eir9q0">
                <a
                  href="tel:800-784-9402"
                  class="sub-link gap-1 svelte-1eir9q0"
                >
                  <span>
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <path
                        d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Call Us Today! 800-784-9402
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a
                  href="mailto:emailexample@gmail.com"
                  class="sub-link gap-1 svelte-1eir9q0"
                >
                  <span>
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <path
                        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>{" "}
                  emailexample@gmail.com
                </a>
              </li>
            </ul>
            <ul class="flex gap-6 svelte-1eir9q0">
              <li class="social-icon-li svelte-1eir9q0">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link svelte-1eir9q0"
                >
                  <svg viewBox="0 0 24 24" width="1em" height="1em">
                    <path
                      d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="social-icon-li svelte-1eir9q0">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link svelte-1eir9q0"
                >
                  <svg viewBox="0 0 24 24" width="1em" height="1em">
                    <path
                      d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="social-icon-li svelte-1eir9q0">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link svelte-1eir9q0"
                >
                  <svg viewBox="0 0 24 24" width="1em" height="1em">
                    <path
                      d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>

              <li class="svelte-1eir9q0">
                <a href="" class="sub-link svelte-1eir9q0">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="main-nav bg-secondary-50 text-tertiary-500">
          <div class="container flex justify-between h-[118px]">
            <div class="logo flex">
              <a
                href="/"
                class="logo-link flex justify-center max-w-[320px]"
              >
                <img
                  src={Logo2}
                  class="object-contain cursor-pointer"
                  alt="Officemotive Logo"
                />
              </a>
            </div>
            <div class="flex wrapper z-0 relative svelte-1eir9q0">
              <ul class="nav-links flex gap-6 svelte-1eir9q0">
                <li class="nav-li svelte-1eir9q0 active">
                  <a href="/" class="nav-link svelte-1eir9q0">
                    Home
                  </a>
                </li>
                <li class="nav-li svelte-1eir9q0">
                  <a href="/services" class="nav-link svelte-1eir9q0">
                    Services
                  </a>
                </li>
                <li class="nav-li svelte-1eir9q0">
                  <a href="/industries" class="nav-link svelte-1eir9q0">
                    Industries
                  </a>

                  <ul class="sub-menu bg-secondary-500 svelte-1eir9q0">
                    <div class="flex justify-between">
                      <li class="featured-menu-row bg-primary-50 px-8 svelte-1eir9q0">
                        <ul class="svelte-1eir9q0">
                          <li>
                            <h5 class="small-title uppercase">Featured</h5>
                          </li>
                          <ul class="featured-menu svelte-1eir9q0">
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Top Life Sciences Insights
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Top Consumer Products Insights
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Top Retail Insights
                              </a>
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <li class="sub-menu-row svelte-1eir9q0">
                        <ul class="svelte-1eir9q0">
                          <li class="svelte-1eir9q0">
                            <a href="" class="svelte-1eir9q0">
                              <h5 class="sub-title svelte-1eir9q0">
                                Life Sciences
                              </h5>
                            </a>
                          </li>
                          <ul class="row-menu svelte-1eir9q0">
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                BiotechBiotech Biotech BiotechBiotech
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Generics
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Pharmaceutical
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Cell and Gene Therapy Pharmaceutical
                                Generics
                              </a>
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <li class="sub-menu-row svelte-1eir9q0">
                        <ul class="svelte-1eir9q0">
                          <li class="svelte-1eir9q0">
                            <a href="" class="svelte-1eir9q0">
                              <h5 class="sub-title svelte-1eir9q0">
                                Life Sciences
                              </h5>
                            </a>
                          </li>
                          <ul class="row-menu svelte-1eir9q0">
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Biotech
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Generics
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Pharmaceutical
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Cell and Gene Therapy
                              </a>
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <li class="sub-menu-row svelte-1eir9q0">
                        <ul class="svelte-1eir9q0">
                          <li class="svelte-1eir9q0">
                            <a href="" class="svelte-1eir9q0">
                              <h5 class="sub-title svelte-1eir9q0">
                                Life Sciences
                              </h5>
                            </a>
                          </li>
                          <ul class="row-menu svelte-1eir9q0">
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Biotech
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Generics
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Pharmaceutical
                              </a>
                            </li>
                            <li class="svelte-1eir9q0">
                              <a href="" class="svelte-1eir9q0">
                                <span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                  >
                                    <path
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                                Cell and Gene Therapy
                              </a>
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <button class="btn mr-auto mt-10 variant-ghost-primary font-semibold hover:variant-soft-primary absolute right-36 bottom-8">
                        View All Industries
                      </button>
                    </div>
                  </ul>
                </li>
                <li class="nav-li svelte-1eir9q0">
                  <a href="/insights" class="nav-link svelte-1eir9q0">
                    Insights
                  </a>
                </li>
                <li class="nav-li svelte-1eir9q0">
                  <a href="/about-us" class="nav-link svelte-1eir9q0">
                    About Us
                  </a>
                </li>
                <li class="nav-li svelte-1eir9q0">
                  <a href="/blog" class="nav-link svelte-1eir9q0">
                    Blog
                  </a>
                </li>
                <button class="search-btn flex items-center cursor-pointer text-[22px] hover:text-primary-500">
                  <svg viewBox="0 0 24 24" width="1em" height="1em">
                    <path
                      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </ul>

              <div class="search-input absolute svelte-1eir9q0">
                <fieldset class="relative w-full flex flex-row-reverse">
                  <label for="">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search..."
                      class="w-[350px]"
                    />
                  </label>
                  <span class="icon absolute top-[50%] w-[40px] justify-center -translate-y-2/4 text-secondary-500 text-xl bg-primary-500 h-full items-center flex">
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <path
                        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </fieldset>
                <button class="text-xl pl-4 hover:text-primary-500">
                  <svg viewBox="0 0 24 24" width="1em" height="1em">
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav class="mobile-nav lg:hidden svelte-1eir9q0">
        <div class="container flex justify-between py-4">
          <div class="logo">
            <a href="/" class="logo-link flex justify-center max-w-[240px]">
              <img
                src={Logo2}
                class="object-contain cursor-pointer"
                alt="Officemotive Logo"
              />
            </a>
          </div>
          <div class="menu flex items-center">
            <span class="menu text-3xl hover:text-primary-500">
              <svg viewBox="0 0 24 24" width="1em" height="1em">
                <path
                  d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div class="nav-items flex opacity-0 bg-secondary-500 right-0 py-10 px-6 fixed w-0 z-20 svelte-1eir9q0">
          <ul class="flex flex-col gap-5 svelte-1eir9q0">
            <li class="svelte-1eir9q0">
              <a href="/" class="slide-li svelte-1eir9q0">
                Home
              </a>
            </li>
            <li class="svelte-1eir9q0">
              <a href="/services" class="slide-li svelte-1eir9q0">
                Services
              </a>
            </li>
            <li class="svelte-1eir9q0">
              <a href="/industries" class="slide-li svelte-1eir9q0">
                Industries
              </a>
            </li>
            <li class="svelte-1eir9q0">
              <a href="/insights" class="slide-li svelte-1eir9q0">
                Insights
              </a>
            </li>
            <li class="svelte-1eir9q0">
              <a href="/about-us" class="slide-li svelte-1eir9q0">
                About Us
              </a>
            </li>
            <li class="svelte-1eir9q0">
              <a href="/blog" class="slide-li svelte-1eir9q0">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="main-wrapper svelte-1eir9q0">
        <section class="hero relative h-[60vh] max-h-[650px] pt-12 pb-4 xl:pt-20 xl:pb-12 svelte-1mg8wh2">
          <div class="flex container  flex-col justify-center h-full">
            <div class="flex xs:pt-8 max-w-[45pc] lg:max-w-[37pc] xl:max-w-[50pc] items-center flex-col flex-1 pt-0 xl:pt-10">
              <div class="text-white">
                <h1 class="text-primary-50 font-bold text-5xl pb-7 uppercase">
                  Maximize the potential of your business.
                </h1>
                <h5 class="text-primary-50 text-[1.4rem] pb-8">
                  {" "}
                  Achieve more, with less, by working smarter. Accelerate
                  growth, improve profitability, and stay ahead.{" "}
                </h5>
                <button class="btn variant-filled-warning px-10 font-semibold">
                  Find out more
                </button>
              </div>
            </div>
            <div class="sm:hidden xs:hidden lg:flex img-hero absolute right-0 bottom-0 top-0 w-2/5 svelte-1mg8wh2">
              <img
                src={placeholder2}
                class="xs:hidden sm:flex opacity-90 h-full w-full object-cover hover:opacity-100 ease-in duration-300 transition-all"
              />
            </div>
            <div class="hero-navigation flex xs:hidden">
              <ul class="flex xl:gap-4">
                <li class="hero-li svelte-1mg8wh2 active">
                  <button class="hero-link svelte-1mg8wh2">
                    Process Design
                  </button>
                </li>
                <li class="hero-li svelte-1mg8wh2">
                  <button class="hero-link svelte-1mg8wh2">
                    Implementation
                  </button>
                </li>
                <li class="hero-li svelte-1mg8wh2">
                  <button class="hero-link svelte-1mg8wh2">
                    Administration
                  </button>
                </li>
                <li class="hero-li svelte-1mg8wh2">
                  <button class="hero-link svelte-1mg8wh2">
                    Systems and Software
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="mobile-hero-swiper xs:flex hidden svelte-1mg8wh2">
            <span class="active svelte-1mg8wh2"></span>
            <span class="svelte-1mg8wh2"></span>
            <span class="svelte-1mg8wh2"></span>
            <span class="svelte-1mg8wh2"></span>
          </div>
        </section>
        <button class="btn py-4 fixed variant-filled-warning tracking-wide text-[18px] px-12 top-[50%] z-10 rotate-90 svelte-1guszya">
          <span>Contact</span>
        </button>
        <section class="py-14">
          <div class="container xs:flex-col flex text-center">
            <div style={{backgroundImage:`url(${ofmflex})`}} class={`col-6 bg-flex-img  bg-cover bg-center xs:w-[full] xs:h-[300px]`}></div>
            <div class="col-6 xs:py-4 py-14 xs:px-0 px-8">
              <h4 class="bg-clip-text tracking-wider text-[1.6rem] text-transparent bg-gradient-to-r from-primary-500 to-surface-50 uppercase font-extrabold">
                Rethink, Reimagine, Reinvent
              </h4>
              <h4 className='text-[1.6rem]'>Empowering Your Business for Success</h4>
              <h5 class="mx-auto text-[1.4rem] pt-8">
                Officemotive helps businesses perform better by redesigning
                and <b>optimizing business processes</b>
                with smart,
                <b>technology-driven solutions</b>, guided by human insight,
                powered by
                <b>proven best practices</b>.
              </h5>
            </div>
          </div>
        </section>
        <section class="xs:py-14 py-28 bg-surface-600 bg-opacity-40">
          <div class="container flex flex-col justify-center items-center">
            <h5 class="text-center small-title mb-4">OUR SOLUTIONS</h5>
            <div class="content  text-center">
              <h3 class="mb-10 text-3xl font-bold text-primary-500">
                A Comprehensive Suite of Core Business Process Capabilities
                Designed for Innovation, Customization, and Results.
              </h3>
            </div>
            <div class="description">
              <p class="text-left mb-5">
                Our modular approach to business process design and
                operations management means that stability, flexibility, and
                customization are built into every solution. We combine
                industry-specific knowledge with proven process design
                strategies, and an organizational platform that will have
                your business humming like a well oiled machine.
              </p>
              <p class="text-left">
                Our modular approach to business process design and
                operations management means that stability, flexibility, and
                customization are built into every solution. We combine
                industry-specific knowledge with proven process design
                strategies, and an organizational platform that will have
                your business humming like a well oiled machine.
              </p>
            </div>

            <div class="card-wrapper xs:flex-col flex xs:gap-2 gap-24 xs:mt-6 mt-24">
              <div class="col-6 flex flex-col gap-2">
                <a href="" class="card-s group svelte-tu9hlb">
                  <div class="flex justify-center text-primary-500 text-[60px]"></div>
                  <h4 class="effect-b text-2xl svelte-tu9hlb">
                    Business Process Management
                  </h4>
                  <div class="description">
                    <p>
                      We use advanced technology and process administration
                      best practices to streamline and optimize your
                      business function. Complete, turnkey solutions,
                      managed by us, that give you the freedom to let go, so
                      you can focus on your core business activities, with
                      the peace of mind of knowing that your organization is
                      in good hands.
                    </p>
                  </div>
                  <div class="uppercase text-md mt-6 text-primary-500 font-bold flex items-center gap-1">
                    Learn more{" "}
                    <span class="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
                <a href="" class="card-s group svelte-tu9hlb">
                  <h4 class="effect-b text-2xl svelte-tu9hlb">
                    Customer Relationship Management
                  </h4>
                  <div class="description">
                    <p>
                      Take control of your customer relationships and drive
                      your business forward with every interaction. Bring
                      your customers into the peaceful world of streamlined
                      workflows, full operational transparency, real-time
                      information, and quality engagement on every level. We
                      analyze and design customer experience as a process,
                      mapping the complete customer engagement journey, from
                      beginning to end, and building custom software and
                      support solutions that optimize relationships, with
                      identifiable and measurable metrics.
                    </p>
                  </div>
                  <div class="uppercase text-md mt-6 text-primary-500 font-bold flex items-center gap-1">
                    Learn more{" "}
                    <span class="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
                <a href="" class="card-s group svelte-tu9hlb">
                  <h4 class="effect-b text-2xl svelte-tu9hlb">
                    Clerical and Word Processing Solutions
                  </h4>
                  <div class="description">
                    <p>
                      By leveraging our advanced technology and business
                      knowhow, we are able to improve efficiency, reduce
                      cost, and increase productivity of every key back
                      office function. At the same time, we optimize value
                      to the organization through smart integration with
                      down- and upstream processes, realizing the full value
                      of these core functions to your business performance.
                    </p>
                  </div>
                  <div class="uppercase text-md mt-6 text-primary-500 font-bold flex items-center gap-1">
                    Learn more{" "}
                    <span class="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
              <div class="col-6 border-col flex flex-col gap-2">
                <a href="" class="card-s group svelte-tu9hlb">
                  <h4 class="effect-b text-2xl svelte-tu9hlb">Communications</h4>
                  <div class="description">
                    <p>
                      With our unified, integrated communication solutions
                      seamlessly woven into every business process, teams
                      harmonize, projects thrive, and businesses perform
                      better. Step into a world where people, platforms, and
                      processes all work together seamlessly:
                      enterprise-wide collaboration and effective teamwork
                      through advanced communication systems design and
                      management.
                    </p>
                  </div>
                  <div class="uppercase text-md mt-6 text-primary-500 font-bold flex items-center gap-1">
                    Learn more{" "}
                    <span class="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
                <a href="" class="card-s group svelte-tu9hlb">
                  <h4 class="effect-b text-2xl svelte-tu9hlb">
                    Software and Applications
                  </h4>
                  <div class="description">
                    <p>
                      Our fully integrated platform brings all the
                      convenience and security of best-in-class cloud native
                      technology, fully customized to your unique business
                      process requirements. Access your entire business –
                      data, people, processes – with full visibility and
                      control, from anywhere, any time.
                    </p>
                  </div>
                  <div class="uppercase text-md mt-6 text-primary-500 font-bold flex items-center gap-1">
                    Learn more{" "}
                    <span class="flex items-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="xs:py-14 py-24 bg-primary-50">
          <div class="container flex flex-col justify-center items-center xs:pb-0 pb-8">
            <h5 class="text-center text-xl small-title mb-4">
              INDUSTRIES WE SERVE
            </h5>
            <h3 class="text-center text-3xl font-bold text-primary-500 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h3>
            <div class="container text-left">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores quasi, rerum velit enim temporibus vero odio
                placeat! Eos rerum placeat quibusdam perferendis quo impedit
                assumenda? Quo necessitatibus voluptas ducimus incidunt?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid id quos impedit, explicabo labore sunt, veritatis
                eius nam aut animi blanditiis temporibus nulla culpa,
                voluptatum asperiores adipisci praesentium modi voluptate?
              </p>
            </div>
            <div class="container xs:flex-col flex gap-2 justify-between text xs:mt-8 mt-24">
              <div class="row svelte-1a4mm26">
                <ul>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Banking
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Church and Ministry
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Communications &amp; Media
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Education
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Transportation &amp; Logistics
                  </li>
                </ul>
              </div>
              <div class="row svelte-1a4mm26">
                <ul>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Government
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Healthcare
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Insurance
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Legal and Law Enforcement
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Travel &amp; Hospitality
                  </li>
                </ul>
              </div>
              <div class="row svelte-1a4mm26">
                <ul>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Life Sciences
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Manufacturing
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Non-profit
                  </li>
                  <li class="svelte-1a4mm26">
                    <span class="svelte-1a4mm26">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Retail
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="xs:py-14 py-24 svelte-r5pdte">
          <div class="container svelte-r5pdte">
            <h5 class="mb-4 text-center small-title svelte-r5pdte">
              <a href="/blog" class="svelte-r5pdte">
                FROM OUR BLOG
              </a>
            </h5>
            <h3 class="mb-10 text-primary-500 text-3xl font-bold text-center svelte-r5pdte">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam alias molestiae.
            </h3>
            <div class="svelte-r5pdte">
              <p class="svelte-r5pdte">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Alias vero qui expedita neque, odio id modi maxime illo quis
                eius esse ratione ipsum beatae, aspernatur minus dolorem!
                Sit, explicabo rerum! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Ratione nostrum eos
                perferendis possimus dolorum nihil delectus corporis optio
                reprehenderit animi a doloribus modi, maiores, deleniti
                nobis deserunt dolor explicabo illum!
              </p>
            </div>

            <div class="blog-wrapper xs:flex-row xs:overflow-auto xs:mt-8 mt-24 xs:columns-1 columns-3 gap-2 flex justify-between svelte-r5pdte">
              <a
                href="/blog/article"
                class="post group hover:shadow-xl transition duration-300 ease-in-out svelte-r5pdte"
              >
                <div class="img-wrapper overflow-hidden svelte-r5pdte">
                  <img
                    src={placeholder}
                    alt=""
                    class="transition duration-300 ease-in-out group-hover:scale-110 svelte-r5pdte"
                  />
                </div>
                <div class="my-4 svelte-r5pdte">
                  <div class="tags flex justify-center">
                    <span class="tag badge hover:variant-soft-primary variant-ringed-primary rounded-none align-middle svelte-1t48heh">
                      Press
                    </span>
                    <span class="tag badge hover:variant-soft-primary variant-ringed-primary rounded-none align-middle svelte-1t48heh">
                      Marketing
                    </span>
                    <span class="tag badge hover:variant-soft-primary variant-ringed-primary rounded-none align-middle svelte-1t48heh">
                      Blog
                    </span>
                  </div>
                </div>
                <div class="post-content svelte-r5pdte">
                  <h5 class="post-title text-2xl group-hover:text-primary-500 svelte-r5pdte">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h5>
                  <div class="post-text text-center svelte-r5pdte">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Labore sit voluptates unde consequatur tempore
                    inventore minima a...
                  </div>
                  <button class="btn font-semibold text-primary-500 uppercase flex m-auto py-6 group-hover:underline svelte-r5pdte">
                    read more
                  </button>
                </div>
              </a>
              <a
                href="/blog/article"
                class="post group hover:shadow-xl transition duration-300 ease-in-out svelte-r5pdte"
              >
                <div class="img-wrapper overflow-hidden svelte-r5pdte">
                  <img
                    src={placeholder1}
                    alt=""
                    class="transition duration-300 ease-in-out group-hover:scale-110 svelte-r5pdte"
                  />
                </div>
                <div class="my-4 svelte-r5pdte">
                  <div class="tags flex justify-center">
                    <span class="tag badge hover:variant-soft-primary variant-ringed-primary rounded-none align-middle svelte-1t48heh">
                      Blog
                    </span>
                  </div>
                </div>
                <div class="post-content svelte-r5pdte">
                  <h5 class="post-title text-2xl group-hover:text-primary-500 svelte-r5pdte">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h5>
                  <div class="post-text text-center svelte-r5pdte">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Labore sit voluptates unde consequatur tempore
                    inventore minima a...
                  </div>
                  <button class="btn text-primary-500 uppercase font-semibold flex m-auto py-6 group-hover:underline svelte-r5pdte">
                    read more
                  </button>
                </div>
              </a>
              <a
                href="/blog/article"
                class="post group hover:shadow-xl transition duration-300 ease-in-out svelte-r5pdte"
              >
                <div class="img-wrapper overflow-hidden svelte-r5pdte">
                  <img
                    src={placeholder2}
                    alt=""
                    class="transition duration-300 ease-in-out group-hover:scale-110 svelte-r5pdte"
                  />
                </div>
                <div class="my-4 svelte-r5pdte">
                  <div class="tags flex justify-center">
                    <span class="tag badge hover:variant-soft-primary variant-ringed-primary rounded-none align-middle svelte-1t48heh">
                      Media
                    </span>
                    <span class="tag badge hover:variant-soft-primary variant-ringed-primary rounded-none align-middle svelte-1t48heh">
                      Business
                    </span>
                  </div>
                </div>
                <div class="post-content svelte-r5pdte">
                  <h5 class="post-title text-2xl group-hover:text-primary-500 svelte-r5pdte">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h5>
                  <div class="post-text text-center svelte-r5pdte">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Labore sit voluptates unde consequatur tempore
                    inventore minima a...
                  </div>
                  <button class="btn font-semibold text-primary-500 uppercase flex m-auto py-6 group-hover:underline svelte-r5pdte">
                    read more
                  </button>
                </div>
              </a>
            </div>
            <div class="text-center mt-6 svelte-r5pdte">
              <a
                href="/blog"
                class="items-center gap-1 btn variant-filled-primary font-bold text-xl my-8 svelte-r5pdte"
              >
                View more{" "}
                <span class="svelte-r5pdte">
                  <svg viewBox="0 0 24 24" width="1em" height="1em">
                    <path
                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
        <button class="btn fixed bottom-5 variant-filled-primary right-10 svelte-fzcmgy">
          <span>Back to top</span>
          <span>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path d="M1,21H23L12,2" fill="currentColor"></path>
            </svg>
          </span>
        </button>
        <section class="bg-primary-500 py-16">
          <div class="container">
            <div class="card bg-primary-500 xs:py-0 py-14 text-white font-light ring-0">
              <header class="modal-header pb-8 text-center">
                <h5 class="small-title-w text-xl uppercase mb-4">
                  Let’s talk about how we can help!
                </h5>
                <h3 class="xs:mb-0 text-3xl font-bold mb-10">
                  Be ready for any challenge with our adaptable business
                  solutions.
                </h3>
              </header>
              <form action="">
                <article class="modal-body font-light xs:hidden sm:block">
                  <div class="row flex gap-24">
                    <div class="col-6">
                      <label class="label svelte-zwwb9g">
                        <span>Name</span>
                        <input
                          class="input svelte-zwwb9g"
                          type="text"
                          placeholder="Name"
                        />
                      </label>
                      <label class="label svelte-zwwb9g">
                        <span>Organization</span>
                        <input
                          class="input svelte-zwwb9g"
                          type="text"
                          placeholder="Organization"
                        />
                      </label>
                      <label class="label svelte-zwwb9g">
                        <span>Select</span>
                        <select class="select rounded text-tertiary-400 svelte-zwwb9g">
                          <option value="1" class="svelte-zwwb9g">
                            Option 1
                          </option>
                          <option value="2" class="svelte-zwwb9g">
                            Option 2
                          </option>
                          <option value="3" class="svelte-zwwb9g">
                            Option 3
                          </option>
                          <option value="4" class="svelte-zwwb9g">
                            Option 4
                          </option>
                          <option value="5" class="svelte-zwwb9g">
                            Option 5
                          </option>
                        </select>
                      </label>
                    </div>
                    <div class="col-6">
                      <label class="label svelte-zwwb9g">
                        <span>Email</span>
                        <input
                          class="input svelte-zwwb9g"
                          type="text"
                          placeholder="Email"
                        />
                      </label>
                      <label class="label svelte-zwwb9g">
                        <span>Contact Number</span>
                        <input
                          class="input svelte-zwwb9g"
                          type="text"
                          placeholder="Contact Number"
                        />
                      </label>
                      <label class="label svelte-zwwb9g">
                        <span>Select</span>
                        <select class="select rounded text-tertiary-400 svelte-zwwb9g">
                          <option value="1" class="svelte-zwwb9g">
                            Option 1
                          </option>
                          <option value="2" class="svelte-zwwb9g">
                            Option 2
                          </option>
                          <option value="3" class="svelte-zwwb9g">
                            Option 3
                          </option>
                          <option value="4" class="svelte-zwwb9g">
                            Option 4
                          </option>
                          <option value="5" class="svelte-zwwb9g">
                            Option 5
                          </option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <label class="label svelte-zwwb9g">
                    <span>Message</span>
                    <textarea
                      class="textarea text-tertiary-400 rounded svelte-zwwb9g"
                      rows="4"
                      placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    ></textarea>
                  </label>
                </article>
                <article class="modal-body mobile-version sm:hidden">
                  <div class="container px-0">
                    <label class="label svelte-zwwb9g">
                      <span>Name</span>
                      <input
                        class="input svelte-zwwb9g"
                        type="text"
                        placeholder="Name"
                      />
                    </label>
                    <label class="label svelte-zwwb9g">
                      <span>Email</span>
                      <input
                        class="input svelte-zwwb9g"
                        type="text"
                        placeholder="Email"
                      />
                    </label>
                    <label class="label svelte-zwwb9g" />
                    <span>Contact Number</span>
                    <input
                      class="input svelte-zwwb9g"
                      type="text"
                      placeholder="Contact Number"
                    />
                    <label class="label svelte-zwwb9g" />
                    <span>Organization</span>
                    <input
                      class="input svelte-zwwb9g"
                      type="text"
                      placeholder="Organization"
                    />
                    <label class="label svelte-zwwb9g">
                      <span>Select</span>
                      <select class="select rounded text-tertiary-400 svelte-zwwb9g">
                        <option value="1" class="svelte-zwwb9g">
                          Option 1
                        </option>
                        <option value="2" class="svelte-zwwb9g">
                          Option 2
                        </option>
                        <option value="3" class="svelte-zwwb9g">
                          Option 3
                        </option>
                        <option value="4" class="svelte-zwwb9g">
                          Option 4
                        </option>
                        <option value="5" class="svelte-zwwb9g">
                          Option 5
                        </option>
                      </select>
                    </label>
                    <label class="label svelte-zwwb9g">
                      <span>Select</span>
                      <select class="select rounded text-tertiary-400 svelte-zwwb9g">
                        <option value="1" class="svelte-zwwb9g">
                          Option 1
                        </option>
                        <option value="2" class="svelte-zwwb9g">
                          Option 2
                        </option>
                        <option value="3" class="svelte-zwwb9g">
                          Option 3
                        </option>
                        <option value="4" class="svelte-zwwb9g">
                          Option 4
                        </option>
                        <option value="5" class="svelte-zwwb9g">
                          Option 5
                        </option>
                      </select>
                    </label>
                    <label class="label svelte-zwwb9g">
                      <span>Message</span>
                      <textarea
                        class="textarea text-tertiary-400 rounded svelte-zwwb9g"
                        rows="4"
                        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                      ></textarea>
                    </label>
                  </div>
                </article>
                <footer class="modal-footer">
                  <button class="btn mt-6 cursor-pointer uppercase variant-ghost-surface hover:variant-filled-primary text-white py-2 flex ml-auto btn-xl">
                    <span>Send</span>
                    <span class="icon">
                      <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path
                          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </footer>
              </form>
            </div>
          </div>
        </section>
      </div>

      <footer class="xs:flex xs:flex-col-reverse">
        <div class="upper xs:pb-14 bg-primary-50">
          <div class="container xs:h-[110px] h-[80px] text-primary-50">
            <div class="flex xs:flex-col xs:justify-center h-full justify-between">
              <ul class="flex xs:justify-center xs:pb-2 xs:gap-4 gap-9 svelte-1eir9q0">
                <li class="social-icon-li blue svelte-1eir9q0">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link-b svelte-1eir9q0"
                  >
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <path
                        d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="social-icon-li blue svelte-1eir9q0">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link-b svelte-1eir9q0"
                  >
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <path
                        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="social-icon-li blue svelte-1eir9q0">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link-b svelte-1eir9q0"
                  >
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <path
                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <ul class="flex items-center">
                <li class="text-primary-500 font-semibold">
                  ©2023 Officemotive 2023, all rights reserved
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="main bg-secondary-500 pt-10 xs:pb-4 pb-16">
          <div class="container xs:flex-col footer-main flex justify-between svelte-1eir9q0">
            <ul class="svelte-1eir9q0">
              <h5 class="small-title-blue">
                <a href="" class="svelte-1eir9q0">
                  Services
                </a>
              </h5>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Process Design
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Implementation
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Administration
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Systems and Software
                </a>
              </li>
            </ul>
            <ul class="svelte-1eir9q0">
              <h5 class="small-title-blue">
                <a href="" class="svelte-1eir9q0">
                  Insights
                </a>
              </h5>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  lorem
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  lorem
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  lorem
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  lorem
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  lorem
                </a>
              </li>
            </ul>
            <ul class="svelte-1eir9q0">
              <h5 class="small-title-blue">
                <a href="" class="svelte-1eir9q0">
                  Industries
                </a>
              </h5>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Insurance
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Retail
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Education
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Banking
                </a>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Curch and Ministry
                </a>
              </li>
            </ul>
            <ul class="svelte-1eir9q0">
              <h5 class="small-title-blue">
                <a href="" class="svelte-1eir9q0">
                  About Us
                </a>
              </h5>
              <h5 class="small-title-blue">
                <a href="" class="svelte-1eir9q0">
                  Blog
                </a>
              </h5>
              <h5 class="small-title-blue">
                <a href="" class="svelte-1eir9q0">
                  Solutions
                </a>
              </h5>
              <h5 class="small-title-blue">
                <a href="" class="svelte-1eir9q0">
                  Consulting
                </a>
              </h5>
            </ul>
            <ul class="justify-evenly xs:py-8 py-0 svelte-1eir9q0">
              <li class="svelte-1eir9q0">
                <div class="logo flex">
                  <a
                    href="/"
                    class="logo-link flex justify-center svelte-1eir9q0"
                  >
                    <img
                      src={Logo2}
                      class="xs:max-w-[240px] xl:max-w-[320px] object-contain cursor-pointer"
                      alt="Officemotive Logo"
                    />
                  </a>
                </div>
              </li>
              <li class="svelte-1eir9q0">
                <a href="" class="svelte-1eir9q0">
                  Adress Lorem ipsum dolor sit amet consectetur adipisicing
                  elit{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default Home
