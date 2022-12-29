interface Props {
   url?: string;
}

export default function Trailer({ url }: Props) {
   return <iframe
      src={url}
      allowFullScreen={false}
      className='w-full h-[400px] mt-5 rounded-md shadow-md'
   />;
}