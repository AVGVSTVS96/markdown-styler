interface MarkdownInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MarkdownInput({ value, onChange }: MarkdownInputProps) {
  return (
    <textarea
      className="w-full h-[400px] lg:h-[600px] p-2 border rounded-lg"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
