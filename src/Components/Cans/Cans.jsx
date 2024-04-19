export default function Cans({color, img, title, desc}){
    return (
        <div style={{backgroundColor: color}} className="w-[285px] h-[320px] flex justify-center items-center rounded-[8px]">
            <div className="flex justify-center flex-col items-center w-[163px]">
                <img src={img} alt="" />
                <h1 className="mt-[10px] text-[32px] text-[#1E2534] font-[500]">{title}</h1>
                <p className="mt-[30px] text-[16px] text-[#667085] font-[400]">{desc}</p>
            </div>
        </div>
    )
}