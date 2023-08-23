
export function Logo() {
  return <div className="flex items-center gap-4">
    <img className="rounded-full h-10" src="face.png" alt="" />
    <div>
      <span className="block leading-tight">Nathan Pointer</span>
      <span className="block leading-tight text-xs text-muted-foreground opacity-70">Web developer</span>
    </div>
  </div>;
}
