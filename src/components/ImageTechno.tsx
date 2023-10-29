type ImageTechnoProps = {
  source: string;
  alt: string;
  color: string;
  name: string;
};

export default function ImageTechno({
  source,
  alt,
  color,
  name,
}: ImageTechnoProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${color} w-[30px] flex items-center justify-center rounded-3xl  `}
      >
        <img width={30} src={source} alt={alt} className="object-cover " />
      </div>
      <p className="text-sm w-[50px] text-center mt-1">{name}</p>
    </div>
  );
}
