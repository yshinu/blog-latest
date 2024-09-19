import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "github-markdown-css/github-markdown-light.css";
import { Card, CardBody } from "@nextui-org/card";

const page = () => {
  return (
    <Card className=" max-w-[900px] w-full mx-3 sm:w-5/6">
      <CardBody>
        <div className="markdown-body">
          <Markdown
            remarkPlugins={[remarkGfm]}
            children={`# 如何学好nextjs
              
              Next.js 是一个基于 React 的强大框架，专注于构建高性能和可扩展的
                Web
                应用程序。它提供了许多开箱即用的功能，如服务器端渲染（SSR）、静态生成（SSG）、API
                路由和自动代码拆分，使开发者能够快速构建现代化的用户界面。 Web
                应用程序。它提供了许多开箱即用的功能，如服务器端渲染（SSR）、静态生成（SSG）、API
                路由和自动代码拆分，使开发者能够快速构建现代化的用户界面。 Web
                应用程序。它提供了许多开箱即用的功能，如服务器端渲染（SSR）、静态生成（SSG）、API
                路由和自动代码拆分，使开发者能够快速构建现代化的用户界面。
              `}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  //@ts-ignore
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={atomOneDark}
                    showLineNumbers
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default page;
