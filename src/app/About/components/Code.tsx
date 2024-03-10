// Tailwind
const Container = 'p-10 ml-[5%] w-[95%] h-full border-l border-slate-900 flex flex-col justify-center items-center text-xs'
const Text = 'w-4/5 h-1/5 text-xs text-slate-500 flex justify-center items-center'
const CodeStyle = 'pl-5 w-full h-4/5 xl:text-xs text-[8px] flex flex-col justify-center items-center border border-slate-900 bg-neutral-950 rounded-2xl overflow-hidden'

const Code = () => {
  return (
    <div className={Container}>
      <p className={Text}>{'//'} Code snippet showcase:</p>
      <div className={CodeStyle}>
        <div className='w-auto h-auto'>
          <p><span className='text-pink-500'>const</span>{' '}<span className='text-green-500'>handleTabClick</span>{' '}<span className='text-pink-500'>=</span>{' '}<span className='text-violet-400'>(</span><span className='text-orange-500'>item</span><span className='text-pink-500'>:</span>{' '}<span className='text-violet-500'>Ingredient</span><span className='text-violet-400'>)</span>{' '}<span className='text-pink-500'>{'=>'}</span>{' '}<span className='text-violet-400'>{'{'}</span></p>
          <p>&nbsp;&nbsp;<span className='text-green-500'>setSelectedTab</span><span className='text-blue-500'>{'('}</span>item<span className='text-blue-500'>{')'}</span>;</p>
          <p>&nbsp;&nbsp;<span className='text-pink-500'>switch</span>{' '}<span className='text-blue-500'>{'('}</span>item.label<span className='text-blue-500'>{'('}</span>{' '}<span className='text-blue-500'>{'{'}</span></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>case</span>{' '}<span className='text-yellow-500'>&ldquo;Bio&ldquo;</span>:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-green-500'>setSelectedComponent</span><span className='text-yellow-500'>{'('}</span>{'<'}<span className='text-violet-500'>BioComponent</span>{' '}{'/>'}<span className='text-yellow-500'>{')'}</span>;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>break</span>;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>case</span>{' '}<span className='text-yellow-500'>&ldquo;Education&ldquo;</span>:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-green-500'>setSelectedComponent</span><span className='text-yellow-500'>{'('}</span>{'<'}<span className='text-violet-500'>EducationComponent</span>{' '}{'/>'}<span className='text-yellow-500'>{')'}</span>;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>break</span>;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>case</span>{' '}<span className='text-yellow-500'>&ldquo;Professional&ldquo;</span>:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-green-500'>setSelectedComponent</span><span className='text-yellow-500'>{'('}</span>{'<'}<span className='text-violet-500'>ProfessionalComponent</span>{' '}{'/>'}<span className='text-yellow-500'>{')'}</span>;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>break</span>;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>case</span>{' '}<span className='text-yellow-500'>&ldquo;Hobbies&ldquo;</span>:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-green-500'>setSelectedComponent</span><span className='text-yellow-500'>{'('}</span>{'<'}<span className='text-violet-500'>HobbiesComponent</span>{' '}{'/>'}<span className='text-yellow-500'>{')'}</span>;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>break</span>;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-pink-500'>default</span>:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-green-500'>setSelectedComponent</span><span className='text-yellow-500'>{'('}</span><span className='text-teal-400'>null</span><span className='text-yellow-500'>{')'}</span>;</p>
          <p className='text-blue-500'>&nbsp;&nbsp;{'}'}</p>
          <p><span className='text-violet-400'>{'}'}</span>;</p>
        </div>   
      </div>
    </div>
  )
}

export default Code