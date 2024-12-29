import ReactMarkdown from 'react-markdown'

interface MarkdownPreviewProps {
  markdown: string
}

export default function MarkdownPreview({ markdown }: MarkdownPreviewProps) {
  return (
    <div className={`p-4 border rounded-lg overflow-auto h-[400px]`}>
      <div className="prose">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}
