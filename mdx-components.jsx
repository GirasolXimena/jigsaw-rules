// import type { MDXComponents } from 'mdx/types'
import JigsawSpiralHr from 'public/images/jigsaw_spiral_divider.svg';
import Image from 'next/image';
 
// const components: MDXComponents = {
//   h1: (props) => <h1 className="text-4xl font-bold text-red-500 text-shadow-lg" {...props} />,
// }
 
// export function useMDXComponents(): MDXComponents {
//   return components
// }



const components = {
  h1: (props) => <h1 className="text-4xl font-bold text-red-500 text-shadow-lg" {...props} />,
  hr: (props) => <>
  <hr style={{
    height: '64px',
    backgroundImage: 'url(/images/jigsaw_spiral_divider.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: 'none',
    margin: '16px 0',
    '--accent': 'green'


  }} className="border-t-2 border-red-700 my-2" {...props} />
  </>,
}
 
export function useMDXComponents() {
  return components
}
