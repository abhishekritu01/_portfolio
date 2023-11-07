const testimonials = [
    {
        body: 'Working with you was a fantastic experience. Your attention to detail and professionalism truly stood out. I will definitely hire you for future projects!',
        author: {
            name: 'Aman',
            handle: 'sarahj_freelancer',
            imageUrl: 'https://example.com/sarah_image.jpg',
        },
    },
    {
        body: 'I was impressed by the quality of your work. You delivered the project on time and exceeded my expectations. Highly recommended!',
        author: {
            name: 'Abhishek',
            handle: 'john_freelancepro',
            imageUrl: 'https://example.com/john_image.jpg',
        },
    },
]
const Testimonials = () => {
    return (
       <>
           <div className=" py-24 sm:py-32">
               <div className="mx-auto max-w-7xl px-6 lg:px-8">
                   <div className="mx-auto max-w-xl text-center">
                       <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
                       <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                           We have worked with thousands of amazing people
                       </p>
                   </div>
                   <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                       <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                           {testimonials.map((testimonial) => (
                               <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                   <figure className="rounded-2xl shadow-2xl p-8 text-sm leading-6 ">
                                       <blockquote className="text-gray-100 ">
                                           <p>{`“${testimonial.body}”`}</p>
                                       </blockquote>
                                       <figcaption className="mt-6 flex items-center gap-x-4">
                                           <img className="h-10 w-10 rounded-full " src={testimonial.author.imageUrl} alt="" />
                                           <div>
                                               <div className="font-semibold text-gray-100">{testimonial.author.name}</div>
                                               {/*<div className="text-gray-200">{`@${testimonial.author.handle}`}</div>*/}
                                           </div>
                                       </figcaption>
                                   </figure>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
       </>
    )
}
export default Testimonials;