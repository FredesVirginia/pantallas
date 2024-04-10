



export default function Screem({ title, description, content }) {
  return (
    <div>
       <div className="flex flex-col justify-center items-center p-2 bg-slate-200 space-y-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
      <div>{content}</div>
    </div>
    </div>
  )
}
