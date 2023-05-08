import {Html,Head,Main,NextScript} from 'next/document'

export const glbl={
  _height:'30px',
  _width:'250px',
  _img_height:'200px',
  _field_height:'120px',
  _green_color:'#5fff33',
  _gradient:'linear-gradient(0deg,#5fff33 10%,#36c20f 31%,#36c20f 50%)',
  _yellow_color:'#fff625',
}

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