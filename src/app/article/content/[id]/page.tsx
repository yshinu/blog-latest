import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'github-markdown-css/github-markdown-light.css';
import { Card, CardBody } from '@nextui-org/card';
import { getPostbyId } from '@/action/getPostsAction';

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const postId = +params.id;
  if (Number.isNaN(postId)) {
    return <>非法请求</>;
  }
  const post = await getPostbyId(postId);
  return (
    <Card className="  max-w-[900px] my-10 sm:p-4 p-1 w-full mx-3 sm:w-5/6">
      <CardBody>
        <div className="markdown-body">
          <Markdown
            remarkPlugins={[remarkGfm]}
            children={JSON.parse(`{"post":"${post?.content||"暂无内容"}"}`).post}
            components={{
              h1: ({ children, className, ...props }) => (
                <h1
                  className={`${className} text-4xl font-bold text-purple-300 leading-tight mb-6 tracking-wide`}
                  {...props}
                >
                  {children}
                </h1>
              ),
              h2: ({ children, className, ...props }) => (
                <h2
                  className={`${className} text-3xl font-semibold text-purple-300 leading-snug mb-5 tracking-wide`}
                  {...props}
                >
                  {children}
                </h2>
              ),
              h3: ({ children, className, ...props }) => (
                <h3
                  className={`${className} text-2xl font-medium text-purple-300 leading-snug mb-4 tracking-normal`}
                  {...props}
                >
                  {children}
                </h3>
              ),
              h4: ({ children, className, ...props }) => (
                <h4
                  className={`${className} text-xl font-medium text-purple-300 leading-snug mb-3 tracking-normal`}
                  {...props}
                >
                  {children}
                </h4>
              ),
              h5: ({ children, className, ...props }) => (
                <h5
                  className={`${className} text-xl font-medium text-purple-300 leading-snug mb-2 tracking-tight`}
                  {...props}
                >
                  {children}
                </h5>
              ),
              h6: ({ children, className, ...props }) => (
                <h6
                  className={`${className} text-lg font-medium text-purple-300 leading-snug mb-2 tracking-tight`}
                  {...props}
                >
                  {children}
                </h6>
              ),
              p: ({ children, className, ...props }) => (
                <p
                  className={`${className} text-base text-gray-700 leading-relaxed mb-4 font-sans`}
                  {...props}
                >
                  {children}
                </p>
              ),           
               code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  //@ts-ignore
                  <SyntaxHighlighter
                    {...rest}
                    className="text-base "
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
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
