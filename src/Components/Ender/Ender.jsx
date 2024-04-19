export default function Ender({title, desc}){
    return (
        <div className="">
            <h2 className="text-[#101828] text-[18px] font-[500]">{title}</h2>
            <p className="text-[#969696] text-[14px] mt-[9px]">{desc[0]}</p>
            <p className="text-[#969696] text-[14px] mt-[10px]">{desc[1]}</p>
            <p className="text-[#969696] text-[14px] mt-[10px]">{desc[2]}</p>
            <p className="text-[#969696] text-[14px] mt-[10px]">{desc[3]}</p>
            <p className="text-[#969696] text-[14px] mt-[10px]">{desc[4]}</p>
        </div>
    )
}