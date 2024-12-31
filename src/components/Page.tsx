import { useState } from 'react'
import MarkdownInput from './MarkdownInput'
import MarkdownPreview from './MarkdownPreview'

const initialMarkdown = `# Markdown Test
This is a paragraph with **bold** and *italic* text. It also has a [link](https://www.google.com). This is a good way to test out the editor, and it's also a good way to test out the preview.

The BenQ monitor is a 4:3 LCD monitor with a resolution of 1920x1080 pixels. Sadly it
does not have more than 60hz refresh rate, this makes it useless for all tasks, because all tasks require at least 120hz. BenQ did this on purpose, to make us suffer.

In the following example, two layers are created with no rules applied, then CSS rules are applied to the two layers. The base layer defines a \`color\`, \`border\`, \`font-size\`, and \`padding\`. The special layer defines a different color. As special comes last when the layers were defined, the color it provides is used and the text is displayed using \`rebeccapurple\`. All of the other rules from base still apply.
## Lists

1. First item
2. Second item
3. Third item

- Unordered item 1
- Unordered item 2
- Unordered item 3

## Links and Images

[Visit OpenAI](https://www.openai.com)

![Placeholder Image](https://via.placeholder.com/150)

## Code

Inline \`code\` looks like this.

This is a full code block:
\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet('World');
\`\`\`

## Horizontal Rule

---

## Blockquotes

> This is a blockquote.
> It can span multiple lines.
`

export default function Home() {
  const [markdown, setMarkdown] = useState(initialMarkdown)
  const [theme, setTheme] = useState('default')

  const ThemeSelector = (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="border rounded-lg p-2">
      <option value="default">Default Theme</option>
      <option value="bold">Bold Theme</option>
    </select>
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Markdown Editor with Themes</h1>
      <div className="mb-4">
        {ThemeSelector}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Editor</h2>
          <MarkdownInput value={markdown} onChange={setMarkdown} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <MarkdownPreview markdown={markdown} theme={theme} />
        </div>
      </div>
    </div>
  )
}
