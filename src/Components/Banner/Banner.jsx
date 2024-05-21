import React from 'react'
import Apple from '../../assets/apple.png'
import kiwi from '../../assets/kiwi.png'
import lemon from '../../assets/lemon.png'
import leaf from '../../assets/leaf.png'
import Tomato from '../../assets/tomato.png'
import PrimaryButton from '../Shared/PrimaryButton'
const Banner = () => {
  return (
    <div className='container py-14 relative'>
<div className='relative z-20'>
<h1 data-aos = "fade-up" data-aos-delay = "300" className='py-8 tracking-wider text-2xl font-semibold text-dark text-center'>Taste the Healthy Difference</h1>
{/* Content Section */}
<div data-aos = "fade-up" data-aos-delay = "500" className='space-y-10'>
<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
<div>
<p>
{" "}
We Know that <span className='text-primary'>time </span>
is the greatest value in the modern World.
Our healthy meal plan delivery service Good Food in 
Miami is the answe for  those who want to eat healthiy
,Saving time for buying food and preparing delicious,
healthy meals. 
</p>
</div>
<div></div>
</div>

<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
<div></div>
<div>
<p>
{" "}
We Know that <span className='text-primary'>time </span>
is the greatest value in the modern World.
Our healthy meal plan delivery service Good Food in 
Miami is the answe for  those who want to eat healthiy
,Saving time for buying food and preparing delicious,
healthy meals. 
</p>
</div>
</div>
</div>

{/* Button Section------------------------ */}
<div data-aos = "fade-up" 
data-aos-delay = "500" 
data-aos-offset = "0" 
className='flex justify-center mt-10 sm:mt-14'>
<PrimaryButton/>
</div>
</div>
{/* bg--Fruits */}
<div 
data-aos = "fade-right" className='absolute top-5 -left-16 sm-bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
<img data-aos = "fade-right" src= {leaf} alt='' className='max-w-[160px]'/>
</div>
<div data-aos = "fade-left" className='absolute -bottom-16 -left-16 sm:bottom-0 opacity-50 sm:opacity-100'>
<img  src= {Tomato} alt='' className='max-w-[280px]'/>
</div>
<div data-aos = "fade-left" className='absolute top-10 right-16 sm:right-20 opacity-50
sm:opacity-100'>
<img  src= {lemon} alt=''/>
</div>
<div data-aos = "fade-left" className='hidden sm:block absolute bottom-0 right:0'>
<img  src= {Apple} alt='' className='max-w-{200px}'/>
</div>
<div data-aos = "fade-right" className='absolute top-1/2 translate-y-1/2 
left-1/3 translate-x-1/2 opacity:50 sm:opacity-100'>
<img  src= {kiwi} alt='' className='max-w-[180px]'/>
</div>
    </div>
  )
}

export default Banner