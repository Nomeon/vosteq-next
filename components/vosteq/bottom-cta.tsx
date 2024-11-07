export default function BottomCta(props: {
  titel: string;
  paragraph: string;
}) {
  return (
    <div className='bg-paars w-full'>
      <div className='container py-20'>
        <div className='w-full flex flex-col items-center text-center gap-8'>
          <h2 className='text-wit'>{props.titel}</h2>
          <p className='text-wit'>{props.paragraph}</p>
          <div>
            <button className='btn-solid'>Neem contact op</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BottomCta };