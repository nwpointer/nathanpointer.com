export function Topic({ color = "blue", children }: { color?: string; children: any; }) {
  return <div className={`bg-${color}-600 dark:bg-opacity-40 text-white border border-${color}-600 border-opacity-25 inline-block px-4 py-1 rounded-full text-sm  mb-4 mr-2`}>{children}</div>;
}
