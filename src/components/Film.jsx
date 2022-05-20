const Film = ({className,original_title,title,director,description,src,alt}) => {
  return (
    <div className="flex justify-center gap-6 items-start mb-8">
      <img className="max-h-52 w-auto"  src={src} alt={alt} />
      <div className="infos max-h-52 max-w-md ">
        <h1 className="text-xl">{title}</h1>
        <h3 className="font-thin text-lg">{original_title}</h3>
        <h4 className=" text-base font-normal ">{director}</h4>
        <p className="font-light text-sm ">{description}</p>
      </div>
    </div>
  )
}

export default Film
