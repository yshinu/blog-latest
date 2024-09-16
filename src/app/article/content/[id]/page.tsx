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
            children={`# 如何学好nextjs`}
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
