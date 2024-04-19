export default function Shops({img, company, title, price, skeed, star}){
    if(skeed == '0'){
        return (
            <div className="w-[255px] text-left h-[371px] rounded-[6px] border-solid border-[2px] border-color-['#E4E7EC]">
                <div className="flex justify-center items-center mt-[32px]">
                    <img className="text-center" src={img} alt="" />
                </div>
                <p className="text-[#576071] text-[14px] mt-[24px] ml-[15px]">{company}</p>
                <h1 className="ml-[15px] text-[#323A4B] text-[18px] mt-[4px] font-[600]">{title}</h1>
                <img className="ml-[15px] mt-[9px]" src={star} alt="" />
                <div className="flex justify-between items-center mt-[10px]">
                    <h3 className="text-[#006D77] text-[18px] font-[600] ml-[15px]">{price}</h3>
                    <button className="mr-[15px] text-[#006D77] bg-[#BEE1E6] w-[67px] h-[23px] rounded-[6px]"><pre>Add  +</pre></button>
                </div>
            </div>
        )    
    } else {
        return (
        <div className="relative w-[255px] text-left h-[371px] rounded-[6px] border-solid border-[2px] border-color-['#E4E7EC]">
            <div className="absolute top-[21px] left-[19px] rounded-[25px] flex items-center justify-center bg-[#101828] w-[39px] h-[15px] text-white text-[12px]">-{skeed}</div>
            <div className="flex justify-center items-center mt-[32px]">
                <img className="text-center" src={img} alt="" />
            </div>
            <p className="text-[#576071] text-[14px] mt-[24px] ml-[15px]">{company}</p>
            <h1 className="ml-[15px] text-[#323A4B] text-[18px] mt-[4px] font-[600]">{title}</h1>
            <img className="ml-[15px] mt-[9px]" src={star} alt="" />
            <div className="flex justify-between items-center mt-[10px]">
                <h3 className="text-[#006D77] text-[18px] font-[600] ml-[15px]">{price}</h3>
                <button className="mr-[15px] text-[#006D77] bg-[#BEE1E6] w-[67px] h-[23px] rounded-[6px]"><pre>Add  +</pre></button>
            </div>
        </div>
    )
    }
    
}