import {Html,Head,Main,NextScript} from 'next/document'

export default function Document(){
  return (
    <Html lang="pl">
      <Head/>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}

export const order=[
  {value:'cheapest',text:'from the cheapest'},
  {value:'expensive',text:'from the most expensive'},
  {value:'AtoZ',text:'A to Z'},
  {value:'ZtoA',text:'Z to A'},
  {value:'quantityDsc',text:'quantity descending'},
  {value:'quantityAsc',text:'quantity ascending'}
];
export const types=['all','sport','casual'];
export const sexes=['All','Man','Woman'];