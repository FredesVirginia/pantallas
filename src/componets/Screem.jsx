
import { CSSTransition } from 'react-transition-group';
import Header from './partials/Header';

export default function Screem({ color , title, description, content }) {
  return (
    <div className="w-full borde p-4 rounded-full  " >
   
       <div className="flex flex-col h-[580px]  text-center rounded-3xl  bg-slate-200 space-y-2">
       <Header color={color}/>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
      <div>{content}</div>
    </div>
    </div>
  )
}
