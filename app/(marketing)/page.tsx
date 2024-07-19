import Link from 'next/link'
import { Button, buttonVariants} from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { siteConfig } from '@/config/site';

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
          href={siteConfig.links.x} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">xをフォローする</Link>
          <h1 className='font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text7xl'>Post Writer</h1>
          <p className='text-muted-foreground sm:text-xl leading-normal max-w-[42rem]'>
            このアプリケーションはNext.js
            AppRouterで作られたものです。ユーザーは自由に投稿をポストする事ができます。
          </p>
          <div className='space-x-4'>
            <Link
            href={"/login"}
            className={cn(buttonVariants({size: "lg"}))}
            >
              はじめる
            </Link>
            <Link
            href={siteConfig.links.github}
            className={cn(buttonVariants({size: "lg", variant: "outline"}))}
            target="_blank"
            rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>

      <section id="features"
      className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">このプロジェクトはモダンな技術スタックを使って作られたwebアプリケーションです。Next.jsaAppRouterやcontentlayerを利用してマークダウン形式でブログが投稿ができます。
          </p>
        </div>
          <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 128 128"
                  >
                  <path
                  d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20l-26 37.5l13.4 18.4h-2.7L70.4 65L58.2 81.8h-2.6l13.5-18.4l-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8l-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8s-.8.3-.8.8s.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2c1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3c-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1c0-.7.6-1.2 1.6-1.2c.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2c-1.7 0-2.8.9-2.8 2.3c0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2c0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z"/>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">
                    AppRouter/Layouts/APIRoutesの技術を使用。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6  h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
                >
                <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"/>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z"/>
                </g>
              </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">React</h3>
                  <p className="text-sm text-muted-foreground">
                    React,usestate,useeffectなどのhooksを使用。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                  height="45"
                  viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect width="256" height="256" fill="#242938" rx="60"/>
                      <path fill="url(#skillIconsTailwindcssDark0)" fill-rule="evenodd" d="M83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110Zm-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5Z" clip-rule="evenodd"/>
                      <defs>
                          <linearGradient id="skillIconsTailwindcssDark0" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#32B1C1"/>
                              <stop offset="1" stop-color="#14C6B7"/>
                          </linearGradient>
                      </defs>
                  </g>
              </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">TailwindCSS</h3>
                  <p className="text-sm text-muted-foreground">
                    TailwindCSSを装飾に使用。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6  h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                  viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"/>
              </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Shadcn/ui</h3>
                  <p className="text-sm text-muted-foreground">
                  Shadcn/ui componentを使用。
                  </p>
                </div>
              </div>
            </div>
{/* typescript */}
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6  h-[180px]">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 256 256"
                  >

                  <path fill="#3178C6" d="M128 0c70.692 0 128 57.308 128 128c0 70.692-57.308 128-128 128C57.308 256 0 198.692 0 128C0 57.308 57.308 0 128 0Z"/>
                  <path fill="#FFF" d="M140.463 160.712v25.03c4.017 2.086 8.767 3.651 14.25 4.694c5.484 1.043 11.264 1.564 17.34 1.564c5.921 0 11.547-.574 16.876-1.721c5.329-1.147 10.002-3.037 14.018-5.671c4.016-2.633 7.196-6.075 9.539-10.325c2.343-4.25 3.514-9.503 3.514-15.761c0-4.537-.669-8.513-2.008-11.929a27.928 27.928 0 0 0-5.793-9.112c-2.523-2.66-5.548-5.045-9.075-7.157c-3.527-2.112-7.505-4.107-11.933-5.984c-3.244-1.356-6.153-2.673-8.728-3.95c-2.574-1.278-4.762-2.581-6.565-3.911c-1.802-1.33-3.192-2.738-4.17-4.224c-.979-1.486-1.468-3.168-1.468-5.045c0-1.721.438-3.272 1.313-4.654c.876-1.382 2.111-2.569 3.707-3.56c1.597-.99 3.553-1.76 5.87-2.307c2.317-.547 4.892-.821 7.724-.821c2.06 0 4.235.156 6.526.47c2.292.312 4.596.794 6.913 1.446a47.66 47.66 0 0 1 6.758 2.464a37.143 37.143 0 0 1 6.063 3.442V80.302c-3.759-1.46-7.865-2.542-12.319-3.246c-4.454-.704-9.564-1.056-15.331-1.056c-5.87 0-11.431.639-16.683 1.916c-5.252 1.278-9.873 3.273-13.864 5.984c-3.991 2.712-7.144 6.166-9.461 10.364S140 103.481 140 109.322c0 7.457 2.124 13.818 6.372 19.085c4.248 5.267 10.697 9.726 19.348 13.376a260.147 260.147 0 0 1 9.5 4.146c2.934 1.355 5.47 2.763 7.607 4.223c2.137 1.461 3.823 3.051 5.059 4.772c1.236 1.721 1.854 3.676 1.854 5.866a9.06 9.06 0 0 1-1.159 4.498c-.772 1.382-1.943 2.581-3.514 3.598c-1.57 1.017-3.527 1.812-5.87 2.386c-2.343.573-5.085.86-8.225.86c-5.355 0-10.659-.952-15.911-2.855c-5.252-1.903-10.118-4.758-14.598-8.565Zm-42.752-62.17H130V78H40v20.541h32.132V190H97.71V98.541Z"/>
              </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Typescript</h3>
                  <p className="text-sm text-muted-foreground">
                    Typescriptの技術を使用。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 128 128"
                  >
                  <path
                  d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20l-26 37.5l13.4 18.4h-2.7L70.4 65L58.2 81.8h-2.6l13.5-18.4l-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8l-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8s-.8.3-.8.8s.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2c1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3c-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1c0-.7.6-1.2 1.6-1.2c.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2c-1.7 0-2.8.9-2.8 2.3c0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2c0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z"/>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">
                    AppRouter/Layouts/APIRoutesの技術を使用。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto md:max-w-[58rem] text-center">
              <p className="text-muted-foreground sm:text-lg sm:leading-7">
                Post Writerはログインするとブログ投稿ができるようになります。
              </p>
          </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            もしもwebサービスが気に入った場合は下記XからDMでご連絡ください。
            <br />
          お仕事のご連絡をお待ちしております。
          </p>
          <Link
          href={siteConfig.links.x}
          className="underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  );
}
