import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownPreviewProps {
  markdown: string;
  theme: string;
}

export default function MarkdownPreview({
  markdown,
  theme,
}: MarkdownPreviewProps) {
  return (
    <div
      className={`p-4 border rounded-lg overflow-auto h-[400px] lg:h-[600px]`}
    >
      <div id="printArea" className="prose prose-zinc dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[gfm]}
          className={`reactMarkdown ${theme}`}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
